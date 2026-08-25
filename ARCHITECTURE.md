# ShipDesign architecture

## Principle

ShipDesign separates **specialist design knowledge** from **workflow orchestration**.

```text
/shipdesign <goal>
        |
        v
     FRAME
        |
        v
    EVIDENCE ------ Tastemaker / Video-to-Superprompt
        |
        v
   DIRECTION ------ Web Design Engineer / Landing Page Design
        |
        v
      BUILD ------- Emil Design Engineering
        |
        v
     MOTION ------- Animate / Awwwards / Scroll Storytelling
        |
        v
     REVIEW ------- Better Interface / UX Psychology
        |
        v
 QUALITY GATE ---- >= 90, Critical = 0
        | no
        +---- refine (max 3) ----+
        |                        |
        +------------------------+
```

## Ownership

- `skills/shipdesign/`: ShipDesign-owned orchestration.
- upstream skill directories under `skills/`: synchronized mirrors; never hand-edit.
- `upstreams.json`: source-of-truth mapping.
- `UPSTREAM_LOCK.json`: generated exact commit pins.
- `licenses/`: preserved upstream license texts.
- `scripts/sync_upstreams.py`: mirror mechanism.
- `scripts/verify_bundle.py`: structural gate.

## Why not nested slash commands?

User-invoked skills are workflow boundaries in several agent runtimes. Recursive invocation is unreliable and can create context/control ambiguity. ShipDesign instead reads the relevant sibling skill documents as source material inside a single `/shipdesign` run. The user gets one trigger while upstream authors keep ownership of specialist rules.

## Progressive disclosure

The main `SKILL.md` contains only the universal sequence. Routing, quality scoring, and upstream ownership are separate references loaded when needed. Specialist rules stay in their upstream skill folders.
