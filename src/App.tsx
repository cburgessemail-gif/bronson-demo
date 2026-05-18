import React, { useEffect, useMemo, useState } from "react";

const accent = "#c58a34";
const warm = "#f0d4a2";

const pathways = [
  {
    id: "explore",
    label: "Explore the Farm",
    short: "Airport land, outdoor growing areas, and place-based purpose.",
    role:
      "Introduces Bronson Family Farm as a place-based food ecosystem located at the Historic Lansdowne Airport in Youngstown, Ohio.",
    does: [
      "Explains the airport setting and why this land matters.",
      "Introduces outdoor growing areas as demonstration, production, and education spaces.",
      "Shows how an underused place becomes infrastructure for food access, learning, workforce development, and revitalization.",
    ],
  },
  {
    id: "food",
    label: "Healthy Food Access",
    short: "Fresh, chemical-free produce, seedlings, and nutrition education.",
    role:
      "Explains how the ecosystem supports families through healthier food choices and repeated access to local food.",
    does: [
      "Connects families to fresh produce, seedlings, and nutrition education.",
      "Links food access to health, wellness, and household stability.",
      "Shows how customer participation strengthens growers and the marketplace.",
    ],
  },
  {
    id: "marketplace",
    label: "Community Marketplace",
    short: "Food moves through a coordinated community system.",
    role:
      "Explains how the marketplace moves food, orders, money, and opportunity through the community.",
    does: [
      "Connects growers to families, schools, businesses, organizations, and buyers.",
      "Explains the principle: the food moves — not every farmer alone.",
      "Keeps food and money circulating locally.",
    ],
  },
  {
    id: "growers",
    label: "Grower Support System",
    short: "Education, tools, demonstrations, resources, and infrastructure.",
    role:
      "Explains how the ecosystem helps growers become stronger, more productive, and more connected.",
    does: [
      "Supports growers with education, demonstrations, tools, and technical assistance.",
      "Explains soil knowledge, irrigation, pest awareness, harvesting, and market readiness.",
      "Helps growers participate in a shared system instead of working in isolation.",
    ],
  },
  {
    id: "youth",
    label: "Youth Workforce Development",
    short: "Responsibility, leadership, job skills, and confidence.",
    role:
      "Explains how the farm becomes an outdoor classroom for workforce development and future readiness.",
    does: [
      "Builds attendance, teamwork, communication, responsibility, and safety habits.",
      "Uses real farm work to teach job readiness, leadership, and problem-solving.",
      "Connects youth to visible results, community purpose, and future opportunity.",
    ],
  },
  {
    id: "partners",
    label: "Community Partnerships",
    short: "Education, health, workforce, business, agriculture, and community.",
    role:
      "Explains how partners strengthen the ecosystem so it can serve more people than one organization could alone.",
    does: [
      "Partners include the City of Youngstown, Central State University, Ohio State University, Northeast Ohio Regional Sewer District, Farm & Family Alliance, Parker Farms, Home Depot, Flying High, Jubilee Gardens, Inc., Elliott’s Garden Center, Petitti Garden Centers, and The Airport Association.",
      "Partners contribute education, materials, funding, technical assistance, outreach, and workforce support.",
      "Partnerships expand capacity, credibility, infrastructure, and community impact.",
    ],
  },
];

