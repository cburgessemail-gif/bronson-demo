import React, { useEffect, useMemo, useState } from "react";

const ecosystemCards = [
  {
    title: "Explore the Farm",
    subtitle: "Guests experience the vision, story, and future of the farm.",
    image: "/SAM_0221.JPG",
    color: "#6da544",
    bullets: ["Learn", "Engage", "Be Inspired"],
  },
  {
    title: "Healthy Food Access",
    subtitle:
      "Families access fresh, chemical-free produce for stronger futures.",
    image: "/SAM_0222.JPG",
    color: "#95b93c",
    bullets: ["Fresh Food", "Nutrition", "Stronger Families"],
  },
  {
    title: "Community Marketplace",
    subtitle:
      "Connecting growers to schools, businesses, organizations, and buyers.",
    image: "/SAM_0223.JPG",
    color: "#d8741f",
    bullets: ["Food Moves", "Money Circulates", "Community Grows"],
  },
  {
    title: "Grower Support System",
    subtitle:
      "Education, demonstrations, tools, resources, and infrastructure support growers.",
    image: "/SAM_0225.JPG",
    color: "#5f8f3b",
    bullets: ["Learn & Grow", "Tools & Resources", "Stronger Growers"],
  },
  {
    title: "Youth Workforce Development",
    subtitle:
      "Hands-on learning, leadership, responsibility, and workforce skills.",
    image: "/SAM_0226.JPG",
    color: "#7b57b2",
    bullets: ["Build Skills", "Build Confidence", "Build Futures"],
  },
  {
    title: "Community Partnerships",
    subtitle:
      "Partners invest in education, health, workforce, and revitalization.",
    image: "/SAM_0238.JPG",
    color: "#4470b8",
    bullets: ["Collaborate", "Invest", "Create Impact"],
  },
];

