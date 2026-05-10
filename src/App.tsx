import React, { useMemo, useState } from "react";

const eventbriteUrl =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const pathways = [
  ["guest", "Guest", "🏡", "/SAM_0220.JPG", "Food. Wellness. Opportunity.", "Bronson Family Farm reconnects communities to food security, education, outdoor engagement, and regional collaboration."],
  ["customer", "Customer", "🧺", "/SAM_0249.JPG", "Healthy Communities Begin With Healthy Food.", "Fresh food access, nutrition awareness, and community participation strengthen long-term wellness and food security."],
  ["marketplace", "Marketplace", "🥬", "/SAM_0255.JPG", "Local Food Creates Local Strength.", "The marketplace transforms participation into food access, economic circulation, grower opportunity, and sustainability."],
  ["grower", "Grower", "🌱", "/SAM_0281.JPG", "Unused Land Can Become Community Infrastructure.", "Growers access tools, knowledge, seedlings, demonstrations, collaboration, and pathways into local participation."],
  ["youth", "Youth Workforce", "💼", "/Samaeera2.jpg", "Outdoor Work Becomes Confidence.", "Young people develop leadership, responsibility, workforce readiness, and stewardship through hands-on participation."],
  ["partners", "Partners", "🤝", "/SAM_0301.JPG", "Collaboration Strengthens Communities.", "Regional partnerships connect food security, wellness, workforce development, education, and sustainability."],
  ["value", "Value-Added", "🏭", "/culniary_edibleflowers.jpeg", "Food Can Become Enterprise.", "Local products, prepared foods, packaging, and entrepreneurship strengthen regional economic participation."],
  ["investment", "Investment", "💚", "/GrowArea2.jpg", "An Investment In Food Security Is An Investment In Community Health.", "Support expands food access, youth workforce development, wellness programming, infrastructure, and regional resilience."],
] as const;

export default function App() {
  const [active, setActive] = useState(pathways[0]);
  const index = pathways.findIndex((p) => p[0] === active[0]);
  const progress = useMemo(() => Math.round(((index + 1) / pathways.length) * 100), [index]);
  const next = pathways[(index + 1) % pathways.length];

  return (
    <>
      <style>{css}</style>

      <main>
        <section className="hero">
          <img src="/GrowArea.jpg" className="heroImg" />
          <div className="overlay" />
          <div className="heroContent">
            <div className="pill">Growers Supply Market · May 16, 2026 · By Invitation Only</div>
            <h1>Food Security<br />Begins Locally.</h1>
            <p>
              Bronson Family Farm is building a regional ecosystem for food security,
              wellness, workforce development, entrepreneurship, and community resilience
              throughout Youngstown and Mahoning County.
            </p>
            <div className="actions">
              <a href="#guided" className="primary">Begin Guided Experience</a>
              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="secondary">Register For Event</a>
            </div>
          </div>
        </section>

        <section id="guided" className="section">
          <p className="kicker">Guided Experience</p>
          <h2>Every Pathway Strengthens The Ecosystem.</h2>
          <p className="lead">
            Explore how food security, wellness, workforce development, entrepreneurship,
            and community collaboration connect together through Bronson Family Farm.
          </p>

          <div className="progressText">
            <span>Guided Tour Progress</span><span>{progress}%</span>
          </div>
          <div className="bar"><div style={{ width: `${progress}%` }} /></div>

          <div className="cards">
            {pathways.map((p) => (
              <button
                key={p[0]}
                onClick={() => setActive(p)}
                className={active[0] === p[0] ? "card active" : "card"}
              >
                <div className="icon">{p[2]}</div>
                <strong>{p[1]}</strong>
                <span>{p[4]}</span>
              </button>
            ))}
          </div>

          <div className="feature">
            <img src={active[3]} />
            <div className="featureText">
              <p className="kicker">{active[1]}</p>
              <h3>{active[4]}</h3>
              <p>{active[5]}</p>

              <div className="miniGrid">
                <div><strong>Food Security</strong><span>Healthy food, growers, education, and participation.</span></div>
                <div><strong>Community Wellness</strong><span>Wellness, workforce, collaboration, and opportunity.</span></div>
              </div>

              <button onClick={() => setActive(next)} className="primary button">
                Continue to {next[1]}
              </button>
            </div>
          </div>
        </section>

        <section className="impact">
          <div><span>Food Security</span><h3>Food Access Is Community Infrastructure.</h3><p>Agriculture, education, wellness, workforce development, and participation strengthen long-term food security.</p></div>
          <div><span>Healthcare</span><h3>Food Security Is Preventive Healthcare.</h3><p>Healthy food access, outdoor engagement, workforce opportunity, and community stability are interconnected.</p></div>
          <div><span>Transformation</span><h3>Transformation Begins With Vision.</h3><p>Overlooked land becomes a destination for food security, wellness, entrepreneurship, education, and agritourism.</p></div>
        </section>

        <section className="final">
          <p className="kicker gold">Final Message</p>
          <h2>This Is More Than A Farm.</h2>
          <p>
            Bronson Family Farm is building community infrastructure designed to grow food,
            opportunity, wellness, sustainability, and future generations throughout the Mahoning Valley.
          </p>
          <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="primary">Register For Event</a>
        </section>
      </main>
    </>
  );
}

