import React, { useMemo, useState } from "react";

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

/* images in /public */
const IMAGES = {
  home: "/GrowArea.jpg",
  story: "/SAM_0220.JPG",
  guest: "/GrowArea2.jpg",
  customer: "/culniary_edibleflowers.jpeg",
  marketplace: "/SAM_0255.JPG",
  grower: "/SAM_0299.JPG",
  youth: "/Samaeera2.jpg",
  partners: "/SAM_0313.JPG",
};

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

const pathways = {
  guest: {
    title: "Guest",
    image: IMAGES.guest,
    subtitle: "Understand the vision, story, and purpose.",
    panels: {
      soundbite: {
        title: "You are entering more than a farm.",
        body:
          "Bronson Family Farm is a living ecosystem where land, legacy, food access, learning, and community purpose come together.",
      },
      intro: {
        title: "What guests feel first",
        body:
          "Guests are welcomed into a place of restoration, possibility, and meaning. The experience is meant to feel grounded, hopeful, and worth returning to.",
      },
      knowledge: {
        title: "What guests learn",
        body:
          "Guests see how this farm connects food, agritourism, wellness, family legacy, youth opportunity, and long-term community benefit.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway turns curiosity into understanding so visitors can clearly feel the mission without being told what to think.",
      },
      next: {
        title: "What comes next",
        body:
          "Guests can continue into the story, marketplace, partner relationships, events, and future engagement with the ecosystem.",
      },
    },
  },
  customer: {
    title: "Customer",
    image: IMAGES.customer,
    subtitle: "Fresh food, nutrition, and healthier repeat choices.",
    panels: {
      soundbite: {
        title: "Fresh food is more than a purchase.",
        body:
          "The customer experience connects food to wellness, better habits, and the daily value of choosing fresh over overprocessed options.",
      },
      intro: {
        title: "What customers experience",
        body:
          "Customers encounter fresh, appealing, useful offerings that make healthy choices feel practical, beautiful, and worth repeating.",
      },
      knowledge: {
        title: "What customers learn",
        body:
          "Customers see that local food supports health, family well-being, community resilience, and long-term habits that can change lives.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway helps people connect nourishment to action so the farm becomes part of their recurring healthy choices.",
      },
      next: {
        title: "What comes next",
        body:
          "Customers can move into the marketplace, seasonal buying, repeat visits, events, and stronger connection to the farm’s offerings.",
      },
    },
  },
  marketplace: {
    title: "Marketplace",
    image: IMAGES.marketplace,
    subtitle: "Where support becomes purchasing power and sustainability.",
    panels: {
      soundbite: {
        title: "This is where vision becomes movement.",
        body:
          "The marketplace translates interest into action, revenue, and visible support for the farm’s long-term sustainability.",
      },
      intro: {
        title: "What the marketplace means",
        body:
          "This is not just a sales page. It is the bridge between story, belief, products, support, and the practical future of the ecosystem.",
      },
      knowledge: {
        title: "What visitors understand",
        body:
          "Every purchase strengthens the farm, supports local food systems, and helps move the broader vision into practical reality.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "A living ecosystem needs a living engine. The marketplace is the place where community support becomes momentum.",
      },
      next: {
        title: "What comes next",
        body:
          "Visitors can move directly into GrownBy, explore products, support the farm, and return to the demo with renewed meaning.",
      },
    },
  },
  grower: {
    title: "Grower",
    image: IMAGES.grower,
    subtitle: "Connect producers to opportunity and participation.",
    panels: {
      soundbite: {
        title: "Growers need more than land.",
        body:
          "They need belonging, visibility, opportunity, participation, and a place where their work connects to a larger ecosystem.",
      },
      intro: {
        title: "What growers experience",
        body:
          "Growers encounter a pathway built around contribution, shared learning, local connection, and meaningful market opportunity.",
      },
      knowledge: {
        title: "What growers learn",
        body:
          "This ecosystem can support collaboration, events, production visibility, education, and stronger integration into regional food activity.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway helps reduce isolation and shows growers where they fit, why they matter, and how they can grow with others.",
      },
      next: {
        title: "What comes next",
        body:
          "Growers can move toward participation, selling, demonstration, collaboration, and deeper connection with the broader network.",
      },
    },
  },
  youth: {
    title: "Youth Workforce",
    image: IMAGES.youth,
    subtitle: "Skills, responsibility, support, and future readiness.",
    panels: {
      soundbite: {
        title: "This pathway grows people, not just tasks.",
        body:
          "The youth workforce experience is about confidence, responsibility, structure, support, and future readiness.",
      },
      intro: {
        title: "What youth and families experience",
        body:
          "Young people encounter a practical setting where real participation, guidance, accountability, and encouragement are all visible.",
      },
      knowledge: {
        title: "What they learn",
        body:
          "Participants build work habits, teamwork, agricultural exposure, discipline, logistics awareness, and personal growth.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway creates a bridge between potential and preparation so young people can see themselves in a meaningful future.",
      },
      next: {
        title: "What comes next",
        body:
          "Youth can move into deeper roles, guided learning, responsibility, support systems, and stronger future direction.",
      },
    },
  },
  partners: {
    title: "Partners",
    image: IMAGES.partners,
    subtitle: "Align resources and collaboration for community benefit.",
    panels: {
      soundbite: {
        title: "Partnership here creates visible outcomes.",
        body:
          "Support becomes land restoration, education, food access, youth development, and practical benefit that people can see.",
      },
      intro: {
        title: "What partners see",
        body:
          "Partners see a credible ecosystem where collaboration can connect directly to visible community-facing outcomes.",
      },
      knowledge: {
        title: "What partners understand",
        body:
          "This pathway shows how aligned support can strengthen programs, events, learning, food systems, and long-term regional value.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "It gives stakeholders a clear place to see where support matters and how shared investment creates visible return.",
      },
      next: {
        title: "What comes next",
        body:
          "Partners can move into sponsorship, planning, activation, support roles, and deeper alignment with the larger ecosystem.",
      },
    },
  },
};

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function HeroImage({
  src,
  height = 430,
  overlay = true,
  children,
}: {
  src: string;
  height?: number;
  overlay?: boolean;
  children?: React.ReactNode;
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
        boxShadow: "0 24px 60px rgba(0,0,0,.18)",
      }}
    >
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.14), rgba(0,0,0,.46))",
          }}
        />
      )}
      {children && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "end",
            padding: 28,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function Card({
  children,
  style,
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
        boxShadow: "0 18px 42px rgba(0,0,0,.08)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SolidButton({
  children,
  onClick,
  gold = false,
  full = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  gold?: boolean;
  full?: boolean;
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
        width: full ? "100%" : undefined,
      }}
    >
      {children}
    </button>
  );
}

