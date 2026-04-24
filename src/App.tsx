import React, { useMemo, useState } from "react";

/**
 * Bronson Family Farm Ecosystem Demo — Final Integrated App.tsx
 * Home page preserved. Marketplace upgraded with BOTH storefront + produce visuals.
 * Place images in public/images/ and reference them as /images/filename.jpg
 */

type RoleKey = "guest" | "customer" | "marketplace" | "grower" | "producer" | "youth" | "partner";
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

const STORE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const WEBSITE_URL = "https://www.bronsonfamilyfarm.com";
const CONTACT_EMAIL = "cburgess@bronsonfamilyfarm.com";

const sam = (start: number, end: number) => {
  const files: string[] = [];
  for (let i = start; i <= end; i++) {
    const name = `SAM_${String(i).padStart(4, "0")}.JPG`;
    files.push(`/${name}`, `/images/${name}`);
  }
  return files;
};

const imageBank = {
  // HOME PAGE (preserve exactly)
  hero: [
    "/GrowArea.jpg",
    "/images/GrowArea.jpg",
  ],

  // GUEST — land / entrance / first impression
  guest: [
    "/GrowArea2.jpg",
    "/images/GrowArea2.jpg",
    "/SAM_0220.JPG",
    "/images/SAM_0220.JPG",
    "/SAM_0221.JPG",
    "/images/SAM_0221.JPG",
  ],

  // CUSTOMER — produce / seedlings / healthy food choices
  customer: [
    "/SAM_0225.JPG",
    "/images/SAM_0225.JPG",
    "/SAM_0226.JPG",
    "/images/SAM_0226.JPG",
    "/SAM_0229.JPG",
    "/images/SAM_0229.JPG",
  ],

  // MARKETPLACE — TRUE marketplace / buying / storefront / commercial energy
  marketplace: [
    "/00launch.png",
    "/images/00launch.png",
    "/SAM_0249.JPG",
    "/images/SAM_0249.JPG",
    "/SAM_0250.JPG",
    "/images/SAM_0250.JPG",
    "/SAM_0248.JPG",
    "/images/SAM_0248.JPG",
  ],

  marketplaceProduce: [
    "/SAM_0248.JPG",
    "/images/SAM_0248.JPG",
    "/SAM_0229.JPG",
    "/images/SAM_0229.JPG",
    "/SAM_0225.JPG",
    "/images/SAM_0225.JPG",
    "/SAM_0226.JPG",
    "/images/SAM_0226.JPG",
  ],

  // GROWER — field / rows / production area
  grower: [
    "/SAM_0238.JPG",
    "/images/SAM_0238.JPG",
    "/SAM_0239.JPG",
    "/images/SAM_0239.JPG",
    "/GrowArea.jpg",
    "/images/GrowArea.jpg",
  ],

  // PRODUCER — value-added / products / table-ready goods
  producer: [
    "/SAM_0226.JPG",
    "/images/SAM_0226.JPG",
    "/SAM_0248.JPG",
    "/images/SAM_0248.JPG",
    "/SAM_0229.JPG",
    "/images/SAM_0229.JPG",
  ],

  // YOUTH — PEOPLE FIRST: youth / students / visible human activity
  youth: [
    "/SAM_0223.JPG",
    "/images/SAM_0223.JPG",
    "/SAM_0222.JPG",
    "/images/SAM_0222.JPG",
    "/SAM_0224.JPG",
    "/images/SAM_0224.JPG",
    "/SAM_0230.JPG",
    "/images/SAM_0230.JPG",
  ],

  // PARTNER — collaboration / meetings / site visit / community presence
  partner: [
    "/SAM_0257.JPG",
    "/images/SAM_0257.JPG",
    "/SAM_0255.JPG",
    "/images/SAM_0255.JPG",
    "/SAM_0223.JPG",
    "/images/SAM_0223.JPG",
    "/SAM_0249.JPG",
    "/images/SAM_0249.JPG",
  ],

  production: [
    "/SAM_0226.JPG",
    "/images/SAM_0226.JPG",
  ],
  buyLocal: [
    "/SAM_0229.JPG",
    "/images/SAM_0229.JPG",
  ],
  events: [
    "/SAM_0255.JPG",
    "/images/SAM_0255.JPG",
  ],
  community: [
    "/SAM_0257.JPG",
    "/images/SAM_0257.JPG",
  ],
  footer: [
    "/SAM_0249.JPG",
    "/images/SAM_0249.JPG",
  ],
};

