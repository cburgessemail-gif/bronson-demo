import React, { useMemo, useState } from "react";

type Lang = "en" | "es" | "fr" | "tl" | "it" | "he";
type View =
  | "home"
  | "tour"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer"
  | "summary";

type ImageKey =
  | "hero"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer"
  | "produce"
  | "seedlings";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "tl", label: "Tagalog" },
  { code: "it", label: "Italiano" },
  { code: "he", label: "עברית" },
];

const copy: Record<Lang, Record<string, string>> = {
  en: {
    welcome: "Welcome to Bronson Family Farm",
    subtitle: "A living ecosystem connecting food, families, growers, youth workforce, partners, and marketplace opportunity.",
    start: "Start the Guided Experience",
    marketplace: "Enter Marketplace",
    growers: "Meet the Grower Pathway",
    youth: "Youth Workforce",
    inviteOnly: "Growers Supply Market · May 16, 2026 · 9:00 AM–2:00 PM · By Invitation Only",
    choosePath: "Choose a pathway or follow the guided tour.",
    backHome: "Back to Home",
    next: "Next",
    previous: "Previous",
    purpose: "Purpose",
    action: "Action",
    summary: "Summary",
  },
  es: {
    welcome: "Bienvenidos a Bronson Family Farm",
    subtitle: "Un ecosistema vivo que conecta alimentos, familias, productores, jóvenes, aliados y oportunidades de mercado.",
    start: "Comenzar la experiencia guiada",
    marketplace: "Entrar al mercado",
    growers: "Conocer la ruta de productores",
    youth: "Fuerza laboral juvenil",
    inviteOnly: "Growers Supply Market · 16 de mayo de 2026 · 9:00 AM–2:00 PM · Solo por invitación",
    choosePath: "Elija una ruta o siga la experiencia guiada.",
    backHome: "Volver al inicio",
    next: "Siguiente",
    previous: "Anterior",
    purpose: "Propósito",
    action: "Acción",
    summary: "Resumen",
  },
  fr: {
    welcome: "Bienvenue à Bronson Family Farm",
    subtitle: "Un écosystème vivant qui relie l’alimentation, les familles, les producteurs, les jeunes, les partenaires et le marché.",
    start: "Commencer l’expérience guidée",
    marketplace: "Entrer au marché",
    growers: "Découvrir le parcours des producteurs",
    youth: "Main-d’œuvre jeunesse",
    inviteOnly: "Growers Supply Market · 16 mai 2026 · 9 h–14 h · Sur invitation seulement",
    choosePath: "Choisissez un parcours ou suivez la visite guidée.",
    backHome: "Retour à l’accueil",
    next: "Suivant",
    previous: "Précédent",
    purpose: "Objectif",
    action: "Action",
    summary: "Résumé",
  },
  tl: {
    welcome: "Maligayang pagdating sa Bronson Family Farm",
    subtitle: "Isang buhay na ekosistemang nag-uugnay ng pagkain, pamilya, magsasaka, kabataan, katuwang, at pamilihan.",
    start: "Simulan ang guided experience",
    marketplace: "Pumasok sa Marketplace",
    growers: "Kilalanin ang Grower Pathway",
    youth: "Youth Workforce",
    inviteOnly: "Growers Supply Market · Mayo 16, 2026 · 9:00 AM–2:00 PM · Sa imbitasyon lamang",
    choosePath: "Pumili ng pathway o sundan ang guided tour.",
    backHome: "Bumalik sa Home",
    next: "Susunod",
    previous: "Nakaraan",
    purpose: "Layunin",
    action: "Aksyon",
    summary: "Buod",
  },
  it: {
    welcome: "Benvenuti a Bronson Family Farm",
    subtitle: "Un ecosistema vivo che collega cibo, famiglie, coltivatori, giovani, partner e opportunità di mercato.",
    start: "Avvia l’esperienza guidata",
    marketplace: "Entra nel Marketplace",
    growers: "Scopri il percorso dei coltivatori",
    youth: "Forza lavoro giovanile",
    inviteOnly: "Growers Supply Market · 16 maggio 2026 · 9:00–14:00 · Solo su invito",
    choosePath: "Scegli un percorso o segui il tour guidato.",
    backHome: "Torna alla Home",
    next: "Avanti",
    previous: "Indietro",
    purpose: "Scopo",
    action: "Azione",
    summary: "Sintesi",
  },
  he: {
    welcome: "ברוכים הבאים לחוות משפחת ברונסון",
    subtitle: "מערכת חיה המחברת מזון, משפחות, מגדלים, נוער, שותפים והזדמנויות שוק.",
    start: "התחל חוויה מודרכת",
    marketplace: "כניסה לשוק",
    growers: "מסלול המגדלים",
    youth: "כוח עבודה לנוער",
    inviteOnly: "Growers Supply Market · 16 במאי 2026 · 9:00–14:00 · בהזמנה בלבד",
    choosePath: "בחרו מסלול או המשיכו בסיור המודרך.",
    backHome: "חזרה לבית",
    next: "הבא",
    previous: "הקודם",
    purpose: "מטרה",
    action: "פעולה",
    summary: "סיכום",
  },
};

