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
    short:
      "City agencies, universities, growers, nonprofits, businesses, and community organizations align resources.",
  },
  {
    id: "future",
    label: "Future Agritourism",
    short: "The farm grows into a regional food, learning, and agritourism destination.",
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
    details: [
      "The ecosystem begins with place: land, people, food, education, and community need.",
      "Each pathway gives a person or partner a clear way to participate.",
      "The purpose is circulation — food, knowledge, opportunity, and resources moving through the community.",
    ],
    color: "#1d241b",
    ecosystem: true,
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
      "The airport setting gives the farm a unique identity and future destination value.",
      "The site becomes a working demonstration space where people can see food systems in action.",
    ],
    color: "#3d332a",
  },
  {
    id: "explore",
    title: "Explore the Farm",
    subtitle: "Guests experience the vision, story, and future.",
    image: "/SAM_0220.JPG",
    body:
      "Guests enter through tours, events, storytelling, demonstrations, and experiences that help them understand the ecosystem, the land, and why local food systems matter.",
    details: [
      "Guests learn the farm story and why the ecosystem exists.",
      "They see growing areas, demonstrations, food access needs, and future possibilities.",
      "They can move next into volunteering, purchasing, growing, donating, partnering, or advocating.",
    ],
    nextPath: "food",
    color: "#263322",
  },
  {
    id: "food",
    title: "Healthy Food Access",
    subtitle: "Fresh food supports healthier families.",
    image: "/culniary_edibleflowers.jpeg",
    body:
      "Families connect to fresh, chemical-free produce, seedlings, nutrition education, and healthier choices that support wellness, food security, and household stability.",
    details: [
      "Customers access fresh produce, seedlings, and nutrition information.",
      "The goal is repeated healthy choice, not one-time participation.",
      "Customer demand helps strengthen growers and the marketplace.",
    ],
    nextPath: "marketplace",
    color: "#40351f",
  },
  {
    id: "marketplace",
    title: "Community Marketplace",
    subtitle: "The food moves — not the farmer.",
    image: "/SAM_0301.JPG",
    body:
      "The marketplace connects growers to schools, businesses, organizations, and buyers through a coordinated local food system where food and money circulate locally.",
    details: [
      "Orders, food, customers, and growers are coordinated through a shared system.",
      "Growers do not have to travel everywhere alone to find buyers.",
      "The marketplace keeps food and money moving locally.",
    ],
    nextPath: "growers",
    color: "#4a2f1d",
  },
  {
    id: "growers",
    title: "Grower Support System",
    subtitle: "Tools, education, infrastructure, and opportunity.",
    image: "/SAM_0225.JPG",
    body:
      "Growers receive demonstrations, technical assistance, irrigation knowledge, tools, market opportunities, education, and support to become more sustainable and successful.",
    details: [
      "Growers need more than land; they need supplies, knowledge, and market access.",
      "The farm demonstrates growing methods, tools, irrigation, soil learning, and pest awareness.",
      "Supported growers increase community food production.",
    ],
    nextPath: "valueadded",
    color: "#263322",
  },
  {
    id: "valueadded",
    title: "Value-Added Production",
    subtitle: "Food becomes products, enterprise, and income.",
    image: "/culniary_edibleflowers2.jpeg",
    body:
      "Produce can become sauces, canned goods, herbs, prepared foods, seedlings, educational kits, farm experiences, and small business opportunities.",
    details: [
      "Value-added work helps extend the life and economic value of food.",
      "It creates pathways for small business, culinary education, and entrepreneurship.",
      "This helps more people participate in the food economy.",
    ],
    nextPath: "youth",
    color: "#4a3421",
  },
  {
    id: "youth",
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0226.JPG",
    body:
      "Youth build leadership, responsibility, teamwork, communication, safety, and workforce skills through real experiences connected to growing food and serving community.",
    details: [
      "Youth practice attendance, safety, communication, teamwork, and responsibility.",
      "They learn by working in a real environment with visible outcomes.",
      "The pathway builds future readiness, confidence, and community connection.",
    ],
    nextPath: "partners",
    color: "#29243d",
  },
  {
    id: "partners",
    title: "Community Partnerships",
    subtitle: "Stronger together.",
    image: "/SAM_0238.JPG",
    body:
      "Community partnerships strengthen the ecosystem through shared education, workforce development, food access, infrastructure, health, and community investment.",
    details: [
      "Partners include the City of Youngstown, Central State University, Ohio State University, Northeast Ohio Regional Sewer District, Farm & Family Alliance, Parker Farms, Home Depot, Flying High, Jubilee Gardens, Inc., Elliott’s Garden Center, Petitti Garden Centers, and The Airport Association.",
      "Partners bring knowledge, materials, funding, outreach, workforce support, health education, and technical assistance.",
      "Partnerships help the ecosystem serve more people than one organization could serve alone.",
    ],
    nextPath: "future",
    color: "#23364a",
  },
  {
    id: "future",
    title: "Future Agritourism",
    subtitle: "A regional food, learning, and destination experience.",
    image: "/SAM_0249.JPG",
    body:
      "Bronson Family Farm is growing toward agritourism, youth experiences, food innovation, camping, RC activities, education, wellness, grower supply systems, and community-centered economic development.",
    details: [
      "The future expands the farm into a destination for food, learning, recreation, and legacy.",
      "Agritourism creates earned revenue while educating visitors and supporting the mission.",
      "The ecosystem becomes a model for community-centered food innovation.",
    ],
    nextPath: "intro",
    color: "#4b321f",
  },
];