const slides = [
  {
    id: "intro",
    title: "A Connected Food Ecosystem",
    subtitle: "People. Resources. Opportunity. Circulating Together.",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    body:
      "Bronson Family Farm is a place-based ecosystem where growers, families, youth, partners, resources, and opportunities work together so food, knowledge, and economic value circulate locally and strengthen the whole community.",
    details: [
      "The ecosystem image shows six connected pathways.",
      "Each numbered section represents a role in the system.",
      "Viewers can follow each pathway to understand what it does, why it matters, and how it strengthens the whole ecosystem.",
    ],
  },
  {
    id: "place",
    title: "The Place",
    subtitle: "Historic Lansdowne Airport · Youngstown, Ohio",
    image: "/GrowArea2.jpg",
    body:
      "The farm grows on historic land connected to aviation, memory, and new possibility. This place is becoming infrastructure for food access, learning, wellness, workforce development, and agritourism.",
    details: [
      "The land is the entry point for the story.",
      "The airport setting gives the farm a unique identity and destination value.",
      "The site becomes a working demonstration space where people can see food systems in action.",
    ],
  },
  {
    id: "explore",
    title: "Explore the Farm",
    subtitle: "Historic airport land becoming a place-based food ecosystem.",
    image: "/SAM_0220.JPG",
    body:
      "Explore the Farm introduces visitors to the Historic Lansdowne Airport, the outdoor growing areas, and the purpose of using this place to grow food, teach skills, support growers, and create community opportunity.",
    pathwayId: "explore",
    nextPath: "food",
  },
  {
    id: "food",
    title: "Healthy Food Access",
    subtitle: "Fresh food supports healthier families.",
    image: "/culniary_edibleflowers.jpeg",
    body:
      "Healthy Food Access explains how families connect to fresh, chemical-free produce, seedlings, nutrition education, and healthier choices that support wellness, food security, and household stability.",
    pathwayId: "food",
    nextPath: "marketplace",
  },
  {
    id: "marketplace",
    title: "Community Marketplace",
    subtitle: "The food moves — not the farmer.",
    image: "/SAM_0301.JPG",
    body:
      "The Community Marketplace explains how food, buyers, growers, schools, businesses, organizations, and community programs can be coordinated so food and money circulate locally.",
    pathwayId: "marketplace",
    nextPath: "growers",
  },
  {
    id: "growers",
    title: "Grower Support System",
    subtitle: "Tools, education, infrastructure, and opportunity.",
    image: "/SAM_0225.JPG",
    body:
      "The Grower Support System explains how growers receive demonstrations, technical assistance, irrigation knowledge, tools, market opportunities, education, and support to become more sustainable and successful.",
    pathwayId: "growers",
    nextPath: "youth",
  },
  {
    id: "youth",
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0226.JPG",
    body:
      "Youth Workforce Development explains how young people build leadership, responsibility, teamwork, communication, safety, and workforce skills through real experiences connected to growing food and serving community.",
    pathwayId: "youth",
    nextPath: "partners",
  },
  {
    id: "partners",
    title: "Community Partnerships",
    subtitle: "Stronger together.",
    image: "/SAM_0238.JPG",
    body:
      "Community Partnerships explains how organizations align resources, knowledge, funding, technical assistance, workforce support, and community investment to strengthen the ecosystem.",
    pathwayId: "partners",
    nextPath: "future",
  },
  {
    id: "future",
    title: "Future Growth",
    subtitle: "Agritourism, food innovation, and community-centered development.",
    image: "/SAM_0249.JPG",
    body:
      "Beyond the six ecosystem pathways, Bronson Family Farm is growing toward agritourism, youth experiences, food innovation, camping, RC activities, education, wellness, grower supply systems, and community-centered economic development.",
    details: [
      "Future growth builds from the six connected ecosystem pathways.",
      "Agritourism creates earned revenue while keeping the mission community-centered.",
      "The farm becomes a regional model for food access, learning, workforce development, and revitalization.",
    ],
  },
  {
    id: "purpose",
    title: "The Purpose",
    subtitle: "Grow food. Grow people. Grow community.",
    image: "/GrowArea.jpg",
    body:
      "The purpose of Bronson Family Farm is to help communities grow stronger through food access, education, workforce development, wellness, local enterprise, and shared participation in a connected food ecosystem.",
    details: [
      "Food access is the starting point.",
      "Education and workforce development help people grow with the system.",
      "The ecosystem keeps resources, opportunity, and value circulating locally.",
    ],
  },
];

function findSlideIndex(id: string) {
  const found = slides.findIndex((s) => s.id === id);
  return found >= 0 ? found : 0;
}

