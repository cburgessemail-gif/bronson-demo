import React, { useEffect, useMemo, useState } from "react";

const accent = "#c58a34";
const warm = "#f0d4a2";

const pathways = [
  {
    id: "explore",
    label: "Explore the Farm",
    short:
      "Explore the airport land, outdoor growing areas, and place-based purpose of the farm.",
    role:
      "This pathway introduces Bronson Family Farm as a place-based food ecosystem located at the Historic Lansdowne Airport in Youngstown, Ohio.",
    does: [
      "Explains the airport setting and why this land matters.",
      "Introduces the outdoor growing areas as demonstration, production, and education spaces.",
      "Shows how the farm turns an underused place into infrastructure for food access, learning, workforce development, and community revitalization.",
    ],
  },
  {
    id: "food",
    label: "Healthy Food Access",
    short:
      "Families access fresh, chemical-free produce, seedlings, and nutrition education.",
    role:
      "This pathway explains how the ecosystem supports families through healthier food choices and repeated access to local food.",
    does: [
      "Connects families to fresh produce, seedlings, and nutrition education.",
      "Explains why food access is connected to health, wellness, and household stability.",
      "Shows how customer participation strengthens growers, the marketplace, and the local food system.",
    ],
  },
  {
    id: "marketplace",
    label: "Community Marketplace",
    short:
      "Food moves through a coordinated system connecting growers, buyers, schools, and organizations.",
    role:
      "This pathway explains how the marketplace moves food, orders, money, and opportunity through the community.",
    does: [
      "Connects growers to families, schools, businesses, organizations, and community buyers.",
      "Explains the principle: the food moves — not every farmer alone.",
      "Keeps food and money circulating locally through an organized community marketplace.",
    ],
  },
  {
    id: "growers",
    label: "Grower Support System",
    short:
      "Growers receive education, tools, demonstrations, resources, and infrastructure support.",
    role:
      "This pathway explains how the ecosystem helps growers become stronger, more productive, and more connected.",
    does: [
      "Supports growers with education, demonstrations, tools, and technical assistance.",
      "Explains soil knowledge, irrigation, pest awareness, harvesting, and market readiness.",
      "Helps growers participate in a shared system instead of working in isolation.",
    ],
  },
  {
    id: "youth",
    label: "Youth Workforce Development",
    short:
      "Youth build responsibility, leadership, job skills, and confidence through real farm-based work.",
    role:
      "This pathway explains how the farm becomes an outdoor classroom for workforce development and future readiness.",
    does: [
      "Builds attendance, teamwork, communication, responsibility, and safety habits.",
      "Uses real farm work to teach job readiness, leadership, and problem-solving.",
      "Connects youth to visible results, community purpose, and future opportunity.",
    ],
  },
  {
    id: "partners",
    label: "Community Partnerships",
    short:
      "Partners align education, health, workforce, business, agriculture, and community resources.",
    role:
      "This pathway explains how partners strengthen the ecosystem so it can serve more people than one organization could alone.",
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
    color: "#1d241b",
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
    color: "#3d332a",
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
    color: "#263322",
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
    color: "#40351f",
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
    color: "#4a2f1d",
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
    color: "#263322",
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
    color: "#29243d",
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
    color: "#23364a",
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
    color: "#4b321f",
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
    color: "#1d241b",
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

function KnowledgeBox({ slide, setIndex, back }: any) {
  const pathway = findPathway(slide.pathwayId);
  const items = pathway ? pathway.does : slide.details || [];

  return (
    <div style={styles.detailBox}>
      <div style={styles.detailTitle}>
        {pathway ? "Pathway Knowledge" : "What this story establishes"}
      </div>

      {pathway && (
        <div style={styles.roleBox}>
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
            style={styles.nextPathBtn}
            onClick={() => setIndex(findSlideIndex(slide.nextPath))}
          >
            Follow Next Path →
          </button>
        )}

        <button style={styles.smallDarkBtn} onClick={back}>
          Back
        </button>

        <button style={styles.smallDarkBtn} onClick={() => setIndex(0)}>
          Start
        </button>
      </div>
    </div>
  );
}

function PathwayPanel({ activeId, setIndex }: any) {
  return (
    <div style={styles.pathwayPanel}>
      <div style={styles.pathwayMiniLabel}>ECOSYSTEM PATHWAYS</div>

      <div style={styles.pathwayList}>
        {pathways.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setIndex(findSlideIndex(p.id))}
            style={{
              ...styles.pathwayItem,
              borderColor: activeId === p.id ? accent : "rgba(255,255,255,.14)",
              background:
                activeId === p.id
                  ? "rgba(197,138,52,.24)"
                  : "rgba(0,0,0,.34)",
            }}
          >
            <div style={styles.pathwayNumber}>{i + 1}</div>
            <div style={styles.pathwayCopy}>
              <div style={styles.pathwayTitle}>{p.label}</div>
              <div style={styles.pathwayText}>{p.short}</div>
            </div>
          </button>
        ))}
      </div>

      <div style={styles.pathwayFlow}>
        Explore → Healthy Food Access → Marketplace → Grower Support → Youth
        Workforce → Partnerships
      </div>
    </div>
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);

  const slide = slides[index];

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
      <section style={styles.hero}>
        <img src={slide.image} alt={slide.title} style={styles.bg} />

        <div
          style={{
            ...styles.overlay,
            background:
              slide.id === "intro"
                ? "linear-gradient(135deg, rgba(5,8,5,.38) 0%, rgba(0,0,0,.18) 100%)"
                : `linear-gradient(135deg, rgba(18,18,18,.56) 0%, ${slide.color}aa 45%, rgba(0,0,0,.24) 100%)`,
          }}
        >
          <header style={styles.top}>
            <div>
              <div style={styles.brand}>BRONSON FAMILY FARM</div>
              <div style={styles.demo}>Guided Ecosystem Demo</div>
            </div>

            <div style={styles.counter}>
              {index + 1} / {slides.length}
            </div>
          </header>

          <main style={styles.content}>
            <section style={styles.textSide}>
              <h1 style={styles.title}>{slide.title}</h1>
              <h2 style={styles.subtitle}>{slide.subtitle}</h2>

              <div style={styles.bodyBox}>
                <p style={styles.body}>{slide.body}</p>
              </div>

              <KnowledgeBox slide={slide} setIndex={setIndex} back={back} />

              <div style={styles.controls}>
                <button
                  style={styles.accentBtn}
                  onClick={() => {
                    setIndex(0);
                    setGuided(true);
                  }}
                >
                  Guided Tour
                </button>

                <button
                  style={styles.darkBtn}
                  onClick={() => setGuided((g) => !g)}
                >
                  {guided ? "Pause Tour" : "Resume Tour"}
                </button>

                <button style={styles.darkBtn} onClick={back}>
                  Back
                </button>

                <button style={styles.accentBtn} onClick={next}>
                  Next
                </button>
              </div>
            </section>

            <PathwayPanel activeId={slide.pathwayId} setIndex={setIndex} />
          </main>

          <div style={styles.progressWrap}>
            <div style={{ ...styles.progress, width: `${progress}%` }} />
          </div>

          <nav style={styles.bottomNav}>
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                style={{
                  ...styles.navCard,
                  borderColor: i === index ? accent : "rgba(255,255,255,.16)",
                }}
              >
                <img src={s.image} alt={s.title} style={styles.navImage} />
                <div style={styles.navText}>
                  <div style={styles.navTitle}>{s.title}</div>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#080b07",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  hero: {
    position: "relative",
    height: "100dvh",
    overflow: "hidden",
  },
  bg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.01)",
    transition: "transform 8s ease",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    padding: "10px 18px 8px",
    color: "white",
    display: "grid",
    gridTemplateRows: "auto minmax(0, 1fr) 6px 58px",
    gap: 7,
    boxSizing: "border-box",
    overflow: "hidden",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 42,
  },
  brand: {
    fontSize: "12px",
    letterSpacing: ".24em",
    color: warm,
    fontWeight: 950,
  },
  demo: {
    opacity: 0.88,
    marginTop: 2,
    fontSize: "11px",
  },
  counter: {
    border: "2px solid rgba(255,255,255,.35)",
    borderRadius: 999,
    padding: "6px 13px",
    fontWeight: 800,
    background: "rgba(0,0,0,.24)",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "340px minmax(500px, 920px)",
    gap: 18,
    alignItems: "start",
    paddingTop: 14,
    minHeight: 0,
    overflow: "hidden",
  },
  textSide: {
    maxWidth: 340,
    minHeight: 0,
  },
  title: {
    fontSize: "clamp(1.45rem, 2.8vw, 3rem)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-0.045em",
    textShadow: "0 5px 20px rgba(0,0,0,.35)",
  },
  subtitle: {
    color: warm,
    fontSize: "clamp(.82rem, 1.05vw, 1.05rem)",
    marginTop: 7,
    marginBottom: 7,
    fontWeight: 850,
    lineHeight: 1.2,
  },
  bodyBox: {
    background: "rgba(8,8,8,.72)",
    borderRadius: 14,
    padding: "10px",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,.08)",
  },
  body: {
    margin: 0,
    fontSize: ".78rem",
    lineHeight: 1.35,
    color: "rgba(255,255,255,.94)",
  },
  detailBox: {
    marginTop: 7,
    background: "rgba(0,0,0,.34)",
    border: `1px solid rgba(197,138,52,.45)`,
    borderRadius: 14,
    padding: 10,
    maxHeight: 158,
    overflow: "auto",
  },
  detailTitle: {
    color: warm,
    fontWeight: 950,
    marginBottom: 5,
    fontSize: ".7rem",
    textTransform: "uppercase",
    letterSpacing: ".06em",
  },
  roleBox: {
    fontSize: ".7rem",
    lineHeight: 1.25,
    marginBottom: 6,
    color: "rgba(255,255,255,.94)",
  },
  detailList: {
    margin: 0,
    paddingLeft: 16,
    fontSize: ".69rem",
    lineHeight: 1.22,
  },
  pathEndControls: {
    display: "flex",
    gap: 7,
    flexWrap: "wrap",
    marginTop: 8,
  },
  nextPathBtn: {
    border: "none",
    borderRadius: 999,
    background: accent,
    color: "#111",
    fontWeight: 950,
    padding: "7px 11px",
    cursor: "pointer",
    fontSize: ".72rem",
  },
  smallDarkBtn: {
    border: "1px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    background: "rgba(0,0,0,.42)",
    color: "#fff",
    fontWeight: 850,
    padding: "7px 11px",
    cursor: "pointer",
    fontSize: ".72rem",
  },
  controls: {
    display: "flex",
    gap: 7,
    flexWrap: "wrap",
    marginTop: 7,
  },
  accentBtn: {
    border: "none",
    borderRadius: 999,
    background: accent,
    color: "#111",
    fontWeight: 950,
    padding: "8px 13px",
    cursor: "pointer",
    fontSize: ".78rem",
  },
  darkBtn: {
    border: "2px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    background: "rgba(0,0,0,.42)",
    color: "#fff",
    fontWeight: 850,
    padding: "8px 13px",
    cursor: "pointer",
    fontSize: ".78rem",
  },
  pathwayPanel: {
    width: "100%",
    height: "100%",
    maxHeight: "calc(100dvh - 190px)",
    background: "rgba(0,0,0,.18)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 18,
    padding: 6,
    backdropFilter: "blur(5px)",
    overflow: "hidden",
    boxSizing: "border-box",
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
  pathwayCopy: {
    minWidth: 0,
  },
  pathwayTitle: {
    fontWeight: 950,
    fontSize: ".78rem",
    marginBottom: 3,
    lineHeight: 1.12,
    whiteSpace: "normal",
  },
  pathwayText: {
    fontSize: ".68rem",
    lineHeight: 1.18,
    opacity: 0.9,
    whiteSpace: "normal",
    wordBreak: "normal",
  },
  pathwayFlow: {
    marginTop: 2,
    marginBottom: 6,
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
    height: 6,
    background: "rgba(255,255,255,.16)",
    borderRadius: 999,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    background: accent,
    transition: "width .6s ease",
  },
  bottomNav: {
    display: "flex",
    gap: 7,
    overflowX: "auto",
    overflowY: "hidden",
    height: 58,
    padding: 0,
    alignItems: "center",
  },
  navCard: {
    minWidth: 118,
    height: 54,
    background: "rgba(0,0,0,.52)",
    borderRadius: 12,
    overflow: "hidden",
    border: "2px solid rgba(255,255,255,.15)",
    cursor: "pointer",
    color: "#fff",
    padding: 0,
    textAlign: "left",
    flexShrink: 0,
  },
  navImage: {
    width: "100%",
    height: 30,
    objectFit: "cover",
    display: "block",
  },
  navText: {
    padding: "4px 6px",
  },
  navTitle: {
    fontWeight: 950,
    fontSize: ".6rem",
    lineHeight: 1.05,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
