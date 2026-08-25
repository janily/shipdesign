# ShipDesign workflow specification

## Purpose

Turn an explicit design/build request into a verified interface without requiring the user to manually compose specialist design skills.

## Trigger

Manual user invocation: `/shipdesign <goal>`.

## Required inputs

At minimum: a design goal. Use repository context, existing UI, supplied images/video, brand assets, and explicit constraints when available.

## Ordered actions

1. Frame product job, user, primary action, redesign mode, surface type, and Design Read.
2. Gather evidence and select specialist sources through `references/routing.md`.
3. Lock a coherent design direction before major implementation.
4. Build the full usable surface in the existing stack.
5. Apply justified interaction/motion rules.
6. Review the rendered result with domain owners plus perception checks.
7. Score against the shared quality gate.
8. Refine up to three times if needed.
9. Report result, score, verification, and blockers.

## Human checkpoints

No mandatory checkpoint when the brief and evidence support one defensible direction. Ask only when an unresolved choice materially changes product intent or brand direction and cannot be inferred safely.

## Failure handling

- Missing upstream sibling: stop specialist routing for that source, continue only if a safe fallback exists, and report the incomplete install.
- Missing assets: preserve structure with honest placeholders or source alternatives; do not fabricate brand evidence.
- Quality score still below 90 after three loops: ship no false “done” claim; report unresolved findings.

## Observability

A successful run states the selected direction, specialist sources used, quality score, verification performed, and remaining limitations.

## Acceptance criteria

The primary flow works, target responsive states are checked, Critical findings are zero, and the score is >= 90/100.
