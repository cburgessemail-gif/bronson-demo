import React, { useEffect, useMemo, useRef, useState } from "react";

type Screen =
  | "home"
  | "story"
  | "guest"
  | "customer"
  | "marketplace"
  | "nutrition"
  | "recipes"
  | "grower"
  | "calendar"
  | "producer"
  | "youth"
  | "supervisor"
  | "events"
  | "weather";

type Language = "English" | "Español" | "Tagalog" | "Italiano" | "Patwa" | "Hebrew";

const LIVE_MARKETPLACE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const LIVE_WEATHER_URL =
  "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121";

const route: Screen[] = [
  "home",
  "story",
  "guest",
  "customer",
  "marketplace",
  "nutrition",
  "recipes",
  "grower",
  "calendar",
  "producer",
  "youth",
  "supervisor",
  "events",
  "weather",
];

const images: Record<Screen, string> = {
  home: "/GrowArea2.jpg",
  story: "/SAM_0220.JPG",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  marketplace: "/SAM_0257.JPG",
  nutrition: "/SAM_0281.JPG",
  recipes: "/SAM_0282.JPG",
  grower: "/SAM_0223.JPG",
  calendar: "/SAM_0274.JPG",
  producer: "/SAM_0229.JPG",
  youth: "/SAM_0238.JPG",
  supervisor: "/SAM_0249.JPG",
  events: "/SAM_0275.JPG",
  weather: "/SAM_0288.JPG",
};

const gallery = [
  "/SAM_0289.JPG",
  "/SAM_0290.JPG",
  "/SAM_0291.JPG",
  "/SAM_0293.JPG",
  "/SAM_0301.JPG",
  "/SAM_0303.JPG",
];

const content: Record<
  Screen,
  {
    title: string;
    body: string;
    blurb: string;
    links: Screen[];
  }
