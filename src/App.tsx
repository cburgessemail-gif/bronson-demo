import React, { useEffect, useMemo, useRef, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "it" | "fr" | "he";
type RoleKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type LayerKey = "soundbite" | "intro" | "knowledge" | "summary" | "next";

type SectionCard = {
  title: string;
  text: string;
};

type NextStep = {
  label: string;
  description: string;
  cta: string;
  href?: string;
};

type RoleContent = {
  mission: string;
  strap: string;
  image: string;
  imageAlt: string;
  accent: string;
  soundbite: string;
  intro: string;
  knowledge: SectionCard[];
  summary: string;
  next: NextStep[];
};

const BRAND = {
  name: "Bronson Family Farm",
  sub: "Living ecosystem demo",
  developedBy: "Developed by Bronson Family Farm",
  site: "https://www.bronsonfamilyfarm.com/",
  grownBy: "https://grownby.com/farms/bronson-family-farm/shop",
};

const LANGUAGES: Record<LanguageKey, { label: string; dir?: "ltr" | "rtl" }> = {
  en: { label: "English", dir: "ltr" },
  es: { label: "Español", dir: "ltr" },
  tl: { label: "Filipino", dir: "ltr" },
  it: { label: "Italiano", dir: "ltr" },
  fr: { label: "Français", dir: "ltr" },
  he: { label: "עברית", dir: "rtl" },
};

const UI_TEXT: Record<
  LanguageKey,
  {
    welcome: string;
    selectLanguage: string;
    choosePathway: string;
    enter: string;
    backHome: string;
    backPathways: string;
    guidedVoice: string;
    voiceOn: string;
    voiceOff: string;
    layer: string;
    layers: Record<LayerKey, string>;
    mission: string;
    purpose: string;
    whatYouCanDoNext: string;
    open: string;
    explore: string;
    learn: string;
    roleLabels: Record<RoleKey, string>;
    footer: string;
    ecosystem: string;
    liveLinks: string;
  }
> = {
  en: {
    welcome: "Step into the ecosystem.",
    selectLanguage: "Language",
    choosePathway: "Choose a pathway",
    enter: "Enter pathway",
    backHome: "Back to home",
    backPathways: "Back to pathways",
    guidedVoice: "Guided voice",
    voiceOn: "On",
    voiceOff: "Off",
    layer: "Layer",
    layers: {
      soundbite: "Sound bite",
      intro: "Intro",
      knowledge: "Knowledge",
      summary: "Summary of purpose",
      next: "Next",
    },
    mission: "Mission",
    purpose: "Purpose",
    whatYouCanDoNext: "What you can do next",
    open: "Open",
    explore: "Explore",
    learn: "Learn more",
    roleLabels: {
      guest: "Guest",
      customer: "Customer",
      marketplace: "Marketplace",
      grower: "Grower",
      youth: "Youth Workforce",
      partners: "Partners",
    },
    footer: "Co-owned by Bronson Family Farm and Farm & Family Alliance",
    ecosystem: "An immersive farm, food, learning, and community platform.",
    liveLinks: "Live links",
  },
  es: {
    welcome: "Entre al ecosistema.",
    selectLanguage: "Idioma",
    choosePathway: "Elija una ruta",
    enter: "Entrar",
    backHome: "Volver al inicio",
    backPathways: "Volver a rutas",
    guidedVoice: "Narración guiada",
    voiceOn: "Activada",
    voiceOff: "Desactivada",
    layer: "Capa",
    layers: {
      soundbite: "Mensaje breve",
      intro: "Introducción",
      knowledge: "Conocimiento",
      summary: "Resumen del propósito",
      next: "Siguiente",
    },
    mission: "Misión",
    purpose: "Propósito",
    whatYouCanDoNext: "Lo que puede hacer ahora",
    open: "Abrir",
    explore: "Explorar",
    learn: "Más información",
    roleLabels: {
      guest: "Invitado",
      customer: "Cliente",
      marketplace: "Mercado",
      grower: "Productor",
      youth: "Juventud Laboral",
      partners: "Socios",
    },
    footer: "Copropiedad de Bronson Family Farm y Farm & Family Alliance",
    ecosystem: "Una plataforma inmersiva de granja, alimentos, aprendizaje y comunidad.",
    liveLinks: "Enlaces en vivo",
  },
  tl: {
    welcome: "Pumasok sa ecosystem.",
    selectLanguage: "Wika",
    choosePathway: "Pumili ng pathway",
    enter: "Pumasok",
    backHome: "Bumalik sa home",
    backPathways: "Bumalik sa pathways",
    guidedVoice: "Gabay na boses",
    voiceOn: "Bukas",
    voiceOff: "Patay",
    layer: "Antas",
    layers: {
      soundbite: "Maikling mensahe",
      intro: "Panimula",
      knowledge: "Kaalaman",
      summary: "Buod ng layunin",
      next: "Susunod",
    },
    mission: "Misyon",
    purpose: "Layunin",
    whatYouCanDoNext: "Mga susunod na hakbang",
    open: "Buksan",
    explore: "Tuklasin",
    learn: "Matuto pa",
    roleLabels: {
      guest: "Bisita",
      customer: "Mamimili",
      marketplace: "Pamilihan",
      grower: "Grower",
      youth: "Kabataang Workforce",
      partners: "Kasosyo",
    },
    footer: "Magkasamang pag-aari ng Bronson Family Farm at Farm & Family Alliance",
    ecosystem: "Isang nakaka-engganyong farm, food, learning, at community platform.",
    liveLinks: "Mga live link",
  },
  it: {
    welcome: "Entra nell’ecosistema.",
    selectLanguage: "Lingua",
    choosePathway: "Scegli un percorso",
    enter: "Entra",
    backHome: "Torna alla home",
    backPathways: "Torna ai percorsi",
    guidedVoice: "Voce guidata",
    voiceOn: "Attiva",
    voiceOff: "Disattiva",
    layer: "Livello",
    layers: {
      soundbite: "Messaggio rapido",
      intro: "Introduzione",
      knowledge: "Conoscenza",
      summary: "Sintesi dello scopo",
      next: "Prossimo",
    },
    mission: "Missione",
    purpose: "Scopo",
    whatYouCanDoNext: "Cosa puoi fare ora",
    open: "Apri",
    explore: "Esplora",
    learn: "Scopri di più",
    roleLabels: {
      guest: "Ospite",
      customer: "Cliente",
      marketplace: "Marketplace",
      grower: "Coltivatore",
      youth: "Forza Lavoro Giovani",
      partners: "Partner",
    },
    footer: "Co-proprietà di Bronson Family Farm e Farm & Family Alliance",
    ecosystem: "Una piattaforma immersiva su fattoria, cibo, apprendimento e comunità.",
    liveLinks: "Link live",
  },
  fr: {
    welcome: "Entrez dans l’écosystème.",
    selectLanguage: "Langue",
    choosePathway: "Choisissez un parcours",
    enter: "Entrer",
    backHome: "Retour à l’accueil",
    backPathways: "Retour aux parcours",
    guidedVoice: "Voix guidée",
    voiceOn: "Activée",
    voiceOff: "Désactivée",
    layer: "Niveau",
    layers: {
      soundbite: "Accroche",
      intro: "Introduction",
      knowledge: "Connaissance",
      summary: "Résumé de l’objectif",
      next: "Suite",
    },
    mission: "Mission",
    purpose: "Objectif",
    whatYouCanDoNext: "Ce que vous pouvez faire ensuite",
    open: "Ouvrir",
    explore: "Explorer",
    learn: "En savoir plus",
    roleLabels: {
      guest: "Invité",
      customer: "Client",
      marketplace: "Marché",
      grower: "Producteur",
      youth: "Jeunesse & Travail",
      partners: "Partenaires",
    },
    footer: "Copropriété de Bronson Family Farm et Farm & Family Alliance",
    ecosystem: "Une plateforme immersive dédiée à la ferme, à l’alimentation, à l’apprentissage et à la communauté.",
    liveLinks: "Liens en direct",
  },
  he: {
    welcome: "ברוכים הבאים לאקוסיסטם.",
    selectLanguage: "שפה",
    choosePathway: "בחרו מסלול",
    enter: "כניסה",
    backHome: "חזרה לדף הבית",
    backPathways: "חזרה למסלולים",
    guidedVoice: "קריינות מודרכת",
    voiceOn: "פועל",
    voiceOff: "כבוי",
    layer: "שכבה",
    layers: {
      soundbite: "מסר קצר",
      intro: "מבוא",
      knowledge: "ידע",
      summary: "סיכום המטרה",
      next: "הבא",
    },
    mission: "משימה",
    purpose: "מטרה",
    whatYouCanDoNext: "מה אפשר לעשות עכשיו",
    open: "פתח",
    explore: "גלה",
    learn: "למידע נוסף",
    roleLabels: {
      guest: "אורח",
      customer: "לקוח",
      marketplace: "שוק",
      grower: "מגדל",
      youth: "כוח עבודה צעיר",
      partners: "שותפים",
    },
    footer: "בבעלות משותפת של Bronson Family Farm ו-Farm & Family Alliance",
    ecosystem: "פלטפורמה סוחפת לחווה, מזון, למידה וקהילה.",
    liveLinks: "קישורים חיים",
  },
};

const ROLE_CONTENT: Record<RoleKey, RoleContent> = {
  guest: {
    mission: "Help guests understand the vision, story, and purpose of Bronson Family Farm.",
    strap: "Walk the land. See the story. Understand why this exists.",
    image: "/images/guest-forest.jpg",
    imageAlt: "Forest edge and farm pathway at Bronson Family Farm",
    accent: "from-emerald-900/80 via-green-900/50 to-black/80",
    soundbite:
      "This is not just land. It is a living vision where history, farming, family, and community restoration meet.",
    intro:
      "The guest pathway introduces the purpose of Bronson Family Farm through place, memory, stewardship, and possibility. It welcomes people into the story before asking them to take action.",
    knowledge: [
      {
        title: "Why this matters",
        text: "Bronson Family Farm exists to restore land, reconnect people to food, and create a place where community can gather, learn, grow, and build a healthier future.",
      },
      {
        title: "What makes it different",
        text: "This is a regenerative, community-rooted ecosystem. It includes growing, education, agritourism, youth workforce development, partnerships, and a marketplace that turns interest into real support.",
      },
      {
        title: "What guests discover",
        text: "Guests can explore the vision, learn the farm story, understand the pathways, and see how one place can support food access, opportunity, wellness, and belonging.",
      },
    ],
    summary:
      "The guest pathway turns curiosity into understanding. Its purpose is to help visitors connect the land to the larger mission.",
    next: [
      {
        label: "Visit the main website",
        description: "See the public-facing farm story and current information.",
        cta: "Open website",
        href: BRAND.site,
      },
      {
        label: "Explore Marketplace",
        description: "See how the ecosystem converts interest into support and purchasing power.",
        cta: "Go to Marketplace",
      },
      {
        label: "See Partner pathway",
        description: "Understand how collaboration helps the mission grow.",
        cta: "View Partners",
      },
    ],
  },
  customer: {
    mission: "Help customers choose fresh food, understand nutrition, and return for healthier choices.",
    strap: "Fresh food. Better choices. Reasons to come back.",
    image: "/images/customer-produce.jpg",
    imageAlt: "Fresh produce arranged for customers",
    accent: "from-lime-900/80 via-green-900/40 to-black/80",
    soundbite:
      "The customer pathway connects people to fresh food, useful knowledge, and healthier repeat decisions.",
    intro:
      "This pathway shows that buying from Bronson Family Farm is more than a transaction. It is access to food, nutrition awareness, seasonal options, and a reason to stay connected to the farm.",
    knowledge: [
      {
        title: "Fresh food matters",
        text: "As food costs rise, many families are pushed toward overprocessed substitutes. This pathway keeps fresh options visible, practical, and worth returning for.",
      },
      {
        title: "Education is part of the experience",
        text: "Customers are not only buying produce. They are learning what is in season, why it matters, and how fresh choices support health and community well-being.",
      },
      {
        title: "Return value",
        text: "The customer experience is designed to make people want to come back again and again through useful knowledge, visible offerings, and a welcoming ecosystem.",
      },
    ],
    summary:
      "The customer pathway is built to support healthy choices, repeat engagement, and stronger connection between food and wellness.",
    next: [
      {
        label: "Open the store",
        description: "Go directly to Bronson Family Farm’s GrownBy marketplace.",
        cta: "Open GrownBy",
        href: BRAND.grownBy,
      },
      {
        label: "Explore Marketplace",
        description: "See how products, growers, and purchasing power connect.",
        cta: "Go to Marketplace",
      },
      {
        label: "Return to pathways",
        description: "Move into youth, grower, or partner pathways.",
        cta: "Back to Pathways",
      },
    ],
  },
  marketplace: {
    mission: "Convert interest into purchasing power and long-term sustainability.",
    strap: "Where attention becomes action.",
    image: "/images/marketplace-storefront.jpg",
    imageAlt: "Marketplace storefront and farm commerce experience",
    accent: "from-amber-900/80 via-orange-900/50 to-black/80",
    soundbite:
      "The marketplace is where the ecosystem becomes sustainable through real products, real participation, and real support.",
    intro:
      "This pathway centers the GrownBy storefront and the larger farm economy. It shows how customers, growers, and partners help turn a vision into an operating ecosystem.",
    knowledge: [
      {
        title: "Marketplace role",
        text: "The marketplace is not a side feature. It is a core pathway that converts interest into orders, visibility, repeat purchasing, and farm sustainability.",
      },
      {
        title: "Why GrownBy matters",
        text: "GrownBy supports direct farm selling and creates a visible bridge from the demo experience into meaningful action. It helps the mission move beyond explanation into participation.",
      },
      {
        title: "Connected value",
        text: "This marketplace can serve fresh produce, seedlings, educational events, grower opportunities, and future ecosystem offerings that deepen engagement over time.",
      },
    ],
    summary:
      "The marketplace pathway exists to move people from admiration to participation, and from participation to sustainability.",
    next: [
      {
        label: "Open Bronson Family Farm on GrownBy",
        description: "Launch the live storefront.",
        cta: "Open storefront",
        href: BRAND.grownBy,
      },
      {
        label: "See Grower pathway",
        description: "Understand how growers enter and benefit from the ecosystem.",
        cta: "View Growers",
      },
      {
        label: "See Customer pathway",
        description: "Return to the food and nutrition experience.",
        cta: "View Customers",
      },
    ],
  },
  grower: {
    mission: "Connect producers to opportunity, participation, and market access.",
    strap: "Grow here. Belong here. Benefit here.",
    image: "/images/grower-field.jpg",
    imageAlt: "Grower working in a productive field",
    accent: "from-teal-900/80 via-emerald-900/40 to-black/80",
    soundbite:
      "Growers do not simply appear in the marketplace. They register through the portal and gain access to the benefits of the ecosystem.",
    intro:
      "This pathway makes the grower journey clear. Producers come in through the ecosystem, connect to opportunity, and then participate in the marketplace with greater visibility and support.",
    knowledge: [
      {
        title: "Entry through the portal",
        text: "Growers register through the ecosystem so they can be connected to opportunities, guidance, visibility, collaboration, and market participation.",
      },
      {
        title: "Why the pathway matters",
        text: "The grower pathway shows that the marketplace is stronger when producers are supported, welcomed, and connected to an organized community of opportunity.",
      },
      {
        title: "Benefits of participation",
        text: "This can include market access, community visibility, educational support, ecosystem belonging, and connection to larger farm and workforce goals.",
      },
    ],
    summary:
      "The grower pathway exists to connect producers to opportunity and market participation through a welcoming, useful ecosystem.",
    next: [
      {
        label: "Go to Marketplace",
        description: "See where grower participation creates value.",
        cta: "Open Marketplace",
      },
      {
        label: "See Partner pathway",
        description: "Understand how aligned resources can support growers.",
        cta: "View Partners",
      },
      {
        label: "Return to Pathways",
        description: "Explore the rest of the ecosystem.",
        cta: "Back to Pathways",
      },
    ],
  },
  youth: {
    mission: "Build skills, responsibility, and future readiness through the youth workforce pathway.",
    strap: "Learning by doing, guided by purpose.",
    image: "/images/youth-workforce.jpg",
    imageAlt: "Youth workforce participants learning on the farm",
    accent: "from-sky-900/80 via-cyan-900/40 to-black/80",
    soundbite:
      "The youth workforce pathway turns exposure into skills, responsibility, and future readiness.",
    intro:
      "This pathway is more than a youth activity. It is a structured experience of growth, guidance, responsibility, and preparation for what comes next.",
    knowledge: [
      {
        title: "How it works",
        text: "Young people move through meaningful experiences that build habits, confidence, teamwork, and connection to food, land, and community.",
      },
      {
        title: "Support matters",
        text: "The supervisor role lives inside the youth workforce pathway and provides guidance, accountability, structure, and support resources as needed.",
      },
      {
        title: "Long-term value",
        text: "This pathway helps build future readiness by making learning active, useful, and connected to real work, real outcomes, and real belonging.",
      },
    ],
    summary:
      "The youth workforce pathway exists to help young people build practical skills, confidence, and readiness for future opportunity.",
    next: [
      {
        label: "See Partner pathway",
        description: "Explore how schools and organizations can align resources.",
        cta: "View Partners",
      },
      {
        label: "See Guest pathway",
        description: "Return to the story and vision behind the work.",
        cta: "View Guests",
      },
      {
        label: "Return to Pathways",
        description: "Continue exploring the ecosystem.",
        cta: "Back to Pathways",
      },
    ],
  },
  partners: {
    mission: "Align resources and collaboration for broader community benefit.",
    strap: "Shared vision. Shared alignment. Shared impact.",
    image: "/images/partners-collaboration.jpg",
    imageAlt: "Partners collaborating around farm and community vision",
    accent: "from-violet-900/80 via-fuchsia-900/40 to-black/80",
    soundbite:
      "The partner pathway shows how aligned people and organizations can strengthen community benefit through shared purpose.",
    intro:
      "This pathway is for institutions, collaborators, sponsors, educators, health organizations, growers, and community leaders who want to understand where their support fits and why it matters.",
    knowledge: [
      {
        title: "Why alignment matters",
        text: "Partners help expand what one farm can do by contributing expertise, visibility, learning opportunities, infrastructure, resources, and shared reach.",
      },
      {
        title: "What collaboration can support",
        text: "This can include education, workforce development, food access, event participation, market growth, wellness support, technical assistance, and long-term ecosystem building.",
      },
      {
        title: "What partners gain",
        text: "Partners gain a meaningful place to align resources with visible community benefit, local impact, and a living model that people can experience directly.",
      },
    ],
    summary:
      "The partner pathway exists to align resources and collaboration for community benefit through a visible, place-based ecosystem.",
    next: [
      {
        label: "Visit main website",
        description: "See the broader public-facing story and updates.",
        cta: "Open website",
        href: BRAND.site,
      },
      {
        label: "See Marketplace",
        description: "View the pathway that supports sustainability.",
        cta: "Open Marketplace",
      },
      {
        label: "Return to Pathways",
        description: "Explore another mission pathway.",
        cta: "Back to Pathways",
      },
    ],
  },
};

const ROLE_ORDER: RoleKey[] = [
  "guest",
  "customer",
  "marketplace",
  "grower",
  "youth",
  "partners",
];

const roleDestinationMap: Partial<Record<string, RoleKey>> = {
  "Go to Marketplace": "marketplace",
  "Open Marketplace": "marketplace",
  "View Partners": "partners",
  "View Customers": "customer",
  "View Growers": "grower",
  "View Guests": "guest",
};

function cls(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function BackgroundImage({
  src,
  alt,
  overlayClassName,
  children,
}: {
  src: string;
  alt: string;
  overlayClassName?: string;
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={cls(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onError={() => setLoaded(false)}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.22),_transparent_35%),linear-gradient(135deg,rgba(5,46,22,0.95),rgba(9,9,11,0.98))]" />
      )}
      <div className={cls("absolute inset-0", overlayClassName)} />
      <div className="absolute inset-0 bg-black/25" />
      {children}
    </div>
  );
}

