import React, { useEffect, useState } from "react";
import {
  Play,
  ShoppingCart,
  Leaf,
  Users,
  Shield,
  ArrowLeft,
  MapPin,
  Sun,
  Cloud,
  ExternalLink,
} from "lucide-react";

type Page =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor";

const shellStyle: React.CSSProperties = {
  minHeight: "100vh",
  color: "#ffffff",
  background:
    "radial-gradient(circle at top left, rgba(56, 104, 78, 0.28), transparent 26%), radial-gradient(circle at top right, rgba(121, 168, 103, 0.16), transparent 24%), linear-gradient(135deg, #03140f 0%, #07211a 40%, #0a2a20 65%, #04110d 100%)",
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const wrapStyle: React.CSSProperties = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "32px 24px 48px",
};

const topBarStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px 20px",
  alignItems: "center",
  color: "rgba(255,255,255,0.78)",
  fontSize: "15px",
};

const heroGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "28px",
  alignItems: "stretch",
  marginTop: "40px",
};

const panelStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  borderRadius: "30px",
  boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
};

const buttonPrimaryStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  borderRadius: "999px",
  background: "#ffffff",
  color: "#000000",
  border: "none",
  padding: "16px 24px",
  fontSize: "15px",
  fontWeight: 700,
  cursor: "pointer",
};

const buttonSecondaryStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.16)",
  padding: "16px 24px",
  fontSize: "15px",
  fontWeight: 700,
  cursor: "pointer",
};

const tilesGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: "18px",
  marginTop: "26px",
};

const tileStyle: React.CSSProperties = {
  ...panelStyle,
  padding: "22px",
  cursor: "pointer",
  minHeight: "190px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const pageGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "28px",
  marginTop: "32px",
};

const infoCardStyle: React.CSSProperties = {
  ...panelStyle,
  padding: "24px",
};

function iconChip(icon: React.ReactNode) {
  return (
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
        marginBottom: 18,
      }}
    >
      {icon}
    </div>
  );
}

