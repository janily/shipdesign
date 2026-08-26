import ScrollMotion from "./components/ScrollMotion";

const sources = [
  {
    index: "01",
    name: "tastemaker",
    repo: "codeswithroh/tastemaker",
    label: "Reference / taste",
    description: "Extracts visual evidence, references, and the taste behind a direction.",
    stage: "EVIDENCE",
    tone: "mint",
  },
  {
    index: "02",
    name: "web-design-engineer",
    repo: "ConardLi/garden-skills",
    label: "Direction / system",
    description: "Turns product context into a coherent visual architecture and design system.",
    stage: "DIRECTION",
    tone: "sky",
  },
  {
    index: "03",
    name: "landing-page-design",
    repo: "elayadesign/ai-design-skills",
    label: "Landing / conversion",
    description: "Keeps the page structure focused on one clear action and a credible story.",
    stage: "DIRECTION",
    tone: "yellow",
  },
  {
    index: "04",
    name: "emil-design-eng + animate",
    repo: "emilkowalski/skills",
    label: "Build / interaction",
    description: "Adds component craft, micro-interactions, and motion with a reason to exist.",
    stage: "BUILD",
    tone: "coral",
  },
  {
    index: "05",
    name: "video-to-superprompt + scroll",
    repo: "MengTo/Skills",
    label: "Motion / narrative",
    description: "Brings cinematic sequencing to surfaces that genuinely benefit from it.",
    stage: "MOTION",
    tone: "lavender",
  },
  {
    index: "06",
    name: "better-interface family",
    repo: "jakubkrehel/skills",
    label: "Refinement / QA",
    description: "Audits layout, typography, color, accessibility, writing, and UI polish.",
    stage: "REVIEW",
    tone: "blue",
  },
  {
    index: "07",
    name: "perception + critique",
    repo: "Owl-Listener/designer-skills",
    label: "Perception / critique",
    description: "Applies hierarchy, Gestalt laws, distinctiveness, and visual critique.",
    stage: "REVIEW",
    tone: "orange",
  },
];

const workflow = [
  ["FRAME", "Product, user, task, surface", "01", "Sets the brief before style enters the room.", "context"],
  ["EVIDENCE", "Code, references, assets, constraints", "02", "Finds the material the direction must answer to.", "taste"],
  ["DIRECTION", "Taste, system, hierarchy, language", "03", "Turns evidence into a point of view the agent can build.", "system"],
  ["BUILD", "Structure, states, responsive behavior", "04", "Makes the direction real in components and states.", "craft"],
  ["MOTION", "Feedback, explanation, narrative", "05", "Adds movement only when it explains or confirms.", "motion"],
  ["REVIEW", "Type, color, layout, perception", "06", "Checks the rendered interface from every useful angle.", "critique"],
  ["QUALITY GATE", ">= 90 / 100 · zero Critical", "07"],
  ["SHIP", "A design that earns its way into production", "08", "The output is a considered interface, not a lucky first pass.", "output"],
];

