import React, { useState } from "react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

/**
 * ⚠️ THESE MUST MATCH YOUR EXISTING FILES
 * Based on your working version (SAM images)
 */
const IMAGE_LOCK = {
  hero: "/images/GrowArea.jpg",

  guest: "/images/GrowArea.jpg",         // TEMP – we will swap later

  customer: "/images/SAM_0854.JPG",      // FOOD / PRODUCE
  marketplace: "/images/SAM_0852.JPG",   // PEOPLE (temporary until better market image)
  grower: "/images/SAM_0856.JPG",        // FIELD / GROWING
  youth: "/images/SAM_0852.JPG",         // WORKERS (correct)
  partner: "/images/SAM_0850.JPG",       // COMMUNITY
  volunteer: "/images/SAM_0852.JPG",
};

const pathways = {
  guest: {
    title: "Guest Pathway",
    subtitle: "Walk in as a visitor. Leave understanding the vision.",
    image: IMAGE_LOCK.guest,
  },
  customer: {
    title: "Customer Pathway",
    subtitle: "Fresh food becomes a repeat healthy choice.",
    image: IMAGE_LOCK.customer,
  },
  marketplace: {
    title: "Marketplace",
    subtitle: "Interest becomes purchasing power.",
    image: IMAGE_LOCK.marketplace,
  },
  grower: {
    title: "Grower Pathway",
    subtitle: "Grow more than food. Grow opportunity.",
    image: IMAGE_LOCK.grower,
  },
  youth: {
    title: "Youth Workforce Pathway",
    subtitle: "Young people build skills by doing real work in a real ecosystem.",
    image: IMAGE_LOCK.youth,
  },
  partner: {
    title: "Partner Pathway",
    subtitle: "Organizations align resources for community impact.",
    image: IMAGE_LOCK.partner,
  },
  volunteer: {
    title: "Volunteer Pathway",
    subtitle: "Community members support the work that helps the farm grow.",
    image: IMAGE_LOCK.volunteer,
  },
};

export default function App() {
  const [active, setActive] = useState<PathwayKey>("guest");

  return (
    <main style={{ fontFamily: "Georgia, serif", background: "#f4eddc" }}>
      
      {/* HEADER */}
      <header style={{ padding: 20, display: "flex", justifyContent: "space-between" }}>
        <h2>Bronson Family Farm</h2>
        <div>
          <button>Enter Marketplace</button>
          <button>Meet the Grower Pathway</button>
          <button>Youth Workforce</button>
        </div>
      </header>

      {/* TITLE */}
      <section style={{ padding: 20 }}>
        <h1>Choose a pathway or follow the guided tour.</h1>
        <p>Start with the guided experience or enter the pathway that matches your role.</p>
      </section>

      {/* CARDS */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 20,
        padding: 20
      }}>
        {(Object.keys(pathways) as PathwayKey[]).map((key) => {
          const item = pathways[key];

          return (
            <div
              key={key}
              onClick={() => setActive(key)}
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                cursor: "pointer"
              }}
            >
              <img
                src={item.image}
                style={{ width: "100%", height: 160, objectFit: "cover" }}
              />

              <div style={{ padding: 15 }}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </section>

    </main>
  );
}
