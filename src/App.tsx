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

const imageCandidates: Record<ImageKey, string[]> = {
  hero: ["/GrowArea.jpg", "/SAM_0220.JPG", "/SAM_0221.JPG"],
  guest: ["/GrowArea.jpg", "/SAM_0220.JPG"],
  customer: ["/SAM_0238.JPG", "/SAM_0229.JPG"],
  marketplace: ["/SAM_0229.JPG", "/SAM_0238.JPG"],
  grower: ["/SAM_0220.JPG", "/SAM_0221.JPG"],
  youth: ["/SAM_0226.JPG", "/SAM_0225.JPG"],
  partner: ["/SAM_0225.JPG", "/SAM_0226.JPG"],
  volunteer: ["/SAM_0226.JPG", "/SAM_0225.JPG"],
  produce: ["/SAM_0238.JPG", "/SAM_0229.JPG"],
  seedlings: ["/SAM_0225.JPG", "/SAM_0226.JPG"],
};

const tourOrder: View[] = [
  "guest",
  "customer",
  "marketplace",
  "grower",
  "youth",
  "partner",
  "volunteer",
  "summary",
];

function SmartImage({ imageKey, alt, className = "" }: any) {
  const [idx, setIdx] = useState(0);
  const imgs = imageCandidates[imageKey];

  return (
    <img
      src={imgs[idx]}
      className={className}
      alt={alt}
      onError={() => {
        if (idx < imgs.length - 1) setIdx(idx + 1);
      }}
    />
  );
}

function App() {
  const [view, setView] = useState<View>("home");
  const [tourIndex, setTourIndex] = useState(0);

  const activeView = view === "tour" ? tourOrder[tourIndex] : view;

  const go = (v: View) => {
    if (v === "tour") {
      setTourIndex(0);
      setView("tour");
    } else {
      setView(v);
    }
    window.scrollTo(0, 0);
  };

  const next = () => {
    if (tourIndex < tourOrder.length - 1) setTourIndex(tourIndex + 1);
  };

  const prev = () => {
    if (tourIndex > 0) setTourIndex(tourIndex - 1);
  };

  return (
    <div className="app">
      <style>{styles}</style>

      <header className="topbar">
        <button onClick={() => go("home")}>Bronson Family Farm</button>
        <div>
          <button onClick={() => go("marketplace")}>Marketplace</button>
          <button onClick={() => go("grower")}>Growers</button>
          <button onClick={() => go("youth")}>Youth</button>
        </div>
      </header>

      {activeView === "home" && (
        <section className="hero">
          <SmartImage imageKey="hero" className="heroImg" />
          <div className="overlay" />
          <div className="heroText">
            <h1>Bronson Family Farm</h1>
            <p>Food · Family · Workforce · Marketplace</p>
            <button onClick={() => go("tour")}>Start Experience</button>
          </div>
        </section>
      )}

      {activeView === "marketplace" && (
        <section className="section">
          <h2>Marketplace</h2>
          <div className="grid">
            <div>
              <SmartImage imageKey="seedlings" />
              <h3>Seedlings</h3>
            </div>
            <div>
              <SmartImage imageKey="produce" />
              <h3>Produce</h3>
            </div>
            <div>
              <SmartImage imageKey="marketplace" />
              <h3>Local Goods</h3>
            </div>
          </div>
        </section>
      )}

      {activeView === "grower" && (
        <section className="section">
          <SmartImage imageKey="grower" />
          <h2>Growers</h2>
          <p>Connect to market and opportunity.</p>
          <button onClick={() => go("marketplace")}>Enter Marketplace</button>
        </section>
      )}

      {activeView === "youth" && (
        <section className="section">
          <SmartImage imageKey="youth" />
          <h2>Youth Workforce</h2>
          <p>Real work. Real skills.</p>
        </section>
      )}

      {view === "tour" && (
        <div className="tourNav">
          <button onClick={prev}>Back</button>
          <button onClick={next}>Next</button>
        </div>
      )}
    </div>
  );
}

const styles = `
body { margin:0; font-family: serif; }
.topbar { display:flex; justify-content:space-between; padding:10px; background:#eee; }
.hero { position:relative; height:80vh; }
.heroImg { width:100%; height:100%; object-fit:cover; }
.overlay { position:absolute; inset:0; background:rgba(0,0,0,0.5); }
.heroText { position:absolute; color:white; top:30%; left:10%; }
.section { padding:40px; }
.grid { display:flex; gap:20px; }
img { width:100%; border-radius:10px; }
`;

export default App;
