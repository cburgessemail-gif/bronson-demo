import React, { useMemo, useState } from "react";

type Lang = "en" | "es" | "tl" | "it" | "fr" | "he";
type PathKey = "guest" | "customer" | "marketplace" | "grower" | "youth" | "partner";

const languages: Record<Lang, string> = {
  en: "English",
  es: "Spanish",
  tl: "Tagalog",
  it: "Italian",
  fr: "French",
  he: "Hebrew",
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

const imageBank: Record<PathKey, string[]> = {
  guest: ["/images/GrowArea2.jpg", "/images/GrowArea.jpg", "/images/SAM_0362.JPG", "/images/SAM_0363.JPG"],
  customer: ["/images/SAM_0364.JPG", "/images/SAM_0365.JPG", "/images/GrowArea.jpg", "/images/GrowArea2.jpg"],
  marketplace: ["/images/GrownByStorefront.png", "/images/grownby-storefront.png", "/images/GrownBy.png", "/images/SAM_0366.JPG"],
  grower: ["/images/SAM_0367.JPG", "/images/GrowArea.jpg", "/images/GrowArea2.jpg", "/images/SAM_0368.JPG"],
  youth: ["/images/SAM_0368.JPG", "/images/SAM_0369.JPG", "/images/GrowArea2.jpg", "/images/SAM_0362.JPG"],
  partner: ["/images/SAM_0363.JPG", "/images/SAM_0364.JPG", "/images/GrowArea.jpg", "/images/GrowArea2.jpg"],
};

const pathData: Record<PathKey, {
  label: string;
  eyebrow: string;
  title: string;
  mission: string;
  sound: string;
  intro: string;
  knowledge: string[];
  purpose: string;
  next: string[];
  action: string;
}> = {
  guest: {
    label: "Guest",
    eyebrow: "Understand the land, the story, and the purpose.",
    title: "Guest Pathway",
    mission: "People understand the vision of Bronson Family Farm through land, legacy, food, and community restoration.",
    sound: "This is not just a farm. It is a living gateway into family legacy, food access, and community possibility.",
    intro: "Guests enter through the story of the land, the airport history, the growing fields, and the people building something useful for the Mahoning Valley.",
    knowledge: [
      "Historic Lansdowne Airport becomes a place for growing, learning, gathering, and regional connection.",
      "Guests move from curiosity into tours, event check-in, marketplace activity, volunteering, and partner pathways.",
      "The farm story makes the purpose visible before asking anyone to participate.",
    ],
    purpose: "The guest pathway turns a first visit into understanding, belonging, and action.",
    next: ["Reserve / check in", "Tour the land", "Visit marketplace", "Choose a pathway"],
    action: "Enter Guest Pathway",
  },
  customer: {
    label: "Customer",
    eyebrow: "Fresh food, nutrition, and repeat healthy choices.",
    title: "Customer Pathway",
    mission: "Customers connect fresh food, nutrition education, local purchasing, and repeat healthy choices.",
    sound: "Customers do not just buy food. They learn where it comes from and how it supports local growers.",
    intro: "The customer pathway shows produce, Bubble Babies™, recipes, nutrition education, pickup options, and repeat purchasing.",
    knowledge: [
      "Customers discover seedlings, produce, recipes, and seasonal growing information.",
      "SNAP-aware purchasing and pickup logic supports access and dignity.",
      "Nutrition education connects food choices to family health and community wellness.",
    ],
    purpose: "The customer pathway turns interest into food access and repeat participation.",
    next: ["Shop produce", "View Bubble Babies™", "See recipes", "Pickup / order history"],
    action: "Enter Customer Pathway",
  },
  marketplace: {
    label: "Marketplace",
    eyebrow: "Convert interest into purchasing power.",
    title: "Marketplace Pathway",
    mission: "The marketplace converts community interest into purchasing power, local sales, and ecosystem sustainability.",
    sound: "The marketplace is where the story becomes economic activity for growers, families, and the farm ecosystem.",
    intro: "This pathway connects visitors to the GrownBy storefront, event pre-orders, grower products, and marketplace participation.",
    knowledge: [
      "The marketplace connects to the real Bronson Family Farm GrownBy store.",
      "Growers register through the ecosystem before receiving marketplace benefits.",
      "Customers move from education to purchase without losing the farm story.",
    ],
    purpose: "The marketplace pathway shows how the ecosystem sustains itself through real transactions.",
    next: ["Preview storefront", "Select products", "SNAP-aware checkout", "Enter GrownBy store"],
    action: "Enter Store",
  },
  grower: {
    label: "Grower",
    eyebrow: "Connect producers to opportunity.",
    title: "Grower Pathway",
    mission: "Growers connect to opportunity, market participation, training, resources, and a regional food network.",
    sound: "Growers are not outside vendors. They are part of a shared ecosystem that helps food move through the Valley.",
    intro: "The grower pathway shows registration, benefits, training, crop planning, supply needs, and marketplace access.",
    knowledge: [
      "Registered growers can participate in the ecosystem marketplace.",
      "Support includes crop planning, supply education, distribution visibility, and shared events.",
      "The pathway helps growers move from growing to selling and collaborating.",
    ],
    purpose: "The grower pathway makes participation clear, fair, and useful.",
    next: ["Register grower", "Plan crops", "Access training", "Earn marketplace eligibility"],
    action: "Enter Grower Pathway",
  },
  youth: {
    label: "Youth Workforce",
    eyebrow: "Build skills, responsibility, and future readiness.",
    title: "Youth Workforce Pathway",
    mission: "Youth workers build skills, responsibility, confidence, and future readiness through farm-based work experiences.",
    sound: "Youth do not just complete tasks. They learn responsibility, communication, safety, and how work connects to community.",
    intro: "This pathway shows youth onboarding, supervisor oversight, life skills progression, task assignments, and parent visibility.",
    knowledge: [
      "Youth roles connect agriculture, technology, hospitality, logistics, and communications.",
      "Supervisors track progress through skills, attendance, safety, and reflection.",
      "Parents and partners see growth without turning the experience into a classroom-only program.",
    ],
    purpose: "The youth pathway shows how the farm becomes a workforce development environment.",
    next: ["Youth dashboard", "Supervisor view", "Parent portal", "LSP progress"],
    action: "Enter Youth Pathway",
  },
  partner: {
    label: "Partner",
    eyebrow: "Align resources and collaboration.",
    title: "Partner Pathway",
    mission: "Partners align resources, expertise, visibility, and collaboration for community benefit.",
    sound: "Partnership is how the ecosystem becomes stronger than one farm, one event, or one organization.",
    intro: "The partner pathway shows how organizations support education, equipment, health, media, arts, workforce, and food access.",
    knowledge: [
      "Farm & Family Alliance, Inc. and Parker Farms are part of the ecosystem structure.",
      "Partners support demonstrations, equipment, education, storytelling, funding, or community services.",
      "Each partner role connects to a real contribution and a visible community outcome.",
    ],
    purpose: "The partner pathway shows how collaboration becomes action.",
    next: ["Choose role", "Support event", "Sponsor / contribute", "Schedule follow-up"],
    action: "Enter Partner Pathway",
  },
};

function SmartImage({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const src = images[index];

  if (!src) {
    return (
      <div className="imageFallback">
        <div>Bronson Family Farm</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setIndex((old) => old + 1)}
    />
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [active, setActive] = useState<PathKey>("guest");
  const data = pathData[active];
  const dir = lang === "he" ? "rtl" : "ltr";
  const activeImages = useMemo(() => imageBank[active], [active]);

  function speak() {
    const text = `${data.title}. ${data.sound} ${data.intro} ${data.purpose}`;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88;
    utterance.pitch = 0.95;
    utterance.lang =
      lang === "es" ? "es-US" :
      lang === "tl" ? "fil-PH" :
      lang === "it" ? "it-IT" :
      lang === "fr" ? "fr-FR" :
      lang === "he" ? "he-IL" : "en-US";
    window.speechSynthesis.speak(utterance);
  }

  function handleAction() {
    if (active === "marketplace") {
      window.open("https://grownby.com/farms/bronson-family-farm/shop", "_blank");
    }
  }

  return (
    <main dir={dir}>
      <style>{`
        :root {
          --deep:#00261c;
          --forest:#003828;
          --leaf:#006b4b;
          --cream:#f5efe2;
          --card:#fffaf0;
          --gold:#ecd99f;
          --ink:#101010;
          --muted:#4b4b4b;
          --shadow:rgba(0,0,0,.12);
        }

        * { box-sizing:border-box; }

        body {
          margin:0;
          background:var(--cream);
          color:var(--ink);
          font-family:Arial, Helvetica, sans-serif;
        }

        main {
          min-height:100vh;
          border-top:22px solid var(--deep);
          padding:34px 7vw 70px;
          background:
            linear-gradient(90deg, rgba(245,239,226,.98), rgba(245,239,226,.88)),
            url("/images/GrowArea2.jpg");
          background-size:cover;
          background-position:center;
        }

        .top {
          background:rgba(255,255,255,.92);
          border-radius:22px;
          box-shadow:0 12px 32px var(--shadow);
          padding:22px 26px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:18px;
          margin-bottom:34px;
        }

        .brand,.smallCaps {
          color:var(--leaf);
          font-size:13px;
          letter-spacing:.42em;
          text-transform:uppercase;
          font-weight:900;
        }

        h1 {
          font-size:clamp(30px,4vw,48px);
          margin:6px 0 0;
          line-height:1.02;
          letter-spacing:-.04em;
          font-weight:700;
        }

        select {
          padding:14px 18px;
          border-radius:16px;
          border:1.5px solid var(--leaf);
          background:white;
          font-weight:800;
          font-size:16px;
        }

        .grid {
          display:grid;
          grid-template-columns:1fr .92fr;
          gap:34px;
          align-items:start;
        }

        .heroCard,.pathCard,.partnerStrip {
          background:rgba(255,255,255,.72);
          backdrop-filter:blur(5px);
          border-radius:26px;
          box-shadow:0 12px 34px rgba(0,0,0,.09);
          overflow:hidden;
        }

        .heroImage {
          height:300px;
          background:var(--deep);
          overflow:hidden;
        }

        .heroImage img,
        .pathImage img {
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .heroBody {
          padding:30px 38px 36px;
        }

        .headline {
          font-size:clamp(42px,5.3vw,70px);
          line-height:.97;
          letter-spacing:-.065em;
          margin:20px 0;
          font-weight:900;
        }

        .lead {
          font-size:20px;
          line-height:1.6;
          color:var(--muted);
          margin:0;
        }

        .tabs {
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-top:28px;
        }

        button {
          border:none;
          border-radius:15px;
          padding:14px 22px;
          font-weight:900;
          cursor:pointer;
          box-shadow:0 6px 16px rgba(0,0,0,.12);
        }

        .tab {
          background:var(--gold);
          color:#141414;
        }

        .tab.active {
          background:var(--leaf);
          color:white;
        }

        .pathImage {
          height:300px;
          background:var(--deep);
          overflow:hidden;
        }

        .imageFallback {
          height:100%;
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:linear-gradient(135deg, var(--deep), var(--leaf));
          color:white;
          font-weight:900;
          letter-spacing:.22em;
          text-transform:uppercase;
        }

        .pathBody {
          padding:28px 34px 34px;
          background:rgba(255,255,255,.9);
        }

        h2 {
          margin:10px 0 16px;
          font-size:clamp(30px,4vw,44px);
          line-height:1;
          letter-spacing:-.05em;
          font-weight:700;
        }

        .mission {
          background:var(--forest);
          color:white;
          padding:18px 20px;
          border-radius:15px;
          font-size:17px;
          line-height:1.5;
          font-weight:800;
          margin-bottom:20px;
        }

        .section {
          background:var(--card);
          border:1px solid rgba(0,0,0,.09);
          border-radius:18px;
          padding:18px 20px;
          margin-top:16px;
        }

        .sectionTitle {
          color:#a34c00;
          letter-spacing:.32em;
          text-transform:uppercase;
          font-weight:900;
          font-size:13px;
          margin-bottom:10px;
        }

        .section p,.section li {
          font-size:17px;
          line-height:1.55;
        }

        ul {
          padding-left:22px;
          margin-bottom:0;
        }

        .nextGrid {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:10px;
          margin-top:10px;
        }

        .nextItem {
          background:white;
          border-radius:12px;
          padding:12px;
          font-weight:800;
          border:1px solid rgba(0,0,0,.08);
        }

        .actions {
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-top:22px;
        }

        .primary {
          background:var(--leaf);
          color:white;
        }

        .secondary {
          background:var(--gold);
          color:#111;
        }

        .storePreview {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:12px;
          margin-top:14px;
        }

        .product {
          background:white;
          border-radius:14px;
          padding:14px;
          border:1px solid rgba(0,0,0,.08);
          font-weight:900;
        }

        .product span {
          display:block;
          color:var(--leaf);
          font-size:13px;
          margin-top:6px;
        }

        .partnerStrip {
          margin-top:34px;
          padding:22px;
        }

        .partnerGrid {
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:14px;
        }

        .pill {
          background:white;
          border:1px solid rgba(0,0,0,.1);
          border-radius:999px;
          padding:10px 14px;
          font-weight:900;
          font-size:14px;
        }

        @media (max-width:980px) {
          main { padding:22px 18px 50px; }
          .grid { grid-template-columns:1fr; }
          .top { flex-direction:column; align-items:flex-start; }
          .heroImage,.pathImage { height:250px; }
          .headline { font-size:46px; }
          .storePreview,.nextGrid { grid-template-columns:1fr; }
        }
      `}</style>

      <header className="top">
        <div>
          <div className="brand">Developed by Bronson Family Farm</div>
          <h1>Bronson Family Farm Ecosystem Demo</h1>
        </div>

        <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
          {Object.entries(languages).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </header>

      <section className="grid">
        <div className="heroCard">
          <div className="heroImage">
            <SmartImage images={["/images/GrowArea2.jpg", "/images/GrowArea.jpg", "/images/SAM_0362.JPG"]} alt="Bronson Family Farm aerial view" />
          </div>

          <div className="heroBody">
            <div className="smallCaps">Serving the Mahoning Valley Area</div>
            <div className="headline">A living farm, marketplace, and workforce ecosystem.</div>
            <p className="lead">
              This demo shows how guests, customers, growers, youth workers, and partners move through a meaningful pathway — from story, to food access, to marketplace participation, to community benefit.
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
        </div>

        <article className="pathCard">
          <div className="pathImage">
            <SmartImage images={activeImages} alt={data.title} />
          </div>

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
              <ul>{data.knowledge.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>

            {active === "marketplace" && (
              <div className="section">
                <div className="sectionTitle">Storefront Preview</div>
                <div className="storePreview">
                  <div className="product">Bubble Babies™ <span>Seedling rolls</span></div>
                  <div className="product">Fresh Produce <span>Seasonal farm products</span></div>
                  <div className="product">Grower Goods <span>Marketplace participation</span></div>
                </div>
              </div>
            )}

            <div className="section">
              <div className="sectionTitle">Summary of Purpose</div>
              <p>{data.purpose}</p>
            </div>

            <div className="section">
              <div className="sectionTitle">Next</div>
              <div className="nextGrid">
                {data.next.map((item) => <div className="nextItem" key={item}>{item}</div>)}
              </div>
            </div>

            <div className="actions">
              <button className="primary" onClick={speak}>Play Voice Guide</button>
              <button className="secondary" onClick={handleAction}>{data.action}</button>
            </div>
          </div>
        </article>
      </section>

      <section className="partnerStrip">
        <div className="smallCaps">Ecosystem Partners and Participants</div>
        <div className="partnerGrid">
          {partners.map((partner) => <div className="pill" key={partner}>{partner}</div>)}
        </div>
      </section>
    </main>
  );
}