function TopBar({ time }: { time: string }) {
  return (
    <div style={topBarStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <MapPin size={16} />
        <span>Youngstown, Ohio</span>
      </div>
      <div>{time}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Sun size={16} />
        <span>61°</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Cloud size={16} />
        <span>Clear</span>
      </div>
    </div>
  );
}

function Tile({
  icon,
  title,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button style={tileStyle} onClick={onClick}>
      <div>
        {iconChip(icon)}
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
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "#b6efc7",
          textTransform: "uppercase",
        }}
      >
        Enter
      </div>
    </button>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [time, setTime] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    const resize = () => setIsMobile(window.innerWidth < 980);

    tick();
    resize();

    const timer = setInterval(tick, 1000);
    window.addEventListener("resize", resize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const responsiveHeroGrid: React.CSSProperties = {
    ...heroGridStyle,
    gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
  };

  const responsiveTilesGrid: React.CSSProperties = {
    ...tilesGridStyle,
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(5, minmax(0, 1fr))",
  };

  const responsivePageGrid: React.CSSProperties = {
    ...pageGridStyle,
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
  };

  const backButton = (
    <button
      onClick={() => setPage("home")}
      style={{
        ...buttonSecondaryStyle,
        padding: "12px 18px",
        marginTop: 18,
        marginBottom: 24,
      }}
    >
      <ArrowLeft size={16} />
      Home
    </button>
  );

  if (page === "guest") {
    return (
      <div style={shellStyle}>
        <div style={wrapStyle}>
          <TopBar time={time} />
          {backButton}

          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(190, 243, 201, 0.85)",
            }}
          >
            Guest Experience
          </div>

          <h1
            style={{
              fontSize: isMobile ? 46 : 78,
              lineHeight: 0.98,
              margin: "18px 0 0",
              fontWeight: 800,
            }}
          >
            See the land differently.
          </h1>

          <p
            style={{
              maxWidth: 900,
              fontSize: isMobile ? 21 : 28,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              marginTop: 24,
            }}
          >
            Bronson Family Farm is designed to restore land, respond to rising
            food costs, reconnect community, and create meaningful opportunity
            through agriculture, learning, and shared purpose.
          </p>

          <div style={responsivePageGrid}>
            <div style={infoCardStyle}>
              <div style={{ fontSize: 30, fontWeight: 700 }}>
                Why it matters
              </div>
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

            <div style={infoCardStyle}>
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
                A regenerative farm ecosystem with food, training, marketplace
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
      <div style={shellStyle}>
        <div style={wrapStyle}>
          <TopBar time={time} />
          {backButton}

          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(190, 243, 201, 0.85)",
            }}
          >
            Marketplace
          </div>

          <h1
            style={{
              fontSize: isMobile ? 46 : 78,
              lineHeight: 0.98,
              margin: "18px 0 0",
              fontWeight: 800,
            }}
          >
            Fresh food. Real choices.
          </h1>

          <p
            style={{
              maxWidth: 920,
              fontSize: isMobile ? 21 : 28,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              marginTop: 24,
            }}
          >
            Shop produce, seedlings, Bubble Babies™, and connected food
            experiences. This space should feel alive, welcoming, and centered
            on healthy choices instead of overprocessed substitutes.
          </p>

          <div style={responsivePageGrid}>
            <div style={{ ...infoCardStyle, overflow: "hidden", padding: 0 }}>
              <div style={{ position: "relative", minHeight: isMobile ? 360 : 560 }}>
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
                  alt="Fresh produce marketplace"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: isMobile ? 360 : 560,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.22), rgba(0,0,0,0.10))",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 28,
                    right: 28,
                    bottom: 28,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      color: "rgba(190, 243, 201, 0.88)",
                    }}
                  >
                    Live Marketplace
                  </div>
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: isMobile ? 28 : 38,
                      fontWeight: 800,
                      lineHeight: 1.1,
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
                      color: "rgba(255,255,255,0.82)",
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
                      ...buttonPrimaryStyle,
                      marginTop: 18,
                      textDecoration: "none",
                      width: "fit-content",
                    }}
                  >
                    Enter Live Store
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gap: 18 }}>
              <div style={infoCardStyle}>
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

              <div style={infoCardStyle}>
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

              <div style={infoCardStyle}>
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
      <div style={shellStyle}>
        <div style={wrapStyle}>
          <TopBar time={time} />
          {backButton}

          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(190, 243, 201, 0.85)",
            }}
          >
            Grower Portal
          </div>

          <h1
            style={{
              fontSize: isMobile ? 46 : 78,
              lineHeight: 0.98,
              margin: "18px 0 0",
              fontWeight: 800,
            }}
          >
            Plan, grow, and reach market.
          </h1>

          <p
            style={{
              maxWidth: 900,
              fontSize: isMobile ? 21 : 28,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              marginTop: 24,
            }}
          >
            Production planning, shared resources, and stronger pathways to
            selling, collaboration, and long-term growth.
          </p>

          <div style={responsiveTilesGrid}>
            <div style={infoCardStyle}>Crop Planning</div>
            <div style={infoCardStyle}>Market Access</div>
            <div style={infoCardStyle}>Shared Resources</div>
            <div style={infoCardStyle}>Training</div>
            <div style={infoCardStyle}>Collaboration</div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "youth") {
    return (
      <div style={shellStyle}>
        <div style={wrapStyle}>
          <TopBar time={time} />
          {backButton}

          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(190, 243, 201, 0.85)",
            }}
          >
            Youth Workforce
          </div>

          <h1
            style={{
              fontSize: isMobile ? 46 : 78,
              lineHeight: 0.98,
              margin: "18px 0 0",
              fontWeight: 800,
            }}
          >
            Learn by doing.
          </h1>

          <p
            style={{
              maxWidth: 900,
              fontSize: isMobile ? 21 : 28,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              marginTop: 24,
            }}
          >
            Build confidence, skills, work habits, and future direction through
            hands-on experience connected to food systems, land stewardship, and
            real opportunity.
          </p>

          <div style={responsivePageGrid}>
            <div style={infoCardStyle}>Hands-On Farm Learning</div>
            <div style={infoCardStyle}>Career Readiness</div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "supervisor") {
    return (
      <div style={shellStyle}>
        <div style={wrapStyle}>
          <TopBar time={time} />
          {backButton}

          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(190, 243, 201, 0.85)",
            }}
          >
            Supervisor Portal
          </div>

          <h1
            style={{
              fontSize: isMobile ? 46 : 78,
              lineHeight: 0.98,
              margin: "18px 0 0",
              fontWeight: 800,
            }}
          >
            Guide the pathway.
          </h1>

          <p
            style={{
              maxWidth: 900,
              fontSize: isMobile ? 21 : 28,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              marginTop: 24,
            }}
          >
            Support workflow, attendance, safety, encouragement, and access to
            resources that help youth and teams succeed.
          </p>

          <div style={responsivePageGrid}>
            <div style={infoCardStyle}>Attendance + Assignments</div>
            <div style={infoCardStyle}>Wellness + Resources</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={shellStyle}>
      <div style={wrapStyle}>
        <TopBar time={time} />

        <div style={responsiveHeroGrid}>
          <div style={{ maxWidth: 820 }}>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(190, 243, 201, 0.85)",
              }}
            >
              Developed by Bronson Family Farm
            </div>

            <h1
              style={{
                fontSize: isMobile ? 56 : 102,
                lineHeight: 0.94,
                margin: "20px 0 0",
                fontWeight: 800,
              }}
            >
              Bronson Family
              <br />
              Farm
            </h1>

            <p
              style={{
                marginTop: 24,
                maxWidth: 760,
                fontSize: isMobile ? 22 : 30,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.82)",
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
                marginTop: 28,
              }}
            >
              <button
                onClick={() => setPage("guest")}
                style={buttonPrimaryStyle}
              >
                <Play size={18} />
                Enter Live Demo
              </button>

              <button
                onClick={() => setPage("customer")}
                style={buttonSecondaryStyle}
              >
                <ShoppingCart size={18} />
                Visit Marketplace
              </button>
            </div>
          </div>

          <div style={{ ...panelStyle, minHeight: isMobile ? 360 : 560, padding: 28 }}>
            <div
              style={{
                height: "100%",
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.10)",
                background:
                  "radial-gradient(circle at 18% 12%, rgba(123, 191, 132, 0.22), transparent 22%), radial-gradient(circle at 72% 30%, rgba(69, 132, 95, 0.18), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "rgba(190, 243, 201, 0.82)",
                  }}
                >
                  Ecosystem
                </div>

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

        <div style={responsiveTilesGrid}>
          <Tile
            icon={<Play size={22} />}
            title="Guest"
            text="Story, mission, and meaning"
            onClick={() => setPage("guest")}
          />
          <Tile
            icon={<ShoppingCart size={22} />}
            title="Customer"
            text="Food, recipes, and wellness"
            onClick={() => setPage("customer")}
          />
          <Tile
            icon={<Leaf size={22} />}
            title="Grower"
            text="Production and market access"
            onClick={() => setPage("grower")}
          />
          <Tile
            icon={<Users size={22} />}
            title="Youth Worker"
            text="Training and future direction"
            onClick={() => setPage("youth")}
          />
          <Tile
            icon={<Shield size={22} />}
            title="Supervisor"
            text="Guidance, workflow, and support"
            onClick={() => setPage("supervisor")}
          />
        </div>
      </div>
    </div>
  );
}
