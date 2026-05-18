import React, { useEffect, useMemo, useState } from "react";

const accent = "#c58a34";
const warm = "#f0d4a2";

const pathways = [
  {
    id: "explore",
    label: "Explore the Farm",
    short: "Guests experience the vision, story, and future of the farm.",
    role:
      "This pathway introduces people to the farm, the land, the story, and the reason the ecosystem exists.",
    does: [
      "Welcomes guests through tours, events, demonstrations, and storytelling.",
      "Helps visitors understand food access, growing, wellness, and community purpose.",
      "Moves guests toward becoming customers, volunteers, growers, partners, donors, or advocates.",
    ],
  },
  {
    id: "food",
    label: "Healthy Food Access",
    short: "Families access fresh, chemical-free produce and nutrition education.",
    role:
      "This pathway connects families to healthier food choices and repeated access to fresh local food.",
    does: [
      "Supports access to fresh, chemical-free produce, seedlings, and nutrition education.",
      "Helps families make healthier food part of everyday life.",
      "Builds demand that strengthens growers and the marketplace.",
    ],
  },
  {
    id: "marketplace",
    label: "Community Marketplace",
    short: "The food moves through the community — not every farmer alone.",
    role:
      "This pathway coordinates buyers, growers, food movement, orders, and local circulation.",
    does: [
      "Connects growers to families, schools, businesses, organizations, and community buyers.",
      "Reduces the burden on individual growers to travel everywhere alone.",
      "Keeps food and money circulating locally.",
    ],
  },
  {
    id: "growers",
    label: "Grower Support System",
    short: "Growers receive tools, knowledge, demonstrations, and market access.",
    role:
      "This pathway strengthens local growers with the resources they need to grow successfully.",
    does: [
      "Provides education, tools, demonstrations, technical support, and infrastructure learning.",
      "Supports soil knowledge, irrigation, pest awareness, harvesting, and market readiness.",
      "Helps growers become more confident, productive, and connected.",
    ],
  },
  {
    id: "valueadded",
    label: "Value-Added Production",
    short: "Food becomes products, enterprise, income, and opportunity.",
    role:
      "This pathway turns produce into products, small business opportunities, and additional income.",
    does: [
      "Supports sauces, canned goods, herbs, prepared foods, seedlings, and educational kits.",
      "Creates opportunities for culinary education and entrepreneurship.",
      "Extends the value and life of locally grown food.",
    ],
  },
  {
    id: "youth",
    label: "Youth Workforce Development",
    short: "Youth build skills, confidence, leadership, and responsibility.",
    role:
      "This pathway makes the farm an outdoor classroom where youth learn through real work.",
    does: [
      "Builds attendance, communication, teamwork, responsibility, and safety habits.",
      "Gives youth visible outcomes from their work.",
      "Creates future readiness through agriculture, business, service, and leadership.",
    ],
  },
  {
    id: "partners",
    label: "Community Partnerships",
    short:
      "City agencies, universities, growers, nonprofits, businesses, and community organizations align resources.",
    role:
      "This pathway brings partners together so the ecosystem can serve more people than one organization could alone.",
    does: [
      "Partners include the City of Youngstown, Central State University, Ohio State University, Northeast Ohio Regional Sewer District, Farm & Family Alliance, Parker Farms, Home Depot, Flying High, Jubilee Gardens, Inc., Elliott’s Garden Center, Petitti Garden Centers, and The Airport Association.",
      "Partners contribute education, funding, equipment, outreach, workforce support, health education, and technical assistance.",
      "Partnerships expand capacity, credibility, and community impact.",
    ],
  },
  {
    id: "future",
    label: "Future Agritourism",
    short: "The farm grows into a regional food, learning, and agritourism destination.",
    role:
      "This pathway shows how the ecosystem grows into a destination for food, learning, recreation, and legacy.",
    does: [
      "Supports future camping, RC activities, mini-golf, sensory spaces, education, and wellness.",
      "Creates earned revenue while keeping the mission community-centered.",
      "Positions Bronson Family Farm as a regional model for food innovation and revitalization.",
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
    ecosystemImage: true,
    details: [
      "The ecosystem image shows how every pathway connects.",
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
      "The airport setting gives the farm a unique identity and future destination value.",
      "The site becomes a working demonstration space where people can see food systems in action.",
    ],
  },
  {
    id: "explore",
    title: "Explore the Farm",
    subtitle: "Guests experience the vision, story, and future.",
    image: "/SAM_0220.JPG",
    body:
      "Guests enter through tours, events, storytelling, demonstrations, and experiences that help them understand the ecosystem, the land, and why local food systems matter.",
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
      "Families connect to fresh, chemical-free produce, seedlings, nutrition education, and healthier choices that support wellness, food security, and household stability.",
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
      "The marketplace connects growers to schools, businesses, organizations, and buyers through a coordinated local food system where food and money circulate locally.",
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
      "Growers receive demonstrations, technical assistance, irrigation knowledge, tools, market opportunities, education, and support to become more sustainable and successful.",
    color: "#263322",
    pathwayId: "growers",
    nextPath: "valueadded",
  },
  {
    id: "valueadded",
    title: "Value-Added Production",
    subtitle: "Food becomes products, enterprise, and income.",
    image: "/culniary_edibleflowers2.jpeg",
    body:
      "Produce can become sauces, canned goods, herbs, prepared foods, seedlings, educational kits, farm experiences, and small business opportunities.",
    color: "#4a3421",
    pathwayId: "valueadded",
    nextPath: "youth",
  },
  {
    id: "youth",
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0226.JPG",
    body:
      "Youth build leadership, responsibility, teamwork, communication, safety, and workforce skills through real experiences connected to growing food and serving community.",
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
      "Community partnerships strengthen the ecosystem through shared education, workforce development, food access, infrastructure, health, and community investment.",
    color: "#23364a",
    pathwayId: "partners",
    nextPath: "future",
  },
  {
    id: "future",
    title: "Future Agritourism",
    subtitle: "A regional food, learning, and destination experience.",
    image: "/SAM_0249.JPG",
    body:
      "Bronson Family Farm is growing toward agritourism, youth experiences, food innovation, camping, RC activities, education, wellness, grower supply systems, and community-centered economic development.",
    color: "#4b321f",
    pathwayId: "future",
    nextPath: "intro",
  },
];

function findSlideIndex(id: string) {
  const found = slides.findIndex((s) => s.id === id);
  return found >= 0 ? found : 0;
}

function findPathway(id?: string) {
  return pathways.find((p) => p.id === id);
}

function PathwayKnowledge({ slide, setIndex }: any) {
  const pathway = findPathway(slide.pathwayId);

  if (!pathway) {
    return (
      <div style={styles.detailBox}>
        <div style={styles.detailTitle}>What this story establishes</div>
        <ul style={styles.detailList}>
          {(slide.details || []).map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div style={styles.detailBox}>
      <div style={styles.detailTitle}>Pathway Knowledge</div>

      <div style={styles.roleBox}>
        <strong>Role in the ecosystem:</strong>
        <br />
        {pathway.role}
      </div>

      <ul style={styles.detailList}>
        {pathway.does.map((item: string) => (
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

function PathwayPanel({ activeId, setIndex }: any) {
  return (
    <div style={styles.pathwayPanel}>
      <div style={styles.pathwayHeader}>Follow the Pathway</div>
      <div style={styles.pathwaySub}>
        Each number opens a pathway of knowledge: its role, purpose, next step,
        and impact in the ecosystem.
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
        Explore → Access → Marketplace → Grow → Produce → Workforce → Partner →
        Reinvest
      </div>
    </div>
  );
}

function EcosystemImage({ setIndex }: any) {
  return (
    <div style={styles.ecosystemImageWrap}>
      <img
        src="/ConnectFoodEcosystem_withimages.jpeg"
        alt="Bronson Family Farm Connected Food Ecosystem"
        style={styles.ecosystemImage}
      />

      <div style={styles.imageButtonGrid}>
        {pathways.slice(0, 6).map((p, i) => (
          <button
            key={p.id}
            style={styles.imagePathButton}
            onClick={() => setIndex(findSlideIndex(p.id))}
          >
            {i + 1}. {p.label}
          </button>
        ))}
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
    }, 14500);

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
            background: slide.ecosystemImage
              ? "linear-gradient(135deg, rgba(5,8,5,.78) 0%, rgba(0,0,0,.45) 100%)"
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

              <PathwayKnowledge slide={slide} setIndex={setIndex} />

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

            {slide.ecosystemImage ? (
              <EcosystemImage setIndex={setIndex} />
            ) : (
              <PathwayPanel activeId={slide.pathwayId} setIndex={setIndex} />
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
    padding: "12px 20px",
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
    fontSize: "13px",
    letterSpacing: ".24em",
    color: warm,
    fontWeight: 950,
  },

  demo: {
    opacity: 0.88,
    marginTop: 3,
    fontSize: "12px",
  },

  counter: {
    border: "2px solid rgba(255,255,255,.35)",
    borderRadius: 999,
    padding: "7px 14px",
    fontWeight: 800,
    background: "rgba(0,0,0,.24)",
  },

  content: {
    display: "grid",
    gridTemplateColumns: "390px minmax(600px, 1fr)",
    gap: "20px",
    alignItems: "center",
    flex: 1,
    minHeight: 0,
    padding: "4px 0",
  },

  textSide: {
    maxWidth: 390,
  },

  title: {
    fontSize: "clamp(1.9rem, 3.5vw, 3.75rem)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-0.045em",
    textShadow: "0 5px 20px rgba(0,0,0,.35)",
  },

  subtitle: {
    color: warm,
    fontSize: "clamp(.9rem, 1.25vw, 1.14rem)",
    marginTop: 8,
    marginBottom: 8,
    fontWeight: 850,
    lineHeight: 1.22,
  },

  bodyBox: {
    background: "rgba(12,12,12,.54)",
    borderRadius: 16,
    padding: "12px",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,.08)",
  },

  body: {
    margin: 0,
    fontSize: ".86rem",
    lineHeight: 1.42,
    color: "rgba(255,255,255,.94)",
  },

  detailBox: {
    marginTop: 8,
    background: "rgba(0,0,0,.34)",
    border: `1px solid rgba(197,138,52,.45)`,
    borderRadius: 16,
    padding: 12,
    maxHeight: 185,
    overflow: "auto",
  },

  detailTitle: {
    color: warm,
    fontWeight: 950,
    marginBottom: 6,
    fontSize: ".78rem",
    textTransform: "uppercase",
    letterSpacing: ".06em",
  },

  roleBox: {
    fontSize: ".78rem",
    lineHeight: 1.34,
    marginBottom: 8,
    color: "rgba(255,255,255,.94)",
  },

  detailList: {
    margin: 0,
    paddingLeft: 18,
    fontSize: ".76rem",
    lineHeight: 1.3,
  },

  nextPathBtn: {
    marginTop: 8,
    border: "none",
    borderRadius: 999,
    background: accent,
    color: "#111",
    fontWeight: 950,
    padding: "8px 13px",
    cursor: "pointer",
    fontSize: ".8rem",
  },

  controls: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 9,
  },

  accentBtn: {
    border: "none",
    borderRadius: 999,
    background: accent,
    color: "#111",
    fontWeight: 950,
    padding: "9px 15px",
    cursor: "pointer",
    fontSize: ".85rem",
  },

  darkBtn: {
    border: "2px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    background: "rgba(0,0,0,.42)",
    color: "#fff",
    fontWeight: 850,
    padding: "9px 15px",
    cursor: "pointer",
    fontSize: ".85rem",
  },

  ecosystemImageWrap: {
    width: "100%",
    height: "58vh",
    background: "rgba(0,0,0,.34)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 22,
    padding: 12,
    backdropFilter: "blur(8px)",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateRows: "1fr auto",
    gap: 8,
  },

  ecosystemImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: 18,
    boxShadow: "0 20px 50px rgba(0,0,0,.35)",
  },

  imageButtonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 7,
  },

  imagePathButton: {
    border: `1px solid ${accent}`,
    borderRadius: 999,
    background: "rgba(197,138,52,.22)",
    color: warm,
    fontWeight: 850,
    padding: "7px 10px",
    cursor: "pointer",
    fontSize: ".74rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  pathwayPanel: {
    width: "100%",
    background: "rgba(0,0,0,.34)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 22,
    padding: 14,
    backdropFilter: "blur(8px)",
    maxHeight: "58vh",
    overflow: "auto",
    boxSizing: "border-box",
  },

  pathwayHeader: {
    color: warm,
    fontSize: "1.22rem",
    fontWeight: 950,
    marginBottom: 5,
  },

  pathwaySub: {
    fontSize: ".82rem",
    lineHeight: 1.3,
    marginBottom: 10,
    opacity: 0.9,
  },

  pathwayList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(270px, 1fr))",
    gap: 9,
  },

  pathwayItem: {
    width: "100%",
    color: "white",
    border: "2px solid",
    borderRadius: 16,
    padding: 11,
    display: "grid",
    gridTemplateColumns: "32px 1fr",
    gap: 10,
    textAlign: "left",
    cursor: "pointer",
    alignItems: "start",
    boxSizing: "border-box",
    minHeight: 92,
  },

  pathwayNumber: {
    width: 27,
    height: 27,
    borderRadius: "50%",
    background: accent,
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 950,
    flexShrink: 0,
    fontSize: ".84rem",
  },

  pathwayCopy: {
    minWidth: 0,
  },

  pathwayTitle: {
    fontWeight: 950,
    fontSize: ".9rem",
    marginBottom: 4,
    lineHeight: 1.15,
    whiteSpace: "normal",
  },

  pathwayText: {
    fontSize: ".78rem",
    lineHeight: 1.28,
    opacity: 0.9,
    whiteSpace: "normal",
    wordBreak: "normal",
  },

  pathwayFlow: {
    marginTop: 10,
    background: "rgba(197,138,52,.18)",
    border: `1px solid ${accent}`,
    borderRadius: 16,
    padding: 10,
    textAlign: "center",
    color: warm,
    fontWeight: 950,
    fontSize: ".78rem",
  },

  progressWrap: {
    height: 6,
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
    gap: 8,
    overflowX: "auto",
    paddingTop: 6,
    maxHeight: 86,
    flexShrink: 0,
  },

  navCard: {
    minWidth: 132,
    background: "rgba(0,0,0,.52)",
    borderRadius: 14,
    overflow: "hidden",
    border: "2px solid rgba(255,255,255,.15)",
    cursor: "pointer",
    color: "#fff",
    padding: 0,
    textAlign: "left",
  },

  navImage: {
    width: "100%",
    height: 46,
    objectFit: "cover",
    display: "block",
  },

  navText: {
    padding: 6,
  },

  navTitle: {
    fontWeight: 950,
    fontSize: ".68rem",
    lineHeight: 1.1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
