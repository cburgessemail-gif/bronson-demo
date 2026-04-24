import React, { useMemo, useState } from "react";

/**
 * Bronson Family Farm Ecosystem Demo — Final Stable App.tsx
 * Single-file React demo. No external packages required.
 *
 * IMAGE RULE:
 * Place farm images in: public/images/
 * Reference them here WITHOUT "public" in the path, for example: /images/YourFile.jpg
 * This script includes multiple safe filename candidates per page and a built-in fallback
 * so the design remains intact even when an image filename is missing or different.
 */

type RoleKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "producer"
  | "youth"
  | "partner";

type LangKey = "en" | "es" | "fr" | "tl" | "it" | "he";

type Step = {
  label: string;
  title: string;
  text: string;
};

type Pathway = {
  key: RoleKey;
  title: string;
  eyebrow: string;
  mission: string;
  summary: string;
  accent: string;
  images: string[];
  steps: Step[];
  actions: string[];
};

const imageBank = {
  hero: [
    "/images/FarAerial.jpg",
    "/images/Far Aerial.jpg",
    "/images/Aerial.jpg",
    "/images/aerial.jpg",
    "/images/BronsonAerial.jpg",
    "/images/Bronson Family Farm Aerial.jpg",
    "/images/SAM_0001.JPG",
    "/images/SAM_0002.JPG",
    "/images/SAM_0003.JPG",
  ],
  guest: [
    "/images/FarAerial.jpg",
    "/images/Far Aerial.jpg",
    "/images/Aerial.jpg",
    "/images/aerial.jpg",
    "/images/BronsonAerial.jpg",
    "/images/Bronson Family Farm Aerial.jpg",
  ],
  customer: [
    "/images/Produce.jpg",
    "/images/produce.jpg",
    "/images/Vegetables.jpg",
    "/images/vegetables.jpg",
    "/images/BubbleBabies.jpg",
    "/images/Bubble Babies.jpg",
    "/images/Seedlings.jpg",
    "/images/seedlings.jpg",
  ],
  marketplace: [
    "/images/GrownByStorefront.jpg",
    "/images/GrownBy Storefront.jpg",
    "/images/GrownBy.jpg",
    "/images/grownby.jpg",
    "/images/Marketplace.jpg",
    "/images/marketplace.jpg",
    "/images/FarmStop.jpg",
    "/images/Farm Stop.jpg",
  ],
  grower: [
    "/images/GrowArea.jpg",
    "/images/Grow Area.jpg",
    "/images/GrowingArea.jpg",
    "/images/Growing Area.jpg",
    "/images/FarmField.jpg",
    "/images/Farm Field.jpg",
  ],
  producer: [
    "/images/ValueAdded.jpg",
    "/images/Value Added.jpg",
    "/images/Kitchen.jpg",
    "/images/kitchen.jpg",
    "/images/MarketTable.jpg",
    "/images/Market Table.jpg",
    "/images/Products.jpg",
  ],
  youth: [
    "/images/YouthWorkforce.jpg",
    "/images/Youth Workforce.jpg",
    "/images/Youth.jpg",
    "/images/youth.jpg",
    "/images/RC Toys.jpg",
    "/images/RCToys.jpg",
    "/images/Students.jpg",
  ],
  partner: [
    "/images/Partners.jpg",
    "/images/partners.jpg",
    "/images/Community.jpg",
    "/images/community.jpg",
    "/images/Event.jpg",
    "/images/event.jpg",
  ],
};

const translations: Record<LangKey, { name: string; welcome: string; tour: string; enter: string; next: string; back: string; purpose: string; knowledge: string; summary: string }> = {
  en: { name: "English", welcome: "Welcome to the Bronson Family Farm Ecosystem", tour: "Begin Guided Tour", enter: "Enter Pathway", next: "Next", back: "Back", purpose: "Purpose", knowledge: "Knowledge", summary: "Summary" },
  es: { name: "Español", welcome: "Bienvenido al ecosistema de Bronson Family Farm", tour: "Comenzar recorrido", enter: "Entrar", next: "Siguiente", back: "Atrás", purpose: "Propósito", knowledge: "Conocimiento", summary: "Resumen" },
  fr: { name: "Français", welcome: "Bienvenue dans l’écosystème de Bronson Family Farm", tour: "Commencer la visite", enter: "Entrer", next: "Suivant", back: "Retour", purpose: "Objectif", knowledge: "Connaissance", summary: "Résumé" },
  tl: { name: "Tagalog", welcome: "Maligayang pagdating sa ecosystem ng Bronson Family Farm", tour: "Simulan ang paglilibot", enter: "Pumasok", next: "Susunod", back: "Bumalik", purpose: "Layunin", knowledge: "Kaalaman", summary: "Buod" },
  it: { name: "Italiano", welcome: "Benvenuti nell’ecosistema Bronson Family Farm", tour: "Inizia il tour", enter: "Entra", next: "Avanti", back: "Indietro", purpose: "Scopo", knowledge: "Conoscenza", summary: "Riepilogo" },
  he: { name: "Hebrew", welcome: "ברוכים הבאים למערכת של Bronson Family Farm", tour: "התחל סיור", enter: "כניסה", next: "הבא", back: "חזרה", purpose: "מטרה", knowledge: "ידע", summary: "סיכום" },
};

