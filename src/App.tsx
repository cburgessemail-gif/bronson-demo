import React, { useState } from "react";

type PageKey =
  | "home"
  | "story"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type LayerKey = "soundbite" | "intro" | "knowledge" | "purpose" | "next";

const STORE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const WEATHER_URL =
  "https://www.wunderground.com/hourly/us/oh/youngstown/44510";

/* ---------- LIVE IMAGES FROM PUBLIC FOLDER ---------- */

const IMAGES = {
  home: "/GrowArea.jpg",
  story: "/SAM_0220.JPG",
  guest: "/GrowArea2.jpg",
  customer: "/SAM_0255.JPG",
  marketplace: "/SAM_0225.JPG",
  grower: "/SAM_0299.JPG",
  youth: "/SAM_0301.JPG",
  partners: "/SAM_0313.JPG",
};

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

const pathways = [
  {
    id: "guest",
    title: "Guest",
    image: IMAGES.guest,
    text: {
      soundbite: "You are entering more than a farm.",
      intro:
        "Guests discover story, purpose, land restoration, and why this ecosystem matters.",
      knowledge:
        "Learn how agriculture, wellness, food access, and legacy connect here.",
      purpose:
        "This pathway helps people understand the meaning behind the project.",
      next:
        "Continue into events, marketplace, partnerships, and return visits.",
    },
  },
  {
    id: "customer",
    title: "Customer",
    image: IMAGES.customer,
    text: {
      soundbite: "Fresh food is more than a purchase.",
      intro:
        "Customers connect fresh produce to healthier living and better choices.",
      knowledge:
        "Learn seasonal value, nutrition, and why local food matters.",
      purpose:
        "This pathway helps people choose healthier food again and again.",
      next:
        "Return through weekly purchases, markets, and seasonal offerings.",
    },
  },
  {
    id: "marketplace",
    title: "Marketplace",
    image: IMAGES.marketplace,
    text: {
      soundbite: "This is where support becomes movement.",
      intro:
        "The marketplace turns interest into purchasing power and sustainability.",
      knowledge:
        "Every purchase helps strengthen the ecosystem and future growth.",
      purpose:
        "A living project needs a real engine of return and revenue.",
      next:
        "Enter the GrownBy marketplace and support the farm directly.",
    },
  },
  {
    id: "grower",
    title: "Grower",
    image: IMAGES.grower,
    text: {
      soundbite: "Growers need more than land.",
      intro:
        "Growers need visibility, connection, participation, and opportunity.",
      knowledge:
        "This ecosystem can connect growers to markets and shared learning.",
      purpose:
        "The pathway helps growers see where they fit and why to engage.",
      next:
        "Move toward collaboration, selling, events, and expansion.",
    },
  },
  {
    id: "youth",
    title: "Youth Workforce",
    image: IMAGES.youth,
    text: {
      soundbite: "This pathway grows people.",
      intro:
        "Youth gain responsibility, confidence, structure, and readiness.",
      knowledge:
        "Hands-on learning includes teamwork, agriculture, logistics, and growth.",
      purpose:
        "This pathway bridges exposure to future opportunity.",
      next:
        "Move into deeper training, leadership, and support systems.",
    },
  },
  {
    id: "partners",
    title: "Partners",
    image: IMAGES.partners,
    text: {
      soundbite: "Partnership here creates visible outcomes.",
      intro:
        "Resources become food access, learning, youth support, and renewal.",
      knowledge:
        "Partners can align with practical, local, measurable value.",
      purpose:
        "This pathway shows where collaboration makes sense.",
      next:
        "Move into sponsorship, planning, activation, and shared impact.",
    },
  },
];

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function HeroImage({
  src,
  height = 420,
  dark = true,
}: {
  src: string;
  height?: number;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        height,
        borderRadius: 30,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 25px 60px rgba(0,0,0,.18)",
      }}
    >
      {dark && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.45))",
          }}
        />
      )}
    </div>
  );
}

