import React, { useMemo, useState } from "react";

const eventbriteUrl =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const pathways = [
  {
    id: "guest",
    label: "Guest",
    icon: "🏡",
    image: "/SAM_0220.JPG",
    title: "Food. Wellness. Opportunity.",
    body: "Guests enter the farm experience through story, land, community, and the purpose behind Bronson Family Farm.",
    bullets: ["Invitation-only access", "Farm welcome experience", "Food security story", "Community connection"],
  },
  {
    id: "customer",
    label: "Customer",
    icon: "🧺",
    image: "/SAM_0249.JPG",
    title: "Healthy Communities Begin With Healthy Food.",
    body: "Customers connect to fresh food, seedlings, nutrition education, and repeat healthy choices.",
    bullets: ["Fresh produce", "Seedlings", "Bubble Babies™", "Nutrition awareness"],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: "🥬",
    image: "/SAM_0255.JPG",
    title: "Local Food Creates Local Strength.",
    body: "The marketplace converts interest into participation, sales, grower opportunity, and sustainability.",
    bullets: ["Grower tables", "Demonstrations", "Food access", "Regional marketplace"],
  },
  {
    id: "grower",
    label: "Grower",
    icon: "🌱",
    image: "/SAM_0281.JPG",
    title: "Unused Land Can Become Community Infrastructure.",
    body: "Growers access tools, knowledge, demonstrations, seedlings, and market participation.",
    bullets: ["Growing support", "Tools and supplies", "Peer learning", "Market pathways"],
  },
  {
    id: "youth",
    label: "Youth Workforce",
    icon: "💼",
    image: "/Samaeera2.jpg",
    title: "Outdoor Work Becomes Confidence.",
    body: "Youth build responsibility, readiness, confidence, and practical skills through farm-based work.",
    bullets: ["Workforce readiness", "Leadership", "Responsibility", "Hands-on learning"],
  },
  {
    id: "partners",
    label: "Partners",
    icon: "🤝",
    image: "/SAM_0301.JPG",
    title: "Collaboration Strengthens Communities.",
    body: "Partners align resources around food security, wellness, education, workforce, and sustainability.",
    bullets: ["City partners", "Education partners", "Health partners", "Community organizations"],
  },
  {
    id: "value",
    label: "Value-Added",
    icon: "🏭",
    image: "/culniary_edibleflowers.jpeg",
    title: "Food Can Become Enterprise.",
    body: "Value-added producers turn food, flowers, herbs, and local creativity into enterprise opportunities.",
    bullets: ["Prepared foods", "Edible flowers", "Packaging", "Entrepreneurship"],
  },
  {
    id: "investment",
    label: "Investment",
    icon: "💚",
    image: "/GrowArea2.jpg",
    title: "Investment In Food Security Is Investment In Community Health.",
    body: "Support expands infrastructure, food access, youth workforce, wellness, and long-term resilience.",
    bullets: ["Infrastructure", "Workforce", "Food access", "Community resilience"],
  },
];

const participants = [
  "Parker Farms",
  "BIOPIC / Sophia Buggs",
  "SMARTS",
  "Flying High Inc.",
  "Gates Drone Services",
  "Home Depot",
  "Elliott’s Garden Center",
  "Petitti Garden Centers",
  "Farm & Family Alliance Inc.",
];

