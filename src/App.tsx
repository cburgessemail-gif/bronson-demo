import React, { useMemo, useState } from "react";

type Lang = "en" | "es" | "fr" | "tl" | "it" | "he";
type View =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

type ImageKey =
  | "hero"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "volunteer";

const imageMap: Record<ImageKey, string> = {
  hero: "/images/GrowArea.jpg",
  guest: "/images/GrowArea.jpg",
  customer: "/images/SAM_0226.JPG",
  marketplace: "/images/SAM_0229.JPG",
  grower: "/images/GrowArea.jpg",
  youth: "/images/SAM_0238.JPG",
  partner: "/images/SAM_0225.JPG",
  volunteer: "/images/SAM_0226.JPG",
};

function App() {
  const [view, setView] = useState<View>("home");

  const go = (v: View) => {
    setView(v);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ fontFamily: "Georgia", background: "#f6f0df" }}>
      <header style={{ padding: 20, display: "flex", justifyContent: "space-between" }}>
        <strong>Bronson Family Farm</strong>
        <div>
          <button onClick={() => go("marketplace")}>Enter Marketplace</button>
          <button onClick={() => go("grower")}>Meet the Grower Pathway</button>
          <button onClick={() => go("youth")}>Youth Workforce</button>
        </div>
      </header>

      {view === "home" && (
        <div style={{ padding: 40 }}>
          <h1>Choose a pathway or follow the guided tour.</h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {(["guest","customer","marketplace","grower","youth","partner","volunteer"] as View[]).map(v => (
              <div key={v} onClick={() => go(v)} style={{ background: "#fff", borderRadius: 12, cursor: "pointer" }}>
                <img src={imageMap[v as ImageKey]} style={{ width: "100%", height: 150, objectFit: "cover" }} />
                <div style={{ padding: 12 }}>
                  <h3 style={{ margin: 0 }}>{v.toUpperCase()}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view !== "home" && (
        <div style={{ padding: 40 }}>
          <h1>{view.toUpperCase()}</h1>
          <img src={imageMap[view as ImageKey]} style={{ width: "100%", maxHeight: 400, objectFit: "cover" }} />
          <br /><br />
          <button onClick={() => go("home")}>Back</button>
        </div>
      )}
    </div>
  );
}

export default App;
