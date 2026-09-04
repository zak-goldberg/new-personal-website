import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies | Zak Goldberg",
  description: "The things Zak Goldberg makes time to learn, enjoy, and keep getting a little better at.",
};

const hobbies = [
  {
    number: "01",
    title: "Running / Cycling",
    description: "Not quite as athletic as I think I am.",
    status: "NEXT UP",
    className: "hobby-card-running",
  },
  {
    number: "02",
    title: "Coffee",
    description: "A small home café, a changing rotation, and a very normal amount of gear.",
    href: "/hobbies/coffee",
    status: "OPEN THE CAFÉ ↗",
    className: "hobby-card-coffee",
  },
  {
    number: "03",
    title: "Family / Outdoors",
    description: "Time outside, and the people I'd rather be out there with.",
    status: "NEXT UP",
    className: "hobby-card-outdoors",
  },
  {
    number: "04",
    title: "Music",
    description: "What I'm listening to.",
    status: "NEXT UP",
    className: "hobby-card-music",
  },
];

export default function HobbiesPage() {
  return (
    <main className="hobbies-page">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="/">ZAK GOLDBERG</a>
        <div className="nav-links">
          <a href="/cv">CV</a>
          <a aria-current="page" href="/hobbies">HOBBIES</a>
        </div>
      </nav>

      <header className="hobbies-hero">
        <p className="eyebrow">OFF THE CLOCK / ON PURPOSE</p>
        <h1>Things I make time for.</h1>
        <p>Other things I do.</p>
      </header>

      <section className="hobbies-list" aria-label="Hobby pages">
        {hobbies.map((hobby) => {
          const content = <>
            <div className="hobby-card-topline"><span>{hobby.number}</span><span>{hobby.status}</span></div>
            <h2>{hobby.title}</h2>
            <p>{hobby.description}</p>
          </>;

          return hobby.href ? (
            <a className={`hobby-card ${hobby.className}`} href={hobby.href} key={hobby.title}>{content}</a>
          ) : (
            <article className={`hobby-card ${hobby.className}`} key={hobby.title}>{content}</article>
          );
        })}
      </section>

      <footer>
        <span>© Zak Goldberg</span>
        <span>Curiosity backed by execution.</span>
      </footer>
    </main>
  );
}
