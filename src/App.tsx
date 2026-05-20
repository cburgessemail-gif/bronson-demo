<div className="content">

  <div className="eyebrow">{ui.demo[language]}</div>

  <h2 className="slide-title">
    {slide.title[language]}
  </h2>

  <p className="subtitle">
    {slide.subtitle[language]}
  </p>

  <div className="ecosystem-grid">

    {/* PURPOSE */}
    <div className="ecosystem-box">
      <div className="section-title">
        Purpose
      </div>

      <div className="section-text">
        {slide.need[language]}
      </div>
    </div>

    {/* JOURNEY */}
    <div className="ecosystem-box">
      <div className="section-title">
        Journey
      </div>

      <div className="journey-list">

        {slide.journey.map((step, i) => (
          <div
            className="journey-step"
            key={`${slide.id}-${i}`}
          >
            <div className="journey-number">
              {i + 1}
            </div>

            <div className="journey-text">
              {step[language]}
            </div>
          </div>
        ))}

      </div>
    </div>

    {/* BENEFITS */}
    <div className="ecosystem-box">
      <div className="section-title">
        Benefits
      </div>

      <div className="benefits-list">

        {slide.benefits?.map((benefit, i) => (
          <div
            className="benefit-row"
            key={`${slide.id}-benefit-${i}`}
          >
            <div className="benefit-dot" />

            <div className="benefit-text">
              {benefit[language]}
            </div>
          </div>
        ))}

      </div>
    </div>

    {/* ECOSYSTEM CONNECTION */}
    <div className="ecosystem-box">
      <div className="section-title">
        Ecosystem Connection
      </div>

      <div className="section-text">
        {slide.connection?.[language]}
      </div>
    </div>

  </div>

  {/* FINAL DECISION */}
  <div className="decision">
    <div className="section-title">
      Final Decision
    </div>

    <div className="decision-text">
      {slide.decision[language]}
    </div>
  </div>

</div>