const pathways: Pathway[] = [
  {
    key: "guest",
    title: "Guest Experience",
    eyebrow: "Land · Story · Welcome",
    mission: "Understand the vision, story, and purpose of the land.",
    summary: "Guests enter through the land first, then discover why Bronson Family Farm exists: to connect families, food, learning, culture, and community renewal.",
    accent: "#d8b56d",
    images: imageBank.guest,
    steps: [
      { label: "Sound Bite", title: "A living entrance", text: "This is not just a farm tour. It is an invitation into a working ecosystem rooted in land, legacy, and community purpose." },
      { label: "Intro", title: "Where the story begins", text: "The guest sees open land, growing areas, woods, and event space as one connected place for food, learning, and gathering." },
      { label: "Knowledge", title: "Why this matters", text: "Local food systems become stronger when people can see where food begins, meet growers, and understand how the land supports health and opportunity." },
      { label: "Summary", title: "The guest outcome", text: "The guest leaves knowing the farm is a destination with meaning, not a disconnected event site." },
      { label: "Next", title: "Move deeper", text: "Guests can become customers, volunteers, partners, or supporters after understanding the purpose." },
    ],
    actions: ["View farm story", "Reserve event entry", "Meet the ecosystem"],
  },
  {
    key: "customer",
    title: "Customer Pathway",
    eyebrow: "Fresh Food · Nutrition · Repeat Choices",
    mission: "Connect fresh food and nutrition to repeat healthy choices.",
    summary: "Customers see produce, seedlings, nutrition prompts, recipes, SNAP-aware access, pickup logic, and repeat buying as one healthy pathway.",
    accent: "#7fa25b",
    images: imageBank.customer,
    steps: [
      { label: "Sound Bite", title: "Food with a source", text: "Customers are not just buying items. They are choosing food connected to growers, land, and community health." },
      { label: "Intro", title: "Fresh choices", text: "The pathway highlights produce, Bubble Babies™ seedlings, seasonal availability, pickup, and marketplace access." },
      { label: "Knowledge", title: "Nutrition made visible", text: "Simple education connects natural foods, cooking, gardening, diabetes awareness, and better household choices." },
      { label: "Summary", title: "The customer outcome", text: "Customers understand what to buy, why it matters, and how to return for fresh food again." },
      { label: "Next", title: "Enter the marketplace", text: "The customer moves directly into purchasing and pickup options." },
    ],
    actions: ["Browse seasonal food", "Scan QR for shop", "View pickup options"],
  },
  {
    key: "marketplace",
    title: "Marketplace",
    eyebrow: "Purchasing Power · Sustainability · Access",
    mission: "Convert interest into purchasing power and long-term sustainability.",
    summary: "The marketplace links Bronson Family Farm, Farm & Family Alliance, Parker Farms, GrownBy, SNAP-aware access, vendor visibility, and grower opportunity.",
    accent: "#c88445",
    images: imageBank.marketplace,
    steps: [
      { label: "Sound Bite", title: "The store is part of the system", text: "The marketplace is where community interest becomes revenue, repeat access, and support for local producers." },
      { label: "Intro", title: "From story to sale", text: "Customers can move from learning to buying produce, seedlings, grower products, and event-based offerings." },
      { label: "Knowledge", title: "Access and accountability", text: "The marketplace can support SNAP-aware purchasing, preorders, pickup windows, order history, and grower participation." },
      { label: "Summary", title: "The marketplace outcome", text: "Purchases support the ecosystem while making local food easier to find and easier to buy." },
      { label: "Next", title: "Enter Store", text: "The next action opens the public shopping experience or event order flow." },
    ],
    actions: ["Enter Store", "View preorders", "See vendor opportunities"],
  },
  {
    key: "grower",
    title: "Grower Pathway",
    eyebrow: "Producer · Registration · Market Participation",
    mission: "Connect growers to opportunity, training, and marketplace participation.",
    summary: "Growers are entrepreneurs contributing to a larger food ecosystem. Registration opens pathways to visibility, learning, shared market participation, and support.",
    accent: "#678f55",
    images: imageBank.grower,
    steps: [
      { label: "Sound Bite", title: "Growers build the supply", text: "Growers are not separate from the ecosystem. They are one of the engines that make it real." },
      { label: "Intro", title: "Register first", text: "Growers enter through the portal so the ecosystem can understand their crops, capacity, schedule, and marketplace readiness." },
      { label: "Knowledge", title: "Shared infrastructure", text: "Growers can connect to crop planning, education, market days, food safety knowledge, and coordinated sales opportunities." },
      { label: "Summary", title: "The grower outcome", text: "Growers gain a clearer path from planting to selling while contributing to regional food access." },
      { label: "Next", title: "Join marketplace benefits", text: "Registered growers can move toward marketplace participation and community distribution channels." },
    ],
    actions: ["Register grower", "View crop planner", "Join market opportunity"],
  },
  {
    key: "producer",
    title: "Value-Added Producer",
    eyebrow: "Entrepreneurship · Products · Local Value",
    mission: "Help producers turn local ingredients, skills, and creativity into market-ready value.",
    summary: "Value-added producers are entrepreneurs. They strengthen the ecosystem by transforming produce, culture, craft, and skills into products people can buy and share.",
    accent: "#b87950",
    images: imageBank.producer,
    steps: [
      { label: "Sound Bite", title: "More than raw produce", text: "Value-added producers extend the life and value of the harvest through food, crafts, wellness, and cultural products." },
      { label: "Intro", title: "From ingredient to product", text: "A tomato can become sauce, salsa, a class, a recipe card, or a seasonal market feature." },
      { label: "Knowledge", title: "Entrepreneur pathway", text: "The ecosystem can support product stories, vendor readiness, packaging, pricing, food safety awareness, and market visibility." },
      { label: "Summary", title: "The producer outcome", text: "Producers see a route from idea to product without being isolated from the larger farm and marketplace system." },
      { label: "Next", title: "Prepare to sell", text: "The producer moves toward vendor registration, product listing, or demonstration opportunities." },
    ],
    actions: ["Register producer", "Plan a demo", "List a product"],
  },
  {
    key: "youth",
    title: "Youth Workforce",
    eyebrow: "Skills · Responsibility · Future Readiness",
    mission: "Build skills, responsibility, and future readiness through real work connected to land and community.",
    summary: "Youth see a guided workforce path with tasks, supervisors, life skills progression, safety, attendance, learning reflections, and visible growth.",
    accent: "#4d8d8a",
    images: imageBank.youth,
    steps: [
      { label: "Sound Bite", title: "Young people help operate the ecosystem", text: "Youth are not observers. They learn by helping the farm, events, marketplace, technology, and community activities work." },
      { label: "Intro", title: "Role-based learning", text: "Youth can connect to growing, culinary, arts, business, public safety, logistics, media, and technology pathways." },
      { label: "Knowledge", title: "Supervisor layer", text: "Supervisors can track attendance, tasks, safety, reflections, and Life Skills Progression growth." },
      { label: "Summary", title: "The youth outcome", text: "Youth understand work, responsibility, teamwork, and future options through a real place-based system." },
      { label: "Next", title: "Begin assignment", text: "The youth pathway moves into task check-in, supervisor review, and progress tracking." },
    ],
    actions: ["Youth check-in", "Supervisor view", "View skills progress"],
  },
  {
    key: "partner",
    title: "Partner Pathway",
    eyebrow: "Alignment · Resources · Collaboration",
    mission: "Align resources and collaboration for community benefit.",
    summary: "Partners see where they fit, what role they play, and how their contribution connects to food access, education, workforce, health, and local economic activity.",
    accent: "#9b7653",
    images: imageBank.partner,
    steps: [
      { label: "Sound Bite", title: "Partners make the bridge stronger", text: "Each partner adds capacity to the ecosystem instead of standing alone as a logo." },
      { label: "Intro", title: "Known collaborators", text: "Farm & Family Alliance, Inc., Parker Farms, Central State University, Gates Drone Services, Home Depot, Petitti’s Garden Center, Elliott’s Garden Center, and the Youngstown Area Jewish Foundation each represent a form of capacity." },
      { label: "Knowledge", title: "Resource alignment", text: "Partnership can support education, site planning, materials, market activity, storytelling, health, youth development, and regional food access." },
      { label: "Summary", title: "The partner outcome", text: "Partners understand where their support fits and how collaboration creates a stronger community result." },
      { label: "Next", title: "Choose a contribution lane", text: "Partners can move toward sponsorship, demonstration, volunteer support, technical assistance, or shared programming." },
    ],
    actions: ["View partner lanes", "Plan contribution", "Schedule site visit"],
  },
];

