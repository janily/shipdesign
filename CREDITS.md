# Credits and upstream provenance

ShipDesign is an orchestration layer. It does not claim authorship of the upstream design skills that it mirrors.

| ShipDesign capability | Verified upstream | Mirrored skill(s) | License |
|---|---|---|---|
| Reference-led taste/style extraction | `codeswithroh/tastemaker` | `tastemaker` | MIT |
| Design direction / design engineering | `ConardLi/garden-skills` | `web-design-engineer` | MIT |
| Conversion landing pages | `elayadesign/ai-design-skills` | `landing-page-design` | MIT |
| Component craft and motion | `emilkowalski/skills` | `emil-design-eng`, `animate` | MIT |
| Video reverse-engineering / Awwwards / scroll storytelling | `MengTo/Skills` | `video-to-superprompt`, `build-awwwards-quality-sites`, `cinematic-scroll-storytelling` | MIT |
| Cross-discipline interface review | `jakubkrehel/skills` | `better-interface` plus its six domain skills | MIT |
| Perception / interaction psychology layer | `vivaldi007/ux-psychology-skill` | `ux-psychology-skill` | MIT |

Exact resolved commits are recorded in `UPSTREAM_LOCK.json` after synchronization. Original license texts are copied into `licenses/`.

## Tutorial naming notes

The AI LABS tutorial that inspired ShipDesign uses informal labels/names for several sources. Two mappings needed clarification during verification:

- The web design engineer source we could verify is `ConardLi/garden-skills`.
- The landing-page source we could verify is `elayadesign/ai-design-skills` (Elaya).

The tutorial label **“Perception Laws”** could not be matched to a verifiable same-name upstream repository. ShipDesign therefore uses `vivaldi007/ux-psychology-skill` as an explicitly attributed substitute for the perception/cognition review layer. It is not represented as the tutorial author's original skill.

ShipDesign's own orchestration files are MIT licensed under the repository `LICENSE`.
