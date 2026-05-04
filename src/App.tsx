import React, { useState } from "react";

const IMAGE = {
  hero: "/GrowArea.jpg",
  guest: "/GrowArea.jpg",
  customer: "/SAM_0223.JPG",
  marketplace: "/SAM_0229.JPG",
  grower: "/SAM_0249.JPG",
  youth: "/SAM_0220.JPG",
  partner: "/SAM_0225.JPG",
  volunteer: "/SAM_0238.JPG",
};

type PathKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

const pathways: {
  key: PathKey;
  title: string;
  desc: string;
}[] = [
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

export default function App() {
  const [active, setActive] = useState<PathKey | null>(null);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>Bronson Family Farm</div>

        <nav style={styles.nav}>
          <button style={styles.button} onClick={() => setActive("marketplace")}>
            Enter Marketplace
          </button>
          <button style={styles.button} onClick={() => setActive("grower")}>
            Meet the Grower Pathway
          </button>
          <button style={styles.button} onClick={() => setActive("youth")}>
            Youth Workforce
          </button>
        </nav>
      </header>

      <section
        style={{
          ...styles.hero,
          backgroundImage: `url(${IMAGE.hero})`,
        }}
      />

      <section style={styles.section}>
        <h1 style={styles.title}>tour</h1>
        <p style={styles.subtitle}>
          Start with the guided experience or enter the pathway that matches your
          role.
        </p>
      </section>

      <section style={styles.grid}>
        {pathways.map((p) => (
          <article
            key={p.key}
            style={styles.card}
            onClick={() => setActive(p.key)}
          >
            <div
              style={{
                ...styles.cardImage,
                backgroundImage: `url(${IMAGE[p.key]})`,
              }}
            />
            <div style={styles.cardBody}>
              <h2 style={styles.cardTitle}>{p.title}</h2>
              <p style={styles.cardDesc}>{p.desc}</p>
            </div>
          </article>
        ))}
      </section>

      {active && (
        <section style={styles.detail}>
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

          <div style={styles.detailButtons}>
            <button style={styles.button} onClick={() => setActive(null)}>
              Back
            </button>
            <button style={styles.button} onClick={() => setActive("marketplace")}>
              Enter Marketplace
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f4eddc",
    color: "#183927",
    fontFamily: "Georgia, 'Times New Roman', serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "#e8decc",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  logo: {
    fontSize: "22px",
    fontWeight: 700,
  },

  nav: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  button: {
    padding: "10px 16px",
    border: "1px solid #b7ad99",
    borderRadius: "999px",
    background: "#fffdf7",
    color: "#183927",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 600,
  },

  hero: {
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  section: {
    padding: "48px 40px 24px",
  },

  title: {
    fontSize: "48px",
    margin: 0,
    lineHeight: 1,
  },

  subtitle: {
    fontSize: "19px",
    marginTop: "18px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    padding: "24px 40px 48px",
  },

  card: {
    background: "#fffdf7",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 14px 32px rgba(30, 45, 30, 0.12)",
  },

  cardImage: {
    height: "165px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  cardBody: {
    padding: "18px",
  },

  cardTitle: {
    margin: "0 0 10px",
    fontSize: "24px",
    lineHeight: 1.05,
    color: "#123d2a",
  },

  cardDesc: {
    margin: 0,
    fontSize: "16px",
    lineHeight: 1.35,
  },

  detail: {
    padding: "40px",
    background: "#fffdf7",
    margin: "0 40px 60px",
    borderRadius: "20px",
    boxShadow: "0 14px 32px rgba(30, 45, 30, 0.12)",
  },

  detailTitle: {
    fontSize: "32px",
    marginTop: 0,
  },

  detailImage: {
    height: "320px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "16px",
    margin: "20px 0",
  },

  detailText: {
    fontSize: "18px",
    lineHeight: 1.5,
  },

  detailButtons: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  },
};