const imageCandidates: Record<ImageKey, string[]> = {
  hero: ["/images/GrowArea.jpg"],
  guest: ["/images/SAM_0221.JPG"],
  customer: ["/images/SAM_0238.JPG"],
  marketplace: ["/images/SAM_0229.JPG"],
  grower: ["/images/SAM_0220.JPG"],
  youth: ["/images/SAM_0226.JPG"],
  partner: ["/images/SAM_0225.JPG"],
  volunteer: ["/images/SAM_0222.JPG"],
  produce: ["/images/SAM_0238.JPG"],
  seedlings: ["/images/SAM_0225.JPG"],
};

const tourOrder: View[] = ["guest", "customer", "marketplace", "grower", "youth", "partner", "volunteer", "summary"];

const pathways: Record<Exclude<View, "home" | "tour">, {
  label: string;
  image: ImageKey;
  sound: string;
  intro: string;
  knowledge: string;
  purpose: string;
  actions: { label: string; to: View }[];
}> = {
  guest: {
    label: "Guest Pathway",
    image: "guest",
    sound: "Walk in as a visitor. Leave understanding the vision.",
    intro: "Guests experience the farm as a living place where land, food, family, education, and community purpose come together.",
    knowledge: "Bronson Family Farm is more than acreage. It is a place-based ecosystem rooted in agriculture, heritage, local food access, and community restoration.",
    purpose: "Help visitors understand the story, the land, and why this work matters before they choose how to participate.",
    actions: [
      { label: "See Marketplace", to: "marketplace" },
      { label: "Meet Growers", to: "grower" },
      { label: "View Partners", to: "partner" },
    ],
  },
  customer: {
    label: "Customer Pathway",
    image: "customer",
    sound: "Fresh food becomes a repeat healthy choice.",
    intro: "Customers discover produce, seedlings, nutrition, recipes, seasonal offerings, and local buying options connected to the farm ecosystem.",
    knowledge: "The customer pathway connects food access with education so families understand what they are buying, how to prepare it, and why local food matters.",
    purpose: "Move customers from interest to healthy purchasing, repeat engagement, and deeper connection to growers and the marketplace.",
    actions: [
      { label: "Shop Marketplace", to: "marketplace" },
      { label: "Learn About Growers", to: "grower" },
      { label: "Start Guided Tour", to: "tour" },
    ],
  },
  marketplace: {
    label: "Marketplace",
    image: "marketplace",
    sound: "Interest becomes purchasing power.",
    intro: "The marketplace connects customers, growers, seedlings, produce, value-added goods, and event sales into one visible ecosystem.",
    knowledge: "Registered growers and value-added producers can gain access to market participation, visibility, and ecosystem support.",
    purpose: "Convert community interest into real transactions that support farm sustainability and regional food participation.",
    actions: [
      { label: "Register as Grower", to: "grower" },
      { label: "Customer Pathway", to: "customer" },
      { label: "Partner Support", to: "partner" },
    ],
  },
  grower: {
    label: "Grower Pathway",
    image: "grower",
    sound: "Grow more than food. Grow opportunity.",
    intro: "Growers enter the ecosystem to connect production, education, market access, and shared regional food infrastructure.",
    knowledge: "The pathway supports growers through visibility, marketplace participation, knowledge resources, and connection to buyers and partners.",
    purpose: "Help local growers become stronger entrepreneurs while contributing to a larger food and community ecosystem.",
    actions: [
      { label: "Enter Marketplace", to: "marketplace" },
      { label: "Partner Resources", to: "partner" },
      { label: "Youth Workforce", to: "youth" },
    ],
  },
  youth: {
    label: "Youth Workforce Pathway",
    image: "youth",
    sound: "Young people build skills by doing real work in a real ecosystem.",
    intro: "Youth participants connect agriculture, responsibility, leadership, customer service, safety, and entrepreneurship through hands-on farm roles.",
    knowledge: "Supervisors can guide learning through tasks, reflection, life skills progression, and meaningful work tied to the farm’s operations.",
    purpose: "Build future readiness, responsibility, confidence, teamwork, and practical workforce skills.",
    actions: [
      { label: "See Marketplace Roles", to: "marketplace" },
      { label: "Meet Partners", to: "partner" },
      { label: "Volunteer Pathway", to: "volunteer" },
    ],
  },
  partner: {
    label: "Partner Pathway",
    image: "partner",
    sound: "Partners align resources so the ecosystem can serve more people.",
    intro: "Partners connect education, health, workforce, agriculture, logistics, funding, media, and community assets to the farm’s mission.",
    knowledge: "Bronson Family Farm, Farm & Family Alliance, Inc., Parker Farms, Gates Drones, Central State University, Home Depot, Petitti’s Garden Center, Elliott’s Garden Center, and the Youngstown Area Jewish Foundation each represent parts of a larger support system.",
    purpose: "Turn separate strengths into coordinated community benefit, visibility, and long-term sustainability.",
    actions: [
      { label: "View Guest Experience", to: "guest" },
      { label: "Support Marketplace", to: "marketplace" },
      { label: "Youth Workforce", to: "youth" },
    ],
  },
  volunteer: {
    label: "Volunteer Pathway",
    image: "volunteer",
    sound: "Volunteers help turn vision into visible progress.",
    intro: "Volunteers support growing, setup, events, hospitality, education, cleanup, storytelling, and community engagement.",
    knowledge: "Because the farm operates off the grid, volunteers and participants help create a practical outdoor setup with prepared roles and clear expectations.",
    purpose: "Make participation simple, safe, useful, and connected to the larger mission.",
    actions: [
      { label: "Start at Guest Pathway", to: "guest" },
      { label: "Meet Partners", to: "partner" },
      { label: "Final Summary", to: "summary" },
    ],
  },
  summary: {
    label: "Ecosystem Summary",
    image: "hero",
    sound: "One farm. Many pathways. Shared community benefit.",
    intro: "The demo shows how guests, customers, growers, youth, partners, volunteers, and the marketplace connect through one living ecosystem.",
    knowledge: "Each pathway has a role. Each role leads somewhere meaningful. The farm becomes a bridge between food, learning, opportunity, and local sustainability.",
    purpose: "Show the mission clearly enough that people understand where they fit and what action comes next.",
    actions: [
      { label: "Return Home", to: "home" },
      { label: "Marketplace", to: "marketplace" },
      { label: "Replay Tour", to: "tour" },
    ],
  },
};

