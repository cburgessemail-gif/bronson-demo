import React, { useState } from "react";

type Page =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners"
  | "value";

const IMAGES: Record<Page, string> = {
  home: "/images/GrowArea.jpg",
  guest: "/images/GrowArea.jpg",
  customer: "/images/SAM_0249.JPG",
  marketplace: "/images/Bronson Family Farm market flyer.png",
  grower: "/images/GrowArea.jpg",
  youth: "/images/SAM_0252.JPG",
  partners: "/images/SAM_0252.JPG",
  value: "/images/Youngstown Farmers Market_0423.png",
};

const button = (background: string): React.CSSProperties => ({
  background,
  color: "#ffffff",
  border: "none",
  borderRadius: "14px",
  padding: "14px 18px",
  fontWeight: 700,
  fontSize: "17px",
  cursor: "pointer",
  boxShadow: "0 8px 18px rgba(0,0,0,.22)",
});

function pageStyle(image: string): React.CSSProperties {
  return {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,.22), rgba(0,0,0,.34)), url("${image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    color: "#ffffff",
  };
}

const panel: React.CSSProperties = {
  width: "100%",
  maxWidth: "1160px",
  background: "rgba(0,0,0,.56)",
  color: "#ffffff",
  borderRadius: "26px",
  padding: "36px",
  border: "1px solid rgba(255,255,255,.18)",
  boxShadow: "0 24px 70px rgba(0,0,0,.35)",
  backdropFilter: "blur(5px)",
};

