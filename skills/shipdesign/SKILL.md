---
name: shipdesign
description: Use when a user explicitly asks for an end-to-end high-quality web or product-interface design implementation, redesign, visual polish pass, or design-led frontend build where visual direction matters as much as functional correctness.
disable-model-invocation: true
---

# ShipDesign

ShipDesign is a one-trigger design-engineering orchestrator. Upstream skills are the source of truth for specialist craft; ShipDesign owns routing, sequencing, and the final quality gate.

**Do not recursively invoke sibling skills as user commands.** Read the relevant sibling `SKILL.md` files and apply their rules inside this run.

Read `references/routing.md` before building. Read `references/upstream-contract.md` when a sibling skill is missing or when source ownership is unclear. Read `references/quality-gate.md` before finalizing.

## Run

1. **Frame** — identify product job, primary user/action, design mode (fresh / extension / preserve / overhaul), and surface type (landing / product UI / dense dashboard / expressive marketing).
2. **Evidence** — inspect existing code, tokens, brand assets, screenshots, video, and references. Prefer evidence over invented style.
3. **Direction** — form a Design Read, choose one coherent visual direction, and lock typography, color, spacing, layout, component language, and motion posture before major implementation.
4. **Build** — implement the complete usable surface, including real states and responsive behavior. Preserve the project's existing stack and design system unless overhaul is explicit.
5. **Motion** — add motion only where it clarifies state, causality, hierarchy, or narrative. Reserve cinematic scroll behavior for expressive surfaces whose Design Read supports it.
6. **Review** — review the rendered experience across layout, type, color, components, interaction, accessibility, responsive behavior, perception, and originality.
7. **Quality Gate** — score with `references/quality-gate.md`. If score is below 90 or any Critical issue remains, fix the highest-impact problems and re-review. Stop after three refinement loops and report any unresolved blockers.

## Output

Ship the implementation, then report the chosen direction, specialist rules applied, quality score, verification performed, and any remaining limitations.

Completion criterion: the requested interface is implemented and verified, scores at least 90/100 with zero Critical findings, or the run ends after three refinement loops with concrete unresolved blockers reported.
