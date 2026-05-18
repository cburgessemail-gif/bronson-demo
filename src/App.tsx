import React, { useEffect, useMemo, useState } from "react";

const slides = [
  {
    id: 1,
    title: "A Connected Food Ecosystem",
    subtitle: "People. Resources. Opportunity. Circulating Together.",
    image: "/GrowArea.jpg",
    featureImage: "/ConnectFoodEcosystem_withimages.jpeg",
    section: "ECOSYSTEM OVERVIEW",
    body:
      "Bronson Family Farm is a place-based ecosystem where growers, families, youth, partners, resources, and opportunities work together so food, knowledge, and economic value circulate locally and strengthen the whole community.",
    detail:
      "Each section of the ecosystem wheel represents a role in the system. Visitors can follow each pathway to understand how food, knowledge, opportunity, and resources move through the community.",
  },
  {
    id: 2,
    title: "The Place",
    subtitle: "Historic Lansdowne Airport • Youngstown, Ohio",
    image: "/GrowArea.jpg",
    section: "PLACE-BASED INFRASTRUCTURE",
    body:
      "Bronson Family Farm operates on historic airport property where overlooked land is being transformed into infrastructure for food production, workforce development, education, and agritourism.",
    detail:
      "The airport environment provides open outdoor growing space, transportation access, visibility, and room for long-term ecosystem growth.",
  },
  {
    id: 3,
    title: "Explore the Farm",
    subtitle: "Understanding the land, story, and purpose.",
    image: "/SAM_0238.JPG",
    section: "PATHWAY 1",
    body:
      "Visitors experience the airport property, outdoor growing areas, demonstrations, and educational spaces that explain why local food systems matter.",
    detail:
      "This pathway introduces guests to how agriculture, education, health, workforce development, and community reinvestment connect together.",
  },
  {
    id: 4,
    title: "Healthy Food Access",
    subtitle: "Fresh food. Chemical-free produce. Stronger families.",
    image: "/SAM_0274.JPG",
    section: "PATHWAY 2",
    body:
      "Families gain access to fresh produce, seedlings, nutrition education, and healthier food choices connected to local growers and community support systems.",
    detail:
      "The ecosystem increases access to nutritious food while helping families reconnect to growing, cooking, wellness, and healthier long-term outcomes.",
  },
  {
    id: 5,
    title: "Community Marketplace",
    subtitle: "The food moves — not the farmer.",
    image: "/SAM_0281.JPG",
    section: "PATHWAY 3",
    body:
      "The marketplace connects growers to schools, businesses, organizations, institutions, and community buyers through a coordinated local food system.",
    detail:
      "Instead of every grower searching independently for customers, the ecosystem helps organize food distribution so products, money, and opportunity circulate locally.",
  },
  {
    id: 6,
    title: "Grower Support System",
    subtitle: "Tools. Education. Infrastructure. Opportunity.",
    image: "/SAM_0229.JPG",
    section: "PATHWAY 4",
    body:
      "Growers receive demonstrations, technical support, tools, educational resources, irrigation knowledge, and market opportunities.",
    detail:
      "The ecosystem lowers barriers for growers by connecting them to practical support systems, shared resources, and collaborative learning opportunities.",
  },
  {
    id: 7,
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0308.JPG",
    section: "PATHWAY 5",
    body:
      "Youth participants build responsibility, leadership, teamwork, communication, and workforce skills through real outdoor learning experiences.",
    detail:
      "The ecosystem prepares young people for future careers while teaching ownership, discipline, environmental awareness, and community engagement.",
  },
  {
    id: 8,
    title: "Community Partnerships",
    subtitle: "Collaboration strengthens the ecosystem.",
    image: "/SAM_0303.JPG",
    section: "PATHWAY 6",
    body:
      "Community partnerships align education, workforce development, agriculture, health, business, and nonprofit collaboration around local food system growth.",
    detail:
      "Partners include the City of Youngstown, Central State University, Ohio State University, Farm & Family Alliance, Parker Farms, Home Depot, Flying High, Jubilee Gardens, Inc., Elliott's Garden Center, Petitti Garden Centers, The Airport Association, and other community organizations.",
  },
  {
    id: 9,
    title: "Future Growth",
    subtitle: "Building a regional agritourism destination.",
    image: "/SAM_0257.JPG",
    section: "FUTURE VISION",
    body:
      "The ecosystem continues growing toward expanded education, agritourism, workforce opportunities, camping, food distribution, family engagement, and regional collaboration.",
    detail:
      "Future plans include expanded growers markets, agritourism experiences, educational demonstrations, family attractions, and year-round ecosystem participation.",
  },
  {
    id: 10,
    title: "The Purpose",
    subtitle: "Growing opportunity for all.",
    image: "/SAM_0299.JPG",
    section: "THE MISSION",
    body:
      "Bronson Family Farm exists to strengthen communities through food access, education, workforce development, agriculture, partnerships, and local economic circulation.",
    detail:
      "The ecosystem is designed so people can enter, learn, grow, participate, work, partner, reinvest, and help strengthen the future of the community.",
  },
];