> = {
  home: {
    title: "Bronson Family Farm",
    body:
      "Step into a living ecosystem built around food access, land restoration, education, wellness, workforce pathways, and marketplace opportunity.",
    blurb: "Start here to experience the full ecosystem.",
    links: ["story", "customer", "grower", "youth", "events", "marketplace"],
  },
  story: {
    title: "Our Story",
    body:
      "Bronson Family Farm carries family legacy into a future-focused Youngstown vision shaped by regenerative growing, agritourism, education, and community restoration.",
    blurb: "Legacy, land, restoration, and return.",
    links: ["guest", "events", "marketplace"],
  },
  guest: {
    title: "Guest Experience",
    body:
      "Guests discover the atmosphere of the land, the story of the farm, special experiences, and reasons to return again and again.",
    blurb: "A welcoming first experience for visitors.",
    links: ["story", "events", "weather"],
  },
  customer: {
    title: "Customer Journey",
    body:
      "Customers move from discovery to healthy buying, produce access, recipes, and practical nutrition guidance that makes the marketplace worth revisiting.",
    blurb: "A healthier buying journey.",
    links: ["marketplace", "nutrition", "recipes"],
  },
  marketplace: {
    title: "Marketplace",
    body:
      "The marketplace is the bridge to produce, seedlings, Bubble Babies, value-added goods, customer return, and live GrownBy commerce.",
    blurb: "Where interest becomes action.",
    links: ["customer", "nutrition", "recipes"],
  },
  nutrition: {
    title: "Health & Nutrition",
    body:
      "Health and nutrition help people compare natural food with overprocessed choices, making wellness practical and easier to understand.",
    blurb: "Food education that supports wellbeing.",
    links: ["recipes", "marketplace", "customer"],
  },
  recipes: {
    title: "Recipes",
    body:
      "Recipes turn interest into action by showing how farm products can become real meals, real habits, and real reasons to come back.",
    blurb: "Simple inspiration for real meals.",
    links: ["marketplace", "nutrition", "customer"],
  },
  grower: {
    title: "Grower Pathway",
    body:
      "Growers connect to seasonal planning, learning, coordination, and an ecosystem designed to support long-term participation and practical opportunity.",
    blurb: "Planning, growing, and shared opportunity.",
    links: ["calendar", "producer", "events"],
  },
  calendar: {
    title: "Crop Planner",
    body:
      "Crop planning gives the ecosystem a living seasonal rhythm through timing, readiness, coordination, and practical farm momentum.",
    blurb: "The seasonal rhythm of the farm.",
    links: ["grower", "weather", "events"],
  },
  producer: {
    title: "Value-Added Producer",
    body:
      "Prepared goods, branded products, local value creation, and future commerce opportunities can grow from this ecosystem.",
    blurb: "Future-ready products and local value.",
    links: ["marketplace", "grower", "events"],
  },
  youth: {
    title: "Youth Workforce",
    body:
      "Youth workforce participants encounter hands-on learning, food systems awareness, work readiness, land stewardship, and meaningful future pathways.",
    blurb: "Learning, work, and future pathways.",
    links: ["supervisor", "calendar", "events"],
  },
  supervisor: {
    title: "Supervisor Role",
    body:
      "Supervisors support youth workers with structure, encouragement, accountability, logistics, and wraparound care within the program.",
    blurb: "Support, structure, and oversight.",
    links: ["youth", "events", "calendar"],
  },
  events: {
    title: "Events",
    body:
      "Events bring people onto the land through demonstrations, education, agritourism, marketplace engagement, and family-centered experiences.",
    blurb: "The public-facing life of the farm.",
    links: ["guest", "marketplace", "weather"],
  },
  weather: {
    title: "Farm Conditions",
    body:
      "Farm conditions keep the platform grounded in the land, the season, and the living rhythm of work, events, and growth.",
    blurb: "A live feeling rooted in the land.",
    links: ["calendar", "events", "guest"],
  },
};

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
  const [autoTour, setAutoTour] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<Screen | null>(null);
  const [now, setNow] = useState(new Date());
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const currentIndex = route.indexOf(screen);
  const current = content[screen];
  const progress = ((currentIndex + 1) / route.length) * 100;
  const countdown = getCountdownParts(new Date("2026-05-16T09:00:00-04:00"));
  const timeText = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    const timer = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!voiceOn || !synthRef.current) return;

    const utter = new SpeechSynthesisUtterance(`${current.title}. ${current.body}`);
    utter.rate = 0.94;
    utter.pitch = 1;
    utter.volume = 1;

    if (language === "Español") utter.lang = "es-ES";
    else if (language === "Italiano") utter.lang = "it-IT";
    else if (language === "Hebrew") utter.lang = "he-IL";
    else utter.lang = "en-US";

    synthRef.current.cancel();
    synthRef.current.speak(utter);

    return () => synthRef.current?.cancel();
  }, [screen, voiceOn, language, current.title, current.body]);

  useEffect(() => {
    if (!autoTour) return;
    const timer = window.setTimeout(() => {
      if (currentIndex >= route.length - 1) {
        setAutoTour(false);
        setScreen("home");
      } else {
        setScreen(route[currentIndex + 1]);
      }
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [autoTour, currentIndex]);

  const goPrev = () => {
    setAutoTour(false);
    setScreen(route[Math.max(0, currentIndex - 1)]);
  };

  const goNext = () => {
    setAutoTour(false);
    setScreen(route[Math.min(route.length - 1, currentIndex + 1)]);
  };

  const startTour = () => {
    setAutoTour(true);
    setScreen("home");
  };

  const bg = images[screen];

  const frame: React.CSSProperties = {
    minHeight: "100vh",
    color: "#fff",
    backgroundImage: `linear-gradient(rgba(4,8,6,0.28), rgba(4,8,6,0.84)), url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const glass: React.CSSProperties = {
    background: "linear-gradient(180deg, rgba(10,24,16,0.78), rgba(8,18,12,0.66))",
    border: "1px solid rgba(227,255,233,0.11)",
    borderRadius: 30,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.34)",
  };

  const btn: React.CSSProperties = {
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    padding: "12px 18px",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const primaryBtn: React.CSSProperties = {
    ...btn,
    background: "linear-gradient(180deg, #b8e68d, #9ed26d)",
    color: "#0c170f",
    border: "1px solid rgba(184,230,141,0.95)",
  };

  const chapterCards = useMemo(
    () =>
      route
        .filter((s) => s !== "home")
        .map((item) => {
          const href =
            item === "marketplace"
              ? LIVE_MARKETPLACE_URL
              : item === "weather"
              ? LIVE_WEATHER_URL
              : null;

          if (href) {
            return (
              <a
                key={item}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard(item)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  ...glass,
                  overflow: "hidden",
                  padding: 0,
                  cursor: "pointer",
                  textAlign: "left",
                  textDecoration: "none",
                  color: "#fff",
                  transform: hoveredCard === item ? "translateY(-4px)" : "none",
                  boxShadow:
                    hoveredCard === item
                      ? "0 24px 70px rgba(0,0,0,0.42), 0 0 0 1px rgba(184,230,141,0.24) inset"
                      : "0 18px 60px rgba(0,0,0,0.28)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    height: 126,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.58)), url(${images[item]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div style={{ padding: 14 }}>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{content[item].title}</div>
                  <div style={{ marginTop: 6, fontSize: 14, opacity: 0.84 }}>{content[item].blurb}</div>
                </div>
              </a>
            );
          }

          return (
            <button
              key={item}
              onClick={() => {
                setAutoTour(false);
                setScreen(item);
              }}
              onMouseEnter={() => setHoveredCard(item)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                ...glass,
                overflow: "hidden",
                padding: 0,
                cursor: "pointer",
                textAlign: "left",
                transform: hoveredCard === item ? "translateY(-4px)" : "none",
                boxShadow:
                  hoveredCard === item || item === screen
                    ? "0 24px 70px rgba(0,0,0,0.42), 0 0 0 1px rgba(184,230,141,0.24) inset"
                    : "0 18px 60px rgba(0,0,0,0.28)",
                transition: "all 0.2s ease",
                color: "#fff",
              }}
            >
              <div
                style={{
                  height: 126,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.58)), url(${images[item]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: 14 }}>
                <div style={{ fontSize: 18, fontWeight: 800 }}>{content[item].title}</div>
                <div style={{ marginTop: 6, fontSize: 14, opacity: 0.84 }}>{content[item].blurb}</div>
              </div>
            </button>
          );
        }),
    [screen, hoveredCard]
  );

  return (
    <div style={frame}>
      <div style={{ maxWidth: 1340, margin: "0 auto", padding: 24 }}>
        <div
          style={{
            ...glass,
            padding: 18,
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 38, fontWeight: 900 }}>Bronson Family Farm</div>
            <div style={{ opacity: 0.88 }}>Final Master Guided Ecosystem Experience</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              style={btn}
              onClick={() => {
                setAutoTour(false);
                setScreen("home");
              }}
            >
              Home
            </button>
            <button style={primaryBtn} onClick={startTour}>
              Start Guided Tour
            </button>
            <button style={btn} onClick={() => setAutoTour(false)}>
              Stop Tour
            </button>
            <button style={btn} onClick={() => setVoiceOn((v) => !v)}>
              {voiceOn ? "Voice On" : "Voice Off"}
            </button>

            <a href={LIVE_MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" style={primaryBtn}>
              Open Live Marketplace
            </a>

            <a href={LIVE_WEATHER_URL} target="_blank" rel="noopener noreferrer" style={btn}>
              Live Weather
            </a>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              style={{ ...btn, minWidth: 150 }}
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

        <div
          style={{
            ...glass,
            marginTop: 18,
            padding: 16,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, opacity: 0.88 }}>
            <div>Journey Progress</div>
            <div>
              {currentIndex + 1} / {route.length}
            </div>
          </div>
          <div
            style={{
              marginTop: 10,
              height: 10,
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #b8e68d, #9ed26d)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: 22,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(360px, 0.85fr)",
            gap: 24,
          }}
        >
          <div style={{ display: "grid", gap: 24 }}>
            <div style={{ ...glass, padding: 34 }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(167,211,125,0.18)",
                  fontWeight: 800,
                  fontSize: 12,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                Live Journey Mode
              </div>

              <h1
                style={{
                  fontSize: 62,
                  lineHeight: 1.02,
                  margin: "18px 0 0",
                  fontWeight: 900,
                }}
              >
                {current.title}
              </h1>

              <p
                style={{
                  marginTop: 18,
                  fontSize: 22,
                  lineHeight: 1.7,
                  maxWidth: 860,
                  color: "rgba(245,255,247,0.92)",
                }}
              >
                {current.body}
              </p>

              <div
                style={{
                  marginTop: 16,
                  color: "#dff2c8",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                {current.blurb}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
                <button style={btn} onClick={goPrev} disabled={currentIndex === 0}>
                  Previous
                </button>
                <button style={primaryBtn} onClick={goNext} disabled={currentIndex === route.length - 1}>
                  Next
                </button>

                {current.links.map((link) => {
                  if (link === "marketplace") {
                    return (
                      <a
                        key={link}
                        href={LIVE_MARKETPLACE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={btn}
                      >
                        {content[link].title}
                      </a>
                    );
                  }

                  if (link === "weather") {
                    return (
                      <a
                        key={link}
                        href={LIVE_WEATHER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={btn}
                      >
                        {content[link].title}
                      </a>
                    );
                  }

                  return (
                    <button
                      key={link}
                      style={btn}
                      onClick={() => {
                        setAutoTour(false);
                        setScreen(link);
                      }}
                    >
                      {content[link].title}
                    </button>
                  );
                })}
              </div>

              {screen === "marketplace" && (
                <div
                  style={{
                    ...glass,
                    marginTop: 24,
                    padding: 24,
                    display: "grid",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: "#dff2c8",
                    }}
                  >
                    Live Marketplace
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900 }}>
                    Bronson Family Farm on GrownBy
                  </div>
                  <div style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(245,255,247,.9)" }}>
                    Shop live produce, seedlings, and farm offerings through the Bronson Family Farm GrownBy store.
                  </div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a
                      href={LIVE_MARKETPLACE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={primaryBtn}
                    >
                      Enter Live Store
                    </a>

                    <a
                      href="https://grownby.com/farms/bronson-family-farm/shop/product/Xiam8pgvwgBNI2KETOBg"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={btn}
                    >
                      View Tomato Seedlings
                    </a>

                    <a
                      href="https://grownby.com/farms/bronson-family-farm/shop/product/tixqiXNbUfUCwIxjVOzS"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={btn}
                    >
                      View Jalapeño Pepper
                    </a>
                  </div>
                </div>
              )}

              {screen === "weather" && (
                <div
                  style={{
                    ...glass,
                    marginTop: 24,
                    padding: 24,
                    display: "grid",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: "#dff2c8",
                    }}
                  >
                    Live Farm Conditions
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900 }}>Youngstown Weather</div>
                  <div style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(245,255,247,.9)" }}>
                    Open the live AccuWeather feed for minute-by-minute weather and forecast conditions.
                  </div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a
                      href={LIVE_WEATHER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={primaryBtn}
                    >
                      Open Live Weather
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div
              style={{
                ...glass,
                padding: 18,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#dff2c8",
                  marginBottom: 14,
                }}
              >
                Journey Chapters
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 18,
                }}
              >
                {chapterCards}
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: 24 }}>
            <Panel title="Marketplace Preview">
              Produce • Seedlings • Bubble Babies™ • Healthy buying habits • Return visits
            </Panel>

            <Panel title="Next Event">
              Growers Supply Market • May 16, 2026 • 9:00 AM–2:00 PM
              <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
                {[
                  ["Days", countdown.days],
                  ["Hours", countdown.hours],
                  ["Min", countdown.minutes],
                ].map(([label, value]) => (
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
                    <div style={{ fontSize: 11, color: "rgba(234,246,236,0.76)", marginTop: 4 }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Farm Conditions">
              Youngstown • 46°F • Seasonal • Regenerative • Welcoming
              <div style={{ marginTop: 14, fontSize: 14, opacity: 0.85 }}>Local Time: {timeText}</div>
              <div style={{ marginTop: 14 }}>
                <a href={LIVE_WEATHER_URL} target="_blank" rel="noopener noreferrer" style={primaryBtn}>
                  Open Live Weather
                </a>
              </div>
            </Panel>

            <Panel title="Gallery">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {gallery.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    style={{
                      height: 104,
                      borderRadius: 18,
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.16)), url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, rgba(10,24,16,0.78), rgba(8,18,12,0.66))",
        border: "1px solid rgba(227,255,233,0.11)",
        borderRadius: 30,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 18px 60px rgba(0,0,0,0.34)",
        padding: 22,
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "#dff2c8",
          fontWeight: 800,
        }}
      >
        {title}
      </div>
      <div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

export default App;
