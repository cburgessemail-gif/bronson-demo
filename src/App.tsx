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

const guidedRoute: Screen[] = [
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
  "events",
  "weather",
];

const labels: Record<
  Language,
  {
    title: string;
    subtitle: string;
    explore: string;
    back: string;
    marketplaceButton: string;
    guidedTour: string;
    stopTour: string;
    farmGallery: string;
    farmConditions: string;
    nextExperience: string;
    upcomingEvent: string;
    countdown: string;
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
    customerReturn: string;
  }
> = {
  English: {
    title: "Bronson Family Farm",
    subtitle: "A living ecosystem, not just a website.",
    explore: "Explore Pathway",
    back: "Back to Entrance",
    marketplaceButton: "Go to Marketplace",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Tour",
    farmGallery: "Farm Gallery",
    farmConditions: "Farm Conditions",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
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
    customerReturn: "Made for return visits",
  },
  Español: {
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema vivo, no solo un sitio web.",
    explore: "Explorar",
    back: "Volver al Inicio",
    marketplaceButton: "Ir al Mercado",
    guidedTour: "Iniciar Recorrido",
    stopTour: "Detener Recorrido",
    farmGallery: "Galería de la Finca",
    farmConditions: "Condiciones de la Finca",
    nextExperience: "Próxima Experiencia",
    upcomingEvent: "Growers Supply Market",
    countdown: "Cuenta regresiva",
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
    customerReturn: "Pensado para volver",
  },
  Tagalog: {
    title: "Bronson Family Farm",
    subtitle: "Isang buhay na ecosystem, hindi lang website.",
    explore: "Explore",
    back: "Balik sa Simula",
    marketplaceButton: "Punta sa Marketplace",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Tour",
    farmGallery: "Farm Gallery",
    farmConditions: "Farm Conditions",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
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
    customerReturn: "Babalikan ng customer",
  },
  Italiano: {
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema vivo, non solo un sito web.",
    explore: "Esplora",
    back: "Torna all'Ingresso",
    marketplaceButton: "Vai al Mercato",
    guidedTour: "Avvia Tour",
    stopTour: "Ferma Tour",
    farmGallery: "Galleria della Fattoria",
    farmConditions: "Condizioni della Fattoria",
    nextExperience: "Prossima Esperienza",
    upcomingEvent: "Growers Supply Market",
    countdown: "Conto alla rovescia",
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
    customerReturn: "Pensato per ritornare",
  },
  Patwa: {
    title: "Bronson Family Farm",
    subtitle: "A living ecosystem, not just one website.",
    explore: "Explore",
    back: "Back to Entrance",
    marketplaceButton: "Go a Marketplace",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Tour",
    farmGallery: "Farm Gallery",
    farmConditions: "Farm Conditions",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
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
    customerReturn: "Built fi return visits",
  },
  Hebrew: {
    title: "Bronson Family Farm",
    subtitle: "מערכת חיה, לא רק אתר אינטרנט.",
    explore: "כניסה למסלול",
    back: "חזרה לכניסה",
    marketplaceButton: "לשוק",
    guidedTour: "התחל סיור",
    stopTour: "עצור סיור",
    farmGallery: "גלריית החווה",
    farmConditions: "תנאי החווה",
    nextExperience: "החוויה הבאה",
    upcomingEvent: "Growers Supply Market",
    countdown: "ספירה לאחור",
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
    customerReturn: "בנוי לחזרה",
  },
};

const content: Record<
  Screen,
  { titleKey: keyof (typeof labels)["English"]; image: string; body: string; links: Screen[]; blurb: string }
