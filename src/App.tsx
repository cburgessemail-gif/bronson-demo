// NEXT STRONGEST BUILD
// ADD A CLEAN JOURNEY BAND UNDER THE TRUSTED PARTNERS SECTION
// PASTE THIS DIRECTLY BELOW THE TRUSTED PARTNERS BLOCK ON HOME PAGE

<div style={{ marginTop: 34 }}>
  <div
    style={{
      fontSize: 12,
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "rgba(194,244,204,0.82)",
      marginBottom: 18,
    }}
  >
    Explore the Ecosystem
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4,minmax(0,1fr))",
      gap: 16,
    }}
  >
    {[
      {
        step: "01",
        title: "Enter the Story",
        text: "Understand the land, the mission, and the reason this ecosystem exists.",
        action: () => setPage("guest"),
      },
      {
        step: "02",
        title: "Visit Marketplace",
        text: "Move into fresh produce, Bubble Babies™, recipes, and healthier choices.",
        action: () => setPage("customer"),
      },
      {
        step: "03",
        title: "Grow With Us",
        text: "Explore planning, production, market pathways, and shared grower support.",
        action: () => setPage("grower"),
      },
      {
        step: "04",
        title: "Build the Future",
        text: "See how youth workforce and supervision create training and opportunity.",
        action: () => setPage("youth"),
      },
    ].map((item) => (
      <button
        key={item.step}
        onClick={item.action}
        style={{
          ...glass,
          padding: 22,
          borderRadius: 26,
          minHeight: 220,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: "#bdf2ca",
              textTransform: "uppercase",
            }}
          >
            {item.step}
          </div>

          <div
            style={{
              marginTop: 14,
              fontSize: 24,
              lineHeight: 1.08,
              fontWeight: 760,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            {item.title}
          </div>

          <div
            style={{
              marginTop: 14,
              fontSize: 17,
              lineHeight: 1.58,
              color: "rgba(255,255,255,0.78)",
              fontWeight: 420,
            }}
          >
            {item.text}
          </div>
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          Open →
        </div>
      </button>
    ))}
  </div>
</div>
