import React, { useEffect, useMemo, useRef, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "it" | "patwa" | "he";
type ScreenKey =
  | "home"
  | "story"
  | "guest"
  | "customer"
  | "grower"
  | "producer"
  | "youth"
  | "supervisor"
  | "marketplace"
  | "calendar"
  | "events"
  | "education"
  | "nutrition"
  | "recipes"
  | "weather";

const images = {
  hero: "/GrowArea2.jpg",
  story: "/SAM_0220.JPG",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  grower: "/SAM_0223.JPG",
  producer: "/SAM_0229.JPG",
  youth: "/SAM_0238.JPG",
  supervisor: "/SAM_0249.JPG",
  marketplace: "/SAM_0257.JPG",
  calendar: "/SAM_0274.JPG",
  events: "/SAM_0275.JPG",
  education: "/SAM_0281.JPG",
  nutrition: "/SAM_0282.JPG",
  recipes: "/SAM_0286.JPG",
  weather: "/SAM_0288.JPG",
  gallery1: "/SAM_0289.JPG",
  gallery2: "/SAM_0290.JPG",
  gallery3: "/SAM_0291.JPG",
  gallery4: "/SAM_0293.JPG",
  gallery5: "/SAM_0301.JPG",
  gallery6: "/SAM_0303.JPG",
  gallery7: "/SAM_0305.JPG",
  gallery8: "/SAM_0307.JPG",
  gallery9: "/SAM_0308.JPG",
  gallery10: "/SAM_0310.JPG",
  gallery11: "/SAM_0313.JPG",
};

const languages: { key: LanguageKey; label: string }[] = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "patwa", label: "Patwa" },
  { key: "he", label: "עברית" },
];

