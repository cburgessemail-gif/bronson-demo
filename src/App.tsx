import React, { useMemo, useState, useEffect } from "react";

type Lang = "en" | "es" | "tl" | "it" | "he" | "fr";

const EVENTBRITE =
  "https://www.eventbrite.com/e/bronson-family-farm-growers-supply-market-tickets-1984126092554?aff=oddtdtcreator";
const GROWNBY = "https://grownby.com/farms/bronson-family-farm/shop";
const EMAIL = "cburgess@bronsonfamilyfarm.com";
const PHONE = "330-275-1604";

const T: Record<Lang, any> = {
  en: {
    welcome: "Welcome to Bronson Family Farm",
    subtitle: "A place-based food ecosystem growing from Youngstown’s Historic Lansdowne Airport.",
    start: "Start Guided Tour",
    explore: "Explore Yourself",
    back: "Back",
    next: "Next",
    home: "Start",
    feedback: "Share Feedback",
    contact: "Contact Us",
    paths: "Choose Your Journey",
    ecosystem: "What Is the Ecosystem?",
    ecosystemText:
      "An ecosystem is a connected system where every person, partner, product, skill, and resource supports the whole. At Bronson Family Farm, food, education, growers, youth workforce, marketplace activity, health, and community partners work together so food and opportunity circulate through the community.",
    finalTitle: "Thank you for walking through the Bronson Family Farm demo.",
    finalText:
      "This demo is meant to help viewers understand the need, the opportunity, and the role they may choose to play in building a community-centered food destination.",
  },
  es: {
    welcome: "Bienvenido a Bronson Family Farm",
    subtitle: "Un ecosistema alimentario basado en el lugar, creciendo desde el histórico aeropuerto Lansdowne de Youngstown.",
    start: "Iniciar recorrido guiado",
    explore: "Explorar",
    back: "Atrás",
    next: "Siguiente",
    home: "Inicio",
    feedback: "Compartir comentarios",
    contact: "Contáctenos",
    paths: "Elija su camino",
    ecosystem: "¿Qué es el ecosistema?",
    ecosystemText:
      "Un ecosistema es un sistema conectado donde cada persona, socio, producto, habilidad y recurso apoya al conjunto. En Bronson Family Farm, la comida, la educación, los agricultores, los jóvenes trabajadores, el mercado, la salud y los socios comunitarios trabajan juntos.",
    finalTitle: "Gracias por recorrer la demostración de Bronson Family Farm.",
    finalText:
      "Esta demostración ayuda a comprender la necesidad, la oportunidad y el papel que cada persona puede elegir.",
  },
  tl: {
    welcome: "Maligayang pagdating sa Bronson Family Farm",
    subtitle: "Isang food ecosystem na nakaugat sa Youngstown Historic Lansdowne Airport.",
    start: "Simulan ang Guided Tour",
    explore: "Mag-explore",
    back: "Bumalik",
    next: "Susunod",
    home: "Simula",
    feedback: "Magbigay ng Feedback",
    contact: "Makipag-ugnayan",
    paths: "Piliin ang Iyong Landas",
    ecosystem: "Ano ang Ecosystem?",
    ecosystemText:
      "Ang ecosystem ay magkakaugnay na sistema kung saan ang tao, kasosyo, produkto, kakayahan, at resources ay nagtutulungan para sa kabuuan.",
    finalTitle: "Salamat sa pagbisita sa Bronson Family Farm demo.",
    finalText:
      "Layunin ng demo na ipakita ang pangangailangan, oportunidad, at papel na maaaring gampanan ng bawat isa.",
  },
  it: {
    welcome: "Benvenuti a Bronson Family Farm",
    subtitle: "Un ecosistema alimentare radicato nello storico Lansdowne Airport di Youngstown.",
    start: "Avvia tour guidato",
    explore: "Esplora",
    back: "Indietro",
    next: "Avanti",
    home: "Inizio",
    feedback: "Invia feedback",
    contact: "Contattaci",
    paths: "Scegli il tuo percorso",
    ecosystem: "Che cos’è l’ecosistema?",
    ecosystemText:
      "Un ecosistema è un sistema connesso in cui persone, partner, prodotti, competenze e risorse sostengono l’insieme.",
    finalTitle: "Grazie per aver visitato il demo di Bronson Family Farm.",
    finalText:
      "Questo demo aiuta a comprendere il bisogno, l’opportunità e il ruolo che ciascuno può scegliere.",
  },
  he: {
    welcome: "ברוכים הבאים לחוות משפחת ברונסון",
    subtitle: "מערכת מזון קהילתית הצומחת משדה התעופה ההיסטורי לנסדאון ביונגסטאון.",
    start: "התחל סיור מודרך",
    explore: "חקירה עצמאית",
    back: "חזרה",
    next: "הבא",
    home: "התחלה",
    feedback: "שליחת משוב",
    contact: "צור קשר",
    paths: "בחרו את המסע שלכם",
    ecosystem: "מהי מערכת אקולוגית?",
    ecosystemText:
      "מערכת אקולוגית היא מערכת מחוברת שבה אנשים, שותפים, מוצרים, כישורים ומשאבים תומכים בשלמות.",
    finalTitle: "תודה שסיירתם בדמו של Bronson Family Farm.",
    finalText:
      "הדמו עוזר להבין את הצורך, ההזדמנות והתפקיד שכל אחד יכול לבחור.",
  },
  fr: {
    welcome: "Bienvenue à Bronson Family Farm",
    subtitle: "Un écosystème alimentaire enraciné à l’aéroport historique Lansdowne de Youngstown.",
    start: "Commencer la visite guidée",
    explore: "Explorer",
    back: "Retour",
    next: "Suivant",
    home: "Début",
    feedback: "Partager un avis",
    contact: "Nous contacter",
    paths: "Choisissez votre parcours",
    ecosystem: "Qu’est-ce que l’écosystème?",
    ecosystemText:
      "Un écosystème est un système connecté où chaque personne, partenaire, produit, compétence et ressource soutient l’ensemble.",
    finalTitle: "Merci d’avoir visité la démonstration de Bronson Family Farm.",
    finalText:
      "Cette démonstration aide à comprendre le besoin, l’opportunité et le rôle que chacun peut choisir.",
  },
};

