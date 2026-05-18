import React, { useEffect, useMemo, useState } from "react";

const IMAGES = {
  entrance: "/GrowArea.jpg",
  place: "/SAM_0220.JPG",
  why: "/GrowArea.jpg",
  ecosystem: "/GrowArea.jpg",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  marketplace: "/SAM_0223.JPG",
  grower: "/SAM_0225.JPG",
  valueadded: "/culniary_edibleflowers.jpeg",
  youth: "/SAM_0226.JPG",
  volunteer: "/SAM_0229.JPG",
  partner: "/SAM_0238.JPG",
  future: "/SAM_0249.JPG",
  purpose: "/GrowArea.jpg",
};

const slides = [
  {
    id: "entrance",
    title: "Bronson Family Farm",
    subtitle: "A Community Food Ecosystem",
    image: IMAGES.entrance,
    color: "#315c46",
    body:
      "Step into Bronson Family Farm — a place where land, food, people, education, workforce development, wellness, and community opportunity are connected into one living ecosystem.",
    button: "Enter the Story",
  },
  {
    id: "place",
    title: "The Place",
    subtitle: "Historic Lansdowne Airport · Youngstown, Ohio",
    image: IMAGES.place,
    color: "#6b4f3d",
    body:
      "This farm is growing on historic land connected to aviation, memory, family, and new possibility. What was once overlooked is becoming infrastructure for food access, learning, wellness, workforce development, and agritourism.",
    button: "Why This Matters",
  },
  {
    id: "why",
    title: "Why This Matters",
    subtitle: "Food insecurity is not solved by food alone.",
    image: IMAGES.why,
    color: "#7a4f2a",
    body:
      "Families need healthy food access. Growers need tools, support, markets, and distribution. Youth need meaningful places to learn responsibility and work. Partners need a system where resources can make a visible difference.",
    button: "See the Ecosystem",
  },
  {
    id: "ecosystem",
    title: "The Ecosystem Story Map",
    subtitle:
      "People enter, learn, participate, grow, buy, sell, work, partner, and reinvest.",
    image: IMAGES.ecosystem,
    color: "#6f4e25",
    body:
      "Bronson Family Farm sits at the center. Around it are connected pathways for guests, customers, marketplace access, growers, value-added producers, youth workforce, volunteers, and partners. Each pathway strengthens the others.",
    button: "Explore the Pathways",
    diagram: true,
  },
  {
    id: "guest",
    title: "Guest Pathway",
    subtitle: "People first experience the vision.",
    image: IMAGES.guest,
    color: "#365f46",
    body:
      "Guests enter through events, tours, stories, demonstrations, and the physical experience of the farm. They learn why growing matters and why this place exists. A guest can become a customer, volunteer, grower, donor, advocate, or partner.",
    button: "Next Pathway",
  },
  {
    id: "customer",
    title: "Customer Pathway",
    subtitle: "Fresh food becomes a repeated healthy choice.",
    image: IMAGES.customer,
    color: "#7a4f2a",
    body:
      "Customers connect to fresh, chemical-free produce, seedlings, nutrition education, and seasonal food access. The goal is not one purchase. The goal is to help families return again and again to food that supports health and household stability.",
    button: "Next Pathway",
  },
  {
    id: "marketplace",
    title: "Marketplace Pathway",
    subtitle: "The food moves — not the farmer.",
    image: IMAGES.marketplace,
    color: "#8a6a2f",
    body:
      "The marketplace organizes food, orders, distribution, customers, growers, schools, businesses, and community programs. Growers participate in a shared system instead of traveling everywhere alone. Food and money begin to circulate locally.",
    button: "Next Pathway",
  },
  {
    id: "grower",
    title: "Grower Pathway",
    subtitle: "Growers receive tools, knowledge, supplies, and opportunity.",
    image: IMAGES.grower,
    color: "#466b3f",
    body:
      "Growers need more than land. They need seeds, tools, demonstrations, soil knowledge, irrigation support, pest education, harvesting guidance, business knowledge, and markets. This pathway builds grower confidence and productivity.",
    button: "Next Pathway",
  },
  {
    id: "valueadded",
    title: "Value-Added Producer Pathway",
    subtitle: "Food becomes products, enterprise, and income.",
    image: IMAGES.valueadded,
    color: "#7d5f32",
    body:
      "Produce can become sauces, canned goods, herbal products, prepared foods, seedlings, educational kits, farm experiences, and small business opportunities. This pathway turns growing into enterprise and strengthens the local food economy.",
    button: "Next Pathway",
  },
  {
    id: "youth",
    title: "Youth Workforce Pathway",
    subtitle: "The farm becomes an outdoor classroom.",
    image: IMAGES.youth,
    color: "#345c72",
    body:
      "Youth learn by doing. They practice attendance, teamwork, communication, safety, responsibility, growing, customer service, leadership, and problem-solving. The farm gives youth a real environment where work has purpose and visible results.",
    button: "Next Pathway",
  },
  {
    id: "volunteer",
    title: "Volunteer Pathway",
    subtitle: "Community members help the ecosystem move.",
    image: IMAGES.volunteer,
    color: "#55704f",
    body:
      "Volunteers support planting, setup, events, education, mentoring, harvesting, distribution, logistics, and outreach. Volunteers make the farm more than a site — they make it a shared community effort.",
    button: "Next Pathway",
  },
  {
    id: "partner",
    title: "Partner Pathway",
    subtitle: "Organizations align resources for community benefit.",
    image: IMAGES.partner,
    color: "#51406b",
    body:
      "Partners bring education, health, agriculture, workforce development, arts, business support, equipment, funding, technical assistance, and civic leadership. Their participation helps the ecosystem become stronger than any single organization.",
    button: "Next Pathway",
  },
  {
    id: "future",
    title: "The Future",
    subtitle: "A regional agritourism and food innovation destination.",
    image: IMAGES.future,
    color: "#9a5a2f",
    body:
      "Bronson Family Farm is growing toward a future with food experiences, camping, youth activities, RC programming, mini-golf, sensory spaces, education, wellness, grower supply systems, and community-centered economic development.",
    button: "Finish the Story",
  },
  {
    id: "purpose",
    title: "The Purpose",
    subtitle: "Grow food. Grow people. Grow community.",
    image: IMAGES.purpose,
    color: "#315c46",
    body:
      "The purpose of Bronson Family Farm is to help communities grow stronger through food access, education, workforce development, wellness, entrepreneurship, local circulation of resources, and shared participation in a living ecosystem.",
    button: "Contact Constance",
  },
];

