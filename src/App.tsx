import React, { useMemo, useState } from "react";

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

const labels: Record<Language, Record<string, string>> = {
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
    language: "Language",
    marketplaceButton: "Go to Marketplace",
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
    language: "Idioma",
    marketplaceButton: "Ir al Mercado",
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
    language: "Wika",
    marketplaceButton: "Punta sa Marketplace",
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
    language: "Lingua",
    marketplaceButton: "Vai al Mercato",
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
    language: "Language",
    marketplaceButton: "Go a Marketplace",
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
    language: "שפה",
    marketplaceButton: "לשוק",
  },
};

const content: Record<
  Screen,
  { titleKey: string; image: string; body: string; links: Screen[] }
> = {
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

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [language, setLanguage] = useState<Language>("English");

  const t = labels[language];
  const current = content[screen];

  const gallery = useMemo(() => [images.g1, images.g2, images.g3, images.g4, images.g5, images.g6], []);

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "#102018",
    color: "#ffffff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const heroStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(10,20,14,0.52), rgba(7,14,10,0.82)), url(${current.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const shellStyle: React.CSSProperties = {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "24px 18px 40px",
  };

  const glassStyle: React.CSSProperties = {
    background: "rgba(12, 22, 16, 0.56)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 28,
    backdropFilter: "blur(10px)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
  };

  const buttonStyle: React.CSSProperties = {
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.10)",
    color: "white",
    padding: "11px 16px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: "#a7d37d",
    color: "#102018",
    border: "1px solid #a7d37d",
  };

  const cardButtonStyle: React.CSSProperties = {
    ...glassStyle,
    overflow: "hidden",
    padding: 0,
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <div style={heroStyle}>
        <div style={shellStyle}>
          <div
            style={{
              ...glassStyle,
              padding: 18,
              display: "flex",
              gap: 16,
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 22,
            }}
          >
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em" }}>{t.title}</div>
              <div style={{ fontSize: 15, opacity: 0.86, marginTop: 4 }}>{t.subtitle}</div>
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
                  background: "rgba(16,32,24,0.85)",
                  minWidth: 150,
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
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.3fr) minmax(320px, 0.7fr)",
                gap: 22,
              }}
            >
              <div style={{ ...glassStyle, padding: 30 }}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: "rgba(167,211,125,0.18)",
                    border: "1px solid rgba(167,211,125,0.35)",
                    color: "#dff2c8",
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  Farm & Family Alliance Ecosystem Demo
                </div>

                <div
                  style={{
                    fontSize: 62,
                    lineHeight: 1.03,
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                    maxWidth: 850,
                  }}
                >
                  {t.subtitle}
                </div>

                <p
                  style={{
                    marginTop: 20,
                    fontSize: 20,
                    lineHeight: 1.7,
                    maxWidth: 900,
                    color: "rgba(255,255,255,0.90)",
                  }}
                >
                  {content.home.body}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 16,
                    marginTop: 26,
                  }}
                >
                  {cards.map((card) => (
                    <button key={card} style={cardButtonStyle} onClick={() => setScreen(card)}>
                      <div
                        style={{
                          height: 150,
                          backgroundImage: `url(${content[card].image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div style={{ padding: 16 }}>
                        <div style={{ fontSize: 18, fontWeight: 800 }}>{t[content[card].titleKey]}</div>
                        <div style={{ marginTop: 6, fontSize: 13, opacity: 0.78 }}>{t.explore}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gap: 22 }}>
                <div style={{ ...glassStyle, padding: 24 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8" }}>
                    Farm Conditions
                  </div>
                  <div style={{ fontSize: 34, fontWeight: 800, marginTop: 12 }}>Youngstown</div>
                  <div style={{ fontSize: 18, marginTop: 6, opacity: 0.9 }}>Seasonal. Regenerative. Welcoming.</div>
                  <p style={{ marginTop: 14, lineHeight: 1.8, opacity: 0.82 }}>
                    A place people want to return to for food, learning, growing, events, and community connection.
                  </p>
                </div>

                <div style={{ ...glassStyle, padding: 18 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8", marginBottom: 12 }}>
                    Farm Gallery
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {gallery.map((img, i) => (
                      <div
                        key={i}
                        style={{
                          height: 112,
                          borderRadius: 18,
                          backgroundImage: `url(${img})`,
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
                gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.9fr)",
                gap: 22,
              }}
            >
              <div style={{ ...glassStyle, padding: 30 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#dff2c8" }}>
                  {t[content[screen].titleKey]}
                </div>
                <div style={{ fontSize: 52, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.04em", marginTop: 12 }}>
                  {t[content[screen].titleKey]}
                </div>
                <p
                  style={{
                    marginTop: 20,
                    fontSize: 20,
                    lineHeight: 1.8,
                    maxWidth: 840,
                    color: "rgba(255,255,255,0.90)",
                  }}
                >
                  {current.body}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
                  {current.links.map((link) => (
                    <button key={link} style={buttonStyle} onClick={() => setScreen(link)}>
                      {t[content[link].titleKey]}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gap: 22 }}>
                <div
                  style={{
                    ...glassStyle,
                    minHeight: 360,
                    backgroundImage: `url(${current.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div style={{ ...glassStyle, padding: 18 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#dff2c8", marginBottom: 12 }}>
                    More from the Farm
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {gallery.slice(0, 4).map((img, i) => (
                      <div
                        key={i}
                        style={{
                          height: 110,
                          borderRadius: 18,
                          backgroundImage: `url(${img})`,
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