function normalizePath(path: string) {
  return path.replace(/ /g, "%20");
}

function expandImageCandidates(candidates: string[]) {
  const prefixes = ["", "/images/", "images/", "./images/", "/public/images/", "public/images/", "./public/images/", "/assets/", "assets/", "./assets/"];
  const filenames = candidates.map((item) => item.split("/").pop() || item);
  const expanded = new Set<string>();

  candidates.forEach((item) => expanded.add(item));
  filenames.forEach((filename) => {
    prefixes.forEach((prefix) => expanded.add(`${prefix}${filename}`));
  });

  return Array.from(expanded);
}

function SmartImage({ candidates, alt, className }: { candidates: string[]; alt: string; className?: string }) {
  const expandedCandidates = useMemo(() => expandImageCandidates(candidates), [candidates]);
  const [index, setIndex] = useState(0);
  const src = normalizePath(expandedCandidates[index] || "");

  if (!expandedCandidates.length || index >= expandedCandidates.length) {
    return <CinematicFallback alt={alt} className={className} />;
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setIndex((i) => i + 1)}
    />
  );
}

function CinematicFallback({ alt, className }: { alt: string; className?: string }) {
  return (
    <div className={`cinematicFallback ${className || ""}`} aria-label={alt}>
      <div className="sunGlow" />
      <div className="treeLine treeLineBack" />
      <div className="treeLine treeLineFront" />
      <div className="fieldRows">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="fallbackBadge">
        <strong>{alt}</strong>
        <small>Bronson Family Farm Ecosystem</small>
      </div>
    </div>
  );
}

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  utterance.pitch = 1;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

