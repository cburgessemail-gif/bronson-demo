import React, { useEffect, useMemo, useState } from "react";

const accent = "#d89a3a";
const cream = "#f4efe7";

const ecosystemCards = [
  {
    title: "Explore the Farm",
    subtitle: "Guests experience the vision, story, and future of the farm.",
    image: "/SAM_0221.JPG",
    color: "#6b8f3a",
    bullets: ["Learn", "Engage", "Be Inspired"],
  },
  {
    title: "Healthy Food Access",
    subtitle: "Families access fresh, chemical-free produce.",
    image: "/SAM_0222.JPG",
    color: "#8b7a35",
    bullets: ["Fresh Food", "Nutrition", "Stronger Families"],
  },
  {
    title: "Community Marketplace",
    subtitle: "Connecting growers to schools, businesses, and buyers.",
    image: "/SAM_0223.JPG",
    color: "#c9792b",
    bullets: ["Food Moves", "Money Circulates", "Community Grows"],
  },
  {
    title: "Grower Support System",
    subtitle: "Education, tools, demonstrations, and market support.",
    image: "/SAM_0225.JPG",
    color: "#4f7735",
    bullets: ["Learn & Grow", "Tools & Resources", "Stronger Growers"],
  },
  {
    title: "Youth Workforce Development",
    subtitle: "Hands-on learning, responsibility, and leadership.",
    image: "/SAM_0226.JPG",
    color: "#6b4d92",
    bullets: ["Build Skills", "Build Confidence", "Build Futures"],
  },
  {
    title: "Community Partnerships",
    subtitle: "Partners invest in education, health, workforce, and revitalization.",
    image: "/SAM_0238.JPG",
    color: "#3f6792",
    bullets: ["Collaborate", "Invest", "Create Impact"],
  },
];

const slides = [
  {
    id: "intro",
    title: "A Connected Food Ecosystem",
    subtitle: "People. Resources. Opportunity. Circulating Together.",
    image: "/GrowArea.jpg",
    color: "#314635",
    body:
      "Bronson Family Farm is a place-based ecosystem where growers, families, youth, partners, resources, and opportunities work together so food, knowledge, and economic value circulate locally and strengthen the whole community.",
    ecosystem: true,
  },
  {
    id: "place",
    title: "The Place",
    subtitle: "Historic Lansdowne Airport · Youngstown, Ohio",
    image: "/SAM_0220.JPG",
    color: "#5b4636",
    body:
      "The farm grows on historic land connected to aviation, memory, and new possibility. This place is becoming infrastructure for food access, learning, wellness, workforce development, and agritourism.",
  },
  {
    id: "explore",
    title: "Explore the Farm",
    subtitle: "Guests experience the vision and future of the farm.",
    image: "/SAM_0221.JPG",
    color: "#496d38",
    body:
      "Guests enter through tours, events, storytelling, demonstrations, and experiences that help them understand the ecosystem, the land, and why local food systems matter.",
  },
  {
    id: "food",
    title: "Healthy Food Access",
    subtitle: "Fresh food supports healthier families.",
    image: "/SAM_0222.JPG",
    color: "#716229",
    body:
      "Families connect to fresh, chemical-free produce, seedlings, nutrition education, and healthier choices that support wellness, food security, and household stability.",
  },
  {
    id: "marketplace",
    title: "Community Marketplace",
    subtitle: "The food moves — not the farmer.",
    image: "/SAM_0223.JPG",
    color: "#9f5b23",
    body:
      "The marketplace connects growers to schools, businesses, organizations, and buyers through a coordinated local food system where food and money circulate locally.",
  },
  {
    id: "growers",
    title: "Grower Support System",
    subtitle: "Tools, education, infrastructure, and opportunity.",
    image: "/SAM_0225.JPG",
    color: "#42642f",
    body:
      "Growers receive demonstrations, technical assistance, irrigation knowledge, tools, market opportunities, education, and support to become more sustainable and successful.",
  },
  {
    id: "valueadded",
    title: "Value-Added Production",
    subtitle: "Food becomes products, enterprise, and income.",
    image: "/culniary_edibleflowers.jpeg",
    color: "#7a5730",
    body:
      "Produce can become sauces, canned goods, herbs, prepared foods, seedlings, educational kits, farm experiences, and small business opportunities.",
  },
  {
    id: "youth",
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0226.JPG",
    color: "#5b4a82",
    body:
      "Youth build leadership, responsibility, teamwork, communication, safety, and workforce skills through real experiences connected to growing food and serving community.",
  },
  {
    id: "partners",
    title: "Community Partnerships",
    subtitle: "Stronger together.",
    image: "/SAM_0238.JPG",
    color: "#345e85",
    body:
      "Educational institutions, health systems, businesses, nonprofits, growers, and civic organizations strengthen the ecosystem through collaboration and shared investment.",
  },
  {
    id: "future",
    title: "The Future",
    subtitle: "A regional agritourism and food innovation destination.",
    image: "/SAM_0249.JPG",
    color: "#704d2b",
    body:
      "Bronson Family Farm is growing toward agritourism, youth experiences, food innovation, camping, RC activities, education, wellness, grower supply systems, and community-centered economic development.",
  },
];

