import React, { useMemo, useState } from "react";

type Lang = "en" | "es" | "tl" | "it" | "fr" | "he";
type PathKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner";

const imageList = [
  "/images/GrowArea.jpg",
  "/images/GrowArea2.jpg",
  "/images/SAM_0362.JPG",
  "/images/SAM_0363.JPG",
  "/images/SAM_0364.JPG",
  "/images/SAM_0365.JPG",
  "/images/SAM_0366.JPG",
  "/images/SAM_0367.JPG",
  "/images/SAM_0368.JPG",
  "/images/SAM_0369.JPG",
];

const fallbackImages: Record<PathKey, string[]> = {
  guest: ["/images/GrowArea2.jpg", "/images/GrowArea.jpg", "/images/SAM_0362.JPG"],
  customer: ["/images/SAM_0364.JPG", "/images/SAM_0365.JPG", "/images/GrowArea.jpg"],
  marketplace: [
    "/images/GrownByStorefront.png",
    "/images/grownby-storefront.png",
    "/images/GrownBy.png",
    "/images/SAM_0366.JPG",
  ],
  grower: ["/images/SAM_0367.JPG", "/images/GrowArea.jpg", "/images/GrowArea2.jpg"],
  youth: ["/images/SAM_0368.JPG", "/images/SAM_0369.JPG", "/images/GrowArea2.jpg"],
  partner: ["/images/SAM_0363.JPG", "/images/SAM_0364.JPG", "/images/GrowArea.jpg"],
};

const pathData: Record<
  PathKey,
  {
    label: string;
    eyebrow: string;
    title: string;
    mission: string;
    sound: string;
    intro: string;
    knowledge: string[];
    purpose: string;
    next: string;
    button: string;
  }
