# ShipDesign Hybrid Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a self-contained ShipDesign bundle with upstream design-skill mirroring, a one-trigger orchestrator, provenance, automated synchronization, and structural verification.

**Architecture:** ShipDesign owns only routing, sequencing, and the shared quality gate. Specialist design knowledge remains in synchronized sibling skills copied from their upstream repositories. A manifest and generated lock separate desired upstream locations from resolved commits.

**Tech Stack:** Agent Skills Markdown, Python 3.12 sync/verification scripts, GitHub Actions, pytest.

**Spec:** `docs/superpowers/specs/2026-08-25-shipdesign-hybrid-design.md`

## Global Constraints

- Direct delivery target is `main`.
- Preserve upstream contents and licenses.
- Do not represent the unverified “Perception Laws” label as a verified original source.
- Standard install path uses `npx skills@latest add janily/shipdesign --skill '*'`.

---

### Task 1: Define failing bundle contract

**Files:**
- Create: `tests/test_bundle.py`

- [x] Write static tests for required owned files, manifest destinations, frontmatter, references, and universal workflow phases.
- [x] Run tests before implementation and confirm failure is caused by missing ShipDesign files.

### Task 2: Implement orchestrator and references

**Files:**
- Create: `skills/shipdesign/SKILL.md`
- Create: `skills/shipdesign/references/routing.md`
- Create: `skills/shipdesign/references/quality-gate.md`
- Create: `skills/shipdesign/references/upstream-contract.md`

- [x] Implement universal one-trigger workflow.
- [x] Define conditional specialist routing.
- [x] Define 90/100 quality gate and three-loop ceiling.

### Task 3: Implement upstream distribution

**Files:**
- Create: `upstreams.json`
- Create: `scripts/sync_upstreams.py`
- Create: `scripts/verify_bundle.py`
- Create: `.github/workflows/sync-upstreams.yml`
- Create: `.github/workflows/verify-bundle.yml`

- [x] Declare seven attributed upstream source groups and skill mappings.
- [x] Preserve upstream licenses and generate exact commit lock.
- [x] Sync on initial manifest/workflow push, weekly schedule, and manual dispatch.
- [x] Verify synchronized bundle before committing mirror changes.

### Task 4: Document provenance and usage

**Files:**
- Create: `README.md`
- Create: `README.zh-CN.md`
- Create: `ARCHITECTURE.md`
- Create: `CREDITS.md`
- Create: `workflows/shipdesign.md`
- Create: `tests/skill-evals.md`

- [x] Document install and one-trigger usage.
- [x] Document ownership boundaries and the Perception Laws provenance gap.
- [x] Define behavior eval scenarios without claiming unrun comparative agent tests.

### Task 5: Verify and publish

- [ ] Run `python -m pytest -q tests/test_bundle.py` and confirm green.
- [ ] Push owned files to `main`.
- [ ] Wait for sync workflow to mirror upstream skills and write `UPSTREAM_LOCK.json`.
- [ ] Run/inspect final bundle verification and confirm synchronized skills are present.
