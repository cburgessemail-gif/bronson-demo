import React, { useMemo, useState } from "react";

const eventbriteUrl =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const grownByUrl = "https://grownby.com/farms/bronson-family-farm/shop";

const pathways = [
  {
    id: "guest",
    label: "Guest",
    icon: "🏡",
    image: "/SAM_0220.JPG",
    title: "Food. Wellness. Opportunity.",
    body: "Guests enter the farm through story, land, welcome, and purpose. This pathway helps visitors understand why Bronson Family Farm exists and how food security connects to health, family, workforce, and community resilience.",
    action: "See Guest Experience",
  },
  {
    id: "customer",
    label: "Customer",
    icon: "🧺",
    image: "/SAM_0249.JPG",
    title: "Healthy Communities Begin With Healthy Food.",
    body: "Customers connect to fresh produce, seedlings, Bubble Babies™, nutrition education, and repeat healthy choices that strengthen families and local food access.",
    action: "Shop Farm Store",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: "🥬",
    image: "/SAM_0255.JPG",
    title: "Local Food Creates Local Strength.",
    body: "The marketplace converts interest into participation, sales, grower opportunity, regional purchasing power, and long-term sustainability.",
    action: "Explore Marketplace",
  },
  {
    id: "grower",
    label: "Grower",
    icon: "🌱",
    image: "/SAM_0281.JPG",
    title: "Unused Land Can Become Community Infrastructure.",
    body: "Growers access tools, knowledge, seedlings, demonstrations, peer learning, and pathways into local food production and market participation.",
    action: "Explore Grower Pathway",
  },
  {
    id: "youth",
    label: "Youth Workforce",
    icon: "💼",
    image: "/Samaeera2.jpg",
    title: "Outdoor Work Becomes Confidence.",
    body: "Youth build responsibility, readiness, confidence, teamwork, and practical skills through structured farm-based work and outdoor learning.",
    action: "Explore Youth Workforce",
  },
  {
    id: "partners",
    label: "Partners",
    icon: "🤝",
    image: "/SAM_0301.JPG",
    title: "Collaboration Strengthens Communities.",
    body: "Partners align resources around food security, wellness, education, workforce development, demonstrations, infrastructure, and sustainability.",
    action: "See Partners",
  },
  {
    id: "value",
    label: "Value-Added",
    icon: "🏭",
    image: "/culniary_edibleflowers.jpeg",
    title: "Food Can Become Enterprise.",
    body: "Value-added producers turn food, herbs, flowers, packaging, prepared products, and local creativity into small enterprise opportunities.",
    action: "Explore Value-Added",
  },
  {
    id: "investment",
    label: "Investment",
    icon: "💚",
    image: "/GrowArea2.jpg",
    title: "Investment In Food Security Is Investment In Community Health.",
    body: "Support expands infrastructure, food access, youth workforce, wellness programming, growing capacity, and long-term regional resilience.",
    action: "See Investment Impact",
  },
];