const marketItems = [
  { title: "Bubble Babies™ Seedling Rolls", type: "Seedlings & Starts", price: "Pre-order / pickup", image: "seedlings" as ImageKey },
  { title: "Tomato Seedlings", type: "Garden Starts", price: "Seasonal bundle", image: "seedlings" as ImageKey },
  { title: "Fresh Produce Box", type: "Fresh Produce", price: "Seasonal availability", image: "produce" as ImageKey },
  { title: "Value-Added Producer Table", type: "Local Goods", price: "Event marketplace", image: "marketplace" as ImageKey },
];

function SmartImage({ imageKey, alt, className = "" }: { imageKey: ImageKey; alt: string; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);
  const candidates = imageCandidates[imageKey] || imageCandidates.hero;

  if (failed) {
    return (
      <div className={`${className} imageFallback`} aria-label={alt} role="img">
        <div className="fallbackOverlay" />
      </div>
    );
  }

  return (
    <img
      className={className}
      src={candidates[idx]}
      alt={alt}
      onError={() => {
        if (idx < candidates.length - 1) setIdx(idx + 1);
        else setFailed(true);
      }}
    />
  );
}

function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [view, setView] = useState<View>("home");
  const [tourIndex, setTourIndex] = useState(0);
  const t = copy[lang];
  const dir = lang === "he" ? "rtl" : "ltr";
  const currentTourView = tourOrder[tourIndex];
  const activeView = view === "tour" ? currentTourView : view;

  const current = useMemo(() => {
    if (activeView === "home" || activeView === "tour") return null;
    return pathways[activeView as Exclude<View, "home" | "tour">];
  }, [activeView]);

  const go = (target: View) => {
    if (target === "tour") {
      setTourIndex(0);
      setView("tour");
    } else {
      setView(target);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextTour = () => {
    if (tourIndex < tourOrder.length - 1) setTourIndex(tourIndex + 1);
    else setView("summary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevTour = () => {
    if (tourIndex > 0) setTourIndex(tourIndex - 1);
    else setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app" dir={dir}>
      <style>{styles}</style>

      <header className="topbar">
        <button className="brand" onClick={() => go("home")}>Bronson Family Farm</button>
        <nav className="nav">
          <button onClick={() => go("marketplace")}>{t.marketplace}</button>
          <button onClick={() => go("grower")}>{t.growers}</button>
          <button onClick={() => go("youth")}>{t.youth}</button>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value as Lang)} aria-label="Language selector">
          {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
      </header>

      {activeView === "home" ? (
        <main>
          <section className="hero">
            <SmartImage imageKey="hero" alt="Bronson Family Farm aerial view" className="heroImg" />
            <div className="heroOverlay" />
            <div className="heroContent">
              <p className="eyebrow">{t.inviteOnly}</p>
              <h1>{t.welcome}</h1>
              <p className="lead">{t.subtitle}</p>
              <div className="heroActions">
                <button className="primary" onClick={() => go("tour")}>{t.start}</button>
                <button className="secondary" onClick={() => go("marketplace")}>{t.marketplace}</button>
              </div>
            </div>
          </section>

          <section className="pathGridSection">
            <div className="sectionHeader">
              <h2>{t.choosePath}</h2>
              <p>Start with the guided experience or enter the pathway that matches your role.</p>
            </div>
            <div className="pathGrid">
              {(["guest", "customer", "marketplace", "grower", "youth", "partner", "volunteer"] as const).map((key) => (
                <button className="pathCard" key={key} onClick={() => go(key)}>
                  <SmartImage imageKey={pathways[key].image} alt={pathways[key].label} className="cardImg" />
                  <span>{pathways[key].label}</span>
                  <small>{pathways[key].sound}</small>
                </button>
              ))}
            </div>
          </section>
        </main>
      ) : current ? (
        <main>
          <section className="detailHero">
            <SmartImage imageKey={current.image} alt={current.label} className="detailImg" />
            <div className="detailText">
              <p className="eyebrow">{view === "tour" ? `Guided Tour · ${tourIndex + 1} of ${tourOrder.length}` : "Bronson Family Farm Ecosystem"}</p>
              <h1>{current.label}</h1>
              <p className="sound">{current.sound}</p>
            </div>
          </section>

          <section className="contentGrid">
            <article className="panel large">
              <p>{current.sound}</p>
            </article>
            <article className="panel">
              <p>{current.intro}</p>
            </article>
            <article className="panel">
              <p>{current.knowledge}</p>
            </article>
            <article className="panel large">
              <p>{current.purpose}</p>
            </article>
          </section>

          {activeView === "marketplace" && (
            <section className="marketSection">
              <div className="sectionHeader">
                <h2>Marketplace Preview</h2>
                <p>Fresh produce, seedlings, Bubble Babies™, and value-added producer opportunities.</p>
              </div>
              <div className="marketGrid">
                {marketItems.map((item) => (
                  <div className="marketCard" key={item.title}>
                    <SmartImage imageKey={item.image} alt={item.title} className="marketImg" />
                    <div className="marketBody">
                      <small>{item.type}</small>
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                      <button
                        onClick={() =>
                          go(
                            item.title.includes("Seed") ||
                            item.title.includes("Produce") ||
                            item.title.includes("Tomato")
                              ? "customer"
                              : "grower"
                          )
                        }
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="actionBand">
            <div>
              <h2>{t.action}</h2>
              <p>Select the next step that matches how this person would naturally move through the ecosystem.</p>
            </div>
            <div className="actionButtons">
              {current.actions.map((a) => <button key={a.label} onClick={() => go(a.to)}>{a.label}</button>)}
            </div>
          </section>

          {view === "tour" && (
            <section className="tourControls">
              <button onClick={prevTour}>{t.previous}</button>
              <button className="primary" onClick={nextTour}>{tourIndex === tourOrder.length - 1 ? t.summary : t.next}</button>
            </section>
          )}

          <section className="bottomNav">
            <button onClick={() => go("home")}>{t.backHome}</button>
            <button onClick={() => go("tour")}>{t.start}</button>
          </section>
        </main>
      ) : null}
    </div>
  );
}

const styles = `
:root {
  --forest: #173d2a;
  --forest2: #245a3d;
  --leaf: #6f8f3f;
  --cream: #f6f0df;
  --sand: #e8d9b8;
  --soil: #5a3d2b;
  --ink: #1f261f;
  --white: #fffdf7;
  --gold: #f3d98b;
  --shadow: 0 18px 45px rgba(20, 35, 20, .18);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: Georgia, 'Times New Roman', serif; background: var(--cream); color: var(--ink); }
button, select { font: inherit; }
.app { min-height: 100vh; background: var(--cream); }
.topbar { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; gap: 16px; justify-content: space-between; padding: 14px 22px; background: rgba(246, 240, 223, .96); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(90,61,43,.18); }
.brand { border: 0; background: transparent; color: var(--forest); font-weight: 900; font-size: 18px; cursor: pointer; }
.nav { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
.nav button, .topbar select { border: 1px solid rgba(23,61,42,.22); background: var(--white); border-radius: 999px; padding: 9px 13px; color: var(--forest); cursor: pointer; }
.hero { position: relative; min-height: 82vh; display: grid; align-items: center; overflow: hidden; background: linear-gradient(135deg, #0f2d1e, #304234 45%, #5a3d2b); }
.heroImg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.imageFallback { position: relative; overflow: hidden; display: block; width: 100%; height: 100%; min-height: inherit; background: linear-gradient(135deg, #163926 0%, #314936 45%, #6b5434 100%); }
.imageFallback::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 18% 24%, rgba(243,217,139,.30), transparent 18%), radial-gradient(circle at 80% 18%, rgba(111,143,63,.24), transparent 24%), repeating-linear-gradient(115deg, rgba(255,255,255,.09) 0 2px, transparent 2px 36px); }
.imageFallback::after { content: ''; position: absolute; left: -10%; right: -10%; bottom: -20%; height: 44%; background: repeating-linear-gradient(12deg, rgba(246,240,223,.30) 0 8px, rgba(23,61,42,.14) 8px 22px), linear-gradient(180deg, rgba(111,143,63,.48), rgba(90,61,43,.52)); border-radius: 55% 55% 0 0; }
.fallbackOverlay { position: absolute; inset: 0; }
.heroOverlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(14,35,24,.82), rgba(14,35,24,.42), rgba(14,35,24,.18)); }
.heroContent { position: relative; max-width: 820px; padding: 72px 7vw; color: white; }
.eyebrow { letter-spacing: .08em; text-transform: uppercase; font-size: 13px; font-weight: 900; color: var(--gold); }
h1 { font-size: clamp(42px, 6vw, 76px); line-height: .98; margin: 12px 0 18px; letter-spacing: -.04em; }
.lead { font-size: clamp(18px, 2.2vw, 27px); line-height: 1.42; max-width: 760px; }
.heroActions, .actionButtons, .tourControls, .bottomNav { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
button { transition: transform .18s ease, box-shadow .18s ease, background .18s ease; }
button:hover { transform: translateY(-1px); }
.primary, .secondary, .actionButtons button, .tourControls button, .bottomNav button, .marketBody button { border: 0; border-radius: 999px; padding: 13px 18px; cursor: pointer; box-shadow: var(--shadow); font-weight: 900; text-decoration: none; margin-top: 6px; }
.primary { background: var(--gold); color: #1b2d1d; }
.secondary, .actionButtons button, .tourControls button, .bottomNav button, .marketBody button { background: var(--forest); color: white; }
.pathGridSection, .marketSection, .contentGrid, .tourControls, .bottomNav { padding: 38px 7vw; }
.sectionHeader { max-width: 850px; margin-bottom: 20px; }
.sectionHeader h2 { margin: 0 0 8px; font-size: clamp(26px, 3vw, 42px); color: var(--forest); }
.sectionHeader p { margin: 0; font-size: 18px; line-height: 1.55; }
.pathGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 18px; }
.pathCard { overflow: hidden; text-align: left; min-height: 300px; border: 1px solid rgba(90,61,43,.16); background: var(--white); border-radius: 28px; cursor: pointer; box-shadow: var(--shadow); padding: 0 0 18px; }
.cardImg { width: 100%; height: 165px; min-height: 165px; object-fit: cover; background: linear-gradient(135deg, var(--forest2), var(--sand)); display: block; }
.pathCard span { display: block; padding: 17px 18px 6px; font-weight: 900; font-size: 21px; color: var(--forest); }
.pathCard small { display: block; padding: 0 18px; line-height: 1.45; font-size: 15px; color: #4b4b3f; }
.detailHero { display: grid; grid-template-columns: minmax(320px, 46%) 1fr; min-height: 520px; background: var(--forest); color: white; overflow: hidden; }
.detailImg { width: 100%; height: 100%; min-height: 520px; object-fit: cover; display: block; background: linear-gradient(135deg, #163926, #6b5434); }
.detailText { display: flex; flex-direction: column; justify-content: center; padding: 55px 7vw; background: linear-gradient(135deg, rgba(23,61,42,.98), rgba(52,73,54,.92)); color: white; }
.detailText h1 { color: white; }
.sound { font-size: clamp(21px, 2.5vw, 34px); line-height: 1.3; color: #fff4c7; max-width: 760px; }
.contentGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.panel { background: var(--white); border-radius: 28px; padding: 28px; box-shadow: var(--shadow); border: 1px solid rgba(90,61,43,.14); }
.panel.large { grid-column: span 2; }
.panel h2 { margin-top: 0; color: var(--forest); font-size: 26px; }
.panel p, .actionBand p { font-size: 18px; line-height: 1.6; }
.marketSection { padding-top: 20px; }
.marketGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(235px, 1fr)); gap: 18px; }
.marketCard { background: var(--white); border-radius: 28px; overflow: hidden; box-shadow: var(--shadow); border: 1px solid rgba(90,61,43,.14); }
.marketImg { width: 100%; height: 180px; min-height: 180px; object-fit: cover; background: linear-gradient(135deg, var(--forest2), var(--sand)); display: block; }
.marketBody { padding: 20px 20px 24px; }
.marketBody small { color: var(--leaf); font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }
.marketBody h3 { color: var(--forest); font-size: 23px; margin: 8px 0; }
.marketBody p { line-height: 1.45; }
.actionBand { margin: 24px 7vw 0; padding: 34px; border-radius: 34px; background: linear-gradient(135deg, var(--forest), var(--forest2)); color: white; display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center; box-shadow: var(--shadow); }
.actionBand h2 { margin: 0; font-size: 34px; color: white; }
.actionBand p { margin-bottom: 0; }
.tourControls { justify-content: center; }
.bottomNav { justify-content: center; padding-top: 20px; padding-bottom: 55px; }
@media (max-width: 860px) {
  .topbar { align-items: flex-start; flex-direction: column; }
  .detailHero { grid-template-columns: 1fr; }
  .detailImg { min-height: 300px; }
  .contentGrid { grid-template-columns: 1fr; }
  .panel.large { grid-column: span 1; }
  .actionBand { grid-template-columns: 1fr; margin-left: 18px; margin-right: 18px; }
  .pathGridSection, .marketSection, .contentGrid, .tourControls, .bottomNav { padding-left: 18px; padding-right: 18px; }
}
`;

export default App;