const translations: Record<LangKey, { name: string; welcome: string; tour: string; enter: string; next: string; back: string; purpose: string; summary: string }> = {
  en: { name: "English", welcome: "Welcome to the Bronson Family Farm Ecosystem", tour: "Begin Guided Tour", enter: "Enter Pathway", next: "Next", back: "Back", purpose: "Purpose", summary: "Summary" },
  es: { name: "Español", welcome: "Bienvenido al ecosistema de Bronson Family Farm", tour: "Comenzar recorrido", enter: "Entrar", next: "Siguiente", back: "Atrás", purpose: "Propósito", summary: "Resumen" },
  fr: { name: "Français", welcome: "Bienvenue dans l’écosystème de Bronson Family Farm", tour: "Commencer la visite", enter: "Entrer", next: "Suivant", back: "Retour", purpose: "Objectif", summary: "Résumé" },
  tl: { name: "Tagalog", welcome: "Maligayang pagdating sa ecosystem ng Bronson Family Farm", tour: "Simulan ang paglilibot", enter: "Pumasok", next: "Susunod", back: "Bumalik", purpose: "Layunin", summary: "Buod" },
  it: { name: "Italiano", welcome: "Benvenuti nell’ecosistema Bronson Family Farm", tour: "Inizia il tour", enter: "Entra", next: "Avanti", back: "Indietro", purpose: "Scopo", summary: "Riepilogo" },
  he: { name: "Hebrew", welcome: "ברוכים הבאים למערכת של Bronson Family Farm", tour: "התחל סיור", enter: "כניסה", next: "הבא", back: "חזרה", purpose: "מטרה", summary: "סיכום" },
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
      { label: "Sound Bite", title: "A living entrance", text: "You are entering land being reimagined for food, family, and future opportunity." },
      { label: "Intro", title: "Where the story begins", text: "The guest sees open land, growing areas, woods, and event space as one connected place for food, learning, and gathering." },
      { label: "Knowledge", title: "Why this matters", text: "Local food systems become stronger when people can see where food begins, meet growers, and understand how the land supports health and opportunity." },
      { label: "Summary", title: "The guest outcome", text: "The guest leaves knowing the farm is a destination with meaning, not a disconnected event site." },
      { label: "Next", title: "Move deeper", text: "Guests can become customers, volunteers, partners, or supporters after understanding the purpose." },
    ],
    actions: ["View farm story", "Invitation policy", "Meet the ecosystem"],
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
      { label: "Sound Bite", title: "Food with a source", text: "Every purchase supports healthier households and local growers." },
      { label: "Intro", title: "Fresh choices", text: "The pathway highlights produce, Bubble Babies™ seedlings, seasonal availability, pickup, and marketplace access." },
      { label: "Knowledge", title: "Nutrition made visible", text: "Simple education connects natural foods, cooking, gardening, diabetes awareness, and better household choices." },
      { label: "Summary", title: "The customer outcome", text: "Customers understand what to buy, why it matters, and how to return for fresh food again." },
      { label: "Next", title: "Enter the marketplace", text: "The customer moves directly into purchasing and pickup options." },
    ],
    actions: ["Browse seasonal food", "Enter store", "View pickup options"],
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
      { label: "Sound Bite", title: "Where local effort becomes purchasing power", text: "The marketplace is where community interest becomes revenue, repeat access, and support for local producers." },
      { label: "Intro", title: "Digital store plus real food", text: "The GrownBy storefront connects modern purchasing with the real farm products, seedlings, and seasonal produce people can pick up and use." },
      { label: "Knowledge", title: "Access and accountability", text: "The marketplace can support SNAP-aware purchasing, preorders, pickup windows, order history, and grower participation." },
      { label: "Summary", title: "The marketplace outcome", text: "Purchases support the ecosystem while making local food easier to find and easier to buy." },
      { label: "Next", title: "Enter Store", text: "The next action opens the public shopping experience or event order flow." },
    ],
    actions: ["Enter Store", "Preorder Pickup", "Support Growers"],
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
      { label: "Sound Bite", title: "Small growers no longer work alone", text: "Growers are not separate from the ecosystem. They are one of the engines that make it real." },
      { label: "Intro", title: "Register first", text: "Growers enter through the portal so the ecosystem can understand their crops, capacity, schedule, and marketplace readiness." },
      { label: "Knowledge", title: "Shared infrastructure", text: "Growers can connect to crop planning, education, market days, food safety knowledge, and coordinated sales opportunities." },
      { label: "Summary", title: "The grower outcome", text: "Growers gain a clearer path from planting to selling while contributing to regional food access." },
      { label: "Next", title: "Join marketplace benefits", text: "Registered growers can move toward marketplace participation and community distribution channels." },
    ],
    actions: ["Register grower", "Crop planning", "Weather"],
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
      { label: "Sound Bite", title: "Real work that matters", text: "Young people learn responsibility through real work connected to land, events, food, technology, and community." },
      { label: "Intro", title: "Role-based learning", text: "Youth can connect to growing, culinary, arts, business, public safety, logistics, media, and technology pathways." },
      { label: "Knowledge", title: "Supervisor layer", text: "Supervisors can track attendance, tasks, safety, reflections, and Life Skills Progression growth." },
      { label: "Summary", title: "The youth outcome", text: "Youth understand work, responsibility, teamwork, and future options through a real place-based system." },
      { label: "Next", title: "Begin assignment", text: "The youth pathway moves into task check-in, supervisor review, and progress tracking." },
    ],
    actions: ["Youth check-in", "Supervisor view", "Skills path"],
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
      { label: "Sound Bite", title: "Resources become results when aligned", text: "Each partner adds capacity to the ecosystem instead of standing alone as a logo." },
      { label: "Intro", title: "Known collaborators", text: "Farm & Family Alliance, Inc., Parker Farms, Central State University, Gates Drone Services, Home Depot, Petitti’s Garden Center, Elliott’s Garden Center, and the Youngstown Area Jewish Foundation each represent a form of capacity." },
      { label: "Knowledge", title: "Resource alignment", text: "Partnership can support education, site planning, materials, market activity, storytelling, health, youth development, and regional food access." },
      { label: "Summary", title: "The partner outcome", text: "Partners understand where their support fits and how collaboration creates a stronger community result." },
      { label: "Next", title: "Choose a contribution lane", text: "Partners can move toward sponsorship, demonstration, volunteer support, technical assistance, or shared programming." },
    ],
    actions: ["Schedule Visit", "Partnerships", "Contact"],
  },
];

