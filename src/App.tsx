import React, { useEffect, useMemo, useState } from "react";

type Screen =
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
  | "nutrition"
  | "recipes"
  | "weather";

type Language = "English" | "Español" | "Tagalog" | "Italiano" | "Patwa" | "Hebrew";

const images: Record<string, string> = {
  home: "/GrowArea2.jpg",
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
  nutrition: "/SAM_0281.JPG",
  recipes: "/SAM_0282.JPG",
  weather: "/SAM_0288.JPG",
  g1: "/SAM_0289.JPG",
  g2: "/SAM_0290.JPG",
  g3: "/SAM_0291.JPG",
  g4: "/SAM_0293.JPG",
  g5: "/SAM_0301.JPG",
  g6: "/SAM_0303.JPG",
};

const labels: Record<
  Language,
  {
    title: string;
    subtitle: string;
    entrance: string;
    story: string;
    guest: string;
    customer: string;
    grower: string;
    producer: string;
    youth: string;
    supervisor: string;
    marketplace: string;
    calendar: string;
    events: string;
    nutrition: string;
    recipes: string;
    weather: string;
    explore: string;
    back: string;
    marketplaceButton: string;
    welcome: string;
    farmGallery: string;
    moreFarm: string;
    farmConditions: string;
    farmConditionsText: string;
    farmConditionsBody: string;
    nextExperience: string;
    upcomingEvent: string;
    countdown: string;
    marketplacePreview: string;
    marketplaceBody: string;
    weatherLabel: string;
    timeLabel: string;
    customerReturn: string;
  }
