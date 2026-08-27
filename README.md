# ShipDesign

**One trigger for evidence-led, high-quality AI design engineering.**

ShipDesign bundles proven open-source design skills and adds a small orchestration layer that decides which specialist rules to apply, in what order, and when the result is good enough to ship.

```text
Frame → Evidence → Direction → Build → Motion → Review → Quality Gate → Ship
```

The goal is not “more animation” or “make it look premium.” The goal is to stop AI from falling back to the same generic template and instead make design decisions that fit the product.

## What is bundled

ShipDesign synchronizes specialist skills from exactly seven verified upstream repositories:

1. `codeswithroh/tastemaker`
2. `ConardLi/garden-skills`
3. `elayadesign/ai-design-skills`
4. `emilkowalski/skills`
5. `MengTo/Skills`
6. `jakubkrehel/skills`
7. `Owl-Listener/designer-skills`

The seventh source supplies the perception layer: visual hierarchy, Gestalt grouping laws, intentional distinctiveness, and rendered-screen visual critique. See `CREDITS.md` and `UPSTREAM_LOCK.json` for provenance and exact pinned commits.

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

Describe the **design problem, product context, constraints, and evidence**. Do not manually chain specialist skills unless you are debugging ShipDesign itself — the orchestrator should decide which specialists are needed.

### 1. Build a new landing page or product surface

Use this when the design direction does not exist yet and you want ShipDesign to own the full process.

```text
/shipdesign

Design and implement a landing page for my AI developer tool.

Primary user: developers using AI coding agents
Primary action: install the product
Preserve: the current technical stack
Design mode: fresh build

Choose one coherent visual direction and complete the full workflow without stopping for approval at normal design stages.
```

Best for: landing pages, launch sites, new product screens, new prototypes.

### 2. Redesign an existing product without losing what already works

Use this for a mature interface where information architecture, workflows, or product behavior should be preserved.

```text
/shipdesign

Redesign this SCADA monitoring screen.

Design mode: preserve redesign

Keep:
- existing information architecture
- operational workflows
- information density
- current product facts

Improve:
- visual hierarchy
- scan speed
- readability
- state clarity
- interaction efficiency
- responsive behavior

Do not turn it into a marketing-style interface.
```

Best for: dashboards, admin systems, SCADA, settings, forms, mature SaaS products.

### 3. Translate a screenshot or visual reference into your own product

Attach the screenshot and ask ShipDesign to extract the visual grammar instead of cloning the source.

```text
/shipdesign

Use the attached screenshot as visual inspiration for the current product.

Extract:
- composition
- hierarchy
- typography
- spacing rhythm
- color roles
- density
- surface treatment
- signature visual moves

Do not copy:
- branding
- exact layout
- copywriting
- illustrations
- source-specific section order

Translate the transferable design principles into our own product identity, then implement and review the result.
```

Typical routing: reference analysis / Tastemaker → design direction → implementation → critique.

### 4. Recreate the interaction language from a video or screen recording

Attach the video when the important reference is motion rather than static appearance.

```text
/shipdesign

Use the attached screen recording as motion and scroll-interaction inspiration.

Analyze:
- scroll phases
- pinned sections
- reveal order
- spatial continuity
- transition rhythm
- animation purpose

Transfer the interaction principles, not the exact choreography.
Keep our current brand system and visual direction.
Use advanced motion only where it helps explain the product.
```

Typical routing: video analysis → cinematic scroll storytelling → intentional animation → accessibility / review.

### 5. Design a dense dashboard or operational UI

Be explicit when density and operational clarity matter more than marketing expression.

```text
/shipdesign

Design this dense operations dashboard for expert users.

Prioritize:
- scan speed
- grouping
- stable layout
- table and form ergonomics
- state semantics
- error prevention
- keyboard / accessibility behavior

Keep motion quiet and functional.
Do not reduce useful information density just to make the screen look cleaner.
```

Best for: industrial software, monitoring systems, internal tools, analytics, enterprise workflows.

### 6. Refine an existing direction instead of redesigning from scratch

Once the overall direction is right, give ShipDesign a narrow refinement goal.

```text
/shipdesign

Preserve the current visual direction and layout.
Do not redesign the page.

Run a typography readability audit and improve:
- body text
- secondary text
- navigation
- tables
- code / terminal content

Preserve the existing display typography and compact technical metadata style.
Then re-run desktop, tablet, and mobile Review + Quality Gate.
```

This is usually better than saying “make it better” after every iteration.

### Best practices

- **Start with product truth.** Give ShipDesign real copy, workflows, constraints, existing code, design tokens, and product behavior before adding inspiration.
- **Use evidence progressively.** A useful sequence is: no reference → screenshot reference → motion/video reference, instead of giving many references at once.
- **Ask for translation, not cloning.** References should inform design grammar, not replace your product identity.
- **Let the orchestrator route.** Normally you should describe the problem, not tell ShipDesign to call Tastemaker, Emil, Meng To, Jakub, or Owl manually.
- **Preserve explicitly.** For existing products, state what must not change: information architecture, workflows, density, tokens, brand, or technical stack.
- **Refine narrowly after direction is approved.** Fix typography, motion, hierarchy, responsiveness, or one weak section without reopening the whole design direction.
- **Always finish with rendered review.** Let ShipDesign inspect representative desktop, tablet, mobile, and full-page states before scoring. Findings should come before the Quality Gate score.
- **Do not force motion.** Marketing surfaces can justify cinematic storytelling; dashboards, settings, forms, and high-frequency workflows should usually stay quiet.

ShipDesign will classify the surface, inspect evidence, choose a coherent direction, build, apply motion only when justified, review the rendered interface, and refine until the quality gate passes or three refinement loops expose a real blocker.

## Capability map

```text
Reference / taste        → Tastemaker
Direction / system       → Garden Web Design Engineer
Landing / conversion     → Elaya Landing Page Design
Component / micro-motion → Emil Kowalski
Cinematic / scroll       → Meng To
UI refinement / QA       → Jakub Krehel
Perception / critique    → Owl-Listener Designer Skills
```

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

The sync process also removes mirrors that were managed by the previous lock but are no longer declared in the manifest, preventing retired specialist skills from remaining installed accidentally.

Manual sync:

```bash
python scripts/sync_upstreams.py
python scripts/verify_bundle.py
```

## Design principle

> Upstream skills own specialist craft. ShipDesign owns routing, sequencing, and the shared definition of done.
