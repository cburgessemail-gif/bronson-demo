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

    const updateScreen = () => {
      setIsMobile(window.innerWidth < 980);
    };

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
      "radial-gradient(circle at top left, rgba(62,122,84,0.28), transparent 26%), radial-gradient(circle at top right, rgba(143,181,95,0.12), transparent 24%), linear-gradient(135deg, #02120d 0%, #07221a 38%, #0a2d22 62%, #03100c 100%)",
    color: "#ffffff",
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const wrap: React.CSSProperties = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: isMobile ? "24px 18px 40px" : "30px 28px 54px",
  };

  const topBar: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px 18px",
    fontSize: 15,
    color: "rgba(255,255,255,0.78)",
    alignItems: "center",
  };

  const panel: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderRadius: 28,
    boxShadow: "0 18px 50px rgba(0,0,0,0.26)",
  };

  const buttonPrimary: React.CSSProperties = {
    border: "none",
    borderRadius: 999,
    background: "#ffffff",
    color: "#000000",
    padding: "15px 24px",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  };

  const buttonSecondary: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    padding: "15px 24px",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? 54 : 102,
    lineHeight: 0.92,
    fontWeight: 800,
    margin: "18px 0 0",
    letterSpacing: "-0.04em",
  };

  const pageTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? 42 : 74,
    lineHeight: 0.96,
    fontWeight: 800,
    margin: "18px 0 0",
    letterSpacing: "-0.03em",
  };

  const bodyText: React.CSSProperties = {
    marginTop: 24,
    maxWidth: 900,
    fontSize: isMobile ? 21 : 29,
    lineHeight: 1.45,
    color: "rgba(255,255,255,0.82)",
  };

  const heroGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
    gap: 26,
    alignItems: "stretch",
    marginTop: 34,
  };

  const tilesGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(5, minmax(0, 1fr))",
    gap: 18,
    marginTop: 26,
  };

  const twoCol: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 22,
    marginTop: 28,
  };

  const threeCol: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
    gap: 18,
    marginTop: 28,
  };

  const infoCard: React.CSSProperties = {
    ...panel,
    padding: 24,
  };

  const tile: React.CSSProperties = {
    ...panel,
    padding: 22,
    minHeight: 190,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    textAlign: "left",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    letterSpacing: "0.34em",
    textTransform: "uppercase",
    color: "rgba(190,243,201,0.86)",
  };

  const marketplaceImage =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80";

  function BackButton() {
    return (
      <button
        onClick={() => setPage("home")}
        style={{ ...buttonSecondary, padding: "12px 18px", marginTop: 18 }}
      >
        ← Home
      </button>
    );
  }

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

  function Tile({
    title,
    text,
    onClick,
  }: {
    title: string;
    text: string;
    onClick: () => void;
  }) {
    return (
      <button onClick={onClick} style={tile}>
        <div>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 18,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            •
          </div>

          <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </div>

          <div
            style={{
              marginTop: 12,
              fontSize: 18,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.76)",
            }}
          >
            {text}
          </div>
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#b7efc9",
          }}
        >
          Enter
        </div>
      </button>
    );
  }

  if (page === "guest") {
    return (
      <div style={shell}>
        <div style={wrap}>
          <TopBar />
          <BackButton />

          <div style={{ marginTop: 24, ...labelStyle }}>Guest Experience</div>
          <h1 style={pageTitleStyle}>See the land differently.</h1>
          <p style={bodyText}>
            Bronson Family Farm restores land, responds to rising food costs,
            reconnects community, and creates meaningful opportunity through
            agriculture, learning, and shared purpose.
          </p>

          <div style={twoCol}>
            <div style={infoCard}>
              <div style={{ fontSize: 30, fontWeight: 700 }}>Why it matters</div>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.75)",
                  marginTop: 16,
                }}
              >
                Healthy food access, local opportunity, education, and community
                rebuilding belong together.
              </p>
            </div>

            <div style={infoCard}>
              <div style={{ fontSize: 30, fontWeight: 700 }}>
                What it becomes
              </div>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.75)",
                  marginTop: 16,
                }}
              >
                A regenerative ecosystem with food, training, marketplace
                access, and belonging.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "customer") {
    return (
      <div style={shell}>
        <div style={wrap}>
          <TopBar />
          <BackButton />

          <div style={{ marginTop: 24, ...labelStyle }}>Marketplace</div>
          <h1 style={pageTitleStyle}>Fresh food. Real choices.</h1>
          <p style={bodyText}>
            Shop produce, seedlings, Bubble Babies™, and connected food
            experiences. This space centers healthy choices instead of
            overprocessed substitutes.
          </p>

          <div style={twoCol}>
            <div style={{ ...panel, overflow: "hidden", padding: 0 }}>
              <div style={{ position: "relative", minHeight: isMobile ? 360 : 560 }}>
                <img
                  src={marketplaceImage}
                  alt="Fresh produce marketplace"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    minHeight: isMobile ? 360 : 560,
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.84), rgba(0,0,0,0.24), rgba(0,0,0,0.10))",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 26,
                    right: 26,
                    bottom: 26,
                  }}
                >
                  <div style={labelStyle}>Live Marketplace</div>
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: isMobile ? 30 : 40,
                      lineHeight: 1.08,
                      fontWeight: 800,
                    }}
                  >
                    Bronson Family Farm x GrownBy
                  </div>
                  <p
                    style={{
                      marginTop: 14,
                      maxWidth: 520,
                      fontSize: 19,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.84)",
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
                      ...buttonPrimary,
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
              <div style={infoCard}>
                <div style={{ fontSize: 30, fontWeight: 700 }}>
                  Food + wellness
                </div>
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.75)",
                    marginTop: 16,
                  }}
                >
                  Shop fresh food and connect it to better eating habits,
                  nutrition, and family meals.
                </p>
              </div>

              <div style={infoCard}>
                <div style={{ fontSize: 30, fontWeight: 700 }}>
                  Recipes + guidance
                </div>
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.75)",
                    marginTop: 16,
                  }}
                >
                  Make healthy choices easier, clearer, and more practical.
                </p>
              </div>

              <div style={infoCard}>
                <div style={{ fontSize: 30, fontWeight: 700 }}>
                  Bubble Babies™
                </div>
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.75)",
                    marginTop: 16,
                  }}
                >
                  A signature Bronson Family Farm experience connecting
                  seedlings, learning, and accessible growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "grower") {
    return (
      <div style={shell}>
        <div style={wrap}>
          <TopBar />
          <BackButton />

          <div style={{ marginTop: 24, ...labelStyle }}>Grower Portal</div>
          <h1 style={pageTitleStyle}>Plan, grow, and reach market.</h1>
          <p style={bodyText}>
            Production planning, shared resources, and stronger pathways to
            selling, collaboration, and long-term growth.
          </p>

          <div style={threeCol}>
            <div style={infoCard}>Crop Planning</div>
            <div style={infoCard}>Market Access</div>
            <div style={infoCard}>Shared Resources</div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "youth") {
    return (
      <div style={shell}>
        <div style={wrap}>
          <TopBar />
          <BackButton />

          <div style={{ marginTop: 24, ...labelStyle }}>Youth Workforce</div>
          <h1 style={pageTitleStyle}>Learn by doing.</h1>
          <p style={bodyText}>
            Build confidence, skills, work habits, and future direction through
            hands-on experience connected to food systems, land stewardship,
            and real opportunity.
          </p>

          <div style={twoCol}>
            <div style={infoCard}>Hands-On Farm Learning</div>
            <div style={infoCard}>Career Readiness</div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "supervisor") {
    return (
      <div style={shell}>
        <div style={wrap}>
          <TopBar />
          <BackButton />

          <div style={{ marginTop: 24, ...labelStyle }}>Supervisor Portal</div>
          <h1 style={pageTitleStyle}>Guide the pathway.</h1>
          <p style={bodyText}>
            Support workflow, attendance, safety, encouragement, and access to
            resources that help youth and teams succeed.
          </p>

          <div style={twoCol}>
            <div style={infoCard}>Attendance + Assignments</div>
            <div style={infoCard}>Wellness + Resources</div>
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
          <div style={{ maxWidth: 820 }}>
            <div style={labelStyle}>Developed by Bronson Family Farm</div>

            <h1 style={titleStyle}>
              Bronson Family
              <br />
              Farm
            </h1>

            <p style={bodyText}>
              A regenerative ecosystem responding to rising food costs,
              unhealthy substitutes, community disconnection, and the need for
              real opportunity.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 28,
              }}
            >
              <button onClick={() => setPage("guest")} style={buttonPrimary}>
                Enter Live Demo
              </button>

              <button
                onClick={() => setPage("customer")}
                style={buttonSecondary}
              >
                Visit Marketplace
              </button>
            </div>
          </div>

          <div style={{ ...panel, minHeight: isMobile ? 360 : 560, padding: 26 }}>
            <div
              style={{
                height: "100%",
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.10)",
                background:
                  "radial-gradient(circle at 18% 12%, rgba(123, 191, 132, 0.24), transparent 22%), radial-gradient(circle at 72% 30%, rgba(69, 132, 95, 0.18), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={labelStyle}>Ecosystem</div>

                <div
                  style={{
                    marginTop: 18,
                    fontSize: isMobile ? 34 : 48,
                    lineHeight: 1.08,
                    fontWeight: 800,
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
                        color: "rgba(255,255,255,0.86)",
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
            title="Guest"
            text="Story, mission, and meaning"
            onClick={() => setPage("guest")}
          />
          <Tile
            title="Customer"
            text="Food, recipes, and wellness"
            onClick={() => setPage("customer")}
          />
          <Tile
            title="Grower"
            text="Production and market access"
            onClick={() => setPage("grower")}
          />
          <Tile
            title="Youth Worker"
            text="Training and future direction"
            onClick={() => setPage("youth")}
          />
          <Tile
            title="Supervisor"
            text="Guidance, workflow, and support"
            onClick={() => setPage("supervisor")}
          />
        </div>
      </div>
    </div>
  );
}
