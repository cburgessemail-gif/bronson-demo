import React, { useMemo, useState } from "react";

type Lang = "en" | "es" | "fr" | "tl" | "it" | "he";
type View =
  | "home"
  | "tour"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer"
  | "summary";

type ImageKey =
  | "hero"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer"
  | "produce"
  | "seedlings";

/* 🔴 FIXED IMAGE MAPPING ONLY */
const imageCandidates: Record<ImageKey, string[]> = {
  hero: ["/GrowArea.jpg"],
  guest: ["/GrowArea.jpg"],
  customer: ["/SAM_0238.JPG"],
  marketplace: ["/SAM_0229.JPG"],
  grower: ["/SAM_0220.JPG"],
  youth: ["/SAM_0223.JPG"],
  partner: ["/SAM_0225.JPG"],
  volunteer: ["/SAM_0249.JPG"],
  produce: ["/SAM_0238.JPG"],
  seedlings: ["/SAM_0226.JPG"],
};

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "tl", label: "Tagalog" },
  { code: "it", label: "Italiano" },
  { code: "he", label: "עברית" },
];

const copy: Record<Lang, Record<string, string>> = {
  en: {
    welcome: "Welcome to Bronson Family Farm",
    subtitle:
      "A living ecosystem connecting food, families, growers, youth workforce, partners, and marketplace opportunity.",
    start: "Start the Guided Experience",
    marketplace: "Enter Marketplace",
    growers: "Meet the Grower Pathway",
    youth: "Youth Workforce",
    inviteOnly:
      "Growers Supply Market · May 16, 2026 · 9:00 AM–2:00 PM · By Invitation Only",
    choosePath: "Choose a pathway or follow the guided tour",
    backHome: "Back to Home",
    next: "Next",
    previous: "Previous",
    purpose: "Purpose",
    action: "Action",
    summary: "Summary",
  },
};

/* 🔴 SMART IMAGE — NO FALLBACK SWITCHING */
function SmartImage({
  imageKey,
  alt,
  className = "",
}: {
  imageKey: ImageKey;
  alt: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={imageCandidates[imageKey][0]}
      alt={alt}
    />
  );
}

const pathways = {
  guest: { label: "Guest Pathway", image: "guest" as ImageKey, sound: "Walk in as a visitor. Leave understanding the vision." },
  customer: { label: "Customer Pathway", image: "customer" as ImageKey, sound: "Fresh food becomes a repeat healthy choice." },
  marketplace: { label: "Marketplace", image: "marketplace" as ImageKey, sound: "Interest becomes purchasing power." },
  grower: { label: "Grower Pathway", image: "grower" as ImageKey, sound: "Grow more than food. Grow opportunity." },
  youth: { label: "Youth Workforce Pathway", image: "youth" as ImageKey, sound: "Young people build skills by doing real work." },
  partner: { label: "Partner Pathway", image: "partner" as ImageKey, sound: "Partners align resources for impact." },
  volunteer: { label: "Volunteer Pathway", image: "volunteer" as ImageKey, sound: "Volunteers turn vision into progress." },
};

function App() {
  const [view, setView] = useState<View>("home");
  const t = copy.en;

  return (
    <div className="app">
      <style>{styles}</style>

      <header className="topbar">
        <button className="brand" onClick={() => setView("home")}>
          Bronson Family Farm
        </button>

        <nav className="nav">
          <button onClick={() => setView("marketplace")}>
            {t.marketplace}
          </button>
          <button onClick={() => setView("grower")}>
            {t.growers}
          </button>
          <button onClick={() => setView("youth")}>
            {t.youth}
          </button>
        </nav>
      </header>

      {view === "home" ? (
        <main>
          <section className="hero">
            <SmartImage
              imageKey="hero"
              alt="Farm"
              className="heroImg"
            />
            <div className="heroOverlay" />
            <div className="heroContent">
              <h1>{t.welcome}</h1>
              <p className="lead">{t.subtitle}</p>
            </div>
          </section>

          <section className="pathGridSection">
            <h2>{t.choosePath}</h2>

            <div className="pathGrid">
              {Object.entries(pathways).map(([key, p]) => (
                <button
                  className="pathCard"
                  key={key}
                  onClick={() => setView(key as View)}
                >
                  <SmartImage
                    imageKey={p.image}
                    alt={p.label}
                    className="cardImg"
                  />
                  <span>{p.label}</span>
                  <small>{p.sound}</small>
                </button>
              ))}
            </div>
          </section>
        </main>
      ) : (
        <main>
          <section className="detailHero">
            <SmartImage
              imageKey={pathways[view as keyof typeof pathways]?.image}
              alt=""
              className="detailImg"
            />
          </section>

          <section className="bottomNav">
            <button onClick={() => setView("home")}>
              {t.backHome}
            </button>
          </section>
        </main>
      )}
    </div>
  );
}

const styles = `
body { margin:0; font-family:Georgia, serif; }
.hero { position:relative; height:400px; }
.heroImg { width:100%; height:100%; object-fit:cover; }
.heroOverlay { position:absolute; inset:0; background:rgba(0,0,0,.3); }
.heroContent { position:absolute; bottom:20px; left:20px; color:white; }
.pathGrid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:16px; }
.cardImg { width:100%; height:150px; object-fit:cover; }
`;

export default App;