const workflowMeta: Array<[string, string, string, string[]]> = [
  ["Sets the brief before style enters the room.", "context", "brief -> context", ["orchestrator"]],
  ["Finds the material the direction must answer to.", "taste", "references -> taste", ["tastemaker"]],
  ["Turns evidence into a point of view the agent can build.", "system", "context -> system", ["web-design-engineer", "landing-page-design"]],
  ["Makes the direction real in components and states.", "craft", "system -> interface", ["emil-design-eng"]],
  ["Adds movement only when it explains or confirms.", "motion", "interface -> behavior", ["animate", "cinematic-scroll"]],
  ["Checks the rendered interface from every useful angle.", "critique", "render -> critique", ["better-interface", "perception"]],
  ["Decides whether the work is ready to ship.", "gate", "critique -> decision", ["ShipDesign rubric"]],
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content">
      <ScrollMotion />
      <section className="hero" id="top">
        <aside className="control-rail" aria-label="ShipDesign run summary">
          <span className="rail-brand">SHIPDESIGN</span>
          <span><strong>07</strong> upstream<br />sources</span>
          <span><strong>01</strong> routed<br />trigger</span>
          <span><strong>90+</strong> quality<br />threshold</span>
        </aside>
        <nav className="nav shell" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="ShipDesign home">
            <Mark />
            <span>ShipDesign</span>
          </a>
          <div className="nav-links">
            <a href="#workflow">Workflow</a>
            <a href="#sources">Sources</a>
            <a href="#install">Install</a>
          </div>
          <a className="nav-github" href="https://github.com/janily/shipdesign" target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /><span className="eyebrow-copy">Design engineering workflow for AI coding agents</span></p>
            <h1>One trigger.<br /><em>Seven design minds.</em><br />Better <span className="mobile-line">interfaces.</span></h1>
            <p className="hero-lede">AI can code. AI still designs like AI. ShipDesign routes specialist craft into one evidence-led workflow, so the interface gets designed before it gets shipped.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#install">Start with <code>/shipdesign</code> <Arrow /></a>
              <a className="text-link" href="#workflow">See how it works <Arrow /></a>
            </div>
          </div>

          <div className="command-stage" aria-label="ShipDesign workflow preview">
            <div className="stage-topline"><span>AGENT / DESIGN RUN</span><span>READY</span></div>
            <div className="command-window">
              <div className="command-head"><span className="window-dots"><i /><i /><i /></span><span>shipdesign.run</span><span className="command-time">00:07.42</span></div>
              <div className="command-input"><span className="prompt">&gt;</span><span>/shipdesign</span><span className="cursor" /></div>
              <p className="command-task">Build a landing page for my AI developer tool</p>
              <div className="run-line"><span className="run-pulse" />Orchestrating 7 specialist sources</div>
              <div className="mini-flow">
                {workflow.slice(0, 6).map(([name, text, no], i) => (
                  <div className="mini-step" key={name} style={{ "--step-delay": `${i * 90}ms` } as React.CSSProperties}>
                    <span className="mini-no">{no}</span><span><strong>{name}</strong><small>{text}</small></span><span className="check">✓</span>
                  </div>
                ))}
              </div>
              <div className="quality-line"><span>QUALITY GATE</span><strong>94 / 100</strong><span className="quality-pass">PASS</span></div>
            </div>
            <div className="stage-footnote"><span>routing</span><span>sequencing</span><span>quality gate</span></div>
          </div>
        </div>
        <div className="hero-note shell"><span>FRAME → EVIDENCE → DIRECTION → BUILD → MOTION → REVIEW → QUALITY GATE → SHIP</span><span>Scroll to inspect the system ↓</span></div>
      </section>

      <section className="problem section-shell" id="problem" data-scroll-reveal>
        <div className="section-intro">
          <p className="kicker">01 / THE GAP</p>
          <h2>The code gets better.<br /><span>The design loops.</span></h2>
        </div>
        <div className="problem-content">
          <p className="large-copy">Most AI coding workflows optimize for output. ShipDesign adds the missing middle: taste, constraints, sequencing, and critique.</p>
          <div className="comparison">
            <div className="comparison-row comparison-muted"><span>Without a design workflow</span><strong>prompt → template → ship</strong></div>
            <div className="comparison-row comparison-active"><span>With ShipDesign</span><strong>evidence → direction → build → review → ship</strong><Mark /></div>
          </div>
        </div>
      </section>

      <section className="workflow-section" id="workflow" data-scroll-reveal>
        <div className="workflow-header shell">
          <div><p className="kicker">02 / THE ORCHESTRATION</p><h2>One trigger.<br /><span>A considered sequence.</span></h2></div>
          <div className="workflow-explanation"><p>ShipDesign is not another design skill. It is the layer that decides which specialist rules matter, when they matter, and whether the result is ready.</p><span>Each handoff narrows the problem before the next specialist sees it.</span></div>
        </div>
        <div className="workflow-board shell">
          <div className="workflow-caption"><span>ROUTE / 01-08</span><span>INPUT -&gt; DECISION -&gt; SHIP</span></div>
          <div className="workflow-trigger"><code>/shipdesign</code><span>one command, routed by context</span></div>
          <div className="workflow-rail" />
          <div className="workflow-list">
            {workflow.map(([name, text, no], i) => {
              const [explanation, kind, routeLabel, routes] = workflowMeta[i] ?? ["", "", "", []];
              return (
              <div className={`workflow-row ${name === "SHIP" ? "workflow-ship" : ""}`} key={name} data-workflow-row>
                <span className="workflow-index">{no}</span>
                <div className="workflow-label"><strong>{name}</strong><span>{text}</span><small>{explanation}</small></div>
                {i < 7 && <div className="workflow-sources"><span className="route-label">{routeLabel}</span>{routes.map((route) => <span className={`source-chip route-${kind}`} key={route}>{route}</span>)}</div>}
                <span className="workflow-status">{i === 6 ? "PASS" : i === 7 ? "READY" : "DONE"}</span>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sources section-shell" id="sources" data-scroll-reveal>
        <div className="sources-heading"><div><p className="kicker">03 / SEVEN SOURCES</p><h2>Specialist craft,<br /><span>properly routed.</span></h2></div><p>These are not seven logos in a wall. They are seven kinds of judgment, called at different moments in the run.</p></div>
        <div className="source-route-map" aria-label="Source routing sequence">
          <div className="route-map-label"><span className="route-map-pulse" />RUN PATH</div>
          <div className="route-map-track">
            <span className="route-map-node route-map-context">Frame</span>
            <span className="route-map-arrow" aria-hidden="true">-&gt;</span>
            <span className="route-map-node route-map-taste">Evidence</span>
            <span className="route-map-arrow" aria-hidden="true">-&gt;</span>
            <span className="route-map-node route-map-system">Direction</span>
            <span className="route-map-arrow" aria-hidden="true">-&gt;</span>
            <span className="route-map-node route-map-craft">Build</span>
            <span className="route-map-arrow" aria-hidden="true">-&gt;</span>
            <span className="route-map-node route-map-motion">Motion</span>
            <span className="route-map-arrow" aria-hidden="true">-&gt;</span>
            <span className="route-map-node route-map-critique">Review</span>
            <span className="route-map-arrow" aria-hidden="true">-&gt;</span>
            <span className="route-map-node route-map-gate">Gate</span>
          </div>
          <p>Seven sources, one handoff path. Each stage narrows the next decision.</p>
        </div>
        <div className="source-list">
          {sources.map((source) => (
            <article className={`source-item source-${source.tone}`} key={source.repo}>
              <span className="source-index">{source.index}</span>
              <div className="source-name"><h3>{source.name}</h3><p>{source.repo}</p></div>
              <div className="source-role"><p className="source-label">{source.label}</p><p className="source-stage">Called during {source.stage}</p></div>
              <p className="source-description">{source.description}</p>
              <Arrow className="source-arrow" />
            </article>
          ))}
        </div>
        <div className="ownership-note"><span className="ownership-mark">↳</span><p><strong>Clear ownership.</strong> Upstream authors own specialist craft. ShipDesign owns routing, sequencing, and the shared definition of done.</p></div>
      </section>

      <section className="why-section" data-scroll-reveal>
        <div className="why-grid shell">
          <div><p className="kicker">04 / WHY IT EXISTS</p><h2>Design is a<br /><span>reasoning problem.</span></h2></div>
          <div className="principles">
            <div className="principle"><span>01</span><h3>Evidence before aesthetic</h3><p>Start with what exists: product context, references, constraints, and the job to be done.</p></div>
            <div className="principle"><span>02</span><h3>Motion with a job</h3><p>Use movement to explain causality, signal state, or carry the story. Never as a default.</p></div>
            <div className="principle"><span>03</span><h3>Quality is a gate</h3><p>Review is not a final mood check. It is a measurable condition for shipping.</p></div>
          </div>
        </div>
      </section>

      <section className="signal-band" aria-label="ShipDesign operating signal" data-scroll-reveal>
        <div className="signal-band-inner shell">
          <span className="signal-index">SYSTEM SIGNAL / 01</span>
          <p>Good interfaces are not found at the end of the run. They are reasoned into every handoff.</p>
          <span className="signal-mark">-&gt;</span>
        </div>
      </section>

      <section className="example section-shell" data-scroll-reveal>
        <div className="example-copy"><p className="kicker">05 / IN PRACTICE</p><h2>See the handoff<br /><span>before the ship.</span></h2><p>Describe the job. The run turns a brief into a reviewed interface before the pull request.</p></div>
        <div className="example-terminal">
          <div className="terminal-line terminal-comment"># your next interface</div>
          <div className="terminal-line"><span className="terminal-prompt">›</span> <strong>/shipdesign</strong></div>
          <div className="terminal-line terminal-wrap">The agent receives a brief, then routes the right design minds.</div>
          <div className="terminal-divider" />
          <div className="terminal-result"><span className="run-pulse" />Design Read complete <span>8 specialists selected</span></div>
          <div className="terminal-result"><span className="run-pulse" />Quality Gate <strong>92 / 100</strong></div>
          <div className="terminal-caret">_</div>
        </div>
      </section>

      <section className="install-section" id="install" data-scroll-reveal>
        <div className="install-inner shell">
          <div className="install-copy"><p className="kicker">06 / INSTALL ONCE</p><h2>Give your agent<br /><em>a design system.</em></h2><p>Install the full bundle so the orchestrator can read its specialist sources during a run.</p><p className="install-note">Open source · MIT · janily/shipdesign</p></div>
          <div className="install-code"><div className="code-label">CODEX · COPY THE BUNDLE</div><code><span>npx</span> skills@latest add<br />janily/shipdesign <span className="code-accent">--skill &#39;*&#39;</span><br /><span>-a</span> codex <span className="code-accent">--copy -y</span></code><div className="code-divider" /><div className="code-label">THEN RUN</div><code><span className="code-accent">/shipdesign</span><br />Build a landing page for my AI developer tool</code></div>
        </div>
      </section>

      <footer className="footer shell"><a className="wordmark" href="#top"><Mark /><span>ShipDesign</span></a><p>One trigger for evidence-led,<br />high-quality AI design engineering.</p><div className="footer-links"><a href="https://github.com/janily/shipdesign" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="#sources">Upstream sources <Arrow /></a></div><span className="footer-meta">MIT · 2026</span></footer>
      </main>
    </>
  );
}
