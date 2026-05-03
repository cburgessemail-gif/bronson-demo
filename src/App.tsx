import React, { useEffect, useMemo, useState } from "react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

type LanguageKey = "English" | "Spanish" | "Tagalog" | "Italian" | "Hebrew" | "French";

const roots = ["", "/images"];

const makePaths = (names: string[]) =>
  roots.flatMap((root) => names.map((name) => `${root}/${name}`));

const IMAGE_LOCK: Record<PathwayKey, string[]> = {
  guest: makePaths([
    "guest.jpg",
    "Guest.jpg",
    "GrowArea2.jpg",
    "GrowArea2.JPG",
    "GrowArea.jpg",
    "GrowArea.JPG",
  ]),

  customer: makePaths([
    "produce.jpg",
    "Produce.jpg",
    "customer.jpg",
    "Customer.jpg",
    "seedlings.jpg",
    "Seedlings.jpg",
    "vegetables.jpg",
    "Vegetables.jpg",
    "GrownBy.jpg",
    "grownby.jpg",
  ]),

  marketplace: makePaths([
    "marketplace.jpg",
    "Marketplace.jpg",
    "market.jpg",
    "Market.jpg",
    "storefront.jpg",
    "Storefront.jpg",
    "vendor.jpg",
    "Vendor.jpg",
    "table.jpg",
    "Table.jpg",
    "GrownBy.jpg",
    "grownby.jpg",
  ]),

  grower: makePaths([
    "grower.jpg",
    "Grower.jpg",
    "growing.jpg",
    "Growing.jpg",
    "GrowArea.jpg",
    "GrowArea.JPG",
    "GrowArea2.jpg",
    "GrowArea2.JPG",
  ]),

  youth: makePaths([
    "youth-workforce.jpg",
    "YouthWorkforce.jpg",
    "youth.jpg",
    "Youth.jpg",
    "workforce.jpg",
    "Workforce.jpg",
    "people.jpg",
    "People.jpg",
  ]),

  partner: makePaths([
    "partner.jpg",
    "Partner.jpg",
    "community.jpg",
    "Community.jpg",
    "group.jpg",
    "Group.jpg",
  ]),

  volunteer: makePaths([
    "volunteer.jpg",
    "Volunteer.jpg",
    "volunteers.jpg",
    "Volunteers.jpg",
    "people.jpg",
    "People.jpg",
  ]),
};

const pathways: Record<PathwayKey, { title: string; subtitle: string }> = {
  guest: {
    title: "Guest Pathway",
    subtitle: "Walk in as a visitor. Leave understanding the vision.",
  },
  customer: {
    title: "Customer Pathway",
    subtitle: "Fresh food becomes a repeat healthy choice.",
  },
  marketplace: {
    title: "Marketplace",
    subtitle: "Interest becomes purchasing power.",
  },
  grower: {
    title: "Grower Pathway",
    subtitle: "Grow more than food. Grow opportunity.",
  },
  youth: {
    title: "Youth Workforce Pathway",
    subtitle: "Young people build skills by doing real work in a real ecosystem.",
  },
  partner: {
    title: "Partner Pathway",
    subtitle: "Organizations align resources for community impact.",
  },
  volunteer: {
    title: "Volunteer Pathway",
    subtitle: "Community members support the work that helps the farm grow.",
  },
};

const languages: LanguageKey[] = ["English", "Spanish", "Tagalog", "Italian", "Hebrew", "French"];

function SmartImage({ imageKey, alt }: { imageKey: PathwayKey; alt: string }) {
  const candidates = useMemo(() => IMAGE_LOCK[imageKey], [imageKey]);
  const [src, setSrc] = useState("");

  useEffect(() => {
    let cancelled = false;

    const tryImage = async () => {
      for (const path of candidates) {
        const works = await new Promise<boolean>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = path;
        });

        if (works && !cancelled) {
          setSrc(path);
          return;
        }
      }

      if (!cancelled) setSrc("");
    };

    tryImage();

    return () => {
      cancelled = true;
    };
  }, [candidates]);

  if (!src) {
    return (
      <div className="imageFallback">
        <span>{alt}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} />;
}

export default function App() {
  const [language, setLanguage] = useState<LanguageKey>("English");

  const goToPathway = (key: PathwayKey) => {
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">Bronson Family Farm</div>

        <nav>
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
        {(Object.keys(pathways) as PathwayKey[]).map((key) => (
          <article className="card" id={key} key={key}>
            <SmartImage imageKey={key} alt={pathways[key].title} />
            <div className="cardBody">
              <h2>{pathways[key].title}</h2>
              <p>{pathways[key].subtitle}</p>
            </div>
          </article>
        ))}
      </section>

      <footer>
        Developed by Bronson Family Farm · In partnership with Farm & Family Alliance, Inc.
      </footer>

      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #f4eddc;
          color: #123f2a;
          font-family: Georgia, "Times New Roman", serif;
        }

        button, select { font-family: inherit; }

        .app {
          min-height: 100vh;
          background: #f4eddc;
        }

        .topbar {
          min-height: 88px;
          display: grid;
          grid-template-columns: 1fr auto 150px;
          align-items: center;
          gap: 24px;
          padding: 18px 28px;
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

        nav {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        nav button, select {
          border: 1px solid rgba(18, 63, 42, 0.18);
          background: rgba(255, 255, 255, 0.75);
          color: #123f2a;
          border-radius: 999px;
          padding: 12px 18px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(0,0,0,0.04);
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
          background: rgba(255,255,255,0.76);
          border-radius: 26px;
          overflow: hidden;
          min-height: 336px;
          box-shadow: 0 20px 36px rgba(60,45,20,0.12);
          border: 1px solid rgba(18,63,42,0.08);
        }

        .card img,
        .imageFallback {
          width: 100%;
          height: 164px;
          object-fit: cover;
          display: block;
          background: #e7dcc5;
        }

        .imageFallback {
          display: grid;
          place-items: center;
          padding: 16px;
          color: #123f2a;
          font-weight: 700;
          text-align: center;
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

        footer {
          background: #062112;
          color: #f4eddc;
          text-align: center;
          padding: 30px 18px 40px;
        }

        @media (max-width: 1150px) {
          .cards { grid-template-columns: repeat(3, minmax(190px, 1fr)); }
          .topbar { grid-template-columns: 1fr; }
        }

        @media (max-width: 720px) {
          .cards { grid-template-columns: 1fr; }
          .card img, .imageFallback { height: 220px; }
        }
      `}</style>
    </main>
  );
}
