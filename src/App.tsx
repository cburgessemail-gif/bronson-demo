function TrustedPartners() {
  const partnerLogos = [
    {
      name: "Home Depot",
      src: "https://logo.clearbit.com/homedepot.com",
    },
    {
      name: "Petitti Gardens",
      src: "https://logo.clearbit.com/petittigardencenter.com",
    },
    {
      name: "Elliott's Garden Center",
      src: "https://logo.clearbit.com/elliottsgardencenter.com",
    },
    {
      name: "Central State",
      src: "https://logo.clearbit.com/centralstate.edu",
    },
    {
      name: "City of Youngstown",
      src: "https://logo.clearbit.com/youngstownohio.gov",
    },
    {
      name: "Youngstown Area Jewish Federation",
      src: "https://logo.clearbit.com/jewishyoungstown.org",
    },
    {
      name: "GrownBy",
      src: "https://logo.clearbit.com/grownby.com",
    },
    {
      name: "Farm & Family Alliance",
      src: "",
    },
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
                minHeight: 92,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 16px",
              }}
            >
              {partner.src ? (
                <img
                  src={partner.src}
                  alt={partner.name}
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const fallback = img.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                  style={{
                    maxWidth: "140px",
                    maxHeight: "42px",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.92,
                  }}
                />
              ) : null}

              <div
                style={{
                  display: partner.src ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "rgba(255,255,255,0.84)",
                  fontSize: 15,
                  fontWeight: 700,
                  lineHeight: 1.25,
                  width: "100%",
                }}
              >
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
