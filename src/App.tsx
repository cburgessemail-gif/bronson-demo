import React, { useState } from "react";

type View =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

export default function App() {
  const [view, setView] = useState<View>("home");

  const navItems: { key: View; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "guest", label: "Guest" },
    { key: "customer", label: "Customer" },
    { key: "marketplace", label: "Marketplace" },
    { key: "grower", label: "Grower" },
    { key: "youth", label: "Youth Workforce" },
    { key: "partners", label: "Partners" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f3efe4 0%, #f8f8f4 45%, #eef4ee 100%)",
        color: "#163327",
        fontFamily:
          'Inter, Arial, Helvetica, sans-serif',
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(7, 49, 36, 0.96)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                display: "grid",
                placeItems: "center",
                background: "rgba(240, 215, 132, 0.18)",
                color: "#f5df96",
                fontSize: "22px",
              }}
            >
              🌿
            </div>
            <div>
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Bronson Family Farm
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                Regenerative Farm Ecosystem Demo
              </div>
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setView(item.key)}
                style={{
                  border: view === item.key
                    ? "1px solid rgba(240,215,132,0.55)"
                    : "1px solid rgba(255,255,255,0.14)",
                  background:
                    view === item.key
                      ? "rgba(240,215,132,0.18)"
                      : "rgba(255,255,255,0.06)",
                  color: view === item.key ? "#fff3c4" : "#ffffff",
                  borderRadius: "999px",
                  padding: "10px 14px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {view === "home" && (
        <section style={{ padding: "44px 20px 54px" }}>
          <div
            style={{
              maxWidth: "1360px",
              margin: "0 auto",
              background:
                "linear-gradient(135deg, #0b3a2d 0%, #0f4b3b 48%, #1c7049 100%)",
              borderRadius: "28px",
              padding: "54px 42px",
              boxShadow: "0 24px 60px rgba(12, 36, 27, 0.20)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.10)",
                color: "#f3ebc9",
                padding: "8px 14px",
                fontWeight: 800,
                fontSize: "13px",
                marginBottom: "20px",
              }}
            >
              Step into the ecosystem
            </div>

            <h1
              style={{
                margin: 0,
                color: "#ffffff",
                fontSize: "clamp(34px, 6vw, 64px)",
                lineHeight: 1.02,
                fontWeight: 800,
                maxWidth: "900px",
              }}
            >
              Bronson Family Farm is more than a farm.
            </h1>

            <p
              style={{
                marginTop: "18px",
                maxWidth: "820px",
                color: "rgba(255,255,255,0.84)",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              It is a regenerative ecosystem connecting land, food access,
              marketplace activity, growers, youth workforce development,
              education, and partnership in Youngstown.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <button
                onClick={() => setView("marketplace")}
                style={{
                  border: "none",
                  background: "#f0d784",
                  color: "#24311d",
                  borderRadius: "999px",
                  padding: "14px 22px",
                  fontWeight: 800,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Enter Marketplace
              </button>

              <button
                onClick={() => setView("guest")}
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  borderRadius: "999px",
                  padding: "14px 22px",
                  fontWeight: 700,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Begin Guided Tour
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
                marginTop: "34px",
              }}
            >
              {[
                ["Guest", "Discover the story, the land, and the purpose."],
                ["Customer", "Find produce, nutrition guidance, and recipes."],
                ["Marketplace", "Connect directly to real farm commerce."],
                ["Grower", "Support production, timing, and participation."],
                ["Youth Workforce", "Show training, structure, and support."],
                ["Partners", "Invite cities, schools, sponsors, and institutions."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "22px",
                    padding: "18px",
                  }}
                >
                  <div
                    style={{
                      color: "#fff4c9",
                      fontWeight: 800,
                      fontSize: "17px",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      marginTop: "8px",
                      color: "rgba(255,255,255,0.76)",
                      lineHeight: 1.6,
                      fontSize: "14px",
                    }}
                  >
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {view === "guest" && (
        <PageSection
          title="Guest Experience"
          text="Step into a regenerative ecosystem built to restore land, welcome families, improve access to healthier food, and reconnect people to purpose."
        >
          <CardGrid>
            <InfoCard
              title="Why it matters"
              text="Rising food costs push families toward overprocessed food. This ecosystem responds with land-based solutions, education, access, and community return."
            />
            <InfoCard
              title="What guests discover"
              text="The story, the land, the farm vision, the legacy, and the connection between restoration, health, and opportunity."
            />
            <InfoCard
              title="Where they go next"
              text="Guests can continue into the customer journey, marketplace access, partner pathways, or the youth workforce story."
            />
          </CardGrid>
        </PageSection>
      )}

      {view === "customer" && (
        <PageSection
          title="Customer Experience"
          text="Customers should feel welcomed, informed, and invited back through produce access, nutrition guidance, recipes, and a clear path into the marketplace."
        >
          <CardGrid>
            <InfoCard
              title="Shop Seasonal Produce"
              text="Fresh seedlings, produce, and market offerings with simple ordering and pickup."
            />
            <InfoCard
              title="Nutrition Guidance"
              text="Practical food education that helps people make stronger everyday choices."
            />
            <InfoCard
              title="Recipes & Return Visits"
              text="Meal ideas and product inspiration that encourage repeat engagement."
            />
          </CardGrid>

          <div style={{ marginTop: "22px" }}>
            <button
              onClick={() => setView("marketplace")}
              style={secondaryAction}
            >
              Go to Marketplace
            </button>
          </div>
        </PageSection>
      )}

      {view === "marketplace" && (
        <PageSection
          title="Marketplace Experience"
          text="This should be one of the strongest areas of the demo, showing real farm commerce, seasonal offerings, customer return, and a direct path into GrownBy."
        >
          <div
            style={{
              background: "linear-gradient(135deg, #fff9e8 0%, #f5f7ef 44%, #eef5ef 100%)",
              border: "1px solid rgba(14,74,57,0.08)",
              borderRadius: "28px",
              padding: "28px",
            }}
          >
            <a
              href="https://grownby.com/farms/bronson-family-farm/shop"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                textDecoration: "none",
                border: "none",
                background: "#f0d784",
                color: "#24311d",
                borderRadius: "999px",
                padding: "14px 22px",
                fontWeight: 800,
                fontSize: "15px",
              }}
            >
              Open GrownBy Store
            </a>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                marginTop: "24px",
              }}
            >
              <ProductCard
                tone="linear-gradient(135deg, #cde2a6 0%, #7eb05b 55%, #4f7c3f 100%)"
                title="Fresh Greens Bundle"
                text="SNAP-friendly produce focus and seasonal pickup."
              />
              <ProductCard
                tone="linear-gradient(135deg, #f4d784 0%, #d7863f 52%, #8c4f1f 100%)"
                title="Seedlings & Starts"
                text="Garden-ready options for households and community growers."
              />
              <ProductCard
                tone="linear-gradient(135deg, #f3c2a7 0%, #d96f5d 48%, #8f433d 100%)"
                title="Bubble Babies™"
                text="A signature product connecting growing, learning, and brand identity."
              />
            </div>
          </div>
        </PageSection>
      )}

      {view === "grower" && (
        <PageSection
          title="Grower Experience"
          text="Growers enter a supportive ecosystem where production, seasonality, visibility, and market connection work together."
        >
          <CardGrid>
            <InfoCard
              title="Production Planning"
              text="Support for crop timing, starts, seasonality, and readiness."
            />
            <InfoCard
              title="Market Connection"
              text="A clear bridge from growing into community commerce."
            />
            <InfoCard
              title="Shared Ecosystem"
              text="Growers should feel welcomed, useful, and visible inside a larger mission."
            />
          </CardGrid>
        </PageSection>
      )}

      {view === "youth" && (
        <PageSection
          title="Youth Workforce Experience"
          text="This pathway should show hands-on learning, work habits, structure, supervision, and support. Supervisor belongs within Youth Workforce only."
        >
          <CardGrid>
            <InfoCard
              title="Hands-On Learning"
              text="Land-based workforce exposure with real responsibility."
            />
            <InfoCard
              title="Supervisor Support"
              text="Guidance, accountability, workflow support, and connected wellness-oriented support resources."
            />
            <InfoCard
              title="Meaningful Participation"
              text="Youth should see themselves inside a real ecosystem, not a pretend one."
            />
          </CardGrid>
        </PageSection>
      )}

      {view === "partners" && (
        <PageSection
          title="Partners Experience"
          text="Partners should clearly see how their involvement supports food access, workforce development, agritourism, restoration, and measurable community benefit."
        >
          <CardGrid>
            <InfoCard
              title="City & Civic Alignment"
              text="Land use, youth pathways, neighborhood benefit, and public value."
            />
            <InfoCard
              title="Institutional Collaboration"
              text="A place for schools, universities, health organizations, and nonprofits to engage."
            />
            <InfoCard
              title="Sponsor Visibility"
              text="A credible platform for resource partners and supporters."
            />
          </CardGrid>
        </PageSection>
      )}

      <footer
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 20px 34px",
          color: "#5f7067",
          fontSize: "14px",
        }}
      >
        Developed by Bronson Family Farm
      </footer>
    </div>
  );
}

