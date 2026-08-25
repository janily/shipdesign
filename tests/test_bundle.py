from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]

REQUIRED_OWNED = [
    "README.md",
    "README.zh-CN.md",
    "LICENSE",
    "CREDITS.md",
    "ARCHITECTURE.md",
    "upstreams.json",
    "skills/shipdesign/SKILL.md",
    "skills/shipdesign/references/routing.md",
    "skills/shipdesign/references/quality-gate.md",
    "skills/shipdesign/references/upstream-contract.md",
    "scripts/sync_upstreams.py",
    "scripts/verify_bundle.py",
    ".github/workflows/sync-upstreams.yml",
    ".github/workflows/verify-bundle.yml",
    "tests/skill-evals.md",
]

EXPECTED_DESTINATIONS = {
    "tastemaker",
    "web-design-engineer",
    "landing-page-design",
    "emil-design-eng",
    "animate",
    "video-to-superprompt",
    "build-awwwards-quality-sites",
    "cinematic-scroll-storytelling",
    "better-interface",
    "better-ui",
    "better-typography",
    "better-colors",
    "better-accessibility",
    "better-layout",
    "better-writing",
    "ux-psychology-skill",
}


def test_owned_files_exist():
    missing = [p for p in REQUIRED_OWNED if not (ROOT / p).exists()]
    assert not missing, f"missing owned files: {missing}"


def test_manifest_has_expected_upstream_skills():
    manifest = json.loads((ROOT / "upstreams.json").read_text())
    destinations = {
        mapping["destination"]
        for source in manifest["sources"]
        for mapping in source["mappings"]
    }
    assert destinations == EXPECTED_DESTINATIONS


def test_shipdesign_frontmatter_and_refs():
    text = (ROOT / "skills/shipdesign/SKILL.md").read_text()
    assert text.startswith("---\nname: shipdesign\n")
    assert "disable-model-invocation: true" in text
    refs = re.findall(r"references/([a-z0-9-]+\.md)", text)
    assert refs
    for ref in refs:
        assert (ROOT / "skills/shipdesign/references" / ref).exists(), ref


def test_orchestrator_names_all_quality_layers():
    text = (ROOT / "skills/shipdesign/SKILL.md").read_text().lower()
    for token in ["evidence", "direction", "build", "motion", "review", "quality gate"]:
        assert token in text


def test_sync_workflow_commits_untracked_mirrors():
    workflow = (ROOT / ".github/workflows/sync-upstreams.yml").read_text()
    assert "git status --porcelain" in workflow
