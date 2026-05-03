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

const samImages = Array.from({ length: 200 }, (_, i) => {
  const n = String(800 + i).padStart(4, "0");
  return [`/images/SAM_${n}.JPG`, `/images/SAM_${n}.jpg`];
}).flat();

const IMAGE_LOCK: Record<PathwayKey | "hero", string[]> = {
  hero: [
    "/images/GrowArea.jpg",
    "/images/GrowArea.JPG",
    "/images/GrowArea2.jpg",
    "/images/GrowArea2.JPG",
    ...samImages,
  ],

  guest: [
    "/images/guest.jpg",
    "/images/Guest.jpg",
    "/images/farm.jpg",
    "/images/Farm.jpg",
    "/images/farm-road.jpg",
    "/images/FarmRoad.jpg",
    "/images/GrowArea2.jpg",
    "/images/GrowArea2.JPG",
    ...samImages,
  ],

  customer: [
    "/images/produce.jpg",
    "/images/Produce.jpg",
    "/images/customer.jpg",
    "/images/Customer.jpg",
    "/images/seedlings.jpg",
    "/images/Seedlings.jpg",
    "/images/vegetables.jpg",
    "/images/Vegetables.jpg",
    ...samImages,
  ],

  marketplace: [
    "/images/marketplace.jpg",
    "/images/Marketplace.jpg",
    "/images/market.jpg",
    "/images/Market.jpg",
    "/images/storefront.jpg",
    "/images/Storefront.jpg",
    "/images/vendor.jpg",
    "/images/Vendor.jpg",
    "/images/table.jpg",
    "/images/Table.jpg",
    ...samImages,
  ],

  grower: [
    "/images/grower.jpg",
    "/images/Grower.jpg",
    "/images/growing.jpg",
    "/images/Growing.jpg",
    "/images/crops.jpg",
    "/images/Crops.jpg",
    "/images/GrowArea.jpg",
    "/images/GrowArea.JPG",
    ...samImages,
  ],

  youth: [
    "/images/youth-workforce.jpg",
    "/images/YouthWorkforce.jpg",
    "/images/youth.jpg",
    "/images/Youth.jpg",
    "/images/workforce.jpg",
    "/images/Workforce.jpg",
    "/images/people.jpg",
    "/images/People.jpg",
    ...samImages,
  ],

  partner: [
    "/images/partner.jpg",
    "/images/Partner.jpg",
    "/images/community.jpg",
    "/images/Community.jpg",
    "/images/group.jpg",
    "/images/Group.jpg",
    ...samImages,
  ],

  volunteer: [
    "/images/volunteer.jpg",
    "/images/Volunteer.jpg",
    "/images/volunteers.jpg",
    "/images/Volunteers.jpg",
    "/images/people.jpg",
    "/images/People.jpg",
    ...samImages,
  ],
};

const pathways: Record<
  PathwayKey,
  {
    title: string;
    subtitle: string;
    imageKey: PathwayKey;
  }
> = {
  guest: {
    title: "Guest Pathway",
    subtitle: "Walk in as a visitor. Leave understanding the vision.",
    imageKey: "guest",
  },
  customer: {
    title: "Customer Pathway",
    subtitle: "Fresh food becomes a repeat healthy choice.",
    imageKey: "customer",
  },
  marketplace: {
    title: "Marketplace",
    subtitle: "Interest becomes purchasing power.",
    imageKey: "marketplace",
  },
  grower: {
    title: "Grower Pathway",
    subtitle: "Grow more than food. Grow opportunity.",
    imageKey: "grower",
  },
  youth: {
    title: "Youth Workforce Pathway",
    subtitle: "Young people build skills by doing real work in a real ecosystem.",
    imageKey: "youth",
  },
  partner: {
    title: "Partner Pathway",
    subtitle: "Organizations align resources for community impact.",
    imageKey: "partner",
  },
  volunteer: {
    title: "Volunteer Pathway",
    subtitle: "Community members support the work that helps the farm grow.",
    imageKey: "volunteer",
  },
};

const languages: LanguageKey[] = ["English", "Spanish", "Tagalog", "Italian", "Hebrew", "French"];

function SmartImage({
  imageKey,
  alt,
}: {
  imageKey: keyof typeof IMAGE_LOCK;
  alt: string;
}) {
  const candidates = useMemo(() => IMAGE_LOCK[imageKey], [imageKey]);
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function findImage() {
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
    }

    findImage();

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
        {(Object.keys(pathways) as PathwayKey[]).map((key) => {
          const item = pathways[key];

          return (
            <article className="card" id={key} key={key}>
              <SmartImage imageKey={item.imageKey} alt={item.title} />
              <div className="cardBody">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </article>
          );
        })}
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

        button,
        select {
          font-family: inherit;
        }

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

        nav button,
        select {
          border: 1px solid rgba(18, 63, 42, 0.18);
          background: rgba(255, 255, 255, 0.75);
          color: #123f2a;
          border-radius: 999px;
          padding: 12px 18px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
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
          .cards {
            grid-template-columns: repeat(3, minmax(190px, 1fr));
          }

          .topbar {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .cards {
            grid-template-columns: 1fr;
          }

          .card img,
          .imageFallback {
            height: 220px;
          }
        }
      `}</style>
    </main>
  );
}