> = {
  English: {
    title: "Bronson Family Farm",
    subtitle: "A living ecosystem, not just a website.",
    entrance: "Entrance",
    story: "Our Story",
    guest: "Guest",
    customer: "Customer",
    grower: "Grower",
    producer: "Value-Added Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planner",
    events: "Events",
    nutrition: "Health & Nutrition",
    recipes: "Recipes",
    weather: "Farm Conditions",
    explore: "Explore Pathway",
    back: "Back to Entrance",
    marketplaceButton: "Go to Marketplace",
    welcome: "Farm & Family Alliance Ecosystem Demo",
    farmGallery: "Farm Gallery",
    moreFarm: "More from the Farm",
    farmConditions: "Farm Conditions",
    farmConditionsText: "Seasonal. Regenerative. Welcoming.",
    farmConditionsBody:
      "A place people want to return to for food, learning, growing, events, and community connection.",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
    marketplacePreview: "Marketplace Preview",
    marketplaceBody:
      "Built to feel like a welcoming bridge to produce, seedlings, healthy buying habits, and repeat visits.",
    weatherLabel: "Conditions",
    timeLabel: "Local Time",
    customerReturn: "Made for return visits",
  },
  Español: {
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema vivo, no solo un sitio web.",
    entrance: "Entrada",
    story: "Nuestra Historia",
    guest: "Invitado",
    customer: "Cliente",
    grower: "Productor",
    producer: "Productor de Valor Agregado",
    youth: "Fuerza Laboral Juvenil",
    supervisor: "Supervisor",
    marketplace: "Mercado",
    calendar: "Planificador",
    events: "Eventos",
    nutrition: "Salud y Nutrición",
    recipes: "Recetas",
    weather: "Condiciones de la Finca",
    explore: "Explorar",
    back: "Volver al Inicio",
    marketplaceButton: "Ir al Mercado",
    welcome: "Demo del Ecosistema Farm & Family Alliance",
    farmGallery: "Galería de la Finca",
    moreFarm: "Más de la Finca",
    farmConditions: "Condiciones de la Finca",
    farmConditionsText: "Estacional. Regenerativa. Acogedora.",
    farmConditionsBody:
      "Un lugar al que la gente quiere volver por comida, aprendizaje, cultivo, eventos y conexión comunitaria.",
    nextExperience: "Próxima Experiencia",
    upcomingEvent: "Growers Supply Market",
    countdown: "Cuenta regresiva",
    marketplacePreview: "Vista del Mercado",
    marketplaceBody:
      "Diseñado para sentirse como un puente acogedor hacia productos frescos, plántulas y visitas repetidas.",
    weatherLabel: "Condiciones",
    timeLabel: "Hora Local",
    customerReturn: "Diseñado para volver",
  },
  Tagalog: {
    title: "Bronson Family Farm",
    subtitle: "Isang buhay na ecosystem, hindi lang website.",
    entrance: "Pasukan",
    story: "Kuwento",
    guest: "Bisita",
    customer: "Customer",
    grower: "Grower",
    producer: "Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planner",
    events: "Events",
    nutrition: "Health & Nutrition",
    recipes: "Recipes",
    weather: "Farm Conditions",
    explore: "Explore",
    back: "Balik sa Simula",
    marketplaceButton: "Punta sa Marketplace",
    welcome: "Farm & Family Alliance Ecosystem Demo",
    farmGallery: "Farm Gallery",
    moreFarm: "More from the Farm",
    farmConditions: "Farm Conditions",
    farmConditionsText: "Seasonal. Regenerative. Welcoming.",
    farmConditionsBody:
      "Isang lugar na gustong balikan ng mga tao para sa pagkain, pag-aaral, pagtatanim, mga event, at koneksyon sa komunidad.",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
    marketplacePreview: "Marketplace Preview",
    marketplaceBody:
      "Ginawang parang mainit na tulay papunta sa produce, seedlings, at paulit-ulit na pagbisita.",
    weatherLabel: "Conditions",
    timeLabel: "Local Time",
    customerReturn: "Babalikan ng customer",
  },
  Italiano: {
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema vivo, non solo un sito web.",
    entrance: "Ingresso",
    story: "La Nostra Storia",
    guest: "Ospite",
    customer: "Cliente",
    grower: "Coltivatore",
    producer: "Produttore",
    youth: "Forza Lavoro Giovanile",
    supervisor: "Supervisore",
    marketplace: "Mercato",
    calendar: "Pianificatore",
    events: "Eventi",
    nutrition: "Salute e Nutrizione",
    recipes: "Ricette",
    weather: "Condizioni della Fattoria",
    explore: "Esplora",
    back: "Torna all'Ingresso",
    marketplaceButton: "Vai al Mercato",
    welcome: "Demo Ecosistema Farm & Family Alliance",
    farmGallery: "Galleria della Fattoria",
    moreFarm: "Altro dalla Fattoria",
    farmConditions: "Condizioni della Fattoria",
    farmConditionsText: "Stagionale. Rigenerativa. Accogliente.",
    farmConditionsBody:
      "Un luogo dove le persone vogliono tornare per cibo, apprendimento, coltivazione, eventi e connessione comunitaria.",
    nextExperience: "Prossima Esperienza",
    upcomingEvent: "Growers Supply Market",
    countdown: "Conto alla rovescia",
    marketplacePreview: "Anteprima Mercato",
    marketplaceBody:
      "Progettato per sembrare un ponte accogliente verso prodotti freschi, piantine e visite ripetute.",
    weatherLabel: "Condizioni",
    timeLabel: "Ora Locale",
    customerReturn: "Pensato per ritornare",
  },
  Patwa: {
    title: "Bronson Family Farm",
    subtitle: "A living ecosystem, not just one website.",
    entrance: "Entrance",
    story: "Wi Story",
    guest: "Guest",
    customer: "Customer",
    grower: "Grower",
    producer: "Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planner",
    events: "Events",
    nutrition: "Health & Nutrition",
    recipes: "Recipes",
    weather: "Farm Conditions",
    explore: "Explore",
    back: "Back to Entrance",
    marketplaceButton: "Go a Marketplace",
    welcome: "Farm & Family Alliance Ecosystem Demo",
    farmGallery: "Farm Gallery",
    moreFarm: "More from the Farm",
    farmConditions: "Farm Conditions",
    farmConditionsText: "Seasonal. Regenerative. Welcoming.",
    farmConditionsBody:
      "A one place people waan come back to fi food, learning, growing, events, an community connection.",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
    marketplacePreview: "Marketplace Preview",
    marketplaceBody:
      "Built fi feel like one warm bridge to produce, seedlings, healthy buying, an return visits.",
    weatherLabel: "Conditions",
    timeLabel: "Local Time",
    customerReturn: "Built fi return visits",
  },
  Hebrew: {
    title: "Bronson Family Farm",
    subtitle: "מערכת חיה, לא רק אתר אינטרנט.",
    entrance: "כניסה",
    story: "הסיפור שלנו",
    guest: "אורח",
    customer: "לקוח",
    grower: "מגדל",
    producer: "יצרן",
    youth: "כוח עבודה לנוער",
    supervisor: "מפקח",
    marketplace: "שוק",
    calendar: "מתכנן גידולים",
    events: "אירועים",
    nutrition: "בריאות ותזונה",
    recipes: "מתכונים",
    weather: "תנאי החווה",
    explore: "כניסה למסלול",
    back: "חזרה לכניסה",
    marketplaceButton: "לשוק",
    welcome: "הדגמת מערכת Farm & Family Alliance",
    farmGallery: "גלריית החווה",
    moreFarm: "עוד מהחווה",
    farmConditions: "תנאי החווה",
    farmConditionsText: "עונתי. מתחדש. מזמין.",
    farmConditionsBody:
      "מקום שאנשים ירצו לחזור אליו בשביל מזון, למידה, גידול, אירועים וחיבור לקהילה.",
    nextExperience: "החוויה הבאה",
    upcomingEvent: "Growers Supply Market",
    countdown: "ספירה לאחור",
    marketplacePreview: "תצוגת שוק",
    marketplaceBody:
      "נבנה כדי להרגיש כמו גשר מזמין לתוצרת, שתילים והרגלי קנייה שחוזרים אליהם.",
    weatherLabel: "תנאים",
    timeLabel: "שעה מקומית",
    customerReturn: "בנוי לחזרה",
  },
};

