# Upstream Contract

ShipDesign uses exact or intentionally scoped mirrors of independent upstream design skills.

- `skills/shipdesign/**` is ShipDesign-owned.
- Every other skill named in `upstreams.json` is upstream-owned and must be refreshed through `scripts/sync_upstreams.py`, not hand-edited.
- Preserve each upstream license in `licenses/`.
- `UPSTREAM_LOCK.json` records the exact commit resolved during the last sync.
- Specialist instructions remain authoritative inside their owned domain; ShipDesign only decides when to load them, how to sequence them, and whether the final result passes the shared quality gate.
- If an upstream instruction conflicts with an explicit user constraint or repository convention, the user/repository constraint wins and the deviation should be stated.

## Important provenance note

The tutorial label “Perception Laws” could not be matched to a verifiable same-name upstream repository during the initial ShipDesign build. The current perception layer therefore uses the clearly attributed MIT-licensed `vivaldi007/ux-psychology-skill` as a transparent substitute for Gestalt, attention, interaction-law, cognitive-load, and trust checks. Do not describe it as the tutorial's original Perception Laws skill.
