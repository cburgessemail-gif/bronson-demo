import React, { useEffect, useMemo, useState } from "react";

const slides = [
  {
    nav: "1. Bronson Family Farm",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "BRONSON FAMILY FARM DEMO",
    title: "Enter the Farm",
    text: [
      "Bronson Family Farm begins with land, legacy, food, and community.",
      "This is a place-based food ecosystem growing from the Historic Lansdowne Airport in Youngstown.",
      "The goal is to help food, knowledge, opportunity, and resources circulate locally."
    ]
  },
  {
    nav: "2. Connected Ecosystem",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "CONNECTED FOOD ECOSYSTEM",
    title: "Growing Opportunity Together",
    text: [
      "An ecosystem means the parts do not stand alone.",
      "Guests learn the story. Customers access fresh food. Growers connect to tools and markets.",
      "Youth build skills. Partners bring resources. Value-added producers expand what food can become."
    ]
  },
  {
    nav: "3. Explore the Farm",
    image: "/GrowArea.jpg",
    kicker: "PLACE · LAND · AIRPORT HISTORY",
    title: "Explore the Farm",
    text: [
      "Bronson Family Farm grows from the Historic Lansdowne Airport in Youngstown.",
      "The farm combines outdoor growing, education, agritourism, and community engagement.",
      "This is infrastructure for a connected food ecosystem."
    ]
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const slide = slides[index];

  const progress = useMemo(() => ((index + 1) / 11) * 100, [index]);

  useEffect(() => {
    if (!guided) return;
    const timer = setTimeout(() => {
      setIndex((prev) => (prev >= slides.length - 1 ? prev : prev + 1));
    }, 11000);
    return () => clearTimeout(timer);
  }, [guided, index]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#10140f",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: slide.contain ? "62%" : "cover",
          backgroundPosition: slide.contain ? "right center" : "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#10140f"
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,.90), rgba(0,0,0,.52), rgba(0,0,0,.06)), linear-gradient(to top, rgba(0,0,0,.92), transparent 45%)"
        }}
      />

      <section style={{ position: "relative", zIndex: 2, padding: "28px 40px 170px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", gap: 24 }}>
          <div>
            <p style={{ letterSpacing: ".34em", color: "#e8d7a2", fontWeight: 800 }}>
              BRONSON FAMILY FARM DEMO
            </p>
            <h1 style={{ fontSize: "clamp(42px, 5.6vw, 76px)", fontWeight: 400, margin: 0 }}>
              Connected Food Ecosystem Experience
            </h1>
          </div>

          <select
            style={{
              borderRadius: 999,
              padding: "14px 24px",
              background: "rgba(255,255,255,.18)",
              color: "white",
              fontWeight: 800,
              height: 52
            }}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>Tagalog</option>
            <option>Italian</option>
            <option>Hebrew</option>
            <option>French</option>
          </select>
        </header>

        <div style={{ height: 9, background: "rgba(255,255,255,.28)", borderRadius: 99, margin: "24px 0" }}>
          <div style={{ width: `${progress}%`, height: "100%", background: "#8cc63f", borderRadius: 99 }} />
        </div>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
          {[
            "1. Bronson Family Farm",
            "2. Connected Ecosystem",
            "3. Explore the Farm",
            "4. Guest",
            "5. Customer",
            "6. Marketplace",
            "7. Grower",
            "8. Youth Workforce",
            "9. Partner",
            "10. Value-Added",
            "11. Thank You"
          ].map((label, i) => (
            <button
              key={label}
              onClick={() => setIndex(Math.min(i, slides.length - 1))}
              style={{
                borderRadius: 999,
                padding: "12px 18px",
                color: "white",
                fontWeight: 800,
                border: "1px solid rgba(255,255,255,.3)",
                background: i === index ? "#9a6a38" : "rgba(255,255,255,.15)",
                cursor: "pointer"
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <article
          style={{
            maxWidth: 760,
            borderRadius: 30,
            padding: "38px 40px",
            background: "rgba(0,0,0,.62)",
            border: "1px solid rgba(255,255,255,.18)",
            boxShadow: "0 22px 55px rgba(0,0,0,.45)"
          }}
        >
          <p style={{ letterSpacing: ".34em", color: "#e8d7a2", fontWeight: 800 }}>
            {slide.kicker}
          </p>

          <h2 style={{ fontSize: "clamp(52px, 6.5vw, 86px)", fontWeight: 400, lineHeight: .95, margin: "0 0 28px" }}>
            {slide.title}
          </h2>

          {slide.text.map((line) => (
            <p key={line} style={{ fontSize: 21, lineHeight: 1.45 }}>
              {line}
            </p>
          ))}

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
            <button onClick={() => setIndex(0)}>Start</button>
            <button onClick={() => setIndex((p) => Math.max(0, p - 1))}>Back</button>
            <button onClick={() => setIndex((p) => Math.min(slides.length - 1, p + 1))}>Next</button>
            <button onClick={() => setGuided((p) => !p)}>
              {guided ? "Pause Tour" : "Begin Guided Tour"}
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