const appText = {
  en: {
    brand: "Bronson Family Farm",
    subbrand: "Developed by Bronson Family Farm",
    enterDemo: "Enter Live Demo",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Tour",
    chooseLanguage: "Choose Language",
    returnHome: "Back to Entrance",
    explore: "Explore the Ecosystem",
    welcomeTitle: "A living farm ecosystem, not just a website.",
    welcomeBody:
      "Bronson Family Farm is building a welcoming, regenerative, role-based ecosystem that connects food, land, education, community wellness, workforce pathways, and marketplace access.",
    quickLabel: "Explore by pathway",
    cards: {
      story: "Our Story",
      guest: "Guest",
      customer: "Customer",
      grower: "Grower",
      producer: "Value-Added Producer",
      youth: "Youth Workforce",
      supervisor: "Supervisor",
      marketplace: "Marketplace",
      calendar: "Crop Planning",
      events: "Events",
      education: "Education",
      nutrition: "Nutrition",
      recipes: "Recipes",
      weather: "Weather",
    },
  },
  es: {
    brand: "Bronson Family Farm",
    subbrand: "Desarrollado por Bronson Family Farm",
    enterDemo: "Entrar al Demo",
    guidedTour: "Iniciar Recorrido Guiado",
    stopTour: "Detener Recorrido",
    chooseLanguage: "Elegir Idioma",
    returnHome: "Volver al Inicio",
    explore: "Explorar el Ecosistema",
    welcomeTitle: "Un ecosistema agrícola vivo, no solo un sitio web.",
    welcomeBody:
      "Bronson Family Farm está construyendo un ecosistema regenerativo y acogedor que conecta alimentos, tierra, educación, bienestar comunitario, oportunidades laborales y acceso al mercado.",
    quickLabel: "Explorar por ruta",
    cards: {
      story: "Nuestra Historia",
      guest: "Invitado",
      customer: "Cliente",
      grower: "Productor",
      producer: "Productor de Valor Agregado",
      youth: "Fuerza Laboral Juvenil",
      supervisor: "Supervisor",
      marketplace: "Mercado",
      calendar: "Planificación de Cultivos",
      events: "Eventos",
      education: "Educación",
      nutrition: "Nutrición",
      recipes: "Recetas",
      weather: "Clima",
    },
  },
  tl: {
    brand: "Bronson Family Farm",
    subbrand: "Binuo ng Bronson Family Farm",
    enterDemo: "Pumasok sa Demo",
    guidedTour: "Simulan ang Guided Tour",
    stopTour: "Itigil ang Tour",
    chooseLanguage: "Pumili ng Wika",
    returnHome: "Bumalik sa Simula",
    explore: "Tuklasin ang Ecosystem",
    welcomeTitle: "Isang buhay na farm ecosystem, hindi lang website.",
    welcomeBody:
      "Ang Bronson Family Farm ay bumubuo ng isang maganda at regenerative na ecosystem para sa pagkain, lupa, edukasyon, kalusugan, trabaho, at access sa pamilihan.",
    quickLabel: "Tuklasin ayon sa papel",
    cards: {
      story: "Ating Kuwento",
      guest: "Bisita",
      customer: "Customer",
      grower: "Grower",
      producer: "Value-Added Producer",
      youth: "Youth Workforce",
      supervisor: "Supervisor",
      marketplace: "Marketplace",
      calendar: "Crop Planning",
      events: "Events",
      education: "Education",
      nutrition: "Nutrition",
      recipes: "Recipes",
      weather: "Weather",
    },
  },
  it: {
    brand: "Bronson Family Farm",
    subbrand: "Sviluppato da Bronson Family Farm",
    enterDemo: "Entra nel Demo",
    guidedTour: "Avvia Tour Guidato",
    stopTour: "Ferma Tour",
    chooseLanguage: "Scegli Lingua",
    returnHome: "Torna all'Ingresso",
    explore: "Esplora l'Ecosistema",
    welcomeTitle: "Un ecosistema agricolo vivo, non solo un sito web.",
    welcomeBody:
      "Bronson Family Farm sta costruendo un ecosistema rigenerativo e accogliente che collega cibo, terra, educazione, benessere, lavoro e accesso al mercato.",
    quickLabel: "Esplora per percorso",
    cards: {
      story: "La Nostra Storia",
      guest: "Ospite",
      customer: "Cliente",
      grower: "Coltivatore",
      producer: "Produttore a Valore Aggiunto",
      youth: "Forza Lavoro Giovanile",
      supervisor: "Supervisore",
      marketplace: "Mercato",
      calendar: "Pianificazione Colture",
      events: "Eventi",
      education: "Educazione",
      nutrition: "Nutrizione",
      recipes: "Ricette",
      weather: "Meteo",
    },
  },
  patwa: {
    brand: "Bronson Family Farm",
    subbrand: "Developed by Bronson Family Farm",
    enterDemo: "Enter Di Demo",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Tour",
    chooseLanguage: "Choose Language",
    returnHome: "Back to Entrance",
    explore: "Explore Di Ecosystem",
    welcomeTitle: "A living farm ecosystem, not just one website.",
    welcomeBody:
      "Bronson Family Farm a build one warm, regenerative system weh connect food, land, learning, wellness, work pathways, an marketplace access.",
    quickLabel: "Explore by pathway",
    cards: {
      story: "Wi Story",
      guest: "Guest",
      customer: "Customer",
      grower: "Grower",
      producer: "Value-Added Producer",
      youth: "Youth Workforce",
      supervisor: "Supervisor",
      marketplace: "Marketplace",
      calendar: "Crop Planning",
      events: "Events",
      education: "Education",
      nutrition: "Nutrition",
      recipes: "Recipes",
      weather: "Weather",
    },
  },
  he: {
    brand: "Bronson Family Farm",
    subbrand: "פותח על ידי Bronson Family Farm",
    enterDemo: "כניסה לדמו",
    guidedTour: "התחל סיור מודרך",
    stopTour: "עצור סיור",
    chooseLanguage: "בחר שפה",
    returnHome: "חזרה לכניסה",
    explore: "גלו את המערכת",
    welcomeTitle: "מערכת חקלאית חיה, לא רק אתר אינטרנט.",
    welcomeBody:
      "Bronson Family Farm בונה מערכת מזמינה ומתחדשת שמחברת מזון, אדמה, חינוך, בריאות קהילתית, מסלולי עבודה וגישה לשוק.",
    quickLabel: "גלו לפי מסלול",
    cards: {
      story: "הסיפור שלנו",
      guest: "אורח",
      customer: "לקוח",
      grower: "מגדל",
      producer: "יצרן ערך מוסף",
      youth: "כוח עבודה לנוער",
      supervisor: "מפקח",
      marketplace: "שוק",
      calendar: "תכנון גידולים",
      events: "אירועים",
      education: "חינוך",
      nutrition: "תזונה",
      recipes: "מתכונים",
      weather: "מזג אוויר",
    },
  },
};

