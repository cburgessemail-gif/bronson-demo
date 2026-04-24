import React, { useMemo, useState } from "react";

/**
 * Bronson Family Farm Final Demo
 * IMAGE-ONLY UPDATED VERSION
 * No redesign. Same structure. Relevant category images only.
 *
 * Put these files in /public/images/
 *
 * hero-aerial.jpg
 * customer-produce.jpg
 * marketplace-storefront.jpg
 * grower-field.jpg
 * youth-workforce.jpg
 * partners-community.jpg
 * value-added-products.jpg
 */

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
  home: "/images/hero-aerial.jpg",
  guest: "/images/hero-aerial.jpg",
  customer: "/images/customer-produce.jpg",
  marketplace: "/images/marketplace-storefront.jpg",
  grower: "/images/grower-field.jpg",
  youth: "/images/youth-workforce.jpg",
  partners: "/images/partners-community.jpg",
  value: "/images/value-added-products.jpg",
};

const shell: React.CSSProperties = {
  minHeight: "100vh",
  color: "#fff",
  padding: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: "980px",
  background: "rgba(0,0,0,.58)",
  border: "1px solid rgba(255,255,255,.14)",
  borderRadius: "18px",
  padding: "28px",
  backdropFilter: "blur(6px)",
};

const btn: React.CSSProperties = {
  padding: "12px 18px",
  border: "none",
  borderRadius: "10px",
  fontWeight: 700,
  cursor: "pointer",
  color: "#fff",
};

function Screen({
  title,
  body,
  image,
  next,
}: {
  title: string;
  body: string;
  image: string;
  next?: () => void;
}) {
  return (
    <div
      style={{
        ...shell,
        backgroundImage: `linear-gradient(rgba(0,0,0,.42),rgba(0,0,0,.58)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={card}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>{title}</h1>

        <p
          style={{
            fontSize: "21px",
            lineHeight: 1.6,
            color: "#f3f3f3",
            marginBottom: "22px",
          }}
        >
          {body}
        </p>

        {next && (
          <button
            onClick={next}
            style={{ ...btn, background: "#e11d48" }}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const view = useMemo(() => {
    switch (page) {
      case "guest":
        return (
          <Screen
            title="Guest Experience"
            body="Experience the land, the vision, and the purpose. Bronson Family Farm turns land into opportunity, health, and community growth."
            image={IMAGES.guest}
            next={() => setPage("customer")}
          />
        );

      case "customer":
        return (
          <Screen
            title="Customer Pathway"
            body="Fresh produce, healthier choices, local nutrition, and a reason to return again and again."
            image={IMAGES.customer}
            next={() => setPage("marketplace")}
          />
        );

      case "marketplace":
        return (
          <Screen
            title="Marketplace"
            body="Convert community interest into buying power. Support growers, families, and long-term sustainability."
            image={IMAGES.marketplace}
            next={() => setPage("grower")}
          />
        );

      case "grower":
        return (
          <Screen
            title="Grower Pathway"
            body="Connect producers to land, training, customers, and market opportunity."
            image={IMAGES.grower}
            next={() => setPage("youth")}
          />
        );

      case "youth":
        return (
          <Screen
            title="Youth Workforce"
            body="Build skills, discipline, teamwork, and future readiness through real-world agricultural experience."
            image={IMAGES.youth}
            next={() => setPage("partners")}
          />
        );

      case "partners":
        return (
          <Screen
            title="Partners"
            body="Businesses, nonprofits, educators, and civic leaders align resources for community benefit."
            image={IMAGES.partners}
            next={() => setPage("value")}
          />
        );

      case "value":
        return (
          <Screen
            title="Value-Added Producers"
            body="Food makers, crafters, processors, and entrepreneurs extend farm value into new products and income."
            image={IMAGES.value}
            next={() => setPage("home")}
          />
        );

      default:
        return (
          <div
            style={{
              ...shell,
              backgroundImage: `linear-gradient(rgba(0,0,0,.38),rgba(0,0,0,.62)), url(${IMAGES.home})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={card}>
              <h1 style={{ fontSize: "56px", marginBottom: "8px" }}>
                Bronson Family Farm
              </h1>

              <h2
                style={{
                  marginTop: 0,
                  fontSize: "28px",
                  color: "#facc15",
                }}
              >
                Growers Supply Market
              </h2>

              <p style={{ fontSize: "22px", lineHeight: 1.6 }}>
                May 16, 2026 • 9:00 AM – 2:00 PM
                <br />
                Youngstown, Ohio
                <br />
                <strong>By Invitation Only</strong>
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(220px,1fr))",
                  gap: "14px",
                  marginTop: "24px",
                }}
              >
                <button
                  style={{ ...btn, background: "#15803d" }}
                  onClick={() => setPage("guest")}
                >
                  Enter Experience
                </button>

                <button
                  style={{ ...btn, background: "#0f766e" }}
                  onClick={() => setPage("marketplace")}
                >
                  Marketplace
                </button>

                <button
                  style={{ ...btn, background: "#7c3aed" }}
                  onClick={() => setPage("grower")}
                >
                  Growers
                </button>

                <button
                  style={{ ...btn, background: "#1d4ed8" }}
                  onClick={() => setPage("youth")}
                >
                  Youth Workforce
                </button>

                <button
                  style={{ ...btn, background: "#b45309" }}
                  onClick={() => setPage("partners")}
                >
                  Partners
                </button>

                <button
                  style={{ ...btn, background: "#be123c" }}
                  onClick={() =>
                    window.open(
                      "https://www.eventbrite.com",
                      "_blank"
                    )
                  }
                >
                  Register at Eventbrite
                </button>
              </div>

              <p style={{ marginTop: "24px", opacity: 0.92 }}>
                Developed by Bronson Family Farm • Farm & Family Alliance •
                Parker Farms
              </p>
            </div>
          </div>
        );
    }
  }, [page]);

  return view;
}
