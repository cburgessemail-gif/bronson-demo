import React, { useState } from "react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner";

const IMAGE_LOCK = {
  hero: "/images/GrowArea.jpg",
  guest: "/images/GrowArea.jpg",
  customer: "/images/customer.jpg",
  marketplace: "/images/marketplace.jpg",
  grower: "/images/grower.jpg",
  youth: "/images/youth-workforce.jpg",
  partner: "/images/partner.jpg",
};

const pathways = {
  guest: {
    title: "Guest Pathway",
    image: IMAGE_LOCK.guest,
    text: "Understand the vision, story, and purpose of Bronson Family Farm.",
  },
  customer: {
    title: "Customer Pathway",
    image: IMAGE_LOCK.customer,
    text: "Connect to fresh food, nutrition, and healthy living.",
  },
  marketplace: {
    title: "Marketplace",
    image: IMAGE_LOCK.marketplace,
    text: "Convert interest into purchasing power and sustainability.",
  },
  grower: {
    title: "Grower Pathway",
    image: IMAGE_LOCK.grower,
    text: "Access tools, knowledge, and opportunity to grow.",
  },
  youth: {
    title: "Youth Workforce",
    image: IMAGE_LOCK.youth,
    text: "Build skills, responsibility, and future readiness.",
  },
  partner: {
    title: "Partner Pathway",
    image: IMAGE_LOCK.partner,
    text: "Align resources for community impact.",
  },
};

export default function App() {
  const [active, setActive] = useState<PathwayKey>("guest");

  return (
    <main style={{ fontFamily: "Georgia, serif" }}>
      {/* HERO */}
      <section style={{ position: "relative", height: "70vh" }}>
        <img
          src={IMAGE_LOCK.hero}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />

        <div
          style={{
            position: "relative",
            color: "white",
            padding: "40px",
          }}
        >
          <h1>Bronson Family Farm</h1>
          <p>Growers Supply Market Ecosystem</p>
          <p style={{ maxWidth: 500 }}>
            Farm access is by invitation only.
          </p>
        </div>
      </section>

      {/* NAV */}
      <section style={{ display: "flex", gap: 10, padding: 20 }}>
        {(Object.keys(pathways) as PathwayKey[]).map((key) => (
          <button key={key} onClick={() => setActive(key)}>
            {pathways[key].title}
          </button>
        ))}
      </section>

      {/* CONTENT */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: 20 }}>
        <img
          src={pathways[active].image}
          style={{ width: "100%", height: 400, objectFit: "cover" }}
        />

        <div style={{ padding: 20 }}>
          <h2>{pathways[active].title}</h2>
          <p>{pathways[active].text}</p>
        </div>
      </section>
    </main>
  );
}
