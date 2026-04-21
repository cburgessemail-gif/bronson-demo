import React, { useEffect, useMemo, useRef, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "it" | "patwa" | "he";
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

/* ---------- IMAGE LAYER ---------- */
/* Put your real images in /public/images/ */

const IMAGES = {
  home: "/images/farm-aerial.jpg",
  story: "/images/family-legacy.jpg",
  guest: "/images/guest-entry.jpg",
  customer: "/images/fresh-produce.jpg",
  marketplace: "/images/marketplace.jpg",
  grower: "/images/grower-field.jpg",
  youth: "/images/youth-workforce.jpg",
  partners: "/images/partners-community.jpg",
};

/* ---------- LANGUAGE ---------- */

const LANGS = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "patwa", label: "Patwa" },
  { key: "he", label: "עברית" },
];

const UI = {
  en: {
    title: "Bronson Family Farm",
    subtitle: "More than a farm.",
    enter: "Enter Experience",
    story: "Our Story",
    weather: "Weather",
    market: "Marketplace",
    back: "Back Home",
    next: "Next",
    previous: "Previous",
    guided: "Guided Voice",
    lang: "Language",
  },
};

/* ---------- PATHWAYS ---------- */

const pathways = [
  {
    id: "guest",
    title: "Guest",
    desc: "Understand the vision, story, and purpose.",
    image: IMAGES.guest,
  },
  {
    id: "customer",
    title: "Customer",
    desc: "Fresh food, wellness, healthy choices.",
    image: IMAGES.customer,
  },
  {
    id: "marketplace",
    title: "Marketplace",
    desc: "Support the ecosystem through purchasing power.",
    image: IMAGES.marketplace,
  },
  {
    id: "grower",
    title: "Grower",
    desc: "Connect growers to opportunity and participation.",
    image: IMAGES.grower,
  },
  {
    id: "youth",
    title: "Youth Workforce",
    desc: "Skills, responsibility, readiness.",
    image: IMAGES.youth,
  },
  {
    id: "partners",
    title: "Partners",
    desc: "Align resources for community benefit.",
    image: IMAGES.partners,
  },
];

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

