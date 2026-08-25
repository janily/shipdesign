# ShipDesign

**One trigger for evidence-led, high-quality AI design engineering.**

ShipDesign bundles proven open-source design skills and adds a small orchestration layer that decides which specialist rules to apply, in what order, and when the result is good enough to ship.

```text
Frame → Evidence → Direction → Build → Motion → Review → Quality Gate → Ship
```

The goal is not “more animation” or “make it look premium.” The goal is to stop AI from falling back to the same generic template and instead make design decisions that fit the product.

## What is bundled

ShipDesign synchronizes specialist skills from Tastemaker, Garden Web Design Engineer, Elaya Landing Page Design, Emil Kowalski, Meng To, Jakub Krehel, plus a transparent UX-psychology substitute for the tutorial's unverified “Perception Laws” label. See `CREDITS.md` and `UPSTREAM_LOCK.json` for provenance.

## Install

### Codex

```bash
npx skills@latest add janily/shipdesign --skill '*' -a codex --copy -y
```

### Claude Code

```bash
npx skills@latest add janily/shipdesign --skill '*' -a claude-code --copy -y
```

### Cursor

```bash
npx skills@latest add janily/shipdesign --skill '*' -a cursor --copy -y
```

Install `*`, not only `shipdesign`: the orchestrator reads sibling specialist skills during a run.

## Use

```text
/shipdesign Build a premium landing page for an AI developer tool
```

```text
/shipdesign Redesign this SCADA monitoring screen without reducing information density
```

```text
/shipdesign Recreate the interaction language from this screen recording, but keep our brand system
```

ShipDesign will classify the surface, inspect evidence, choose a coherent direction, build, apply motion only when justified, review the rendered interface, and refine until the quality gate passes or three refinement loops expose a real blocker.

## Quality gate

100-point shared rubric:

- product fit & task clarity — 15
- visual hierarchy & layout — 15
- typography & color — 15
- component craft & consistency — 15
- interaction & motion — 15
- responsive & accessibility — 15
- originality & finish — 10

Pass: **>= 90/100 and zero Critical findings**.

## Upstream sync

`upstreams.json` is the source of truth. GitHub Actions refreshes mirrored skill folders weekly and records exact commits in `UPSTREAM_LOCK.json`. Every upstream is MIT licensed and its license text is preserved under `licenses/`.

Manual sync:

```bash
python scripts/sync_upstreams.py
python scripts/verify_bundle.py
```

## Design principle

> Upstream skills own specialist craft. ShipDesign owns routing, sequencing, and the shared definition of done.
