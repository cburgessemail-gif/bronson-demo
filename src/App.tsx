import React, { useState } from "react";

/* ✅ USE ONLY REAL FILES FROM YOUR /public FOLDER */
const IMAGES = {
  hero: "/GrowArea.jpg",

  guest: "/GrowArea.jpg",
  customer: "/SAM_0220.JPG",
  marketplace: "/SAM_0221.JPG",
  grower: "/SAM_0222.JPG",
  youth: "/SAM_0223.JPG",
  partner: "/SAM_0225.JPG",
  volunteer: "/SAM_0249.JPG",
};

/* ✅ PATHWAYS */
const PATHWAYS = [
  {
    key: "guest",
    title: "Guest Pathway",
    description: "Walk in as a visitor. Leave understanding the vision.",
  },
  {
    key: "customer",
    title: "Customer Pathway",
    description: "Fresh food becomes a repeat healthy choice.",
  },
  {
    key: "marketplace",
    title: "Marketplace",
    description: "Interest becomes purchasing power.",
  },
  {
    key: "grower",
    title: "Grower Pathway",
    description: "Grow more than food. Grow opportunity.",
  },
  {
    key: "youth",
    title: "Youth Workforce Pathway",
    description: "Young people build skills by doing real work in a real ecosystem.",
  },
  {
    key: "partner",
    title: "Partner Pathway",
    description: "Partners align resources so the ecosystem can serve more people.",
  },
  {
    key: "volunteer",
    title: "Volunteer Pathway",
    description: "Volunteers help turn vision into visible progress.",
  },
];

export default function App() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, serif", background: "#e4ded3" }}>
      
      {/* HEADER */}
      <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between" }}>
        <h2>Bronson Family Farm</h2>

        <div style={{ display: "flex", gap: "12px" }}>
          <button>Enter Marketplace</button>
          <button>Meet the Grower Pathway</button>
          <button>Youth Workforce</button>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          height: "300px",
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* TITLE */}
      <div style={{ padding: "32px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "8px" }}>
          tour
        </h1>

        <p style={{ fontSize: "18px" }}>
          Start with the guided experience or enter the pathway that matches your role
        </p>
      </div>

      {/* PATHWAY GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          padding: "24px",
        }}
      >
        {PATHWAYS.map((p) => (
          <div
            key={p.key}
            onClick={() => setSelected(p.key)}
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={IMAGES[p.key as keyof typeof IMAGES]}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />

            <div style={{ padding: "16px" }}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SELECTED PATHWAY DETAIL */}
      {selected && (
        <div style={{ padding: "32px" }}>
          <h2>{PATHWAYS.find(p => p.key === selected)?.title}</h2>

          <p style={{ marginTop: "16px" }}>
            {PATHWAYS.find(p => p.key === selected)?.description}
          </p>

          <div style={{ marginTop: "24px" }}>
            <button style={{ marginRight: "12px" }}>
              Continue Guided Tour
            </button>

            <button>
              Enter Marketplace
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
