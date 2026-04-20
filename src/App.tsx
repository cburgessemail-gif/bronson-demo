// NEXT STRONGEST MOVE
// MAKE PARTNER SECTION LOOK PREMIUM WITH REAL LOGO WALL FEEL
// REPLACE ENTIRE TRUSTED PARTNERS BLOCK WITH THIS

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
      {[
        "Home Depot",
        "Petitti Gardens",
        "Elliott's Garden Center",
        "Central State",
        "City of Youngstown",
        "Youngstown Area Jewish Federation",
        "GrownBy",
        "Farm & Family Alliance",
      ].map((name) => (
        <div
          key={name}
          style={{
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
            minHeight: 78,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "10px 12px",
            color: "rgba(255,255,255,0.84)",
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 1.25,
          }}
        >
          {name}
        </div>
      ))}
    </div>
  </div>
</div>
