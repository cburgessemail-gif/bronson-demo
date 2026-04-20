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
      "radial-gradient(circle at top left, rgba(17,118,67,0.26), transparent 22%), radial-gradient(circle at top right, rgba(132,179,78,0.10), transparent 24%), linear-gradient(135deg, #02130d 0%, #062019 34%, #083127 64%, #03100b 100%)",
    color: "#ffffff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const wrap: React.CSSProperties = {
    maxWidth: "1320px",
    margin: "0 auto",
    padding: isMobile ? "22px 18px 42px" : "34px 30px 64px",
  };

  const glass: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderRadius: 30,
    boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
  };

  const label: React.CSSProperties = {
    fontSize: 12,
    letterSpacing: "0.34em",
    textTransform: "uppercase",
    color: "rgba(194,244,204,0.92)",
  };

  const topBar: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px 18px",
    alignItems: "center",
    color: "rgba(255,255,255,0.82)",
    fontSize: 15,
  };

  const heroGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1.02fr 0.98fr",
    gap: 30,
    alignItems: "stretch",
    marginTop: 28,
  };

  const tilesGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(5, minmax(0, 1fr))",
    gap: 20,
    marginTop: 30,
  };

  const twoCol: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 22,
    marginTop: 30,
  };

  const threeCol: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
    gap: 18,
    marginTop: 30,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? 60 : 110,
    lineHeight: 0.9,
    letterSpacing: "-0.055em",
    fontWeight: 800,
    margin: "18px 0 0",
  };

  const pageTitle: React.CSSProperties = {
    fontSize: isMobile ? 44 : 76,
    lineHeight: 0.96,
    letterSpacing: "-0.04em",
    fontWeight: 800,
    margin: "18px 0 0",
  };

  const pageText: React.CSSProperties = {
    marginTop: 24,
    maxWidth: 940,
    fontSize: isMobile ? 21 : 28,
    lineHeight: 1.48,
    color: "rgba(255,255,255,0.84)",
  };

  const primaryBtn: React.CSSProperties = {
    border: "none",
    borderRadius: 999,
    background: "#ffffff",
    color: "#03100b",
    padding: "16px 24px",
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.16)",
  };

  const secondaryBtn: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    padding: "16px 24px",
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
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

  function BackButton() {
    return (
      <button
        onClick={() => setPage("home")}
        style={{ ...secondaryBtn, padding: "12px 18px", marginTop: 18 }}
      >
        ← Home
      </button>
    );
  }

  function FeatureCard({
    title,
    text,
  }: {
    title: string;
    text: string;
  }) {
    return (
      <div style={{ ...glass, padding: 26 }}>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.08,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          {title}
        </div>
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.78)",
            marginTop: 16,
          }}
        >
          {text}
        </p>
      </div>
    );
  }

  function Tile({
    marker,
    title,
    text,
    onClick,
  }: {
    marker: string;
    title: string;
    text: string;
    onClick: () => void;
  }) {
    return (
      <button
        onClick={onClick}
        style={{
          ...glass,
          padding: 22,
          minHeight: 220,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          textAlign: "left",
          color: "#ffffff",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.05))",
        }}
      >
        <div>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.11)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: marker.length > 1 ? 14 : 18,
              fontWeight: 800,
              marginBottom: 18,
            }}
          >
            {marker}
          </div>

          <div
            style={{
              fontSize: 26,
              lineHeight: 1.06,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            {title}
          </div>

          <div
            style={{
              marginTop: 12,
              fontSize: 18,
              lineHeight: 1.48,
              color: "rgba(255,255,255,0.80)",
            }}
          >
            {text}
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 800,
            color: "#bdf2ca",
          }}
        >
          Enter
        </div>
      </button>
    );
  }

  function SimplePage({
    eyebrow,
    title,
    text,
    cards,
  }: {
    eyebrow: string;
    title: string;
    text: string;
    cards: { title: string; text: string }[];
  }) {
    const gridStyle =
      cards.length === 2 ? twoCol : cards.length === 3 ? threeCol : twoCol;

    return (
      <div style={shell}>
        <div style={wrap}>
          <TopBar />
          <BackButton />
          <div style={{ ...label, marginTop: 26 }}>{eyebrow}</div>
          <h1 style={pageTitle}>{title}</h1>
          <p style={pageText}>{text}</p>

          <div style={gridStyle}>
            {cards.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (page === "guest") {
    return (
      <SimplePage
        eyebrow="Guest Experience"
        title="See the land differently."
        text="Bronson Family Farm restores land, responds to rising food costs, reconnects community, and creates meaningful opportunity through agriculture, learning, and shared purpose."
        cards={[
          {
            title: "Why it matters",
            text: "Healthy food access, local opportunity, education, and community rebuilding belong together.",
          },
          {
            title: "What it becomes",
            text: "A regenerative ecosystem with food, training, marketplace access, and belonging.",
          },
        ]}
      />
    );
  }

  if (page === "grower") {
    return (
      <SimplePage
        eyebrow="Grower Portal"
        title="Plan, grow, and reach market."
        text="Production planning, shared resources, and stronger pathways to selling, collaboration, and long-term growth."
        cards={[
          {
            title: "Crop Planning",
            text: "Seasonal production planning and next-step growing pathways.",
          },
          {
            title: "Market Access",
            text: "Multiple channels to move produce, products, and value-added goods.",
          },
          {
            title: "Shared Resources",
            text: "Training, collaboration, and a stronger ecosystem for growers.",
          },
        ]}
      />
    );
  }

  if (page === "youth") {
    return (
      <SimplePage
        eyebrow="Youth Workforce"
        title="Learn by doing."
        text="Build confidence, skills, work habits, and future direction through hands-on experience connected to food systems, land stewardship, and real opportunity."
        cards={[
          {
            title: "Hands-On Farm Learning",
            text: "Real-world experience through participation, responsibility, and skill-building.",
          },
          {
            title: "Career Readiness",
            text: "Training that supports discipline, confidence, teamwork, and future pathways.",
          },
        ]}
      />
    );
  }

  if (page === "supervisor") {
    return (
      <SimplePage
        eyebrow="Supervisor Portal"
        title="Guide the pathway."
        text="Support workflow, attendance, safety, encouragement, and access to resources that help youth and teams succeed."
        cards={[
          {
            title: "Attendance + Assignments",
            text: "Track workflow, responsibilities, and day-to-day support needs.",
          },
          {
            title: "Wellness + Resources",
            text: "Connect youth and teams to support systems that strengthen outcomes.",
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
          <BackButton />

          <div style={{ ...label, marginTop: 26 }}>Marketplace</div>
          <h1 style={pageTitle}>Fresh food. Real choices.</h1>
          <p style={pageText}>
            Shop produce, seedlings, Bubble Babies™, and connected food
            experiences. This space centers healthy choices instead of
            overprocessed substitutes.
          </p>

          <div style={twoCol}>
            <div style={{ ...glass, overflow: "hidden", padding: 0 }}>
              <div
                style={{
                  position: "relative",
                  minHeight: isMobile ? 400 : 620,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
                  alt="Fresh produce marketplace"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    minHeight: isMobile ? 400 : 620,
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.22), rgba(0,0,0,0.05))",
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
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Bronson Family Farm x GrownBy
                  </div>
                  <p
                    style={{
                      marginTop: 14,
                      maxWidth: 560,
                      fontSize: 19,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.86)",
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
              <FeatureCard
                title="Food + wellness"
                text="Shop fresh food and connect it to better eating habits, nutrition, and family meals."
              />
              <FeatureCard
                title="Recipes + guidance"
                text="Make healthy choices easier, clearer, and more practical."
              />
              <FeatureCard
                title="Bubble Babies™"
                text="A signature Bronson Family Farm experience connecting seedlings, learning, and accessible growing."
              />
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

            <h1 style={titleStyle}>
              Bronson
              <br />
              Family
              <br />
              Farm
            </h1>

            <p
              style={{
                marginTop: 24,
                maxWidth: 760,
                fontSize: isMobile ? 22 : 31,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.84)",
              }}
            >
              A regenerative ecosystem responding to rising food costs,
              unhealthy substitutes, community disconnection, and the need for
              real opportunity.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 30,
              }}
            >
              <button onClick={() => setPage("guest")} style={primaryBtn}>
                Enter Live Demo
              </button>

              <button onClick={() => setPage("customer")} style={secondaryBtn}>
                Visit Marketplace
              </button>
            </div>
          </div>

          <div style={{ ...glass, minHeight: isMobile ? 380 : 570, padding: 26 }}>
            <div
              style={{
                height: "100%",
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.10)",
                background:
                  "radial-gradient(circle at 18% 12%, rgba(123,191,132,0.22), transparent 22%), radial-gradient(circle at 72% 30%, rgba(69,132,95,0.18), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={label}>Ecosystem</div>
                <div
                  style={{
                    marginTop: 18,
                    fontSize: isMobile ? 34 : 50,
                    lineHeight: 1.06,
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                    color: "#ffffff",
                  }}
                >
                  Land.
                  <br />
                  Marketplace.
                  <br />
                  Growers.
                  <br />
                  Youth workforce.
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                {["Community", "Food Access", "Training", "Opportunity"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{
                        borderRadius: 18,
                        border: "1px solid rgba(255,255,255,0.10)",
                        background: "rgba(255,255,255,0.08)",
                        padding: "16px 18px",
                        fontSize: 18,
                        color: "rgba(255,255,255,0.92)",
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div style={tilesGrid}>
          <Tile
            marker="G"
            title="Guest"
            text="Story, mission, and meaning"
            onClick={() => setPage("guest")}
          />
          <Tile
            marker="C"
            title="Customer"
            text="Food, recipes, and wellness"
            onClick={() => setPage("customer")}
          />
          <Tile
            marker="GR"
            title="Grower"
            text="Production and market access"
            onClick={() => setPage("grower")}
          />
          <Tile
            marker="Y"
            title="Youth Worker"
            text="Training and future direction"
            onClick={() => setPage("youth")}
          />
          <Tile
            marker="S"
            title="Supervisor"
            text="Guidance, workflow, and support"
            onClick={() => setPage("supervisor")}
          />
        </div>
      </div>
    </div>
  );
}