function LogoRow() {
  const logos = [
    "/images/logo-bronson.png",
    "/images/logo-ffa.png",
    "/images/logo-home-depot.png",
    "/images/logo-petitti.png",
    "/images/logo-elliotts.png",
    "/images/logo-central-state.png",
    "/images/logo-youngstown.png",
    "/images/logo-jcc.png",
  ];

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 opacity-95">
      {logos.map((src, i) => (
        <div
          key={src + i}
          className="h-12 w-24 rounded-2xl border border-white/15 bg-white/10 p-2 backdrop-blur-sm"
        >
          <img
            src={src}
            alt="Partner logo"
            className="h-full w-full object-contain"
            onError={(e) => {
              (e.currentTarget.parentElement as HTMLDivElement).style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
}

function LayerTabs({
  language,
  layer,
  setLayer,
}: {
  language: LanguageKey;
  layer: LayerKey;
  setLayer: (value: LayerKey) => void;
}) {
  const t = UI_TEXT[language];

  return (
    <div className="flex flex-wrap gap-2">
      {(["soundbite", "intro", "knowledge", "summary", "next"] as LayerKey[]).map((key) => (
        <button
          key={key}
          onClick={() => setLayer(key)}
          className={cls(
            "rounded-full border px-4 py-2 text-sm transition",
            layer === key
              ? "border-white/40 bg-white text-zinc-900"
              : "border-white/15 bg-white/10 text-white hover:bg-white/15"
          )}
        >
          {t.layers[key]}
        </button>
      ))}
    </div>
  );
}

function LanguageSelector({
  language,
  setLanguage,
}: {
  language: LanguageKey;
  setLanguage: (value: LanguageKey) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(LANGUAGES) as LanguageKey[]).map((key) => (
        <button
          key={key}
          onClick={() => setLanguage(key)}
          className={cls(
            "rounded-full border px-3 py-1.5 text-sm transition",
            language === key
              ? "border-white/40 bg-white text-zinc-900"
              : "border-white/15 bg-white/10 text-white hover:bg-white/15"
          )}
          dir={LANGUAGES[key].dir || "ltr"}
        >
          {LANGUAGES[key].label}
        </button>
      ))}
    </div>
  );
}

function useSpeech(text: string, enabled: boolean, language: LanguageKey) {
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!enabled || !text || !synth) return;

    synth.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    const langMap: Record<LanguageKey, string> = {
      en: "en-US",
      es: "es-ES",
      tl: "fil-PH",
      it: "it-IT",
      fr: "fr-FR",
      he: "he-IL",
    };
    utter.lang = langMap[language];
    utter.rate = 0.93;
    utter.pitch = 1.0;
    utter.volume = 1;

    const voices = synth.getVoices();
    const match =
      voices.find((v) => v.lang?.toLowerCase() === utter.lang.toLowerCase()) ||
      voices.find((v) => v.lang?.toLowerCase().startsWith(utter.lang.slice(0, 2).toLowerCase()));

    if (match) utter.voice = match;

    synth.speak(utter);

    return () => synth.cancel();
  }, [text, enabled, language]);
}

