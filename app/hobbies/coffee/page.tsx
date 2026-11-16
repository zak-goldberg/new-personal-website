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
    roaster: "Camber Coffee",
    name: "Big Joy Espresso",
    origin: "Guatemala",
    process: "Washed",
    notes: "Dark chocolate · baking spices · cherry",
    href: "https://cambercoffee.com/product/big-joy-espresso/",
    image: "https://cambercoffee.com/wp-content/uploads/2018/05/Camber_2025_BigJoy_Site.png",
    imageAlt: "Bag of Camber Coffee Big Joy Espresso",
    showWholeImage: true,
  },
  {
    brew: "FILTER",
    roaster: "Verve Coffee Roasters",
    name: "Ethiopia Chelchele",
    origin: "Yirgacheffe, Ethiopia",
    process: "Washed",
    notes: "Jasmine · toffee · lemon custard",
    href: "https://www.vervecoffee.com/products/chelchele",
    image: "https://www.vervecoffee.com/cdn/shop/files/Chelchele-12oz-Silo.png?v=1785261074",
    imageAlt: "Bag of Verve Coffee Ethiopia Chelchele",
    showWholeImage: true,
  },
  {
    brew: "FILTER",
    roaster: "Camber Coffee",
    name: "Honduras Geovany Rivera",
    origin: "Santa Bárbara, Honduras",
    process: "Washed",
    notes: "Rosehip · toffee · kumquat",
    href: "https://cambercoffee.com/product/honduras-geovany-rivera/",
    image: "https://cambercoffee.com/wp-content/uploads/2026/09/Camber_Honduras-Geovany-Rivera.png",
    imageAlt: "Bag of Camber Coffee Honduras Geovany Rivera",
    showWholeImage: true,
  },
  {
    brew: "INCOMING",
    roaster: "Onyx Coffee Lab",
    name: "2026 Advent Calendar",
    origin: "24 single-origin coffees",
    process: "56g daily releases",
    notes: "A very caffeinated December",
    href: "https://onyxcoffeelab.com/products/2026-advent-calendar",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/Advent-Square.webp?v=1790865979",
    imageAlt: "Onyx Coffee Lab 2026 Advent Calendar box",
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
