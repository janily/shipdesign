# ShipDesign behavior evals

These scenarios are the behavioral test suite for the orchestrator. Static bundle tests live in `tests/test_bundle.py`.

## Eval 1 — Dense SCADA screen

Prompt: `/shipdesign Redesign this SCADA monitoring screen. Keep all operational data visible and make alarms/actions easier to scan.`

Expected:
- classifies as dense product UI, not expressive marketing;
- low motion and high density Design Read;
- uses web-design-engineer + relevant better-* review domains;
- uses Owl visual-hierarchy / perception rules only where scan order or grouping needs repair;
- does not add cinematic scroll, giant hero typography, decorative gradients, or card-everything layout;
- verifies alarms, hierarchy, responsive behavior, keyboard/focus as applicable.

## Eval 2 — Conversion landing page

Prompt: `/shipdesign Build a landing page for a developer API. Primary action is Start free.`

Expected:
- routes through landing-page-design;
- preserves one primary conversion goal;
- locks a visual system before implementation;
- uses motion only to reinforce hierarchy/feedback;
- performs full-page plus desktop/tablet/mobile review before scoring;
- creates a findings ledger before assigning the final quality score;
- final quality score >= 90 only when all hard pass conditions and dimension floors pass.

## Eval 3 — Video reference

Prompt: `/shipdesign Use this screen recording as interaction inspiration, but keep our existing brand tokens.`

Expected:
- routes through video-to-superprompt for evidence extraction;
- treats existing brand tokens as higher-priority evidence than reference styling;
- separates interaction mechanism from copied branding/content;
- checks originality/fidelity trade-off in final review.

## Eval 4 — Premium marketing request

Prompt: `/shipdesign Make our robotics launch page feel expensive and cinematic.`

Expected:
- does not assume cinematic = maximal motion before framing;
- may route to Awwwards and cinematic-scroll-storytelling only if Design Read supports it;
- has reduced-motion behavior and mobile fallback;
- scroll motion serves narrative rather than decoration.

## Eval 5 — Existing UI polish

Prompt: `/shipdesign Polish this existing settings page without changing information architecture.`

Expected:
- preserve/extension mode;
- respects current component library and tokens;
- uses better-interface and narrow domain specialists;
- avoids redesigning the entire product.

## Eval 6 — Perception and composition review

Prompt: `/shipdesign The page is functional, but users cannot tell what to look at first and related controls feel disconnected.`

Expected:
- routes to `visual-hierarchy` for attention order;
- selects only the relevant Gestalt laws, such as proximity/common-region/similarity, rather than loading every perception rule;
- may use `von-restorff-effect` only when one focal action genuinely needs distinctiveness;
- finishes with `critique-visual-hierarchy` and/or `critique-composition` on the rendered result;
- does not route to the removed `ux-psychology-skill` source.

## Eval 7 — Long-page repetition dogfood regression

Prompt: `/shipdesign Review this finished developer-tool landing page. Each individual section looks polished, but the full page uses the same left-headline/right-content split for most sections.`

Expected:
- switches from author posture to critic posture and does not defend the repeated layout because each section is individually polished;
- builds a global composition map from the full-page render before scoring;
- marks three consecutive substantially identical macro compositions as a Major finding unless the repetition has a clear narrative reason;
- checks CTA/message duplication, secondary-text readability, contrast, signature treatment of the core differentiator, workflow comprehension, and mobile reflow;
- records findings before score;
- an unresolved Major finding caps the affected dimension at 11, so total score alone cannot pass;
- if no rendered inspection is available, caps the score at 85 and reports the result as UNVERIFIED rather than passing it.

## Eval 8 — Missing specialist install

Prompt: invoke ShipDesign with a sibling upstream folder removed.

Expected:
- detects missing source when routing reaches it;
- does not pretend the original skill was applied;
- reports installation problem and uses only an explicitly safe fallback.

## Baseline note

The initial repository build includes the scenarios before deployment plus static RED/GREEN bundle tests. A future automated agent-eval harness should run each scenario both without and with ShipDesign to measure behavioral lift; do not claim those comparative agent runs until the harness exists.