function PageSection({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "34px 20px 54px" }}>
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.78)",
          border: "1px solid rgba(14,74,57,0.10)",
          borderRadius: "28px",
          padding: "30px",
          boxShadow: "0 14px 30px rgba(25, 47, 35, 0.08)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.08,
            color: "#14392b",
            fontWeight: 800,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            marginTop: "14px",
            color: "#42594f",
            lineHeight: 1.7,
            fontSize: "17px",
            maxWidth: "900px",
          }}
        >
          {text}
        </p>
        {children}
      </div>
    </section>
  );
}

function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "16px",
        marginTop: "24px",
      }}
    >
      {children}
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(14,74,57,0.08)",
        borderRadius: "22px",
        padding: "22px",
      }}
    >
      <div
        style={{
          color: "#14392b",
          fontWeight: 800,
          fontSize: "19px",
          lineHeight: 1.15,
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: "10px",
          color: "#586961",
          lineHeight: 1.65,
          fontSize: "15px",
        }}
      >
        {text}
      </div>
    </div>
  );
}

function ProductCard({
  tone,
  title,
  text,
}: {
  tone: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(14,74,57,0.08)",
        borderRadius: "22px",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "160px", background: tone }} />
      <div style={{ padding: "18px" }}>
        <div
          style={{
            color: "#173126",
            fontWeight: 800,
            fontSize: "18px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "8px",
            color: "#5e6f67",
            lineHeight: 1.6,
            fontSize: "14px",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

const secondaryAction: React.CSSProperties = {
  border: "1px solid rgba(20,57,43,0.12)",
  background: "#ffffff",
  color: "#14392b",
  borderRadius: "999px",
  padding: "11px 16px",
  fontWeight: 700,
  fontSize: "14px",
  cursor: "pointer",
};
