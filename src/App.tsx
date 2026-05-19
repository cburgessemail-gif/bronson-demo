import React, { useEffect, useMemo, useState } from "react";

type Lang = "en" | "es" | "tl" | "it" | "he" | "fr";

const LANGS: { id: Lang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "es", label: "Español" },
  { id: "tl", label: "Tagalog" },
  { id: "it", label: "Italiano" },
  { id: "he", label: "עברית" },
  { id: "fr", label: "Français" },
];

const img = (name: string) => `/${name}`;

const COPY = {
  en: {
    start: "Start Guided Tour",
    stop: "Pause Tour",
    next: "Next",
    back: "Back",
    home: "Start",
    jump: "Jump to Pathway",
    contact: "Contact Constance Burgess",
    title: "Bronson Family Farm",
    subtitle: "A place-based food ecosystem growing health, opportunity, and community.",
  },
  es: {
    start: "Iniciar recorrido guiado",
    stop: "Pausar recorrido",
    next: "Siguiente",
    back: "Atrás",
    home: "Inicio",
    jump: "Ir a camino",
    contact: "Contactar a Constance Burgess",
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema alimentario local que cultiva salud, oportunidad y comunidad.",
  },
  tl: {
    start: "Simulan ang Gabay na Paglilibot",
    stop: "I-pause ang Paglilibot",
    next: "Susunod",
    back: "Balik",
    home: "Simula",
    jump: "Pumunta sa Landas",
    contact: "Makipag-ugnayan kay Constance Burgess",
    title: "Bronson Family Farm",
    subtitle: "Isang food ecosystem na nakaugat sa lugar, kalusugan, oportunidad, at komunidad.",
  },
  it: {
    start: "Avvia visita guidata",
    stop: "Pausa visita",
    next: "Avanti",
    back: "Indietro",
    home: "Inizio",
    jump: "Vai al percorso",
    contact: "Contatta Constance Burgess",
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema alimentare radicato nel luogo che coltiva salute, opportunità e comunità.",
  },
  he: {
    start: "התחל סיור מודרך",
    stop: "השהה סיור",
    next: "הבא",
    back: "חזור",
    home: "התחלה",
    jump: "מעבר למסלול",
    contact: "צור קשר עם Constance Burgess",
    title: "Bronson Family Farm",
    subtitle: "מערכת מזון מקומית המגדלת בריאות, הזדמנות וקהילה.",
  },
  fr: {
    start: "Commencer la visite guidée",
    stop: "Mettre en pause",
    next: "Suivant",
    back: "Retour",
    home: "Début",
    jump: "Aller au parcours",
    contact: "Contacter Constance Burgess",
    title: "Bronson Family Farm",
    subtitle: "Un écosystème alimentaire local qui cultive la santé, l’opportunité et la communauté.",
  },
};