> = {
  home: {
    titleKey: "story",
    image: images.home,
    body:
      "Step into a welcoming farm ecosystem built around food access, land restoration, education, wellness, workforce pathways, and marketplace opportunity.",
    links: ["story", "customer", "grower", "youth", "marketplace", "events"],
    blurb: "Start here to experience the full ecosystem.",
  },
  story: {
    titleKey: "story",
    image: images.story,
    body:
      "Bronson Family Farm carries family legacy into a future-focused Youngstown vision shaped by regenerative growing, agritourism, education, and community restoration.",
    links: ["events", "marketplace", "nutrition"],
    blurb: "Legacy, land, restoration, and return.",
  },
  guest: {
    titleKey: "guest",
    image: images.guest,
    body:
      "Guests discover the atmosphere of the land, the story of the farm, special experiences, and reasons to return again and again.",
    links: ["story", "events", "weather"],
    blurb: "A welcoming first experience for visitors.",
  },
  customer: {
    titleKey: "customer",
    image: images.customer,
    body:
      "Customers move from discovery to healthy buying, produce access, recipes, and useful nutrition guidance that makes the marketplace worth revisiting.",
    links: ["marketplace", "nutrition", "recipes"],
    blurb: "A healthier buying journey.",
  },
  grower: {
    titleKey: "grower",
    image: images.grower,
    body:
      "Growers connect to seasonal planning, learning, coordination, and an ecosystem designed to support long-term participation and practical opportunity.",
    links: ["calendar", "events", "weather"],
    blurb: "Planning, growing, and shared opportunity.",
  },
  producer: {
    titleKey: "producer",
    image: images.producer,
    body:
      "Value-added producers can grow into branding, prepared goods, collaborative sales, and future product opportunities tied to the farm ecosystem.",
    links: ["marketplace", "events", "nutrition"],
    blurb: "Future-ready products and local value.",
  },
  youth: {
    titleKey: "youth",
    image: images.youth,
    body:
      "Youth workforce participants encounter hands-on learning, food systems awareness, work readiness, land stewardship, and meaningful pathways forward.",
    links: ["supervisor", "calendar", "events"],
    blurb: "Learning, work, and future pathways.",
  },
  supervisor: {
    titleKey: "supervisor",
    image: images.supervisor,
    body:
      "Supervisors support youth workers with structure, encouragement, accountability, logistics, and wraparound care within the program.",
    links: ["youth", "calendar", "events"],
    blurb: "Support, structure, and oversight.",
  },
  marketplace: {
    titleKey: "marketplace",
    image: images.marketplace,
    body:
      "The marketplace is the bridge to produce, seedlings, value-added goods, customer return, and future GrownBy-style commerce.",
    links: ["customer", "nutrition", "recipes"],
    blurb: "Where interest becomes action.",
  },
  calendar: {
    titleKey: "calendar",
    image: images.calendar,
    body:
      "Crop planning keeps the ecosystem feeling alive through seasonality, timing, coordination, readiness, and practical farm rhythm.",
    links: ["grower", "weather", "events"],
    blurb: "The seasonal rhythm of the farm.",
  },
  events: {
    titleKey: "events",
    image: images.events,
    body:
      "Events bring people onto the land through demonstrations, education, agritourism, marketplace engagement, and family-centered experiences.",
    links: ["guest", "marketplace", "story"],
    blurb: "The public-facing life of the farm.",
  },
  nutrition: {
    titleKey: "nutrition",
    image: images.nutrition,
    body:
      "Health and nutrition help people compare natural food with overprocessed choices, making wellness practical and easier to understand.",
    links: ["recipes", "marketplace", "customer"],
    blurb: "Food education that supports wellbeing.",
  },
  recipes: {
    titleKey: "recipes",
    image: images.recipes,
    body:
      "Recipes turn interest into action by showing how farm products can become real meals, real habits, and real reasons to come back.",
    links: ["marketplace", "nutrition", "customer"],
    blurb: "Simple inspiration for real meals.",
  },
  weather: {
    titleKey: "weather",
    image: images.weather,
    body:
      "Farm conditions keep the platform grounded in the land, the season, and the living rhythm of work, events, and growth.",
    links: ["calendar", "guest", "events"],
    blurb: "A live feeling rooted in the land.",
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
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
  };
}

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [language, setLanguage] = useState<Language>("English");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [tourRunning, setTourRunning] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!tourRunning) return;
    setScreen(guidedRoute[tourIndex]);
    const timeout = window.setTimeout(() => {
      if (tourIndex >= guidedRoute.length - 1) {
        setTourRunning(false);
        setTourIndex(0);
      } else {
        setTourIndex((v) => v + 1);
      }
    }, 4200);
    return () => window.clearTimeout(timeout);
  }, [tourRunning, tourIndex]);

  const t = labels[language];
  const current = content[screen];
  const isHebrew = language === "Hebrew";
  const gallery = useMemo(() => [images.g1, images.g2, images.g3, images.g4, images.g5, images.g6], []);
  const countdown = getCountdownParts(new Date("2026-05-16T09:00:00-04:00"));
  const timeText = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "#08120d",
    color: "#fff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const heroStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(5,10,8,0.28), rgba(5,10,8,0.82)), url(${current.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "background-image 0.45s ease",
  };

  const shellStyle: React.CSSProperties = {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "26px 20px 48px",
  };

  const glass: React.CSSProperties = {
    background: "linear-gradient(180deg, rgba(10,24,16,0.78), rgba(8,18,12,0.66))",
    border: "1px solid rgba(227,255,233,0.11)",
    borderRadius: 30,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.34)",
  };

  const button: React.CSSProperties = {
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.08)",
    color: "#f7fff8",
    padding: "12px 18px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
  };

  const primaryButton: React.CSSProperties = {
    ...button,
    background: "linear-gradient(180deg, #b8e68d, #9ed26d)",
    color: "#0c170f",
    border: "1px solid rgba(184,230,141,0.95)",
  };

  const cardBase = (card: Screen): React.CSSProperties => ({
    ...glass,
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

  return (
    <div style={pageStyle} dir={isHebrew ? "rtl" : "ltr"}>
      <div style={heroStyle}>
        <div style={shellStyle}>
          <div
            style={{
              ...glass,
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
              <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.04em" }}>{t.title}</div>
              <div style={{ fontSize: 15, opacity: 0.92, marginTop: 4 }}>{t.subtitle}</div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <button style={button} onClick={() => { setTourRunning(false); setScreen("home"); }}>
                {t.back}
              </button>
              <button style={primaryButton} onClick={() => setScreen("marketplace")}>
                {t.marketplaceButton}
              </button>
              {!tourRunning ? (
                <button
                  style={button}
                  onClick={() => {
                    setTourIndex(0);
                    setTourRunning(true);
                  }}
                >
                  {t.guidedTour}
                </button>
              ) : (
                <button
                  style={button}
                  onClick={() => {
                    setTourRunning(false);
                    setTourIndex(0);
                  }}
                >
                  {t.stopTour}
                </button>
              )}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                style={{ ...button, background: "rgba(10,20,14,0.88)", minWidth: 155 }}
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
                display: "grid",
                gridTemplateColumns: "minmax(0,1.34fr) minmax(330px,0.66fr)",
                gap: 24,
                alignItems: "start",
              }}
            >
              <div style={{ ...glass, padding: 32 }}>
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
                  Farm & Family Alliance Ecosystem Demo
                </div>

                <h1
                  style={{
                    fontSize: 64,
                    lineHeight: 1.02,
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                    margin: 0,
                    textShadow: "0 3px 20px rgba(0,0,0,0.28)",
                  }}
                >
                  {t.subtitle}
                </h1>

                <p
                  style={{
                    marginTop: 20,
                    fontSize: 20,
                    lineHeight: 1.75,
                    maxWidth: 860,
                    color: "rgba(246,255,248,0.92)",
                  }}
                >
                  {content.home.body}
                </p>

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
                      onClick={() => {
                        setTourRunning(false);
                        setScreen(card);
                      }}
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
                        <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", textShadow: "0 2px 18px rgba(0,0,0,0.42)" }}>
                          {t[content[card].titleKey]}
                        </div>
                        <div style={{ marginTop: 7, fontSize: 13, color: "rgba(236,248,239,0.84)", fontWeight: 600 }}>
                          {t.explore}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gap: 24 }}>
                <div style={{ ...glass, padding: 24, display: "grid", gap: 16 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8" }}>
                    {t.farmConditions}
                  </div>
                  <div style={{ fontSize: 34, fontWeight: 900 }}>Youngstown</div>
                  <div style={{ fontSize: 18, color: "#eef9f0", fontWeight: 700 }}>{t.customerReturn}</div>
                  <p style={{ margin: 0, lineHeight: 1.8, color: "rgba(237,248,239,0.84)" }}>
                    A place people want to return to for food, learning, growing, events, and community connection.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div style={{ borderRadius: 20, padding: 14, background: "rgba(255,255,255,0.05)" }}>
                      <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#cfe6b5", fontWeight: 800 }}>
                        Time
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>{timeText}</div>
                    </div>
                    <div style={{ borderRadius: 20, padding: 14, background: "rgba(255,255,255,0.05)" }}>
                      <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#cfe6b5", fontWeight: 800 }}>
                        Weather
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>46°F</div>
                    </div>
                  </div>
                </div>

                <div style={{ ...glass, padding: 18 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8", marginBottom: 14 }}>
                    {t.nextExperience}
                  </div>
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
                      {[["Days", countdown.days], ["Hours", countdown.hours], ["Min", countdown.minutes]].map(([label, value]) => (
                        <div
                          key={String(label)}
                          style={{
                            minWidth: 82,
                            padding: "12px 10px",
                            borderRadius: 18,
                            textAlign: "center",
                            background: "rgba(7,13,10,0.38)",
                          }}
                        >
                          <div style={{ fontSize: 24, fontWeight: 900 }}>{value}</div>
                          <div style={{ fontSize: 11, color: "rgba(234,246,236,0.76)", marginTop: 4 }}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ ...glass, padding: 18 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8", marginBottom: 14 }}>
                    {t.farmGallery}
                  </div>
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
                display: "grid",
                gridTemplateColumns: "minmax(0,1.08fr) minmax(330px,0.92fr)",
                gap: 24,
                alignItems: "start",
              }}
            >
              <div style={{ ...glass, padding: 32 }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8" }}>
                  {t[content[screen].titleKey]}
                </div>
                <h2
                  style={{
                    fontSize: 52,
                    lineHeight: 1.02,
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                    margin: "12px 0 0",
                  }}
                >
                  {t[content[screen].titleKey]}
                </h2>
                <p style={{ marginTop: 20, fontSize: 20, lineHeight: 1.75, color: "rgba(246,255,248,0.92)" }}>
                  {current.body}
                </p>

                <div style={{ marginTop: 16, color: "rgba(223,242,200,0.9)", fontWeight: 700 }}>
                  {current.blurb}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
                  {current.links.map((link) => (
                    <button
                      key={link}
                      style={button}
                      onClick={() => {
                        setTourRunning(false);
                        setScreen(link);
                      }}
                    >
                      {t[content[link].titleKey]}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gap: 24 }}>
                <div
                  style={{
                    ...glass,
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
                    <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8" }}>
                      {t[content[screen].titleKey]}
                    </div>
                    <div style={{ marginTop: 8, fontSize: 28, fontWeight: 900 }}>{t[content[screen].titleKey]}</div>
                  </div>
                </div>

                <div style={{ ...glass, padding: 18 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8", marginBottom: 14 }}>
                    {t.moreFarm}
                  </div>
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