const participants = [
  ["Parker Farms", "Fresh produce, grower leadership, local food access, and regional food system collaboration."],
  ["BIOPIC / Sophia Buggs", "Food sovereignty, cultural knowledge, growing wisdom, and community-rooted agricultural leadership."],
  ["SMARTS", "Outdoor visual arts, creativity, music, movement, and nature-based arts engagement for youth and families."],
  ["Flying High Inc.", "Workforce development presence and introduction of culinary pathways connected to food and opportunity."],
  ["Gates Drone Services", "Drone perspective, land storytelling, aerial documentation, and visual technology demonstrations."],
  ["Home Depot", "Tools, supplies, practical demonstrations, and growing infrastructure support."],
  ["Elliott’s Garden Center", "Compost, soil support, gardening knowledge, and local growing resources."],
  ["Petitti Garden Centers", "Plant knowledge, growing support, and long-term food production alignment."],
  ["Farm & Family Alliance Inc.", "Nonprofit ecosystem support, youth workforce, growers, volunteers, and community education."],
];

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [active, setActive] = useState(pathways[0]);
  const index = pathways.findIndex((p) => p.id === active.id);
  const next = pathways[(index + 1) % pathways.length];
  const progress = useMemo(() => Math.round(((index + 1) / pathways.length) * 100), [index]);

  function handlePathwayAction(id: string) {
    if (id === "customer") window.open(grownByUrl, "_blank");
    else if (id === "marketplace") goTo("marketplace");
    else if (id === "partners") goTo("participants");
    else if (id === "investment") goTo("investment");
    else goTo("pathway-detail");
  }

  return (
    <>
      <style>{css}</style>

      <main>
        <nav className="nav">
          <button onClick={() => goTo("top")} className="brand">
            <strong>Bronson Family Farm</strong>
            <span>Community Food Ecosystem</span>
          </button>
          <div className="navLinks">
            <button onClick={() => goTo("history")}>History</button>
            <button onClick={() => goTo("experience")}>Demo</button>
            <button onClick={() => goTo("marketplace")}>Marketplace</button>
            <button onClick={() => goTo("participants")}>Participants</button>
            <button onClick={() => goTo("investment")}>Investment</button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer">Register</a>
          </div>
        </nav>

        <section id="top" className="hero">
          <img src="/GrowArea.jpg" />
          <div className="shade" />
          <div className="heroText">
            <p className="eyebrow">Growers Supply Market · May 16, 2026 · By Invitation Only</p>
            <h1>Food Security Begins Locally.</h1>
            <p>
              Bronson Family Farm is transforming land, legacy, food, learning, youth workforce,
              entrepreneurship, and partnership into a living community food ecosystem for
              Youngstown and the Mahoning Valley.
            </p>
            <div className="buttons">
              <button onClick={() => goTo("experience")} className="goldBtn">Begin Guided Demo</button>
              <button onClick={() => goTo("history")} className="glassBtn">Learn The Story</button>
              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="glassBtn">Register For Event</a>
            </div>
          </div>
        </section>

        <section id="history" className="section history">
          <p className="kicker">History, Land & Legacy</p>
          <h2>A Farm Rooted In Family, Place, And Restoration.</h2>
          <div className="twoCol">
            <div>
              <p>
                Bronson Family Farm is located near the Historic Lansdowne Airport area in Youngstown,
                Ohio. The project carries a larger purpose than growing food alone. It is about
                reclaiming overlooked land as productive community infrastructure.
              </p>
              <p>
                The vision honors family agricultural memory, including the Lorenzana farming legacy,
                while also carrying forward the Bronson family’s commitment to education, faith,
                service, leadership, and community advancement.
              </p>
              <p>
                In today’s economic environment, food access, nutrition, health, and local production
                are not side issues. They are survival issues. Bronson Family Farm responds by creating
                a practical ecosystem where people can learn, grow, buy, work, volunteer, partner,
                and invest.
              </p>
            </div>
            <div className="historyCard">
              <h3>Why Youngstown?</h3>
              <p>
                Youngstown has the land, people, creativity, need, and resilience to model a new kind
                of food system — one that connects growers, families, youth, partners, and local
                enterprise into one shared future.
              </p>
              <button onClick={() => goTo("experience")} className="darkBtn">Continue To Demo</button>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="kicker">Guided Ecosystem Demo</p>
          <h2>Every Pathway Strengthens The Ecosystem.</h2>
          <p className="lead">
            This guided demo shows how each person enters the farm differently, but contributes to
            one connected food, wellness, workforce, and marketplace system.
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
                onClick={() => {
                  setActive(p);
                  goTo("pathway-detail");
                }}
                className={active.id === p.id ? "path active" : "path"}
              >
                <span className="icon">{p.icon}</span>
                <small>{p.label}</small>
                <strong>{p.title}</strong>
              </button>
            ))}
          </div>

          <div id="pathway-detail" className="feature">
            <div className="photoCard">
              <img src={active.image} />
            </div>

            <div className="storyCard">
              <p className="kicker">{active.label} Pathway</p>
              <h3>{active.title}</h3>
              <p>{active.body}</p>

              <div className="bulletGrid">
                <div><strong>Purpose</strong><span>Clear role in the ecosystem.</span></div>
                <div><strong>Action</strong><span>Move from interest to participation.</span></div>
                <div><strong>Impact</strong><span>Support food security and wellness.</span></div>
                <div><strong>Future</strong><span>Strengthen long-term local resilience.</span></div>
              </div>

              <div className="buttons">
                <button onClick={() => setActive(next)} className="darkBtn">Continue to {next.label}</button>
                <button onClick={() => handlePathwayAction(active.id)} className="outlineBtn">{active.action}</button>
              </div>
            </div>
          </div>
        </section>

        <section id="marketplace" className="split">
          <div>
            <p className="kicker light">Growers Supply Market</p>
            <h2>From Demonstration To Participation.</h2>
            <p>
              The Growers Supply Market is designed to move people from awareness into action.
              Participants can learn, grow, buy, volunteer, partner, and invest in a local food
              system built for community benefit.
            </p>
            <p>
              This is not just a vendor event. It is a live demonstration of how a community-centered
              food ecosystem can work.
            </p>
            <div className="buttons">
              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="goldBtn">Register</a>
              <a href={grownByUrl} target="_blank" rel="noreferrer" className="glassBtn">Shop Farm Store</a>
              <button onClick={() => goTo("participants")} className="glassBtn">See Who Is There</button>
            </div>
          </div>
          <img src="/SAM_0255.JPG" />
        </section>

        <section className="impact">
          <div>
            <span>Food Security</span>
            <h3>Food Access Is Community Infrastructure.</h3>
            <p>Healthy food, growing knowledge, and local production strengthen community resilience.</p>
            <button onClick={() => goTo("marketplace")}>See Market Strategy</button>
          </div>
          <div>
            <span>Workforce</span>
            <h3>Outdoor Work Builds Readiness.</h3>
            <p>Youth and adults gain confidence, responsibility, skills, and pathways to opportunity.</p>
            <button onClick={() => {
              setActive(pathways[4]);
              goTo("pathway-detail");
            }}>See Youth Pathway</button>
          </div>
          <div>
            <span>Enterprise</span>
            <h3>Growers Are Entrepreneurs.</h3>
            <p>Small growers and value-added producers become part of a larger regional food economy.</p>
            <button onClick={() => {
              setActive(pathways[6]);
              goTo("pathway-detail");
            }}>See Value-Added Pathway</button>
          </div>
        </section>

        <section id="participants" className="section">
          <p className="kicker">Participants & Community Presence</p>
          <h2>Who Will Be There — Doing What.</h2>
          <div className="participantGrid">
            {participants.map(([name, role]) => (
              <div key={name}>
                <strong>{name}</strong>
                <p>{role}</p>
              </div>
            ))}
          </div>
          <div className="centerButtons">
            <button onClick={() => goTo("marketplace")} className="darkBtn">Back To Marketplace</button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="darkBtn">Register To Attend</a>
          </div>
        </section>

        <section id="investment" className="section investment">
          <p className="kicker">Investment & Replication</p>
          <h2>A Place-Based Model That Can Grow Beyond One Farm.</h2>
          <p className="lead">
            Investment supports practical infrastructure: irrigation, storage, tools, security,
            growing systems, youth workforce, marketplace readiness, and community-centered food
            distribution capacity.
          </p>
          <div className="investGrid">
            <div><strong>Infrastructure</strong><span>Water, storage, wash station, tools, and site readiness.</span></div>
            <div><strong>Food Access</strong><span>Produce, seedlings, growing supplies, and education.</span></div>
            <div><strong>Workforce</strong><span>Youth, growers, volunteers, supervisors, and training pathways.</span></div>
            <div><strong>Destination</strong><span>Agritourism, learning, community gatherings, and future replication.</span></div>
          </div>
          <div className="centerButtons">
            <button onClick={() => {
              setActive(pathways[7]);
              goTo("pathway-detail");
            }} className="darkBtn">Open Investment Pathway</button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="darkBtn">Attend The Market</a>
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
          <div className="buttons centered">
            <button onClick={() => goTo("top")} className="goldBtn">Return To Start</button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="goldBtn">Register For Growers Supply Market</a>
            <a href={grownByUrl} target="_blank" rel="noreferrer" className="glassBtn">Shop Bronson Family Farm</a>
          </div>
        </section>
      </main>
    </>
  );
}