function GhostButton({
  children,
  onClick,
  active = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 16px",
        borderRadius: 14,
        border: "1px solid rgba(0,0,0,.06)",
        background: active ? "#0b5e43" : "#eef3ef",
        color: active ? "#fff" : "#173629",
        cursor: "pointer",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: ".12em",
        fontSize: 12,
        textAlign: "left",
      }}
    >
      {children}
    </button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        letterSpacing: ".24em",
        textTransform: "uppercase",
        color: "#85958b",
        fontWeight: 800,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [layer, setLayer] = useState<LayerKey>("soundbite");

  const active =
    page !== "home" && page !== "story"
      ? pathways[page as keyof typeof pathways]
      : null;

  const progress = useMemo(() => {
    return ((layerOrder.indexOf(layer) + 1) / layerOrder.length) * 100;
  }, [layer]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#f4efe5 0%,#edf5ee 45%,#f7f7f7 100%)",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
        color: "#173629",
      }}
    >
      <style>{`
        *{box-sizing:border-box}
        button{font-family:inherit}
        @media(max-width:1000px){
          .grid2,.grid3,.gridUtility{grid-template-columns:1fr!important}
        }
      `}</style>

      <div
        style={{
          maxWidth: 1450,
          margin: "0 auto",
          padding: 20,
        }}
      >
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
            <div style={{ fontSize: 28, fontWeight: 800 }}>
              Bronson Family Farm
            </div>
            <div style={{ opacity: 0.85, fontSize: 16 }}>
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
            <SolidButton onClick={() => setPage("home")}>Home</SolidButton>
            <SolidButton onClick={() => setPage("story")}>
              Our Story
            </SolidButton>
            <SolidButton onClick={() => openExternal(WEATHER_URL)}>
              Weather
            </SolidButton>
            <SolidButton gold onClick={() => setPage("marketplace")}>
              Marketplace
            </SolidButton>
          </div>
        </div>

        {page === "home" && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={IMAGES.home} height={530}>
                <div style={{ position: "relative", zIndex: 1, color: "#fff" }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "8px 14px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.12)",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: ".24em",
                      fontWeight: 800,
                    }}
                  >
                    Living Ecosystem Experience
                  </div>
                  <div
                    style={{
                      marginTop: 18,
                      fontSize: 56,
                      lineHeight: 1.02,
                      fontWeight: 800,
                    }}
                  >
                    Bronson Family Farm
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 28,
                      color: "rgba(255,255,255,.9)",
                    }}
                  >
                    More than a farm.
                  </div>
                </div>
              </HeroImage>
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
                    fontSize: 22,
                    lineHeight: 1.8,
                    color: "#52645b",
                  }}
                >
                  A regenerative ecosystem for food access, marketplace
                  activity, growers, youth workforce development, education,
                  and community return.
                </div>

                <div
                  style={{
                    marginTop: 24,
                    display: "grid",
                    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                    gap: 16,
                  }}
                >
                  <Card
                    style={{
                      padding: 18,
                      background: "#f8fbf8",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>118+</div>
                    <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.6, color: "#5c6f64" }}>
                      Acres of vision and possibility
                    </div>
                  </Card>
                  <Card
                    style={{
                      padding: 18,
                      background: "#f8fbf8",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>6</div>
                    <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.6, color: "#5c6f64" }}>
                      Living pathways built for return
                    </div>
                  </Card>
                  <Card
                    style={{
                      padding: 18,
                      background: "#f8fbf8",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>1</div>
                    <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.6, color: "#5c6f64" }}>
                      Connected ecosystem with a clear message
                    </div>
                  </Card>
                </div>

                <div
                  style={{
                    marginTop: 26,
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <SolidButton
                    onClick={() => {
                      setPage("guest");
                      setLayer("soundbite");
                    }}
                  >
                    Enter Experience
                  </SolidButton>
                  <SolidButton gold onClick={() => openExternal(STORE_URL)}>
                    Open Store
                  </SolidButton>
                </div>
              </Card>

              <Card>
                <Label>Why It Matters</Label>
                <div
                  style={{
                    marginTop: 18,
                    fontSize: 20,
                    lineHeight: 1.8,
                    color: "#55685e",
                  }}
                >
                  Restore land. Grow healthy food. Create opportunity. Build
                  systems for Youngstown and the Mahoning Valley Area.
                </div>

                <div className="gridUtility" style={{ display: "grid", gap: 12, marginTop: 24 }}>
                  <SolidButton gold full onClick={() => openExternal(STORE_URL)}>
                    Marketplace
                  </SolidButton>
                  <SolidButton full onClick={() => openExternal(WEATHER_URL)}>
                    Weather
                  </SolidButton>
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
              {Object.entries(pathways).map(([key, p]) => (
                <Card key={key} style={{ padding: 0 }}>
                  <HeroImage src={p.image} height={220} overlay={false} />
                  <div style={{ padding: 22 }}>
                    <div style={{ fontSize: 28, fontWeight: 800 }}>{p.title}</div>
                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.7,
                        color: "#607267",
                      }}
                    >
                      {p.subtitle}
                    </div>
                    <div style={{ marginTop: 18 }}>
                      <SolidButton
                        full
                        onClick={() => {
                          setPage(key as PageKey);
                          setLayer("soundbite");
                        }}
                      >
                        Open Pathway
                      </SolidButton>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {page === "story" && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={IMAGES.story} height={520} />
            </div>

            <Card style={{ marginTop: 24 }}>
              <div style={{ fontSize: 54, fontWeight: 800 }}>Our Story</div>

              <div
                style={{
                  marginTop: 22,
                  fontSize: 22,
                  lineHeight: 1.8,
                  color: "#55685e",
                }}
              >
                Inspired by family farming traditions and shaped for Youngstown’s
                future, Bronson Family Farm connects land restoration, food
                access, agritourism, education, and opportunity.
              </div>

              <div
                style={{
                  marginTop: 18,
                  fontSize: 22,
                  lineHeight: 1.8,
                  color: "#55685e",
                }}
              >
                The Bronson and Lorenzana legacy now moves into a new generation
                of purpose.
              </div>

              <div
                className="grid2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                  marginTop: 26,
                }}
              >
                <Card style={{ background: "#f8fbf8", boxShadow: "none" }}>
                  <Label>Story Value</Label>
                  <div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.8, color: "#5a6d63" }}>
                    The farm gives people a way to understand legacy, land, and
                    the deeper purpose behind this work.
                  </div>
                </Card>

                <Card style={{ background: "#f8fbf8", boxShadow: "none" }}>
                  <Label>Where This Leads</Label>
                  <div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.8, color: "#5a6d63" }}>
                    The story leads into marketplace activity, youth
                    development, partnership, education, and return visits.
                  </div>
                </Card>
              </div>
            </Card>
          </>
        )}

        {active && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={active.image} height={440} />
            </div>

            <div
              className="grid2"
              style={{
                display: "grid",
                gridTemplateColumns: ".85fr 1.15fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <Card>
                <div style={{ fontSize: 40, fontWeight: 800 }}>{active.title}</div>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 18,
                    lineHeight: 1.7,
                    color: "#5c6f64",
                  }}
                >
                  {active.subtitle}
                </div>

                <div style={{ marginTop: 20 }}>
                  <Label>Journey Progress</Label>
                  <div
                    style={{
                      marginTop: 10,
                      width: "100%",
                      height: 10,
                      borderRadius: 999,
                      background: "#e4ece5",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        borderRadius: 999,
                        background:
                          "linear-gradient(90deg,#0b5e43 0%, #d8ec77 100%)",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
                  {layerOrder.map((l) => (
                    <GhostButton
                      key={l}
                      active={layer === l}
                      onClick={() => setLayer(l)}
                    >
                      {l}
                    </GhostButton>
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
                  <SolidButton
                    onClick={() =>
                      setLayer(layerOrder[Math.max(layerOrder.indexOf(layer) - 1, 0)])
                    }
                  >
                    Prev
                  </SolidButton>

                  <SolidButton
                    gold
                    onClick={() =>
                      setLayer(layerOrder[Math.min(layerOrder.indexOf(layer) + 1, 4)])
                    }
                  >
                    Next
                  </SolidButton>
                </div>

                <div style={{ marginTop: 18 }}>
                  <SolidButton full onClick={() => setPage("home")}>
                    Back Home
                  </SolidButton>
                </div>
              </Card>

              <Card>
                <div style={{ fontSize: 56, lineHeight: 1, fontWeight: 800 }}>
                  {active.panels[layer].title}
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 24,
                    lineHeight: 1.75,
                    color: "#55685e",
                  }}
                >
                  {active.panels[layer].body}
                </div>

                <div
                  className="grid2"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                    marginTop: 26,
                  }}
                >
                  <Card style={{ background: "#f8fbf8", boxShadow: "none" }}>
                    <Label>Why This Exists</Label>
                    <div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.8, color: "#5a6d63" }}>
                      {active.whyItMatters}
                    </div>
                  </Card>

                  <Card style={{ background: "#f8fbf8", boxShadow: "none" }}>
                    <Label>What This Creates</Label>
                    <div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.8, color: "#5a6d63" }}>
                      {active.whatPeopleGain}
                    </div>
                  </Card>
                </div>

                {page === "marketplace" && (
                  <div style={{ marginTop: 26 }}>
                    <SolidButton gold onClick={() => openExternal(STORE_URL)}>
                      Open GrownBy Marketplace
                    </SolidButton>
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
