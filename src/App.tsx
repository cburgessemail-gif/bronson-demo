import React, { useEffect, useMemo, useState } from "react";

const IMAGES = {
  entrance: "/GrowArea.jpg",
  place: "/SAM_0220.JPG",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  marketplace: "/SAM_0223.JPG",
  grower: "/SAM_0225.JPG",
  youth: "/SAM_0226.JPG",
  partners: "/SAM_0229.JPG",
  future: "/GrowArea.jpg",
};

const slides = [
  {
    id: "entrance",
    title: "Bronson Family Farm",
    subtitle: "Step into the Farm. Experience the wonders of life.",
    image: IMAGES.entrance,
    color: "#315c46",
    body:
      "Bronson Family Farm is more than a farm. It is a guided ecosystem experience rooted in land, legacy, food access, education, workforce development, and community growth.",
    button: "Begin the Guided Tour",
  },
  {
    id: "place",
    title: "The Place",
    subtitle: "Historic Lansdowne Airport · Youngstown, Ohio",
    image: IMAGES.place,
    color: "#6b4f3d",
    body:
      "This farm is growing on historic land connected to aviation, community memory, and new possibility. What was once overlooked is becoming infrastructure for food, learning, workforce development, and agritourism.",
    button: "See the Ecosystem",
  },
  {
    id: "ecosystem",
    title: "The Ecosystem",
    subtitle: "A connected system where every pathway leads somewhere.",
    image: IMAGES.entrance,
    color: "#6f4e25",
    body:
      "The ecosystem connects guests, customers, growers, youth, partners, and the marketplace so food, knowledge, resources, and opportunity can move through the community.",
    button: "Explore the Pathways",
    diagram: true,
  },
  {
    id: "guest",
    title: "Guest Pathway",
    subtitle: "Understand the vision, story, and purpose.",
    image: IMAGES.guest,
    color: "#365f46",
    body:
      "Guests enter the farm story first. They learn why food access matters, why growing skills matter, and how the farm is becoming a place where families, educators, growers, and partners can see what is possible.",
    button: "Continue",
  },
  {
    id: "customer",
    title: "Customer Pathway",
    subtitle: "Fresh food, nutrition, and repeat healthy choices.",
    image: IMAGES.customer,
    color: "#7a4f2a",
    body:
      "Customers connect to chemical-free produce, seedlings, nutrition education, and simple ways to make healthier choices again and again.",
    button: "Go to Marketplace Story",
  },
  {
    id: "marketplace",
    title: "Marketplace Pathway",
    subtitle: "Food and money circulate through the community.",
    image: IMAGES.marketplace,
    color: "#8a6a2f",
    body:
      "The marketplace converts interest into purchasing power. Food moves through an organized system that supports families, schools, businesses, growers, and community partners.",
    button: "Continue",
  },
  {
    id: "grower",
    title: "Grower Pathway",
    subtitle: "Tools, knowledge, supplies, and market participation.",
    image: IMAGES.grower,
    color: "#466b3f",
    body:
      "Growers need supplies, technical guidance, soil knowledge, demonstrations, markets, and support. This pathway helps growers become stronger and more connected.",
    button: "Continue",
  },
  {
    id: "youth",
    title: "Youth Workforce Pathway",
    subtitle: "Skills, responsibility, safety, and future readiness.",
    image: IMAGES.youth,
    color: "#345c72",
    body:
      "Youth learn by doing. The farm becomes an outdoor classroom where young people practice responsibility, teamwork, attendance, communication, safety, growing, and business skills.",
    button: "Continue",
  },
  {
    id: "partners",
    title: "Partner Pathway",
    subtitle: "Align resources for community benefit.",
    image: IMAGES.partners,
    color: "#51406b",
    body:
      "Partners strengthen the ecosystem through education, health, workforce, agriculture, arts, business, civic support, and community investment.",
    button: "See the Future",
  },
  {
    id: "future",
    title: "Future Agritourism Destination",
    subtitle: "Food, family, learning, recreation, and legacy.",
    image: IMAGES.future,
    color: "#9a5a2f",
    body:
      "Bronson Family Farm is growing toward an agritourism destination with food, education, camping, youth experiences, RC activities, mini-golf, sensory spaces, and community-centered enterprise.",
    button: "Finish Tour",
  },
  {
    id: "thanks",
    title: "Thank You",
    subtitle: "We need your feedback.",
    image: IMAGES.entrance,
    color: "#315c46",
    body:
      "Thank you for experiencing the Bronson Family Farm demo. Your feedback helps shape the next version of this ecosystem.",
    button: "Contact Constance",
  },
];