function App() {
  const [active, setActive] = useState(pathways[0]);
  const index = pathways.findIndex((p) => p.id === active.id);
  const next = pathways[(index + 1) % pathways.length];
  const progress = useMemo(
    () => Math.round(((index + 1) / pathways.length) * 100),
    [index]
  );

  return (
    <>
      <style>{css}</style>

      <main>
        <nav className="nav">
          <div>
            <strong>Bronson Family Farm</strong>
            <span>Community Food Ecosystem</span>
          </div>
          <div className="navLinks">
            <a href="#experience">Experience</a>
            <a href="#market">Market</a>
            <a href="#partners">Participants</a>
            <a href={eventbriteUrl} target="_blank">Register</a>
          </div>
        </nav>

        <section className="hero">
          <img src="/GrowArea.jpg" />
          <div className="shade" />
          <div className="heroText">
            <p className="eyebrow">Growers Supply Market · May 16, 2026 · By Invitation Only</p>
            <h1>Food Security Begins Locally.</h1>
            <p>
              Bronson Family Farm is building a regional ecosystem for food security,
              wellness, workforce development, entrepreneurship, and community resilience
              throughout Youngstown and Mahoning County.
            </p>
            <div className="buttons">
              <a href="#experience" className="goldBtn">Begin Guided Experience</a>
              <a href={eventbriteUrl} target="_blank" className="glassBtn">Register For Event</a>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="kicker">Guided Ecosystem Demo</p>
          <h2>Every Pathway Strengthens The Ecosystem.</h2>
          <p className="lead">
            This demo shows how guests, customers, growers, youth, partners,
            value-added producers, and investors each enter the Bronson Family Farm ecosystem.
          </p>

          <div className="progress">
            <span>Guided Tour Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="bar"><div style={{ width: `${progress}%` }} /></div>

          <div className="pathGrid">
            {pathways.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className={active.id === p.id ? "path active" : "path"}
              >
                <span className="icon">{p.icon}</span>
                <small>{p.label}</small>
                <strong>{p.title}</strong>
              </button>
            ))}
          </div>

          <div className="feature">
            <div className="photoCard">
              <img src={active.image} />
            </div>
            <div className="storyCard">
              <p className="kicker">{active.label} Pathway</p>
              <h3>{active.title}</h3>
              <p>{active.body}</p>
              <div className="bulletGrid">
                {active.bullets.map((b) => (
                  <div key={b}>{b}</div>
                ))}
              </div>
              <button onClick={() => setActive(next)} className="darkBtn">
                Continue to {next.label}
              </button>
            </div>
          </div>
        </section>

        <section id="market" className="split">
          <div>
            <p className="kicker light">Marketplace Purpose</p>
            <h2>From Demonstration To Participation.</h2>
            <p>
              The Growers Supply Market is designed to move people from awareness
              into action — learning, growing, buying, volunteering, partnering,
              and investing in local food infrastructure.
            </p>
          </div>
          <img src="/SAM_0255.JPG" />
        </section>

        <section className="impact">
          <div>
            <span>Food Security</span>
            <h3>Food Access Is Community Infrastructure.</h3>
            <p>Healthy food, growing knowledge, and local production strengthen community resilience.</p>
          </div>
          <div>
            <span>Workforce</span>
            <h3>Outdoor Work Builds Readiness.</h3>
            <p>Youth and adults gain confidence, responsibility, skills, and pathways to opportunity.</p>
          </div>
          <div>
            <span>Enterprise</span>
            <h3>Growers Are Entrepreneurs.</h3>
            <p>Small growers and value-added producers become part of a larger regional food economy.</p>
          </div>
        </section>

        <section id="partners" className="section">
          <p className="kicker">Participants & Community Presence</p>
          <h2>Who Will Be There — Doing What.</h2>
          <div className="participantGrid">
            {participants.map((p) => (
              <div key={p}>{p}</div>
            ))}
          </div>
        </section>

        <section className="final">
          <p className="kicker gold">Final Message</p>
          <h2>This Is More Than A Farm.</h2>
          <p>
            Bronson Family Farm is a place-based ecosystem designed to grow food,
            opportunity, wellness, sustainability, and future generations throughout
            the Mahoning Valley.
          </p>
          <a href={eventbriteUrl} target="_blank" className="goldBtn">Register For Growers Supply Market</a>
        </section>
      </main>
    </>
  );
}

export default App;