const slides = [
  {
    key: "entrance",
    title: "Step Into the Farm",
    image: "/GrowArea.jpg",
    body:
      "Bronson Family Farm begins with land, legacy, and need. The farm is located at the Historic Lansdowne Airport, a place-based site where agriculture, education, community health, youth workforce, and economic opportunity can grow together.",
    decision: "Understand the place, the history, and why the farm matters.",
  },
  {
    key: "ecosystem",
    title: "Connected Food Ecosystem",
    image: "/ConnectFoodEcosystem_withimages.png",
    fallback: "/ConnectFoodEcosystem_withimages.jpeg",
    body:
      "The ecosystem connects growers, customers, youth, partners, volunteers, value-added producers, and marketplace activity. The goal is not to send people everywhere. The food moves through a coordinated system so schools, families, businesses, and community partners can access fresh, chemical-free food more easily.",
    decision: "See how each role helps food and money circulate locally.",
  },
  {
    key: "guest",
    title: "Guest Pathway",
    image: "/SAM_0220.JPG",
    body:
      "Guests are introduced to the farm, the airport setting, the growing areas, and the story behind the work. This pathway helps visitors understand that Bronson Family Farm is more than land — it is becoming a destination for learning, food access, and community connection.",
    decision: "Decide whether to visit, learn more, share the story, or invite others.",
  },
  {
    key: "customer",
    title: "Customer Pathway",
    image: "/SAM_0221.JPG",
    body:
      "Customers learn how to access fresh, locally grown, chemical-free food. This pathway connects nutrition, convenience, online ordering, pickup, marketplace participation, and repeat healthy choices.",
    decision: "Decide what to buy, how to order, and how to support local food circulation.",
    action: { label: "Visit Marketplace", url: GROWNBY },
  },
  {
    key: "grower",
    title: "Grower Pathway",
    image: "/SAM_0222.JPG",
    body:
      "Growers receive knowledge, tools, supply access, demonstrations, market connection, and support. The need being met is simple: many people want to grow but need guidance, supplies, confidence, and a place to connect with opportunity.",
    decision: "Decide: Do I want to become a grower, improve my growing, or join the network?",
  },
  {
    key: "marketplace",
    title: "Marketplace Pathway",
    image: "/Marketplace.png",
    fallback: "/SAM_0223.JPG",
    body:
      "The marketplace turns interest into action. It gives customers a way to purchase, growers a way to participate, and the ecosystem a way to become sustainable. This is where food, value, and local economic activity begin moving together.",
    decision: "Decide whether to shop, sell, participate, or support marketplace growth.",
    action: { label: "Open Online Store", url: GROWNBY },
  },
  {
    key: "youth",
    title: "Youth Workforce Pathway",
    image: "/SAM_0225.JPG",
    body:
      "Youth are not just working. They are learning responsibility, safety, food systems, teamwork, communication, and future-ready skills. This pathway supports supervised outdoor workforce development connected to real community needs.",
    decision: "Decide whether to participate, supervise, sponsor, or support youth development.",
  },
  {
    key: "partners",
    title: "Partner Pathway",
    image: "/SAM_0226.JPG",
    body:
      "Partners help align resources around shared outcomes: food access, workforce readiness, community health, grower education, and local economic development. Partnership makes the ecosystem stronger than any one organization could be alone.",
    decision: "Decide whether to fund, sponsor, teach, donate, volunteer, or collaborate.",
  },
  {
    key: "value",
    title: "Value-Added Pathway",
    image: "/SAM_0229.JPG",
    body:
      "Value-added education helps growers and producers think beyond raw produce. Parker Farms and other partners help demonstrate how food can become products, learning, enterprise, and income.",
    decision: "Decide whether to create, package, teach, sell, or expand food-based enterprise.",
  },
  {
    key: "future",
    title: "Future Destination",
    image: "/GrowArea2.jpg",
    body:
      "The farm is growing toward an agritourism destination with education, youth workforce, growing areas, marketplace activity, family experiences, camping, RC activities, sensory spaces, and future attractions such as mini-golf and food-based enterprise.",
    decision: "Decide how you want to be part of what comes next.",
  },
  {
    key: "thanks",
    title: "Thank You + Feedback",
    image: "/GrowArea.jpg",
    body:
      "Thank you for experiencing the Bronson Family Farm demo. Your feedback matters. We want to know what was clear, what inspired you, what questions remain, and how you may want to connect.",
    decision: "Share feedback, contact the farm, or return to the beginning.",
  },
];

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const [started, setStarted] = useState(false);

  const tr = T[lang];
  const slide = slides[index];

  useEffect(() => {
    if (!guided || !started) return;
    if (index >= slides.length - 1) {
      setGuided(false);
      return;
    }
    const timer = setTimeout(() => setIndex((i) => i + 1), 8500);
    return () => clearTimeout(timer);
  }, [guided, index, started]);

  const startGuided = () => {
    setStarted(true);
    setIndex(0);
    setGuided(true);
  };

  const startExplore = () => {
    setStarted(true);
    setGuided(false);
    setIndex(1);
  };

  const go = (i: number) => {
    setGuided(false);
    setStarted(true);
    setIndex(Math.max(0, Math.min(slides.length - 1, i)));
  };

  const imageSrc = useMemo(() => slide.image, [slide]);

  if (!started) {
    return (
      <main className="app welcome">
        <div className="overlay" />
        <section className="hero-card">
          <div className="topbar">
            <strong>Bronson Family Farm</strong>
            <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="tl">Tagalog</option>
              <option value="it">Italiano</option>
              <option value="he">עברית</option>
              <option value="fr">Français</option>
            </select>
          </div>

          <h1>{tr.welcome}</h1>
          <p>{tr.subtitle}</p>

          <div className="hero-actions">
            <button onClick={startGuided}>{tr.start}</button>
            <button className="secondary" onClick={startExplore}>
              {tr.explore}
            </button>
          </div>
        </section>

        <Style />
      </main>
    );
  }

  return (
    <main className="app">
      <div className="slide-bg">
        <img
          src={imageSrc}
          onError={(e) => {
            const target = e.currentTarget;
            if (slide.fallback && target.src.indexOf(slide.fallback) === -1) {
              target.src = slide.fallback;
            }
          }}
          alt=""
        />
      </div>
      <div className="overlay" />

      <section className="demo-shell">
        <header className="topbar">
          <strong>Bronson Family Farm Demo</strong>
          <div className="controls">
            <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="tl">Tagalog</option>
              <option value="it">Italiano</option>
              <option value="he">עברית</option>
              <option value="fr">Français</option>
            </select>
            <button onClick={startGuided}>{tr.start}</button>
          </div>
        </header>

        <div className="content-grid">
          <aside className="pathways">
            <h2>{tr.paths}</h2>
            {slides.slice(1, -1).map((s, i) => (
              <button
                key={s.key}
                onClick={() => go(i + 1)}
                className={index === i + 1 ? "active" : ""}
              >
                {i + 1}. {s.title}
              </button>
            ))}
          </aside>

          <section className="story-card">
            {slide.key === "ecosystem" && <p className="eyebrow">{tr.ecosystem}</p>}
            <h1>{slide.title}</h1>
            <p>{slide.key === "ecosystem" ? tr.ecosystemText : slide.body}</p>

            <div className="decision">
              <strong>Purpose / Decision:</strong>
              <span>{slide.decision}</span>
            </div>

            <div className="actions">
              {slide.action && (
                <a href={slide.action.url} target="_blank" rel="noreferrer">
                  {slide.action.label}
                </a>
              )}

              {slide.key === "thanks" && (
                <>
                  <a href={`mailto:${EMAIL}?subject=Bronson Family Farm Demo Feedback`}>
                    {tr.feedback}
                  </a>
                  <a href={`mailto:${EMAIL}`}>{tr.contact}</a>
                  <a href={`tel:${PHONE}`}>{PHONE}</a>
                </>
              )}
            </div>
          </section>
        </div>

        <footer className="nav">
          <button onClick={() => go(index - 1)} disabled={index === 0}>
            {tr.back}
          </button>
          <button onClick={() => go(0)}>{tr.home}</button>
          <button onClick={() => go(index + 1)} disabled={index === slides.length - 1}>
            {tr.next}
          </button>
        </footer>
      </section>

      <Style />
    </main>
  );
}

