function TrustedPartners() {
  const partnerLogos = [
    { name: "Home Depot", src: "/logos/home-depot.png" },
    { name: "Petitti Gardens", src: "/logos/petitti-gardens.png" },
    { name: "Elliott's Garden Center", src: "/logos/elliotts-garden-center.png" },
    { name: "Central State", src: "/logos/central-state.png" },
    { name: "City of Youngstown", src: "/logos/city-of-youngstown.png" },
    { name: "Youngstown Area Jewish Federation", src: "/logos/jewish-federation.png" },
    { name: "GrownBy", src: "/logos/grownby.png" },
    { name: "Farm & Family Alliance", src: "/logos/farm-family-alliance.png" },
  ];

  return (
    <div style={{ marginTop: 42 }}>
      <div
        style={{
          fontSize: 12,
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: "rgba(194,244,204,0.82)",
          marginBottom: 18,
        }}
      >
        Trusted Partners
      </div>

      <div
        style={{
          ...glass,
          padding: isMobile ? 18 : 24,
          borderRadius: 28,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(2,1fr)"
              : "repeat(4,minmax(0,1fr))",
            gap: 14,
          }}
        >
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              style={{
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                minHeight: 96,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 18px",
              }}
            >
              <img
                src={partner.src}
                alt={partner.name}
                style={{
                  maxWidth: "140px",
                  maxHeight: "44px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
