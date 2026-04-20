import React, { useEffect, useState } from "react";

type Page =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [time, setTime] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

    const updateScreen = () => setIsMobile(window.innerWidth < 980);

    updateTime();
    updateScreen();

    const timer = setInterval(updateTime, 1000);
    window.addEventListener("resize", updateScreen);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", updateScreen);
    };
  }, []);

  const shell: React.CSSProperties = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at left top, rgba(0,160,90,0.18), transparent 22%), radial-gradient(circle at right top, rgba(155,195,80,0.08), transparent 26%), linear-gradient(135deg,#02120c 0%,#051d17 34%,#072b22 68%,#03100b 100%)",
    color: "#fff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const wrap: React.CSSProperties = {
    maxWidth: "1360px",
    margin: "0 auto",
    padding: isMobile ? "20px 18px 40px" : "34px 34px 70px",
  };

  const glass: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderRadius: 30,
    boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
  };

  const label: React.CSSProperties = {
    fontSize: 12,
    letterSpacing: "0.34em",
    textTransform: "uppercase",
    color: "rgba(199,245,208,0.92)",
  };

  const topBar: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px 18px",
    color: "rgba(255,255,255,0.82)",
    fontSize: 15,
  };

  const primaryBtn: React.CSSProperties = {
    border: "none",
    borderRadius: 999,
    background: "#ffffff",
    color: "#02110b",
    padding: "16px 24px",
    fontWeight: 800,
    fontSize: 15,
    cursor: "pointer",
  };

  const secondaryBtn: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    padding: "16px 24px",
    fontWeight: 800,
    fontSize: 15,
    cursor: "pointer",
  };

  const heroGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 32,
    alignItems: "stretch",
    marginTop: 28,
  };

  const tilesGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(5, minmax(0,1fr))",
    gap: 20,
    marginTop: 30,
  };

  const pageGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 24,
    marginTop: 30,
  };

  function TopBar() {
    return (
      <div style={topBar}>
        <div>Youngstown, Ohio</div>
        <div>{time}</div>
        <div>61°</div>
        <div>Clear</div>
      </div>
    );
  }

  function Back() {
    return (
      <button
        onClick={() => setPage("home")}
        style={{ ...secondaryBtn, padding: "12px 18px", marginTop: 18 }}
      >
        ← Home
      </button>
    );
  }

  function Tile({
    title,
    text,
    code,
    go,
  }: {
    title: string;
    text: string;
    code: string;
    go: () => void;
  }) {
    return (
      <button
        onClick={go}
        style={{
          ...glass,
          padding: 22,
          minHeight: 220,
          textAlign: "left",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 18,
              background: "rgba(255,255,255,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              marginBottom: 18,
            }}
          >
            {code}
          </div>

          <div style={{ fontSize: 26, fontWeight: 800 }}>{title}</div>

          <div
            style={{
              marginTop: 12,
              fontSize: 18,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            {text}
          </div>
        </div>

        <div
          style={{
            marginTop: 18,
            color: "#bff1ca",
            fontSize: 13,
            letterSpacing: "0.08em",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          Enter
        </div>
      </button>
    );
  }

  function StandardPage({
    eyebrow,
    title,
    text,
    cards,
  }: {
    eyebrow: string;
    title: string;
    text: string;
    cards: { t: string; d: string }[];
  }) {
    return (
      <div style={shell}>
        <div style={wrap}>
          <TopBar />
          <Back />

          <div style={{ ...label, marginTop: 26 }}>{eyebrow}</div>

          <h1
            style={{
              fontSize: isMobile ? 44 : 76,
              lineHeight: 0.96,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: "18px 0 0",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              marginTop: 24,
              maxWidth: 940,
              fontSize: isMobile ? 21 : 28,
              lineHeight: 1.48,
              color: "rgba(255,255,255,0.84)",
            }}
          >
            {text}
          </p>

          <div style={pageGrid}>
            {cards.map((c) => (
              <div key={c.t} style={{ ...glass, padding: 26 }}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>{c.t}</div>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 20,
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (page === "guest") {
    return (
      <StandardPage
        eyebrow="Guest Experience"
        title="See the land differently."
        text="Bronson Family Farm restores land, responds to rising food costs, reconnects community, and creates meaningful opportunity through agriculture, learning, and shared purpose."
        cards={[
          {
            t: "Why it matters",
            d: "Healthy food access, local opportunity, education, and community rebuilding belong together.",
          },
          {
            t: "What it becomes",
            d: "A regenerative ecosystem with food, training, marketplace access, and belonging.",
          },
        ]}
      />
    );
  }

  if (page === "grower") {
    return (
      <StandardPage
        eyebrow="Grower Portal"
        title="Plan, grow, and reach market."
        text="Production planning, shared resources, and stronger pathways to selling, collaboration, and long-term growth."
        cards={[
          {
            t: "Crop Planning",
            d: "Seasonal planning and next-step production pathways.",
          },
          {
            t: "Market Access",
            d: "Connect products to customers, events, and channels.",
          },
          {
            t: "Shared Resources",
            d: "Training, tools, and ecosystem collaboration.",
          },
        ]}
      />
    );
  }

  if (page === "youth") {
    return (
      <StandardPage
        eyebrow="Youth Workforce"
        title="Learn by doing."
        text="Build confidence, skills, work habits, and future direction through hands-on experience connected to food systems, land stewardship, and real opportunity."
        cards={[
          {
            t: "Hands-On Learning",
            d: "Real work experience through responsibility and contribution.",
          },
          {
            t: "Career Readiness",
            d: "Confidence, discipline, teamwork, and pathways forward.",
          },
        ]}
      />
    );
  }

  if (page === "supervisor") {
    return (
      <StandardPage
        eyebrow="Supervisor Portal"
        title="Guide the pathway."
        text="Support workflow, attendance, safety, encouragement, and access to resources that help youth and teams succeed."
        cards={[
          {
            t: "Attendance + Assignments",
            d: "Track workflow, responsibilities, and daily progress.",
          },
          {
            t: "Wellness + Resources",
            d: "Connect participants to support systems that strengthen outcomes.",
          },
        ]}
      />
    );
  }

  if (page === "customer") {
    return (
      <div style={shell}>
        <div style={wrap}>
          <TopBar />
          <Back />

          <div style={{ ...label, marginTop: 26 }}>Marketplace</div>

          <h1
            style={{
              fontSize: isMobile ? 44 : 76,
              lineHeight: 0.96,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: "18px 0 0",
            }}
          >
            Fresh food. Real choices.
          </h1>

          <p
            style={{
              marginTop: 24,
              maxWidth: 940,
              fontSize: isMobile ? 21 : 28,
              lineHeight: 1.48,
              color: "rgba(255,255,255,0.84)",
            }}
          >
            Shop produce, seedlings, Bubble Babies™, and connected food
            experiences. Healthy choices over overprocessed substitutes.
          </p>

          <div style={pageGrid}>
            <div style={{ ...glass, overflow: "hidden", padding: 0 }}>
              <div style={{ position: "relative", minHeight: 620 }}>
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 620,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.18), rgba(0,0,0,0.05))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: 30,
                    right: 30,
                    bottom: 30,
                  }}
                >
                  <div style={label}>Live Marketplace</div>

                  <div
                    style={{
                      marginTop: 12,
                      fontSize: isMobile ? 30 : 44,
                      lineHeight: 1.02,
                      fontWeight: 800,
                    }}
                  >
                    Bronson Family Farm x GrownBy
                  </div>

                  <p
                    style={{
                      marginTop: 14,
                      fontSize: 19,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.86)",
                      maxWidth: 540,
                    }}
                  >
                    Produce, seedlings, Bubble Babies™, recipes, and healthier
                    pathways for families.
                  </p>

                  <a
                    href="https://grownby.com/farms/bronson-family-farm/shop"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...primaryBtn,
                      display: "inline-block",
                      textDecoration: "none",
                      marginTop: 18,
                    }}
                  >
                    Enter Live Store ↗
                  </a>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gap: 18 }}>
              <div style={{ ...glass, padding: 26 }}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>
                  Food + wellness
                </div>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 20,
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Shop fresh food and connect it to better eating habits.
                </p>
              </div>

              <div style={{ ...glass, padding: 26 }}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>
                  Recipes + guidance
                </div>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 20,
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Make healthy choices easier, clearer, and practical.
                </p>
              </div>

              <div style={{ ...glass, padding: 26 }}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>
                  Bubble Babies™
                </div>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 20,
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Seedlings, learning, and accessible growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={shell}>
      <div style={wrap}>
        <TopBar />

        <div style={heroGrid}>
          <div style={{ maxWidth: 830 }}>
            <div style={label}>Developed by Bronson Family Farm</div>

            <h1
              style={{
                fontSize: isMobile ? 62 : 116,
                lineHeight: 0.88,
                fontWeight: 800,
                letterSpacing: "-0.06em",
                margin: "18px 0 0",
              }}
            >
              Bronson
              <br />
              Family
              <br />
              Farm
            </h1>

            <p
              style={{
                marginTop: 26,
                maxWidth: 760,
                fontSize: isMobile ? 22 : 31,
                lineHeight: 1.45,
                color: "rgba(255,
