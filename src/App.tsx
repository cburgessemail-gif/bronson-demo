import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  CloudSun,
  ShoppingBasket,
  Sprout,
  Users,
  GraduationCap,
  HandHeart,
  Building2,
  MapPin,
  CalendarDays,
  ArrowRight,
  ArrowLeft,
  Globe2,
  Volume2,
  VolumeX,
  Leaf,
  Trees,
  Sun,
  Tractor,
  HeartPulse,
  BookOpen,
  ShieldCheck,
  Star,
  PlayCircle,
  Home,
  ScanLine,
  BadgeCheck,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

const LANGUAGES = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "patwa", label: "Patwa" },
  { key: "he", label: "עברית" },
];

const COPY = {
  en: {
    portalTitle: "Bronson Family Farm",
    portalSubtitle:
      "A regenerative farm and community ecosystem where land becomes food, food becomes wellness, and wellness becomes opportunity.",
    enter: "Enter the Demo",
    marketplace: "Marketplace",
    partners: "Partner With Us",
    guided: "Guided Tour",
    weatherNow: "Youngstown Weather",
    whyTitle: "Why this ecosystem matters",
    whyBody:
      "Families are facing rising food costs, limited access to fresh food, and increasing dependence on overprocessed options. Bronson Family Farm responds by restoring land, growing food, supporting wellness, creating workforce pathways, and building a welcoming place people want to return to again and again.",
    chooseRole: "Choose a pathway",
    customer: "Customer",
    grower: "Grower",
    youth: "Youth Workforce",
    guest: "Guest & Community",
    partner: "Partner / Funder",
    story: "Story",
    back: "Back",
    home: "Home",
    next: "Next",
    liveWeather: "Live weather view",
    recipes: "Recipes",
    nutrition: "Nutrition Guidance",
    preorder: "Preorder & Pickup",
    shopperHistory: "Buying Patterns & Preferences",
    sell: "Sell Through the Ecosystem",
    crop: "Crop Planning Calendar",
    training: "Grower Training",
    distribution: "Distribution Pathways",
    learn: "Hands-On Learning",
    support: "Supervisor & Support Staff",
    certifications: "Skills & Readiness",
    wellness: "Family Wellness Support",
    events: "Events & Tours",
    volunteer: "Volunteer Opportunities",
    family: "Family-Friendly Activities",
    resources: "Community Resources",
    outcomes: "Outcomes & Alignment",
    acres: "Land Activation",
    jobs: "Workforce Pathways",
    food: "Food Access",
    sponsor: "Sponsorship Opportunities",
    closeTitle: "Ready to grow with Youngstown and beyond",
    closeBody:
      "Explore the ecosystem, experience the vision, and help scale a model that connects regenerative agriculture, community health, education, and economic opportunity.",
    scheduleTour: "Schedule a Tour",
    contact: "Contact",
    developed: "Developed by Bronson Family Farm",
    enterStore: "Enter GrownBy Marketplace",
    weatherCard: "Current Conditions",
    eventsCard: "Upcoming Highlights",
    scan: "QR Check-In Experience",
    demoMode: "Funder-Ready Demo",
    narrationOn: "Narration On",
    narrationOff: "Narration Off",
  },
  es: {
    portalTitle: "Bronson Family Farm",
    portalSubtitle:
      "Una finca regenerativa y ecosistema comunitario donde la tierra se convierte en alimento, el alimento en bienestar y el bienestar en oportunidad.",
    enter: "Entrar a la Demo",
    marketplace: "Mercado",
    partners: "Asóciese con Nosotros",
    guided: "Recorrido Guiado",
    weatherNow: "Clima en Youngstown",
    whyTitle: "Por qué este ecosistema importa",
    whyBody:
      "Las familias enfrentan altos costos de alimentos, acceso limitado a productos frescos y dependencia creciente de opciones ultraprocesadas. Bronson Family Farm responde restaurando la tierra, cultivando alimentos, apoyando el bienestar y creando oportunidades laborales.",
    chooseRole: "Elija una ruta",
    customer: "Cliente",
    grower: "Productor",
    youth: "Juventud Laboral",
    guest: "Invitado y Comunidad",
    partner: "Socio / Financiador",
    story: "Historia",
    back: "Atrás",
    home: "Inicio",
    next: "Siguiente",
    liveWeather: "Ver clima en vivo",
    recipes: "Recetas",
    nutrition: "Guía Nutricional",
    preorder: "Preorden y Recogida",
    shopperHistory: "Hábitos de Compra",
    sell: "Vender en el Ecosistema",
    crop: "Calendario de Cultivo",
    training: "Capacitación",
    distribution: "Rutas de Distribución",
    learn: "Aprendizaje Práctico",
    support: "Supervisor y Personal de Apoyo",
    certifications: "Habilidades y Preparación",
    wellness: "Apoyo al Bienestar Familiar",
    events: "Eventos y Recorridos",
    volunteer: "Oportunidades de Voluntariado",
    family: "Actividades Familiares",
    resources: "Recursos Comunitarios",
    outcomes: "Resultados y Alineación",
    acres: "Activación de Terreno",
    jobs: "Rutas Laborales",
    food: "Acceso a Alimentos",
    sponsor: "Oportunidades de Patrocinio",
    closeTitle: "Listos para crecer con Youngstown y más allá",
    closeBody:
      "Explore el ecosistema, experimente la visión y ayude a escalar un modelo que conecta agricultura regenerativa, salud comunitaria, educación y oportunidad económica.",
    scheduleTour: "Programar un Recorrido",
    contact: "Contacto",
    developed: "Desarrollado por Bronson Family Farm",
    enterStore: "Entrar al Mercado GrownBy",
    weatherCard: "Condiciones Actuales",
    eventsCard: "Próximos Destacados",
    scan: "Experiencia de Registro QR",
    demoMode: "Demo para Financiadores",
    narrationOn: "Narración Activada",
    narrationOff: "Narración Desactivada",
  },
  tl: {
    portalTitle: "Bronson Family Farm",
    portalSubtitle:
      "Isang regenerative farm at community ecosystem kung saan ang lupa ay nagiging pagkain, ang pagkain ay nagiging kalusugan, at ang kalusugan ay nagiging oportunidad.",
    enter: "Pumasok sa Demo",
    marketplace: "Pamilihan",
    partners: "Makipag-Partner",
    guided: "May Gabay na Tour",
    weatherNow: "Panahon sa Youngstown",
    whyTitle: "Bakit mahalaga ang ecosystem na ito",
    whyBody:
      "Tumataas ang halaga ng pagkain, kulang ang access sa sariwang ani, at dumarami ang pagdepende sa overprocessed na pagkain. Tumutugon ang Bronson Family Farm sa pamamagitan ng pagpapanumbalik ng lupa, pagtatanim ng pagkain, at paglikha ng oportunidad.",
    chooseRole: "Pumili ng landas",
    customer: "Mamimili",
    grower: "Magsasaka",
    youth: "Kabataang Workforce",
    guest: "Bisita at Komunidad",
    partner: "Kasosyo / Pondo",
    story: "Kuwento",
    back: "Bumalik",
    home: "Bahay",
    next: "Susunod",
    liveWeather: "Live na panahon",
    recipes: "Mga Recipe",
    nutrition: "Gabay sa Nutrisyon",
    preorder: "Preorder at Pickup",
    shopperHistory: "Buying Patterns",
    sell: "Magbenta sa Ecosystem",
    crop: "Kalendaryo ng Pagtatanim",
    training: "Pagsasanay",
    distribution: "Pamamaraan ng Distribusyon",
    learn: "Aktuwal na Pagkatuto",
    support: "Supervisor at Support Staff",
    certifications: "Kasanayan at Kahandaan",
    wellness: "Suporta sa Pamilya",
    events: "Mga Event at Tour",
    volunteer: "Pagboboluntaryo",
    family: "Pampamilyang Aktibidad",
    resources: "Resource ng Komunidad",
    outcomes: "Mga Resulta",
    acres: "Pag-activate ng Lupa",
    jobs: "Landas sa Trabaho",
    food: "Access sa Pagkain",
    sponsor: "Sponsorship",
    closeTitle: "Handa nang lumago kasama ang Youngstown at higit pa",
    closeBody:
      "Tuklasin ang ecosystem, maranasan ang bisyon, at tumulong sa pagpapalawak ng modelong nagdurugtong sa agrikultura, kalusugan, edukasyon, at oportunidad.",
    scheduleTour: "Mag-iskedyul ng Tour",
    contact: "Makipag-ugnayan",
    developed: "Binuo ng Bronson Family Farm",
    enterStore: "Pumasok sa GrownBy Marketplace",
    weatherCard: "Kasalukuyang Kalagayan",
    eventsCard: "Mga Paparating na Tampok",
    scan: "QR Check-In Experience",
    demoMode: "Demo para sa Funders",
    narrationOn: "Bukas ang Narration",
    narrationOff: "Patay ang Narration",
  },
  it: {
    portalTitle: "Bronson Family Farm",
    portalSubtitle:
      "Una fattoria rigenerativa e un ecosistema comunitario dove la terra diventa cibo, il cibo diventa benessere e il benessere diventa opportunità.",
    enter: "Entra nella Demo",
    marketplace: "Mercato",
    partners: "Collabora con Noi",
    guided: "Tour Guidato",
    weatherNow: "Meteo di Youngstown",
    whyTitle: "Perché questo ecosistema conta",
    whyBody:
      "Le famiglie affrontano l'aumento dei costi alimentari, accesso limitato al cibo fresco e crescente dipendenza da opzioni ultraprocessate. Bronson Family Farm risponde rigenerando la terra, coltivando cibo e creando opportunità.",
    chooseRole: "Scegli un percorso",
    customer: "Cliente",
    grower: "Coltivatore",
    youth: "Forza Lavoro Giovanile",
    guest: "Ospite e Comunità",
    partner: "Partner / Finanziatore",
    story: "Storia",
    back: "Indietro",
    home: "Home",
    next: "Avanti",
    liveWeather: "Meteo in diretta",
    recipes: "Ricette",
    nutrition: "Guida Nutrizionale",
    preorder: "Preordine e Ritiro",
    shopperHistory: "Abitudini di Acquisto",
    sell: "Vendi nell'Ecosistema",
    crop: "Calendario delle Colture",
    training: "Formazione",
    distribution: "Canali di Distribuzione",
    learn: "Apprendimento Pratico",
    support: "Supervisore e Supporto",
    certifications: "Competenze e Preparazione",
    wellness: "Supporto al Benessere Familiare",
    events: "Eventi e Visite",
    volunteer: "Volontariato",
    family: "Attività per Famiglie",
    resources: "Risorse Comunitarie",
    outcomes: "Risultati e Allineamento",
    acres: "Attivazione del Terreno",
    jobs: "Percorsi di Lavoro",
    food: "Accesso al Cibo",
    sponsor: "Opportunità di Sponsorizzazione",
    closeTitle: "Pronti a crescere con Youngstown e oltre",
    closeBody:
      "Esplora l'ecosistema, vivi la visione e aiuta a far crescere un modello che unisce agricoltura rigenerativa, salute comunitaria, educazione e opportunità economica.",
    scheduleTour: "Prenota una Visita",
    contact: "Contatto",
    developed: "Sviluppato da Bronson Family Farm",
    enterStore: "Entra nel Marketplace GrownBy",
    weatherCard: "Condizioni Attuali",
    eventsCard: "Prossimi Appuntamenti",
    scan: "Esperienza Check-In QR",
    demoMode: "Demo per Finanziatori",
    narrationOn: "Narrazione Attiva",
    narrationOff: "Narrazione Disattiva",
  },
  patwa: {
    portalTitle: "Bronson Family Farm",
    portalSubtitle:
      "A regenerative farm an community ecosystem weh tun land ina food, food ina wellness, an wellness ina opportunity.",
    enter: "Go Ina di Demo",
    marketplace: "Marketplace",
    partners: "Partner Wid Wi",
    guided: "Guided Tour",
    weatherNow: "Youngstown Weather",
    whyTitle: "Why dis ecosystem matter",
    whyBody:
      "Food cost a rise, fresh food hard fi reach, an too much family haffi lean pan overprocessed food. Bronson Family Farm a restore di land, grow good food, support wellness, an build opportunity.",
    chooseRole: "Choose yuh pathway",
    customer: "Customer",
    grower: "Grower",
    youth: "Youth Workforce",
    guest: "Guest an Community",
    partner: "Partner / Funder",
    story: "Story",
    back: "Go Back",
    home: "Home",
    next: "Next",
    liveWeather: "Live weather",
    recipes: "Recipes",
    nutrition: "Nutrition Guidance",
    preorder: "Preorder an Pickup",
    shopperHistory: "Buying Habits",
    sell: "Sell Through di Ecosystem",
    crop: "Crop Planning Calendar",
    training: "Grower Training",
    distribution: "Distribution Pathways",
    learn: "Hands-On Learning",
    support: "Supervisor an Support Staff",
    certifications: "Skills an Readiness",
    wellness: "Family Wellness Support",
    events: "Events an Tours",
    volunteer: "Volunteer Opportunities",
    family: "Family Activities",
    resources: "Community Resources",
    outcomes: "Outcomes an Alignment",
    acres: "Land Activation",
    jobs: "Workforce Pathways",
    food: "Food Access",
    sponsor: "Sponsorship Opportunity",
    closeTitle: "Ready fi grow wid Youngstown an beyond",
    closeBody:
      "Explore di ecosystem, experience di vision, an help scale a model weh connect regenerative farming, community health, education, an economic opportunity.",
    scheduleTour: "Schedule a Tour",
    contact: "Contact",
    developed: "Developed by Bronson Family Farm",
    enterStore: "Enter GrownBy Marketplace",
    weatherCard: "Current Conditions",
    eventsCard: "Upcoming Highlights",
    scan: "QR Check-In Experience",
    demoMode: "Funder-Ready Demo",
    narrationOn: "Narration On",
    narrationOff: "Narration Off",
  },
  he: {
    portalTitle: "Bronson Family Farm",
    portalSubtitle:
      "חווה רגנרטיבית ומערכת קהילתית שבה האדמה הופכת למזון, המזון לבריאות, והבריאות להזדמנות.",
    enter: "כניסה להדגמה",
    marketplace: "שוק",
    partners: "שותפות איתנו",
    guided: "סיור מודרך",
    weatherNow: "מזג האוויר ביונגסטאון",
    whyTitle: "למה המערכת הזאת חשובה",
    whyBody:
      "משפחות מתמודדות עם עלויות מזון עולות, גישה מוגבלת למזון טרי ותלות גוברת במזון מעובד. Bronson Family Farm משיבה באמצעות שיקום הקרקע, גידול מזון ויצירת הזדמנויות.",
    chooseRole: "בחרו מסלול",
    customer: "לקוח",
    grower: "מגדל",
    youth: "כוח עבודה צעיר",
    guest: "אורח וקהילה",
    partner: "שותף / מממן",
    story: "סיפור",
    back: "חזרה",
    home: "בית",
    next: "הבא",
    liveWeather: "מזג אוויר חי",
    recipes: "מתכונים",
    nutrition: "הדרכה תזונתית",
    preorder: "הזמנה ואיסוף",
    shopperHistory: "דפוסי קנייה",
    sell: "מכירה דרך המערכת",
    crop: "לוח תכנון גידולים",
    training: "הכשרת מגדלים",
    distribution: "נתיבי הפצה",
    learn: "למידה מעשית",
    support: "מפקח וצוות תמיכה",
    certifications: "מיומנויות ומוכנות",
    wellness: "תמיכת רווחת המשפחה",
    events: "אירועים וסיורים",
    volunteer: "הזדמנויות התנדבות",
    family: "פעילויות לכל המשפחה",
    resources: "משאבי קהילה",
    outcomes: "תוצאות והתאמה",
    acres: "הפעלת קרקע",
    jobs: "מסלולי תעסוקה",
    food: "גישה למזון",
    sponsor: "הזדמנויות חסות",
    closeTitle: "מוכנים לצמוח עם יונגסטאון ומעבר",
    closeBody:
      "גלו את המערכת, חוו את החזון, ועזרו להרחיב מודל שמחבר חקלאות רגנרטיבית, בריאות קהילתית, חינוך והזדמנות כלכלית.",
    scheduleTour: "קבעו סיור",
    contact: "יצירת קשר",
    developed: "פותח על ידי Bronson Family Farm",
    enterStore: "כניסה לשוק GrownBy",
    weatherCard: "תנאים נוכחיים",
    eventsCard: "אירועים קרובים",
    scan: "חוויית צ'ק-אין ב-QR",
    demoMode: "הדגמה למממנים",
    narrationOn: "קריינות פעילה",
    narrationOff: "קריינות כבויה",
  },
};

