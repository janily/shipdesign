#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


def frontmatter_name(path: Path) -> str:
    text = path.read_text(errors="replace")
    match = re.search(r"^---\n.*?^name:\s*['\"]?([^'\"\n]+)", text, re.M | re.S)
    if not match:
        fail(f"missing name frontmatter: {path.relative_to(ROOT)}")
    return match.group(1).strip()


def main() -> None:
    manifest = json.loads((ROOT / "upstreams.json").read_text())
    lock_path = ROOT / "UPSTREAM_LOCK.json"
    if not lock_path.exists():
        fail("UPSTREAM_LOCK.json missing; run scripts/sync_upstreams.py")
    lock = json.loads(lock_path.read_text())

    expected = [m["destination"] for s in manifest["sources"] for m in s["mappings"]]
    names: dict[str, str] = {}
    for destination in ["shipdesign", *expected]:
        skill = ROOT / "skills" / destination / "SKILL.md"
        if not skill.exists():
            fail(f"missing skill: {destination}")
        name = frontmatter_name(skill)
        if name in names:
            fail(f"duplicate skill name {name}: {names[name]} and {destination}")
        names[name] = destination

    lock_ids = {s["id"] for s in lock["sources"]}
    manifest_ids = {s["id"] for s in manifest["sources"]}
    if lock_ids != manifest_ids:
        fail(f"lock/source mismatch: manifest={sorted(manifest_ids)} lock={sorted(lock_ids)}")

    for source in manifest["sources"]:
        license_path = ROOT / "licenses" / f"{source['id']}.LICENSE"
        if not license_path.exists():
            fail(f"missing upstream license: {license_path.name}")

    shipdesign = (ROOT / "skills/shipdesign/SKILL.md").read_text()
    sibling_refs = re.findall(r"`\.\./([^/]+)/SKILL\.md`", (ROOT / "skills/shipdesign/references/routing.md").read_text())
    for sibling in sibling_refs:
        if not (ROOT / "skills" / sibling / "SKILL.md").exists():
            fail(f"routing references missing sibling: {sibling}")

    if "Completion criterion:" not in shipdesign:
        fail("ShipDesign SKILL.md must define a completion criterion")

    print(f"OK: {1 + len(expected)} skills, {len(manifest_ids)} upstream sources, licenses present")


if __name__ == "__main__":
    main()