function EcosystemMap() {
  return (
    <div style={styles.ecosystemWrap}>
      <div style={styles.leftPanel}>
        <div style={styles.storyBox}>
          <p style={styles.storyText}>
            Bronson Family Farm is a place-based ecosystem where every part
            connects. When growers, families, youth, partners, resources, and
            opportunities work together, food, knowledge, and economic value
            circulate locally.
          </p>
        </div>

        <div style={styles.infoGrid}>
          {[
            ["Grow", "Local growers receive education, tools, land support, and market access."],
            ["Connect", "Families, youth, customers, schools, and partners connect through food and learning."],
            ["Circulate", "Food, money, knowledge, and opportunity stay in the community."],
          ].map(([title, text]) => (
            <div style={styles.infoCard} key={title}>
              <div style={styles.infoTitle}>{title}</div>
              <div style={styles.infoBody}>{text}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.circleArea}>
        <div style={styles.centerCircle}>
          <div style={styles.centerLogo}>BRONSON FAMILY FARM</div>
          <div style={styles.centerSub}>
            A Connected Ecosystem Growing Opportunity for All
          </div>
        </div>

        <div style={styles.cardRing}>
          {ecosystemCards.map((card) => (
            <div
              key={card.title}
              style={{ ...styles.ringCard, borderColor: card.color }}
            >
              <img src={card.image} alt={card.title} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <div style={{ ...styles.cardTitle, color: card.color }}>
                  {card.title}
                </div>
                <div style={styles.cardSubtitle}>{card.subtitle}</div>
                <ul style={styles.bulletList}>
                  {card.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
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
  }, [index, guided]);

  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <img src={slide.image} alt="" style={styles.bg} />

        <div
          style={{
            ...styles.overlay,
            background: `linear-gradient(135deg, ${slide.color}dd 0%, rgba(0,0,0,.36) 100%)`,
          }}
        >
          <div style={styles.top}>
            <div>
              <div style={styles.brand}>BRONSON FAMILY FARM</div>
              <div style={styles.demo}>Guided Ecosystem Demo</div>
            </div>

            <div style={styles.counter}>
              {index + 1} / {slides.length}
            </div>
          </div>

          <div style={styles.content}>
            <div style={styles.textSide}>
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
            </div>

            {slide.ecosystem && <EcosystemMap />}
          </div>

          <div style={styles.progressWrap}>
            <div style={{ ...styles.progress, width: `${progress}%` }} />
          </div>

          <div style={styles.bottomNav}>
            {slides.map((s, i) => (
              <button
                key={s.id}
                style={{
                  ...styles.navCard,
                  borderColor: i === index ? accent : "rgba(255,255,255,.18)",
                }}
                onClick={() => setIndex(i)}
              >
                <img src={s.image} alt={s.title} style={styles.navImage} />
                <div style={styles.navText}>
                  <div style={styles.navTitle}>{s.title}</div>
                  <div style={styles.navSub}>{s.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#081108",
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
    color: "#f2c46d",
    fontWeight: 900,
  },

  demo: {
    opacity: 0.86,
    marginTop: 4,
    fontSize: "13px",
  },

  counter: {
    border: "2px solid rgba(255,255,255,.35)",
    borderRadius: 999,
    padding: "8px 16px",
    fontWeight: 800,
    background: "rgba(0,0,0,.25)",
  },

  content: {
    display: "grid",
    gridTemplateColumns: "410px 1fr",
    gap: "22px",
    alignItems: "center",
    minHeight: 0,
    flex: 1,
    padding: "10px 0",
  },

  textSide: {
    maxWidth: 410,
  },

  title: {
    fontSize: "clamp(2.2rem, 4.7vw, 4.5rem)",
    lineHeight: 0.95,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-0.04em",
  },

  subtitle: {
    color: "#f2c46d",
    fontSize: "clamp(1rem, 1.55vw, 1.45rem)",
    marginTop: 12,
    marginBottom: 12,
    fontWeight: 800,
  },

  bodyBox: {
    background: "rgba(0,0,0,.38)",
    borderRadius: 18,
    padding: "16px",
    backdropFilter: "blur(6px)",
  },

  body: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.5,
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
    fontWeight: 900,
    padding: "12px 20px",
    cursor: "pointer",
  },

  darkBtn: {
    border: "2px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    background: "rgba(0,0,0,.42)",
    color: "#fff",
    fontWeight: 800,
    padding: "12px 20px",
    cursor: "pointer",
  },

  ecosystemWrap: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: "22px",
    alignItems: "center",
    minWidth: 0,
  },

  leftPanel: {
    minWidth: 0,
  },

  storyBox: {
    background: "rgba(0,0,0,.45)",
    padding: "16px",
    borderRadius: 20,
    marginBottom: 12,
  },

  storyText: {
    margin: 0,
    lineHeight: 1.5,
    fontSize: ".9rem",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 10,
  },

  infoCard: {
    background: "rgba(0,0,0,.38)",
    borderRadius: 18,
    padding: 14,
    border: "1px solid rgba(255,255,255,.12)",
  },

  infoTitle: {
    fontSize: "1.15rem",
    fontWeight: 950,
    color: "#f2c46d",
    marginBottom: 6,
  },

  infoBody: {
    lineHeight: 1.35,
    fontSize: ".86rem",
  },

  circleArea: {
    position: "relative",
    minWidth: 0,
  },

  centerCircle: {
    width: 230,
    height: 230,
    borderRadius: "50%",
    background:
      "radial-gradient(circle at center, #173512 0%, #081608 100%)",
    border: "4px solid rgba(216,154,58,.72)",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 0 46px rgba(0,0,0,.45)",
    zIndex: 5,
    position: "relative",
  },

  centerLogo: {
    fontSize: "1.55rem",
    fontWeight: 950,
    lineHeight: 1.08,
  },

  centerSub: {
    marginTop: 12,
    color: "#f2c46d",
    fontSize: ".96rem",
    maxWidth: 190,
    lineHeight: 1.3,
    fontWeight: 700,
  },

  cardRing: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(150px, 1fr))",
    gap: 10,
    marginTop: -42,
  },

  ringCard: {
    background: "rgba(255,255,255,.94)",
    color: "#111",
    borderRadius: 18,
    overflow: "hidden",
    border: "3px solid",
    boxShadow: "0 10px 24px rgba(0,0,0,.24)",
  },

  cardImage: {
    width: "100%",
    height: 86,
    objectFit: "cover",
  },

  cardContent: {
    padding: 10,
  },

  cardTitle: {
    fontSize: ".94rem",
    fontWeight: 950,
    marginBottom: 5,
    textTransform: "uppercase",
    lineHeight: 1.1,
  },

  cardSubtitle: {
    lineHeight: 1.25,
    marginBottom: 6,
    fontSize: ".76rem",
  },

  bulletList: {
    margin: 0,
    paddingLeft: 16,
    lineHeight: 1.35,
    fontWeight: 800,
    fontSize: ".72rem",
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
    maxHeight: 116,
    flexShrink: 0,
  },

  navCard: {
    minWidth: 185,
    background: "rgba(0,0,0,.5)",
    borderRadius: 18,
    overflow: "hidden",
    border: "3px solid rgba(255,255,255,.15)",
    cursor: "pointer",
    color: "#fff",
    padding: 0,
    textAlign: "left",
  },

  navImage: {
    width: "100%",
    height: 72,
    objectFit: "cover",
    display: "block",
  },

  navText: {
    padding: 9,
  },

  navTitle: {
    fontWeight: 950,
    marginBottom: 3,
    fontSize: ".84rem",
    lineHeight: 1.1,
  },

  navSub: {
    fontSize: ".68rem",
    opacity: 0.82,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