const content: Record<Screen, { titleKey: keyof (typeof labels)["English"]; image: string; body: string; links: Screen[] }> = {
  home: {
    titleKey: "entrance",
    image: images.home,
    body:
      "Step into a welcoming farm ecosystem built around food access, land restoration, education, wellness, workforce pathways, and marketplace opportunity.",
    links: ["story", "customer", "grower", "youth", "marketplace", "events"],
  },
  story: {
    titleKey: "story",
    image: images.story,
    body:
      "Bronson Family Farm carries family legacy into a future-focused Youngstown vision shaped by regenerative growing, agritourism, education, and community restoration.",
    links: ["events", "marketplace", "nutrition"],
  },
  guest: {
    titleKey: "guest",
    image: images.guest,
    body:
      "Guests discover the atmosphere of the land, the story of the farm, special experiences, and reasons to return again and again.",
    links: ["story", "events", "weather"],
  },
  customer: {
    titleKey: "customer",
    image: images.customer,
    body:
      "Customers move from discovery to healthy buying, produce access, recipes, and useful nutrition guidance that makes the marketplace worth revisiting.",
    links: ["marketplace", "nutrition", "recipes"],
  },
  grower: {
    titleKey: "grower",
    image: images.grower,
    body:
      "Growers connect to seasonal planning, learning, coordination, and an ecosystem designed to support long-term participation and practical opportunity.",
    links: ["calendar", "events", "weather"],
  },
  producer: {
    titleKey: "producer",
    image: images.producer,
    body:
      "Value-added producers can grow into branding, prepared goods, collaborative sales, and future product opportunities tied to the farm ecosystem.",
    links: ["marketplace", "events", "nutrition"],
  },
  youth: {
    titleKey: "youth",
    image: images.youth,
    body:
      "Youth workforce participants encounter hands-on learning, food systems awareness, work readiness, land stewardship, and meaningful pathways forward.",
    links: ["supervisor", "calendar", "events"],
  },
  supervisor: {
    titleKey: "supervisor",
    image: images.supervisor,
    body:
      "Supervisors support youth workers with structure, encouragement, accountability, logistics, and wraparound care within the program.",
    links: ["youth", "calendar", "events"],
  },
  marketplace: {
    titleKey: "marketplace",
    image: images.marketplace,
    body:
      "The marketplace is the bridge to produce, seedlings, value-added goods, customer return, and future GrownBy-style commerce.",
    links: ["customer", "nutrition", "recipes"],
  },
  calendar: {
    titleKey: "calendar",
    image: images.calendar,
    body:
      "Crop planning keeps the ecosystem feeling alive through seasonality, timing, coordination, readiness, and practical farm rhythm.",
    links: ["grower", "weather", "events"],
  },
  events: {
    titleKey: "events",
    image: images.events,
    body:
      "Events bring people onto the land through demonstrations, education, agritourism, marketplace engagement, and family-centered experiences.",
    links: ["guest", "marketplace", "story"],
  },
  nutrition: {
    titleKey: "nutrition",
    image: images.nutrition,
    body:
      "Health and nutrition help people compare natural food with overprocessed choices, making wellness practical and easier to understand.",
    links: ["recipes", "marketplace", "customer"],
  },
  recipes: {
    titleKey: "recipes",
    image: images.recipes,
    body:
      "Recipes turn interest into action by showing how farm products can become real meals, real habits, and real reasons to come back.",
    links: ["marketplace", "nutrition", "customer"],
  },
  weather: {
    titleKey: "weather",
    image: images.weather,
    body:
      "Farm conditions keep the platform grounded in the land, the season, and the living rhythm of work, events, and growth.",
    links: ["calendar", "guest", "events"],
  },
};