const slides = [
  {
    id: "intro",
    title: "A Connected Food Ecosystem",
    subtitle: "People. Resources. Opportunity. Circulating Together.",
    image: "/GrowArea.jpg",
    color: "#2f5c3a",
    body:
      "Bronson Family Farm is a place-based ecosystem where growers, families, youth, schools, partners, and community resources work together so food, knowledge, opportunity, and economic value circulate locally.",
    ecosystem: true,
  },
  {
    id: "explore",
    title: "Explore the Farm",
    subtitle: "Guests experience the vision and future of the farm.",
    image: "/SAM_0221.JPG",
    color: "#5f9136",
    body:
      "Guests enter through tours, events, storytelling, demonstrations, and experiences that help them understand the ecosystem and why local food systems matter.",
  },
  {
    id: "food",
    title: "Healthy Food Access",
    subtitle: "Fresh food supports healthier families and stronger futures.",
    image: "/SAM_0222.JPG",
    color: "#90b23d",
    body:
      "Families connect to fresh, chemical-free produce, seedlings, nutrition education, and healthier choices that support wellness and food security.",
  },
  {
    id: "marketplace",
    title: "Community Marketplace",
    subtitle: "The food moves — not the farmer.",
    image: "/SAM_0223.JPG",
    color: "#cb6f1d",
    body:
      "The marketplace connects growers to schools, businesses, organizations, and buyers through a coordinated local food system where food and money circulate locally.",
  },
  {
    id: "growers",
    title: "Grower Support System",
    subtitle: "Tools, education, infrastructure, and opportunity.",
    image: "/SAM_0225.JPG",
    color: "#507b35",
    body:
      "Growers receive demonstrations, technical assistance, irrigation knowledge, tools, market opportunities, education, and support to become more sustainable and successful.",
  },
  {
    id: "youth",
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0226.JPG",
    color: "#6e4fa8",
    body:
      "Youth build leadership, responsibility, teamwork, communication, and workforce skills through real experiences connected to growing food and serving community.",
  },
  {
    id: "partners",
    title: "Community Partnerships",
    subtitle: "Stronger together.",
    image: "/SAM_0238.JPG",
    color: "#3f69ab",
    body:
      "Educational institutions, health systems, businesses, nonprofits, growers, and civic organizations help strengthen the ecosystem through collaboration and shared investment.",
  },
  {
    id: "future",
    title: "The Future",
    subtitle: "A regional agritourism and food innovation destination.",
    image: "/SAM_0249.JPG",
    color: "#8b5a2b",
    body:
      "Bronson Family Farm is growing toward a future that includes agritourism, youth experiences, food innovation, camping, RC activities, education, wellness, and community-centered economic development.",
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
            circulate locally and strengthen the whole community.
          </p>
        </div>

        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <div style={styles.infoTitle}>Grow</div>
            <div style={styles.infoBody}>
              Local growers receive education, tools, land support, and market
              access.
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoTitle}>Connect</div>
            <div style={styles.infoBody}>
              Families, schools, youth, and partners connect through food,
              learning, and shared experiences.
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoTitle}>Circulate</div>
            <div style={styles.infoBody}>
              Food, money, knowledge, and opportunity stay in the community.
            </div>
          </div>
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
          {ecosystemCards.map((card, i) => (
            <div
              key={card.title}
              style={{
                ...styles.ringCard,
                borderColor: card.color,
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={styles.cardImage}
              />

              <div style={styles.cardContent}>
                <div
                  style={{
                    ...styles.cardTitle,
                    color: card.color,
                  }}
                >
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
  const [guided, setGuided] = useState(true);

  const slide = slides[index];

  useEffect(() => {
    if (!guided) return;

    const timer = setTimeout(() => {
      setIndex((prev) =>
        prev >= slides.length - 1 ? slides.length - 1 : prev + 1
      );
    }, 12000);

    return () => clearTimeout(timer);
  }, [index, guided]);

  const progress = useMemo(
    () => ((index + 1) / slides.length) * 100,
    [index]
  );

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <img src={slide.image} alt="" style={styles.bg} />

        <div
          style={{
            ...styles.overlay,
            background: `linear-gradient(135deg, ${slide.color}88 0%, rgba(0,0,0,.28) 100%)`,
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
                  style={styles.greenBtn}
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

                <button
                  style={styles.darkBtn}
                  onClick={() =>
                    setIndex((i) => Math.max(i - 1, 0))
                  }
                >
                  Back
                </button>

                <button
                  style={styles.greenBtn}
                  onClick={() =>
                    setIndex((i) =>
                      Math.min(i + 1, slides.length - 1)
                    )
                  }
                >
                  Next
                </button>
              </div>
            </div>

            {slide.ecosystem && <EcosystemMap />}
          </div>

          <div style={styles.progressWrap}>
            <div
              style={{
                ...styles.progress,
                width: `${progress}%`,
              }}
            />
          </div>

          <div style={styles.bottomNav}>
            {slides.map((s, i) => (
              <button
                key={s.id}
                style={{
                  ...styles.navCard,
                  borderColor:
                    i === index ? slide.color : "rgba(255,255,255,.2)",
                }}
                onClick={() => setIndex(i)}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  style={styles.navImage}
                />

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
    fontFamily: "Inter, sans-serif",
  },

  hero: {
    position: "relative",
    minHeight: "100vh",
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
    padding: "28px",
    color: "white",
    backdropFilter: "blur(2px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brand: {
    fontSize: "14px",
    letterSpacing: ".25em",
    color: "#c6e84f",
    fontWeight: 800,
  },

  demo: {
    opacity: 0.8,
    marginTop: 4,
  },

  counter: {
    border: "2px solid rgba(255,255,255,.4)",
    borderRadius: 999,
    padding: "10px 18px",
    fontWeight: 700,
  },

  content: {
    display: "grid",
    gridTemplateColumns: "520px 1fr",
    gap: "32px",
    alignItems: "center",
  },

  textSide: {
    maxWidth: 520,
  },

  title: {
    fontSize: "clamp(3rem, 6vw, 5.8rem)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 900,
  },

  subtitle: {
    color: "#c6e84f",
    fontSize: "clamp(1.2rem, 2vw, 2rem)",
    marginTop: 18,
    marginBottom: 18,
    fontWeight: 700,
  },

  bodyBox: {
    background: "rgba(0,0,0,.42)",
    borderRadius: 20,
    padding: "22px",
    backdropFilter: "blur(8px)",
  },

  body: {
    margin: 0,
    fontSize: "1.2rem",
    lineHeight: 1.65,
  },

  controls: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginTop: 22,
  },

  greenBtn: {
    border: "none",
    borderRadius: 999,
    background: "#b5db3c",
    color: "#111",
    fontWeight: 900,
    padding: "16px 24px",
    cursor: "pointer",
  },

  darkBtn: {
    border: "2px solid rgba(255,255,255,.18)",
    borderRadius: 999,
    background: "rgba(0,0,0,.4)",
    color: "#fff",
    fontWeight: 800,
    padding: "16px 24px",
    cursor: "pointer",
  },

  ecosystemWrap: {
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "28px",
    alignItems: "center",
  },

  leftPanel: {},

  storyBox: {
    background: "rgba(0,0,0,.5)",
    padding: "24px",
    borderRadius: 24,
    marginBottom: 18,
  },

  storyText: {
    margin: 0,
    lineHeight: 1.7,
    fontSize: "1.08rem",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 14,
  },

  infoCard: {
    background: "rgba(0,0,0,.42)",
    borderRadius: 22,
    padding: 20,
  },

  infoTitle: {
    fontSize: "1.6rem",
    fontWeight: 900,
    color: "#c6e84f",
    marginBottom: 10,
  },

  infoBody: {
    lineHeight: 1.6,
  },

  circleArea: {
    position: "relative",
  },

  centerCircle: {
    width: 300,
    height: 300,
    borderRadius: "50%",
    background:
      "radial-gradient(circle at center, #163d11 0%, #081608 100%)",
    border: "5px solid rgba(198,232,79,.6)",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 0 60px rgba(0,0,0,.45)",
    zIndex: 5,
    position: "relative",
  },

  centerLogo: {
    fontSize: "2.2rem",
    fontWeight: 900,
    lineHeight: 1.1,
  },

  centerSub: {
    marginTop: 18,
    color: "#c6e84f",
    fontSize: "1.4rem",
    maxWidth: 240,
    lineHeight: 1.4,
  },

  cardRing: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
    gap: 18,
    marginTop: -70,
  },

  ringCard: {
    background: "rgba(255,255,255,.95)",
    color: "#111",
    borderRadius: 28,
    overflow: "hidden",
    border: "4px solid",
    boxShadow: "0 12px 32px rgba(0,0,0,.28)",
  },

  cardImage: {
    width: "100%",
    height: 170,
    objectFit: "cover",
  },

  cardContent: {
    padding: 18,
  },

  cardTitle: {
    fontSize: "1.45rem",
    fontWeight: 900,
    marginBottom: 10,
  },

  cardSubtitle: {
    lineHeight: 1.5,
    marginBottom: 14,
  },

  bulletList: {
    margin: 0,
    paddingLeft: 18,
    lineHeight: 1.8,
    fontWeight: 700,
  },

  progressWrap: {
    height: 8,
    background: "rgba(255,255,255,.15)",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 18,
  },

  progress: {
    height: "100%",
    background: "#c6e84f",
    transition: "width .6s ease",
  },

  bottomNav: {
    display: "flex",
    gap: 12,
    overflowX: "auto",
    paddingTop: 18,
  },

  navCard: {
    minWidth: 230,
    background: "rgba(0,0,0,.5)",
    borderRadius: 22,
    overflow: "hidden",
    border: "3px solid rgba(255,255,255,.15)",
    cursor: "pointer",
    color: "#fff",
  },

  navImage: {
    width: "100%",
    height: 110,
    objectFit: "cover",
  },

  navText: {
    padding: 14,
  },

  navTitle: {
    fontWeight: 900,
    marginBottom: 6,
  },

  navSub: {
    fontSize: ".9rem",
    opacity: 0.8,
    lineHeight: 1.4,
  },
};