const WEATHER = {
  location: "Youngstown, OH",
  temp: "58°F",
  condition: "Partly sunny",
  detail: "A good day for field visits, tours, and spring growing.",
  link: "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121",
};

const EVENTS = [
  {
    title: "Growers Supply Market",
    time: "May 16, 2026 · 9:00 AM–2:00 PM",
    detail: "Off-grid market day with vendors, demonstrations, education, and QR-based entry.",
  },
  {
    title: "Youth Workforce Pathway Preview",
    time: "Seasonal training cycle",
    detail: "Hands-on agriculture, support systems, and readiness-building for youth participants.",
  },
  {
    title: "Community Tours & Partner Visits",
    time: "By invitation and scheduled appointments",
    detail: "Experience the regenerative vision, land activation, and partnership opportunities firsthand.",
  },
];

const STORY_PANELS = [
  {
    icon: Trees,
    title: "Restore the land",
    body: "Transform underused land into a regenerative destination that produces food, learning, and belonging.",
  },
  {
    icon: HeartPulse,
    title: "Support wellness",
    body: "Help families access nourishing food, healthier choices, and community-centered wellness pathways.",
  },
  {
    icon: GraduationCap,
    title: "Build opportunity",
    body: "Create visible pathways for youth, growers, volunteers, and partners to engage and grow.",
  },
];

