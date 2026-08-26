# Upstream Contract

ShipDesign uses exact or intentionally scoped mirrors of independent upstream design skills.

- `skills/shipdesign/**` is ShipDesign-owned.
- Every other skill named in `upstreams.json` is upstream-owned and must be refreshed through `scripts/sync_upstreams.py`, not hand-edited.
- Preserve each upstream license in `licenses/`.
- `UPSTREAM_LOCK.json` records the exact commit resolved during the last sync.
- Specialist instructions remain authoritative inside their owned domain; ShipDesign only decides when to load them, how to sequence them, and whether the final result passes the shared quality gate.
- If an upstream instruction conflicts with an explicit user constraint or repository convention, the user/repository constraint wins and the deviation should be stated.

## Verified source set

ShipDesign's upstream bundle is intentionally limited to these seven repositories:

1. `codeswithroh/tastemaker`
2. `ConardLi/garden-skills`
3. `elayadesign/ai-design-skills`
4. `emilkowalski/skills`
5. `MengTo/Skills`
6. `jakubkrehel/skills`
7. `Owl-Listener/designer-skills`

The perception / visual-critique layer comes from the verified MIT-licensed `Owl-Listener/designer-skills` repository. ShipDesign mirrors only the specific Gestalt, visual-hierarchy, and critique skills declared in `upstreams.json`; it does not mirror the entire 100+ skill collection.