> = {
  guest: {
    label: "Guest",
    eyebrow: "Understand the land, the story, and the purpose.",
    title: "Guest Pathway",
    mission:
      "People understand the vision of Bronson Family Farm to experience land, legacy, food, and community restoration.",
    sound:
      "This is not just a farm. It is a living gateway into family legacy, food access, and community possibility.",
    intro:
      "Guests enter through the story of the land, the airport history, the growing fields, and the people building something useful for the Mahoning Valley.",
    knowledge: [
      "Bronson Family Farm is located at the Historic Lansdowne Airport site in Youngstown.",
      "The farm connects agritourism, education, food access, and regional collaboration.",
      "Guests can move from curiosity into participation through events, marketplace activity, volunteering, and partner pathways.",
    ],
    purpose:
      "The guest pathway makes the vision visible before asking anyone to participate.",
    next:
      "Continue from welcome into reservation, event check-in, tour stops, story stations, and marketplace connection.",
    button: "Enter Guest Pathway",
  },
  customer: {
    label: "Customer",
    eyebrow: "Fresh food, nutrition, and repeat healthy choices.",
    title: "Customer Pathway",
    mission:
      "Customers connect fresh food, nutrition education, and local purchasing into repeat healthy choices.",
    sound:
      "Customers do not just buy food. They learn where it comes from and how it supports local growers.",
    intro:
      "The customer pathway shows produce, Bubble Babies™, recipes, nutrition education, pickup options, and repeat purchasing.",
    knowledge: [
      "Customers can discover seedlings, produce, recipes, and seasonal growing information.",
      "SNAP-aware purchasing and pickup logic can support access and dignity.",
      "Nutrition education connects food choices to family health and community wellness.",
    ],
    purpose:
      "The customer pathway turns interest into food access and repeat participation.",
    next:
      "Continue to produce selection, Bubble Babies™, recipes, nutrition prompts, cart, pickup, and order history.",
    button: "Enter Customer Pathway",
  },
  marketplace: {
    label: "Marketplace",
    eyebrow: "Convert interest into purchasing power.",
    title: "Marketplace Pathway",
    mission:
      "The marketplace converts community interest into purchasing power, local sales, and ecosystem sustainability.",
    sound:
      "The marketplace is where the story becomes economic activity for growers, families, and the farm ecosystem.",
    intro:
      "This pathway connects visitors to the GrownBy storefront, event pre-orders, grower products, and marketplace participation.",
    knowledge: [
      "The marketplace should feel connected to the real GrownBy store experience.",
      "Growers in the ecosystem register first, then gain marketplace benefits.",
      "Customers can move from education to purchase without losing the farm story.",
    ],
    purpose:
      "The marketplace pathway shows how the ecosystem sustains itself through real transactions.",
    next:
      "Continue to storefront preview, product cards, SNAP notes, preorder flow, grower benefit explanation, and Enter Store.",
    button: "Enter Marketplace",
  },
  grower: {
    label: "Grower",
    eyebrow: "Connect producers to opportunity.",
    title: "Grower Pathway",
    mission:
      "Growers connect to opportunity, market participation, training, resources, and a regional food network.",
    sound:
      "Growers are not outside vendors. They are part of a shared ecosystem that helps food move through the Valley.",
    intro:
      "The grower pathway shows registration, benefits, training, crop planning, supply needs, and marketplace access.",
    knowledge: [
      "Registered growers can participate in the ecosystem marketplace.",
      "Support can include crop planning, supply education, distribution visibility, and shared events.",
      "The pathway helps growers understand how to move from growing to selling and collaborating.",
    ],
    purpose: "The grower pathway makes participation clear, fair, and useful.",
    next:
      "Continue to grower registration, crop calendar, supply market, training modules, and marketplace eligibility.",
    button: "Enter Grower Pathway",
  },
  youth: {
    label: "Youth Workforce",
    eyebrow: "Build skills, responsibility, and future readiness.",
    title: "Youth Workforce Pathway",
    mission:
      "Youth workers build skills, responsibility, confidence, and future readiness through farm-based work experiences.",
    sound:
      "Youth do not just complete tasks. They learn responsibility, communication, safety, and how work connects to community.",
    intro:
      "This pathway shows youth onboarding, supervisor oversight, life skills progression, task assignments, and parent visibility.",
    knowledge: [
      "Youth workforce roles can connect agriculture, technology, hospitality, logistics, and communications.",
      "Supervisors can track progress through skills, attendance, safety, and reflection.",
      "Parents and partners can see growth without turning the program into a classroom-only experience.",
    ],
    purpose:
      "The youth pathway shows how the farm becomes a workforce development environment.",
    next:
      "Continue to youth dashboard, supervisor view, parent portal, task cards, LSP scoring, and completion summary.",
    button: "Enter Youth Pathway",
  },
  partner: {
    label: "Partner",
    eyebrow: "Align resources and collaboration.",
    title: "Partner Pathway",
    mission:
      "Partners align resources, expertise, visibility, and collaboration for community benefit.",
    sound:
      "Partnership is how the ecosystem becomes stronger than one farm, one event, or one organization.",
    intro:
      "The partner pathway shows how organizations can support education, equipment, health, media, arts, workforce, and food access.",
    knowledge: [
      "Farm & Family Alliance, Inc. and Parker Farms are part of the ecosystem structure.",
      "Partners may support demonstrations, equipment, education, storytelling, funding, or community services.",
      "Each partner role should connect to a real contribution and a visible community outcome.",
    ],
    purpose: "The partner pathway shows how collaboration becomes action.",
    next:
      "Continue to partner roles, contribution options, event participation, sponsor visibility, and follow-up actions.",
    button: "Enter Partner Pathway",
  },
};

const partners = [
  "Farm & Family Alliance, Inc.",
  "Parker Farms",
  "Central State University",
  "Home Depot",
  "Gates Drone Services",
  "Petitti Garden Centers",
  "Elliott’s Garden Center",
  "Youngstown Area Jewish Foundation",
  "Jewish Federation",
];

const languages: Record<Lang, string> = {
  en: "English",
  es: "Spanish",
  tl: "Tagalog",
  it: "Italian",
  fr: "French",
  he: "Hebrew",
};