function Style() {
  return (
    <style>{`
      * { box-sizing: border-box; }
      body { margin: 0; font-family: Georgia, "Times New Roman", serif; }
      .app {
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        color: #fff8e8;
        background: linear-gradient(135deg, #20351f, #5d3f21, #8f6f3e);
      }
      .welcome {
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('/GrowArea.jpg');
        background-size: cover;
        background-position: center;
      }
      .slide-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
      }
      .slide-bg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: saturate(1.05) brightness(.88);
      }
      .overlay {
        position: absolute;
        inset: 0;
        z-index: 1;
        background:
          radial-gradient(circle at 35% 25%, rgba(255,244,204,.20), transparent 30%),
          linear-gradient(90deg, rgba(20,35,18,.88), rgba(58,44,22,.68), rgba(20,35,18,.86));
      }
      .hero-card, .demo-shell {
        position: relative;
        z-index: 2;
        width: min(1180px, calc(100vw - 40px));
        margin: 24px auto;
        border-radius: 28px;
        background: rgba(24, 42, 24, .78);
        border: 1px solid rgba(255,255,255,.20);
        box-shadow: 0 24px 70px rgba(0,0,0,.35);
        backdrop-filter: blur(10px);
      }
      .hero-card {
        padding: 38px;
        max-width: 900px;
      }
      .hero-card h1 {
        font-size: clamp(2.5rem, 7vw, 5.5rem);
        line-height: .95;
        margin: 50px 0 20px;
      }
      .hero-card p {
        max-width: 720px;
        font-size: 1.35rem;
        line-height: 1.5;
      }
      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 18px 22px;
      }
      select, button, a {
        border-radius: 999px;
        border: 0;
        padding: 11px 16px;
        font-weight: 700;
        font-size: .95rem;
      }
      select {
        background: #fff7df;
        color: #25351f;
      }
      button, a {
        background: #f0c66a;
        color: #21331e;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      button.secondary {
        background: #fff7df;
      }
      button:disabled {
        opacity: .4;
        cursor: not-allowed;
      }
      .hero-actions, .actions, .controls {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
      .content-grid {
        display: grid;
        grid-template-columns: 310px 1fr;
        gap: 18px;
        padding: 0 22px 18px;
      }
      .pathways, .story-card {
        border-radius: 24px;
        background: rgba(255, 248, 232, .14);
        border: 1px solid rgba(255,255,255,.18);
      }
      .pathways {
        padding: 18px;
        max-height: calc(100vh - 185px);
        overflow: auto;
      }
      .pathways h2 {
        margin: 0 0 12px;
        color: #fff2bd;
      }
      .pathways button {
        width: 100%;
        justify-content: flex-start;
        margin: 6px 0;
        border-radius: 16px;
        background: rgba(255,247,223,.9);
        color: #26371f;
        text-align: left;
      }
      .pathways button.active {
        background: #f0c66a;
        outline: 3px solid rgba(255,255,255,.25);
      }
      .story-card {
        min-height: 420px;
        padding: clamp(24px, 4vw, 48px);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .eyebrow {
        margin: 0 0 8px;
        color: #f0c66a;
        font-weight: 900;
        letter-spacing: .04em;
        text-transform: uppercase;
      }
      .story-card h1 {
        font-size: clamp(2rem, 5vw, 4.6rem);
        line-height: .98;
        margin: 0 0 18px;
      }
      .story-card p {
        font-size: clamp(1.05rem, 2vw, 1.35rem);
        line-height: 1.5;
        max-width: 920px;
        margin: 0 0 20px;
      }
      .decision {
        background: rgba(29, 48, 27, .72);
        border-left: 6px solid #f0c66a;
        border-radius: 16px;
        padding: 15px 18px;
        margin: 8px 0 20px;
        display: grid;
        gap: 6px;
        font-size: 1.05rem;
      }
      .nav {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        padding: 0 22px 22px;
      }
      @media (max-width: 850px) {
        .content-grid { grid-template-columns: 1fr; }
        .pathways { max-height: 190px; }
        .topbar { flex-direction: column; align-items: flex-start; }
        .demo-shell { width: calc(100vw - 20px); margin: 10px auto; }
      }
    `}</style>
  );
}