const slides = [
  {
    key: "welcome",
    image: img("GrowArea.jpg"),
    eyebrow: "Welcome",
    title: "Step into the Farm",
    highlight: "Experience the wonders of life.",
    body:
      "Bronson Family Farm is not just a farm. It is a guided ecosystem experience built around land, food, learning, workforce development, growers, families, and community wellness.",
    bullets: [
      "Located at the Historic Lansdowne Airport in Youngstown",
      "Designed to become an agritourism destination",
      "Built to help food, knowledge, and opportunity circulate locally",
    ],
  },
  {
    key: "place",
    image: img("SAM_0220.JPG"),
    eyebrow: "Place-Based Story",
    title: "The Airport, the Land, and the Possibility",
    highlight: "A working private airfield is becoming a living food destination.",
    body:
      "This farm grows from a real place with history, open land, and community potential. The airport setting helps visitors understand that land can serve more than one purpose when vision, safety, and community need come together.",
    bullets: [
      "Outdoor growing areas support fresh, chemical-free food production",
      "Airport context creates a memorable destination experience",
      "The land becomes a classroom, marketplace, and wellness space",
    ],
  },
  {
    key: "ecosystem",
    image: img("ConnectFoodEcosystem_withimages.jpeg"),
    eyebrow: "Ecosystem Model",
    title: "How the Food Ecosystem Works",
    highlight: "The food moves through the system so growers and families do not have to carry the burden alone.",
    body:
      "An ecosystem means each part has a role. Guests, customers, growers, youth, partners, and value-added producers connect through shared infrastructure. Together, they support production, education, distribution, and community benefit.",
    bullets: [
      "Growers connect to tools, knowledge, markets, and shared support",
      "Customers gain access to fresh, nutritious, chemical-free food",
      "Partners strengthen the system through resources and expertise",
    ],
  },
  {
    key: "guest",
    image: img("SAM_0221.JPG"),
    eyebrow: "Guest Experience",
    title: "Guest Pathway",
    highlight: "Guests come to understand the vision, story, and purpose.",
    body:
      "The guest pathway introduces visitors to the farm, the airport, the food access mission, and the future agritourism destination. Guests should leave knowing why this work matters and how they can stay connected.",
    bullets: [
      "Welcome to the farm story",
      "See the land, growing areas, and destination vision",
      "Leave with a clear invitation to participate or support",
    ],
  },
  {
    key: "customer",
    image: img("SAM_0222.JPG"),
    eyebrow: "Customer Experience",
    title: "Customer Pathway",
    highlight: "Fresh food, nutrition, and repeat healthy choices.",
    body:
      "The customer pathway shows how families access fresh produce, seedlings, Bubble Babies™, herbs, and future value-added products. It connects buying food to health, nutrition, and local economic circulation.",
    bullets: [
      "Fresh, chemical-free produce and seedlings",
      "QR-connected marketplace access",
      "Education that helps families use and grow food confidently",
    ],
  },
  {
    key: "marketplace",
    image: img("SAM_0223.JPG"),
    eyebrow: "Marketplace",
    title: "Marketplace Pathway",
    highlight: "Interest becomes purchasing power and sustainability.",
    body:
      "The marketplace is where food, growers, and customers connect. The goal is not only to sell products, but to build a local food economy where dollars, produce, and opportunity circulate inside the community.",
    bullets: [
      "Online and in-person ordering opportunities",
      "Seedlings, produce, herbs, and grower supplies",
      "Future SNAP-friendly and community-centered food access model",
    ],
  },
  {
    key: "grower",
    image: img("SAM_0225.JPG"),
    eyebrow: "Grower Support",
    title: "Grower Pathway",
    highlight: "Growers connect to knowledge, tools, and market participation.",
    body:
      "The grower pathway supports people who want to grow food at home, in gardens, on farms, or through small enterprises. Bronson Family Farm serves as a growers supply market by bringing together tools, education, demonstrations, and relationships.",
    bullets: [
      "Demonstrations, soil knowledge, seeds, tools, and supplies",
      "Support for beginner and experienced growers",
      "A shared system that reduces isolation and increases opportunity",
    ],
  },
  {
    key: "youth",
    image: img("SAM_0226.JPG"),
    eyebrow: "Youth Workforce",
    title: "Youth Workforce Pathway",
    highlight: "Young people build skills, responsibility, and future readiness.",
    body:
      "The youth workforce pathway gives young people ages 14–18 structured, outdoor, skill-building work. This is more than a job. It is preparation for leadership, agriculture, entrepreneurship, teamwork, and community responsibility.",
    bullets: [
      "Farm-based work experience with safety expectations",
      "Hands-on learning in growing, setup, customer support, and teamwork",
      "A pathway from participation to responsibility and future opportunity",
    ],
  },
  {
    key: "partners",
    image: img("SAM_0229.JPG"),
    eyebrow: "Partner Pathway",
    title: "Partner Pathway",
    highlight: "Partners align resources for community benefit.",
    body:
      "Partners strengthen the ecosystem through education, materials, demonstrations, health services, art, culinary pathways, workforce development, and funding. Each partner helps make the farm more useful to the community.",
    bullets: [
      "Education, health, food, workforce, and creative partners",
      "Shared visibility and shared community outcomes",
      "A coordinated system instead of disconnected programs",
    ],
  },
  {
    key: "destination",
    image: img("GrowArea2.jpg"),
    eyebrow: "Future Destination",
    title: "From Farm to Agritourism Destination",
    highlight: "The farm becomes a place people want to visit, learn from, and return to.",
    body:
      "The long-term vision includes farm experiences, youth activities, camping, RC activities, mini-golf, sensory spaces, food demonstrations, and community gatherings. The destination grows from the farm’s purpose, not away from it.",
    bullets: [
      "18-hole mini-golf and children’s activity areas",
      "Camping, outdoor learning, and family-centered experiences",
      "A destination rooted in food, health, land, and legacy",
    ],
  },
  {
    key: "feedback",
    image: img("SAM_0230.JPG"),
    eyebrow: "Thank You",
    title: "Help Us Build What Comes Next",
    highlight: "Your feedback helps shape the ecosystem.",
    body:
      "This demo is an invitation to understand the vision and respond. Bronson Family Farm is building a connected place-based food ecosystem, and your feedback helps strengthen the next version.",
    bullets: [
      "What was clear?",
      "What needs more explanation?",
      "Where do you see yourself in the ecosystem?",
    ],
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [lang, setLang] = useState<Lang>("en");
  const [guided, setGuided] = useState(false);

  const t = COPY[lang];
  const slide = slides[index];
  const isHebrew = lang === "he";

  useEffect(() => {
    if (!guided) return;
    const timer = setTimeout(() => {
      setIndex((current) => {
        if (current >= slides.length - 1) {
          setGuided(false);
          return current;
        }
        return current + 1;
      });
    }, 8500);
    return () => clearTimeout(timer);
  }, [guided, index]);

  const progress = useMemo(
    () => Math.round(((index + 1) / slides.length) * 100),
    [index]
  );

  const goNext = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const goBack = () => setIndex((i) => Math.max(i - 1, 0));
  const goHome = () => {
    setGuided(false);
    setIndex(0);
  };

  return (
    <main className="demo" dir={isHebrew ? "rtl" : "ltr"}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Georgia, 'Times New Roman', serif; background: #182313; }
        .demo {
          min-height: 100vh;
          color: #fff8e8;
          background:
            linear-gradient(120deg, rgba(19,32,17,.86), rgba(78,63,31,.72)),
            radial-gradient(circle at top left, rgba(232,179,90,.24), transparent 34%),
            radial-gradient(circle at bottom right, rgba(119,148,82,.28), transparent 38%);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .topbar {
          height: 76px;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid rgba(255,255,255,.16);
          background: rgba(17,27,14,.72);
          backdrop-filter: blur(12px);
        }
        .brand { line-height: 1.05; }
        .brand h1 { margin: 0; font-size: 26px; letter-spacing: .4px; }
        .brand p { margin: 5px 0 0; font-size: 13px; color: #eadbb9; max-width: 650px; }
        .controls { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
        button, select {
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 999px;
          padding: 10px 15px;
          background: rgba(255,255,255,.1);
          color: #fff8e8;
          font-weight: 700;
          cursor: pointer;
        }
        select { background: #29371f; }
        button.primary {
          background: linear-gradient(135deg, #d89b43, #7fa15b);
          color: #1d2616;
          border: none;
        }
        .stage {
          flex: 1;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 26px;
          padding: 28px;
          min-height: calc(100vh - 76px);
        }
        .panel {
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(255,255,255,.1);
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,.32);
          min-height: 0;
        }
        .imagePanel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          background: rgba(10,18,9,.42);
        }
        .imagePanel img {
          width: 100%;
          height: 100%;
          max-height: calc(100vh - 160px);
          object-fit: contain;
          border-radius: 24px;
          background: rgba(255,255,255,.08);
        }
        .imageLabel {
          position: absolute;
          left: 38px;
          bottom: 36px;
          background: rgba(20,31,15,.78);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 18px;
          padding: 10px 14px;
          font-size: 13px;
          color: #f4e4bf;
        }
        .contentPanel {
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
        }
        .eyebrow {
          display: inline-block;
          width: fit-content;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(216,155,67,.18);
          border: 1px solid rgba(216,155,67,.35);
          color: #ffd58c;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        h2 {
          margin: 12px 0 10px;
          font-size: clamp(34px, 4.5vw, 64px);
          line-height: .95;
          color: #fff6df;
        }
        .highlight {
          font-size: clamp(18px, 2vw, 27px);
          line-height: 1.2;
          color: #f6c979;
          margin: 0 0 15px;
          font-weight: 800;
        }
        .body {
          font-size: clamp(17px, 1.4vw, 21px);
          line-height: 1.42;
          color: #f2e7ce;
          margin: 0;
        }
        ul {
          margin: 20px 0 0;
          padding: 0;
          display: grid;
          gap: 10px;
        }
        li {
          list-style: none;
          padding: 12px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.09);
          border: 1px solid rgba(255,255,255,.12);
          color: #fff2d2;
          font-size: 16px;
          line-height: 1.25;
        }
        .bottom {
          display: grid;
          gap: 14px;
        }
        .progressWrap {
          height: 9px;
          background: rgba(255,255,255,.13);
          border-radius: 99px;
          overflow: hidden;
        }
        .progress {
          height: 100%;
          width: ${progress}%;
          background: linear-gradient(90deg, #f3c36d, #91b86d);
          transition: width .35s ease;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }
        .pathways {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .pathways button {
          padding: 8px 11px;
          font-size: 13px;
        }
        .pathways button.active {
          background: #f0c36f;
          color: #172111;
        }
        .contact {
          border-radius: 22px;
          padding: 14px 16px;
          background: rgba(21,32,17,.62);
          border: 1px solid rgba(255,255,255,.14);
          color: #f8e7c0;
          font-size: 15px;
          line-height: 1.35;
        }
        .contact strong { color: #ffd98f; }
        @media (max-width: 960px) {
          .topbar { height: auto; align-items: flex-start; flex-direction: column; }
          .stage { grid-template-columns: 1fr; padding: 16px; min-height: auto; }
          .imagePanel img { max-height: 38vh; }
          .contentPanel { padding: 22px; }
          h2 { font-size: 38px; }
        }
      `}</style>

      <header className="topbar">
        <div className="brand">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>

        <div className="controls">
          <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
            {LANGS.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>

          <button className="primary" onClick={() => setGuided((g) => !g)}>
            {guided ? t.stop : t.start}
          </button>
        </div>
      </header>

      <section className="stage">
        <div className="panel imagePanel">
          <img
            src={slide.image}
            alt={slide.title}
            onError={(e) => {
              e.currentTarget.src = img("ConnectFoodEcosystem_withimages.jpeg");
            }}
          />
          <div className="imageLabel">
            {index + 1} / {slides.length} · {slide.eyebrow}
          </div>
        </div>

        <div className="panel contentPanel">
          <div>
            <span className="eyebrow">{slide.eyebrow}</span>
            <h2>{slide.title}</h2>
            <p className="highlight">{slide.highlight}</p>
            <p className="body">{slide.body}</p>

            <ul>
              {slide.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="bottom">
            <div className="progressWrap">
              <div className="progress" />
            </div>

            <div className="nav">
              <button onClick={goBack} disabled={index === 0}>
                {t.back}
              </button>
              <button onClick={goHome}>{t.home}</button>
              <button className="primary" onClick={goNext} disabled={index === slides.length - 1}>
                {t.next}
              </button>
            </div>

            <div className="pathways" aria-label={t.jump}>
              {slides.map((s, i) => (
                <button
                  key={s.key}
                  className={i === index ? "active" : ""}
                  onClick={() => {
                    setGuided(false);
                    setIndex(i);
                  }}
                >
                  {i + 1}. {s.eyebrow}
                </button>
              ))}
            </div>

            {slide.key === "feedback" && (
              <div className="contact">
                <strong>{t.contact}</strong>
                <br />
                Bronson Family Farm · 330-275-1604
                <br />
                cburgess@bronsonfamilyfarm.com
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
