# ShipDesign Hybrid Orchestration Design

## Problem

A single model can generate functional frontend code but tends to converge on generic visual patterns. High-quality design skills exist, but users currently need to know which skills to install, when to use each, and how to resolve overlap.

## Solution

ShipDesign distributes verified upstream design skills together with one ShipDesign-owned orchestrator. The orchestrator performs a one-trigger workflow: Frame → Evidence → Direction → Build → Motion → Review → Quality Gate. It reads specialist sibling skills as source-of-truth references rather than recursively invoking slash commands.

## Upstream policy

Exact skill folders are synchronized from declared public MIT sources. `upstreams.json` owns mappings; `UPSTREAM_LOCK.json` records resolved commits; upstream license texts are preserved. ShipDesign-owned files never modify upstream instructions.

The tutorial's “Perception Laws” source was not verifiable by same-name repository, so the initial release uses a clearly attributed UX psychology skill as a substitute layer and documents that difference.

## Quality

A 100-point shared gate requires >= 90 and zero Critical findings. Refinement runs at most three times to prevent endless polish loops.

## Distribution

The repository is compatible with the standard skills CLI when users install `--skill '*'`, ensuring the orchestrator and sibling specialists are co-located.
