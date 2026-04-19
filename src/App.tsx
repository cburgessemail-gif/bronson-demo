import React, { useEffect, useMemo, useRef, useState } from "react";

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
  "youth",
  "supervisor",
  "events",
  "weather",
];

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
};

const text: Record<
  Screen,
  {
    title: string;
    body: string;
  }
> = {
  home: {
    title: "Bronson Family Farm",
    body:
      "Welcome to a living ecosystem built around food access, restoration, education, wellness, and opportunity.",
  },
  story: {
    title: "Our Story",
    body:
      "A family legacy transformed into a future-focused farm vision for Youngstown.",
  },
  guest: {
    title: "Guest Experience",
    body:
      "Visitors enjoy discovery, atmosphere, events, and reasons to return again.",
  },
  customer: {
    title: "Customer Journey",
    body:
      "Customers move into healthier buying habits, produce access, recipes, and nutrition support.",
  },
  grower: {
    title: "Grower Pathway",
    body:
      "Growers gain planning tools, coordination, learning, and practical opportunity.",
  },
  producer: {
    title: "Value Added Producer",
    body:
      "Prepared goods, branded products, and future local commerce opportunities.",
  },
  youth: {
    title: "Youth Workforce",
    body:
      "Hands-on learning, readiness, stewardship, and future pathways.",
  },
  supervisor: {
    title: "Supervisor Role",
    body:
      "Support staff provide structure, logistics, accountability, and encouragement.",
  },
  marketplace: {
    title: "Marketplace",
    body:
      "The bridge to produce, seedlings, products, and return visits.",
  },
  calendar: {
    title: "Crop Planner",
    body:
      "The seasonal rhythm of timing, readiness, and productive coordination.",
  },
  events: {
    title: "Events",
    body:
      "Demonstrations, education, agritourism, and family experiences on the land.",
  },
  nutrition: {
    title: "Health & Nutrition",
    body:
      "Helping people compare natural food with overprocessed choices.",
  },
  recipes: {
    title: "Recipes",
    body:
      "Turning farm products into real meals and healthy habits.",
  },
  weather: {
    title: "Farm Conditions",
    body:
      "A live feeling connected to season, land, work, and growth.",
  },
};

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [tour, setTour] = useState(false);
  const [index, setIndex] = useState(0);
  const [voiceOn, setVoiceOn] = useState(true);
  const [language, setLanguage] = useState<Language>("English");

  const synthRef = useRef<SpeechSynthesis | null>(null);

  const current = text[screen];

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
  }, []);

  useEffect(() => {
    if (!voiceOn) return;

    const utter = new SpeechSynthesisUtterance(
      `${current.title}. ${current.body}`
    );

    utter.rate = 0.95;
    utter.pitch = 1;
    utter.volume = 1;

    const voices = speechSynthesis.getVoices();

    if (language === "Español") {
      utter.lang = "es-ES";
      const v = voices.find((x) => x.lang.startsWith("es"));
      if (v) utter.voice = v;
    } else if (language === "Italiano") {
      utter.lang = "it-IT";
      const v = voices.find((x) => x.lang.startsWith("it"));
      if (v) utter.voice = v;
    } else if (language === "Hebrew") {
      utter.lang = "he-IL";
      const v = voices.find((x) => x.lang.startsWith("he"));
      if (v) utter.voice = v;
    } else {
      utter.lang = "en-US";
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
  }, [screen, voiceOn, language]);

  useEffect(() => {
    if (!tour) return;

    const timer = setTimeout(() => {
      const next = index + 1;

      if (next >= route.length) {
        setTour(false);
        setIndex(0);
        setScreen("home");
      } else {
        setIndex(next);
        setScreen(route[next]);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [tour, index]);

  const bg = images[screen];

  const cards = useMemo(
    () =>
      route.filter((x) => x !== "home").map((item) => (
        <button
          key={item}
          onClick={() => {
            setTour(false);
            setScreen(item);
          }}
          style={{
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: 24,
            overflow: "hidden",
            cursor: "pointer",
            background: "rgba(255,255,255,.05)",
            color: "#fff",
            padding: 0,
            textAlign: "left",
          }}
        >
          <div
            style={{
              height: 130,
              backgroundImage: `linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.55)),url(${images[item]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div style={{ padding: 14 }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>{text[item].title}</div>
            <div style={{ marginTop: 6, opacity: 0.82, fontSize: 14 }}>
              {text[item].body}
            </div>
          </div>
        </button>
      )),
    []
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#fff",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        backgroundImage: `linear-gradient(rgba(4,8,6,.30),rgba(4,8,6,.84)),url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: 24 }}>
        <div
          style={{
            borderRadius: 28,
            padding: 18,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(8,18,12,.62)",
            border: "1px solid rgba(255,255,255,.10)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div>
            <div style={{ fontSize: 36, fontWeight: 900 }}>
              Bronson Family Farm
            </div>
            <div style={{ opacity: 0.86 }}>
              Guided Ecosystem Experience
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              onClick={() => setScreen("home")}
              style={btn()}
            >
              Home
            </button>

            {!tour ? (
              <button
                onClick={() => {
                  setTour(true);
                  setIndex(0);
                  setScreen("home");
                }}
                style={btn(true)}
              >
                Start Guided Tour
              </button>
            ) : (
              <button
                onClick={() => setTour(false)}
                style={btn()}
              >
                Stop Tour
              </button>
            )}

            <button
              onClick={() => setVoiceOn(!voiceOn)}
              style={btn()}
            >
              {voiceOn ? "Voice On" : "Voice Off"}
            </button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              style={{
                ...btnStyle,
                minWidth: 140,
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

        <div
          style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "minmax(0,1.25fr) minmax(340px,.75fr)",
            gap: 24,
          }}
        >
          <div
            style={{
              borderRadius: 30,
              padding: 34,
              background: "rgba(8,18,12,.60)",
              border: "1px solid rgba(255,255,255,.10)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(167,211,125,.18)",
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Live Demo
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
                color: "rgba(245,255,247,.92)",
                maxWidth: 850,
              }}
            >
              {current.body}
            </p>

            {tour && (
              <div
                style={{
                  marginTop: 18,
                  color: "#dff2c8",
                  fontWeight: 700,
                }}
              >
                Guided Tour Progress: {index + 1} / {route.length}
              </div>
            )}

            <div
              style={{
                marginTop: 28,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: 18,
              }}
            >
              {cards}
            </div>
          </div>

          <div style={{ display: "grid", gap: 24 }}>
            <Panel title="Marketplace Preview">
              Produce • Seedlings • Bubble Babies™ • Repeat Visits
            </Panel>

            <Panel title="Live Conditions">
              Youngstown • 46°F • Seasonal • Regenerative
            </Panel>

            <Panel title="Next Event">
              Growers Supply Market • May 16, 2026
            </Panel>

            <Panel title="Why It Works">
              People return for food, learning, events, and opportunity.
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.08)",
  color: "#fff",
  padding: "12px 18px",
  fontWeight: 700,
  cursor: "pointer",
};

function btn(primary = false): React.CSSProperties {
  return primary
    ? {
        ...btnStyle,
        background: "linear-gradient(180deg,#b8e68d,#9ed26d)",
        color: "#0b160d",
      }
    : btnStyle;
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: 28,
        padding: 22,
        background: "rgba(8,18,12,.60)",
        border: "1px solid rgba(255,255,255,.10)",
        backdropFilter: "blur(12px)",
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
      <div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

export default App;