const styles: Record<string, React.CSSProperties> = {
  app: {
    width: "100vw",
    height: "100dvh",
    overflow: "hidden",
    position: "relative",
    fontFamily: "Arial, sans-serif",
    color: "white",
    backgroundColor: "black",
  },

  background: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(2px) brightness(.52)",
    transform: "scale(1.03)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(8,14,12,.54), rgba(16,24,20,.38), rgba(34,26,16,.24))",
  },

  content: {
    position: "relative",
    zIndex: 5,
    display: "flex",
    justifyContent: "space-between",
    gap: "26px",
    height: "calc(100dvh - 120px)",
    padding: "20px 20px 100px 20px",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  left: {
    width: "28%",
    minWidth: "320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },

  brand: {
    letterSpacing: "5px",
    color: "#e6c98a",
    fontSize: "14px",
    fontWeight: 700,
    marginBottom: "18px",
  },

  title: {
    fontSize: "44px",
    fontWeight: 900,
    lineHeight: 1,
    marginBottom: "12px",
  },

  subtitle: {
    fontSize: "19px",
    color: "#e6cf96",
    fontWeight: 700,
    lineHeight: 1.25,
    marginBottom: "16px",
  },

  panel: {
    background: "rgba(0,0,0,0.55)",
    border: "1px solid rgba(214,164,75,0.3)",
    borderRadius: "24px",
    padding: "18px",
    marginBottom: "14px",
    backdropFilter: "blur(12px)",
  },

  section: {
    color: "#f0d088",
    fontSize: "12px",
    letterSpacing: "3px",
    fontWeight: 700,
    marginBottom: "12px",
  },

  body: {
    fontSize: "15px",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.92)",
  },

  detailTitle: {
    fontSize: "13px",
    color: "#f0d088",
    letterSpacing: "2px",
    fontWeight: 900,
    marginBottom: "12px",
  },

  detail: {
    fontSize: "14px",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.88)",
  },

  buttonRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "8px",
  },

  primaryButton: {
    padding: "12px 18px",
    borderRadius: "999px",
    border: "none",
    background: "#c99732",
    color: "black",
    fontWeight: 900,
    cursor: "pointer",
    fontSize: "14px",
  },

  secondaryButton: {
    padding: "12px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(0,0,0,0.55)",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "14px",
  },

  right: {
    width: "69%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  imageFrame: {
    width: "100%",
    maxWidth: "1040px",
    maxHeight: "68vh",
    overflow: "hidden",
    borderRadius: "34px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.2)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },

  counter: {
    position: "absolute",
    top: "20px",
    right: "24px",
    zIndex: 30,
    borderRadius: "999px",
    padding: "10px 18px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(0,0,0,0.45)",
    fontWeight: 700,
  },

  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "0px",
    zIndex: 30,
    background: "rgba(0,0,0,0.72)",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "10px 12px 8px 12px",
    backdropFilter: "blur(12px)",
    overflowX: "auto",
    overflowY: "hidden",
  },

  thumbRow: {
    display: "flex",
    gap: "12px",
  },

  thumb: {
    minWidth: "150px",
    height: "74px",
    borderRadius: "18px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.1)",
    opacity: 0.75,
  },

  activeThumb: {
    border: "2px solid #d8a64b",
    opacity: 1,
  },

  thumbImage: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  thumbOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
  },

  thumbText: {
    position: "absolute",
    left: "10px",
    bottom: "10px",
    right: "10px",
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: 1.2,
  },
};

export default function App() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  const slide = useMemo(() => slides[current], [current]);

  useEffect(() => {
    if (!playing) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9500);

    return () => clearTimeout(timer);
  }, [current, playing]);

  return (
    <div style={styles.app}>
      <div
        style={{
          ...styles.background,
          backgroundImage: `url(${slide.image})`,
        }}
      />

      <div style={styles.overlay} />

      <div style={styles.counter}>
        {current + 1} / {slides.length}
      </div>

      <div style={styles.content}>
        <div style={styles.left}>
          <div style={styles.brand}>BRONSON FAMILY FARM</div>

          <div style={styles.title}>{slide.title}</div>

          <div style={styles.subtitle}>{slide.subtitle}</div>

          <div style={styles.panel}>
            <div style={styles.section}>{slide.section}</div>
            <div style={styles.body}>{slide.body}</div>
          </div>

          <div style={styles.panel}>
            <div style={styles.detailTitle}>WHAT THIS PATHWAY EXPLAINS</div>
            <div style={styles.detail}>{slide.detail}</div>
          </div>

          <div style={styles.buttonRow}>
            <button
              style={styles.primaryButton}
              onClick={() => {
                setCurrent(0);
                setPlaying(true);
              }}
            >
              Guided Tour
            </button>

            <button
              style={styles.secondaryButton}
              onClick={() => setPlaying(false)}
            >
              Pause Tour
            </button>

            <button
              style={styles.secondaryButton}
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1
                )
              }
            >
              Back
            </button>

            <button
              style={styles.primaryButton}
              onClick={() =>
                setCurrent((prev) => (prev + 1) % slides.length)
              }
            >
              Next
            </button>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.imageFrame}>
            <img
              src={slide.featureImage || slide.image}
              alt={slide.title}
              style={styles.image}
            />
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div style={styles.thumbRow}>
          {slides.map((s, index) => (
            <div
              key={s.id}
              onClick={() => setCurrent(index)}
              style={{
                ...styles.thumb,
                ...(current === index ? styles.activeThumb : {}),
              }}
            >
              <div
                style={{
                  ...styles.thumbImage,
                  backgroundImage: `url(${s.featureImage || s.image})`,
                }}
              />

              <div style={styles.thumbOverlay} />

              <div style={styles.thumbText}>{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
