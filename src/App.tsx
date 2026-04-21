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

const FOREST = {
  deep: "#0a3f2d",
  pine: "#0f5d43",
  moss: "#6f8f3d",
  sage: "#dfe8dd",
  cream: "#f4efe5",
  gold: "#e8cf69",
  text: "#173629",
  muted: "#5a6d63",
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
    whyItMatters:
      "Guests leave understanding why this land matters and why the work should continue.",
    whatPeopleGain:
      "Visitors connect emotionally to the story, understand the vision, and see why the ecosystem belongs in the future of the region.",
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
          "Guests can continue into the story, GrownBy, partner relationships, events, and future engagement with the ecosystem.",
      },
    },
  },
  customer: {
    title: "Customer",
    image: IMAGES.customer,
    subtitle: "Fresh food, nutrition, and healthier repeat choices.",
    whyItMatters:
      "Customers leave informed, connected to healthier food choices, and ready to return regularly.",
    whatPeopleGain:
      "Customers understand how fresh food supports wellness and why returning to the farm strengthens healthier habits over time.",
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
          "Customers can move into GrownBy, seasonal buying, repeat visits, events, and stronger connection to the farm’s offerings.",
      },
    },
  },
  marketplace: {
    title: "GrownBy",
    image: IMAGES.marketplace,
    subtitle: "Where support becomes purchasing power and sustainability.",
    whyItMatters:
      "Purchasing here directly supports the Bronson Family Farm ecosystem.",
    whatPeopleGain:
      "Easy access to products, convenient ordering, and meaningful support.",
    panels: {
      soundbite: {
        title: "GrownBy turns vision into movement.",
        body:
          "This is where interest becomes action, revenue, and visible support for Bronson Family Farm.",
      },
      intro: {
        title: "What GrownBy means",
        body:
          "GrownBy is the bridge between story, products, belief, and real-world support.",
      },
      knowledge: {
        title: "What visitors understand",
        body:
          "Every purchase helps strengthen the farm, local food systems, and future growth.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "A living ecosystem needs a living engine. GrownBy helps power the vision.",
      },
      next: {
        title: "What comes next",
        body:
          "Visitors can enter the store, support the farm, and return with deeper connection.",
      },
    },
  },
  grower: {
    title: "Grower",
    image: IMAGES.grower,
    subtitle: "Connect producers to opportunity and participation.",
    whyItMatters:
      "Growers understand there is a real place for them to participate, sell, learn, and grow with others.",
    whatPeopleGain:
      "Growers understand that this ecosystem is a place for collaboration, visibility, market opportunity, and shared learning.",
    panels: {
      soundbite: {
        title: "Growers need more than land.",
        body:
          "They need structure, opportunity, connection, and a meaningful place within the ecosystem.",
      },
      intro: {
        title: "What growers experience",
        body:
          "Growers are welcomed into a pathway built around participation, market connection, and shared value.",
      },
      knowledge: {
        title: "What growers learn",
        body:
          "Growers see how Bronson Family Farm can connect to events, learning, market flow, and regional participation.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway reduces isolation and shows growers a practical reason to engage, contribute, and return.",
      },
      next: {
        title: "What comes next",
        body:
          "Growers can move toward collaboration, selling, demonstration, and deeper connection with the broader network.",
      },
    },
  },
  youth: {
    title: "Youth Workforce",
    image: IMAGES.youth,
    subtitle: "Skills, responsibility, support, and future readiness.",
    whyItMatters:
      "Young people and families understand that this pathway leads to real growth, real support, and future readiness.",
    whatPeopleGain:
      "Young people and families see a real structure for skill-building, readiness, supervision, support, and future direction.",
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
    whyItMatters:
      "Partners understand where they fit, how their support matters, and what shared impact can look like.",
    whatPeopleGain:
      "Partners see where their support fits and how collaboration can strengthen land restoration, food access, education, and community benefit.",
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

function pageShell(): React.CSSProperties {
  return {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(16,92,63,.10), transparent 22%), radial-gradient(circle at bottom right, rgba(232,207,105,.10), transparent 24%), linear-gradient(180deg,#f4efe5 0%,#edf5ee 45%,#f7f7f7 100%)",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    color: FOREST.text,
  };
}

function glassNav(): React.CSSProperties {
  return {
    background: "linear-gradient(135deg, rgba(8,44,31,.96), rgba(11,94,67,.92))",
    color: "#fff",
    borderRadius: 26,
    padding: 22,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 20px 50px rgba(0,0,0,.16)",
    border: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  };
}

function softCard(): React.CSSProperties {
  return {
    background: "rgba(255,255,255,.92)",
    borderRadius: 30,
    padding: 24,
    boxShadow: "0 18px 44px rgba(0,0,0,.08)",
    border: "1px solid rgba(20,50,39,.05)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };
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
        borderRadius: 34,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 28px 70px rgba(0,0,0,.18)",
      }}
    >
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.22) 45%, rgba(0,0,0,.50))",
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
            padding: 30,
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
  return <div style={{ ...softCard(), ...style }}>{children}</div>;
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
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,.04)",
        background: gold ? FOREST.gold : FOREST.pine,
        color: gold ? "#2a2613" : "#fff",
        fontWeight: 800,
        cursor: "pointer",
        fontSize: 16,
        width: full ? "100%" : undefined,
        boxShadow: gold
          ? "0 10px 24px rgba(232,207,105,.28)"
          : "0 10px 24px rgba(11,94,67,.24)",
        transition: "transform .18s ease, box-shadow .18s ease, opacity .18s ease",
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
        padding: "13px 16px",
        borderRadius: 18,
        border: active ? "1px solid transparent" : "1px solid rgba(0,0,0,.05)",
        background: active
          ? "linear-gradient(135deg, #0b5e43, #6f8f3d)"
          : "rgba(239,244,240,.92)",
        color: active ? "#fff" : FOREST.text,
        cursor: "pointer",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: ".12em",
        fontSize: 12,
        textAlign: "left",
        boxShadow: active ? "0 10px 24px rgba(11,94,67,.20)" : "none",
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
        fontSize: 11,
        letterSpacing: ".26em",
        textTransform: "uppercase",
        color: "#7f9086",
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
    <div style={pageShell()}>
      <style>{`
        *{box-sizing:border-box}
        button{font-family:inherit}
        button:hover{transform:translateY(-1px)}
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
        <div style={glassNav()}>
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
              GrownBy
            </SolidButton>
          </div>
        </div>

        {page === "home" && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={IMAGES.home} height={530}>
                <div style={{ position: "relative", zIndex: 1, color: "#fff", maxWidth: 900 }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "9px 14px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.12)",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: ".24em",
                      fontWeight: 800,
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
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
                      letterSpacing: "-.035em",
                      textShadow: "0 8px 28px rgba(0,0,0,.24)",
                    }}
                  >
                    Bronson Family Farm
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 28,
                      color: "rgba(255,255,255,.92)",
                      textShadow: "0 6px 20px rgba(0,0,0,.22)",
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
                    color: FOREST.muted,
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
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>118+</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: FOREST.muted,
                      }}
                    >
                      Acres of vision and possibility
                    </div>
                  </Card>

                  <Card
                    style={{
                      padding: 18,
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>6</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: FOREST.muted,
                      }}
                    >
                      Living pathways built for return
                    </div>
                  </Card>

                  <Card
                    style={{
                      padding: 18,
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>1</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: FOREST.muted,
                      }}
                    >
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
                    Open GrownBy
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
                    color: FOREST.muted,
                  }}
                >
                  Restore land. Grow healthy food. Create opportunity. Build
                  systems for Youngstown and the Mahoning Valley Area.
                </div>

                <div
                  className="gridUtility"
                  style={{ display: "grid", gap: 12, marginTop: 24 }}
                >
                  <SolidButton gold full onClick={() => openExternal(STORE_URL)}>
                    Open GrownBy
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
                    <div
                      style={{
                        fontSize: 30,
                        fontWeight: 800,
                        letterSpacing: "-.02em",
                      }}
                    >
                      {p.title}
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.72,
                        color: FOREST.muted,
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
                  color: FOREST.muted,
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
                  color: FOREST.muted,
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
                <Card
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                    boxShadow: "none",
                  }}
                >
                  <Label>Story Value</Label>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: FOREST.muted,
                    }}
                  >
                    The farm gives people a way to understand legacy, land, and
                    the deeper purpose behind this work.
                  </div>
                </Card>

                <Card
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                    boxShadow: "none",
                  }}
                >
                  <Label>Where This Leads</Label>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: FOREST.muted,
                    }}
                  >
                    The story leads into marketplace activity, youth
                    development, partnership, education, and return visits.
                  </div>
                </Card>
              </div>

              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <SolidButton gold onClick={() => setPage("marketplace")}>
                  Enter GrownBy
                </SolidButton>
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
                <div
                  style={{
                    fontSize: 52,
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: "-.03em",
                  }}
                >
                  {active.title}
                </div>

                <div
                  style={{
                    marginTop: 12,
                    fontSize: 18,
                    lineHeight: 1.7,
                    color: FOREST.muted,
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
                <div
                  style={{
                    fontSize: 56,
                    lineHeight: 1,
                    fontWeight: 800,
                  }}
                >
                  {active.panels[layer].title}
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 23,
                    lineHeight: 1.78,
                    color: FOREST.muted,
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
                  <Card
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <Label>Why This Exists</Label>
                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.8,
                        color: FOREST.muted,
                      }}
                    >
                      {active.whyItMatters}
                    </div>
                  </Card>

                  <Card
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <Label>What This Creates</Label>
                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.8,
                        color: FOREST.muted,
                      }}
                    >
                      {active.whatPeopleGain}
                    </div>
                  </Card>
                </div>

                {page === "marketplace" && (
                  <div style={{ marginTop: 26 }}>
                    <SolidButton gold onClick={() => openExternal(STORE_URL)}>
                      Open GrownBy Store
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
