import React, { useEffect, useMemo, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "it" | "patwa" | "he";
type PageKey =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";
type LayerKey = "soundbite" | "intro" | "knowledge" | "purpose" | "next";

type LayerContent = {
  title: string;
  body: string;
  bullets?: string[];
};

type Pathway = {
  id: Exclude<PageKey, "home">;
  title: string;
  navTitle: string;
  heroKicker: string;
  summary: string;
  mission: string;
  outcome: string;
  accent: string;
  ring: string;
  button: string;
  layers: Record<LayerKey, LayerContent>;
};

const STORE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const WEATHER_URL =
  "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121";

const languages: { key: LanguageKey; label: string; voice: string; rtl?: boolean }[] = [
  { key: "en", label: "English", voice: "English" },
  { key: "es", label: "Español", voice: "Spanish" },
  { key: "tl", label: "Tagalog", voice: "Tagalog" },
  { key: "it", label: "Italiano", voice: "Italian" },
  { key: "patwa", label: "Patwa", voice: "Jamaican Patois" },
  { key: "he", label: "עברית", voice: "Hebrew", rtl: true },
];

const copy = {
  en: {
    top: "Mission-Driven Ecosystem Demo",
    title: "Bronson Family Farm",
    subtitle:
      "An ecosystem for food, learning, wellness, workforce, and community return.",
    paragraph:
      "A regenerative ecosystem connecting land, food access, marketplace activity, growers, youth workforce development, education, and partnership in Youngstown and the Mahoning Valley.",
    missionLabel: "Mission",
    missionText:
      "Restore land, grow healthy food, create opportunity, and build community systems for the Mahoning Valley Area.",
    choose: "Choose a pathway",
    enterMarket: "Enter Marketplace",
    guidedTour: "Begin Guided Tour",
    weather: "Weather",
    language: "Language",
    voice: "Guided Voice",
    voiceOn: "On",
    voiceOff: "Off",
    progress: "Pathway Progress",
    pathway: "Pathway",
    mission: "Mission",
    outcome: "Outcome",
    open: "Open Pathway",
    back: "Back",
    allPathways: "All Pathways",
    layerTitle: "Journey Layers",
    marketplaceBridge: "Open GrownBy Store",
    liveWeather: "Open Weather",
    reason:
      "Built so people understand the mission, receive value, and have a reason to return again.",
    stats1: "acres of vision and possibility",
    stats1Body:
      "A destination for food access, agritourism, education, workforce pathways, and community return.",
    stats2: "mission pathways",
    stats2Body: "Every pathway is built to achieve a specific outcome.",
    stats3: "Return Again",
    stats3Body:
      "Built so visitors, customers, growers, youth, and partners always have a reason to come back.",
  },
  es: {
    top: "Demostración del Ecosistema Impulsado por la Misión",
    title: "Bronson Family Farm",
    subtitle:
      "Un ecosistema para alimentos, aprendizaje, bienestar, trabajo y retorno comunitario.",
    paragraph:
      "Un ecosistema regenerativo que conecta tierra, acceso a alimentos, actividad de mercado, productores, desarrollo laboral juvenil, educación y alianzas en Youngstown y el Valle de Mahoning.",
    missionLabel: "Misión",
    missionText:
      "Restaurar la tierra, cultivar alimentos saludables, crear oportunidades y construir sistemas comunitarios para el área del Valle de Mahoning.",
    choose: "Elija una ruta",
    enterMarket: "Entrar al Mercado",
    guidedTour: "Comenzar Visita Guiada",
    weather: "Clima",
    language: "Idioma",
    voice: "Voz Guiada",
    voiceOn: "Sí",
    voiceOff: "No",
    progress: "Progreso de la Ruta",
    pathway: "Ruta",
    mission: "Misión",
    outcome: "Resultado",
    open: "Abrir Ruta",
    back: "Atrás",
    allPathways: "Todas las Rutas",
    layerTitle: "Capas del Viaje",
    marketplaceBridge: "Abrir Tienda GrownBy",
    liveWeather: "Abrir Clima",
    reason:
      "Construido para que las personas entiendan la misión, reciban valor y tengan una razón para regresar.",
    stats1: "acres de visión y posibilidad",
    stats1Body:
      "Un destino para acceso a alimentos, agroturismo, educación, rutas laborales y retorno comunitario.",
    stats2: "rutas de misión",
    stats2Body: "Cada ruta está construida para lograr un resultado específico.",
    stats3: "Regresar",
    stats3Body:
      "Construido para que visitantes, clientes, productores, jóvenes y socios siempre tengan una razón para volver.",
  },
  tl: {
    top: "Mission-Driven Ecosystem Demo",
    title: "Bronson Family Farm",
    subtitle:
      "Isang ecosystem para sa pagkain, pagkatuto, wellness, trabaho, at pagbabalik sa komunidad.",
    paragraph:
      "Isang regenerative ecosystem na nag-uugnay sa lupa, food access, marketplace activity, growers, youth workforce development, education, at partnership sa Youngstown at Mahoning Valley.",
    missionLabel: "Misyon",
    missionText:
      "Ibalik ang sigla ng lupa, magtanim ng masustansyang pagkain, lumikha ng oportunidad, at bumuo ng mga sistemang pangkomunidad para sa Mahoning Valley Area.",
    choose: "Pumili ng landas",
    enterMarket: "Pumasok sa Marketplace",
    guidedTour: "Simulan ang Guided Tour",
    weather: "Panahon",
    language: "Wika",
    voice: "Gabay na Boses",
    voiceOn: "Bukas",
    voiceOff: "Patay",
    progress: "Pag-unlad ng Landas",
    pathway: "Landas",
    mission: "Misyon",
    outcome: "Kinalabasan",
    open: "Buksan ang Landas",
    back: "Balik",
    allPathways: "Lahat ng Landas",
    layerTitle: "Mga Layer ng Journey",
    marketplaceBridge: "Buksan ang GrownBy Store",
    liveWeather: "Buksan ang Panahon",
    reason:
      "Ginawa upang maunawaan ng mga tao ang misyon, makatanggap ng halaga, at magkaroon ng dahilan para bumalik.",
    stats1: "acres ng pananaw at posibilidad",
    stats1Body:
      "Isang destinasyon para sa food access, agritourism, education, workforce pathways, at pagbabalik sa komunidad.",
    stats2: "mga mission pathway",
    stats2Body: "Bawat pathway ay ginawa para sa tiyak na resulta.",
    stats3: "Bumalik Muli",
    stats3Body:
      "Ginawa upang ang bisita, customer, grower, youth, at partner ay laging may dahilan para bumalik.",
  },
  it: {
    top: "Demo Ecosistema Guidato dalla Missione",
    title: "Bronson Family Farm",
    subtitle:
      "Un ecosistema per cibo, apprendimento, benessere, lavoro e ritorno alla comunità.",
    paragraph:
      "Un ecosistema rigenerativo che collega terra, accesso al cibo, attività di mercato, coltivatori, sviluppo del lavoro giovanile, educazione e partnership a Youngstown e nella Mahoning Valley.",
    missionLabel: "Missione",
    missionText:
      "Ripristinare la terra, coltivare cibo sano, creare opportunità e costruire sistemi comunitari per l'area della Mahoning Valley.",
    choose: "Scegli un percorso",
    enterMarket: "Entra nel Marketplace",
    guidedTour: "Inizia il Tour Guidato",
    weather: "Meteo",
    language: "Lingua",
    voice: "Voce Guidata",
    voiceOn: "On",
    voiceOff: "Off",
    progress: "Progresso del Percorso",
    pathway: "Percorso",
    mission: "Missione",
    outcome: "Risultato",
    open: "Apri Percorso",
    back: "Indietro",
    allPathways: "Tutti i Percorsi",
    layerTitle: "Livelli del Viaggio",
    marketplaceBridge: "Apri Negozio GrownBy",
    liveWeather: "Apri Meteo",
    reason:
      "Costruito perché le persone comprendano la missione, ricevano valore e abbiano un motivo per tornare.",
    stats1: "acri di visione e possibilità",
    stats1Body:
      "Una destinazione per accesso al cibo, agriturismo, educazione, percorsi di lavoro e ritorno della comunità.",
    stats2: "percorsi della missione",
    stats2Body: "Ogni percorso è costruito per raggiungere un risultato specifico.",
    stats3: "Tornare Ancora",
    stats3Body:
      "Costruito affinché visitatori, clienti, coltivatori, giovani e partner abbiano sempre un motivo per tornare.",
  },
  patwa: {
    top: "Mission-Driven Ecosystem Demo",
    title: "Bronson Family Farm",
    subtitle:
      "A one ecosystem fi food, learning, wellness, work, an community return.",
    paragraph:
      "A regenerative ecosystem weh connect land, food access, marketplace activity, growers, youth workforce development, education, an partnership inna Youngstown an Mahoning Valley.",
    missionLabel: "Mission",
    missionText:
      "Restore di land, grow healthy food, create opportunity, an build community systems fi di Mahoning Valley Area.",
    choose: "Choose a pathway",
    enterMarket: "Enter Marketplace",
    guidedTour: "Begin Guided Tour",
    weather: "Weather",
    language: "Language",
    voice: "Guided Voice",
    voiceOn: "Pon",
    voiceOff: "Off",
    progress: "Pathway Progress",
    pathway: "Pathway",
    mission: "Mission",
    outcome: "Outcome",
    open: "Open Pathway",
    back: "Back",
    allPathways: "All Pathway",
    layerTitle: "Journey Layers",
    marketplaceBridge: "Open GrownBy Store",
    liveWeather: "Open Weather",
    reason:
      "Build so people understand di mission, get value, an have a reason fi come back again.",
    stats1: "acres a vision an possibility",
    stats1Body:
      "A destination fi food access, agritourism, education, workforce pathways, an community return.",
    stats2: "mission pathways",
    stats2Body: "Every pathway build fi reach a specific outcome.",
    stats3: "Come Back Again",
    stats3Body:
      "Build so visitors, customers, growers, youth, an partners always have reason fi return.",
  },
  he: {
    top: "הדגמת מערכת אקולוגית מונחית משימה",
    title: "Bronson Family Farm",
    subtitle:
      "מערכת אקולוגית למזון, למידה, בריאות, תעסוקה וחזרה לקהילה.",
    paragraph:
      "מערכת אקולוגית רגנרטיבית המחברת אדמה, גישה למזון, פעילות שוק, מגדלים, פיתוח כוח עבודה לנוער, חינוך ושותפויות ביאנגסטאון ובעמק מהונינג.",
    missionLabel: "משימה",
    missionText:
      "לשקם את האדמה, לגדל מזון בריא, ליצור הזדמנויות ולבנות מערכות קהילתיות עבור אזור עמק מהונינג.",
    choose: "בחרו מסלול",
    enterMarket: "כניסה לשוק",
    guidedTour: "התחלת סיור מודרך",
    weather: "מזג אוויר",
    language: "שפה",
    voice: "קול מודרך",
    voiceOn: "פעיל",
    voiceOff: "כבוי",
    progress: "התקדמות המסלול",
    pathway: "מסלול",
    mission: "משימה",
    outcome: "תוצאה",
    open: "פתחו מסלול",
    back: "חזרה",
    allPathways: "כל המסלולים",
    layerTitle: "שכבות המסע",
    marketplaceBridge: "פתחו את חנות GrownBy",
    liveWeather: "פתחו מזג אוויר",
    reason:
      "נבנה כדי שאנשים יבינו את המשימה, יקבלו ערך, ויהיה להם רצון לחזור שוב.",
    stats1: "אקרים של חזון ואפשרות",
    stats1Body:
      "יעד לגישה למזון, אגריטוריזם, חינוך, מסלולי עבודה וחזרה לקהילה.",
    stats2: "מסלולי משימה",
    stats2Body: "כל מסלול נבנה כדי להשיג תוצאה מסוימת.",
    stats3: "לחזור שוב",
    stats3Body:
      "נבנה כך שלמבקרים, לקוחות, מגדלים, נוער ושותפים תמיד תהיה סיבה לחזור.",
  },
} as const;

const pathways: Pathway[] = [
  {
    id: "guest",
    title: "Guest",
    navTitle: "Guest",
    heroKicker: "Vision Pathway",
    summary: "Understand the vision, story, and purpose.",
    mission:
      "Guests leave understanding why this land matters and why the work should continue.",
    outcome:
      "Visitors connect emotionally to the story, understand the mission, and see why Bronson Family Farm belongs in the future of the region.",
    accent: "from-emerald-600/90 via-green-600/85 to-teal-600/85",
    ring: "ring-emerald-300/20",
    button: "bg-emerald-300 text-[#0b2a1c]",
    layers: {
      soundbite: {
        title: "You are entering more than a farm.",
        body:
          "This is a regenerative ecosystem where land, legacy, food, learning, and community purpose come together.",
      },
      intro: {
        title: "What guests feel first",
        body:
          "Guests are welcomed into a place of restoration, hope, and meaning in Youngstown and the Mahoning Valley.",
        bullets: [
          "A place-based story with purpose",
          "A living vision for land and people",
          "A destination worth returning to",
        ],
      },
      knowledge: {
        title: "What guests learn",
        body:
          "Guests learn how Bronson Family Farm connects agriculture, family legacy, health, economic opportunity, and community renewal.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "The guest pathway turns curiosity into understanding and helps people care about what they are seeing.",
      },
      next: {
        title: "What comes next",
        body:
          "Guests can continue into the marketplace, events, learning, partnerships, and future engagement with the ecosystem.",
      },
    },
  },
  {
    id: "customer",
    title: "Customer",
    navTitle: "Customer",
    heroKicker: "Healthy Choice Pathway",
    summary: "Fresh food, nutrition, and repeat healthy choices.",
    mission:
      "Customers leave informed and connected to healthier food choices.",
    outcome:
      "Customers understand how fresh food supports wellness and why returning to the farm strengthens healthier habits over time.",
    accent: "from-lime-600/90 via-green-600/85 to-emerald-600/80",
    ring: "ring-lime-300/20",
    button: "bg-lime-300 text-[#1c2b0a]",
    layers: {
      soundbite: {
        title: "Food is not just a purchase.",
        body:
          "Fresh food is a daily decision connected to nutrition, family well-being, and healthier living.",
      },
      intro: {
        title: "What customers experience",
        body:
          "Customers see a clear path from fresh produce to better choices for themselves and their families.",
        bullets: [
          "Simple and welcoming food education",
          "A reason to buy with meaning",
          "A reason to return regularly",
        ],
      },
      knowledge: {
        title: "What customers learn",
        body:
          "Customers learn the value of fresh food, seasonal buying, local agriculture, and healthier patterns instead of overprocessed substitutes.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway connects food access with understanding so people make informed, repeat healthy choices.",
      },
      next: {
        title: "What comes next",
        body:
          "Customers can enter the marketplace, order through GrownBy, attend events, and build a healthier connection to Bronson Family Farm.",
      },
    },
  },
  {
    id: "marketplace",
    title: "Marketplace",
    navTitle: "Marketplace",
    heroKicker: "Marketplace Pathway",
    summary: "Convert interest into purchasing power.",
    mission:
      "Marketplace visitors support long-term sustainability.",
    outcome:
      "Visitors see how purchases help sustain the farm, strengthen food access, and move mission into practical action.",
    accent: "from-amber-500/95 via-orange-500/90 to-yellow-500/75",
    ring: "ring-amber-300/25",
    button: "bg-yellow-300 text-[#2b1d09]",
    layers: {
      soundbite: {
        title: "This is where mission becomes movement.",
        body:
          "The marketplace turns interest into support, revenue, and long-term sustainability for the ecosystem.",
      },
      intro: {
        title: "What the marketplace means",
        body:
          "This is not just a shop. It is the bridge between story, support, fresh food, and recurring participation.",
        bullets: [
          "A buying pathway with purpose",
          "A visible bridge to GrownBy",
          "A sustainability engine for the farm",
        ],
      },
      knowledge: {
        title: "What visitors learn",
        body:
          "Visitors understand how produce, seasonal offerings, ordering, and community support all strengthen the farm’s future.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "Mission alone does not sustain a farm. The marketplace converts belief into action and purchasing power.",
      },
      next: {
        title: "What comes next",
        body:
          "Visitors can move directly into the GrownBy store, explore products, purchase, and re-enter the wider ecosystem with confidence.",
      },
    },
  },
  {
    id: "grower",
    title: "Grower",
    navTitle: "Grower",
    heroKicker: "Grower Pathway",
    summary: "Connect producers to opportunity.",
    mission:
      "Growers discover participation, markets, and growth.",
    outcome:
      "Growers understand that this ecosystem is a place for collaboration, visibility, shared learning, and real opportunity.",
    accent: "from-cyan-600/90 via-teal-600/85 to-emerald-600/80",
    ring: "ring-cyan-300/20",
    button: "bg-cyan-300 text-[#07242a]",
    layers: {
      soundbite: {
        title: "Growers need more than land.",
        body:
          "They need structure, opportunity, connection, and a meaningful place within the ecosystem.",
      },
      intro: {
        title: "What growers experience",
        body:
          "Growers are welcomed into a pathway built around participation, market connection, and collective strength.",
        bullets: [
          "Connection to opportunity",
          "Visibility and participation",
          "A sense of belonging in the ecosystem",
        ],
      },
      knowledge: {
        title: "What growers learn",
        body:
          "Growers see how Bronson Family Farm can connect to education, regional participation, market flow, and long-term ecosystem development.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway reduces isolation and shows growers a practical reason to engage, contribute, and return.",
      },
      next: {
        title: "What comes next",
        body:
          "Growers can move toward events, collaboration, market participation, and a stronger role in the regional food system.",
      },
    },
  },
  {
    id: "youth",
    title: "Youth Workforce",
    navTitle: "Youth Workforce",
    heroKicker: "Youth Workforce Pathway",
    summary: "Build skills, responsibility, readiness.",
    mission:
      "Young people grow through real pathways and support.",
    outcome:
      "Young people and families see a real structure for skill-building, readiness, supervision, support, and future direction.",
    accent: "from-violet-600/90 via-fuchsia-600/85 to-purple-600/80",
    ring: "ring-violet-300/20",
    button: "bg-violet-300 text-[#1c1035]",
    layers: {
      soundbite: {
        title: "This pathway grows people, not just tasks.",
        body:
          "Youth workforce is about responsibility, confidence, support, experience, and future readiness.",
      },
      intro: {
        title: "What youth and families experience",
        body:
          "Young people encounter a hands-on environment supported by role clarity, supervision, structure, and encouragement.",
        bullets: [
          "Practical learning",
          "Supportive supervision",
          "A real pathway toward readiness",
        ],
      },
      knowledge: {
        title: "What they learn",
        body:
          "Participants learn work habits, teamwork, agriculture, responsibility, logistics, and personal growth within a meaningful setting.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway creates a bridge between exposure and future readiness, especially for youth who need meaningful opportunity and support.",
      },
      next: {
        title: "What comes next",
        body:
          "Participants move into deeper programming, guided roles, supervisor support, and continued personal and workforce development.",
      },
    },
  },
  {
    id: "partners",
    title: "Partners",
    navTitle: "Partners",
    heroKicker: "Partnership Pathway",
    summary: "Align resources for community benefit.",
    mission:
      "Partners understand where they fit and create impact.",
    outcome:
      "Partners see where their support fits and how collaboration can strengthen land restoration, food access, education, and community benefit.",
    accent: "from-sky-600/90 via-blue-600/85 to-indigo-600/80",
    ring: "ring-sky-300/20",
    button: "bg-sky-300 text-[#0b2035]",
    layers: {
      soundbite: {
        title: "Partnership here is visible and practical.",
        body:
          "Resources become visible outcomes for land, food, youth, learning, and community benefit.",
      },
      intro: {
        title: "What partners see",
        body:
          "Partners see a credible ecosystem where support can be aligned with clear purpose and real local value.",
        bullets: [
          "A practical collaboration platform",
          "Visible community-facing outcomes",
          "A long-term place-based opportunity",
        ],
      },
      knowledge: {
        title: "What partners learn",
        body:
          "Partners understand how their support can strengthen events, food systems, youth pathways, marketplace activity, and ecosystem growth.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway provides clarity so supporters and institutions can see exactly where their involvement makes sense.",
      },
      next: {
        title: "What comes next",
        body:
          "Partners can move into sponsorship, collaboration, planning conversations, programming support, and ecosystem-building decisions.",
      },
    },
  },
];

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function useSpeech(language: LanguageKey, enabled: boolean) {
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.getVoices();
  }, []);

  function speak(text: string) {
    if (!enabled || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    const matcherMap: Record<LanguageKey, string[]> = {
      en: ["en-US", "English"],
      es: ["es", "Spanish"],
      tl: ["tl", "fil", "Tagalog"],
      it: ["it", "Italian"],
      patwa: ["en-JM", "Jamaica", "English"],
      he: ["he", "Hebrew", "iw"],
    };

    const wanted = matcherMap[language];
    const match =
      voices.find((v) =>
        wanted.some(
          (m) =>
            v.lang?.toLowerCase().includes(m.toLowerCase()) ||
            v.name?.toLowerCase().includes(m.toLowerCase())
        )
      ) || voices.find((v) => v.lang?.startsWith(language));

    if (match) {
      utterance.voice = match;
      utterance.lang = match.lang;
    }

    utterance.rate = language === "patwa" ? 0.92 : 0.96;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  function stop() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  return { speak, stop };
}

function cardBase(accent: string) {
  return `rounded-[30px] border border-white/10 bg-gradient-to-br ${accent} p-[1px] shadow-[0_24px_80px_rgba(0,0,0,0.18)]`;
}

function GlassPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [guidedMode, setGuidedMode] = useState(false);
  const [layer, setLayer] = useState<LayerKey>("soundbite");

  const t = copy[language];
  const activePathway = pathways.find((p) => p.id === page);
  const langMeta = languages.find((l) => l.key === language);
  const dir = langMeta?.rtl ? "rtl" : "ltr";
  const { speak, stop } = useSpeech(language, voiceEnabled);

  useEffect(() => {
    if (page === "home") {
      if (guidedMode && voiceEnabled) {
        speak(`${t.title}. ${t.subtitle}. ${t.paragraph}`);
      }
      return;
    }

    if (activePathway && guidedMode && voiceEnabled) {
      const l = activePathway.layers[layer];
      speak(`${activePathway.title}. ${l.title}. ${l.body}`);
    }

    return () => stop();
  }, [page, layer, guidedMode, voiceEnabled, language]);

  const progress = useMemo(() => {
    const idx = layerOrder.indexOf(layer);
    return ((idx + 1) / layerOrder.length) * 100;
  }, [layer]);

  return (
    <div
      dir={dir}
      className="min-h-screen bg-[#f4f1ea] text-[#113128]"
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, rgba(19,120,78,0.10), transparent 28%), radial-gradient(circle at bottom right, rgba(201,157,55,0.12), transparent 26%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <GlassPanel className="overflow-hidden">
          <div className="bg-gradient-to-r from-[#06261c] via-[#0b4b37] to-[#0f6b49] px-6 py-7 text-white sm:px-8 lg:px-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <div className="text-[11px] uppercase tracking-[0.32em] text-green-200">
                  {t.top}
                </div>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {t.title}
                </h1>
                <p className="mt-4 max-w-4xl text-lg leading-8 text-white/82 sm:text-xl">
                  {t.subtitle}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[34rem]">
                <button
                  onClick={() => openExternal(WEATHER_URL)}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left transition hover:bg-white/20"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                    {t.weather}
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">
                    Youngstown
                  </div>
                </button>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                    {t.language}
                  </div>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as LanguageKey)}
                    className="mt-1 w-full bg-transparent text-sm font-medium text-white outline-none"
                  >
                    {languages.map((l) => (
                      <option key={l.key} value={l.key} className="bg-[#103126] text-white">
                        {l.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setVoiceEnabled((v) => !v)}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left transition hover:bg-white/20"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                    {t.voice}
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">
                    {voiceEnabled ? t.voiceOn : t.voiceOff}
                  </div>
                </button>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => setPage("home")}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  page === "home"
                    ? "bg-white text-[#0f402f]"
                    : "border border-white/10 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Home
              </button>

              {pathways.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPage(item.id);
                    setLayer("soundbite");
                  }}
                  className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                    page === item.id
                      ? "bg-white text-[#0f402f]"
                      : "border border-white/10 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {item.navTitle}
                </button>
              ))}
            </div>
          </div>
        </GlassPanel>

        {page === "home" ? (
          <div className="mt-6 space-y-6">
            <div className={cardBase("from-[#075234] via-[#0a6a42] to-[#158058]")}>
              <div className="grid gap-8 rounded-[29px] bg-[#0f5e40]/80 p-7 text-white sm:p-8 lg:grid-cols-[1.25fr_0.75fr] lg:p-10">
                <div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.24em] text-white/85">
                    Step into the ecosystem
                  </div>

                  <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                    Bronson Family Farm
                    <br />
                    is more than a farm.
                  </h2>

                  <p className="mt-7 max-w-3xl text-lg leading-8 text-white/82 sm:text-2xl">
                    {t.paragraph}
                  </p>

                  <div className="mt-8 rounded-[28px] border border-white/10 bg-black/15 p-6 sm:p-7">
                    <div className="text-sm uppercase tracking-[0.25em] text-yellow-200">
                      {t.missionLabel}
                    </div>
                    <p className="mt-4 text-xl leading-8 text-white/88 sm:text-2xl">
                      {t.missionText}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={() => {
                        setPage("marketplace");
                        setLayer("soundbite");
                      }}
                      className="rounded-2xl bg-yellow-300 px-8 py-5 text-lg font-semibold text-black transition hover:brightness-95"
                    >
                      {t.enterMarket}
                    </button>

                    <button
                      onClick={() => {
                        setGuidedMode(true);
                        setVoiceEnabled(true);
                        speak(`${t.title}. ${t.subtitle}. ${t.paragraph}`);
                      }}
                      className="rounded-2xl border border-white/10 bg-white/10 px-8 py-5 text-lg font-medium text-white transition hover:bg-white/20"
                    >
                      {t.guidedTour}
                    </button>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[28px] border border-white/10 bg-white/10 p-7">
                    <div className="text-5xl font-semibold text-yellow-200">118+</div>
                    <div className="mt-2 text-2xl font-semibold">{t.stats1}</div>
                    <p className="mt-4 text-lg leading-7 text-white/78">
                      {t.stats1Body}
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/10 p-7">
                    <div className="text-5xl font-semibold text-yellow-200">6</div>
                    <div className="mt-2 text-2xl font-semibold">{t.stats2}</div>
                    <p className="mt-4 text-lg leading-7 text-white/78">
                      {t.stats2Body}
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/10 p-7">
                    <div className="text-2xl font-semibold">{t.stats3}</div>
                    <p className="mt-4 text-lg leading-7 text-white/78">
                      {t.stats3Body}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <GlassPanel className="p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-green-700">
                    {t.choose}
                  </div>
                  <div className="mt-3 h-2 w-full max-w-sm overflow-hidden rounded-full bg-[#dfe7dd]">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-[#1b7b56] to-[#9bcf4f]" />
                  </div>
                </div>

                <button
                  onClick={() => openExternal(STORE_URL)}
                  className="hidden rounded-2xl bg-[#0d5b3e] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0a4a32] sm:block"
                >
                  {t.marketplaceBridge}
                </button>
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {pathways.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setPage(item.id);
                      setLayer("soundbite");
                    }}
                    className="text-left transition hover:-translate-y-1"
                  >
                    <div className={cardBase(item.accent)}>
                      <div className="h-full rounded-[29px] bg-white p-7">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-[#f7faf7] text-base font-semibold text-green-700">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                            {t.pathway}
                          </div>
                        </div>

                        <h3 className="mt-6 text-3xl font-semibold tracking-tight text-[#17352b]">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-lg leading-8 text-slate-600">
                          {item.summary}
                        </p>

                        <div className="mt-6">
                          <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                            {t.mission}
                          </div>
                          <p className="mt-2 text-base leading-7 text-slate-700">
                            {item.mission}
                          </p>
                        </div>

                        <div className="mt-6">
                          <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                            {t.outcome}
                          </div>
                          <p className="mt-2 text-base leading-7 text-slate-600">
                            {item.outcome}
                          </p>
                        </div>

                        <div className="mt-8">
                          <div
                            className={`inline-flex rounded-2xl px-5 py-4 text-sm font-semibold ${item.button}`}
                          >
                            {t.open} →
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 text-center text-sm text-slate-600 sm:p-7">
              {t.reason}
            </GlassPanel>
          </div>
        ) : activePathway ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-6">
              <div className={cardBase(activePathway.accent)}>
                <div className="rounded-[29px] bg-white/90 p-6">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-green-700">
                    {activePathway.heroKicker}
                  </div>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#17352b] sm:text-5xl">
                    {activePathway.title}
                  </h2>

                  <p className="mt-5 text-xl leading-8 text-slate-600">
                    {activePathway.summary}
                  </p>

                  <div className="mt-7 rounded-[24px] border border-black/5 bg-[#f6faf6] p-5">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      {t.mission}
                    </div>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                      {activePathway.mission}
                    </p>
                  </div>

                  <div className="mt-5 rounded-[24px] border border-black/5 bg-[#f6faf6] p-5">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      {t.outcome}
                    </div>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                      {activePathway.outcome}
                    </p>
                  </div>
                </div>
              </div>

              <GlassPanel className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {t.progress}
                  </div>
                  <div className="text-sm font-medium text-slate-600">
                    {Math.round(progress)}%
                  </div>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e5ece4]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#176e4d] via-[#5aa462] to-[#d8b24d]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {layerOrder.map((item) => (
                    <button
                      key={item}
                      onClick={() => setLayer(item)}
                      className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition ${
                        layer === item
                          ? "bg-[#0f5c3f] text-white"
                          : "bg-[#f3f6f2] text-slate-600 hover:bg-[#e7efe6]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel className="p-6">
                <div className="grid gap-3">
                  <button
                    onClick={() => {
                      stop();
                      setPage("home");
                    }}
                    className="rounded-2xl bg-[#f3f6f2] px-5 py-4 text-left text-sm font-medium text-slate-700 transition hover:bg-[#e8efe6]"
                  >
                    ← {t.back}
                  </button>

                  <button
                    onClick={() => openExternal(WEATHER_URL)}
                    className="rounded-2xl bg-[#f3f6f2] px-5 py-4 text-left text-sm font-medium text-slate-700 transition hover:bg-[#e8efe6]"
                  >
                    {t.liveWeather}
                  </button>

                  {page === "marketplace" ? (
                    <button
                      onClick={() => openExternal(STORE_URL)}
                      className="rounded-2xl bg-[#0f5c3f] px-5 py-4 text-left text-sm font-medium text-white transition hover:bg-[#0c4b33]"
                    >
                      {t.marketplaceBridge}
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const currentIndex = pathways.findIndex((p) => p.id === page);
                        const nextIndex = (currentIndex + 1) % pathways.length;
                        setPage(pathways[nextIndex].id);
                        setLayer("soundbite");
                      }}
                      className="rounded-2xl bg-[#0f5c3f] px-5 py-4 text-left text-sm font-medium text-white transition hover:bg-[#0c4b33]"
                    >
                      {t.allPathways}
                    </button>
                  )}
                </div>
              </GlassPanel>
            </div>

            <div className="space-y-6">
              <GlassPanel className="p-7 sm:p-8">
                <div className="text-[11px] uppercase tracking-[0.28em] text-green-700">
                  {t.layerTitle}
                </div>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#17352b] sm:text-4xl">
                  {activePathway.layers[layer].title}
                </h3>

                <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600 sm:text-xl">
                  {activePathway.layers[layer].body}
                </p>

                {activePathway.layers[layer].bullets && (
                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    {activePathway.layers[layer].bullets?.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[24px] border border-black/5 bg-[#f7faf7] p-5"
                      >
                        <div className="text-base leading-7 text-slate-700">
                          {bullet}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      const currentIndex = layerOrder.indexOf(layer);
                      const nextLayer =
                        layerOrder[Math.min(currentIndex + 1, layerOrder.length - 1)];
                      setLayer(nextLayer);
                    }}
                    className="rounded-2xl bg-[#0f5c3f] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0b4a32]"
                  >
                    Next Layer →
                  </button>

                  <button
                    onClick={() => {
                      const currentIndex = layerOrder.indexOf(layer);
                      const previousLayer =
                        layerOrder[Math.max(currentIndex - 1, 0)];
                      setLayer(previousLayer);
                    }}
                    className="rounded-2xl bg-[#f3f6f2] px-7 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#e8efe6]"
                  >
                    ← Previous Layer
                  </button>

                  {page === "marketplace" && (
                    <button
                      onClick={() => openExternal(STORE_URL)}
                      className="rounded-2xl bg-yellow-300 px-7 py-4 text-sm font-semibold text-black transition hover:brightness-95"
                    >
                      {t.marketplaceBridge}
                    </button>
                  )}
                </div>
              </GlassPanel>

              <div className="grid gap-6 md:grid-cols-2">
                <GlassPanel className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {t.mission}
                  </div>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {activePathway.mission}
                  </p>
                </GlassPanel>

                <GlassPanel className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {t.outcome}
                  </div>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {activePathway.outcome}
                  </p>
                </GlassPanel>
              </div>

              <GlassPanel className="p-6 text-sm text-slate-600">
                {t.reason}
              </GlassPanel>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
