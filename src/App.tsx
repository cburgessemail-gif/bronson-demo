// FIX BOTH ISSUES NOW

// =====================================================
// 1. REDUCE ALL TITLES / HEADERS
// REPLACE THESE STYLE VALUES
// =====================================================

// HOME MAIN TITLE
fontSize: isMobile ? 46 : 82,
lineHeight: 0.94,
fontWeight: 700,
letterSpacing: "-0.04em",

// PAGE TITLES
fontSize: isMobile ? 34 : 58,
lineHeight: 0.98,
fontWeight: 700,
letterSpacing: "-0.03em",

// CARD TITLES
fontSize: 22,
lineHeight: 1.08,
fontWeight: 700,

// TILE TITLES
fontSize: 22,
lineHeight: 1.08,
fontWeight: 700,

// RIGHT HERO PANEL TITLE
fontSize: isMobile ? 30 : 40,
lineHeight: 1.06,
fontWeight: 700,

// =====================================================
// 2. REAL LOGOS (NOT TEXT)
// REPLACE TRUSTED PARTNERS BLOCK WITH THIS
// =====================================================

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
        "https://logo.clearbit.com/homedepot.com",
        "https://logo.clearbit.com/petittigardencenter.com",
        "https://logo.clearbit.com/centralstate.edu",
        "https://logo.clearbit.com/youngstownohio.gov",
        "https://logo.clearbit.com/jewishyoungstown.org",
        "https://logo.clearbit.com/grownby.com",
        "https://logo.clearbit.com/facebook.com",
        "https://logo.clearbit.com/google.com",
      ].map((src, i) => (
        <div
          key={i}
          style={{
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
            minHeight: 82,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 14,
          }}
        >
          <img
            src={src}
            style={{
              maxWidth: "120px",
              maxHeight: "42px",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
              opacity: 0.92,
            }}
          />
        </div>
      ))}
    </div>
  </div>
</div>