function Card({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 28,
        padding: 24,
        boxShadow: "0 18px 40px rgba(0,0,0,.08)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Btn({
  children,
  onClick,
  gold,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  gold?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "14px 22px",
        borderRadius: 16,
        border: "none",
        background: gold ? "#e8cf69" : "#0b5e43",
        color: gold ? "#2a2613" : "#fff",
        fontWeight: 800,
        cursor: "pointer",
        fontSize: 16,
      }}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [layer, setLayer] = useState<LayerKey>("soundbite");

  const active = pathways.find((p) => p.id === page);

  const currentText =
    active && active.text[layer as keyof typeof active.text];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#f4efe5 0%,#edf5ee 45%,#f7f7f7 100%)",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, Arial, sans-serif',
        color: "#173629",
      }}
    >
      <style>{`
        *{box-sizing:border-box}
        button{font-family:inherit}
        @media(max-width:1000px){
          .grid2,.grid3{grid-template-columns:1fr!important}
        }
      `}</style>

      <div
        style={{
          maxWidth: 1450,
          margin: "0 auto",
          padding: 20,
        }}
      >
        {/* TOP NAV */}
        <div
          style={{
            background: "#0a3f2d",
            color: "#fff",
            borderRadius: 24,
            padding: 22,
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              Bronson Family Farm
            </div>
            <div
              style={{
                opacity: 0.85,
                fontSize: 16,
              }}
            >
              More than a farm.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <Btn onClick={() => setPage("home")}>Home</Btn>
            <Btn onClick={() => setPage("story")}>Our Story</Btn>
            <Btn onClick={() => openExternal(WEATHER_URL)}>
              Weather
            </Btn>
            <Btn gold onClick={() => setPage("marketplace")}>
              Marketplace
            </Btn>
          </div>
        </div>

        {/* HOME */}
        {page === "home" && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={IMAGES.home} height={520} />
            </div>

            <div
              className="grid2"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr .8fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <Card>
                <div
                  style={{
                    fontSize: 58,
                    lineHeight: 1,
                    fontWeight: 800,
                  }}
                >
                  Bronson Family Farm
                </div>

                <div
                  style={{
                    marginTop: 10,
                    fontSize: 28,
                    color: "#607267",
                  }}
                >
                  More than a farm.
                </div>

                <div
                  style={{
                    marginTop: 24,
                    fontSize: 22,
                    lineHeight: 1.8,
                    color: "#52645b",
                  }}
                >
                  A regenerative ecosystem for food access,
                  marketplace activity, growers, youth
                  workforce development, education, and
                  community return.
                </div>

                <div
                  style={{
                    marginTop: 28,
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <Btn
                    onClick={() => {
                      setPage("guest");
                      setLayer("soundbite");
                    }}
                  >
                    Enter Experience
                  </Btn>

                  <Btn
                    gold
                    onClick={() => openExternal(STORE_URL)}
                  >
                    Open Store
                  </Btn>
                </div>
              </Card>

              <Card>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".24em",
                    textTransform: "uppercase",
                    color: "#85958b",
                    fontWeight: 800,
                  }}
                >
                  Why It Matters
                </div>

                <div
                  style={{
                    marginTop: 18,
                    fontSize: 20,
                    lineHeight: 1.8,
                    color: "#55685e",
                  }}
                >
                  Restore land. Grow healthy food. Create
                  opportunity. Build systems for Youngstown
                  and the Mahoning Valley Area.
                </div>

                <div
                  style={{
                    marginTop: 24,
                    display: "grid",
                    gap: 12,
                  }}
                >
                  <Btn
                    gold
                    onClick={() => openExternal(STORE_URL)}
                  >
                    Marketplace
                  </Btn>

                  <Btn
                    onClick={() => openExternal(WEATHER_URL)}
                  >
                    Weather
                  </Btn>
                </div>
              </Card>
            </div>

            <div
              className="grid3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 22,
                marginTop: 24,
              }}
            >
              {pathways.map((p) => (
                <Card key={p.id} style={{ padding: 0 }}>
                  <HeroImage
                    src={p.image}
                    height={220}
                    dark={false}
                  />

                  <div style={{ padding: 22 }}>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                      }}
                    >
                      {p.title}
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.7,
                        color: "#607267",
                      }}
                    >
                      {p.text.soundbite}
                    </div>

                    <div style={{ marginTop: 18 }}>
                      <Btn
                        onClick={() => {
                          setPage(
                            p.id as PageKey
                          );
                          setLayer("soundbite");
                        }}
                      >
                        Open Pathway
                      </Btn>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* STORY */}
        {page === "story" && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={IMAGES.story} height={520} />
            </div>

            <Card style={{ marginTop: 24 }}>
              <div
                style={{
                  fontSize: 54,
                  fontWeight: 800,
                }}
              >
                Our Story
              </div>

              <div
                style={{
                  marginTop: 22,
                  fontSize: 22,
                  lineHeight: 1.8,
                  color: "#55685e",
                }}
              >
                Inspired by family farming traditions and
                shaped for Youngstown’s future, Bronson
                Family Farm connects land restoration, food
                access, agritourism, education, and
                opportunity.
              </div>

              <div
                style={{
                  marginTop: 18,
                  fontSize: 22,
                  lineHeight: 1.8,
                  color: "#55685e",
                }}
              >
                The Bronson and Lorenzana legacy now moves
                into a new generation of purpose.
              </div>
            </Card>
          </>
        )}

        {/* PATHWAY PAGES */}
        {active && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage
                src={active.image}
                height={440}
              />
            </div>

            <div
              className="grid2"
              style={{
                display: "grid",
                gridTemplateColumns: ".8fr 1.2fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <Card>
                <div
                  style={{
                    fontSize: 42,
                    fontWeight: 800,
                  }}
                >
                  {active.title}
                </div>

                <div
                  style={{
                    marginTop: 18,
                    fontSize: 12,
                    letterSpacing: ".24em",
                    textTransform: "uppercase",
                    color: "#85958b",
                    fontWeight: 800,
                  }}
                >
                  Journey Layer
                </div>

                <div
                  style={{
                    marginTop: 12,
                    fontSize: 26,
                    fontWeight: 800,
                  }}
                >
                  {layer.toUpperCase()}
                </div>

                <div
                  style={{
                    marginTop: 24,
                    display: "grid",
                    gap: 10,
                  }}
                >
                  {layerOrder.map((l) => (
                    <button
                      key={l}
                      onClick={() =>
                        setLayer(l)
                      }
                      style={{
                        padding: "14px 16px",
                        borderRadius: 16,
                        border: "none",
                        cursor: "pointer",
                        background:
                          layer === l
                            ? "#0b5e43"
                            : "#eef3ef",
                        color:
                          layer === l
                            ? "#fff"
                            : "#173629",
                        fontWeight: 800,
                        textTransform:
                          "uppercase",
                        letterSpacing:
                          ".12em",
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 18,
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <Btn
                    onClick={() =>
                      setLayer(
                        layerOrder[
                          Math.max(
                            layerOrder.indexOf(
                              layer
                            ) - 1,
                            0
                          )
                        ]
                      )
                    }
                  >
                    Prev
                  </Btn>

                  <Btn
                    gold
                    onClick={() =>
                      setLayer(
                        layerOrder[
                          Math.min(
                            layerOrder.indexOf(
                              layer
                            ) + 1,
                            4
                          )
                        ]
                      )
                    }
                  >
                    Next
                  </Btn>
                </div>

                <div style={{ marginTop: 18 }}>
                  <Btn
                    onClick={() =>
                      setPage("home")
                    }
                  >
                    Back Home
                  </Btn>
                </div>
              </Card>

              <Card>
                <div
                  style={{
                    fontSize: 56,
                    lineHeight: 1,
                    fontWeight: 800,
                  }}
                >
                  {active.title}
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 24,
                    lineHeight: 1.75,
                    color: "#55685e",
                  }}
                >
                  {currentText}
                </div>

                {page === "marketplace" && (
                  <div
                    style={{
                      marginTop: 26,
                    }}
                  >
                    <Btn
                      gold
                      onClick={() =>
                        openExternal(
                          STORE_URL
                        )
                      }
                    >
                      Open GrownBy Marketplace
                    </Btn>
                  </div>
                )}
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