const screenContent: Record<
  ScreenKey,
  {
    title: string;
    image: string;
    description: string;
    actions?: { label: string; go: ScreenKey }[];
  }
> = {
  home: {
    title: "Bronson Family Farm",
    image: images.hero,
    description:
      "Step into the farm. Experience something different. This is a regenerative, role-based platform where guests, customers, growers, value-added producers, youth workers, and supervisors each have a pathway into the ecosystem.",
    actions: [
      { label: "Our Story", go: "story" },
      { label: "Guest", go: "guest" },
      { label: "Customer", go: "customer" },
      { label: "Grower", go: "grower" },
      { label: "Youth Workforce", go: "youth" },
      { label: "Marketplace", go: "marketplace" },
    ],
  },
  story: {
    title: "Our Story",
    image: images.story,
    description:
      "Bronson Family Farm honors family legacy, land stewardship, regenerative growing, agritourism, and community restoration. The platform exists to help people return again and again for learning, food access, events, workforce development, and connection.",
    actions: [
      { label: "Explore Events", go: "events" },
      { label: "Explore Marketplace", go: "marketplace" },
      { label: "Explore Education", go: "education" },
    ],
  },
  guest: {
    title: "Guest Pathway",
    image: images.guest,
    description:
      "Guests discover the farm through immersive storytelling, events, weather, seasonal visuals, guided experiences, and clear ways to return as supporters, volunteers, visitors, or future participants.",
    actions: [
      { label: "Events", go: "events" },
      { label: "Weather", go: "weather" },
      { label: "Our Story", go: "story" },
    ],
  },
  customer: {
    title: "Customer Pathway",
    image: images.customer,
    description:
      "Customers move easily from discovery to marketplace access, product browsing, nutrition education, seasonal recipes, and ongoing engagement. The goal is to make healthy local food inviting, useful, and easy to revisit.",
    actions: [
      { label: "Marketplace", go: "marketplace" },
      { label: "Nutrition", go: "nutrition" },
      { label: "Recipes", go: "recipes" },
    ],
  },
  grower: {
    title: "Grower Pathway",
    image: images.grower,
    description:
      "Growers gain entry to crop planning, seasonal coordination, events, educational resources, and a collaborative ecosystem built to support long-term agricultural participation and shared opportunity.",
    actions: [
      { label: "Crop Planning", go: "calendar" },
      { label: "Education", go: "education" },
      { label: "Events", go: "events" },
    ],
  },
  producer: {
    title: "Value-Added Producer",
    image: images.producer,
    description:
      "Value-added producers can explore future opportunities for branded goods, prepared foods, packaging, collaborative sales, and participation in a broader local ecosystem tied to agriculture and community commerce.",
    actions: [
      { label: "Marketplace", go: "marketplace" },
      { label: "Events", go: "events" },
      { label: "Education", go: "education" },
    ],
  },
  youth: {
    title: "Youth Workforce Program",
    image: images.youth,
    description:
      "The youth workforce pathway introduces young people to food systems, hands-on learning, work readiness, land stewardship, logistics, and guided support. This area is designed to feel active, encouraging, and full of possibility.",
    actions: [
      { label: "Supervisor Support", go: "supervisor" },
      { label: "Crop Planning", go: "calendar" },
      { label: "Education", go: "education" },
    ],
  },
  supervisor: {
    title: "Supervisor Pathway",
    image: images.supervisor,
    description:
      "Supervisors support the youth workforce experience with structure, care, guidance, logistics, role tracking, and wraparound support. This includes support staff resources tied to wellness and program success.",
    actions: [
      { label: "Youth Workforce", go: "youth" },
      { label: "Education", go: "education" },
      { label: "Events", go: "events" },
    ],
  },
  marketplace: {
    title: "Marketplace",
    image: images.marketplace,
    description:
      "The marketplace is the customer-facing bridge to GrownBy-style farm commerce. It is where shoppers can connect with seasonal produce, seedlings, educational offerings, and repeat visits shaped by healthy buying habits and food access.",
    actions: [
      { label: "Nutrition", go: "nutrition" },
      { label: "Recipes", go: "recipes" },
      { label: "Customer Pathway", go: "customer" },
    ],
  },
  calendar: {
    title: "Crop Planning Calendar",
    image: images.calendar,
    description:
      "This module represents crop planning, seasonal timing, grower coordination, and future-facing scheduling tools that help the ecosystem feel alive and useful across the growing season.",
    actions: [
      { label: "Grower Pathway", go: "grower" },
      { label: "Weather", go: "weather" },
      { label: "Events", go: "events" },
    ],
  },
  events: {
    title: "Events and Experiences",
    image: images.events,
    description:
      "Events invite the public into the land through Growers Supply Market experiences, demonstrations, education, agritourism, family engagement, and repeated opportunities to connect with the farm ecosystem.",
    actions: [
      { label: "Guest Pathway", go: "guest" },
      { label: "Marketplace", go: "marketplace" },
      { label: "Education", go: "education" },
    ],
  },
  education: {
    title: "Education and Learning",
    image: images.education,
    description:
      "Education resources support growers, customers, youth, and partners with practical knowledge around food systems, land stewardship, growing, preparation, and healthy living.",
    actions: [
      { label: "Nutrition", go: "nutrition" },
      { label: "Recipes", go: "recipes" },
      { label: "Grower Pathway", go: "grower" },
    ],
  },
  nutrition: {
    title: "Nutrition and Food Guidance",
    image: images.nutrition,
    description:
      "This area helps visitors compare natural foods with overprocessed food choices, understand healthier options, and connect everyday eating to wellness, energy, and long-term community health.",
    actions: [
      { label: "Recipes", go: "recipes" },
      { label: "Marketplace", go: "marketplace" },
      { label: "Customer Pathway", go: "customer" },
    ],
  },
  recipes: {
    title: "Recipes and Food Inspiration",
    image: images.recipes,
    description:
      "Recipes turn farm access into action. This module gives customers and families reasons to return by showing practical, inviting ways to use produce, support healthy meals, and build confidence in the kitchen.",
    actions: [
      { label: "Marketplace", go: "marketplace" },
      { label: "Nutrition", go: "nutrition" },
      { label: "Customer Pathway", go: "customer" },
    ],
  },
  weather: {
    title: "Farm Weather",
    image: images.weather,
    description:
      "This module gives the platform a live farm feeling by anchoring the ecosystem in seasonality, planning, atmosphere, and day-to-day connection with the land.",
    actions: [
      { label: "Crop Planning", go: "calendar" },
      { label: "Guest Pathway", go: "guest" },
      { label: "Events", go: "events" },
    ],
  },
};

