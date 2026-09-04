import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee | Zak Goldberg",
  description: "A small log of the coffee Zak Goldberg is brewing, learning from, and enjoying.",
};

const gear = [
  {
    category: "ESPRESSO",
    items: [
      ["MiiCoffee Apex v2", "Espresso machine"],
      ["Turin DF54", "Flat-burr grinder"],
      ["Normcore WDT", "Even distribution"],
      ["Bottomless portafilter", "A clearer view of the extraction"],
    ],
  },
  {
    category: "FILTER",
    items: [
      ["Fellow Ode Gen 2", "Brew grinder"],
      ["Hario V60 02", "Pour-over brewer"],
      ["AeroPress + Prismo", "Travel-friendly brewer"],
      ["Verve Dwell", "Dripper"],
    ],
  },
  {
    category: "SHARED",
    items: [
      ["Bonavita kettle", "Temperature-controlled water"],
      ["Hario coffee scale", "The small details matter"],
    ],
  },
];

const currentCoffees = [
  {
    brew: "ESPRESSO",
    roaster: "Dune Coffee",
    name: "Zip Zinger",
    origin: "Colombia · Ethiopia · Honduras",
    process: "Washed + natural",
    notes: "Dark chocolate · stone fruits · rich",
    href: "https://www.dunecoffee.com/products/zip-zinger",
    image: "https://www.dunecoffee.com/cdn/shop/files/zip-zinger_10z.png?v=1773955988&width=1100",
    imageAlt: "Bag of Dune Coffee Zip Zinger",
  },
  {
    brew: "FILTER",
    roaster: "Timeless Coffee",
    name: "Peru Selva Andina",
    origin: "Peru · organic",
    process: "Pour-over",
    notes: "Watermelon · green apple · caramel",
    href: "https://www.instagram.com/p/DWoi9Irkt27/",
    image: "https://scontent-sjc3-1.cdninstagram.com/v/t51.82787-15/657600773_18576673147020192_7041017004442868049_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzg2NjQ5NDAxNDg4ODAwOTE0Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8gHK2UlYlakQ7kNvwEkZH1a&_nc_oc=AdoEO4RGbq82Dw7_gxFp4IJjB0KKGpq2UWlb4Tc6i6MmRqysHcr20OPgPRnZbqZQ_atLRBnkuxdqCM3OPoS1ob09&_nc_zt=23&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_gid=Oo7pA78P4qvzKUF-E-mhNg&_nc_ss=7b289&oh=00_AQIqGe9OXf6Hza58Hlc-G4OziFACEEaUj65Jtg4gsPQuhQ&oe=6A9FBF8C",
    imageAlt: "Timeless Coffee Peru Selva Andina coffee",
    showWholeImage: true,
  },
  {
    brew: "FILTER",
    roaster: "Sterling Coffee Roasters",
    name: "Kenya Kirinyaga AA",
    origin: "Kirinyaga, Kenya",
    process: "Washed",
    notes: "Grapefruit · ripe plum",
    href: "https://www.sterling.coffee/products/kenya-kirinyaga-aa-tastes-like-grapefruit-plum",
    image: "https://www.sterling.coffee/cdn/shop/files/KirinyagaAA_1200x1200.png?v=1775671080",
    imageAlt: "Bag of Sterling Coffee Kenya Kirinyaga AA",
  },
  {
    brew: "DECAF",
    roaster: "Saint Frank Coffee",
    name: "Burundi Ubuntu Decaf",
    origin: "Kayanza Province, Burundi",
    process: "Swiss Water decaf",
    notes: "Almond Joy · orange candy · dark chocolate",
    href: "https://www.saintfrankcoffee.com/products/burundi-ubuntu-decaf1",
    image: "https://www.saintfrankcoffee.com/cdn/shop/files/ubuntu_2026label.jpg?v=1788469994&width=2000",
    imageAlt: "Bag of Saint Frank Coffee Burundi Ubuntu Decaf",
    showWholeImage: true,
  },
];

export default function CoffeePage() {
  return (
    <main className="coffee-page">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="/">ZAK GOLDBERG</a>
        <div className="nav-links">
          <a href="/cv">CV</a>
          <a href="/hobbies">HOBBIES</a>
        </div>
      </nav>

      <header className="coffee-hero">
        <p className="eyebrow">SIDE QUEST / COFFEE</p>
        <h1>cafe rico</h1>
        <p>Dialing it in since 2026.</p>
      </header>

      <section className="coffee-setup" aria-labelledby="setup-heading">
        <div className="coffee-section-heading">
          <p className="eyebrow">01 / MY SETUP</p>
          <h2 id="setup-heading">A very normal amount of coffee equipment.</h2>
        </div>
        <figure className="setup-figure">
          <img
            alt="Zak Goldberg's home coffee setup, with espresso and pour-over equipment"
            src="https://media.zak-goldberg.dev/coffee/coffee-setup.jpeg"
          />
          <figcaption>
            <span>HOME COFFEE LAB</span>
            <span>MINIMAL GEAR. MAXIMIZING FLAVOR.</span>
          </figcaption>
        </figure>
        <p className="setup-copy">It&apos;s a kitchen counter, not a lab. The scale suggests otherwise.</p>
      </section>

      <section className="coffee-brewing" aria-labelledby="brewing-heading">
        <div className="coffee-section-heading coffee-brewing-heading">
          <p className="eyebrow">02 / WHAT I&apos;M BREWING NOW</p>
          <h2 id="brewing-heading">The current rotation.</h2>
        </div>
        <div className="coffee-grid">
          {currentCoffees.map((coffee) => (
            <article className="coffee-card" key={`${coffee.roaster}-${coffee.name}`}>
              <a className="coffee-card-image" href={coffee.href} target="_blank" rel="noreferrer">
                <img alt={coffee.imageAlt} className={coffee.showWholeImage ? "coffee-card-image-contain" : undefined} src={coffee.image} />
              </a>
              <div className="coffee-card-copy">
                <p className="coffee-card-brew">{coffee.brew}</p>
                <p className="coffee-card-roaster">{coffee.roaster}</p>
                <h3>{coffee.name}</h3>
                <p className="coffee-card-facts">{coffee.origin}<br />{coffee.process}</p>
                <p className="coffee-card-notes">{coffee.notes}</p>
                <a className="coffee-source-link" href={coffee.href} target="_blank" rel="noreferrer">Coffee details <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="coffee-gear" aria-labelledby="gear-heading">
        <div className="coffee-section-heading">
          <p className="eyebrow">03 / MY GEAR</p>
          <h2 id="gear-heading">The tools I reach for.</h2>
        </div>
        <div className="gear-grid">
          {gear.map(({ category, items }) => (
            <article className="gear-category" key={category}>
              <h3>{category}</h3>
              <ul>
                {items.map(([name, detail]) => (
                  <li key={name}>
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>© Zak Goldberg</span>
        <span>Curiosity backed by execution.</span>
      </footer>
    </main>
  );
}