function App() {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [activeRole, setActiveRole] = useState<RoleKey | null>(null);
  const [layer, setLayer] = useState<LayerKey>("soundbite");
  const topRef = useRef<HTMLDivElement | null>(null);

  const t = UI_TEXT[language];
  const role = activeRole ? ROLE_CONTENT[activeRole] : null;

  const narration = useMemo(() => {
    if (!role) {
      return [
        "Welcome to Bronson Family Farm.",
        "Choose a pathway to experience the mission of this ecosystem.",
      ].join(" ");
    }

    if (layer === "soundbite") return role.soundbite;
    if (layer === "intro") return role.intro;
    if (layer === "knowledge")
      return role.knowledge.map((item) => `${item.title}. ${item.text}`).join(" ");
    if (layer === "summary") return role.summary;
    return role.next.map((n) => `${n.label}. ${n.description}`).join(" ");
  }, [role, layer]);

  useSpeech(narration, voiceEnabled, language);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeRole, layer, language]);

  const openNext = (step: NextStep) => {
    if (step.href) {
      window.open(step.href, "_blank", "noopener,noreferrer");
      return;
    }
    if (step.cta === "Back to Pathways") {
      setActiveRole(null);
      setLayer("soundbite");
      return;
    }
    const mapped = roleDestinationMap[step.cta];
    if (mapped) {
      setActiveRole(mapped);
      setLayer("soundbite");
      return;
    }
  };

  const headerChips = [
    "Farm",
    "Food",
    "Learning",
    "Workforce",
    "Marketplace",
    "Partnerships",
  ];

  return (
    <div
      ref={topRef}
      dir={LANGUAGES[language].dir || "ltr"}
      className="min-h-screen bg-zinc-950 text-white"
    >
      {!activeRole ? (
        <div className="relative min-h-screen">
          <BackgroundImage
            src="/images/entrance-farm.jpg"
            alt="Bronson Family Farm entrance"
            overlayClassName="bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.68)),radial-gradient(circle_at_top,rgba(163,230,53,0.20),transparent_30%)]"
          >
            <div className="relative z-10 flex min-h-screen items-center">
              <div className="mx-auto w-full max-w-7xl px-6 py-10">
                <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                      {BRAND.sub}
                    </div>

                    <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
                      {t.welcome}
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 sm:text-lg">
                      {t.ecosystem}
                    </p>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
                      Bronson Family Farm is a living ecosystem where guests understand the
                      vision, customers discover fresh food and nutrition, growers connect to
                      opportunity, youth build future readiness, partners align resources, and the
                      marketplace turns interest into sustainability.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {headerChips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/90 backdrop-blur-sm"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <LogoRow />

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <div className="rounded-3xl border border-white/15 bg-black/30 p-4 backdrop-blur-md">
                        <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/65">
                          {t.selectLanguage}
                        </div>
                        <LanguageSelector language={language} setLanguage={setLanguage} />
                      </div>

                      <div className="rounded-3xl border border-white/15 bg-black/30 p-4 backdrop-blur-md">
                        <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/65">
                          {t.guidedVoice}
                        </div>
                        <button
                          onClick={() => setVoiceEnabled((v) => !v)}
                          className={cls(
                            "rounded-full border px-4 py-2 text-sm transition",
                            voiceEnabled
                              ? "border-white/40 bg-white text-zinc-900"
                              : "border-white/15 bg-white/10 text-white hover:bg-white/15"
                          )}
                        >
                          {voiceEnabled ? t.voiceOn : t.voiceOff}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/15 bg-black/35 p-4 shadow-2xl backdrop-blur-md sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-white/60">
                          {t.choosePathway}
                        </div>
                        <div className="mt-1 text-2xl font-semibold">{BRAND.name}</div>
                      </div>
                      <a
                        href={BRAND.grownBy}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                      >
                        GrownBy
                      </a>
                    </div>

                    <div className="grid gap-3">
                      {ROLE_ORDER.map((roleKey) => {
                        const data = ROLE_CONTENT[roleKey];
                        return (
                          <button
                            key={roleKey}
                            onClick={() => {
                              setActiveRole(roleKey);
                              setLayer("soundbite");
                            }}
                            className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-left transition hover:border-white/25 hover:bg-white/10"
                          >
                            <div className="flex items-start gap-4">
                              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-800">
                                <img
                                  src={data.image}
                                  alt={data.imageAlt}
                                  className="h-full w-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                  }}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-lg font-medium">
                                  {t.roleLabels[roleKey]}
                                </div>
                                <div className="mt-1 text-sm leading-6 text-white/75">
                                  {data.strap}
                                </div>
                              </div>
                              <div className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75 group-hover:bg-white group-hover:text-zinc-900">
                                {t.enter}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/75">
                      <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/55">
                        {t.liveLinks}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={BRAND.site}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
                        >
                          Website
                        </a>
                        <a
                          href={BRAND.grownBy}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
                        >
                          Storefront
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center text-xs uppercase tracking-[0.18em] text-white/55">
                  {BRAND.developedBy}
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
      ) : (
        <div className="relative min-h-screen">
          <BackgroundImage
            src={role.image}
            alt={role.imageAlt}
            overlayClassName={cls("bg-gradient-to-br", role.accent)}
          >
            <div className="relative z-10 min-h-screen">
              <div className="mx-auto max-w-7xl px-6 py-6 sm:py-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          setActiveRole(null);
                          setLayer("soundbite");
                        }}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                      >
                        {t.backHome}
                      </button>
                      <button
                        onClick={() => {
                          setActiveRole(null);
                          setLayer("soundbite");
                        }}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                      >
                        {t.backPathways}
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <LanguageSelector language={language} setLanguage={setLanguage} />
                      <button
                        onClick={() => setVoiceEnabled((v) => !v)}
                        className={cls(
                          "rounded-full border px-4 py-2 text-sm transition",
                          voiceEnabled
                            ? "border-white/40 bg-white text-zinc-900"
                            : "border-white/15 bg-white/10 text-white hover:bg-white/15"
                        )}
                      >
                        {t.guidedVoice}: {voiceEnabled ? t.voiceOn : t.voiceOff}
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/75">
                        {t.roleLabels[activeRole]}
                      </div>

                      <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
                        {role.strap}
                      </h1>

                      <p className="mt-4 max-w-3xl text-base leading-7 text-white/85">
                        {role.mission}
                      </p>

                      <div className="mt-6">
                        <LayerTabs language={language} layer={layer} setLayer={setLayer} />
                      </div>

                      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:p-6">
                        {layer === "soundbite" && (
                          <div>
                            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/55">
                              {t.layers.soundbite}
                            </div>
                            <p className="text-2xl font-medium leading-relaxed text-white">
                              {role.soundbite}
                            </p>
                          </div>
                        )}

                        {layer === "intro" && (
                          <div>
                            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/55">
                              {t.layers.intro}
                            </div>
                            <p className="text-lg leading-8 text-white/90">{role.intro}</p>
                          </div>
                        )}

                        {layer === "knowledge" && (
                          <div>
                            <div className="mb-4 text-xs uppercase tracking-[0.18em] text-white/55">
                              {t.layers.knowledge}
                            </div>
                            <div className="grid gap-4">
                              {role.knowledge.map((item) => (
                                <div
                                  key={item.title}
                                  className="rounded-[1.25rem] border border-white/10 bg-black/20 p-5"
                                >
                                  <h3 className="text-lg font-semibold">{item.title}</h3>
                                  <p className="mt-2 text-base leading-7 text-white/85">
                                    {item.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {layer === "summary" && (
                          <div>
                            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/55">
                              {t.layers.summary}
                            </div>
                            <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-5">
                              <div className="text-sm uppercase tracking-[0.16em] text-white/55">
                                {t.purpose}
                              </div>
                              <p className="mt-3 text-xl leading-8 text-white/95">
                                {role.summary}
                              </p>
                            </div>
                          </div>
                        )}

                        {layer === "next" && (
                          <div>
                            <div className="mb-4 text-xs uppercase tracking-[0.18em] text-white/55">
                              {t.whatYouCanDoNext}
                            </div>
                            <div className="grid gap-4">
                              {role.next.map((step) => (
                                <div
                                  key={step.label}
                                  className="rounded-[1.25rem] border border-white/10 bg-black/20 p-5"
                                >
                                  <div className="text-lg font-semibold">{step.label}</div>
                                  <p className="mt-2 text-base leading-7 text-white/85">
                                    {step.description}
                                  </p>
                                  <button
                                    onClick={() => openNext(step)}
                                    className="mt-4 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white hover:text-zinc-900"
                                  >
                                    {step.cta}
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-black/35 shadow-2xl backdrop-blur-md">
                        <div className="aspect-[4/3] w-full overflow-hidden">
                          <img
                            src={role.image}
                            alt={role.imageAlt}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.classList.add(
                                  "bg-[radial-gradient(circle_at_top,_rgba(163,230,53,0.20),_transparent_35%),linear-gradient(135deg,rgba(9,46,22,0.95),rgba(9,9,11,0.98))]"
                                );
                              }
                            }}
                          />
                        </div>
                        <div className="p-5">
                          <div className="text-xs uppercase tracking-[0.18em] text-white/55">
                            {t.mission}
                          </div>
                          <p className="mt-2 text-base leading-7 text-white/90">
                            {role.mission}
                          </p>
                        </div>
                      </div>

                      {activeRole === "marketplace" && (
                        <div className="rounded-[2rem] border border-white/15 bg-black/35 p-5 shadow-2xl backdrop-blur-md">
                          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/55">
                            Marketplace destination
                          </div>
                          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                            <div className="aspect-[16/9] w-full overflow-hidden">
                              <img
                                src="/images/grownby-storefront.jpg"
                                alt="Bronson Family Farm GrownBy storefront preview"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                  const parent = e.currentTarget.parentElement;
                                  if (parent) {
                                    parent.classList.add(
                                      "bg-[linear-gradient(135deg,rgba(120,53,15,0.9),rgba(9,9,11,0.98))]"
                                    );
                                  }
                                }}
                              />
                            </div>
                            <div className="p-5">
                              <h3 className="text-xl font-semibold">Bronson Family Farm on GrownBy</h3>
                              <p className="mt-2 text-base leading-7 text-white/85">
                                This is the live storefront connection for the demo. It is the
                                marketplace destination where visibility can become real support.
                              </p>
                              <a
                                href={BRAND.grownBy}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white hover:text-zinc-900"
                              >
                                Open storefront
                              </a>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="rounded-[2rem] border border-white/15 bg-black/35 p-5 shadow-2xl backdrop-blur-md">
                        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/55">
                          Ecosystem pathways
                        </div>
                        <div className="grid gap-3">
                          {ROLE_ORDER.map((roleKey) => (
                            <button
                              key={roleKey}
                              onClick={() => {
                                setActiveRole(roleKey);
                                setLayer("soundbite");
                              }}
                              className={cls(
                                "rounded-[1.25rem] border p-4 text-left transition",
                                activeRole === roleKey
                                  ? "border-white/30 bg-white/15"
                                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                              )}
                            >
                              <div className="text-base font-medium">{t.roleLabels[roleKey]}</div>
                              <div className="mt-1 text-sm leading-6 text-white/75">
                                {ROLE_CONTENT[roleKey].strap}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[2rem] border border-white/15 bg-black/35 p-5 text-sm leading-7 text-white/80 shadow-2xl backdrop-blur-md">
                        <div className="text-xs uppercase tracking-[0.18em] text-white/55">
                          {t.footer}
                        </div>
                        <div className="mt-3">{BRAND.developedBy}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
      )}
    </div>
  );
}

export default App;
