import React, { useState } from "react";

/** IMAGE MAP — FIXED TO MATCH SUBJECTS **/
const IMAGE = {
  hero: "/GrowArea.jpg",

  guest: "/GrowArea.jpg",
  customer: "/SAM_0238.JPG",
  marketplace: "/SAM_0229.JPG",
  grower: "/SAM_0220.JPG",
  youth: "/SAM_0223.JPG",
  partner: "/SAM_0225.JPG",
  volunteer: "/SAM_0249.JPG",
};

/** PATHWAYS **/
type PathKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

const pathways = [
  {
    key: "guest",
    title: "Guest Pathway",
    desc: "Walk in as a visitor. Leave understanding the vision.",
  },
  {
    key: "customer",
    title: "Customer Pathway",
    desc: "Fresh food becomes a repeat healthy choice.",
  },
  {
    key: "marketplace",
    title: "Marketplace",
    desc: "Interest becomes purchasing power.",
  },
  {
    key: "grower",
    title: "Grower Pathway",
    desc: "Grow more than food. Grow opportunity.",
  },
  {
    key: "youth",
    title: "Youth Workforce Pathway",
    desc: "Young people build skills by doing real work in a real ecosystem.",
  },
  {
    key: "partner",
    title: "Partner Pathway",
    desc: "Partners align resources so the ecosystem can serve more people.",
  },
  {
    key: "volunteer",
    title: "Volunteer Pathway",
    desc: "Volunteers help turn vision into visible progress.",
  },
];

/** APP **/
export default function App() {
  const [active, setActive] = useState<PathKey | null>(null);

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.logo}>Bronson Family Farm</div>

        <div style={styles.nav}>
          <button style={styles.button}>Enter Marketplace</button>
          <button style={styles.button}>Meet the Grower Pathway</button>
          <button style={styles.button}>Youth Workforce</button>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div
        style={{
          ...styles.hero,
          backgroundImage: `url(${IMAGE.hero})`,
        }}
      />

      {/* TITLE */}
      <div style={styles.section}>
        <h1 style={styles.title}>tour</h1>
        <p style={styles.subtitle}>
          Start with the guided experience or enter the pathway that matches your role.
        </p>
      </div>

      {/* PATHWAY GRID */}
      <div style={styles.grid}>
        {pathways.map((p) => (
          <div
            key={p.key}
            style={styles.card}
            onClick={() => setActive(p.key as PathKey)}
          >
            <div
              style={{
                ...styles.cardImage,
                backgroundImage: `url(${IMAGE[p.key]})`,
              }}
            />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{p.title}</h3>
              <p style={styles.cardDesc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL VIEW */}
      {active && (
        <div style={styles.detail}>
          <h2 style={styles.detailTitle}>
            {pathways.find((p) => p.key === active)?.title}
          </h2>

          <div
            style={{
              ...styles.detailImage,
              backgroundImage: `url(${IMAGE[active]})`,
            }}
          />

          <p style={styles.detailText}>
            {pathways.find((p) => p.key === active)?.desc}
          </p>

          <button style={styles.back} onClick={() => setActive(null)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

/** STYLES — NO TAILWIND (fixes your build error) **/
const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "Georgia, serif",
    background: "#f4eddc",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "#e8decc",
  },

  logo: {
    fontSize: "22px",
    fontWeight: 600,
  },

  nav: {
    display: "flex",
    gap: "12px",
  },

  button: {
    padding: "10px 14px",
    border: "1px solid #333",
    background: "#fff",
    cursor: "pointer",
  },

  hero: {
    height: "260px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  section: {
    padding: "40px",
  },

  title: {
    fontSize: "42px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    padding: "0 40px 40px",
  },

  card: {
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
  },

  cardImage: {
    height: "160px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  cardBody: {
    padding: "16px",
  },

  cardTitle: {
    margin: "0 0 8px",
  },

  cardDesc: {
    fontSize: "14px",
  },

  detail: {
    padding: "40px",
  },

  detailTitle: {
    fontSize: "28px",
  },

  detailImage: {
    height: "300px",
    backgroundSize: "cover",
    margin: "20px 0",
  },

  detailText: {
    fontSize: "18px",
  },

  back: {
    marginTop: "20px",
    padding: "10px 16px",
    cursor: "pointer",
  },
};
