import React, { useMemo, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "it" | "fr" | "he";
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

type PanelContent = {
  title: string;
  body: string;
};

type Pathway = {
  title: string;
  image: string;
  subtitle: string;
  personalLine: string;
  whyItMatters: string;
  whatPeopleGain: string;
  panels: Record<LayerKey, PanelContent>;
};

const STORE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const WEATHER_URL =
  "https://www.wunderground.com/hourly/us/oh/youngstown/44510";

const IMAGES = {
  home: "/GrowArea.jpg",
  story: "/SAM_0220.JPG",
  guest: "/GrowArea2.jpg",
  customer: "/culniary_edibleflowers.jpeg",
  marketplace: "/SAM_0255.JPG",
  grower: "/SAM_0225.JPG",
  youth: "/Samaeera2.jpg",
  partners: "/SAM_0313.JPG",
};

const COLORS = {
  forest: "#083e2d",
  pine: "#0b5e43",
  gold: "#e7cf6a",
  text: "#173629",
  muted: "#61756a",
  bgTop: "#f4efe5",
  bgMid: "#edf5ee",
  card: "rgba(255,255,255,.94)",
};

const LANGUAGE_OPTIONS: { key: LanguageKey; label: string; dir: "ltr" | "rtl" }[] =
  [
    { key: "en", label: "English", dir: "ltr" },
    { key: "es", label: "Español", dir: "ltr" },
    { key: "tl", label: "Tagalog", dir: "ltr" },
    { key: "it", label: "Italiano", dir: "ltr" },
    { key: "fr", label: "Français", dir: "ltr" },
    { key: "he", label: "עברית", dir: "rtl" },
  ];

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

const pathways: Record<
  Exclude<PageKey, "home" | "story">,
  Pathway
> = {
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
          "This pathway is personal because it invites you to care, not just observe.",
      },
      next: {
        title: "Where you can go next",
        body:
          "From here, continue into the story, the online store, events, partnership, and future engagement.",
      },
    },
  },

  customer: {
    title: "Customer",
    image: IMAGES.customer,
    subtitle: "Fresh food, nourishment, and healthier repeat choices.",
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
          "You encounter food that feels useful, appealing, and real. The experience is meant to make healthy choices feel natural, not distant.",
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
    subtitle: "The online store for purchasing produce and supporting the ecosystem.",
    personalLine:
      "This is the online store where people across the ecosystem can purchase produce and support the work.",
    whyItMatters:
      "GrownBy gives customers, guests, volunteers, and supporters a direct place to purchase produce online.",
    whatPeopleGain:
      "Visitors gain convenient online access to produce and a direct way to support the ecosystem.",
    panels: {
      soundbite: {
        title: "GrownBy is the online store.",
        body:
          "This is where produce can be purchased online by people across the ecosystem.",
      },
      intro: {
        title: "What GrownBy means",
        body:
          "GrownBy serves the customer-facing purchasing side of the ecosystem through the online store.",
      },
      knowledge: {
        title: "What visitors understand",
        body:
          "This pathway makes clear where people go to purchase produce and support the work through the online marketplace.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "The ecosystem needs a clear buying destination. GrownBy is that destination.",
      },
      next: {
        title: "What comes next",
        body:
          "Visitors can enter the store, purchase produce, and stay connected through repeat support.",
      },
    },
  },

  grower: {
    title: "Grower",
    image: IMAGES.grower,
    subtitle:
      "Growers register through the portal to participate in the ecosystem and benefit from the marketplace.",
    personalLine:
      "This pathway is for growers who want to enter the ecosystem, register through the portal, and gain access to marketplace participation and related benefits.",
    whyItMatters:
      "Registration is the gateway for growers to become part of the ecosystem and benefit from its marketplace opportunities.",
    whatPeopleGain:
      "Growers gain entry into the ecosystem, clearer participation pathways, visibility, and access to marketplace-related benefits through registration.",
    panels: {
      soundbite: {
        title: "The grower journey begins with registration.",
        body:
          "Growers register through the portal in order to become part of the ecosystem and benefit from the marketplace.",
      },
      intro: {
        title: "What this pathway means",
        body:
          "This pathway gives growers a clear way to enter the ecosystem formally through portal registration rather than remaining outside of its opportunities.",
      },
      knowledge: {
        title: "What growers come to understand",
        body:
          "Registration connects growers to participation, visibility, ecosystem alignment, and the benefits tied to marketplace involvement.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway exists so growers can move from interest to recognized participation through registration in the portal.",
      },
      next: {
        title: "What comes next",
        body:
          "After registering through the portal, growers can move deeper into the ecosystem and access the benefits associated with marketplace participation.",
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

function shellStyle(): React.CSSProperties {
  return {
    minHeight: "100vh",
    background: `linear-gradient(180deg, ${COLORS.bgTop} 0%, ${COLORS.bgMid} 55%, #ffffff 100%)`,
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: COLORS.text,
  };
}

function navStyle(): React.CSSProperties {
  return {
    background: `linear-gradient(135deg, ${COLORS.forest}, ${COLORS.pine})`,
    color: "#fff",
    borderRadius: 28,
    padding: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  };
}

function cardStyle(): React.CSSProperties {
  return {
    background: COLORS.card,
    borderRadius: 28,
    padding: 28,
    boxShadow: "0 18px 44px rgba(0,0,0,.08)",
  };
}

function imageBlock(
  src: string,
  height: number,
  withOverlay = false,
  children?: React.ReactNode
) {
  return (
    <div
      style={{
        marginTop: 24,
        height,
        borderRadius: 34,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {withOverlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.24) 48%, rgba(0,0,0,.46))",
          }}
        />
      )}
      {children ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-end",
            padding: 30,
            color: "#fff",
            zIndex: 2,
          }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function primaryButtonStyle(gold = false): React.CSSProperties {
  return {
    padding: "14px 22px",
    borderRadius: 999,
    border: "none",
    background: gold ? COLORS.gold : COLORS.pine,
    color: gold ? "#2b2412" : "#fff",
    fontWeight: 800,
    fontSize: 16,
    cursor: "pointer",
  };
}

function ghostButtonStyle(active = false): React.CSSProperties {
  return {
    padding: "13px 16px",
    borderRadius: 18,
    border: active ? "1px solid transparent" : "1px solid rgba(0,0,0,.06)",
    background: active
      ? `linear-gradient(135deg, ${COLORS.pine}, #6f8f3d)`
      : "#eef3ef",
    color: active ? "#fff" : COLORS.text,
    fontWeight: 800,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: ".12em",
    cursor: "pointer",
    textAlign: "left",
  };
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [layer, setLayer] = useState<LayerKey>("soundbite");
  const [language, setLanguage] = useState<LanguageKey>("en");

  const dir =
    LANGUAGE_OPTIONS.find((item) => item.key === language)?.dir ?? "ltr";

  const activePathway: Pathway | null =
    page === "home" || page === "story" ? null : pathways[page];

  const progress = useMemo(() => {
    return ((layerOrder.indexOf(layer) + 1) / layerOrder.length) * 100;
  }, [layer]);

  return (
    <div style={shellStyle()} dir={dir}>
      <style>{`
        * { box-sizing: border-box; }
        button, select { font-family: inherit; }
        button:hover { transform: translateY(-1px); }
        @media (max-width: 1000px) {
          .two-col, .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1450, margin: "0 auto", padding: 24 }}>
        <div style={navStyle()}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 800 }}>
              Bronson Family Farm
            </div>
            <div style={{ fontSize: 18, opacity: 0.92 }}>
              More than a farm.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <button style={primaryButtonStyle()} onClick={() => setPage("home")}>
              Home
            </button>
            <button
              style={primaryButtonStyle()}
              onClick={() => setPage("story")}
            >
              Our Story
            </button>
            <button
              style={primaryButtonStyle()}
              onClick={() => openExternal(WEATHER_URL)}
            >
              Weather
            </button>
            <button
              style={primaryButtonStyle(true)}
              onClick={() => {
                setPage("marketplace");
                setLayer("soundbite");
              }}
            >
              GrownBy
            </button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageKey)}
              style={{
                padding: "14px 18px",
                borderRadius: 999,
                border: "none",
                fontSize: 16,
              }}
            >
              {LANGUAGE_OPTIONS.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {page === "home" && (
          <>
            {imageBlock(
              IMAGES.home,
              520,
              false,
              null
            )}

            <div
              className="two-col"
              style={{
                display: "grid",
                gridTemplateColumns: "1.15fr .85fr",
                gap: 24,
                marginTop: 24,
              }}
            >
              <div style={cardStyle()}>
                <div
                  style={{
                    fontSize: 58,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-.03em",
                  }}
                >
                  Bronson Family Farm
                </div>

                <div
                  style={{
                    marginTop: 10,
                    fontSize: 30,
                    color: COLORS.muted,
                  }}
                >
                  More than a farm.
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 22,
                    lineHeight: 1.8,
                    color: COLORS.muted,
                  }}
                >
                  A regenerative ecosystem connecting land, food access,
                  marketplace activity, growers, youth workforce development,
                  education, and partnership in Youngstown and the Mahoning
                  Valley.
                </div>

                <div
                  style={{
                    marginTop: 26,
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    style={primaryButtonStyle()}
                    onClick={() => {
                      setPage("guest");
                      setLayer("soundbite");
                    }}
                  >
                    Begin Journey
                  </button>

                  <button
                    style={primaryButtonStyle(true)}
                    onClick={() => openExternal(STORE_URL)}
                  >
                    Open GrownBy
                  </button>
                </div>
              </div>

              <div style={cardStyle()}>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".24em",
                    textTransform: "uppercase",
                    color: "#7b8d83",
                    fontWeight: 800,
                  }}
                >
                  Personal Invitation
                </div>

                <div
                  style={{
                    marginTop: 18,
                    fontSize: 21,
                    lineHeight: 1.9,
                    color: COLORS.muted,
                  }}
                >
                  This experience is designed to feel personal. Each pathway
                  speaks to a different kind of visitor, need, and future.
                </div>

                <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
                  <button
                    style={primaryButtonStyle()}
                    onClick={() => {
                      setPage("guest");
                      setLayer("soundbite");
                    }}
                  >
                    Enter as Guest
                  </button>
                  <button
                    style={primaryButtonStyle()}
                    onClick={() => {
                      setPage("customer");
                      setLayer("soundbite");
                    }}
                  >
                    Enter as Customer
                  </button>
                  <button
                    style={primaryButtonStyle(true)}
                    onClick={() => {
                      setPage("marketplace");
                      setLayer("soundbite");
                    }}
                  >
                    Enter GrownBy
                  </button>
                </div>
              </div>
            </div>

            <div
              className="three-col"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 24,
                marginTop: 24,
              }}
            >
              {(
                Object.entries(pathways) as [Exclude<PageKey, "home" | "story">, Pathway][]
              ).map(([key, pathway]) => (
                <div key={key} style={{ ...cardStyle(), padding: 0 }}>
                  <div
                    style={{
                      height: 220,
                      borderTopLeftRadius: 28,
                      borderTopRightRadius: 28,
                      backgroundImage: `url(${pathway.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div style={{ padding: 22 }}>
                    <div
                      style={{
                        fontSize: 30,
                        fontWeight: 800,
                        letterSpacing: "-.02em",
                      }}
                    >
                      {pathway.title}
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.72,
                        color: COLORS.muted,
                      }}
                    >
                      {pathway.subtitle}
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: "#74867b",
                      }}
                    >
                      {pathway.personalLine}
                    </div>

                    <div style={{ marginTop: 18 }}>
                      <button
                        style={{ ...primaryButtonStyle(), width: "100%" }}
                        onClick={() => {
                          setPage(key);
                          setLayer("soundbite");
                        }}
                      >
                        Open Pathway
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {page === "story" && (
          <>
            {imageBlock(IMAGES.story, 500)}

            <div style={{ ...cardStyle(), marginTop: 24 }}>
              <div style={{ fontSize: 54, fontWeight: 800 }}>Our Story</div>

              <div
                style={{
                  marginTop: 20,
                  fontSize: 22,
                  lineHeight: 1.9,
                  color: COLORS.muted,
                }}
              >
                Inspired by family farming traditions and shaped for
                Youngstown’s future, Bronson Family Farm connects land
                restoration, food access, agritourism, education, and
                opportunity.
              </div>

              <div
                style={{
                  marginTop: 18,
                  fontSize: 22,
                  lineHeight: 1.9,
                  color: COLORS.muted,
                }}
              >
                The Bronson and Lorenzana legacy now moves into a new generation
                of purpose.
              </div>

              <div
                className="two-col"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                  marginTop: 26,
                }}
              >
                <div
                  style={{
                    ...cardStyle(),
                    background:
                      "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                    boxShadow: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: ".24em",
                      textTransform: "uppercase",
                      color: "#7b8d83",
                      fontWeight: 800,
                    }}
                  >
                    Story Value
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: COLORS.muted,
                    }}
                  >
                    The story gives people a reason to care. It helps them feel
                    the purpose before they ever take another step.
                  </div>
                </div>

                <div
                  style={{
                    ...cardStyle(),
                    background:
                      "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                    boxShadow: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: ".24em",
                      textTransform: "uppercase",
                      color: "#7b8d83",
                      fontWeight: 800,
                    }}
                  >
                    Where This Leads
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: COLORS.muted,
                    }}
                  >
                    The story leads into food, youth development, partnership,
                    GrownBy, education, and return visits that feel meaningful.
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activePathway && (
          <>
            {imageBlock(
              activePathway.image,
              440,
              true,
              <div style={{ maxWidth: 820 }}>
                <div
                  style={{
                    fontSize: 50,
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: "-.03em",
                  }}
                >
                  {activePathway.title}
                </div>
                <div
                  style={{
                    marginTop: 14,
                    fontSize: 24,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,.92)",
                  }}
                >
                  {activePathway.personalLine}
                </div>
              </div>
            )}

            <div
              className="two-col"
              style={{
                display: "grid",
                gridTemplateColumns: ".85fr 1.15fr",
                gap: 24,
                marginTop: 24,
              }}
            >
              <div style={cardStyle()}>
                <div
                  style={{
                    fontSize: 52,
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: "-.03em",
                  }}
                >
                  {activePathway.title}
                </div>

                <div
                  style={{
                    marginTop: 12,
                    fontSize: 18,
                    lineHeight: 1.75,
                    color: COLORS.muted,
                  }}
                >
                  {activePathway.subtitle}
                </div>

                <div style={{ marginTop: 22 }}>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: ".26em",
                      textTransform: "uppercase",
                      color: "#7f9086",
                      fontWeight: 800,
                    }}
                  >
                    Journey Progress
                  </div>

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
                  {layerOrder.map((item) => (
                    <button
                      key={item}
                      style={ghostButtonStyle(layer === item)}
                      onClick={() => setLayer(item)}
                    >
                      {item}
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
                  <button
                    style={primaryButtonStyle()}
                    onClick={() =>
                      setLayer(
                        layerOrder[Math.max(layerOrder.indexOf(layer) - 1, 0)]
                      )
                    }
                  >
                    Prev
                  </button>

                  <button
                    style={primaryButtonStyle(true)}
                    onClick={() =>
                      setLayer(
                        layerOrder[
                          Math.min(layerOrder.indexOf(layer) + 1, 4)
                        ]
                      )
                    }
                  >
                    Next
                  </button>

                  <button
                    style={primaryButtonStyle()}
                    onClick={() => setPage("home")}
                  >
                    Back Home
                  </button>
                </div>
              </div>

              <div style={cardStyle()}>
                <div
                  style={{
                    fontSize: 56,
                    lineHeight: 1,
                    fontWeight: 800,
                  }}
                >
                  {activePathway.panels[layer].title}
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 23,
                    lineHeight: 1.85,
                    color: COLORS.muted,
                  }}
                >
                  {activePathway.panels[layer].body}
                </div>

                <div
                  className="two-col"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                    marginTop: 26,
                  }}
                >
                  <div
                    style={{
                      ...cardStyle(),
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: ".26em",
                        textTransform: "uppercase",
                        color: "#7f9086",
                        fontWeight: 800,
                      }}
                    >
                      Why This Exists
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.8,
                        color: COLORS.muted,
                      }}
                    >
                      {activePathway.whyItMatters}
                    </div>
                  </div>

                  <div
                    style={{
                      ...cardStyle(),
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: ".26em",
                        textTransform: "uppercase",
                        color: "#7f9086",
                        fontWeight: 800,
                      }}
                    >
                      What This Creates
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.8,
                        color: COLORS.muted,
                      }}
                    >
                      {activePathway.whatPeopleGain}
                    </div>
                  </div>
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
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: ".26em",
                      textTransform: "uppercase",
                      color: "#7f9086",
                      fontWeight: 800,
                    }}
                  >
                    For You
                  </div>

                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 19,
                      lineHeight: 1.85,
                      color: COLORS.muted,
                    }}
                  >
                    {activePathway.personalLine}
                  </div>
                </div>

                {page === "marketplace" && (
                  <div style={{ marginTop: 26 }}>
                    <button
                      style={primaryButtonStyle(true)}
                      onClick={() => openExternal(STORE_URL)}
                    >
                      Open GrownBy Store
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
