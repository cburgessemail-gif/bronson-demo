import React, { useMemo, useState } from "react";

type View =
  | "home"
  | "tour"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

type ImageKey =
  | "hero"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

// ✅ FIXED IMAGE MAPPING (ONLY REAL CHANGE)
const IMAGES: Record<ImageKey, string> = {
  hero: "/GrowArea.jpg",
  guest: "/GrowArea.jpg",

  // CUSTOMER = food / produce (NOT dirt, NOT random)
  customer: "/culinary_edibleflowers.jpeg",

  // MARKETPLACE = actual produce / food
  marketplace: "/culinary_edibleflowers2.jpeg",

  // GROWER = working / field / people
  grower: "/SAM_0249.JPG",

  // YOUTH = active learning / work
  youth: "/SAM_0220.JPG",

  partner: "/SAM_0225.JPG",
  volunteer: "/SAM_0229.JPG",
};

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

function App() {
  const [view, setView] = useState<View>("home");

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#efe6cf" }}>
      
      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 25px",
        background: "#e8dcc0"
      }}>
        <b>Bronson Family Farm</b>
        <div>
          <button onClick={() => setView("marketplace")}>Enter Marketplace</button>
          <button onClick={() => setView("grower")}>Meet the Grower Pathway</button>
          <button onClick={() => setView("youth")}>Youth Workforce</button>
        </div>
      </div>

      {/* HERO */}
      <div>
        <img
          src={IMAGES.hero}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* TITLE */}
      <div style={{ padding: "30px" }}>
        <h1>tour</h1>
        <p>Start with the guided experience or enter the pathway that matches your role.</p>
      </div>

      {/* CARDS */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px"
      }}>
        {pathways.map((p) => (
          <div
            key={p.key}
            style={{
              width: "250px",
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              cursor: "pointer"
            }}
            onClick={() => setView(p.key as View)}
          >
            <img
              src={IMAGES[p.key as ImageKey]}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