function normalizePath(path: string) {
  return path.replace(/ /g, "%20");
}

function expandImageCandidates(candidates: string[]) {
  const prefixes = ["", "/images/", "images/", "./images/", "/public/images/", "public/images/", "./public/images/"];
  const filenames = candidates.map((item) => item.split("/").pop() || item);
  const expanded = new Set<string>();
  candidates.forEach((item) => expanded.add(item));
  filenames.forEach((filename) => prefixes.forEach((prefix) => expanded.add(`${prefix}${filename}`)));
  return Array.from(expanded);
}

function SmartImage({ candidates, alt, className }: { candidates: string[]; alt: string; className?: string }) {
  const expandedCandidates = useMemo(() => expandImageCandidates(candidates), [candidates]);
  const [index, setIndex] = useState(0);
  const src = normalizePath(expandedCandidates[index] || "");

  if (!expandedCandidates.length || index >= expandedCandidates.length) {
    return <CinematicFallback alt={alt} className={className} />;
  }

  return <img className={className} src={src} alt={alt} onError={() => setIndex((i) => i + 1)} />;
}

function CinematicFallback({ alt, className }: { alt: string; className?: string }) {
  return (
    <div className={`cinematicFallback ${className || ""}`} aria-label={alt}>
      <div className="skyGlow" />
      <div className="sceneLayer sceneBack" />
      <div className="sceneLayer sceneMid" />
      <div className="fallbackBadge"><strong>{alt}</strong><small>Bronson Family Farm Ecosystem</small></div>
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

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
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

  const nextStep = () => setStep((current) => (current + 1) % active.steps.length);
  const previousStep = () => setStep((current) => (current - 1 + active.steps.length) % active.steps.length);
  const narration = `${active.title}. ${activeStep.label}. ${activeStep.title}. ${activeStep.text}`;

  const handleAction = (action: string) => {
    const lower = action.toLowerCase();
    if (lower.includes("store") || lower.includes("preorder") || lower.includes("seasonal")) return openUrl(STORE_URL);
    if (lower.includes("weather")) return openUrl("https://www.accuweather.com/en/us/youngstown/44503/weather-forecast/330121");
    if (lower.includes("crop")) return openUrl("https://www.almanac.com/gardening/planting-calendar");
    if (lower.includes("contact")) return openUrl(`mailto:${CONTACT_EMAIL}`);
    if (lower.includes("invitation")) return alert("Bronson Family Farm is a private working farm and developing ecosystem site. Access is by invitation, scheduled appointment, or approved event registration only. Unauthorized public entry is not permitted.");
    return speak(`${action}. ${active.summary}`);
  };

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
            <button key={p.key} onClick={() => selectPathway(p.key)} className={activeKey === p.key ? "navActive" : ""}>
              {p.title.replace(" Pathway", "")}
            </button>
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
              <p>Private working farm. Access by invitation, scheduled appointment, or approved event registration only.</p>
              <p className="heroSmall">Food, land, youth workforce, marketplace access, growers, value-added producers, partners, and community learning in one connected place.</p>
              <div className="startHereCard">
                <div className="startLabel">Start here</div>
                <h2>Choose the easiest way to experience the demo</h2>
                <p>First-time visitors should begin with the guided tour. Returning visitors can go directly to the marketplace or choose a role.</p>
                <div className="heroActions">
                  <button className="primaryBtn" onClick={() => setStarted(true)}>Start Guided Tour</button>
                  <button className="secondaryBtn" onClick={() => selectPathway("marketplace")}>Go to Marketplace</button>
                  <button className="secondaryBtn" onClick={() => openUrl(WEBSITE_URL)}>Main Website</button>
                </div>
              </div>

              <div className="quickRoleGrid" aria-label="Choose your role">
                <button onClick={() => selectPathway("guest")}><strong>I’m visiting</strong><span>See the land and purpose</span></button>
                <button onClick={() => selectPathway("customer")}><strong>I want food</strong><span>Find produce and seedlings</span></button>
                <button onClick={() => selectPathway("grower")}><strong>I’m a grower</strong><span>Explore market participation</span></button>
                <button onClick={() => selectPathway("partner")}><strong>I’m a partner</strong><span>See collaboration lanes</span></button>
              </div>
            </div>
          </section>
        ) : (
          <section className="experienceGrid" style={{ ["--accent" as string]: active.accent }}>
            <div className="orientationBanner">
              <strong>You are in the guided demo.</strong>
              <span>Use the left pathway menu, press Next to move through the story, or choose Marketplace when you want to see how interest becomes purchasing power.</span>
            </div>
            <aside className="pathwayRail">
              <div className="railTitle">Demo Pathways</div>
              {pathways.map((p) => (
                <button key={p.key} className={`railItem ${activeKey === p.key ? "railActive" : ""}`} onClick={() => selectPathway(p.key)}>
                  <span>{p.title}</span>
                  <small>{p.eyebrow}</small>
                </button>
              ))}
            </aside>

            {activeKey === "marketplace" ? (
              <MarketplacePanel selectPathway={selectPathway} />
            ) : (
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
                    {active.actions.map((action) => <button key={action} onClick={() => handleAction(action)}>{action}</button>)}
                  </div>
                </div>

                <SummaryCard active={active} label={t.summary} />
              </section>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

function MarketplacePanel({ selectPathway }: { selectPathway: (key: RoleKey) => void }) {
  return (
    <section className="marketplacePanel">
      <div className="marketHeroGrid">
        <div className="marketVisualCard">
          <SmartImage candidates={imageBank.marketplace} alt="Marketplace digital storefront" className="marketImage" />
          <div className="marketOverlay">
            <div className="eyebrow">Digital Storefront</div>
            <h2>Enter Store</h2>
            <p>Shop Bronson Family Farm products online through the connected marketplace.</p>
            <button className="primaryBtn" onClick={() => openUrl(STORE_URL)}>Open GrownBy Store</button>
          </div>
        </div>

        <div className="marketVisualCard">
          <SmartImage candidates={imageBank.marketplaceProduce} alt="Fresh produce and farm products" className="marketImage" />
          <div className="marketOverlay">
            <div className="eyebrow">Fresh From The Farm</div>
            <h2>Preorder Pickup</h2>
            <p>Seasonal produce, Bubble Babies™, seedlings, and local grower offerings connected to real pickup and purchasing power.</p>
            <button className="primaryBtn" onClick={() => openUrl(STORE_URL)}>View Products</button>
          </div>
        </div>
      </div>

      <div className="marketMeaning">
        <div className="eyebrow">Purchasing Power · Sustainability · Access</div>
        <h2>Where Local Effort Becomes Purchasing Power</h2>
        <p>The marketplace is not only a store. It is the economic engine that connects customers, growers, value-added producers, fresh food access, and the long-term sustainability of the ecosystem.</p>
      </div>

      <div className="marketGrid">
        <article className="marketCard">
          <h3>Support Growers</h3>
          <p>Registered growers gain visibility, learning, and market participation inside a stronger regional food ecosystem.</p>
          <button onClick={() => selectPathway("grower")}>Grower Opportunities</button>
        </article>
        <article className="marketCard">
          <h3>Healthy Access</h3>
          <p>Fresh produce, seedlings, and nutrition-forward choices help households make repeat healthy decisions.</p>
          <button onClick={() => selectPathway("customer")}>Customer Pathway</button>
        </article>
        <article className="marketCard">
          <h3>Community Sustainability</h3>
          <p>Revenue supports farm operations, youth pathways, events, growers, and future community growth.</p>
          <button onClick={() => selectPathway("partner")}>Partner Pathway</button>
        </article>
      </div>

      <div className="buttonRow marketButtons">
        <button className="primaryBtn" onClick={() => openUrl(STORE_URL)}>Enter Store</button>
        <button className="secondaryBtn dark" onClick={() => openUrl(STORE_URL)}>Preorder Pickup</button>
        <button className="secondaryBtn dark" onClick={() => alert("SNAP-aware access is part of the marketplace pathway where eligible and available through connected purchasing options.")}>Learn SNAP Access</button>
        <button className="secondaryBtn dark" onClick={() => speak("The marketplace is where local effort becomes purchasing power. It connects the farm, growers, products, customers, and sustainability.")}>Play Marketplace Voice</button>
      </div>
    </section>
  );
}

function SummaryCard({ active, label }: { active: Pathway; label: string }) {
  return (
    <div className="summaryCard">
      <div className="summaryTitle">{label}</div>
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
  );
}

const css = `
:root { --forest: #17251c; --forest2: #223629; --cream: #f6efe0; --paper: rgba(255, 250, 239, 0.94); --ink: #1f261f; --muted: #687060; --gold: #d8b56d; --line: rgba(31, 38, 31, 0.14); }
* { box-sizing: border-box; }
body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: radial-gradient(circle at top left, #344b35 0, #17251c 46%, #0d1510 100%); color: var(--ink); }
button, select { font: inherit; }
button { cursor: pointer; }
.appShell { min-height: 100vh; }
.topbar { position: sticky; top: 0; z-index: 20; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 14px 22px; color: #fff8e8; background: rgba(13, 21, 16, 0.86); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(255,255,255,0.12); }
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
.hero p { font-size: clamp(1.05rem, 2vw, 1.45rem); line-height: 1.5; max-width: 800px; color: rgba(255,248,232,.9); }
.heroSmall { font-size: 1.05rem !important; color: rgba(255,248,232,.78) !important; }
.heroActions, .buttonRow { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px; }
.startHereCard { margin-top: 28px; max-width: 760px; border-radius: 28px; padding: 24px; background: rgba(13,21,16,.58); border: 1px solid rgba(255,255,255,.18); backdrop-filter: blur(12px); box-shadow: 0 22px 50px rgba(0,0,0,.28); }
.startHereCard h2 { color: #fff8e8; font-size: clamp(1.55rem, 3vw, 2.6rem); margin: 8px 0 10px; letter-spacing: -.035em; }
.startHereCard p { font-size: 1rem; margin: 0; color: rgba(255,248,232,.82); }
.startLabel { display: inline-flex; align-items: center; border-radius: 999px; padding: 6px 10px; background: rgba(216,181,109,.24); border: 1px solid rgba(216,181,109,.42); color: #fff8e8; font-weight: 900; text-transform: uppercase; letter-spacing: .12em; font-size: .72rem; }
.quickRoleGrid { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; max-width: 980px; margin-top: 18px; }
.quickRoleGrid button { min-height: 86px; text-align: left; border: 1px solid rgba(255,255,255,.16); border-radius: 20px; padding: 14px; background: rgba(255,255,255,.10); color: #fff8e8; backdrop-filter: blur(10px); }
.quickRoleGrid strong { display: block; font-size: 1rem; margin-bottom: 5px; }
.quickRoleGrid span { display: block; font-size: .84rem; color: rgba(255,248,232,.72); line-height: 1.25; }
.orientationBanner { grid-column: 1 / -1; display: flex; align-items: center; gap: 12px; color: #fff8e8; background: rgba(13,21,16,.66); border: 1px solid rgba(255,255,255,.14); border-radius: 22px; padding: 14px 18px; }
.orientationBanner span { color: rgba(255,248,232,.78); line-height: 1.35; }
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
.mediaCard, .contentCard, .summaryCard, .marketplacePanel { border-radius: 32px; overflow: hidden; background: var(--paper); border: 1px solid rgba(255,255,255,.22); box-shadow: 0 26px 60px rgba(0,0,0,.25); }
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
.marketplacePanel { padding: 24px; }
.marketHeroGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.marketVisualCard { position: relative; min-height: 480px; overflow: hidden; border-radius: 28px; background: #17251c; box-shadow: 0 20px 44px rgba(0,0,0,.22); }
.marketImage { width: 100%; height: 100%; min-height: 480px; object-fit: cover; display: block; }
.marketOverlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; color: #fff8e8; background: linear-gradient(to top, rgba(0,0,0,.78), rgba(0,0,0,.12)); }
.marketOverlay h2 { color: #fff8e8; margin: 10px 0; font-size: clamp(2rem, 3vw, 3.2rem); }
.marketOverlay p { max-width: 520px; line-height: 1.5; color: rgba(255,248,232,.9); }
.marketMeaning { text-align: center; padding: 36px 18px 22px; }
.marketMeaning h2 { max-width: 900px; margin-left: auto; margin-right: auto; }
.marketMeaning p { max-width: 920px; margin: 0 auto; font-size: 1.12rem; line-height: 1.65; color: #384337; }
.marketGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 22px; }
.marketCard { padding: 24px; border-radius: 24px; background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(246,239,224,.94)); border: 1px solid var(--line); }
.marketCard h3 { font-size: 1.45rem; }
.marketCard p { line-height: 1.55; color: #485143; }
.marketCard button { margin-top: 12px; border: 0; border-radius: 999px; padding: 11px 14px; background: #d8b56d; font-weight: 800; }
.marketButtons { justify-content: center; padding: 12px 0 6px; }
.cinematicFallback { position: relative; overflow: hidden; min-height: 100%; width: 100%; display: block; background: linear-gradient(180deg, #21382a 0%, #405734 48%, #6f7f42 100%); }
.cinematicFallback.heroImage { position: absolute; inset: 0; height: 100%; }
.skyGlow { position: absolute; inset: 0; background: radial-gradient(circle at 74% 16%, rgba(246,212,122,.75) 0 5%, rgba(246,212,122,.25) 6% 16%, transparent 17%); }
.sceneLayer { position: absolute; left: -8%; right: -8%; }
.sceneBack { top: 24%; height: 24%; opacity: .45; background: radial-gradient(circle at 8% 80%, #132418 0 3%, transparent 3.2%), radial-gradient(circle at 18% 58%, #132418 0 5%, transparent 5.2%), radial-gradient(circle at 31% 74%, #132418 0 4.8%, transparent 5%), radial-gradient(circle at 44% 62%, #132418 0 6%, transparent 6.2%), radial-gradient(circle at 60% 72%, #132418 0 4.5%, transparent 4.7%), radial-gradient(circle at 76% 60%, #132418 0 5.5%, transparent 5.7%), radial-gradient(circle at 91% 74%, #132418 0 5%, transparent 5.2%); }
.sceneMid { bottom: 0; height: 55%; background: linear-gradient(165deg, rgba(255,255,255,.10), transparent 30%), repeating-linear-gradient(94deg, rgba(255,248,232,.16) 0 8px, transparent 8px 46px); transform: skewY(-4deg); transform-origin: bottom; }
.fallbackBadge { position: absolute; left: 22px; right: 22px; bottom: 22px; z-index: 4; display: grid; gap: 4px; width: fit-content; max-width: min(560px, calc(100% - 44px)); border-radius: 22px; padding: 14px 16px; color: #fff8e8; background: rgba(13,21,16,.66); border: 1px solid rgba(255,255,255,.16); backdrop-filter: blur(10px); box-shadow: 0 18px 40px rgba(0,0,0,.28); }
.fallbackBadge strong { font-size: 1rem; line-height: 1.15; }
.fallbackBadge small { color: rgba(255,248,232,.72); font-weight: 700; }
@media (max-width: 1060px) { .quickRoleGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .orientationBanner { align-items: flex-start; flex-direction: column; } .topbar { align-items: flex-start; flex-direction: column; } .experienceGrid { grid-template-columns: 1fr; } .pathwayRail { position: relative; top: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); } .railTitle { grid-column: 1 / -1; } .storyPanel, .marketHeroGrid, .marketGrid { grid-template-columns: 1fr; } .mediaCard, .panelImage, .marketVisualCard, .marketImage { min-height: 420px; } }
@media (max-width: 720px) { .quickRoleGrid { grid-template-columns: 1fr; } .topNav { justify-content: flex-start; } .brandLockup { min-width: 0; } .heroContent { padding: 32px 20px; } .experienceGrid { padding: 12px; } .pathwayRail { grid-template-columns: 1fr; border-radius: 20px; } .mediaCard, .contentCard, .summaryCard, .marketplacePanel { border-radius: 22px; } .actionGrid { grid-template-columns: 1fr; } }
`;
