// ONLY CHANGE IS IN THE SECTION HEADER PARAGRAPH

// ...everything above remains EXACTLY the same

// FIND THIS SECTION:

<section className="pathGridSection">
  <div className="sectionHeader">
    <h2>{t.choosePath}</h2>

    {/* 🔥 UPDATED LINE ONLY */}
    <p>
      Start with the guided tour for the full story, or choose the pathway that matches how someone enters the ecosystem.
    </p>

  </div>

  <div className="pathGrid">
    {(["guest", "customer", "marketplace", "grower", "youth", "partner", "volunteer"] as const).map((key) => (
      <button className="pathCard" key={key} onClick={() => go(key)}>
        <SmartImage imageKey={pathways[key].image} alt={pathways[key].label} className="cardImg" />
        <span>{pathways[key].label}</span>
        <small>{pathways[key].sound}</small>
      </button>
    ))}
  </div>
</section>

// ...everything below remains EXACTLY the same