function findPathway(id?: string) {
  return pathways.find((p) => p.id === id);
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);

  const slide = slides[index];
  const pathway = findPathway(slide.pathwayId);
  const items = pathway ? pathway.does : slide.details || [];

  useEffect(() => {
    if (!guided) return;
    if (index >= slides.length - 1) {
      setGuided(false);
      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => Math.min(prev + 1, slides.length - 1));
    }, 15000);

    return () => clearTimeout(timer);
  }, [guided, index]);

  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div style={styles.page}>
      <img src={slide.image} alt={slide.title} style={styles.backgroundImage} />
      <div style={styles.overlay} />

      <header style={styles.topBar}>
        <div style={styles.brand}>
          <div style={styles.brandTitle}>BRONSON FAMILY FARM</div>
          <div style={styles.brandSub}>Guided Ecosystem Demo</div>
        </div>

        <div style={styles.counter}>
          {index + 1} / {slides.length}
        </div>
      </header>

      <main style={styles.content}>
        <section style={styles.textSide}>
          <h1 style={styles.title}>{slide.title}</h1>
          <div style={styles.subtitle}>{slide.subtitle}</div>

          <div style={styles.bodyBox}>
            <div style={styles.bodyText}>{slide.body}</div>
          </div>

          <div style={styles.detailBox}>
            <div style={styles.detailTitle}>
              {pathway ? "Pathway Knowledge" : "What this story establishes"}
            </div>

            {pathway && (
              <div style={styles.detailText}>
                <strong>Role:</strong> {pathway.role}
              </div>
            )}

            <ul style={styles.detailList}>
              {items.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div style={styles.pathEndControls}>
              {slide.nextPath && (
                <button
                  style={styles.primarySmallBtn}
                  onClick={() => setIndex(findSlideIndex(slide.nextPath))}
                >
                  Follow Next Path →
                </button>
              )}

              <button style={styles.secondarySmallBtn} onClick={back}>
                Back
              </button>

              <button style={styles.secondarySmallBtn} onClick={() => setIndex(0)}>
                Start
              </button>
            </div>
          </div>

          <div style={styles.actionRow}>
            <button
              style={styles.primaryBtn}
              onClick={() => {
                setIndex(0);
                setGuided(true);
              }}
            >
              Guided Tour
            </button>

            <button style={styles.secondaryBtn} onClick={() => setGuided((g) => !g)}>
              {guided ? "Pause Tour" : "Resume Tour"}
            </button>

            <button style={styles.secondaryBtn} onClick={back}>
              Back
            </button>

            <button style={styles.primaryBtn} onClick={next}>
              Next
            </button>
          </div>
        </section>

        <section style={styles.ecosystemPanel}>
          {slide.id === "intro" ? (
            <div />
          ) : (
            <div style={styles.pathwayPanel}>
              <div style={styles.pathwayMiniLabel}>ECOSYSTEM PATHWAYS</div>

              <div style={styles.pathwayList}>
                {pathways.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setIndex(findSlideIndex(p.id))}
                    style={{
                      ...styles.pathwayItem,
                      borderColor:
                        slide.pathwayId === p.id ? accent : "rgba(255,255,255,.14)",
                      background:
                        slide.pathwayId === p.id
                          ? "rgba(197,138,52,.24)"
                          : "rgba(0,0,0,.34)",
                    }}
                  >
                    <div style={styles.pathwayNumber}>{i + 1}</div>
                    <div>
                      <div style={styles.pathwayTitle}>{p.label}</div>
                      <div style={styles.pathwayText}>{p.short}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div style={styles.pathwayFlow}>
                Explore → Healthy Food Access → Marketplace → Grower Support →
                Youth Workforce → Partnerships
              </div>
            </div>
          )}
        </section>
      </main>

      <div style={styles.progressWrap}>
        <div style={{ ...styles.progress, width: `${progress}%` }} />
      </div>

      <nav style={styles.bottomStrip}>
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            style={{
              ...styles.thumb,
              ...(i === index ? styles.thumbActive : {}),
            }}
          >
            <img src={s.image} alt={s.title} style={styles.thumbImg} />
            <div style={styles.thumbOverlay}>
              <div style={styles.thumbText}>{s.title}</div>
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    position: "relative",
    width: "100%",
    height: "100dvh",
    overflow: "hidden",
    background: "#09110c",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },

  backgroundImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(2px) brightness(.52)",
    transform: "scale(1.03)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(8,14,12,.54), rgba(16,24,20,.38), rgba(34,26,16,.24))",
  },

  topBar: {
    position: "relative",
    zIndex: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "14px 18px 6px",
  },

  brand: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  brandTitle: {
    fontSize: ".88rem",
    fontWeight: 900,
    letterSpacing: ".22em",
    color: "#e5c17a",
  },

  brandSub: {
    fontSize: ".82rem",
    color: "rgba(255,255,255,.9)",
  },

  counter: {
    border: "1px solid rgba(255,255,255,.28)",
    borderRadius: 999,
    padding: "8px 16px",
    fontWeight: 800,
    fontSize: ".92rem",
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,.05)",
  },

  content: {
    position: "relative",
    zIndex: 5,
    flex: 1,
    display: "grid",
    gridTemplateColumns: "260px minmax(0, 1fr)",
    gap: 28,
    alignItems: "start",
    padding: "0 18px 8px",
    minHeight: 0,
    overflow: "hidden",
  },

  textSide: {
    maxWidth: 260,
    paddingTop: 8,
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: "clamp(1.1rem, 1.9vw, 2rem)",
    lineHeight: 0.96,
    margin: 0,
    marginBottom: 10,
    fontWeight: 900,
    letterSpacing: "-0.04em",
    textShadow: "0 4px 18px rgba(0,0,0,.32)",
  },

  subtitle: {
    fontSize: "clamp(.88rem, 1vw, 1.05rem)",
    lineHeight: 1.28,
    marginBottom: 12,
    color: "#e7d2aa",
    fontWeight: 700,
  },

  bodyBox: {
    background: "rgba(10,10,10,.72)",
    borderRadius: 16,
    padding: "12px 14px",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,.06)",
  },

  bodyText: {
    fontSize: ".86rem",
    lineHeight: 1.42,
    color: "rgba(255,255,255,.92)",
  },

  detailBox: {
    marginTop: 10,
    background: "rgba(0,0,0,.36)",
    border: "1px solid rgba(197,138,52,.38)",
    borderRadius: 16,
    padding: 12,
    maxHeight: 150,
    overflow: "auto",
  },

  detailTitle: {
    fontWeight: 900,
    fontSize: ".76rem",
    color: "#f1cb86",
    marginBottom: 8,
    letterSpacing: ".05em",
    textTransform: "uppercase",
  },

  detailText: {
    fontSize: ".78rem",
    lineHeight: 1.35,
    color: "rgba(255,255,255,.92)",
    marginBottom: 8,
  },

  detailList: {
    margin: 0,
    paddingLeft: 16,
    fontSize: ".75rem",
    lineHeight: 1.3,
  },

  pathEndControls: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginTop: 8,
  },

  primarySmallBtn: {
    border: "none",
    borderRadius: 999,
    padding: "7px 10px",
    fontWeight: 900,
    fontSize: ".7rem",
    cursor: "pointer",
    background: accent,
    color: "#111",
  },

  secondarySmallBtn: {
    border: "1px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    padding: "7px 10px",
    fontWeight: 800,
    fontSize: ".7rem",
    cursor: "pointer",
    background: "rgba(255,255,255,.06)",
    color: "white",
  },

  actionRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 12,
  },

  primaryBtn: {
    border: "none",
    borderRadius: 999,
    padding: "9px 14px",
    fontWeight: 900,
    fontSize: ".78rem",
    cursor: "pointer",
    background: accent,
    color: "#111",
    boxShadow: "0 10px 25px rgba(0,0,0,.35)",
  },

  secondaryBtn: {
    border: "1px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    padding: "9px 14px",
    fontWeight: 800,
    fontSize: ".78rem",
    cursor: "pointer",
    background: "rgba(255,255,255,.06)",
    color: "white",
    backdropFilter: "blur(8px)",
  },

  ecosystemPanel: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 18,
    overflow: "hidden",
    minHeight: 0,
  },

  pathwayPanel: {
    width: "100%",
    maxWidth: 900,
    background: "rgba(0,0,0,.22)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 18,
    padding: 12,
    backdropFilter: "blur(5px)",
    boxShadow: "0 18px 45px rgba(0,0,0,.38)",
  },

  pathwayMiniLabel: {
    color: warm,
    fontSize: ".72rem",
    fontWeight: 900,
    letterSpacing: ".12em",
    marginBottom: 10,
    opacity: 0.92,
  },

  pathwayList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(245px, 1fr))",
    gap: 8,
  },

  pathwayItem: {
    width: "100%",
    color: "white",
    border: "2px solid",
    borderRadius: 14,
    padding: 9,
    display: "grid",
    gridTemplateColumns: "28px 1fr",
    gap: 9,
    textAlign: "left",
    cursor: "pointer",
    alignItems: "start",
    boxSizing: "border-box",
    minHeight: 72,
  },

  pathwayNumber: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: accent,
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 950,
    flexShrink: 0,
    fontSize: ".74rem",
  },

  pathwayTitle: {
    fontWeight: 950,
    fontSize: ".78rem",
    marginBottom: 3,
    lineHeight: 1.12,
  },

  pathwayText: {
    fontSize: ".68rem",
    lineHeight: 1.18,
    opacity: 0.9,
  },

  pathwayFlow: {
    marginTop: 8,
    background: "rgba(197,138,52,.18)",
    border: `1px solid ${accent}`,
    borderRadius: 14,
    padding: 8,
    textAlign: "center",
    color: warm,
    fontWeight: 950,
    fontSize: ".7rem",
  },

  progressWrap: {
    position: "relative",
    zIndex: 5,
    height: 6,
    margin: "0 18px",
    background: "rgba(255,255,255,.16)",
    borderRadius: 999,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    background: accent,
    transition: "width .6s ease",
  },

  bottomStrip: {
    position: "relative",
    zIndex: 5,
    display: "flex",
    gap: 8,
    overflowX: "auto",
    padding: "8px 18px 10px",
    scrollbarWidth: "thin",
  },

  thumb: {
    flex: "0 0 auto",
    width: 118,
    height: 58,
    borderRadius: 12,
    overflow: "hidden",
    border: "2px solid rgba(255,255,255,.08)",
    background: "rgba(255,255,255,.04)",
    position: "relative",
    cursor: "pointer",
    padding: 0,
  },

  thumbActive: {
    border: `2px solid ${accent}`,
    boxShadow: "0 0 0 2px rgba(197,138,52,.18)",
  },

  thumbImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(.8)",
  },

  thumbOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.12))",
    display: "flex",
    alignItems: "flex-end",
    padding: 7,
  },

  thumbText: {
    fontSize: ".6rem",
    fontWeight: 800,
    lineHeight: 1.1,
    color: "#fff",
    textAlign: "left",
  },
};