function Pathway({
  title,
  subtitle,
  mission,
  meaning,
  nextLabel,
  image,
  next,
  home,
}: {
  title: string;
  subtitle: string;
  mission: string;
  meaning: string;
  nextLabel: string;
  image: string;
  next: () => void;
  home: () => void;
}) {
  return (
    <main style={pageStyle(image)}>
      <section style={panel}>
        <p style={{ margin: 0, fontSize: "15px", letterSpacing: ".16em", textTransform: "uppercase", color: "#facc15" }}>
          Bronson Family Farm Ecosystem
        </p>

        <h1 style={{ fontSize: "58px", lineHeight: 1.02, margin: "12px 0 10px" }}>
          {title}
        </h1>

        <h2 style={{ fontSize: "28px", lineHeight: 1.25, margin: "0 0 24px", fontWeight: 600 }}>
          {subtitle}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "18px",
            marginTop: "22px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.16)",
              borderRadius: "20px",
              padding: "22px",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "22px", color: "#fef3c7" }}>
              Mission
            </h3>
            <p style={{ fontSize: "20px", lineHeight: 1.55, marginBottom: 0 }}>
              {mission}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.16)",
              borderRadius: "20px",
              padding: "22px",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "22px", color: "#fef3c7" }}>
              Meaning
            </h3>
            <p style={{ fontSize: "20px", lineHeight: 1.55, marginBottom: 0 }}>
              {meaning}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "28px" }}>
          <button onClick={next} style={button("#e11d48")}>
            {nextLabel}
          </button>

          <button onClick={home} style={button("#334155")}>
            Return Home
          </button>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  if (page === "guest") {
    return (
      <Pathway
        title="Guest Experience"
        subtitle="Understand the land, the story, and the reason this place matters."
        mission="Help visitors see Bronson Family Farm as more than acreage. It is a living entry point into food, wellness, family legacy, and community renewal."
        meaning="A guest should leave understanding why the farm exists, who it serves, and how one visit connects to a larger regional ecosystem."
        image={IMAGES.guest}
        nextLabel="Continue to Customer Pathway"
        next={() => setPage("customer")}
        home={() => setPage("home")}
      />
    );
  }

  if (page === "customer") {
    return (
      <Pathway
        title="Customer Pathway"
        subtitle="Fresh food, nutrition, and repeated healthy choices."
        mission="Connect families to fresh produce, practical nutrition, local buying options, and a welcoming reason to return."
        meaning="Customers are not just shoppers. They are part of a food access system that supports health, growers, and community sustainability."
        image={IMAGES.customer}
        nextLabel="Continue to Marketplace"
        next={() => setPage("marketplace")}
        home={() => setPage("home")}
      />
    );
  }

  if (page === "marketplace") {
    return (
      <Pathway
        title="Marketplace"
        subtitle="Turn community interest into purchasing power and sustainability."
        mission="Create a trusted marketplace where local growers, customers, and partners can exchange value through food, plants, products, and education."
        meaning="The marketplace is the economic engine. It helps growers sell, customers access fresh goods, and the ecosystem become financially stronger."
        image={IMAGES.marketplace}
        nextLabel="Continue to Grower Pathway"
        next={() => setPage("grower")}
        home={() => setPage("home")}
      />
    );
  }

  if (page === "grower") {
    return (
      <Pathway
        title="Grower Pathway"
        subtitle="Connect producers to opportunity, market participation, and shared infrastructure."
        mission="Support growers with visibility, training, marketplace access, and a larger community framework that helps them participate and grow."
        meaning="Growers and producers are entrepreneurs. Their work feeds families, strengthens neighborhoods, and contributes to the regional food system."
        image={IMAGES.grower}
        nextLabel="Continue to Youth Workforce"
        next={() => setPage("youth")}
        home={() => setPage("home")}
      />
    );
  }

  if (page === "youth") {
    return (
      <Pathway
        title="Youth Workforce"
        subtitle="Build skills, responsibility, confidence, and future readiness."
        mission="Use real farm and marketplace experiences to help young people practice teamwork, communication, discipline, problem solving, and work readiness."
        meaning="Youth are not just volunteers. They are emerging leaders gaining life skills through meaningful responsibility inside a working ecosystem."
        image={IMAGES.youth}
        nextLabel="Continue to Partners"
        next={() => setPage("partners")}
        home={() => setPage("home")}
      />
    );
  }

  if (page === "partners") {
    return (
      <Pathway
        title="Partner Pathway"
        subtitle="Align resources, relationships, and services around community benefit."
        mission="Bring businesses, nonprofits, educators, civic leaders, health partners, and funders into a coordinated place-based strategy."
        meaning="Partners help the ecosystem move from isolated efforts to shared infrastructure, shared outcomes, and stronger regional capacity."
        image={IMAGES.partners}
        nextLabel="Continue to Value-Added Producers"
        next={() => setPage("value")}
        home={() => setPage("home")}
      />
    );
  }

  if (page === "value") {
    return (
      <Pathway
        title="Value-Added Producers"
        subtitle="Extend farm value through food, products, creativity, and entrepreneurship."
        mission="Create room for makers, processors, food entrepreneurs, artists, and small businesses to turn local resources into marketable products."
        meaning="Value-added producers help the farm economy grow beyond raw produce by creating income, identity, culture, and local enterprise."
        image={IMAGES.value}
        nextLabel="Return to Home"
        next={() => setPage("home")}
        home={() => setPage("home")}
      />
    );
  }

  return (
    <main style={pageStyle(IMAGES.home)}>
      <section style={panel}>
        <p style={{ margin: 0, fontSize: "16px", letterSpacing: ".16em", textTransform: "uppercase", color: "#facc15" }}>
          Developed by Bronson Family Farm
        </p>

        <h1 style={{ fontSize: "76px", lineHeight: 1, margin: "14px 0 10px" }}>
          Bronson Family Farm
        </h1>

        <h2 style={{ fontSize: "42px", color: "#facc15", margin: "0 0 18px" }}>
          Growers Supply Market
        </h2>

        <p style={{ fontSize: "30px", lineHeight: 1.45, margin: "0 0 26px" }}>
          May 16, 2026 • 9:00 AM – 2:00 PM
          <br />
          Youngstown, Ohio
          <br />
          <strong>By Invitation Only</strong>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "14px",
            marginTop: "24px",
          }}
        >
          <button style={button("#15803d")} onClick={() => setPage("guest")}>
            Guest Experience
          </button>

          <button style={button("#0f766e")} onClick={() => setPage("customer")}>
            Customer Pathway
          </button>

          <button style={button("#be123c")} onClick={() => setPage("marketplace")}>
            Marketplace
          </button>

          <button style={button("#7c3aed")} onClick={() => setPage("grower")}>
            Grower Pathway
          </button>

          <button style={button("#1d4ed8")} onClick={() => setPage("youth")}>
            Youth Workforce
          </button>

          <button style={button("#b45309")} onClick={() => setPage("partners")}>
            Partners
          </button>

          <button style={button("#9333ea")} onClick={() => setPage("value")}>
            Value-Added Producers
          </button>

          <button
            style={button("#dc2626")}
            onClick={() => window.open("https://www.eventbrite.com", "_blank")}
          >
            Register at Eventbrite
          </button>
        </div>

        <p style={{ marginTop: "30px", fontSize: "18px", lineHeight: 1.5 }}>
          Farm & Family Alliance • Parker Farms • Regional Food System • Workforce Development • Marketplace Access
        </p>
      </section>
    </main>
  );
}
