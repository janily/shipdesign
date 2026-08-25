# Routing

Use the smallest specialist set that covers the current surface. Read source files directly from sibling skill folders; do not invoke them as nested slash commands.

| Condition | Specialist source | Purpose |
|---|---|---|
| Screenshot/image/reference-led work | `../tastemaker/SKILL.md` | Extract design evidence, lock taste/style, avoid generic defaults |
| Video/screen recording supplied | `../video-to-superprompt/SKILL.md` | Extract sequence, motion, interactions, asset needs |
| Any new visual direction or major redesign | `../web-design-engineer/SKILL.md` | Design Read, direction, system declaration, anti-cliché constraints |
| Conversion-focused landing page | `../landing-page-design/SKILL.md` | Single-goal structure, conversion copy, visual system, SEO-conscious semantics |
| Component craft / interaction details | `../emil-design-eng/SKILL.md` | High-quality design engineering decisions |
| Motion requested or clearly useful | `../animate/SKILL.md` | Decide whether/why/how to animate before implementation |
| Premium expressive marketing site | `../build-awwwards-quality-sites/SKILL.md` | Awwwards-grade composition and visual craft |
| Scroll itself carries the story | `../cinematic-scroll-storytelling/SKILL.md` | Scroll narrative and cinematic sequencing |
| Final holistic interface review | `../better-interface/SKILL.md` | Coordinate specialist review domains |
| Visual hierarchy needs to be designed or repaired | `../visual-hierarchy/SKILL.md` | Establish attention order, emphasis, scan path, and focal priority |
| Grouping/relationship is ambiguous | `../law-of-proximity/SKILL.md`, `../law-of-similarity/SKILL.md`, `../law-of-common-region/SKILL.md`, `../law-of-continuity/SKILL.md` | Apply perceptual grouping laws rather than arbitrary spacing or decoration |
| One important action or object must stand out | `../von-restorff-effect/SKILL.md` | Use deliberate visual distinctiveness without creating competing focal points |
| Final perception/composition audit | `../critique-visual-hierarchy/SKILL.md`, `../critique-composition/SKILL.md` | Critique attention flow, balance, grouping, composition, and visual clarity |

## Better-interface domain handoffs

When the holistic review exposes a domain problem, read the owning source rather than inventing overlapping rules:

- layout/responsive → `../better-layout/SKILL.md`
- typography → `../better-typography/SKILL.md`
- color/contrast remediation → `../better-colors/SKILL.md`
- accessibility/keyboard/semantics → `../better-accessibility/SKILL.md`
- visual polish/motion aesthetics → `../better-ui/SKILL.md`
- interface copy → `../better-writing/SKILL.md`

## Perception review handoffs

Use Owl-Listener's perception skills as targeted design laws, not as a reason to load every law on every screen:

- attention order / focal point → `../visual-hierarchy/SKILL.md`
- spatial grouping → `../law-of-proximity/SKILL.md`
- repeated visual language → `../law-of-similarity/SKILL.md`
- boundary/group containment → `../law-of-common-region/SKILL.md`
- directional flow / scan continuity → `../law-of-continuity/SKILL.md`
- intentional standout element → `../von-restorff-effect/SKILL.md`
- rendered-screen hierarchy audit → `../critique-visual-hierarchy/SKILL.md`
- rendered-screen composition audit → `../critique-composition/SKILL.md`

## Design Read defaults

Score each dial 1–5 before choosing specialists:

- Visual variance
- Motion
- Density
- Asset dependence
- Brand fidelity

Dense operational tools normally bias toward low variance / low motion / high density. Expressive marketing may justify high variance / high motion / high asset dependence. Never infer “premium” to mean cinematic motion by default.

## Evidence order

When sources conflict, prefer: existing product code and tokens → explicit user constraints → brand assets → supplied references → verified external references → general inspiration.