const css = `
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#F5F1E6;color:#1C1C1C;font-family:Inter,Arial,sans-serif}
a{text-decoration:none}
.nav{position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:18px 6vw;background:rgba(245,241,230,.94);backdrop-filter:blur(16px);border-bottom:1px solid #d9cfbb}
.nav strong{display:block;color:#173C2D;font-size:22px;font-weight:950}
.nav span{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.18em;color:#7b705f;font-weight:800}
.navLinks{display:flex;gap:12px}
.navLinks a{padding:10px 18px;border-radius:99px;background:white;color:#173C2D;font-weight:900;box-shadow:0 6px 18px rgba(0,0,0,.06)}
.hero{position:relative;min-height:92vh;display:flex;align-items:center;overflow:hidden}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.42),rgba(0,0,0,.18))}
.heroText{position:relative;z-index:2;max-width:1100px;padding:90px 6vw;color:white}
.eyebrow,.kicker{text-transform:uppercase;letter-spacing:.25em;font-size:13px;font-weight:950;color:#7b705f}
.eyebrow{display:inline-block;color:#E7D7A3;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);border-radius:99px;padding:12px 18px}
h1{font-size:clamp(62px,9vw,118px);line-height:.9;margin:28px 0;font-weight:950;letter-spacing:-5px}
.heroText p:not(.eyebrow),.lead{font-size:24px;line-height:1.55;max-width:880px}
.buttons{display:flex;gap:16px;flex-wrap:wrap;margin-top:36px}
.goldBtn,.glassBtn,.darkBtn{display:inline-block;border:0;border-radius:99px;padding:18px 28px;font-weight:950;font-size:18px;cursor:pointer}
.goldBtn{background:#E7D7A3;color:#173C2D}
.glassBtn{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.35);color:white}
.darkBtn{background:#173C2D;color:white;margin-top:28px}
.section{max-width:1280px;margin:auto;padding:90px 6vw}
h2{font-size:clamp(46px,6vw,76px);line-height:1;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-3px}
.progress{display:flex;justify-content:space-between;margin-top:42px;font-weight:950;color:#173C2D}
.bar{height:13px;border-radius:99px;overflow:hidden;background:#ddd2bd;margin:10px 0 38px}
.bar div{height:100%;background:#173C2D}
.pathGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:46px}
.path{text-align:left;border:0;background:white;color:#173C2D;border-radius:30px;padding:24px;box-shadow:0 18px 36px rgba(0,0,0,.08);cursor:pointer}
.path.active{background:#173C2D;color:white;box-shadow:0 24px 50px rgba(23,60,45,.35)}
.icon{font-size:34px;display:block;margin-bottom:18px}
.path small{display:block;text-transform:uppercase;letter-spacing:.18em;font-weight:950;opacity:.7}
.path strong{display:block;font-size:22px;line-height:1.1;margin-top:12px}
.feature{display:grid;grid-template-columns:1.05fr .95fr;gap:38px;align-items:stretch}
.photoCard{height:650px;border-radius:42px;overflow:hidden;box-shadow:0 28px 60px rgba(0,0,0,.18)}
.photoCard img,.split img{width:100%;height:100%;object-fit:cover}
.storyCard{background:white;border-radius:42px;padding:50px;box-shadow:0 28px 60px rgba(0,0,0,.12)}
h3{font-size:clamp(38px,5vw,62px);line-height:1;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-2px}
.storyCard p{font-size:23px;line-height:1.55;color:#555}
.bulletGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:25px}
.bulletGrid div{background:#F5F1E6;border-radius:22px;padding:18px;font-weight:900;color:#173C2D}
.split{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;background:#173C2D;color:white;padding:90px 6vw}
.split h2{color:white}
.split p{font-size:24px;line-height:1.6;color:rgba(255,255,255,.86)}
.split img{height:560px;border-radius:42px;box-shadow:0 28px 60px rgba(0,0,0,.25)}
.light{color:#E7D7A3}
.impact{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:90px 6vw;background:#10281d;color:white}
.impact div{background:rgba(255,255,255,.1);border-radius:36px;padding:36px}
.impact span{color:#E7D7A3;text-transform:uppercase;letter-spacing:.22em;font-size:13px;font-weight:950}
.impact h3{color:white;font-size:40px}
.impact p{font-size:20px;line-height:1.6;color:rgba(255,255,255,.82)}
.participantGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}
.participantGrid div{background:white;border-radius:28px;padding:28px;color:#173C2D;font-size:22px;font-weight:950;box-shadow:0 18px 36px rgba(0,0,0,.08)}
.final{text-align:center;padding:110px 6vw;background:linear-gradient(135deg,#10281d,#173C2D,#2a241b);color:white}
.final h2{color:white}
.final p{max-width:920px;margin:30px auto;font-size:26px;line-height:1.6;color:rgba(255,255,255,.86)}
.gold{color:#E7D7A3}
@media(max-width:900px){
.nav{align-items:flex-start;gap:12px;flex-direction:column}.navLinks{flex-wrap:wrap}
.pathGrid,.feature,.split,.impact,.participantGrid,.bulletGrid{grid-template-columns:1fr}
.photoCard,.split img{height:430px}
h1{letter-spacing:-2px}
.heroText p:not(.eyebrow),.lead,.storyCard p,.split p{font-size:20px}
.storyCard{padding:32px}
}
`;
