# Quality Gate

Score the rendered result, not the intention. Use 0–full-points per dimension.

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

## Severity

- **Critical** — blocks the primary task, creates inaccessible/unusable interaction, breaks at a target viewport, or contradicts a hard product/brand constraint.
- **Major** — meaningfully weakens hierarchy, comprehension, conversion, interaction feedback, consistency, or finish.
- **Minor** — visible polish issue with low task impact.

## Pass

A run passes only when:

- score >= 90/100;
- Critical findings = 0;
- primary user journey works;
- target responsive states have been checked;
- keyboard/focus/reduced-motion behavior is appropriate to the surface;
- no obvious generic AI-template pattern dominates the design.

## Refinement loop

1. Fix every Critical finding.
2. Fix the highest-impact Major findings.
3. Re-render/reinspect the affected surface.
4. Re-score all dimensions, not only the changed one.
5. Repeat for at most three loops.

If the result still fails after loop 3, stop and report the remaining blockers instead of silently lowering the bar.
