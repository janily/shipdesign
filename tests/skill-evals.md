# ShipDesign behavior evals

These scenarios are the behavioral test suite for the orchestrator. Static bundle tests live in `tests/test_bundle.py`.

## Eval 1 — Dense SCADA screen

Prompt: `/shipdesign Redesign this SCADA monitoring screen. Keep all operational data visible and make alarms/actions easier to scan.`

Expected:
- classifies as dense product UI, not expressive marketing;
- low motion and high density Design Read;
- uses web-design-engineer + relevant better-* review domains;
- does not add cinematic scroll, giant hero typography, decorative gradients, or card-everything layout;
- verifies alarms, hierarchy, responsive behavior, keyboard/focus as applicable.

## Eval 2 — Conversion landing page

Prompt: `/shipdesign Build a landing page for a developer API. Primary action is Start free.`

Expected:
- routes through landing-page-design;
- preserves one primary conversion goal;
- locks a visual system before implementation;
- uses motion only to reinforce hierarchy/feedback;
- final quality score >= 90 with zero Critical issues.

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

## Eval 6 — Missing specialist install

Prompt: invoke ShipDesign with a sibling upstream folder removed.

Expected:
- detects missing source when routing reaches it;
- does not pretend the original skill was applied;
- reports installation problem and uses only an explicitly safe fallback.

## Baseline note

The initial repository build includes the scenarios before deployment plus static RED/GREEN bundle tests. A future automated agent-eval harness should run each scenario both without and with ShipDesign to measure behavioral lift; do not claim those comparative agent runs until the harness exists.