function openExternal(url: string) {
  window.open(url, "_blank");
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
        backgroundPosition: "center",
        boxShadow: "0 25px 60px rgba(0,0,0,.18)",
      }}
    >
      {dark && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.45))",
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
        borderRadius: 26,
        padding: 24,
        boxShadow: "0 15px 40px rgba(0,0,0,.08)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [layer, setLayer] = useState<LayerKey>("soundbite");

  const t = UI.en;

  const active = pathways.find((p) => p.id === page);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#f3efe7 0%, #eef5ef 40%, #f7f7f7 100%)",
        fontFamily: "Inter, sans-serif",
        color: "#173629",
      }}
    >
      <style>{`
      *{box-sizing:border-box}
      button,select{font-family:inherit}
      @media(max-width:1000px){
        .grid2,.grid3{grid-template-columns:1fr!important}
      }
      `}</style>

      <div style={{ maxWidth: 1450, margin: "0 auto", padding: 20 }}>
        {/* NAV */}
        <div
          style={{
            background: "#0a3d2d",
            color: "#fff",
            padding: 22,
            borderRadius: 24,
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{t.title}</div>
            <div style={{ opacity: 0.85 }}>{t.subtitle}</div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => setPage("home")}
              style={btnGhost()}
            >
              Home
            </button>

            <button
              onClick={() => setPage("story")}
              style={btnGhost()}
            >
              {t.story}
            </button>

            <button
              onClick={() => openExternal(WEATHER_URL)}
              style={btnGhost()}
            >
              {t.weather}
            </button>

            <button
              onClick={() => openExternal(STORE_URL)}
              style={btnGold()}
            >
              {t.market}
            </button>

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as LanguageKey)
              }
              style={{
                padding: "12px 14px",
                borderRadius: 14,
                border: "none",
              }}
            >
              {LANGS.map((l) => (
                <option key={l.key}>{l.label}</option>
              ))}
            </select>
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
                gridTemplateColumns: "1.3fr .9fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <Card>
                <div
                  style={{
                    fontSize: 56,
                    lineHeight: 1,
                    fontWeight: 800,
                  }}
                >
                  Bronson Family Farm
                </div>

                <div
                  style={{
                    fontSize: 28,
                    marginTop: 10,
                    color: "#5c6f64",
                  }}
                >
                  More than a farm.
                </div>

                <div
                  style={{
                    marginTop: 24,
                    fontSize: 20,
                    lineHeight: 1.8,
                    color: "#54685e",
                  }}
                >
                  A regenerative ecosystem for food access,
                  education, marketplace activity, growers,
                  youth workforce development, and community
                  return.
                </div>

                <button
                  onClick={() => setPage("guest")}
                  style={{
                    marginTop: 28,
                    ...btnGreen(),
                  }}
                >
                  {t.enter}
                </button>
              </Card>

              <Card>
                <div style={miniTitle()}>Why It Matters</div>
                <p style={copy()}>
                  Restore land. Grow healthy food. Create
                  opportunity. Build systems for Youngstown
                  and the Mahoning Valley Area.
                </p>

                <div style={miniTitle()}>Live Access</div>

                <button
                  onClick={() => openExternal(STORE_URL)}
                  style={{
                    ...btnGold(),
                    width: "100%",
                    marginBottom: 12,
                  }}
                >
                  Open Marketplace
                </button>

                <button
                  onClick={() => openExternal(WEATHER_URL)}
                  style={{
                    ...btnGhostDark(),
                    width: "100%",
                  }}
                >
                  Open Weather
                </button>
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
                  <HeroImage src={p.image} height={220} dark={false} />

                  <div style={{ padding: 22 }}>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                      }}
                    >
                      {p.title}
                    </div>

                    <div style={copy()}>{p.desc}</div>

                    <button
                      onClick={() => {
                        setPage(p.id as PageKey);
                        setLayer("soundbite");
                      }}
                      style={{
                        marginTop: 18,
                        ...btnGreen(),
                        width: "100%",
                      }}
                    >
                      Open Pathway
                    </button>
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
              <div style={{ fontSize: 52, fontWeight: 800 }}>
                Our Story
              </div>

              <p style={bigCopy()}>
                Inspired by family farming traditions and
                built for Youngstown’s future, Bronson Family
                Farm connects land restoration, food access,
                agritourism, learning, and opportunity.
              </p>

              <p style={bigCopy()}>
                The legacy of Bronson and Lorenzana families
                now moves into a new generation of purpose.
              </p>
            </Card>
          </>
        )}

        {/* PATHWAYS */}
        {active && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={active.image} height={420} />
            </div>

            <div
              className="grid2"
              style={{
                display: "grid",
                gridTemplateColumns: ".9fr 1.1fr",
                gap: 22,
                marginTop: 24,
              }}
            >
              <Card>
                <div style={{ fontSize: 40, fontWeight: 800 }}>
                  {active.title}
                </div>

                <p style={bigCopy()}>{active.desc}</p>

                <div style={miniTitle()}>Journey Layer</div>

                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    marginTop: 10,
                  }}
                >
                  {layer.toUpperCase()}
                </div>

                <div style={{ marginTop: 18 }}>
                  <button
                    onClick={() =>
                      setLayer(
                        layerOrder[
                          Math.max(
                            layerOrder.indexOf(layer) - 1,
                            0
                          )
                        ]
                      )
                    }
                    style={btnGhostDark()}
                  >
                    {t.previous}
                  </button>

                  <button
                    onClick={() =>
                      setLayer(
                        layerOrder[
                          Math.min(
                            layerOrder.indexOf(layer) + 1,
                            4
                          )
                        ]
                      )
                    }
                    style={{
                      ...btnGreen(),
                      marginLeft: 10,
                    }}
                  >
                    {t.next}
                  </button>
                </div>

                <button
                  onClick={() => setPage("home")}
                  style={{
                    ...btnGhostDark(),
                    marginTop: 20,
                    width: "100%",
                  }}
                >
                  {t.back}
                </button>
              </Card>

              <Card>
                <div style={{ fontSize: 52, fontWeight: 800 }}>
                  {active.title}
                </div>

                <p style={bigCopy()}>
                  This pathway helps visitors understand and
                  move deeper into the Bronson Family Farm
                  ecosystem.
                </p>

                <p style={bigCopy()}>
                  Every layer is designed to create meaning,
                  connection, and a reason to return.
                </p>

                {page === "marketplace" && (
                  <button
                    onClick={() => openExternal(STORE_URL)}
                    style={{
                      ...btnGold(),
                      marginTop: 20,
                    }}
                  >
                    Open GrownBy Marketplace
                  </button>
                )}
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- styles ---------- */

function btnGreen() {
  return {
    padding: "14px 22px",
    borderRadius: 16,
    border: "none",
    background: "#0d5f43",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
  } as React.CSSProperties;
}

function btnGold() {
  return {
    padding: "14px 22px",
    borderRadius: 16,
    border: "none",
    background: "#e9cf6a",
    color: "#2a2512",
    fontWeight: 800,
    cursor: "pointer",
  } as React.CSSProperties;
}

function btnGhost() {
  return {
    padding: "12px 18px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    cursor: "pointer",
  } as React.CSSProperties;
}

function btnGhostDark() {
  return {
    padding: "14px 22px",
    borderRadius: 16,
    border: "1px solid rgba(0,0,0,.08)",
    background: "#f2f5f2",
    color: "#173629",
    cursor: "pointer",
    fontWeight: 700,
  } as React.CSSProperties;
}

function miniTitle() {
  return {
    fontSize: 12,
    letterSpacing: ".24em",
    textTransform: "uppercase" as const,
    color: "#87958b",
    fontWeight: 800,
    marginTop: 6,
  };
}

function copy() {
  return {
    fontSize: 18,
    lineHeight: 1.8,
    color: "#5c6f64",
    marginTop: 14,
  };
}

function bigCopy() {
  return {
    fontSize: 21,
    lineHeight: 1.8,
    color: "#55685e",
    marginTop: 18,
  };
}
