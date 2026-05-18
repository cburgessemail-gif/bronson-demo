import React, { useEffect, useMemo, useState } from "react";

const IMAGES = {
  entrance: "/GrowArea.jpg",
  place: "/SAM_0220.JPG",
  ecosystem: "/ecosystem.png",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  marketplace: "/SAM_0223.JPG",
  grower: "/SAM_0225.JPG",
  youth: "/SAM_0226.JPG",
  partners: "/SAM_0229.JPG",
  future: "/GrowArea2.jpg",
};

const languages = {
  en: "English",
  es: "Español",
  tl: "Tagalog",
  it: "Italiano",
  he: "Hebrew",
  fr: "Français",
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
    title: "What Is the Ecosystem?",
    subtitle:
      "A connected system where people, food, education, and opportunity move together.",
    image: IMAGES.ecosystem,
    color: "#6f4e25",
    body:
      "An ecosystem means no one part stands alone. Growers, customers, youth, volunteers, partners, and marketplaces are connected so food can move through the community — not so every farmer has to travel alone.",
    button: "Explore the Pathways",
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
      "Customers connect to chemical-free produce, seedlings, nutrition education, and simple ways to make healthier choices. The goal is not just a one-time purchase. The goal is to help families return to fresh food again and again.",
    button: "Go to Marketplace Story",
  },
  {
    id: "marketplace",
    title: "Marketplace Pathway",
    subtitle: "Food and money circulate through the community.",
    image: IMAGES.marketplace,
    color: "#8a6a2f",
    body:
      "The marketplace helps convert interest into purchasing power. Food moves through an organized system that can support families, schools, businesses, growers, and community partners.",
    button: "Continue",
  },
  {
    id: "grower",
    title: "Grower Pathway",
    subtitle: "Tools, knowledge, supplies, and market participation.",
    image: IMAGES.grower,
    color: "#466b3f",
    body:
      "Growers need more than encouragement. They need supplies, technical guidance, soil knowledge, demonstrations, markets, and support. This pathway helps growers become stronger and more connected.",
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
      "Partners help the ecosystem grow. Education, health, workforce, agriculture, arts, business, and civic partners each strengthen the farm’s ability to serve the community.",
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
      "Thank you for experiencing the Bronson Family Farm demo. Your feedback helps shape the next version of this ecosystem and how it serves growers, families, youth, and partners.",
    button: "Contact Constance",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const [language, setLanguage] = useState("en");

  const slide = slides[index];

  useEffect(() => {
    if (!guided) return;

    if (index >= slides.length - 1) {
      setGuided(false);
      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => Math.min(prev + 1, slides.length - 1));
    }, 9000);

    return () => clearTimeout(timer);
  }, [guided, index]);

  const progress = useMemo(
    () => Math.round(((index + 1) / slides.length) * 100),
    [index]
  );

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  const jumpTo = (id: string) => {
    const found = slides.findIndex((s) => s.id === id);
    if (found >= 0) setIndex(found);
  };

  const startGuidedTour = () => {
    setIndex(0);
    setGuided(true);
  };

  const contact = () => {
    window.location.href =
      "mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson Family Farm Demo Feedback";
  };

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <img src={slide.image} alt={slide.title} style={styles.image} />

        <div
          style={{
            ...styles.overlay,
            background: `linear-gradient(
              135deg,
              ${slide.color}66 0%,
              ${slide.color}44 42%,
              rgba(0,0,0,0.18) 100%
            )`,
          }}
        >
          <div style={styles.topbar}>
            <div>
              <strong>Bronson Family Farm</strong>
              <div style={styles.small}>Guided Ecosystem Demo</div>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={styles.select}
              aria-label="Select language"
            >
              {Object.entries(languages).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <main style={styles.content}>
            <div style={styles.kicker}>
              Pathway {index + 1} of {slides.length}
            </div>

            <h1 style={styles.title}>{slide.title}</h1>
            <h2 style={styles.subtitle}>{slide.subtitle}</h2>
            <p style={styles.body}>{slide.body}</p>

            <div style={styles.actions}>
              <button
                style={styles.primary}
                onClick={index === slides.length - 1 ? contact : next}
              >
                {slide.button}
              </button>

              <button style={styles.secondary} onClick={startGuidedTour}>
                Start Guided Tour
              </button>

              <button
                style={styles.secondary}
                onClick={() => setGuided((g) => !g)}
              >
                {guided ? "Pause Tour" : "Resume Tour"}
              </button>
            </div>
          </main>

          <div style={styles.progressWrap}>
            <div style={{ ...styles.progress, width: `${progress}%` }} />
          </div>

          <div style={styles.nav}>
            <button onClick={back} disabled={index === 0} style={styles.navBtn}>
              Back
            </button>

            <button
              onClick={next}
              disabled={index === slides.length - 1}
              style={styles.navBtn}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div style={styles.pathways}>
        {slides.slice(1, -1).map((s) => (
          <button
            key={s.id}
            onClick={() => jumpTo(s.id)}
            style={{
              ...styles.pathBtn,
              borderColor: s.id === slide.id ? slide.color : "#ddd",
              background: s.id === slide.id ? "#f5efe6" : "#fff",
            }}
          >
            {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f4efe7",
    fontFamily: "Georgia, 'Times New Roman', serif",
    color: "#1e1e1e",
  },
  hero: {
    position: "relative",
    minHeight: "calc(100vh - 115px)",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "28px",
    backdropFilter: "brightness(1.03)",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  },
  small: {
    fontSize: "0.9rem",
    opacity: 0.9,
  },
  select: {
    padding: "10px 14px",
    borderRadius: "999px",
    border: "none",
    fontWeight: 700,
  },
  content: {
    maxWidth: "850px",
    marginBottom: "30px",
  },
  kicker: {
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.85rem",
    marginBottom: "14px",
    fontWeight: 800,
  },
  title: {
    fontSize: "clamp(2.8rem, 7vw, 6rem)",
    lineHeight: 0.95,
    margin: "0 0 14px",
  },
  subtitle: {
    fontSize: "clamp(1.2rem, 2.8vw, 2rem)",
    margin: "0 0 20px",
    fontWeight: 600,
  },
  body: {
    fontSize: "clamp(1.05rem, 2vw, 1.45rem)",
    lineHeight: 1.45,
    maxWidth: "760px",
    background: "rgba(0,0,0,0.24)",
    padding: "18px 22px",
    borderRadius: "18px",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "22px",
  },
  primary: {
    padding: "14px 22px",
    borderRadius: "999px",
    border: "none",
    background: "#fff",
    color: "#222",
    fontWeight: 800,
    cursor: "pointer",
  },
  secondary: {
    padding: "14px 22px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.8)",
    background: "rgba(255,255,255,0.16)",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
  },
  progressWrap: {
    height: "8px",
    width: "100%",
    background: "rgba(255,255,255,0.25)",
    borderRadius: "999px",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    background: "#fff",
    transition: "width 0.6s ease",
  },
  nav: {
    position: "absolute",
    right: "28px",
    bottom: "48px",
    display: "flex",
    gap: "10px",
  },
  navBtn: {
    padding: "12px 18px",
    borderRadius: "999px",
    border: "none",
    fontWeight: 800,
    cursor: "pointer",
  },
  pathways: {
    minHeight: "115px",
    display: "flex",
    gap: "10px",
    padding: "18px",
    overflowX: "auto",
    alignItems: "center",
  },
  pathBtn: {
    whiteSpace: "nowrap",
    padding: "13px 18px",
    borderRadius: "999px",
    border: "2px solid #ddd",
    fontWeight: 800,
    cursor: "pointer",
  },
};
