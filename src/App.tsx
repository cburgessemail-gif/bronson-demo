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

const IMAGES = {
  home: ["/images/GrowArea.jpg", "/images/GrowArea.JPG", "/images/SAM_0249.JPG"],
  guest: ["/images/GrowArea.jpg", "/images/GrowArea.JPG", "/images/SAM_0249.JPG"],
  customer: ["/images/SAM_0249.JPG", "/images/customer-produce.jpg"],
  marketplace: ["/images/Bronson Family Farm market flyer.png"],
  grower: ["/images/GrowArea.jpg", "/images/GrowArea.JPG"],
  youth: ["/images/SAM_0249.JPG", "/images/youth-workforce.jpg"],
  partners: ["/images/SAM_0252.JPG", "/images/partners-community.jpg"],
  value: ["/images/Youngstown Farmers Market_0423.png"],
};

function Background({
  images,
  children,
}: {
  images: string[];
  children: React.ReactNode;
}) {
  const [i, setI] = useState(0);
  const src = images[i] || images[0];

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        overflow: "hidden",
        background: "#07170d",
      }}
    >
      <img
        src={src}
        onError={() => setI((n) => Math.min(n + 1, images.length - 1))}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,.22)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1120px",
          background: "rgba(0,0,0,.58)",
          color: "#fff",
          borderRadius: "22px",
          padding: "34px",
          border: "1px solid rgba(255,255,255,.14)",
          backdropFilter: "blur(4px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

const button = (background: string): React.CSSProperties => ({
  background,
  color: "#ffffff",
  border: "none",
  borderRadius: "12px",
  padding: "14px 18px",
  fontWeight: 700,
  fontSize: "18px",
  cursor: "pointer",
});

function Pathway({
  title,
  text,
  images,
  next,
}: {
  title: string;
  text: string;
  images: string[];
  next: () => void;
}) {
  return (
    <Background images={images}>
      <h1 style={{ fontSize: "56px", marginBottom: "14px" }}>{title}</h1>
      <p style={{ fontSize: "26px", lineHeight: 1.6 }}>{text}</p>
      <button onClick={next} style={{ ...button("#e11d48"), marginTop: "20px" }}>
        Continue
      </button>
    </Background>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  if (page === "guest")
    return (
      <Pathway
        title="Guest Experience"
        text="Experience the land, purpose, and vision of Bronson Family Farm."
        images={IMAGES.guest}
        next={() => setPage("customer")}
      />
    );

  if (page === "customer")
    return (
      <Pathway
        title="Customer Pathway"
        text="Fresh produce, nutrition, healthier choices, and return visits."
        images={IMAGES.customer}
        next={() => setPage("marketplace")}
      />
    );

  if (page === "marketplace")
    return (
      <Pathway
        title="Marketplace"
        text="Support growers. Shop local. Strengthen sustainability."
        images={IMAGES.marketplace}
        next={() => setPage("grower")}
      />
    );

  if (page === "grower")
    return (
      <Pathway
        title="Grower Pathway"
        text="Connect producers to land, customers, and opportunity."
        images={IMAGES.grower}
        next={() => setPage("youth")}
      />
    );

  if (page === "youth")
    return (
      <Pathway
        title="Youth Workforce"
        text="Build discipline, skills, teamwork, and future readiness."
        images={IMAGES.youth}
        next={() => setPage("partners")}
      />
    );

  if (page === "partners")
    return (
      <Pathway
        title="Partners"
        text="Organizations align resources for community benefit."
        images={IMAGES.partners}
        next={() => setPage("value")}
      />
    );

  if (page === "value")
    return (
      <Pathway
        title="Value-Added Producers"
        text="Entrepreneurs create products and extend farm value."
        images={IMAGES.value}
        next={() => setPage("home")}
      />
    );

  return (
    <Background images={IMAGES.home}>
      <h1 style={{ fontSize: "72px", marginBottom: "8px" }}>
        Bronson Family Farm
      </h1>

      <h2
        style={{
          color: "#facc15",
          fontSize: "42px",
          marginTop: 0,
          marginBottom: "18px",
        }}
      >
        Growers Supply Market
      </h2>

      <p style={{ fontSize: "30px", lineHeight: 1.5 }}>
        May 16, 2026 • 9:00 AM – 2:00 PM
        <br />
        Youngstown, Ohio
        <br />
        <strong>By Invitation Only</strong>
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "14px",
          marginTop: "24px",
        }}
      >
        <button style={button("#15803d")} onClick={() => setPage("guest")}>
          Enter Experience
        </button>

        <button style={button("#0f766e")} onClick={() => setPage("marketplace")}>
          Marketplace
        </button>

        <button style={button("#7c3aed")} onClick={() => setPage("grower")}>
          Growers
        </button>

        <button style={button("#1d4ed8")} onClick={() => setPage("youth")}>
          Youth Workforce
        </button>

        <button style={button("#b45309")} onClick={() => setPage("partners")}>
          Partners
        </button>

        <button
          style={button("#be123c")}
          onClick={() => window.open("https://www.eventbrite.com", "_blank")}
        >
          Register at Eventbrite
        </button>
      </div>

      <p style={{ marginTop: "28px", fontSize: "18px" }}>
        Developed by Bronson Family Farm • Farm & Family Alliance • Parker Farms
      </p>
    </Background>
  );
}
