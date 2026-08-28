import Image from "next/image";

const timeline = [
  ["UVa", "Civil Engineering", "Structured engineering thinking"],
  ["UVa", "Economics", "Incentives and systems"],
  ["Amazon", "Business Operations", "How organizations scale"],
  ["Amazon", "Technical Program Management", "Complex technical execution"],
  ["Amazon", "Engineering Management", "Leadership, alignment, and difficult conversations"],
  ["Salesforce", "Software Engineering", "Getting my hands dirty with agentic coding"],
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">ZAK GOLDBERG</a>
        <div className="nav-links">
          <a href="#journey">Journey</a>
          <a href="/cv">CV</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">PERSONAL WEBSITE / UNDER CONSTRUCTION</p>
        <div className="hero-grid">
          <div>
            <h1>I build software, solve business problems, and enjoy learning new disciplines.</h1>
            <p className="intro">Curiosity backed by execution.</p>
          </div>
          <div className="portrait">
            <Image
              alt="Pixel-art portrait of Zak Goldberg"
              fill
              priority
              sizes="(max-width: 620px) 12rem, 30vw"
              src="/images/zak-pixel-portrait.png"
            />
          </div>
        </div>
      </section>

      <section className="journey" id="journey" aria-labelledby="journey-heading">
        <div className="section-heading">
          <p className="eyebrow">01 / THE JOURNEY</p>
          <h2 id="journey-heading">Each chapter builds on the last.</h2>
          <p className="journey-intro">Engineering and systems thinking, operations and technical execution at scale, leadership, and software development build into one another to create a compounding ability to solve useful problems.</p>
        </div>
        <ol className="timeline">
          {timeline.map(([organization, title, lesson], index) => (
            <li key={title}>
              <span className="timeline-number">0{index + 1}</span>
              <span className="timeline-context">{organization}</span>
              <h3>{title}</h3>
              <p>{lesson}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="next-section" id="projects">
        <p className="eyebrow">02 / NEXT UP</p>
        <h2>Projects, work, and life beyond the timeline.</h2>
        <p>More of the site will take shape here through iteration.</p>
      </section>

      <footer id="about">
        <span>© Zak Goldberg</span>
        <span>Curiosity backed by execution.</span>
      </footer>
    </main>
  );
}
