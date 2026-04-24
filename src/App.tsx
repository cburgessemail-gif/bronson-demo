import React, { useMemo, useState } from "react";

/**
 * Bronson Family Farm – Final Updated Demo
 * Relevant images mapped by category
 * Place image files in /public/images/
 *
 * Required files:
 * /public/images/hero-aerial.jpg
 * /public/images/customer-produce.jpg
 * /public/images/marketplace-storefront.jpg
 * /public/images/grower-field.jpg
 * /public/images/youth-workforce.jpg
 * /public/images/partners-community.jpg
 * /public/images/value-added-products.jpg
 */

type PathKey =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners"
  | "value";

const IMAGES = {
  home: "/images/hero-aerial.jpg",
  guest: "/images/hero-aerial.jpg",
  customer: "/images/customer-produce.jpg",
  marketplace: "/images/marketplace-storefront.jpg",
  grower: "/images/grower-field.jpg",
  youth: "/images/youth-workforce.jpg",
  partners: "/images/partners-community.jpg",
  value: "/images/value-added-products.jpg",
};

const CARD_STYLE: React.CSSProperties = {
  background: "rgba(0,0,0,.58)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: 18,
  padding: 22,
  color: "#fff",
  backdropFilter: "blur(4px)",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: 10,
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: 15,
};

function Section({
  title,
  text,
  image,
  onNext,
}: {
  title: string;
  text: string;
  image: string;
  onNext?: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.55)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ ...CARD_STYLE, maxWidth: 860, width: "100%" }}>
        <h1 style={{ fontSize: 42, marginBottom: 10 }}>{title}</h1>
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.6,
            marginBottom: 24,
            color: "#f3f3f3",
          }}
        >
          {text}
        </p>

        {onNext && (
          <button
            onClick={onNext}
            style={{
              ...buttonStyle,
              background: "#e11d48",
              color: "#fff",
            }}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PathKey>("home");

  const content = useMemo(() => {
    switch (page) {
      case "guest":
        return (
          <Section
            title="Guest Pathway"
            text="Walk the land. Understand the purpose. Bronson Family Farm transforms land into opportunity, food access, wellness, and community growth."
            image={IMAGES.guest}
            onNext={() => setPage("customer")}
          />
        );

      case "customer":
        return (
          <Section
            title="Customer Pathway"
            text="Fresh produce, healthier choices, local nutrition, repeat buying power, and family wellness through regional agriculture."
            image={IMAGES.customer}
            onNext={() => setPage("marketplace")}
          />
        );

      case "marketplace":
        return (
          <Section
            title="Marketplace Pathway"
            text="Buy local. Support growers. Build sustainability. The marketplace converts community interest into economic strength."
            image={IMAGES.marketplace}
            onNext={() => setPage("grower")}
          />
        );

      case "grower":
        return (
          <Section
            title="Grower Pathway"
            text="Growers connect to land, customers, training, and revenue opportunities through a supportive ecosystem."
            image={IMAGES.grower}
            onNext={() => setPage("youth")}
          />
        );

      case "youth":
        return (
          <Section
            title="Youth Workforce Pathway"
            text="Young people gain discipline, teamwork, job readiness, responsibility, and future pathways through real work experience."
            image={IMAGES.youth}
            onNext={() => setPage("partners")}
          />
        );

      case "partners":
        return (
          <Section
            title="Partner Pathway"
            text="Businesses, nonprofits, educators, healthcare, and civic leaders align resources for community impact."
            image={IMAGES.partners}
            onNext={() => setPage("value")}
          />
        );

      case "value":
        return (
          <Section
            title="Value-Added Producers"
            text="Food makers, crafters, processors, and entrepreneurs create products that extend farm value and local income."
            image={IMAGES.value}
            onNext={() => setPage("home")}
          />
        );

      default:
        return (
          <div
            style={{
              minHeight: "100vh",
              backgroundImage: `linear-gradient(rgba(0,0,0,.40),rgba(0,0,0,.60)), url(${IMAGES.home})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: 30,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ ...CARD_STYLE, maxWidth: 1050, width: "100%" }}>
              <h1 style={{ fontSize: 54, marginBottom: 10 }}>
                Bronson Family Farm
              </h1>

              <h2 style={{ fontSize: 28, marginTop: 0, color: "#facc15" }}>
                Growers Supply Market
              </h2>

              <p style={{ fontSize: 22, lineHeight: 1.6 }}>
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
                  gap: 14,
                  marginTop: 26,
                }}
              >
                <button
                  style={{ ...buttonStyle, background: "#15803d", color: "#fff" }}
                  onClick={() => setPage("guest")}
                >
                  Enter Experience
                </button>

                <button
                  style={{ ...buttonStyle, background: "#0f766e", color: "#fff" }}
                  onClick={() => setPage("marketplace")}
                >
                  Marketplace
                </button>

                <button
                  style={{ ...buttonStyle, background: "#7c3aed", color: "#fff" }}
                  onClick={() => setPage("grower")}
                >
                  Growers
                </button>

                <button
                  style={{ ...buttonStyle, background: "#1d4ed8", color: "#fff" }}
                  onClick={() => setPage("youth")}
                >
                  Youth Workforce
                </button>

                <button
                  style={{ ...buttonStyle, background: "#b45309", color: "#fff" }}
                  onClick={() => setPage("partners")}
                >
                  Partners
                </button>

                <button
                  style={{ ...buttonStyle, background: "#be123c", color: "#fff" }}
                  onClick={() => window.open("https://www.eventbrite.com", "_blank")}
                >
                  Register at Eventbrite
                </button>
              </div>

              <p style={{ marginTop: 24, opacity: 0.9 }}>
                Developed by Bronson Family Farm • Farm & Family Alliance • Parker Farms
              </p>
            </div>
          </div>
        );
    }
  }, [page]);

  return content;
}
