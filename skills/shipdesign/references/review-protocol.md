# Review Protocol

Review is a separate critic pass between implementation and scoring. Review the rendered result, not the effort or intention behind it.

**Findings before score.** Do not calculate, estimate, or defend a quality score until the findings ledger is complete.

## 0. Establish review evidence

Use the strongest evidence available:

1. actual rendered interface in a browser or equivalent renderer;
2. a full-page capture for long-form or multi-section surfaces;
3. representative desktop, tablet, and mobile viewports;
4. interaction states, keyboard/focus behavior, and reduced-motion behavior when applicable;
5. source/diff inspection only as supporting evidence, not a substitute for rendered inspection.

Recommended viewport classes are roughly 1280–1440px desktop, ~768px tablet, and ~390px mobile. Exact targets may follow the product brief.

If rendered inspection is unavailable, continue with code-level review but mark the result **UNVERIFIED**. The quality gate then applies the no-render score cap.

## 1. Switch from author to critic

Treat the design as something another team produced.

- Look for evidence that the direction fails, repeats itself, hides meaning, or creates friction.
- Do not defend a choice because it was intentional or expensive to implement.
- Do not start polishing while reviewing; record the problem first.
- Prefer observable evidence over aesthetic rationalization.

## 2. Local section and state review

For each major section, screen, or state, identify:

- the job it must accomplish;
- the first focal point and intended scan path;
- the primary action and supporting action;
- hierarchy, grouping, copy clarity, component consistency, and state clarity;
- any interaction or motion that changes comprehension.

A locally strong section can still fail the global review.

## 3. Global composition and page rhythm

For any multi-section page, create a compact **global composition map** before scoring:

| Section | Macro composition | Visual weight | Density | Background/cadence | Signature role |
|---|---|---|---|---|---|
| Hero | ... | ... | ... | ... | ... |

Audit the whole sequence, not isolated screenshots.

### Section repetition

Flag **Major** when three consecutive sections use substantially the same macro composition without a clear narrative reason, for example repeated left-headline/right-copy splits, repeated equal card grids, or repeated centered headline + paragraph + CTA structures.

Also flag repetition when one macro composition dominates most of a long page and makes the next section visually predictable.

### Narrative cadence

Check that the page changes visual weight, density, alignment, or interaction only when the story benefits. Variety is not the goal; meaningful cadence is.

### Signature moments

The product's core differentiator should receive at least one dedicated **signature** visual moment. Do not bury the most important mechanism, workflow, proof, or concept inside a generic list or ordinary card grid.

### CTA and message duplication

Compare every major CTA and closing section. Repeated wording or repeated value claims must add progression, not restate the same message. Redundant CTA sections are a comprehension and pacing finding.

## 4. Perception and comprehension review

Use the targeted perception reviewers from `routing.md` when a problem appears.

Check:

- Can a user identify what this is, why it matters, and the primary action within the first meaningful viewport?
- Does visual hierarchy match semantic importance?
- Are related elements grouped by proximity/similarity/common region rather than decoration alone?
- Does the eye move through the intended sequence with continuity?
- Does the most important action or object stand out without creating competing focal points?
- For workflows, diagrams, or architecture sections: can a user explain the sequence and relationships without reading every supporting paragraph? This is a **comprehension** requirement, not merely a styling requirement.

## 5. Typography, color, and accessibility review

Inspect the actual rendered size and contrast, not token names.

- Body and secondary text must remain comfortably readable at target viewports; tiny secondary text used only to look refined is a finding.
- Check text/background and interactive-state **contrast** with measurable tooling when available; do not rely only on visual judgment.
- Check keyboard order, visible focus, semantic structure, target sizes, link/button affordances, and reduced-motion behavior where relevant.
- Low-emphasis content may be quieter, but not functionally hidden.

## 6. Responsive review

Inspect desktop, tablet, and mobile as different compositions.

- Mobile must **reflow**, not merely shrink the desktop composition.
- Preserve semantic reading order when columns collapse.
- Check overflow, clipping, sticky/fixed elements, terminal/code blocks, dense tables, and long headings.
- Confirm the primary action stays discoverable and touch targets remain usable.

## 7. Motion review

Every meaningful animation should answer at least one question: what changed, what caused it, what deserves attention, or how the story progresses.

- Remove motion that only decorates an otherwise static idea.
- Verify reduced-motion behavior.
- On scroll-led pages, confirm the motion improves narrative comprehension rather than hiding content behind choreography.

## 8. Findings ledger

Create the findings ledger **before scoring**. Record problems, not compliments.

| ID | Scope | Severity | Evidence | User impact | Required action |
|---|---|---|---|---|---|
| F-01 | global composition | Major | ... | ... | ... |

At minimum, explicitly record whether these categories were checked: global composition, hierarchy/comprehension, typography/color, responsive/accessibility, interaction/motion, originality/finish.

Do not omit a finding because fixing it would lower the score or require another refinement pass.

## 9. Landing-page specific audit

For landing pages, explicitly answer these before scoring:

- Do three consecutive sections repeat the same macro composition?
- Is the strongest product differentiator given a signature visual moment?
- Are repeated CTAs or value claims progressing the argument rather than repeating it?
- Is secondary text readable at realistic laptop and mobile sizes?
- Does contrast remain sufficient in muted text, tinted sections, code/terminal UI, and button states?
- Can the user understand the core workflow/mechanism from the visual structure alone?
- Does mobile reflow the story intentionally rather than shrinking the desktop layout?
- Does motion explain the product or merely decorate it?

Completion criterion: the evidence set is inspected, the global review is complete where applicable, and a findings ledger exists before any quality score is assigned.
