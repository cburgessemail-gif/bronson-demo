<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 18,
    marginTop: 26,
  }}
>
  <div
    style={{
      ...panelStyle,
      padding: 16,
    }}
  >
    <div style={sectionHeadingStyle}>{t.tour}</div>

    <div
      style={{
        width: "100%",
        height: 12,
        borderRadius: 999,
        background: "rgba(255,255,255,0.12)",
        overflow: "hidden",
        marginBottom: 14,
      }}
    >
      <div
        style={{
          width: `${((tourStep + 1) / tourSequence.length) * 100}%`,
          height: "100%",
          borderRadius: 999,
          background: "linear-gradient(90deg, #86a96f, #d1b06b)",
          transition: "width 500ms ease",
        }}
      />
    </div>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      {tourSequence.slice(0, 7).map((step, idx) => {
        const active = tourOn && idx === tourStep;
        const isHome = step === "home";
        return (
          <div
            key={`${step}-${idx}`}
            style={{
              padding: "8px 12px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.04em",
              background: active
                ? "linear-gradient(135deg, #6c8f53, #8ea86c)"
                : "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#fff",
            }}
          >
            {isHome ? "Entrance" : pathwayLabels[step as PathwayKey]}
          </div>
        );
      })}
    </div>
  </div>

  <div>
    <div style={sectionHeadingStyle}>{t.language}</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {(Object.keys(translations) as Lang[]).map((language) => (
        <button
          key={language}
          onClick={() => setLang(language)}
          style={pillButton(lang === language)}
        >
          {language}
        </button>
      ))}
    </div>
  </div>

  <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
    <div>
      <div style={sectionHeadingStyle}>{t.voice}</div>
      <button onClick={() => setVoiceOn((v) => !v)} style={pillButton(voiceOn)}>
        {voiceOn ? t.on : t.off}
      </button>
    </div>

    <div>
      <div style={sectionHeadingStyle}>{t.tour}</div>
      <button
        onClick={() => {
          setTourOn((v) => !v);
          if (!tourOn) {
            setTourStep(0);
            setView("home");
          }
        }}
        style={pillButton(tourOn)}
      >
        {tourOn ? t.stopTour : t.startTour}
      </button>
    </div>
  </div>
</div>