const css = `
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#F5F1E6;color:#1C1C1C;font-family:Inter,Arial,sans-serif}
button,a{font-family:inherit}
button{cursor:pointer}
a{text-decoration:none}
.nav{position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:16px 6vw;background:rgba(245,241,230,.95);backdrop-filter:blur(16px);border-bottom:1px solid #d9cfbb}
.brand{border:0;background:transparent;text-align:left}
.brand strong{display:block;color:#173C2D;font-size:22px;font-weight:950}
.brand span{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.18em;color:#7b705f;font-weight:800}
.navLinks{display:flex;gap:10px;flex-wrap:wrap}
.navLinks button,.navLinks a{border:0;padding:10px 16px;border-radius:99px;background:white;color:#173C2D;font-weight:900;box-shadow:0 6px 18px rgba(0,0,0,.06)}
.hero{position:relative;min-height:92vh;display:flex;align-items:center;overflow:hidden}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.44),rgba(0,0,0,.18))}
.heroText{position:relative;z-index:2;max-width:1120px;padding:90px 6vw;color:white}
.eyebrow,.kicker{text-transform:uppercase;letter-spacing:.25em;font-size:13px;font-weight:950;color:#7b705f}
.eyebrow{display:inline-block;color:#E7D7A3;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);border-radius:99px;padding:12px 18px}
h1{font-size:clamp(58px,9vw,116px);line-height:.9;margin:28px 0;font-weight:950;letter-spacing:-5px}
.heroText p:not(.eyebrow),.lead{font-size:24px;line-height:1.55;max-width:900px}
.buttons{display:flex;gap:16px;flex-wrap:wrap;margin-top:32px}
.centered{justify-content:center}
.goldBtn,.glassBtn,.darkBtn,.outlineBtn{display:inline-block;border-radius:99px;padding:17px 26px;font-weight:950;font-size:17px;border:0}
.goldBtn{background:#E7D7A3;color:#173C2D}
.glassBtn{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.35);color:white}
.darkBtn{background:#173C2D;color:white}
.outlineBtn{background:#F5F1E6;color:#173C2D;border:1px solid #d9cfbb}
.section{max-width:1280px;margin:auto;padding:88px 6vw}
.history{background:#F5F1E6}
.twoCol{display:grid;grid-template-columns:1.1fr .9fr;gap:36px}
.twoCol p{font-size:21px;line-height:1.65;color:#4d4d4d}
.historyCard{background:#173C2D;color:white;border-radius:38px;padding:42px;box-shadow:0 24px 50px rgba(0,0,0,.14)}
.historyCard h3{color:white}
.historyCard p{color:rgba(255,255,255,.84)}
h2{font-size:clamp(44px,6vw,76px);line-height:1;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-3px}
.progress{display:flex;justify-content:space-between;margin-top:42px;font-weight:950;color:#173C2D}
.bar{height:13px;border-radius:99px;overflow:hidden;background:#ddd2bd;margin:10px 0 38px}
.bar div{height:100%;background:#173C2D}
.pathGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:46px}
.path{text-align:left;border:0;background:white;color:#173C2D;border-radius:30px;padding:24px;box-shadow:0 18px 36px rgba(0,0,0,.08)}
.path.active{background:#173C2D;color:white;box-shadow:0 24px 50px rgba(23,60,45,.35)}
.icon{font-size:34px;display:block;margin-bottom:18px}
.path small{display:block;text-transform:uppercase;letter-spacing:.18em;font-weight:950;opacity:.7}
.path strong{display:block;font-size:22px;line-height:1.1;margin-top:12px}
.feature{display:grid;grid-template-columns:1.05fr .95fr;gap:38px;align-items:stretch}
.photoCard{height:650px;border-radius:42px;overflow:hidden;box-shadow:0 28px 60px rgba(0,0,0,.18)}
.photoCard img,.split img{width:100%;height:100%;object-fit:cover}
.storyCard{background:white;border-radius:42px;padding:50px;box-shadow:0 28px 60px rgba(0,0,0,.12)}
h3{font-size:clamp(36px,5vw,60px);line-height:1;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-2px}
.storyCard p{font-size:22px;line-height:1.55;color:#555}
.bulletGrid,.investGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:25px}
.bulletGrid div,.investGrid div{background:#F5F1E6;border-radius:22px;padding:18px;font-weight:900;color:#173C2D}
.bulletGrid strong,.investGrid strong{display:block;font-size:18px}
.bulletGrid span,.investGrid span{display:block;color:#666;margin-top:8px;line-height:1.45}
.split{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;background:#173C2D;color:white;padding:90px 6vw}
.split h2{color:white}
.split p{font-size:23px;line-height:1.6;color:rgba(255,255,255,.86)}
.split img{height:570px;border-radius:42px;box-shadow:0 28px 60px rgba(0,0,0,.25)}
.light{color:#E7D7A3}
.impact{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:90px 6vw;background:#10281d;color:white}
.impact div{background:rgba(255,255,255,.1);border-radius:36px;padding:36px}
.impact span{color:#E7D7A3;text-transform:uppercase;letter-spacing:.22em;font-size:13px;font-weight:950}
.impact h3{color:white;font-size:39px}
.impact p{font-size:20px;line-height:1.6;color:rgba(255,255,255,.82)}
.impact button{margin-top:18px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.12);color:white;border-radius:99px;padding:14px 20px;font-weight:900}
.participantGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}
.participantGrid div{background:white;border-radius:28px;padding:28px;color:#173C2D;box-shadow:0 18px 36px rgba(0,0,0,.08)}
.participantGrid strong{display:block;font-size:22px;font-weight:950}
.participantGrid p{font-size:17px;line-height:1.5;color:#555}
.centerButtons{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-top:42px}
.investment{background:#F5F1E6}
.final{text-align:center;padding:110px 6vw;background:linear-gradient(135deg,#10281d,#173C2D,#2a241b);color:white}
.final h2{color:white}
.final p{max-width:920px;margin:30px auto;font-size:25px;line-height:1.6;color:rgba(255,255,255,.86)}
.gold{color:#E7D7A3}
@media(max-width:900px){
.nav{align-items:flex-start;gap:12px;flex-direction:column}
.navLinks{gap:8px}
.navLinks button,.navLinks a{font-size:13px;padding:9px 12px}
.pathGrid,.feature,.split,.impact,.participantGrid,.bulletGrid,.investGrid,.twoCol{grid-template-columns:1fr}
.photoCard,.split img{height:420px}
h1{letter-spacing:-2px}
.heroText p:not(.eyebrow),.lead,.storyCard p,.split p{font-size:20px}
.storyCard,.historyCard{padding:32px}
}
`;
