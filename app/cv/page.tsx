import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Zak Goldberg",
  description:
    "Zak Goldberg is a software builder with experience across engineering, operations, and technical leadership.",
};

const capabilities = [
  ["01", "Frame the right problem", "Learn unfamiliar domains quickly, ask the questions that reveal real constraints, and distinguish symptoms from the work that will actually matter."],
  ["02", "Build and run reliable systems", "Java services, APIs, persistence, concurrency, testing, observability, and production reliability."],
  ["03", "Multiply delivery through people and agents", "Lead technical execution, create clear operating models, and design human-agent workflows that improve speed and quality."],
];

const salesforceHighlights = [
  "Design and deliver reliability-critical backend improvements for a real-time infrastructure-protection platform, including persistence architecture, production issue resolution, and safe phased rollouts.",
  "Integrated existing operational APIs with a partner-facing operations interface, enabling operators to manage configurations directly. Built payload-validation API support for safe, reliable submissions.",
  "Diagnosed and redesigned concurrency-sensitive persistence behavior, reducing lock contention while preserving consistency and operational safety.",
  "Built a human-agent engineering workflow adopted by 10+ engineers, making design context, release updates, and operational knowledge easier to maintain and use.",
];

export default function CvPage() {
  return (
    <main className="cv-page">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="/">ZAK GOLDBERG</a>
        <div className="nav-links">
          <a aria-current="page" href="/cv">CV</a>
          <a href="/hobbies">HOBBIES</a>
        </div>
      </nav>

      <header className="cv-hero">
        <p className="eyebrow">CAREER LOG / CURRENT</p>
        <div className="cv-hero-grid">
          <div>
            <h1>From ambiguity to meaningful impact.</h1>
          </div>
          <div className="cv-actions" aria-label="CV actions">
            <a className="button button-primary" href="https://media.zak-goldberg.dev/cv/zak-goldberg-resume.pdf">Download PDF <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="mailto:zak.goldberg@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
          <p className="cv-summary">
            I work across backend engineering, distributed systems, operational reliability, and human-agent engineering. My experience spans building the software, running the systems around it, and leading the teams that improve both.
          </p>
        </div>
        <div className="cv-meta">
          <span>SF Bay Area</span><span>zak.goldberg@gmail.com</span><a href="https://www.linkedin.com/in/zak-goldberg/">LinkedIn</a>
        </div>
      </header>

      <details className="cv-section cv-disclosure capabilities">
        <summary>
          <span><span className="eyebrow">01 / CAPABILITIES</span><h2>A cross-disciplinary way of working.</h2></span>
          <span className="disclosure-toggle" aria-hidden="true"><span className="disclosure-closed">Expand ↓</span><span className="disclosure-open">Collapse ↑</span></span>
        </summary>
        <div className="cv-disclosure-content">
          <div className="capability-grid">
            {capabilities.map(([number, title, description]) => <article className="capability" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </details>

      <details className="cv-section cv-disclosure agent-systems">
        <summary>
          <span><span className="eyebrow">02 / HUMAN-AGENT ENGINEERING</span><h2>Create environments where agents and people thrive together.</h2></span>
          <span className="disclosure-toggle" aria-hidden="true"><span className="disclosure-closed">Expand ↓</span><span className="disclosure-open">Collapse ↑</span></span>
        </summary>
        <div className="cv-disclosure-content">
          <p className="agent-definition">I embed AI in how I explore problems, shape design decisions, and build software—from using agents as critical collaborators in early design work to orchestrating repeatable development and verification workflows. I’m building practical experience designing environments where agents have the context, boundaries, and feedback loops to contribute reliably alongside people.</p>
          <div className="agent-case">
            <p className="agent-kicker">A concrete pattern</p>
            <p>I built an orchestration workflow to streamline parallel library and application development. It encodes the Git workflow, local dependency override, builds, test suites, and automated code review so agents can carry a well-specified change through integrated verification with fewer manual handoffs.</p>
          </div>
          <figure className="agent-feedback">
            <figcaption>
              <span>Agent feedback</span>
              <span>GPT-5.6 Terra · medium reasoning</span>
            </figcaption>
            <blockquote>
              Zak drove the design toward clearer ownership and reviewability, challenging ambiguous terminology and insisting on explicit APIs, consistency guarantees, and decision boundaries. His questions exposed real gaps in compatibility, snapshot semantics, and atomic reads. One improvement: consolidate decisions into the document more regularly to reduce duplicated or superseded wording.
            </blockquote>
            <p>Feedback generated during a design exercise.</p>
          </figure>
        </div>
      </details>

      <section className="cv-section experience" aria-labelledby="experience-heading">
        <div className="cv-section-heading"><p className="eyebrow">03 / EXPERIENCE</p><h2 id="experience-heading">Work that moves closer to the code.</h2></div>
        <div className="experience-list">
          <article className="role">
            <div className="role-meta"><p>2025 - present</p><p>San Francisco Bay Area</p></div>
            <div><p className="role-company">Salesforce</p><h3>Software Engineer</h3><p className="role-intro">Building and improving real-time infrastructure-protection services.</p><ul>{salesforceHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
          </article>
          <article className="role"><div className="role-meta"><p>2021 - 2024</p><p>Santa Clara, CA</p></div><div><p className="role-company">Amazon Web Services</p><h3>Engineering Manager</h3><ul><li>Managed and grew a team of 12 engineers responsible for backend services supporting a globally used internal work-management platform.</li><li>Set technical and product direction, roadmaps, operational practices, and growth plans while balancing delivery, reliability, and technical debt.</li><li>Created team and organization-wide practices for roadmap communication, mentorship, and cross-team knowledge sharing.</li></ul></div></article>
          <article className="role"><div className="role-meta"><p>2018 - 2021</p><p>Seattle, WA</p></div><div><p className="role-company">Amazon Web Services</p><h3>Technical Program Manager</h3><ul><li>Led cross-functional software initiatives from problem definition and requirements through delivery, testing, security review, and rollout.</li><li>Directed programs spanning asset visibility, operational software, and time-sensitive workforce systems, coordinating teams of 4-9 developers and external dependencies.</li><li>Created a product-management intake program and improved an operational ordering process, reducing support tickets by 80%.</li></ul></div></article>
          <article className="role"><div className="role-meta"><p>2014 - 2018</p><p>Seattle, WA</p></div><div><p className="role-company">Amazon & Amazon Web Services</p><h3>Program Manager</h3><ul><li>Worked across vendor operations, capacity planning, forecasting, and supply-chain systems at Amazon scale.</li><li>Built data-informed tools and reporting that helped leaders understand demand variability, constraints, and execution options.</li></ul></div></article>
        </div>
      </section>

      <section className="cv-section cv-bottom-grid">
        <div><p className="eyebrow">04 / TECHNICAL TOOLKIT</p><h2>Current practice</h2><p className="skill-copy"><strong>Engineering:</strong> Java, backend and distributed systems, REST APIs, persistence, concurrency, automated testing, observability, incident response.</p><p className="skill-copy"><strong>Human-agent engineering:</strong> Agentic coding with Claude, Codex, and OpenCode; creating reusable skills, agents, quality gates, and team workflows while improving the system through use.</p><p className="skill-copy"><strong>Earlier hands-on work:</strong> Node.js, Express, PostgreSQL, React, HTML/CSS, Git, and deployment.</p></div>
        <div><p className="eyebrow">05 / EDUCATION</p><h2>Wahoowa</h2><p className="education-school">University of Virginia</p><p>BS, Civil & Environmental Engineering<br />BA, Economics</p><p className="education-date">Graduated December 2013</p></div>
      </section>

      <section className="cv-contact"><p className="eyebrow">OPEN TO A GOOD CONVERSATION</p><h2>Let&apos;s build something useful.</h2><a className="email-link" href="mailto:zak.goldberg@gmail.com">zak.goldberg@gmail.com <span aria-hidden="true">↗</span></a></section>

      <footer><span>© Zak Goldberg</span><span>Curiosity backed by execution.</span></footer>
    </main>
  );
}