export default function App() {
  const [language, setLanguage] = useState<LangKey>("en");
  const [activeKey, setActiveKey] = useState<RoleKey>("guest");
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);

  const t = translations[language];
  const active = useMemo(() => pathways.find((p) => p.key === activeKey) || pathways[0], [activeKey]);
  const activeStep = active.steps[step] || active.steps[0];

  const selectPathway = (key: RoleKey) => {
    setActiveKey(key);
    setStep(0);
    setStarted(true);
  };

  const nextStep = () => {
    setStep((current) => (current + 1) % active.steps.length);
  };

  const previousStep = () => {
    setStep((current) => (current - 1 + active.steps.length) % active.steps.length);
  };

  const narration = `${active.title}. ${activeStep.label}. ${activeStep.title}. ${activeStep.text}`;

  return (
    <div className="appShell">
      <style>{css}</style>

      <header className="topbar">
        <div className="brandLockup">
          <div className="brandMark">BFF</div>
          <div>
            <div className="brandTitle">Bronson Family Farm</div>
            <div className="brandSub">Farm & Family Alliance, Inc. · Parker Farms</div>
          </div>
        </div>

        <nav className="topNav">
          {pathways.slice(0, 5).map((p) => (
            <button key={p.key} onClick={() => selectPathway(p.key)} className={activeKey === p.key ? "navActive" : ""}>{p.title.replace(" Pathway", "")}</button>
          ))}
        </nav>

        <select value={language} onChange={(e) => setLanguage(e.target.value as LangKey)} aria-label="Language selector">
          {Object.entries(translations).map(([key, value]) => <option key={key} value={key}>{value.name}</option>)}
        </select>
      </header>

      <main>
        {!started ? (
          <section className="hero">
            <SmartImage candidates={imageBank.hero} alt="Bronson Family Farm aerial view" className="heroImage" />
            <div className="heroOverlay" />
            <div className="heroContent">
              <div className="eyebrow">Youngstown · Mahoning Valley · Regional Food Ecosystem</div>
              <h1>{t.welcome}</h1>
              <p>Food, land, youth workforce, marketplace access, growers, value-added producers, partners, and community learning in one connected place.</p>
              <div className="heroActions">
                <button className="primaryBtn" onClick={() => setStarted(true)}>{t.tour}</button>
                <button className="secondaryBtn" onClick={() => selectPathway("marketplace")}>Enter Marketplace</button>
              </div>
            </div>
          </section>
        ) : (
          <section className="experienceGrid" style={{ ["--accent" as string]: active.accent }}>
            <aside className="pathwayRail">
              <div className="railTitle">Demo Pathways</div>
              {pathways.map((p) => (
                <button key={p.key} className={`railItem ${activeKey === p.key ? "railActive" : ""}`} onClick={() => selectPathway(p.key)}>
                  <span>{p.title}</span>
                  <small>{p.eyebrow}</small>
                </button>
              ))}
            </aside>

            <section className="storyPanel">
              <div className="mediaCard">
                <SmartImage candidates={active.images} alt={active.title} className="panelImage" />
                <div className="mediaLabel">{active.eyebrow}</div>
              </div>

              <div className="contentCard">
                <div className="eyebrow">{active.eyebrow}</div>
                <h2>{active.title}</h2>
                <p className="mission"><strong>{t.purpose}:</strong> {active.mission}</p>

                <div className="stepCard">
                  <div className="stepMeta">{step + 1} / {active.steps.length} · {activeStep.label}</div>
                  <h3>{activeStep.title}</h3>
                  <p>{activeStep.text}</p>
                </div>

                <div className="buttonRow">
                  <button className="secondaryBtn dark" onClick={previousStep}>{t.back}</button>
                  <button className="primaryBtn" onClick={nextStep}>{t.next}</button>
                  <button className="secondaryBtn dark" onClick={() => speak(narration)}>Play Voice</button>
                </div>

                <div className="actionGrid">
                  {active.actions.map((action) => (
                    <button key={action} onClick={() => speak(`${action}. ${active.summary}`)}>{action}</button>
                  ))}
                </div>
              </div>

              <div className="summaryCard">
                <div className="summaryTitle">{t.summary}</div>
                <p>{active.summary}</p>
                <div className="partnerStrip">
                  <span>Bronson Family Farm</span>
                  <span>Farm & Family Alliance, Inc.</span>
                  <span>Parker Farms</span>
                  <span>Central State University</span>
                  <span>Gates Drone Services</span>
                  <span>Home Depot</span>
                  <span>Petitti’s Garden Center</span>
                  <span>Elliott’s Garden Center</span>
                  <span>Youngstown Area Jewish Foundation</span>
                </div>
              </div>
            </section>
          </section>
        )}
      </main>
    </div>
  );
}