function EcosystemDiagram() {
  const pathways = [
    "Guest",
    "Customer",
    "Marketplace",
    "Grower",
    "Value-Added Producer",
    "Youth Workforce",
    "Volunteer",
    "Partner",
  ];

  return (
    <div style={styles.diagramWrap}>
      <div style={styles.centerCircle}>
        <div style={styles.centerTitle}>Bronson Family Farm</div>
        <div style={styles.centerText}>Community Food Ecosystem</div>
      </div>

      <div style={styles.diagramGrid}>
        {pathways.map((p, i) => (
          <div key={p} style={styles.diagramNode}>
            <span style={styles.step}>{i + 1}</span>
            {p}
          </div>
        ))}
      </div>

      <div style={styles.flowLine}>
        Guest → Customer → Marketplace → Grower → Value-Added → Youth → Volunteer → Partner → Reinvestment
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
    }, 11000);

    return () => clearTimeout(timer);
  }, [guided, index]);

  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  const startTour = () => {
    setIndex(0);
    setGuided(true);
  };

  const contact = () => {
    window.location.href =
      "mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson Family Farm Demo Feedback";
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <img src={slide.image} alt={slide.title} style={styles.image} />

        <div
          style={{
            ...styles.overlay,
            background: `linear-gradient(135deg, ${slide.color}55 0%, ${slide.color}38 45%, rgba(0,0,0,.16) 100%)`,
          }}
        >
          <header style={styles.topbar}>
            <div>
              <strong>Bronson Family Farm</strong>
              <div style={styles.small}>Guided Ecosystem Demo</div>
            </div>

            <select style={styles.select} defaultValue="en">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="tl">Tagalog</option>
              <option value="it">Italiano</option>
              <option value="he">Hebrew</option>
              <option value="fr">Français</option>
            </select>
          </header>

          <main style={styles.content}>
            <div style={styles.kicker}>
              Pathway {index + 1} of {slides.length}
            </div>

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

              <button style={styles.secondary} onClick={startTour}>
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

          <div style={styles.nav}>
            <button style={styles.navBtn} onClick={back} disabled={index === 0}>
              Back
            </button>
            <button
              style={styles.navBtn}
              onClick={next}
              disabled={index === slides.length - 1}
            >
              Next
            </button>
          </div>

          <div style={styles.progressWrap}>
            <div style={{ ...styles.progress, width: `${progress}%` }} />
          </div>
        </div>
      </section>

      <section style={styles.pathwayMap}>
        {slides.map((s, i) => (
          <React.Fragment key={s.id}>
            <button
              onClick={() => setIndex(i)}
              style={{
                ...styles.pathBtn,
                background: i === index ? "#efe2cf" : "#fff",
                borderColor: i === index ? s.color : "#ddd",
              }}
            >
              {s.title}
            </button>
            {i < slides.length - 1 && <span style={styles.arrow}>→</span>}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f4efe7",
    fontFamily: "Georgia, 'Times New Roman', serif",
    color: "#1f1f1f",
  },
  hero: {
    position: "relative",
    minHeight: "calc(100vh - 142px)",
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
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  },
  small: {
    fontSize: "14px",
    opacity: 0.9,
  },
  select: {
    border: "none",
    borderRadius: "999px",
    padding: "12px 24px",
    fontWeight: 800,
  },
  content: {
    maxWidth: "1080px",
  },
  kicker: {
    letterSpacing: ".15em",
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: "14px",
  },
  title: {
    fontSize: "clamp(3rem, 7vw, 6rem)",
    lineHeight: 0.95,
    margin: "20px 0 12px",
  },
  subtitle: {
    fontSize: "clamp(1.2rem, 2.6vw, 2rem)",
    margin: "0 0 18px",
    fontWeight: 700,
    maxWidth: "980px",
  },
  body: {
    fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
    lineHeight: 1.45,
    background: "rgba(0,0,0,.22)",
    padding: "18px 22px",
    borderRadius: "18px",
    maxWidth: "820px",
  },
  actions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  primary: {
    border: "none",
    borderRadius: "999px",
    padding: "14px 22px",
    fontWeight: 900,
    cursor: "pointer",
    background: "#fff",
    color: "#1f1f1f",
  },
  secondary: {
    border: "1px solid rgba(255,255,255,.75)",
    borderRadius: "999px",
    padding: "14px 22px",
    fontWeight: 900,
    cursor: "pointer",
    background: "rgba(255,255,255,.15)",
    color: "#fff",
  },
  nav: {
    position: "absolute",
    right: "28px",
    bottom: "55px",
    display: "flex",
    gap: "18px",
  },
  navBtn: {
    border: "none",
    background: "transparent",
    color: "#fff",
    fontWeight: 900,
    fontSize: "18px",
    cursor: "pointer",
  },
  progressWrap: {
    height: "8px",
    background: "rgba(255,255,255,.28)",
    borderRadius: "999px",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    background: "#fff",
    transition: "width .6s ease",
  },
  pathwayMap: {
    minHeight: "142px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "18px 24px",
    overflowX: "auto",
    background: "#f4efe7",
  },
  pathBtn: {
    whiteSpace: "nowrap",
    border: "2px solid #ddd",
    borderRadius: "999px",
    padding: "14px 20px",
    fontWeight: 900,
    cursor: "pointer",
  },
  arrow: {
    fontSize: "24px",
    fontWeight: 900,
    color: "#7b5b37",
  },
  diagramWrap: {
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    gap: "22px",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "16px 0",
  },
  centerCircle: {
    minHeight: "230px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle at top left, rgba(255,255,255,.98), rgba(244,239,231,.88))",
    color: "#2b2b2b",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "26px",
    boxShadow: "0 22px 48px rgba(0,0,0,.28)",
    border: "2px solid rgba(255,255,255,.8)",
  },
  centerTitle: {
    fontSize: "28px",
    fontWeight: 900,
    lineHeight: 1.05,
  },
  centerText: {
    marginTop: "8px",
    fontSize: "16px",
    fontWeight: 700,
  },
  diagramGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(210px, 1fr))",
    gap: "13px",
  },
  diagramNode: {
    background: "rgba(255,255,255,.88)",
    color: "#2b2b2b",
    padding: "14px 18px",
    borderRadius: "999px",
    fontWeight: 900,
    boxShadow: "0 8px 20px rgba(0,0,0,.18)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  step: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#7b5b37",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 900,
  },
  flowLine: {
    gridColumn: "1 / -1",
    background: "rgba(0,0,0,.28)",
    padding: "14px 18px",
    borderRadius: "16px",
    fontWeight: 800,
    textAlign: "center",
  },
};
