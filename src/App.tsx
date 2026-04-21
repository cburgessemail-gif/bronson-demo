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
    subtitle: "Begin by feeling the land, the story, and the purpose.",
    personalLine:
      "You are not just visiting. You are being welcomed into a living vision.",
    whyItMatters:
      "This experience helps you understand why this land matters and why the work should continue.",
    whatPeopleGain:
      "You leave with emotional connection, clearer understanding, and a reason to return.",
    panels: {
      soundbite: {
        title: "You are entering more than a farm.",
        body:
          "This is a place where land, legacy, food access, restoration, and hope are held together in one living experience.",
      },
      intro: {
        title: "What you feel first",
        body:
          "You are meant to feel grounded here. The land, the quiet, the story, and the possibility are all part of your first impression.",
      },
      knowledge: {
        title: "What becomes clear",
        body:
          "As you move deeper, you begin to see how food, wellness, family history, youth opportunity, and community renewal are connected.",
      },
      purpose: {
        title: "Why this matters to you",
        body:
          "This pathway is personal because it invites you to care, not just observe. It gives meaning to what you are seeing.",
      },
      next: {
        title: "Where you can go next",
        body:
          "From here, you can continue into the story, the marketplace, partnership, events, and future engagement with the ecosystem.",
      },
    },
  },

  customer: {
    title: "Customer",
    image: IMAGES.customer,
    subtitle: "Fresh food, nourishment, and choices that support your well-being.",
    personalLine:
      "This pathway is about what reaches your table, your habits, and your health.",
    whyItMatters:
      "This experience connects you to healthier choices that can become part of everyday life.",
    whatPeopleGain:
      "You gain clearer connection between fresh food, better choices, and lasting value.",
    panels: {
      soundbite: {
        title: "Fresh food is personal.",
        body:
          "What you choose to eat shapes energy, wellness, family life, and the kind of future you build around the table.",
      },
      intro: {
        title: "What you experience",
        body:
          "You encounter food that feels useful, appealing, and real. The experience is meant to make healthy choice feel natural, not distant.",
      },
      knowledge: {
        title: "What you begin to understand",
        body:
          "Fresh, local food is not just a product. It strengthens health, supports community resilience, and pushes back against overprocessed dependency.",
      },
      purpose: {
        title: "Why this matters to you",
        body:
          "This pathway helps you connect nourishment to action so the farm becomes part of your recurring healthy choices.",
      },
      next: {
        title: "Where you can go next",
        body:
          "You can continue into GrownBy, seasonal buying, repeat visits, events, and stronger connection to the farm’s offerings.",
      },
    },
  },

  marketplace: {
    title: "GrownBy",
    image: IMAGES.marketplace,
    subtitle: "Where your support becomes action, movement, and sustainability.",
    personalLine:
      "What you choose to buy here helps carry the vision forward.",
    whyItMatters:
      "Every purchase directly supports the Bronson Family Farm ecosystem.",
    whatPeopleGain:
      "You gain an easy way to support the farm through convenient, meaningful purchasing.",
    panels: {
      soundbite: {
        title: "What you support here becomes visible.",
        body:
          "This is where belief turns into action. GrownBy gives you a direct way to strengthen the farm’s future.",
      },
      intro: {
        title: "What this means for you",
        body:
          "This is not just a store. It is your practical point of connection to products, produce, and the larger ecosystem behind them.",
      },
      knowledge: {
        title: "What becomes real",
        body:
          "Every purchase helps strengthen local food systems, deepen sustainability, and move the vision from idea into daily practice.",
      },
      purpose: {
        title: "Why this matters to you",
        body:
          "This pathway lets you participate in the future of the farm in a direct, visible way.",
      },
      next: {
        title: "Where you can go next",
        body:
          "You can enter the GrownBy store, support the farm, and return to the demo with deeper connection and clarity.",
      },
    },
  },

  grower: {
    title: "Grower",
    image: IMAGES.grower,
    subtitle: "A place to participate, contribute, and grow with others.",
    personalLine:
      "This pathway is about belonging, visibility, and meaningful participation.",
    whyItMatters:
      "It helps you see that there is a real place for growers inside this ecosystem.",
    whatPeopleGain:
      "You gain clearer connection to opportunity, collaboration, visibility, and contribution.",
    panels: {
      soundbite: {
        title: "You need more than land.",
        body:
          "You need connection, opportunity, structure, visibility, and a place where your work can matter in a larger system.",
      },
      intro: {
        title: "What you experience",
        body:
          "You encounter a pathway built around participation, contribution, shared learning, and a stronger sense of place.",
      },
      knowledge: {
        title: "What becomes possible",
        body:
          "This ecosystem can support collaboration, demonstrations, events, market visibility, and stronger regional food relationships.",
      },
      purpose: {
        title: "Why this matters to you",
        body:
          "This pathway reduces isolation and helps you see where you fit, why your work matters, and how to grow with others.",
      },
      next: {
        title: "Where you can go next",
        body:
          "You can move toward selling, collaboration, demonstration, participation, and deeper connection to the broader network.",
      },
    },
  },

  youth: {
    title: "Youth Workforce",
    image: IMAGES.youth,
    subtitle: "Growth, responsibility, support, and future readiness.",
    personalLine:
      "This pathway is about becoming stronger, more prepared, and more confident.",
    whyItMatters:
      "It helps young people and families see a real bridge between potential and preparation.",
    whatPeopleGain:
      "You gain structure, readiness, support, confidence, and clearer future direction.",
    panels: {
      soundbite: {
        title: "This pathway grows people.",
        body:
          "It is not just about tasks. It is about confidence, readiness, responsibility, and learning how to move forward with support.",
      },
      intro: {
        title: "What you experience",
        body:
          "You encounter a place where guidance, accountability, encouragement, and practical work all come together.",
      },
      knowledge: {
        title: "What you build here",
        body:
          "You build work habits, teamwork, discipline, agricultural exposure, logistics awareness, and personal growth through lived experience.",
      },
      purpose: {
        title: "Why this matters to you",
        body:
          "This pathway gives shape to what is possible by helping potential turn into preparation.",
      },
      next: {
        title: "Where you can go next",
        body:
          "You can move into deeper roles, guided learning, responsibility, support systems, and stronger future direction.",
      },
    },
  },

  partners: {
    title: "Partners",
    image: IMAGES.partners,
    subtitle: "Where aligned support creates visible community benefit.",
    personalLine:
      "This pathway shows how your support can be seen, felt, and understood.",
    whyItMatters:
      "It helps partners see where they fit and how their support becomes visible return.",
    whatPeopleGain:
      "You gain clearer understanding of how collaboration can strengthen food access, education, land restoration, and local impact.",
    panels: {
      soundbite: {
        title: "What you support here becomes visible.",
        body:
          "Partnership here is not abstract. Support becomes restoration, education, youth development, food access, and practical benefit people can see.",
      },
      intro: {
        title: "What you experience",
        body:
          "You see a credible ecosystem where aligned support connects directly to visible outcomes and long-term value.",
      },
      knowledge: {
        title: "What becomes clear",
        body:
          "This pathway shows how partnership can strengthen programs, events, learning, food systems, and wider regional benefit.",
      },
      purpose: {
        title: "Why this matters to you",
        body:
          "It gives you a clear place to understand where support matters and how shared investment creates return.",
      },
      next: {
        title: "Where you can go next",
        body:
          "You can move into sponsorship, planning, activation, support roles, and deeper alignment with the broader ecosystem.",
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
          .grid2,.grid3,.gridUtility,.gridPersonal{grid-template-columns:1fr!important}
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
              <HeroImage src={IMAGES.home} height={550}>
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

                  <div
                    style={{
                      marginTop: 18,
                      fontSize: 21,
                      lineHeight: 1.8,
                      maxWidth: 780,
                      color: "rgba(255,255,255,.94)",
                    }}
                  >
                    This is a place where people are meant to feel welcomed, seen,
                    nourished, and connected to something larger than themselves.
                  </div>
                </div>
              </HeroImage>
            </div>

            <div
              className="grid2"
              style={{
                display: "grid",
                gridTemplateColumns: "1.15fr .85fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <Card>
                <div
                  style={{
                    fontSize: 23,
                    lineHeight: 1.85,
                    color: FOREST.muted,
                  }}
                >
                  A regenerative ecosystem for food access, marketplace
                  activity, growers, youth workforce development, education,
                  and community return.
                </div>

                <div
                  className="gridPersonal"
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
                    <div style={{ fontSize: 38, fontWeight: 800 }}>Feel</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: FOREST.muted,
                      }}
                    >
                      the welcome, the land, and the meaning.
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
                    <div style={{ fontSize: 38, fontWeight: 800 }}>See</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: FOREST.muted,
                      }}
                    >
                      how food, people, and purpose fit together.
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
                    <div style={{ fontSize: 38, fontWeight: 800 }}>Return</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: FOREST.muted,
                      }}
                    >
                      with deeper connection and clearer purpose.
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
                    Begin Your Journey
                  </SolidButton>
                  <SolidButton gold onClick={() => openExternal(STORE_URL)}>
                    Open GrownBy
                  </SolidButton>
                </div>
              </Card>

              <Card>
                <Label>Personal Invitation</Label>
                <div
                  style={{
                    marginTop: 18,
                    fontSize: 21,
                    lineHeight: 1.9,
                    color: FOREST.muted,
                  }}
                >
                  This experience is designed to feel personal. Each pathway
                  speaks to a different kind of visitor, need, and future.
                </div>

                <div
                  className="gridUtility"
                  style={{ display: "grid", gap: 12, marginTop: 24 }}
                >
                  <SolidButton full onClick={() => setPage("guest")}>
                    Enter as Guest
                  </SolidButton>
                  <SolidButton full onClick={() => setPage("customer")}>
                    Enter as Customer
                  </SolidButton>
                  <SolidButton gold full onClick={() => setPage("marketplace")}>
                    Enter GrownBy
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

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: "#74867b",
                      }}
                    >
                      {p.personalLine}
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
                  lineHeight: 1.85,
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
                  lineHeight: 1.85,
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
                    The story gives people a reason to care. It helps them feel
                    the purpose before they ever take another step.
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
                    The story leads into food, youth development, partnership,
                    GrownBy, education, and return visits that feel meaningful.
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
                <SolidButton onClick={() => setPage("guest")}>
                  Continue as Guest
                </SolidButton>
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
              <HeroImage src={active.image} height={440}>
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: "#fff",
                    maxWidth: 820,
                  }}
                >
                  <div
                    style={{
                      fontSize: 50,
                      lineHeight: 1,
                      fontWeight: 800,
                      letterSpacing: "-.03em",
                    }}
                  >
                    {active.title}
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 24,
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,.92)",
                    }}
                  >
                    {active.personalLine}
                  </div>
                </div>
              </HeroImage>
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
                    lineHeight: 1.75,
                    color: FOREST.muted,
                  }}
                >
                  {active.subtitle}
                </div>

                <div style={{ marginTop: 22 }}>
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
                    lineHeight: 1.82,
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

                <div
                  style={{
                    marginTop: 24,
                    padding: 20,
                    borderRadius: 24,
                    background:
                      "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                  }}
                >
                  <Label>For You</Label>
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 19,
                      lineHeight: 1.85,
                      color: FOREST.muted,
                    }}
                  >
                    {active.personalLine}
                  </div>
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