const css = `
*{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:#F5F1E6;color:#1C1C1C;font-family:Inter,Arial,sans-serif}
.hero{position:relative;min-height:100vh;overflow:hidden;display:flex;align-items:center}
.heroImg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.overlay{position:absolute;inset:0;background:rgba(0,0,0,.58)}
.heroContent{position:relative;z-index:2;max-width:1100px;padding:80px 6vw;color:white}
.pill{display:inline-block;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.12);padding:12px 20px;border-radius:999px;font-weight:800;margin-bottom:30px}
h1{font-size:clamp(58px,9vw,112px);line-height:.92;margin:0;font-weight:950;letter-spacing:-4px}
.hero p,.lead{font-size:24px;line-height:1.55;max-width:900px}
.actions{display:flex;gap:16px;flex-wrap:wrap;margin-top:36px}
.primary,.secondary{display:inline-block;text-decoration:none;border-radius:999px;padding:18px 28px;font-weight:900;font-size:18px}
.primary{background:#E7D7A3;color:#173C2D;border:0}
.secondary{color:white;border:1px solid rgba(255,255,255,.45);background:rgba(255,255,255,.12)}
.section{max-width:1280px;margin:auto;padding:90px 6vw}
.kicker{text-transform:uppercase;letter-spacing:.25em;font-weight:950;color:#7b705f;font-size:14px}
h2{font-size:clamp(42px,6vw,72px);line-height:1;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-2px}
.progressText{display:flex;justify-content:space-between;font-weight:900;color:#173C2D;margin-top:40px}
.bar{height:12px;background:#ddd2bd;border-radius:99px;overflow:hidden;margin:10px 0 36px}.bar div{height:100%;background:#173C2D}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:45px}
.card{text-align:left;border:0;border-radius:30px;padding:24px;background:white;color:#173C2D;box-shadow:0 14px 35px rgba(0,0,0,.09);cursor:pointer}
.card.active{background:#173C2D;color:white}.icon{font-size:32px;margin-bottom:16px}.card strong{display:block;text-transform:uppercase;letter-spacing:.16em;font-size:13px}.card span{display:block;margin-top:12px;font-size:21px;font-weight:950;line-height:1.1}
.feature{display:grid;grid-template-columns:1fr 1fr;gap:40px}.feature>img{width:100%;height:640px;object-fit:cover;border-radius:42px;box-shadow:0 22px 45px rgba(0,0,0,.18)}
.featureText{background:white;border-radius:42px;padding:50px;box-shadow:0 22px 45px rgba(0,0,0,.14);display:flex;flex-direction:column;justify-content:center}
h3{font-size:clamp(38px,5vw,64px);line-height:1;margin:16px 0;color:#173C2D;font-weight:950}.featureText p{font-size:24px;line-height:1.55;color:#555}
.miniGrid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}.miniGrid div{background:#F5F1E6;border-radius:24px;padding:22px}.miniGrid strong{display:block;color:#173C2D;font-size:19px}.miniGrid span{display:block;margin-top:8px;color:#666;line-height:1.5}
.button{border:0;cursor:pointer;width:max-content}
.impact{background:#173C2D;color:white;display:grid;grid-template-columns:repeat(3,1fr);gap:28px;padding:90px 6vw}.impact div{background:rgba(255,255,255,.1);border-radius:36px;padding:36px}.impact span,.gold{color:#E7D7A3}.impact h3{color:white;font-size:42px}.impact p{font-size:20px;line-height:1.6;color:rgba(255,255,255,.82)}
.final{text-align:center;background:linear-gradient(135deg,#10281d,#173C2D,#2a241b);color:white;padding:110px 6vw}.final h2{color:white}.final p{font-size:25px;line-height:1.6;max-width:900px;margin:30px auto}
@media(max-width:900px){.cards,.feature,.impact,.miniGrid{grid-template-columns:1fr}.feature>img{height:420px}h1{letter-spacing:-2px}.hero p,.lead,.featureText p{font-size:20px}.featureText{padding:32px}}
`;
