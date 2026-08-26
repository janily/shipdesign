# Quality Gate

The quality gate starts only after `review-protocol.md` is complete. **Findings before scoring.** Score the rendered result, not the intention.

## Scoring dimensions

| Dimension | Points |
|---|---:|
| Product fit & task clarity | 15 |
| Visual hierarchy & layout | 15 |
| Typography & color | 15 |
| Component craft & consistency | 15 |
| Interaction & motion | 15 |
| Responsive behavior & accessibility | 15 |
| Originality & finish | 10 |
| **Total** | **100** |

## Score calibration

For 15-point dimensions:

- **15** — exceptional and verified; no meaningful finding remains in this dimension.
- **13–14** — strong; only minor findings remain.
- **12** — acceptable but visibly improvable; this is the minimum passing floor.
- **0–11** — refinement required.

For Originality & finish:

- **9–10** — distinctive, coherent, and highly finished.
- **8** — credible and non-generic; minimum passing floor.
- **0–7** — generic, repetitive, derivative, or under-finished.

Finding severity constrains scoring:

- unresolved **Critical** finding → affected dimension cannot score above 7;
- unresolved **Major** finding → affected dimension cannot score above 11;
- multiple unresolved **Minor** findings should normally cap the affected dimension at 13;
- a perfect score requires positive evidence, not merely absence of reported problems.

## Findings ledger is mandatory

A findings ledger from `review-protocol.md` must exist **before scoring**. Every Critical and Major finding must have a disposition: fixed, intentionally accepted because of an explicit constraint, or unresolved blocker.

Do not back-fill findings to justify a score already chosen.

## Render verification rule

A design that has not been inspected in an actual renderer/browser is **UNVERIFIED**.

- no rendered inspection → maximum total score is **85/100**;
- an UNVERIFIED result **cannot pass** the ShipDesign quality gate;
- long-form or multi-section pages require full-page inspection in addition to local viewport checks when capture/inspection tooling exists.

## Hard pass conditions

A run passes only when all conditions are true:

- total score >= **90/100**;
- Critical findings = 0;
- every 15-point dimension is >= **12/15**;
- Responsive behavior & accessibility is >= **13/15**;
- Originality & finish is >= **8/10**;
- no unresolved Major finding affects the primary journey, comprehension, conversion, accessibility, responsive behavior, or core visual concept;
- primary user journey works;
- desktop, tablet, and mobile target states have been inspected when applicable;
- keyboard/focus/reduced-motion behavior is appropriate to the surface;
- no obvious generic AI-template pattern or unintentional macro-layout repetition dominates the design;
- the findings ledger is complete and based on the latest render.

Passing by total score alone is forbidden.

## Refinement loop

1. Fix every Critical finding.
2. Fix Major findings that cap a dimension below its floor, starting with global composition/comprehension and accessibility.
3. Fix the highest-impact remaining findings.
4. Re-render and reinspect every affected viewport; for long pages, reinspect the full-page rhythm.
5. Rebuild the findings ledger from the new render.
6. Re-score every dimension from zero; do not carry the previous score forward.
7. Repeat for at most three refinement loops.

If the result still fails after loop 3, stop and report the remaining blockers instead of silently lowering the bar.

Completion criterion: the latest rendered evidence has a complete findings ledger and satisfies every hard pass condition, or the run explicitly reports why it remains unshippable after three loops.