function findSlideIndex(id: string) {
  const found = slides.findIndex((s) => s.id === id);
  return found >= 0 ? found : 0;
}

function PathwayPanel({ activeId, setIndex }: any) {
  return (
    <div style={styles.pathwayPanel}>
      <div style={styles.pathwayHeader}>Follow the Pathway</div>
      <div style={styles.pathwaySub}>
        Select any pathway to open its role, purpose, next step, and ecosystem impact.
      </div>

      <div style={styles.pathwayList}>
        {pathways.map((p, i) => {
          const active = activeId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setIndex(findSlideIndex(p.id))}
              style={{
                ...styles.pathwayItem,
                borderColor: active ? accent : "rgba(255,255,255,.14)",
                background: active
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
          );
        })}
      </div>

      <div style={styles.pathwayFlow}>
        Explore → Access → Marketplace → Grow → Produce → Workforce → Partner → Reinvest
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
        {pathways.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setIndex(findSlideIndex(p.id))}
            style={styles.mapCard}
          >
            <div style={styles.pathwayNumber}>{i + 1}</div>
            <div style={styles.pathwayCopy}>
              <div style={styles.pathwayTitle}>{p.label}</div>
              <div style={styles.pathwayText}>{p.short}</div>
            </div>
          </button>
        ))}
      </div>

      <div style={styles.flow}>
        Enter → Learn → Grow → Buy → Sell → Work → Partner → Reinvest
      </div>
    </div>
  );
}

