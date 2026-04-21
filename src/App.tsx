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

const colors = {
  pine: "#0b5e43",
  forest: "#083e2d",
  gold: "#e7cf6a",
  text: "#173629",
  muted: "#61756a",
};

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

const languages = [
  { key: "en", label: "English", dir: "ltr" },
  { key: "es", label: "Español", dir: "ltr" },
  { key: "tl", label: "Tagalog", dir: "ltr" },
  { key: "it", label: "Italiano", dir: "ltr" },
  { key: "fr", label: "Français", dir: "ltr" },
  { key: "he", label: "עברית", dir: "rtl" },
];

const ui = {
  en: {
    home: "Home",
    story: "Our Story",
    weather: "Weather",
    store: "GrownBy",
    begin: "Begin Journey",
    back: "Back Home",
    prev: "Prev",
    next: "Next",
  },
};

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
      "This pathway is about what reaches your table, habits, and health.",
    whyItMatters:
      "Fresh local food can become part of everyday wellness.",
    whatPeopleGain:
      "You gain clearer connection between fresh food and better living.",
    panels: {
      soundbite: {
        title: "Fresh food is personal.",
        body:
          "What you choose to eat shapes energy, wellness, and family life.",
      },
      intro: {
        title: "What you experience",
        body:
          "Healthy choices are meant to feel natural, appealing, and practical.",
      },
      knowledge: {
        title: "What becomes clear",
        body:
          "Fresh food supports health, community resilience, and independence.",
      },
      purpose: {
        title: "Why this matters",
        body:
          "The farm becomes part of your recurring healthy lifestyle.",
      },
      next: {
        title: "Where you can go next",
        body:
          "Continue into GrownBy, seasonal buying, events, and return visits.",
      },
    },
  },

  marketplace: {
    title: "GrownBy",
    image: IMAGES.marketplace,
    subtitle: "The online store for produce and ecosystem support.",
    personalLine:
      "Customers, guests, volunteers, and supporters purchase here.",
    whyItMatters:
      "This is the buying destination for the ecosystem.",
    whatPeopleGain:
      "Convenient produce access and a direct way to support the mission.",
    panels: {
      soundbite: {
        title: "GrownBy is the online store.",
        body:
          "Produce can be purchased online here.",
      },
      intro: {
        title: "What it means",
        body:
          "This is the customer-facing marketplace side of the ecosystem.",
      },
      knowledge: {
        title: "What becomes clear",
        body:
          "People now know exactly where to buy and support.",
      },
      purpose: {
        title: "Why this exists",
        body:
          "Every ecosystem needs a clear buying destination.",
      },
      next: {
        title: "Where you can go next",
        body:
          "Enter the store and stay connected through repeat support.",
      },
    },
  },

  grower: {
    title: "Grower",
    image: IMAGES.grower,
    subtitle:
      "Growers register through the portal to join the ecosystem.",
    personalLine:
      "Registration opens marketplace participation and network benefits.",
    whyItMatters:
      "Registration is the gateway to ecosystem opportunity.",
    whatPeopleGain:
      "Growers gain visibility, participation, and market access.",
    panels: {
      soundbite: {
        title: "The grower journey begins with registration.",
        body:
          "Growers register through the portal to become part of the ecosystem.",
      },
      intro: {
        title: "What this means",
        body:
          "This pathway turns interest into recognized participation.",
      },
      knowledge: {
        title: "What becomes clear",
        body:
          "Registration connects growers to participation and opportunity.",
      },
      purpose: {
        title: "Why this exists",
        body:
          "So growers can move into the ecosystem formally.",
      },
      next: {
        title: "Where you can go next",
        body:
          "Advance into marketplace access and deeper network benefits.",
      },
    },
  },

  youth: {
    title: "Youth Workforce",
    image: IMAGES.youth,
    subtitle: "Growth, responsibility, confidence, and readiness.",
    personalLine:
      "This pathway helps potential become preparation.",
    whyItMatters:
      "Young people need visible bridges into opportunity.",
    whatPeopleGain:
      "Confidence, discipline, teamwork, readiness, direction.",
    panels: {
      soundbite: {
        title: "This pathway grows people.",
        body:
          "It builds confidence and responsibility through lived experience.",
      },
      intro: {
        title: "What you experience",
        body:
          "Guidance, accountability, encouragement, and practical work.",
      },
      knowledge: {
        title: "What you build",
        body:
          "Work habits, teamwork, discipline, and confidence.",
      },
      purpose: {
        title: "Why this matters",
        body:
          "Potential becomes preparation.",
      },
      next: {
        title: "Where you can go next",
        body:
          "Move into deeper roles, guided learning, and future direction.",
      },
    },
  },

  partners: {
    title: "Partners",
    image: IMAGES.partners,
    subtitle: "Aligned support creates visible community benefit.",
    personalLine:
      "This pathway shows how support becomes visible impact.",
    whyItMatters:
      "Partners need to see where support creates return.",
    whatPeopleGain:
      "Clearer understanding of collaboration and regional impact.",
    panels: {
      soundbite: {
        title: "Support becomes visible here.",
        body:
          "Partnership becomes restoration, education, youth development, and food access.",
      },
      intro: {
        title: "What you experience",
        body:
          "A credible ecosystem where support creates visible value.",
      },
      knowledge: {
        title: "What becomes clear",
        body:
          "Partnership strengthens programs, systems, and opportunity.",
      },
      purpose: {
        title: "Why this matters",
        body:
          "Shared investment creates shared return.",
      },
      next: {
        title: "Where you can go next",
        body:
          "Move into sponsorship, planning, activation, and alignment.",
      },
    },
  },
};

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [layer, setLayer] = useState<LayerKey>("soundbite");
  const [lang, setLang] = useState("en");

  const t = ui.en;

  const active =
    page !== "home" && page !== "story"
      ? pathways[page as keyof typeof pathways]
      : null;

  const progress = useMemo(
    () => ((layerOrder.indexOf(layer) + 1) / layerOrder.length) * 100,
    [layer]
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#f4efe5 0%,#edf5ee 55%,#ffffff 100%)",
        fontFamily:
          'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
        color: colors.text,
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 1450, margin: "0 auto" }}>
        <div
          style={{
            background: `linear-gradient(135deg,${colors.forest},${colors.pine})`,
            color: "#fff",
            borderRadius: 28,
            padding: 22,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontSize: 30, fontWeight: 800 }}>
              Bronson Family Farm
            </div>
            <div style={{ fontSize: 18, opacity: 0.9 }}>
              More than a farm.
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={() => setPage("home")}>{t.home}</button>
            <button onClick={() => setPage("story")}>{t.story}</button>
            <button onClick={() => openExternal(WEATHER_URL)}>
              {t.weather}
            </button>
            <button onClick={() => setPage("marketplace")}>{t.store}</button>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {languages.map((l) => (
                <option key={l.key} value={l.key}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {page === "home" && (
          <>
            <div
              style={{
                marginTop: 24,
                height: 520,
                borderRadius: 34,
                backgroundImage: `url(${IMAGES.home})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr .8fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 28,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontSize: 58,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  Bronson Family Farm
                </div>

                <div
                  style={{
                    marginTop: 8,
                    fontSize: 30,
                    color: colors.muted,
                  }}
                >
                  More than a farm.
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 22,
                    lineHeight: 1.8,
                    color: colors.muted,
                  }}
                >
                  A regenerative ecosystem connecting land, food access,
                  marketplace activity, growers, youth workforce development,
                  education, and partnership in Youngstown and the Mahoning
                  Valley.
                </div>

                <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
                  <button
                    onClick={() => {
                      setPage("guest");
                      setLayer("soundbite");
                    }}
                  >
                    {t.begin}
                  </button>

                  <button onClick={() => openExternal(STORE_URL)}>
                    {t.store}
                  </button>
                </div>
              </div>

              <div
                style={{
                  background: "#fff",
                  borderRadius: 28,
                  padding: 28,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 700 }}>
                  Why it matters
                </div>

                <div
                  style={{
                    marginTop: 16,
                    fontSize: 20,
                    lineHeight: 1.8,
                    color: colors.muted,
                  }}
                >
                  Restore land. Grow healthy food. Create opportunity. Build
                  systems people want to return to.
                </div>
              </div>
            </div>
          </>
        )}

        {page === "story" && (
          <div style={{ marginTop: 24 }}>
            <div
              style={{
                height: 500,
                borderRadius: 34,
                backgroundImage: `url(${IMAGES.story})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div
              style={{
                marginTop: 22,
                background: "#fff",
                borderRadius: 28,
                padding: 28,
              }}
            >
              <div style={{ fontSize: 54, fontWeight: 800 }}>
                Our Story
              </div>

              <div
                style={{
                  marginTop: 20,
                  fontSize: 22,
                  lineHeight: 1.9,
                  color: colors.muted,
                }}
              >
                Inspired by family farming traditions and shaped for
                Youngstown’s future, Bronson Family Farm connects land
                restoration, food access, agritourism, education, and
                opportunity.
              </div>
            </div>
          </div>
        )}

        {active && (
          <>
            <div
              style={{
                marginTop: 24,
                height: 430,
                borderRadius: 34,
                backgroundImage: `url(${active.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: ".85fr 1.15fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 28,
                  padding: 26,
                }}
              >
                <div style={{ fontSize: 44, fontWeight: 800 }}>
                  {active.title}
                </div>

                <div
                  style={{
                    marginTop: 14,
                    fontSize: 18,
                    lineHeight: 1.8,
                    color: colors.muted,
                  }}
                >
                  {active.subtitle}
                </div>

                <div
                  style={{
                    marginTop: 18,
                    height: 10,
                    background: "#e7eee9",
                    borderRadius: 999,
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: colors.pine,
                      borderRadius: 999,
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 10,
                    marginTop: 18,
                  }}
                >
                  {layerOrder.map((l) => (
                    <button key={l} onClick={() => setLayer(l)}>
                      {l}
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginTop: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() =>
                      setLayer(
                        layerOrder[
                          Math.max(layerOrder.indexOf(layer) - 1, 0)
                        ]
                      )
                    }
                  >
                    {t.prev}
                  </button>

                  <button
                    onClick={() =>
                      setLayer(
                        layerOrder[
                          Math.min(layerOrder.indexOf(layer) + 1, 4)
                        ]
                      )
                    }
                  >
                    {t.next}
                  </button>

                  <button onClick={() => setPage("home")}>
                    {t.back}
                  </button>
                </div>
              </div>

              <div
                style={{
                  background: "#fff",
                  borderRadius: 28,
                  padding: 28,
                }}
              >
                <div style={{ fontSize: 52, fontWeight: 800 }}>
                  {active.panels[layer].title}
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 23,
                    lineHeight: 1.85,
                    color: colors.muted,
                  }}
                >
                  {active.panels[layer].body}
                </div>

                {page === "marketplace" && (
                  <div style={{ marginTop: 24 }}>
                    <button
                      onClick={() => openExternal(STORE_URL)}
                    >
                      Open GrownBy
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