function SmartImage({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const src = images[index] || imageList[0];

  return (
    <div className="imageWrap">
      <img src={src} alt={alt} onError={() => setIndex((old) => old + 1)} />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [active, setActive] = useState<PathKey>("guest");
  const data = pathData[active];
  const dir = lang === "he" ? "rtl" : "ltr";
  const activeImages = useMemo(() => fallbackImages[active], [active]);

  function speak() {
    const text = `${data.title}. ${data.sound} ${data.intro} ${data.purpose}`;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88;
    utterance.pitch = 0.95;
    utterance.lang =
      lang === "es"
        ? "es-US"
        : lang === "tl"
        ? "fil-PH"
        : lang === "it"
        ? "it-IT"
        : lang === "fr"
        ? "fr-FR"
        : lang === "he"
        ? "he-IL"
        : "en-US";
    window.speechSynthesis.speak(utterance);
  }

  return (
    <main dir={dir}>
      <style>{`
        :root {
          --forest: #003828;
          --deep: #00261c;
          --leaf: #006b4b;
          --cream: #f5efe2;
          --card: #fffaf0;
          --gold: #ecd99f;
          --ink: #111111;
          --soft: rgba(0,0,0,.12);
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: var(--cream);
          color: var(--ink);
          font-family: Arial, Helvetica, sans-serif;
        }

        main {
          min-height: 100vh;
          border-top: 22px solid var(--deep);
          padding: 34px 7vw 70px;
        }

        .top {
          background: rgba(255,255,255,.88);
          border-radius: 22px;
          box-shadow: 0 12px 32px var(--soft);
          padding: 22px 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 44px;
        }

        .brand {
          color: var(--leaf);
          font-size: 13px;
          letter-spacing: .42em;
          text-transform: uppercase;
          font-weight: 800;
          margin-bottom: 6px;
        }

        h1 {
          font-size: clamp(30px, 4vw, 48px);
          margin: 0;
          line-height: 1.02;
          letter-spacing: -.04em;
        }

        select {
          padding: 14px 18px;
          border-radius: 16px;
          border: 1.5px solid var(--leaf);
          background: white;
          font-weight: 700;
          font-size: 16px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr .92fr;
          gap: 34px;
          align-items: start;
        }

        .heroCard, .pathCard {
          background: rgba(255,255,255,.55);
          border-radius: 26px;
          box-shadow: 0 12px 34px rgba(0,0,0,.08);
          overflow: hidden;
        }

        .heroCard { padding: 34px 38px; }

        .smallCaps {
          color: var(--leaf);
          font-size: 14px;
          letter-spacing: .42em;
          text-transform: uppercase;
          font-weight: 900;
        }

        .headline {
          font-size: clamp(42px, 6vw, 76px);
          line-height: .97;
          letter-spacing: -.065em;
          margin: 22px 0;
          font-weight: 900;
        }

        .lead {
          font-size: 20px;
          line-height: 1.65;
          color: #4a4a4a;
        }

        .tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        button {
          border: none;
          border-radius: 15px;
          padding: 14px 22px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0,0,0,.12);
        }

        .tab {
          background: var(--gold);
          color: #141414;
        }

        .tab.active {
          background: var(--leaf);
          color: white;
        }

        .imageWrap {
          width: 100%;
          min-height: 270px;
          background: var(--deep);
          overflow: hidden;
        }

        .imageWrap img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
        }

        .pathBody { padding: 28px 34px 34px; }

        h2 {
          margin: 10px 0 16px;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1;
          letter-spacing: -.05em;
        }

        .mission {
          background: var(--forest);
          color: white;
          padding: 18px 20px;
          border-radius: 15px;
          font-size: 17px;
          line-height: 1.5;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .section {
          background: var(--card);
          border: 1px solid rgba(0,0,0,.09);
          border-radius: 18px;
          padding: 20px;
          margin-top: 18px;
        }

        .sectionTitle {
          color: #a34c00;
          letter-spacing: .32em;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 13px;
          margin-bottom: 12px;
        }

        .section p, .section li {
          font-size: 17px;
          line-height: 1.55;
        }

        ul { padding-left: 22px; margin-bottom: 0; }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .primary {
          background: var(--leaf);
          color: white;
        }

        .secondary {
          background: var(--gold);
          color: #111;
        }

        .partnerStrip {
          margin-top: 34px;
          background: rgba(255,255,255,.65);
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 8px 24px rgba(0,0,0,.07);
        }

        .partnerGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .pill {
          background: white;
          border: 1px solid rgba(0,0,0,.1);
          border-radius: 999px;
          padding: 10px 14px;
          font-weight: 800;
          font-size: 14px;
        }

        .storePreview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 14px;
        }

        .product {
          background: white;
          border-radius: 14px;
          padding: 14px;
          border: 1px solid rgba(0,0,0,.08);
          font-weight: 800;
        }

        .product span {
          display: block;
          color: var(--leaf);
          font-size: 13px;
          margin-top: 6px;
        }

        @media (max-width: 980px) {
          main { padding: 22px 18px 50px; }
          .grid { grid-template-columns: 1fr; }
          .top { flex-direction: column; align-items: flex-start; }
          .headline { font-size: 46px; }
          .storePreview { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="top">
        <div>
          <div className="brand">Developed by Bronson Family Farm</div>
          <h1>Bronson Family Farm Ecosystem Demo</h1>
        </div>

        <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
          {Object.entries(languages).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </header>

      <section className="grid">
        <div className="heroCard">
          <div className="smallCaps">Serving the Mahoning Valley Area</div>
          <div className="headline">
            A living farm, marketplace, and workforce ecosystem.
          </div>
          <p className="lead">
            This demo shows how guests, customers, growers, youth workers, and
            partners move through a meaningful pathway — from story, to food
            access, to marketplace participation, to community benefit.
          </p>

          <div className="tabs">
            {(Object.keys(pathData) as PathKey[]).map((key) => (
              <button
                key={key}
                className={`tab ${active === key ? "active" : ""}`}
                onClick={() => setActive(key)}
              >
                {pathData[key].label}
              </button>
            ))}
          </div>
        </div>

        <article className="pathCard">
          <SmartImage images={activeImages} alt={data.title} />

          <div className="pathBody">
            <div className="smallCaps">{data.eyebrow}</div>
            <h2>{data.title}</h2>

            <div className="mission">{data.mission}</div>

            <div className="section">
              <div className="sectionTitle">Sound Bite</div>
              <p>{data.sound}</p>
            </div>

            <div className="section">
              <div className="sectionTitle">Intro</div>
              <p>{data.intro}</p>
            </div>

            <div className="section">
              <div className="sectionTitle">Knowledge</div>
              <ul>
                {data.knowledge.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {active === "marketplace" && (
              <div className="section">
                <div className="sectionTitle">Storefront Preview</div>
                <div className="storePreview">
                  <div className="product">
                    Bubble Babies™ <span>Seedling rolls</span>
                  </div>
                  <div className="product">
                    Fresh Produce <span>Seasonal farm products</span>
                  </div>
                  <div className="product">
                    Grower Goods <span>Marketplace participation</span>
                  </div>
                </div>
              </div>
            )}

            <div className="section">
              <div className="sectionTitle">Summary of Purpose</div>
              <p>{data.purpose}</p>
            </div>

            <div className="section">
              <div className="sectionTitle">Next</div>
              <p>{data.next}</p>
            </div>

            <div className="actions">
              <button className="primary" onClick={speak}>
                Play Voice Guide
              </button>

              {active === "marketplace" ? (
                <button
                  className="secondary"
                  onClick={() =>
                    window.open(
                      "https://grownby.com/farms/bronson-family-farm/shop",
                      "_blank"
                    )
                  }
                >
                  Enter Store
                </button>
              ) : (
                <button className="secondary">{data.button}</button>
              )}
            </div>
          </div>
        </article>
      </section>

      <section className="partnerStrip">
        <div className="smallCaps">Ecosystem Partners and Participants</div>
        <div className="partnerGrid">
          {partners.map((partner) => (
            <div className="pill" key={partner}>
              {partner}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
