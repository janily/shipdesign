#!/usr/bin/env python3
from __future__ import annotations

import json
import shutil
import subprocess
import tempfile
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "upstreams.json"
SKILLS = ROOT / "skills"
LICENSES = ROOT / "licenses"
LOCK = ROOT / "UPSTREAM_LOCK.json"


def run(*args: str, cwd: Path | None = None) -> str:
    result = subprocess.run(args, cwd=cwd, check=True, text=True, capture_output=True)
    return result.stdout.strip()


def copy_mapping(repo_dir: Path, mapping: dict) -> None:
    source = (repo_dir / mapping["source"]).resolve()
    destination = SKILLS / mapping["destination"]
    if destination.exists():
        shutil.rmtree(destination)
    destination.mkdir(parents=True, exist_ok=True)

    includes = mapping.get("include")
    if includes:
        for relative in includes:
            src = source / relative
            if not src.exists():
                raise FileNotFoundError(f"missing upstream file: {src}")
            dst = destination / relative
            dst.parent.mkdir(parents=True, exist_ok=True)
            if src.is_dir():
                shutil.copytree(src, dst)
            else:
                shutil.copy2(src, dst)
    else:
        if not (source / "SKILL.md").exists():
            raise FileNotFoundError(f"missing upstream SKILL.md: {source}")
        shutil.rmtree(destination)
        shutil.copytree(source, destination)

    if not (destination / "SKILL.md").exists():
        raise FileNotFoundError(f"synced skill missing SKILL.md: {destination}")


def previous_managed_state() -> tuple[set[str], set[str]]:
    if not LOCK.exists():
        return set(), set()
    previous = json.loads(LOCK.read_text())
    destinations = {
        mapping["destination"]
        for source in previous.get("sources", [])
        for mapping in source.get("mappings", [])
    }
    source_ids = {source["id"] for source in previous.get("sources", [])}
    return destinations, source_ids


def remove_stale_managed_files(
    previous_destinations: set[str],
    previous_source_ids: set[str],
    current_destinations: set[str],
    current_source_ids: set[str],
) -> None:
    for destination in sorted(previous_destinations - current_destinations):
        path = SKILLS / destination
        if path.exists():
            shutil.rmtree(path)
            print(f"removed stale skill: {destination}")

    for source_id in sorted(previous_source_ids - current_source_ids):
        path = LICENSES / f"{source_id}.LICENSE"
        if path.exists():
            path.unlink()
            print(f"removed stale license: {path.name}")


def main() -> None:
    manifest = json.loads(MANIFEST.read_text())
    previous_destinations, previous_source_ids = previous_managed_state()
    current_destinations = {
        mapping["destination"]
        for source in manifest["sources"]
        for mapping in source["mappings"]
    }
    current_source_ids = {source["id"] for source in manifest["sources"]}

    SKILLS.mkdir(exist_ok=True)
    LICENSES.mkdir(exist_ok=True)
    lock_sources = []

    with tempfile.TemporaryDirectory(prefix="shipdesign-upstreams-") as tmp:
        tmp_root = Path(tmp)
        for source in manifest["sources"]:
            repo = source["repo"]
            ref = source.get("ref", "main")
            repo_dir = tmp_root / source["id"]
            run("git", "clone", "--quiet", "--filter=blob:none", "--no-checkout", f"https://github.com/{repo}.git", str(repo_dir))
            run("git", "fetch", "--quiet", "--depth", "1", "origin", ref, cwd=repo_dir)
            run("git", "checkout", "--quiet", "--detach", "FETCH_HEAD", cwd=repo_dir)
            commit = run("git", "rev-parse", "HEAD", cwd=repo_dir)

            license_file = repo_dir / "LICENSE"
            if not license_file.exists():
                raise FileNotFoundError(f"{repo} has no root LICENSE")
            shutil.copy2(license_file, LICENSES / f"{source['id']}.LICENSE")

            for mapping in source["mappings"]:
                copy_mapping(repo_dir, mapping)

            lock_sources.append({
                "id": source["id"],
                "repo": repo,
                "requested_ref": ref,
                "resolved_commit": commit,
                "license": source["license"],
                "mappings": source["mappings"],
            })
            print(f"synced {source['id']} @ {commit[:12]}")

    # Only remove files that were managed by the previous lock, and only after
    # every current upstream finished syncing successfully.
    remove_stale_managed_files(
        previous_destinations,
        previous_source_ids,
        current_destinations,
        current_source_ids,
    )

    LOCK.write_text(json.dumps({
        "version": 1,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "sources": lock_sources,
    }, indent=2) + "\n")


if __name__ == "__main__":
    main()
