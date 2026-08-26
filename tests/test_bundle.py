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
    "skills/shipdesign/references/review-protocol.md",
    "skills/shipdesign/references/quality-gate.md",
    "skills/shipdesign/references/upstream-contract.md",
    "scripts/sync_upstreams.py",
    "scripts/verify_bundle.py",
    ".github/workflows/sync-upstreams.yml",
    ".github/workflows/verify-bundle.yml",
    "tests/skill-evals.md",
]

EXPECTED_UPSTREAM_REPOS = {
    "codeswithroh/tastemaker",
    "ConardLi/garden-skills",
    "elayadesign/ai-design-skills",
    "emilkowalski/skills",
    "MengTo/Skills",
    "jakubkrehel/skills",
    "Owl-Listener/designer-skills",
}

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
    "visual-hierarchy",
    "law-of-proximity",
    "law-of-similarity",
    "law-of-common-region",
    "law-of-continuity",
    "von-restorff-effect",
    "critique-visual-hierarchy",
    "critique-composition",
}


def load_manifest():
    return json.loads((ROOT / "upstreams.json").read_text())


def test_owned_files_exist():
    missing = [p for p in REQUIRED_OWNED if not (ROOT / p).exists()]
    assert not missing, f"missing owned files: {missing}"


def test_manifest_uses_exactly_the_seven_verified_upstreams():
    manifest = load_manifest()
    repos = {source["repo"] for source in manifest["sources"]}
    assert repos == EXPECTED_UPSTREAM_REPOS
    assert "vivaldi007/ux-psychology-skill" not in repos


def test_manifest_has_expected_upstream_skills():
    manifest = load_manifest()
    destinations = {
        mapping["destination"]
        for source in manifest["sources"]
        for mapping in source["mappings"]
    }
    assert destinations == EXPECTED_DESTINATIONS
    assert "ux-psychology-skill" not in destinations


def test_legacy_psychology_mirror_is_removed():
    assert not (ROOT / "skills/ux-psychology-skill").exists()


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


def test_review_protocol_runs_before_quality_scoring():
    text = (ROOT / "skills/shipdesign/SKILL.md").read_text().lower()
    assert "references/review-protocol.md" in text
    assert text.index("references/review-protocol.md") < text.index("references/quality-gate.md")


def test_review_protocol_requires_global_and_viewport_inspection():
    text = (ROOT / "skills/shipdesign/references/review-protocol.md").read_text().lower()
    for token in ["full-page", "desktop", "tablet", "mobile", "global composition", "section repetition"]:
        assert token in text


def test_review_protocol_requires_findings_before_score_and_critic_posture():
    text = (ROOT / "skills/shipdesign/references/review-protocol.md").read_text().lower()
    assert "findings before score" in text
    assert "critic" in text
    assert "do not defend" in text


def test_landing_review_guards_against_dogfood_failure_modes():
    text = (ROOT / "skills/shipdesign/references/review-protocol.md").read_text().lower()
    for token in ["three consecutive", "cta", "contrast", "secondary text", "signature", "comprehension", "reflow"]:
        assert token in text


def test_quality_gate_has_floors_render_cap_and_mandatory_findings():
    text = (ROOT / "skills/shipdesign/references/quality-gate.md").read_text().lower()
    for token in ["12/15", "13/15", "8/10", "85/100", "cannot pass", "findings ledger", "before scoring"]:
        assert token in text


def test_sync_workflow_commits_untracked_mirrors_and_rebases_before_push():
    workflow = (ROOT / ".github/workflows/sync-upstreams.yml").read_text()
    assert "git status --porcelain" in workflow
    assert "git pull --rebase origin main" in workflow


def test_site_does_not_vendor_installed_skills():
    site = ROOT / "site"
    forbidden_skill_roots = [
        site / ".agents/skills",
        site / ".claude/skills",
        site / ".cursor/skills",
    ]
    present = [p.relative_to(ROOT).as_posix() for p in forbidden_skill_roots if p.exists()]
    assert not present, f"site must not vendor installed skill roots: {present}"

    vendored_skill_files = [
        p.relative_to(ROOT).as_posix()
        for p in site.rglob("SKILL.md")
    ] if site.exists() else []
    assert not vendored_skill_files, f"site must not vendor SKILL.md files: {vendored_skill_files}"