const ROLE_DATA = {
  customer: {
    icon: ShoppingBasket,
    badge: "Marketplace + Nutrition",
    intro:
      "The customer pathway welcomes families and shoppers into a living food ecosystem with produce access, recipes, nutrition support, and a direct route to Bronson Family Farm's GrownBy marketplace.",
    highlights: [
      { icon: ShoppingBasket, title: "Shop fresh produce", body: "Browse fresh seasonal offerings, preorder online, and plan convenient pickup." },
      { icon: BookOpen, title: "Recipes & food ideas", body: "Explore simple meal inspiration that helps families use fresh produce with confidence." },
      { icon: HeartPulse, title: "Nutrition guidance", body: "See practical wellness messaging that supports better everyday food choices." },
      { icon: ScanLine, title: "Preorder & QR pickup", body: "Connect online orders to event and market pickup experiences." },
    ],
    actionLabel: "Enter GrownBy Marketplace",
    actionHref: "https://grownby.com/farms/bronson-family-farm/shop",
    sideCards: ["Recipes", "Nutrition Guidance", "Preorder & Pickup", "Buying Patterns & Preferences"],
  },
  grower: {
    icon: Sprout,
    badge: "Production + Distribution",
    intro:
      "The grower pathway shows how farmers and producers can plug into a welcoming ecosystem for training, planning, visibility, shared infrastructure, and market participation.",
    highlights: [
      { icon: Sprout, title: "Crop planning", body: "Use a clear seasonal rhythm to think about what to sow, grow, and prepare next." },
      { icon: Tractor, title: "Training & support", body: "Access practical guidance for production, ecosystem participation, and local collaboration." },
      { icon: BadgeCheck, title: "Distribution pathways", body: "Connect to sales, pickups, events, and future grower network opportunities." },
      { icon: Leaf, title: "Regenerative identity", body: "Participate in a model grounded in stewardship, land restoration, and community value." },
    ],
    actionLabel: "Explore Grower Pathway",
    actionHref: "#grower-pathway",
    sideCards: ["Sell Through the Ecosystem", "Crop Planning Calendar", "Grower Training", "Distribution Pathways"],
  },
  youth: {
    icon: GraduationCap,
    badge: "Learning + Support",
    intro:
      "The youth workforce pathway presents farming as a doorway into practical skills, confidence, mentorship, wellness support, and future readiness.",
    highlights: [
      { icon: GraduationCap, title: "Hands-on learning", body: "Move beyond theory into planting, growing, setup, teamwork, and real-world tasks." },
      { icon: ShieldCheck, title: "Supervisor support", body: "Youth participants receive guidance from supervisors and support staff resources." },
      { icon: HeartPulse, title: "Wellness-centered environment", body: "The pathway is designed to support whole-person growth, stability, and encouragement." },
      { icon: BadgeCheck, title: "Readiness building", body: "Grow responsibility, communication, confidence, and transferable work habits." },
    ],
    actionLabel: "Explore Youth Pathway",
    actionHref: "#youth-pathway",
    sideCards: ["Hands-On Learning", "Supervisor & Support Staff", "Skills & Readiness", "Family Wellness Support"],
  },
  guest: {
    icon: Users,
    badge: "Experience + Return",
    intro:
      "The guest and community pathway invites people into a place they want to revisit for events, volunteerism, learning, family experiences, and meaningful connection to the vision.",
    highlights: [
      { icon: Users, title: "Events & tours", body: "Discover farm experiences, demonstrations, markets, and site visits." },
      { icon: HandHeart, title: "Volunteer engagement", body: "Find ways to participate, serve, and become part of a growing ecosystem." },
      { icon: Sun, title: "Welcoming atmosphere", body: "The environment is designed to feel warm, visually appealing, and worth returning to." },
      { icon: MapPin, title: "Place-based story", body: "Experience a regenerative model rooted in Youngstown land, people, and possibility." },
    ],
    actionLabel: "Plan a Visit",
    actionHref: "mailto:cburgess@bronsonfamilyfarm.com?subject=Schedule%20a%20Visit%20to%20Bronson%20Family%20Farm",
    sideCards: ["Events & Tours", "Volunteer Opportunities", "Family-Friendly Activities", "Community Resources"],
  },
  partner: {
    icon: Building2,
    badge: "Alignment + Investment",
    intro:
      "The partner and funder pathway translates the vision into outcomes: land activation, food access, workforce development, community wellness, and scalable collaboration.",
    highlights: [
      { icon: Trees, title: "Land activation", body: "Reclaim and restore underused land for regenerative agriculture and community benefit." },
      { icon: ShoppingBasket, title: "Food access", body: "Support healthier local food pathways and reduce barriers to fresh produce." },
      { icon: GraduationCap, title: "Workforce development", body: "Strengthen youth and community readiness through hands-on pathways." },
      { icon: Star, title: "Scalable impact", body: "Invest in a model that integrates education, health, agriculture, and local pride." },
    ],
    actionLabel: "Partner With Bronson Family Farm",
    actionHref: "mailto:cburgess@bronsonfamilyfarm.com?subject=Partnership%20Interest%20-%20Bronson%20Family%20Farm",
    sideCards: ["Outcomes & Alignment", "Land Activation", "Workforce Pathways", "Sponsorship Opportunities"],
  },
};

