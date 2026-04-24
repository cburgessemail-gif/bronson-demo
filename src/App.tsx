import React, { useMemo, useState } from "react";

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
  marketplace: "/images/Bronson Family Farm market flyer.png",
  grower: "/images/grower-field.jpg",
  youth: "/images/youth-workforce.jpg",
  partners: "/images/partners-community.jpg",
  value: "/images/Youngstown Farmers Market_0423.png",
};

const shell: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "28px",
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: "980px",
  background: "rgba(255,255,255,.78)",
  color: "#111827",
  borderRadius: "18px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,.35)",
};

const btn: React.CSSProperties = {
  padding: "12px 18px",
  border: "none",
  borderRadius: "10px",
  fontWeight: 700,
  cursor: "pointer",
  color: "#fff",
};

function bg(image: string): React.CSSProperties {
  return {
    ...shell,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
}

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
    <div style={bg(image)}>
      <div style={card}>
        <h1 style={{ fontSize: 42 }}>{title}</h1>
        <p style={{ fontSize: 21, lineHeight: 1.6 }}>{body}</p>
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
            body="Experience the land, purpose, and vision."
            image={IMAGES.guest}
            next={() => setPage("customer")}
          />
        );

      case "customer":
        return (
          <Screen
            title="Customer Pathway"
            body="Fresh produce, healthier choices, and nutrition."
            image={IMAGES.customer}
            next={() => setPage("marketplace")}
          />
        );

      case "marketplace":
        return (
          <Screen
            title="Marketplace"
            body="Support growers. Shop local."
            image={IMAGES.marketplace}
            next={() => setPage("grower")}
          />
        );

      case "grower":
        return (
          <Screen
            title="Grower Pathway"
            body="Connect producers to opportunity."
            image={IMAGES.grower}
            next={() => setPage("youth")}
          />
        );

      case "youth":
        return (
          <Screen
            title="Youth Workforce"
            body="Build skills and future readiness."
            image={IMAGES.youth}
            next={() => setPage("partners")}
          />
        );

      case "partners":
        return (
          <Screen
            title="Partners"
            body="Organizations align resources."
            image={IMAGES.partners}
            next={() => setPage("value")}
          />
        );

      case "value":
        return (
          <Screen
            title="Value-Added Producers"
            body="Entrepreneurs create value."
            image={IMAGES.value}
            next={() => setPage("home")}
          />
        );

      default:
        return (
          <div style={bg(IMAGES.home)}>
            <div style={card}>
              <h1 style={{ fontSize: 56 }}>Bronson Family Farm</h1>

              <h2 style={{ color: "#92400e" }}>
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
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(220px,1fr))",
                  gap: "14px",
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
                    window.open("https://www.eventbrite.com", "_blank")
                  }
                >
                  Register at Eventbrite
                </button>
              </div>

              <p style={{ marginTop: 24 }}>
                Developed by Bronson Family Farm • Farm & Family Alliance • Parker Farms
              </p>
            </div>
          </div>
        );
    }
  }, [page]);

  return view;
}