const guidedOrder: ScreenKey[] = [
  "home",
  "story",
  "guest",
  "customer",
  "marketplace",
  "nutrition",
  "recipes",
  "grower",
  "calendar",
  "youth",
  "supervisor",
  "education",
  "events",
  "weather",
];

function App() {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [screen, setScreen] = useState<ScreenKey>("home");
  const [tourRunning, setTourRunning] = useState(false);
  const [weather] = useState({
    condition: "Mostly Sunny",
    temperature: "46°F",
    note: "Youngstown farm conditions support planning, learning, and seasonal engagement.",
  });

  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const text = appText[language];
  const content = screenContent[screen];

  const currentNarration = useMemo(() => {
    return `${content.title}. ${content.description}`;
  }, [content]);

  useEffect(() => {
    if (!tourRunning) return;

    const currentIndex = guidedOrder.indexOf(screen);
    const isLast = currentIndex === guidedOrder.length - 1;

    const timer = window.setTimeout(() => {
      if (isLast) {
        setTourRunning(false);
        setScreen("home");
      } else {
        setScreen(guidedOrder[currentIndex + 1]);
      }
    }, 6500);

    return () => clearTimeout(timer);
  }, [screen, tourRunning]);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(currentNarration);
    utter.rate = 0.92;
    utter.pitch = 1;
    utter.lang =
      language === "es"
        ? "es-ES"
        : language === "tl"
        ? "fil-PH"
        : language === "it"
        ? "it-IT"
        : language === "he"
        ? "he-IL"
        : "en-US";

    synthRef.current = utter;
    window.speechSynthesis.speak(utter);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [currentNarration, language]);

  const gallery = [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
    images.gallery5,
    images.gallery6,
    images.gallery7,
    images.gallery8,
    images.gallery9,
    images.gallery10,
    images.gallery11,
  ];

  const navigate = (next: ScreenKey) => {
    setScreen(next);
  };

  const startTour = () => {
    setTourRunning(true);
    setScreen("home");
  };

  const stopTour = () => {
    setTourRunning(false);
    window.speechSynthesis.cancel();
  };

  const pathwayCards: { key: ScreenKey; title: string; image: string }[] = [
    { key: "story", title: text.cards.story, image: images.story },
    { key: "guest", title: text.cards.guest, image: images.guest },
    { key: "customer", title: text.cards.customer, image: images.customer },
    { key: "grower", title: text.cards.grower, image: images.grower },
    { key: "producer", title: text.cards.producer, image: images.producer },
    { key: "youth", title: text.cards.youth, image: images.youth },
    { key: "supervisor", title: text.cards.supervisor, image: images.supervisor },
    { key: "marketplace", title: text.cards.marketplace, image: images.marketplace },
    { key: "calendar", title: text.cards.calendar, image: images.calendar },
    { key: "events", title: text.cards.events, image: images.events },
    { key: "education", title: text.cards.education, image: images.education },
    { key: "nutrition", title: text.cards.nutrition, image: images.nutrition },
    { key: "recipes", title: text.cards.recipes, image: images.recipes },
    { key: "weather", title: text.cards.weather, image: images.weather },
  ];

  return (
    <div className="min-h-screen bg-[#0f1f17] text-white">
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${content.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#102218]/75 to-[#0b130e]/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 md:px-8">
          <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-3xl font-semibold tracking-wide">{text.brand}</div>
              <div className="text-sm text-white/80">{text.subbrand}</div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("home")}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                {text.returnHome}
              </button>

              <button
                onClick={startTour}
                className="rounded-full bg-[#97c36b] px-4 py-2 text-sm font-semibold text-[#102218] hover:opacity-90"
              >
                {text.guidedTour}
              </button>

              <button
                onClick={stopTour}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                {text.stopTour}
              </button>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageKey)}
                className="rounded-full border border-white/20 bg-[#183125] px-4 py-2 text-sm text-white outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.key} value={lang.key}>
                    {text.chooseLanguage}: {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </header>

          {screen === "home" ? (
            <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2rem] border border-white/15 bg-black/30 p-6 backdrop-blur-md md:p-8">
                <div className="mb-3 inline-block rounded-full border border-[#97c36b]/40 bg-[#97c36b]/15 px-4 py-1 text-sm text-[#d9f0b8]">
                  {text.explore}
                </div>

                <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                  {text.welcomeTitle}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/88">
                  {text.welcomeBody}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate("story")}
                    className="rounded-full bg-[#97c36b] px-6 py-3 font-semibold text-[#102218] transition hover:scale-[1.02]"
                  >
                    {text.enterDemo}
                  </button>

                  <button
                    onClick={() => navigate("marketplace")}
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
                  >
                    {text.cards.marketplace}
                  </button>

                  <button
                    onClick={() => navigate("youth")}
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
                  >
                    {text.cards.youth}
                  </button>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {pathwayCards.map((card) => (
                    <button
                      key={card.key}
                      onClick={() => navigate(card.key)}
                      className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 text-left backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15"
                    >
                      <div
                        className="h-36 bg-cover bg-center"
                        style={{ backgroundImage: `url(${card.image})` }}
                      />
                      <div className="p-4">
                        <div className="text-lg font-semibold">{card.title}</div>
                        <div className="mt-1 text-sm text-white/75">
                          Enter this pathway
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-white/15 bg-black/30 p-6 backdrop-blur-md">
                  <div className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d9f0b8]">
                    Farm Atmosphere
                  </div>
                  <div className="text-3xl font-semibold">{weather.temperature}</div>
                  <div className="mt-1 text-white/85">{weather.condition}</div>
                  <p className="mt-4 text-sm leading-7 text-white/75">{weather.note}</p>
                  <button
                    onClick={() => navigate("weather")}
                    className="mt-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                  >
                    Open Weather
                  </button>
                </div>

                <div className="rounded-[2rem] border border-white/15 bg-black/30 p-6 backdrop-blur-md">
                  <div className="mb-4 text-sm uppercase tracking-[0.2em] text-[#d9f0b8]">
                    Gallery
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {gallery.slice(0, 6).map((img, i) => (
                      <div
                        key={i}
                        className="h-28 rounded-2xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md md:p-8">
                <div className="mb-3 text-sm uppercase tracking-[0.22em] text-[#d9f0b8]">
                  {content.title}
                </div>

                <h2 className="text-4xl font-semibold md:text-5xl">{content.title}</h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/88">
                  {content.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {content.actions?.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => navigate(action.go)}
                      className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {pathwayCards.slice(0, 8).map((card) => (
                    <button
                      key={card.key}
                      onClick={() => navigate(card.key)}
                      className="rounded-[1.4rem] border border-white/10 bg-white/10 p-3 text-left transition hover:bg-white/15"
                    >
                      <div
                        className="mb-3 h-28 rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${card.image})` }}
                      />
                      <div className="font-semibold">{card.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div
                  className="h-[360px] rounded-[2rem] border border-white/15 bg-cover bg-center"
                  style={{ backgroundImage: `url(${content.image})` }}
                />

                <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md">
                  <div className="mb-4 text-sm uppercase tracking-[0.2em] text-[#d9f0b8]">
                    More from the Farm
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {gallery.slice(6, 10).map((img, i) => (
                      <div
                        key={i}
                        className="h-28 rounded-2xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md">
                  <div className="text-sm uppercase tracking-[0.2em] text-[#d9f0b8]">
                    Guided Demo
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    This guided experience gives funders, guests, and partners a stronger
                    sense of movement through the ecosystem so the platform feels alive,
                    welcoming, and worth returning to.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      onClick={startTour}
                      className="rounded-full bg-[#97c36b] px-4 py-2 text-sm font-semibold text-[#102218]"
                    >
                      {text.guidedTour}
                    </button>
                    <button
                      onClick={() => navigate("home")}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
                    >
                      {text.returnHome}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