const ROLE_ORDER = ["customer", "grower", "youth", "guest", "partner"];

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function SectionShell({ children, className = "" }) {
  return (
    <div className={cx("relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-amber-300/10" />
      <div className="relative">{children}</div>
    </div>
  );
}

function ActionButton({ children, onClick, href, primary = false, icon: Icon, small = false }) {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-full border transition-all duration-200",
    small ? "px-4 py-2 text-sm" : "px-5 py-3 text-sm md:text-base",
    primary
      ? "border-emerald-300/50 bg-emerald-400/20 text-white hover:bg-emerald-400/30"
      : "border-white/20 bg-white/10 text-white hover:bg-white/15"
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={classes}>
        {Icon ? <Icon className="h-4 w-4" /> : null}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}

function MetricCard({ label, value, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-black/20 p-4 text-white">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  const [screen, setScreen] = useState("portal");
  const [role, setRole] = useState("customer");
  const [narrationOn, setNarrationOn] = useState(false);
  const [guidedMode, setGuidedMode] = useState(false);
  const [guidedIndex, setGuidedIndex] = useState(0);
  const [weatherPulse, setWeatherPulse] = useState(true);
  const speechRef = useRef(null);

  const t = COPY[language] || COPY.en;
  const rtl = language === "he";

  const roleTitles = useMemo(
    () => ({
      customer: t.customer,
      grower: t.grower,
      youth: t.youth,
      guest: t.guest,
      partner: t.partner,
    }),
    [t]
  );

  useEffect(() => {
    const timer = setInterval(() => setWeatherPulse((v) => !v), 3200);
    return () => clearInterval(timer);
  }, []);

  const speak = (text) => {
    if (!narrationOn || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    const voiceHints = {
      en: "English",
      es: "Spanish",
      tl: "Filipino",
      it: "Italian",
      patwa: "English",
      he: "Hebrew",
    };
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) => v.lang.toLowerCase().includes(language)) || voices.find((v) => v.name.includes(voiceHints[language] || ""));
    if (preferred) utter.voice = preferred;
    speechRef.current = utter;
    window.speechSynthesis.speak(utter);
  };

  useEffect(() => {
    const texts = {
      portal: `${t.portalTitle}. ${t.portalSubtitle}`,
      story: `${t.whyTitle}. ${t.whyBody}`,
      roles: `${t.chooseRole}. ${Object.values(roleTitles).join(", ")}.`,
      customer: `${roleTitles.customer}. ${ROLE_DATA.customer.intro}`,
      grower: `${roleTitles.grower}. ${ROLE_DATA.grower.intro}`,
      youth: `${roleTitles.youth}. ${ROLE_DATA.youth.intro}`,
      guest: `${roleTitles.guest}. ${ROLE_DATA.guest.intro}`,
      partner: `${roleTitles.partner}. ${ROLE_DATA.partner.intro}`,
      close: `${t.closeTitle}. ${t.closeBody}`,
    };
    const key = screen === "role" ? role : screen;
    if (texts[key]) speak(texts[key]);
  }, [screen, role, narrationOn, language]);

  useEffect(() => {
    if (!guidedMode) return;
    const steps = ["portal", "story", "roles", "customer", "grower", "youth", "guest", "partner", "close"];
    const current = steps[guidedIndex] || "portal";
    if (current === "customer" || current === "grower" || current === "youth" || current === "guest" || current === "partner") {
      setRole(current);
      setScreen("role");
    } else {
      setScreen(current);
    }
  }, [guidedMode, guidedIndex]);

  const nextGuided = () => {
    const steps = ["portal", "story", "roles", "customer", "grower", "youth", "guest", "partner", "close"];
    if (guidedIndex < steps.length - 1) setGuidedIndex((v) => v + 1);
    else {
      setGuidedMode(false);
      setGuidedIndex(0);
      setScreen("close");
    }
  };

  const startGuided = () => {
    setGuidedMode(true);
    setGuidedIndex(0);
    setScreen("portal");
  };

  const openRole = (key) => {
    setGuidedMode(false);
    setRole(key);
    setScreen("role");
  };

  const currentRole = ROLE_DATA[role];
  const RoleIcon = currentRole?.icon || ShoppingBasket;

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="min-h-screen bg-[#08130f] text-white">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_25%),linear-gradient(180deg,#08130f_0%,#0c1a15_35%,#10271e_100%)]" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <SectionShell className="mb-6 px-4 py-4 md:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/20 ring-1 ring-emerald-200/30">
                <Trees className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight">Bronson Family Farm</div>
                <div className="text-sm text-white/65">{t.demoMode} · {t.developed}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-sm text-white/80">
                <Globe2 className="h-4 w-4" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent outline-none"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.key} value={lang.key} className="text-black">
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              <ActionButton
                onClick={() => setNarrationOn((v) => !v)}
                icon={narrationOn ? Volume2 : VolumeX}
                small
              >
                {narrationOn ? t.narrationOn : t.narrationOff}
              </ActionButton>

              <ActionButton onClick={() => setScreen("portal")} icon={Home} small>
                {t.home}
              </ActionButton>
            </div>
          </div>
        </SectionShell>

        {screen === "portal" && (
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <SectionShell className="p-6 md:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-100/80">
                <Leaf className="h-3.5 w-3.5" />
                regenerative agriculture · food access · workforce development
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {t.portalTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/78 md:text-lg">
                {t.portalSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton onClick={() => setScreen("story")} primary icon={ArrowRight}>
                  {t.enter}
                </ActionButton>
                <ActionButton href="https://grownby.com/farms/bronson-family-farm/shop" icon={ShoppingBasket}>
                  {t.marketplace}
                </ActionButton>
                <ActionButton href="mailto:cburgess@bronsonfamilyfarm.com?subject=Partnership%20Interest%20-%20Bronson%20Family%20Farm" icon={Building2}>
                  {t.partners}
                </ActionButton>
                <ActionButton onClick={startGuided} icon={PlayCircle}>
                  {t.guided}
                </ActionButton>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <MetricCard label="Acres of possibility" value="118+" icon={Trees} />
                <MetricCard label="Community-centered pathways" value="5" icon={Users} />
                <MetricCard label="Languages in demo" value="6" icon={Globe2} />
              </div>
            </SectionShell>

            <div className="grid gap-6">
              <SectionShell className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-white/50">{t.weatherCard}</div>
                    <div className="mt-1 text-lg font-semibold">{t.weatherNow}</div>
                  </div>
                  <CloudSun className={cx("h-8 w-8 transition-transform duration-700", weatherPulse && "scale-110")} />
                </div>
                <div className="text-3xl font-semibold">{WEATHER.temp}</div>
                <div className="mt-1 text-white/75">{WEATHER.condition}</div>
                <div className="mt-1 text-sm text-white/55">{WEATHER.location}</div>
                <p className="mt-3 text-sm leading-6 text-white/70">{WEATHER.detail}</p>
                <div className="mt-4">
                  <ActionButton href={WEATHER.link} icon={ExternalLink} small>
                    {t.liveWeather}
                  </ActionButton>
                </div>
              </SectionShell>

              <SectionShell className="p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-white/50">{t.eventsCard}</div>
                <div className="mt-4 space-y-4">
                  {EVENTS.map((event) => (
                    <div key={event.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-start gap-3">
                        <CalendarDays className="mt-0.5 h-5 w-5 text-white/75" />
                        <div>
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-emerald-100/80">{event.time}</div>
                          <div className="mt-1 text-sm leading-6 text-white/65">{event.detail}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionShell>
            </div>
          </div>
        )}

        {screen === "story" && (
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <SectionShell className="p-6 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                {t.story}
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">{t.whyTitle}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 md:text-lg">
                {t.whyBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton onClick={() => setScreen("roles")} primary icon={ArrowRight}>
                  {t.next}
                </ActionButton>
                <ActionButton onClick={() => setScreen("portal")} icon={ArrowLeft}>
                  {t.back}
                </ActionButton>
              </div>
            </SectionShell>

            <div className="grid gap-4">
              {STORY_PANELS.map((panel) => {
                const Icon = panel.icon;
                return (
                  <SectionShell key={panel.title} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-xl font-medium">{panel.title}</div>
                        <div className="mt-2 text-sm leading-6 text-white/72">{panel.body}</div>
                      </div>
                    </div>
                  </SectionShell>
                );
              })}
            </div>
          </div>
        )}

        {screen === "roles" && (
          <div className="space-y-6">
            <SectionShell className="p-6 md:p-8">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.chooseRole}</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/74">
                Move through the ecosystem based on how people actually engage with Bronson Family Farm: as customers, growers, youth participants, guests, and partners.
              </p>
            </SectionShell>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {ROLE_ORDER.map((key) => {
                const data = ROLE_DATA[key];
                const Icon = data.icon;
                return (
                  <button
                    key={key}
                    onClick={() => openRole(key)}
                    className="group rounded-[28px] border border-white/15 bg-white/10 p-5 text-left backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/20 ring-1 ring-white/10">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="mt-5 text-xl font-semibold tracking-tight">{roleTitles[key]}</div>
                    <div className="mt-2 text-sm text-emerald-100/75">{data.badge}</div>
                    <p className="mt-3 text-sm leading-6 text-white/68">{data.intro}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/80">
                      Explore
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {screen === "role" && currentRole && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionShell className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-200/20">
                  <RoleIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/50">{currentRole.badge}</div>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{roleTitles[role]}</h2>
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/76 md:text-lg">
                {currentRole.intro}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {currentRole.highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-3xl border border-white/12 bg-black/20 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-lg font-medium">{item.title}</div>
                      <div className="mt-2 text-sm leading-6 text-white/68">{item.body}</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton href={currentRole.actionHref} primary icon={role === "customer" ? ShoppingBasket : ArrowRight}>
                  {currentRole.actionLabel}
                </ActionButton>
                <ActionButton onClick={() => setScreen("roles")} icon={ArrowLeft}>
                  {t.back}
                </ActionButton>
                {guidedMode && (
                  <ActionButton onClick={nextGuided} icon={ArrowRight}>
                    {t.next}
                  </ActionButton>
                )}
              </div>
            </SectionShell>

            <div className="grid gap-5">
              <SectionShell className="p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-white/50">Experience modules</div>
                <div className="mt-4 grid gap-3">
                  {currentRole.sideCards.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </SectionShell>

              <SectionShell className="p-5">
                <div className="flex items-center gap-3">
                  <ScanLine className="h-5 w-5" />
                  <div className="text-lg font-medium">{t.scan}</div>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  Demonstrates private RSVP flow, Eventbrite Organizer scanning, arrival check-in, role-based welcome, and a polished guest experience at the gate.
                </p>
                <div className="mt-4 rounded-3xl border border-dashed border-white/20 bg-white/5 p-4 text-sm text-white/65">
                  Private RSVP → QR confirmation → gate scan → event journey → return engagement
                </div>
              </SectionShell>
            </div>
          </div>
        )}

        {screen === "close" && (
          <SectionShell className="p-6 md:p-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                <Star className="h-3.5 w-3.5" />
                final invitation
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">{t.closeTitle}</h2>
              <p className="mt-5 text-base leading-8 text-white/76 md:text-lg">{t.closeBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton href="mailto:cburgess@bronsonfamilyfarm.com?subject=Schedule%20a%20Tour%20-%20Bronson%20Family%20Farm" primary icon={MapPin}>
                  {t.scheduleTour}
                </ActionButton>
                <ActionButton href="mailto:cburgess@bronsonfamilyfarm.com" icon={Mail}>
                  {t.contact}
                </ActionButton>
                <ActionButton href="tel:3302751604" icon={Phone}>
                  330-275-1604
                </ActionButton>
                <ActionButton href="https://grownby.com/farms/bronson-family-farm/shop" icon={ShoppingBasket}>
                  {t.enterStore}
                </ActionButton>
              </div>
            </div>
          </SectionShell>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-white/45">
          <div>{t.developed}</div>
          <div className="flex items-center gap-4">
            <span>bronsonfamilyfarm.com</span>
            <span>Youngstown, Ohio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
