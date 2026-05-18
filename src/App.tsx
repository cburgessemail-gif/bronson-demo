import React, { useEffect, useMemo, useState } from "react";

const accent = "#c58a34";
const warm = "#f0d4a2";

const pathways = [
  {
    id: "explore",
    label: "Explore the Farm",
    short: "Guests enter, learn, engage, and become part of the vision.",
  },
  {
    id: "food",
    label: "Healthy Food Access",
    short: "Families access fresh food, seedlings, and nutrition education.",
  },
  {
    id: "marketplace",
    label: "Community Marketplace",
    short: "Food moves through the community — not every farmer alone.",
  },
  {
    id: "growers",
    label: "Grower Support System",
    short: "Growers receive tools, knowledge, land support, and markets.",
  },
  {
    id: "valueadded",
    label: "Value-Added Production",
    short: "Food becomes products, enterprise, income, and opportunity.",
  },
  {
    id: "youth",
    label: "Youth Workforce Development",
    short: "Youth build skills, confidence, leadership, and responsibility.",
  },
  {
    id: "partners",
    label: "Community Partnerships",
    short: "Partners align resources for health, education, and impact.",
  },
  {
    id: "future",
    label: "Future Agritourism",
    short: "The farm grows into a regional food and learning destination.",
  },
];

const slides = [
  {
    id: "intro",
    title: "A Connected Food Ecosystem",
    subtitle: "People. Resources. Opportunity. Circulating Together.",
    image: "/GrowArea.jpg",
    body:
      "Bronson Family Farm is a place-based ecosystem where growers, families, youth, partners, resources, and opportunities work together so food, knowledge, and economic value circulate locally and strengthen the whole community.",
    color: "#1d241b",
    ecosystem: true,
  },
  {
    id: "place",
    title: "The Place",
    subtitle: "Historic Lansdowne Airport · Youngstown, Ohio",
    image: "/SAM_0220.JPG",
    body:
      "The farm grows on historic land connected to aviation, memory, and new possibility. This place is becoming infrastructure for food access, learning, wellness, workforce development, and agritourism.",
    color: "#3d332a",
  },
  {
    id: "explore",
    title: "Explore the Farm",
    subtitle: "Guests experience the vision, story, and future.",
    image: "/SAM_0221.JPG",
    body:
      "Guests enter through tours, events, storytelling, demonstrations, and experiences that help them understand the ecosystem, the land, and why local food systems matter.",
    color: "#263322",
  },
  {
    id: "food",
    title: "Healthy Food Access",
    subtitle: "Fresh food supports healthier families.",
    image: "/SAM_0222.JPG",
    body:
      "Families connect to fresh, chemical-free produce, seedlings, nutrition education, and healthier choices that support wellness, food security, and household stability.",
    color: "#40351f",
  },
  {
    id: "marketplace",
    title: "Community Marketplace",
    subtitle: "The food moves — not the farmer.",
    image: "/SAM_0223.JPG",
    body:
      "The marketplace connects growers to schools, businesses, organizations, and buyers through a coordinated local food system where food and money circulate locally.",
    color: "#4a2f1d",
  },
  {
    id: "growers",
    title: "Grower Support System",
    subtitle: "Tools, education, infrastructure, and opportunity.",
    image: "/SAM_0225.JPG",
    body:
      "Growers receive demonstrations, technical assistance, irrigation knowledge, tools, market opportunities, education, and support to become more sustainable and successful.",
    color: "#263322",
  },
  {
    id: "valueadded",
    title: "Value-Added Production",
    subtitle: "Food becomes products, enterprise, and income.",
    image: "/culniary_edibleflowers.jpeg",
    body:
      "Produce can become sauces, canned goods, herbs, prepared foods, seedlings, educational kits, farm experiences, and small business opportunities.",
    color: "#4a3421",
  },
  {
    id: "youth",
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0226.JPG",
    body:
      "Youth build leadership, responsibility, teamwork, communication, safety, and workforce skills through real experiences connected to growing food and serving community.",
    color: "#29243d",
  },
  {
    id: "partners",
    title: "Community Partnerships",
    subtitle: "Stronger together.",
    image: "/SAM_0238.JPG",
    body:
      "Educational institutions, health systems, businesses, nonprofits, growers, and civic organizations strengthen the ecosystem through collaboration and shared investment.",
    color: "#23364a",
  },
  {
    id: "future",
    title: "The Future",
    subtitle: "A regional agritourism and food innovation destination.",
    image: "/SAM_0249.JPG",
    body:
      "Bronson Family Farm is growing toward agritourism, youth experiences, food innovation, camping, RC activities, education, wellness, grower supply systems, and community-centered economic development.",
    color: "#4b321f",
  },
];