function DetailBox({ slide, setIndex }: any) {
  return (
    <div style={styles.detailBox}>
      <div style={styles.detailTitle}>What this pathway does</div>

      <ul style={styles.detailList}>
        {(slide.details || []).map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {slide.nextPath && (
        <button
          style={styles.nextPathBtn}
          onClick={() => setIndex(findSlideIndex(slide.nextPath))}
        >
          Follow Next Path →
        </button>
      )}
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
    }, 13000);

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
            background: `linear-gradient(
              135deg,
              rgba(18,18,18,.56) 0%,
              ${slide.color}aa 45%,
              rgba(0,0,0,.24) 100%
            )`,
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

              <DetailBox slide={slide} setIndex={setIndex} />

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

            {slide.ecosystem ? (
              <EcosystemMap setIndex={setIndex} />
            ) : (
              <PathwayPanel activeId={slide.id} setIndex={setIndex} />
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
    gridTemplateColumns: "430px minmax(640px, 1fr)",
    gap: "26px",
    alignItems: "center",
    flex: 1,
    minHeight: 0,
    padding: "8px 0",
  },
  textSide: {
    maxWidth: 430,
  },
  title: {
    fontSize: "clamp(2.15rem, 4.1vw, 4.35rem)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-0.045em",
    textShadow: "0 5px 20px rgba(0,0,0,.35)",
  },
  subtitle: {
    color: warm,
    fontSize: "clamp(.98rem, 1.4vw, 1.28rem)",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 850,
    lineHeight: 1.25,
  },
  bodyBox: {
    background: "rgba(12,12,12,.54)",
    borderRadius: 18,
    padding: "15px",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,.08)",
  },
  body: {
    margin: 0,
    fontSize: ".95rem",
    lineHeight: 1.5,
    color: "rgba(255,255,255,.94)",
  },
  detailBox: {
    marginTop: 10,
    background: "rgba(0,0,0,.34)",
    border: `1px solid rgba(197,138,52,.45)`,
    borderRadius: 18,
    padding: 14,
  },
  detailTitle: {
    color: warm,
    fontWeight: 950,
    marginBottom: 8,
    fontSize: ".92rem",
    textTransform: "uppercase",
    letterSpacing: ".06em",
  },
  detailList: {
    margin: 0,
    paddingLeft: 18,
    fontSize: ".86rem",
    lineHeight: 1.35,
  },
  nextPathBtn: {
    marginTop: 10,
    border: "none",
    borderRadius: 999,
    background: accent,
    color: "#111",
    fontWeight: 950,
    padding: "10px 16px",
    cursor: "pointer",
  },
  controls: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 12,
  },
  accentBtn: {
    border: "none",
    borderRadius: 999,
    background: accent,
    color: "#111",
    fontWeight: 950,
    padding: "11px 18px",
    cursor: "pointer",
  },
  darkBtn: {
    border: "2px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    background: "rgba(0,0,0,.42)",
    color: "#fff",
    fontWeight: 850,
    padding: "11px 18px",
    cursor: "pointer",
  },
  pathwayPanel: {
    width: "100%",
    background: "rgba(0,0,0,.34)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 26,
    padding: 18,
    backdropFilter: "blur(8px)",
    maxHeight: "65vh",
    overflow: "auto",
    boxSizing: "border-box",
  },
  pathwayHeader: {
    color: warm,
    fontSize: "1.45rem",
    fontWeight: 950,
    marginBottom: 6,
  },
  pathwaySub: {
    fontSize: ".92rem",
    lineHeight: 1.4,
    marginBottom: 14,
    opacity: 0.9,
    maxWidth: 760,
  },
  pathwayList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
    gap: 12,
  },
  pathwayItem: {
    width: "100%",
    color: "white",
    border: "2px solid",
    borderRadius: 18,
    padding: 14,
    display: "grid",
    gridTemplateColumns: "36px 1fr",
    gap: 12,
    textAlign: "left",
    cursor: "pointer",
    alignItems: "start",
    boxSizing: "border-box",
    minHeight: 108,
  },
  pathwayNumber: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    background: accent,
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 950,
    flexShrink: 0,
  },
  pathwayCopy: {
    minWidth: 0,
  },
  pathwayTitle: {
    fontWeight: 950,
    fontSize: "1rem",
    marginBottom: 6,
    lineHeight: 1.15,
    whiteSpace: "normal",
  },
  pathwayText: {
    fontSize: ".9rem",
    lineHeight: 1.35,
    opacity: 0.9,
    whiteSpace: "normal",
    wordBreak: "normal",
  },
  pathwayFlow: {
    marginTop: 14,
    background: "rgba(197,138,52,.18)",
    border: `1px solid ${accent}`,
    borderRadius: 18,
    padding: 14,
    textAlign: "center",
    color: warm,
    fontWeight: 950,
    fontSize: ".92rem",
  },
  ecosystemMap: {
    width: "100%",
    background: "rgba(0,0,0,.34)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 28,
    padding: 20,
    backdropFilter: "blur(8px)",
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gap: 18,
    alignItems: "center",
    boxSizing: "border-box",
    maxHeight: "65vh",
    overflow: "auto",
  },
  centerCircle: {
    width: 200,
    height: 200,
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
    fontSize: "1.2rem",
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
    gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
    gap: 12,
  },
  mapCard: {
    width: "100%",
    minHeight: 108,
    border: "2px solid rgba(255,255,255,.18)",
    borderRadius: 18,
    padding: 14,
    color: "white",
    background: "rgba(0,0,0,.38)",
    textAlign: "left",
    display: "grid",
    gridTemplateColumns: "36px 1fr",
    gap: 12,
    cursor: "pointer",
    alignItems: "start",
    boxSizing: "border-box",
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
    maxHeight: 100,
    flexShrink: 0,
  },
  navCard: {
    minWidth: 150,
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
    height: 58,
    objectFit: "cover",
    display: "block",
  },
  navText: {
    padding: 8,
  },
  navTitle: {
    fontWeight: 950,
    fontSize: ".74rem",
    lineHeight: 1.1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