function EcosystemDiagram() {
  return (
    <div style={styles.diagram}>
      <div style={styles.centerNode}>Bronson Family Farm Ecosystem</div>
      {["Guest", "Customer", "Marketplace", "Grower", "Youth Workforce", "Partners"].map(
        (item) => (
          <div key={item} style={styles.node}>
            {item}
          </div>
        )
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
    const timer = setTimeout(() => setIndex((i) => i + 1), 9500);
    return () => clearTimeout(timer);
  }, [guided, index]);

  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  const contact = () => {
    window.location.href =
      "mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson Family Farm Demo Feedback";
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <img src={slide.image} alt="" style={styles.image} />

        <div
          style={{
            ...styles.overlay,
            background: `linear-gradient(135deg, ${slide.color}66 0%, ${slide.color}40 45%, rgba(0,0,0,.18) 100%)`,
          }}
        >
          <header style={styles.topbar}>
            <div>
              <strong>Bronson Family Farm</strong>
              <div style={styles.small}>Guided Ecosystem Demo</div>
            </div>
            <button style={styles.language}>Language</button>
          </header>

          <main style={styles.content}>
            <div style={styles.kicker}>Pathway {index + 1} of {slides.length}</div>
            <h1 style={styles.title}>{slide.title}</h1>
            <h2 style={styles.subtitle}>{slide.subtitle}</h2>

            {slide.diagram && <EcosystemDiagram />}

            <p style={styles.body}>{slide.body}</p>

            <div style={styles.actions}>
              <button
                style={styles.primary}
                onClick={index === slides.length - 1 ? contact : next}
              >
                {slide.button}
              </button>
              <button
                style={styles.secondary}
                onClick={() => {
                  setIndex(0);
                  setGuided(true);
                }}
              >
                Start Guided Tour
              </button>
              <button style={styles.secondary} onClick={() => setGuided(!guided)}>
                {guided ? "Pause Tour" : "Resume Tour"}
              </button>
            </div>
          </main>

          <div style={styles.nav}>
            <button style={styles.navBtn} onClick={back}>Back</button>
            <button style={styles.navBtn} onClick={next}>Next</button>
          </div>

          <div style={styles.progressWrap}>
            <div style={{ ...styles.progress, width: `${progress}%` }} />
          </div>
        </div>
      </section>

      <section style={styles.pathwayMap}>
        {slides.slice(1, -1).map((s, i) => (
          <React.Fragment key={s.id}>
            <button
              onClick={() => setIndex(slides.findIndex((x) => x.id === s.id))}
              style={{
                ...styles.pathBtn,
                background: s.id === slide.id ? "#efe2cf" : "#fff",
                borderColor: s.id === slide.id ? s.color : "#ddd",
              }}
            >
              {s.title}
            </button>
            {i < slides.slice(1, -1).length - 1 && <span style={styles.arrow}>→</span>}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#f4efe7", fontFamily: "Georgia, serif" },
  hero: { position: "relative", minHeight: "calc(100vh - 140px)", overflow: "hidden" },
  image: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },
  overlay: {
    position: "absolute",
    inset: 0,
    color: "white",
    padding: 28,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topbar: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  small: { fontSize: 14, opacity: 0.9 },
  language: { border: "none", borderRadius: 999, padding: "12px 30px", background: "#fff" },
  content: { maxWidth: 940 },
  kicker: { letterSpacing: ".15em", textTransform: "uppercase", fontWeight: 800 },
  title: { fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.95, margin: "22px 0 12px" },
  subtitle: { fontSize: "clamp(1.25rem, 2.5vw, 2rem)", margin: "0 0 20px" },
  body: {
    fontSize: "clamp(1.05rem, 1.7vw, 1.35rem)",
    lineHeight: 1.45,
    background: "rgba(0,0,0,.24)",
    padding: "18px 22px",
    borderRadius: 18,
    maxWidth: 780,
  },
  actions: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 },
  primary: { border: "none", borderRadius: 999, padding: "14px 22px", fontWeight: 800 },
  secondary: {
    border: "1px solid rgba(255,255,255,.75)",
    borderRadius: 999,
    padding: "14px 22px",
    fontWeight: 800,
    background: "rgba(255,255,255,.15)",
    color: "#fff",
  },
  nav: { position: "absolute", right: 28, bottom: 55, display: "flex", gap: 14 },
  navBtn: { border: "none", background: "transparent", color: "#fff", fontWeight: 900, fontSize: 18 },
  progressWrap: {
    height: 8,
    background: "rgba(255,255,255,.25)",
    borderRadius: 999,
    overflow: "hidden",
  },
  progress: { height: "100%", background: "#fff", transition: "width .6s ease" },
  pathwayMap: {
    minHeight: 140,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "18px 24px",
    overflowX: "auto",
    background: "#f4efe7",
  },
  pathBtn: {
    whiteSpace: "nowrap",
    border: "2px solid #ddd",
    borderRadius: 999,
    padding: "14px 20px",
    fontWeight: 900,
    cursor: "pointer",
  },
  arrow: { fontSize: 24, fontWeight: 900, color: "#7b5b37" },
  diagram: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    alignItems: "center",
    margin: "18px 0",
    maxWidth: 900,
  },
  centerNode: {
    background: "rgba(255,255,255,.92)",
    color: "#2b2b2b",
    padding: "18px 24px",
    borderRadius: 22,
    fontWeight: 900,
    fontSize: 22,
    boxShadow: "0 10px 30px rgba(0,0,0,.25)",
  },
  node: {
    background: "rgba(255,255,255,.82)",
    color: "#2b2b2b",
    padding: "14px 18px",
    borderRadius: 999,
    fontWeight: 900,
    boxShadow: "0 8px 20px rgba(0,0,0,.18)",
  },
};