function EcosystemOverview({ activeId, setIndex }: any) {
  return (
    <div style={styles.pathwayPanel}>
      <div style={styles.pathwayHeader}>Ecosystem Pathways</div>
      <div style={styles.pathwaySub}>
        Every pathway has a role. Together they move food, knowledge, money, and opportunity.
      </div>

      <div style={styles.pathwayList}>
        {pathways.map((p, i) => {
          const slideIndex = slides.findIndex((s) => s.id === p.id);
          const active = activeId === p.id;

          return (
            <button
              key={p.id}
              onClick={() => setIndex(slideIndex)}
              style={{
                ...styles.pathwayItem,
                borderColor: active ? accent : "rgba(255,255,255,.18)",
                background: active ? "rgba(197,138,52,.24)" : "rgba(0,0,0,.36)",
              }}
            >
              <div style={styles.pathwayNumber}>{i + 1}</div>
              <div>
                <div style={styles.pathwayTitle}>{p.label}</div>
                <div style={styles.pathwayText}>{p.short}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EcosystemMap({ setIndex }: any) {
  return (
    <div style={styles.ecosystemMap}>
      <div style={styles.centerCircle}>
        <div style={styles.centerTitle}>BRONSON FAMILY FARM</div>
        <div style={styles.centerText}>A Connected Ecosystem</div>
      </div>

      <div style={styles.mapGrid}>
        {pathways.slice(0, 6).map((p, i) => {
          const slideIndex = slides.findIndex((s) => s.id === p.id);
          return (
            <button
              key={p.id}
              onClick={() => setIndex(slideIndex)}
              style={styles.mapCard}
            >
              <div style={styles.pathwayNumber}>{i + 1}</div>
              <strong>{p.label}</strong>
              <span>{p.short}</span>
            </button>
          );
        })}
      </div>

      <div style={styles.flow}>
        Enter → Learn → Grow → Buy → Sell → Work → Partner → Reinvest
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
    }, 11500);

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
            background: `linear-gradient(135deg, rgba(15,15,13,.58) 0%, ${slide.color}aa 45%, rgba(0,0,0,.22) 100%)`,
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

                <button style={styles.darkBtn} onClick={() => setGuided((g) => !g)}>
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

            {slide.ecosystem ? (
              <EcosystemMap setIndex={setIndex} />
            ) : (
              <EcosystemOverview activeId={slide.id} setIndex={setIndex} />
            )}
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
    height: "100vh",
    overflow: "hidden",
  },
  bg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    padding: "18px 24px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },
  brand: {
    fontSize: "14px",
    letterSpacing: ".25em",
    color: warm,
    fontWeight: 950,
  },
  demo: {
    opacity: 0.88,
    marginTop: 4,
    fontSize: "13px",
  },
  counter: {
    border: "2px solid rgba(255,255,255,.35)",
    borderRadius: 999,
    padding: "8px 16px",
    fontWeight: 800,
    background: "rgba(0,0,0,.24)",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "420px 1fr",
    gap: "28px",
    alignItems: "center",
    minHeight: 0,
    flex: 1,
    padding: "8px 0",
  },
  textSide: {
    maxWidth: 420,
  },
  title: {
    fontSize: "clamp(2.35rem, 4.65vw, 4.65rem)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-0.045em",
    textShadow: "0 5px 20px rgba(0,0,0,.35)",
  },
  subtitle: {
    color: warm,
    fontSize: "clamp(1rem, 1.55vw, 1.42rem)",
    marginTop: 12,
    marginBottom: 12,
    fontWeight: 850,
    lineHeight: 1.28,
  },
  bodyBox: {
    background: "rgba(12,12,12,.54)",
    borderRadius: 20,
    padding: "18px",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,.08)",
  },
  body: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.62,
    color: "rgba(255,255,255,.94)",
  },
  controls: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 14,
  },
  accentBtn: {
    border: "none",
    borderRadius: 999,
    background: accent,
    color: "#111",
    fontWeight: 950,
    padding: "12px 20px",
    cursor: "pointer",
    boxShadow: "0 4px 18px rgba(0,0,0,.25)",
  },
  darkBtn: {
    border: "2px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    background: "rgba(0,0,0,.42)",
    color: "#fff",
    fontWeight: 850,
    padding: "12px 20px",
    cursor: "pointer",
  },
  pathwayPanel: {
    background: "rgba(0,0,0,.38)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 26,
    padding: 18,
    backdropFilter: "blur(8px)",
    maxHeight: "62vh",
    overflow: "auto",
  },
  pathwayHeader: {
    color: warm,
    fontSize: "1.5rem",
    fontWeight: 950,
    marginBottom: 6,
  },
  pathwaySub: {
    fontSize: ".92rem",
    lineHeight: 1.4,
    marginBottom: 14,
    opacity: 0.9,
  },
  pathwayList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(220px, 1fr))",
    gap: 10,
  },
  pathwayItem: {
    color: "white",
    border: "2px solid",
    borderRadius: 18,
    padding: 12,
    display: "grid",
    gridTemplateColumns: "34px 1fr",
    gap: 10,
    textAlign: "left",
    cursor: "pointer",
  },
  pathwayNumber: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: accent,
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 950,
    flexShrink: 0,
  },
  pathwayTitle: {
    fontWeight: 950,
    fontSize: ".96rem",
    marginBottom: 4,
  },
  pathwayText: {
    fontSize: ".78rem",
    lineHeight: 1.28,
    opacity: 0.88,
  },
  ecosystemMap: {
    background: "rgba(0,0,0,.34)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 28,
    padding: 20,
    backdropFilter: "blur(8px)",
    display: "grid",
    gridTemplateColumns: "230px 1fr",
    gap: 18,
    alignItems: "center",
  },
  centerCircle: {
    width: 220,
    height: 220,
    borderRadius: "50%",
    background: "radial-gradient(circle at center, #173512 0%, #071207 100%)",
    border: `4px solid ${accent}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 18,
    boxShadow: "0 0 48px rgba(0,0,0,.46)",
  },
  centerTitle: {
    fontSize: "1.35rem",
    fontWeight: 950,
    lineHeight: 1.08,
  },
  centerText: {
    marginTop: 10,
    color: warm,
    fontWeight: 850,
    lineHeight: 1.3,
  },
  mapGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(210px, 1fr))",
    gap: 10,
  },
  mapCard: {
    border: "2px solid rgba(255,255,255,.18)",
    borderRadius: 18,
    padding: 12,
    color: "white",
    background: "rgba(0,0,0,.38)",
    textAlign: "left",
    display: "grid",
    gridTemplateColumns: "34px 1fr",
    gap: 10,
    cursor: "pointer",
  },
  flow: {
    gridColumn: "1 / -1",
    background: "rgba(197,138,52,.22)",
    border: `1px solid ${accent}`,
    borderRadius: 18,
    padding: 14,
    textAlign: "center",
    color: warm,
    fontWeight: 950,
  },
  progressWrap: {
    height: 7,
    background: "rgba(255,255,255,.16)",
    borderRadius: 999,
    overflow: "hidden",
    flexShrink: 0,
  },
  progress: {
    height: "100%",
    background: accent,
    transition: "width .6s ease",
  },
  bottomNav: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    paddingTop: 10,
    maxHeight: 108,
    flexShrink: 0,
  },
  navCard: {
    minWidth: 155,
    background: "rgba(0,0,0,.52)",
    borderRadius: 16,
    overflow: "hidden",
    border: "3px solid rgba(255,255,255,.15)",
    cursor: "pointer",
    color: "#fff",
    padding: 0,
    textAlign: "left",
  },
  navImage: {
    width: "100%",
    height: 62,
    objectFit: "cover",
    display: "block",
  },
  navText: {
    padding: 8,
  },
  navTitle: {
    fontWeight: 950,
    fontSize: ".76rem",
    lineHeight: 1.1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
