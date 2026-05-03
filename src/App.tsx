import React, { useState } from "react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

type LanguageKey = "English" | "Spanish" | "Tagalog" | "Italian" | "Hebrew" | "French";

const IMAGE_LOCK = {
  hero: "/images/GrowArea.jpg",

  guest: "/images/guest.jpg",
  customer: "/images/produce.jpg",
  marketplace: "/images/marketplace.jpg",
  grower: "/images/grower.jpg",
  youth: "/images/youth-workforce.jpg",
  partner: "/images/partner.jpg",
  volunteer: "/images/volunteer.jpg",
};

const pathways: Record<
  PathwayKey,
  {
    title: string;
    subtitle: string;
    image: string;
  }
> = {
  guest: {
    title: "Guest Pathway",
    subtitle: "Walk in as a visitor. Leave understanding the vision.",
    image: IMAGE_LOCK.guest,
  },
  customer: {
    title: "Customer Pathway",
    subtitle: "Fresh food becomes a repeat healthy choice.",
    image: IMAGE_LOCK.customer,
  },
  marketplace: {
    title: "Marketplace",
    subtitle: "Interest becomes purchasing power.",
    image: IMAGE_LOCK.marketplace,
  },
  grower: {
    title: "Grower Pathway",
    subtitle: "Grow more than food. Grow opportunity.",
    image: IMAGE_LOCK.grower,
  },
  youth: {
    title: "Youth Workforce Pathway",
    subtitle: "Young people build skills by doing real work in a real ecosystem.",
    image: IMAGE_LOCK.youth,
  },
  partner: {
    title: "Partner Pathway",
    subtitle: "Organizations align resources for community impact.",
    image: IMAGE_LOCK.partner,
  },
  volunteer: {
    title: "Volunteer Pathway",
    subtitle: "Community members support the work that helps the farm grow.",
    image: IMAGE_LOCK.volunteer,
  },
};

const languages: LanguageKey[] = [
  "English",
  "Spanish",
  "Tagalog",
  "Italian",
  "Hebrew",
  "French",
];

export default function App() {
  const [language, setLanguage] = useState<LanguageKey>("English");

  const goToPathway = (key: PathwayKey) => {
    const el = document.getElementById(key);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">Bronson Family Farm</div>

        <nav className="nav">
          <button onClick={() => goToPathway("marketplace")}>Enter Marketplace</button>
          <button onClick={() => goToPathway("grower")}>Meet the Grower Pathway</button>
          <button onClick={() => goToPathway("youth")}>Youth Workforce</button>
        </nav>

        <select value={language} onChange={(e) => setLanguage(e.target.value as LanguageKey)}>
          {languages.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
      </header>

      <section className="intro">
        <h1>Choose a pathway or follow the guided tour.</h1>
        <p>Start with the guided experience or enter the pathway that matches your role.</p>
      </section>

      <section className="cards">
        {(Object.keys(pathways) as PathwayKey[]).map((key) => {
          const item = pathways[key];

          return (
            <article className="card" id={key} key={key}>
              <img src={item.image} alt={item.title} />
              <div className="cardBody">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="guided">
        <h2>Guided Ecosystem Tour</h2>
        <p>
          Bronson Family Farm connects land, food, growers, customers, youth workforce,
          volunteers, and partners into one place-based community food ecosystem.
        </p>
      </section>

      <footer>
        Developed by Bronson Family Farm · In partnership with Farm & Family Alliance, Inc.
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f4eddc;
          color: #123f2a;
          font-family: Georgia, "Times New Roman", serif;
        }

        button, select {
          font-family: inherit;
        }

        .app {
          min-height: 100vh;
          background: #f4eddc;
        }

        .topbar {
          height: 88px;
          display: grid;
          grid-template-columns: 1fr auto 140px;
          align-items: center;
          gap: 24px;
          padding: 0 28px;
          background: #f5efdf;
          border-bottom: 1px solid rgba(18, 63, 42, 0.15);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .brand {
          font-size: 1.35rem;
          font-weight: 800;
        }

        .nav {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav button {
          border: 1px solid rgba(18, 63, 42, 0.18);
          background: rgba(255, 255, 255, 0.75);
          color: #123f2a;
          border-radius: 999px;
          padding: 12px 18px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(0,0,0,0.04);
        }

        select {
          border: 1px solid rgba(18, 63, 42, 0.18);
          background: rgba(255, 255, 255, 0.75);
          color: #123f2a;
          border-radius: 999px;
          padding: 12px 14px;
          font-weight: 700;
        }

        .intro {
          max-width: 1280px;
          margin: 0 auto;
          padding: 44px 28px 22px;
        }

        .intro h1 {
          font-size: clamp(2.4rem, 5vw, 4.1rem);
          line-height: 1.05;
          margin: 0 0 18px;
          font-weight: 500;
        }

        .intro p {
          font-size: 1.25rem;
          margin: 0;
          color: #1d2b1e;
        }

        .cards {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px 60px;
          display: grid;
          grid-template-columns: repeat(5, minmax(190px, 1fr));
          gap: 20px;
          align-items: start;
        }

        .card {
          background: rgba(255, 255, 255, 0.76);
          border-radius: 26px;
          overflow: hidden;
          min-height: 336px;
          box-shadow: 0 20px 36px rgba(60, 45, 20, 0.12);
          border: 1px solid rgba(18, 63, 42, 0.08);
        }

        .card img {
          width: 100%;
          height: 164px;
          object-fit: cover;
          display: block;
        }

        .cardBody {
          padding: 22px 18px 24px;
        }

        .card h2 {
          font-size: 1.45rem;
          line-height: 1.05;
          margin: 0 0 10px;
          font-weight: 800;
        }

        .card p {
          margin: 0;
          color: #333020;
          font-size: 1rem;
          line-height: 1.35;
        }

        .guided {
          max-width: 1180px;
          margin: 0 auto 50px;
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(18, 63, 42, 0.08);
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 16px 30px rgba(60, 45, 20, 0.09);
        }

        .guided h2 {
          font-size: 2rem;
          margin: 0 0 12px;
        }

        .guided p {
          font-size: 1.15rem;
          line-height: 1.55;
          margin: 0;
          color: #2d2a1f;
        }

        footer {
          text-align: center;
          padding: 30px 18px 40px;
          color: #4f5a41;
        }

        @media (max-width: 1150px) {
          .cards {
            grid-template-columns: repeat(3, minmax(190px, 1fr));
          }

          .topbar {
            grid-template-columns: 1fr;
            height: auto;
            padding: 18px;
          }
        }

        @media (max-width: 720px) {
          .cards {
            grid-template-columns: 1fr;
          }

          .card img {
            height: 220px;
          }

          .intro {
            padding-top: 30px;
          }
        }
      `}</style>
    </main>
  );
}