const cards: Screen[] = [
  "story",
  "guest",
  "customer",
  "grower",
  "producer",
  "youth",
  "supervisor",
  "marketplace",
  "calendar",
  "events",
  "nutrition",
  "recipes",
];

function getCountdownParts(target: Date) {
  const now = new Date();
  const diff = Math.max(target.getTime() - now.getTime(), 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [language, setLanguage] = useState<Language>("English");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 80);
    const interval = window.setInterval(() => setNow(new Date()), 1000 * 30);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(interval);
    };
  }, []);

  const t = labels[language];
  const current = content[screen];
  const isHebrew = language === "Hebrew";
  const gallery = useMemo(() => [images.g1, images.g2, images.g3, images.g4, images.g5, images.g6], []);
  const countdown = getCountdownParts(new Date("2026-05-16T09:00:00-04:00"));
  const timeText = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "#08120d",
    color: "#ffffff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const heroStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(4,10,7,0.22), rgba(4,9,7,0.82)), url(${current.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "background-image 0.5s ease",
  };

  const shellStyle: React.CSSProperties = {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "26px 20px 48px",
  };

  const glassStyle: React.CSSProperties = {
    background: "linear-gradient(180deg, rgba(10,24,16,0.78), rgba(8,18,12,0.66))",
    border: "1px solid rgba(227,255,233,0.11)",
    borderRadius: 30,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.34)",
  };

  const buttonStyle: React.CSSProperties = {
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.08)",
    color: "#f7fff8",
    padding: "12px 18px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: "linear-gradient(180deg, #b8e68d, #9ed26d)",
    color: "#0c170f",
    border: "1px solid rgba(184,230,141,0.95)",
    boxShadow: "0 10px 24px rgba(158,210,109,0.24)",
  };

  const headlineStyle: React.CSSProperties = {
    fontSize: screen === "home" ? 64 : 52,
    lineHeight: 1.02,
    fontWeight: 800,
    letterSpacing: "-0.045em",
    color: "#ffffff",
    textShadow: "0 3px 20px rgba(0,0,0,0.28)",
    margin: 0,
  };

  const bodyStyle: React.CSSProperties = {
    marginTop: 20,
    fontSize: 20,
    lineHeight: 1.75,
    maxWidth: 860,
    color: "rgba(246,255,248,0.92)",
  };

  const sectionEyebrow: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#dff2c8",
  };

  const tileTitleStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 800,
    color: "#ffffff",
    lineHeight: 1.2,
    textShadow: "0 2px 18px rgba(0,0,0,0.42)",
  };

  const cardBase = (card: Screen): React.CSSProperties => ({
    ...glassStyle,
    overflow: "hidden",
    padding: 0,
    cursor: "pointer",
    transform: hoveredCard === card ? "translateY(-6px) scale(1.012)" : "translateY(0) scale(1)",
    boxShadow:
      hoveredCard === card
        ? "0 24px 70px rgba(0,0,0,0.42), 0 0 0 1px rgba(184,230,141,0.24) inset"
        : "0 18px 60px rgba(0,0,0,0.28)",
    transition: "all 0.22s ease",
  });

  const fadeInStyle: React.CSSProperties = {
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(12px)",
    transition: "opacity 0.55s ease, transform 0.55s ease",
  };

  return (
    <div style={pageStyle} dir={isHebrew ? "rtl" : "ltr"}>
      <div style={heroStyle}>
        <div style={shellStyle}>
          <div
            style={{
              ...glassStyle,
              ...fadeInStyle,
              padding: 18,
              display: "flex",
              gap: 16,
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#ffffff",
                  textShadow: "0 3px 18px rgba(0,0,0,0.24)",
                }}
              >
                {t.title}
              </div>
              <div
                style={{
                  fontSize: 15,
                  opacity: 0.92,
                  marginTop: 4,
                  color: "rgba(245,255,247,0.88)",
                }}
              >
                {t.subtitle}
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <button style={buttonStyle} onClick={() => setScreen("home")}>
                {t.back}
              </button>
              <button style={primaryButtonStyle} onClick={() => setScreen("marketplace")}>
                {t.marketplaceButton}
              </button>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                style={{
                  ...buttonStyle,
                  background: "rgba(10,20,14,0.88)",
                  minWidth: 155,
                  outline: "none",
                }}
              >
                <option>English</option>
                <option>Español</option>
                <option>Tagalog</option>
                <option>Italiano</option>
                <option>Patwa</option>
                <option>Hebrew</option>
              </select>
            </div>
          </div>

          {screen === "home" ? (
            <div
              style={{
                ...fadeInStyle,
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.34fr) minmax(330px, 0.66fr)",
                gap: 24,
                alignItems: "start",
              }}
            >
              <div style={{ ...glassStyle, padding: 32 }}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "9px 15px",
                    borderRadius: 999,
                    background: "rgba(167,211,125,0.18)",
                    border: "1px solid rgba(167,211,125,0.32)",
                    color: "#e8f7d8",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 18,
                  }}
                >
                  {t.welcome}
                </div>

                <h1 style={headlineStyle}>{t.subtitle}</h1>

                <p style={bodyStyle}>{content.home.body}</p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 18,
                    marginTop: 28,
                  }}
                >
                  {cards.map((card) => (
                    <button
                      key={card}
                      style={cardBase(card)}
                      onClick={() => setScreen(card)}
                      onMouseEnter={() => setHoveredCard(card)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: 158,
                          backgroundImage: `url(${content[card].image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.18) 56%, rgba(0,0,0,0.62) 100%)",
                          }}
                        />
                      </div>
                      <div style={{ padding: 16, textAlign: "center", background: "rgba(6,12,9,0.46)" }}>
                        <div style={tileTitleStyle}>{t[content[card].titleKey]}</div>
                        <div
                          style={{
                            marginTop: 7,
                            fontSize: 13,
                            color: "rgba(236,248,239,0.84)",
                            fontWeight: 600,
                          }}
                        >
                          {t.explore}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gap: 24 }}>
                <div
                  style={{
                    ...glassStyle,
                    padding: 24,
                    minHeight: 210,
                    display: "grid",
                    gap: 16,
                  }}
                >
                  <div style={sectionEyebrow}>{t.farmConditions}</div>
                  <div>
                    <div
                      style={{
                        fontSize: 34,
                        fontWeight: 900,
                        color: "#ffffff",
                        textShadow: "0 2px 12px rgba(0,0,0,0.2)",
                      }}
                    >
                      Youngstown
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        marginTop: 8,
                        color: "#eef9f0",
                        fontWeight: 700,
                      }}
                    >
                      {t.farmConditionsText}
                    </div>
                    <p
                      style={{
                        marginTop: 14,
                        lineHeight: 1.8,
                        color: "rgba(237,248,239,0.84)",
                      }}
                    >
                      {t.farmConditionsBody}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 20,
                        padding: 14,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#cfe6b5", fontWeight: 800 }}>
                        {t.weatherLabel}
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>46°F</div>
                      <div style={{ marginTop: 4, color: "rgba(235,246,237,0.78)" }}>Mostly calm</div>
                    </div>
                    <div
                      style={{
                        borderRadius: 20,
                        padding: 14,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#cfe6b5", fontWeight: 800 }}>
                        {t.timeLabel}
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>{timeText}</div>
                      <div style={{ marginTop: 4, color: "rgba(235,246,237,0.78)" }}>{t.customerReturn}</div>
                    </div>
                  </div>
                </div>

                <div style={{ ...glassStyle, padding: 18 }}>
                  <div style={{ ...sectionEyebrow, marginBottom: 14 }}>{t.nextExperience}</div>
                  <div
                    style={{
                      borderRadius: 22,
                      padding: 18,
                      background: "linear-gradient(180deg, rgba(177,227,128,0.12), rgba(255,255,255,0.04))",
                      border: "1px solid rgba(177,227,128,0.18)",
                    }}
                  >
                    <div style={{ fontSize: 22, fontWeight: 900 }}>{t.upcomingEvent}</div>
                    <div style={{ marginTop: 6, color: "rgba(236,248,239,0.82)" }}>May 16, 2026 • 9:00 AM–2:00 PM</div>
                    <div style={{ marginTop: 14, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#dff2c8", fontWeight: 800 }}>
                      {t.countdown}
                    </div>
                    <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
                      {[
                        { label: "Days", value: countdown.days },
                        { label: "Hours", value: countdown.hours },
                        { label: "Min", value: countdown.minutes },
                      ].map((item) => (
                        <div
                          key={item.label}
                          style={{
                            minWidth: 82,
                            padding: "12px 10px",
                            borderRadius: 18,
                            textAlign: "center",
                            background: "rgba(7,13,10,0.38)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <div style={{ fontSize: 24, fontWeight: 900 }}>{item.value}</div>
                          <div style={{ fontSize: 11, color: "rgba(234,246,236,0.76)", marginTop: 4 }}>{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ ...glassStyle, padding: 18 }}>
                  <div style={{ ...sectionEyebrow, marginBottom: 14 }}>{t.farmGallery}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {gallery.map((img, i) => (
                      <div
                        key={i}
                        style={{
                          height: 116,
                          borderRadius: 20,
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.16)), url(${img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                ...fadeInStyle,
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.08fr) minmax(330px, 0.92fr)",
                gap: 24,
                alignItems: "start",
              }}
            >
              <div style={{ ...glassStyle, padding: 32 }}>
                <div style={sectionEyebrow}>{t[content[screen].titleKey]}</div>
                <h2 style={{ ...headlineStyle, marginTop: 12 }}>{t[content[screen].titleKey]}</h2>
                <p style={bodyStyle}>{current.body}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
                  {current.links.map((link) => (
                    <button key={link} style={buttonStyle} onClick={() => setScreen(link)}>
                      {t[content[link].titleKey]}
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 28,
                    borderRadius: 24,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(0,0,0,0.16)",
                  }}
                >
                  <div
                    style={{
                      height: 270,
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.22) 100%), url(${current.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div style={{ padding: 18 }}>
                    <div style={sectionEyebrow}>{t.marketplacePreview}</div>
                    <div style={{ marginTop: 10, color: "rgba(236,248,239,0.88)", lineHeight: 1.75 }}>
                      {screen === "marketplace" ? t.marketplaceBody : current.body}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gap: 24 }}>
                <div
                  style={{
                    ...glassStyle,
                    minHeight: 390,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.22)), url(${current.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.26) 65%, rgba(0,0,0,0.6) 100%)",
                    }}
                  />
                  <div style={{ position: "absolute", left: 18, right: 18, bottom: 18 }}>
                    <div style={sectionEyebrow}>{t[content[screen].titleKey]}</div>
                    <div style={{ marginTop: 8, fontSize: 28, fontWeight: 900 }}>{t[content[screen].titleKey]}</div>
                  </div>
                </div>

                <div style={{ ...glassStyle, padding: 18 }}>
                  <div style={{ ...sectionEyebrow, marginBottom: 14 }}>{t.moreFarm}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {gallery.slice(0, 4).map((img, i) => (
                      <div
                        key={i}
                        style={{
                          height: 112,
                          borderRadius: 20,
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.16)), url(${img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
