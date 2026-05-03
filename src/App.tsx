import React from "react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

/**
 * ONLY USE IMAGES THAT CURRENTLY WORK
 * We KNOW GrowArea.jpg works — everything else was breaking
 */
const IMAGE_LOCK: Record<PathwayKey, string> = {
  guest: "/images/GrowArea.jpg",

  // TEMP: use working image until we map real ones
  customer: "/images/GrowArea.jpg",
  marketplace: "/images/GrowArea.jpg",

  grower: "/images/GrowArea.jpg",

  youth: "/images/GrowArea.jpg",
  partner: "/images/GrowArea.jpg",
  volunteer: "/images/GrowArea.jpg",
};

const pathways = {
  guest: {
    title: "Guest Pathway",
    text: "Walk in as a visitor. Leave understanding the vision.",
  },
  customer: {
    title: "Customer Pathway",
    text: "Fresh food becomes a repeat healthy choice.",
  },
  marketplace: {
    title: "Marketplace",
    text: "Interest becomes purchasing power.",
  },
  grower: {
    title: "Grower Pathway",
    text: "Grow more than food. Grow opportunity.",
  },
  youth: {
    title: "Youth Workforce Pathway",
    text: "Young people build skills by doing real work.",
  },
  partner: {
    title: "Partner Pathway",
    text: "Organizations align resources for community impact.",
  },
  volunteer: {
    title: "Volunteer Pathway",
    text: "Community members support the work that helps the farm grow.",
  },
};

export default function App() {
  return (
    <main style={{ background: "#f4eddc", minHeight: "100vh", fontFamily: "Georgia" }}>
      
      <header style={{ padding: 20, display: "flex", justifyContent: "space-between" }}>
        <h2>Bronson Family Farm</h2>
        <div>
          <button>Enter Marketplace</button>
          <button>Meet the Grower Pathway</button>
          <button>Youth Workforce</button>
        </div>
      </header>

      <section style={{ padding: 20 }}>
        <h1>Choose a pathway or follow the guided tour.</h1>
        <p>Start with the guided experience or enter the pathway that matches your role.</p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 20,
          padding: 20,
        }}
      >
        {(Object.keys(pathways) as PathwayKey[]).map((key) => {
          const item = pathways[key];

          return (
            <div
              key={key}
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={IMAGE_LOCK[key]}
                style={{ width: "100%", height: 160, objectFit: "cover" }}
              />

              <div style={{ padding: 15 }}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