const css = `
:root {
  --forest: #17251c;
  --forest2: #223629;
  --cream: #f6efe0;
  --paper: rgba(255, 250, 239, 0.94);
  --ink: #1f261f;
  --muted: #687060;
  --gold: #d8b56d;
  --line: rgba(31, 38, 31, 0.14);
}

* { box-sizing: border-box; }
body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: radial-gradient(circle at top left, #344b35 0, #17251c 46%, #0d1510 100%); color: var(--ink); }
button, select { font: inherit; }
button { cursor: pointer; }
.appShell { min-height: 100vh; }

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 22px;
  color: #fff8e8;
  background: rgba(13, 21, 16, 0.86);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
.brandLockup { display: flex; align-items: center; gap: 12px; min-width: 280px; }
.brandMark { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(145deg, #d8b56d, #7fa25b); color: #142016; font-weight: 800; letter-spacing: .04em; box-shadow: 0 10px 30px rgba(0,0,0,.25); }
.brandTitle { font-size: 1.1rem; font-weight: 800; line-height: 1.1; }
.brandSub { font-size: .78rem; color: rgba(255,248,232,.72); }
.topNav { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
.topNav button, .topbar select { border: 1px solid rgba(255,255,255,.16); background: rgba(255,255,255,.08); color: #fff8e8; border-radius: 999px; padding: 8px 12px; }
.topbar select { background: #1d2e23; }
.topNav .navActive { background: rgba(216,181,109,.26); border-color: rgba(216,181,109,.65); }

.hero { position: relative; min-height: calc(100vh - 77px); display: grid; align-items: end; overflow: hidden; }
.heroImage { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: saturate(1.02) contrast(1.02); }
.heroOverlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8,16,10,.88), rgba(8,16,10,.45), rgba(8,16,10,.18)), linear-gradient(0deg, rgba(8,16,10,.75), transparent 45%); }
.heroContent { position: relative; z-index: 2; max-width: 980px; padding: 7vw; color: #fff8e8; }
.eyebrow { text-transform: uppercase; letter-spacing: .13em; font-size: .78rem; color: var(--gold); font-weight: 800; }
h1 { font-size: clamp(2.8rem, 6vw, 6.8rem); line-height: .9; margin: 18px 0; max-width: 980px; letter-spacing: -.05em; }
.hero p { font-size: clamp(1.05rem, 2vw, 1.45rem); line-height: 1.5; max-width: 760px; color: rgba(255,248,232,.86); }
.heroActions, .buttonRow { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px; }
.primaryBtn, .secondaryBtn { border: 0; border-radius: 999px; padding: 12px 18px; font-weight: 800; box-shadow: 0 14px 32px rgba(0,0,0,.22); }
.primaryBtn { background: var(--accent, var(--gold)); color: #152015; }
.secondaryBtn { background: rgba(255,255,255,.14); color: #fff8e8; border: 1px solid rgba(255,255,255,.24); }
.secondaryBtn.dark { color: var(--ink); background: #fff8e8; border: 1px solid var(--line); box-shadow: none; }

.experienceGrid { display: grid; grid-template-columns: 310px minmax(0, 1fr); gap: 22px; padding: 22px; min-height: calc(100vh - 77px); }
.pathwayRail { background: rgba(13,21,16,.58); border: 1px solid rgba(255,255,255,.12); border-radius: 28px; padding: 16px; color: #fff8e8; height: fit-content; position: sticky; top: 96px; }
.railTitle { color: var(--gold); text-transform: uppercase; letter-spacing: .12em; font-size: .78rem; font-weight: 800; margin: 6px 8px 12px; }
.railItem { width: 100%; display: grid; gap: 4px; text-align: left; color: #fff8e8; background: transparent; border: 1px solid transparent; border-radius: 18px; padding: 13px; margin-bottom: 8px; }
.railItem span { font-weight: 800; }
.railItem small { color: rgba(255,248,232,.68); line-height: 1.25; }
.railActive { background: rgba(255,255,255,.10); border-color: var(--accent); }

.storyPanel { display: grid; grid-template-columns: minmax(320px, .92fr) minmax(360px, 1.08fr); gap: 22px; align-content: start; }
.mediaCard, .contentCard, .summaryCard { border-radius: 32px; overflow: hidden; background: var(--paper); border: 1px solid rgba(255,255,255,.22); box-shadow: 0 26px 60px rgba(0,0,0,.25); }
.mediaCard { position: relative; min-height: 600px; background: #253522; }
.panelImage { width: 100%; height: 100%; min-height: 600px; object-fit: cover; display: block; }
.mediaLabel { position: absolute; left: 18px; right: 18px; bottom: 18px; border-radius: 22px; padding: 14px 16px; color: #fff8e8; background: rgba(13,21,16,.72); backdrop-filter: blur(10px); font-weight: 800; }
.contentCard { padding: clamp(22px, 4vw, 42px); }
h2 { font-size: clamp(2.15rem, 4vw, 4.3rem); line-height: .94; margin: 12px 0 18px; letter-spacing: -.045em; color: #1d2b20; }
.mission { font-size: 1.05rem; line-height: 1.55; color: #384337; }
.stepCard { margin: 26px 0; padding: 24px; border-radius: 26px; background: linear-gradient(135deg, rgba(255,255,255,.78), rgba(246,239,224,.9)); border: 1px solid var(--line); }
.stepMeta { color: var(--accent); text-transform: uppercase; letter-spacing: .11em; font-size: .76rem; font-weight: 900; }
h3 { font-size: clamp(1.55rem, 2.5vw, 2.4rem); line-height: 1; margin: 10px 0; letter-spacing: -.035em; }
.stepCard p { font-size: 1.04rem; line-height: 1.6; color: #485143; }
.actionGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 22px; }
.actionGrid button { min-height: 66px; border-radius: 18px; border: 1px solid rgba(31,38,31,.16); background: #fff8e8; color: #1d2b20; font-weight: 800; padding: 12px; }
.summaryCard { grid-column: 1 / -1; padding: 24px; }
.summaryTitle { color: var(--accent); text-transform: uppercase; letter-spacing: .13em; font-weight: 900; font-size: .78rem; }
.summaryCard p { font-size: 1.05rem; line-height: 1.55; max-width: 1100px; }
.partnerStrip { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.partnerStrip span { padding: 8px 10px; border-radius: 999px; background: rgba(31,38,31,.07); border: 1px solid rgba(31,38,31,.1); font-size: .84rem; font-weight: 700; color: #394237; }
.cinematicFallback {
  position: relative;
  overflow: hidden;
  min-height: 100%;
  width: 100%;
  display: block;
  background:
    radial-gradient(circle at 72% 18%, rgba(246, 212, 122, .95) 0 5%, rgba(246, 212, 122, .25) 6% 14%, transparent 15%),
    linear-gradient(180deg, #203b2c 0%, #314d31 38%, #6f7f42 60%, #3e5b2d 100%);
}
.cinematicFallback.heroImage {
  position: absolute;
  inset: 0;
  height: 100%;
}
.sunGlow {
  position: absolute;
  width: 42vw;
  height: 42vw;
  right: 3vw;
  top: -13vw;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,224,139,.42), transparent 64%);
}
.treeLine {
  position: absolute;
  left: -5%;
  right: -5%;
  height: 35%;
  bottom: 32%;
  opacity: .78;
  background:
    radial-gradient(circle at 4% 80%, #132418 0 3%, transparent 3.2%),
    radial-gradient(circle at 9% 64%, #132418 0 5%, transparent 5.2%),
    radial-gradient(circle at 16% 76%, #132418 0 4.8%, transparent 5%),
    radial-gradient(circle at 24% 62%, #132418 0 6%, transparent 6.2%),
    radial-gradient(circle at 33% 72%, #132418 0 4.5%, transparent 4.7%),
    radial-gradient(circle at 43% 60%, #132418 0 5.5%, transparent 5.7%),
    radial-gradient(circle at 54% 74%, #132418 0 5%, transparent 5.2%),
    radial-gradient(circle at 65% 64%, #132418 0 6.5%, transparent 6.7%),
    radial-gradient(circle at 78% 72%, #132418 0 5%, transparent 5.2%),
    radial-gradient(circle at 89% 62%, #132418 0 6%, transparent 6.2%),
    radial-gradient(circle at 97% 78%, #132418 0 4.5%, transparent 4.7%);
}
.treeLineBack { bottom: 39%; opacity: .42; transform: scale(1.08); filter: blur(1px); }
.treeLineFront { bottom: 32%; }
.fieldRows {
  position: absolute;
  left: -12%;
  right: -12%;
  bottom: -7%;
  height: 52%;
  perspective: 700px;
  transform: rotateX(58deg);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5vw;
  padding: 0 7vw;
}
.fieldRows span {
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(246,239,224,.06), rgba(246,239,224,.28), rgba(246,239,224,.06));
  box-shadow: 0 0 24px rgba(0,0,0,.18) inset;
}
.fallbackBadge {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  z-index: 3;
  display: grid;
  gap: 4px;
  width: fit-content;
  max-width: min(520px, calc(100% - 44px));
  border-radius: 22px;
  padding: 14px 16px;
  color: #fff8e8;
  background: rgba(13,21,16,.62);
  border: 1px solid rgba(255,255,255,.16);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 40px rgba(0,0,0,.28);
}
.fallbackBadge strong { font-size: 1rem; line-height: 1.15; }
.fallbackBadge small { color: rgba(255,248,232,.72); font-weight: 700; }

@media (max-width: 1060px) {
  .topbar { align-items: flex-start; flex-direction: column; }
  .experienceGrid { grid-template-columns: 1fr; }
  .pathwayRail { position: relative; top: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .railTitle { grid-column: 1 / -1; }
  .storyPanel { grid-template-columns: 1fr; }
  .mediaCard, .panelImage { min-height: 420px; }
}

@media (max-width: 720px) {
  .topNav { justify-content: flex-start; }
  .brandLockup { min-width: 0; }
  .heroContent { padding: 32px 20px; }
  .experienceGrid { padding: 12px; }
  .pathwayRail { grid-template-columns: 1fr; border-radius: 20px; }
  .mediaCard, .contentCard, .summaryCard { border-radius: 22px; }
  .actionGrid { grid-template-columns: 1fr; }
}
`;
