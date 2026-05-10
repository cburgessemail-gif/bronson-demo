import React, { useMemo, useState } from "react";

const eventbriteUrl =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const grownByUrl = "https://grownby.com/farms/bronson-family-farm/shop";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "tl", label: "Tagalog" },
  { code: "it", label: "Italian" },
  { code: "he", label: "Hebrew" },
  { code: "fr", label: "French" },
];

const text = {
  en: {
    welcome: "Welcome to Bronson Family Farm.",
    guide:
      "This guided experience walks you through the farm ecosystem, one pathway at a time.",
    begin: "Begin Guided Tour",
    back: "Back",
    next: "Next Stop",
    register: "Register for Event",
    shop: "Shop Farm Store",
  },
  es: {
    welcome: "Bienvenidos a Bronson Family Farm.",
    guide:
      "Esta experiencia guiada le muestra el ecosistema de la granja, paso a paso.",
    begin: "Comenzar Recorrido",
    back: "Atrás",
    next: "Siguiente",
    register: "Registrarse",
    shop: "Comprar",
  },
  tl: {
    welcome: "Maligayang pagdating sa Bronson Family Farm.",
    guide:
      "Ipinapakita ng gabay na ito ang buong ecosystem ng bukid, bawat hakbang.",
    begin: "Simulan ang Tour",
    back: "Bumalik",
    next: "Susunod",
    register: "Magparehistro",
    shop: "Mamili",
  },
  it: {
    welcome: "Benvenuti a Bronson Family Farm.",
    guide:
      "Questa esperienza guidata presenta l’ecosistema della fattoria, passo dopo passo.",
    begin: "Inizia il Tour",
    back: "Indietro",
    next: "Avanti",
    register: "Registrati",
    shop: "Negozio",
  },
  he: {
    welcome: "ברוכים הבאים לחוות משפחת ברונסון.",
    guide:
      "חוויה מודרכת זו מציגה את מערכת החווה, שלב אחר שלב.",
    begin: "התחל סיור",
    back: "חזרה",
    next: "הבא",
    register: "הרשמה",
    shop: "חנות",
  },
  fr: {
    welcome: "Bienvenue à Bronson Family Farm.",
    guide:
      "Cette expérience guidée présente l’écosystème de la ferme, étape par étape.",
    begin: "Commencer",
    back: "Retour",
    next: "Suivant",
    register: "S’inscrire",
    shop: "Boutique",
  },
};

const stops = [
  {
    id: "welcome",
    label: "Welcome",
    image: "/GrowArea.jpg",
    title: "Food Security Begins Locally.",
    subtitle:
      "Bronson Family Farm is building a place-based food ecosystem for Youngstown and the Mahoning Valley.",
    story:
      "This is not just a farm website. This is a guided experience through land, legacy, food, workforce, marketplace development, partnership, and investment.",
    button: "Begin the Story",
    target: "history",
  },
  {
    id: "history",
    label: "History",
    image: "/GrowArea2.jpg",
    title: "A Farm Rooted In Family, Land, And Restoration.",
    subtitle:
      "The farm honors the Bronson and Lorenzana family legacies while transforming overlooked land into community infrastructure.",
    story:
      "Bronson Family Farm carries forward agricultural memory, faith, service, education, and community responsibility. In Youngstown, the farm becomes a living response to food insecurity, economic pressure, youth opportunity, and regional resilience.",
    button: "Enter the Pathways",
    target: "guest",
  },
  {
    id: "guest",
    label: "Guest",
    image: "/SAM_0220.JPG",
    title: "Guests Experience The Vision First.",
    subtitle:
      "Visitors are welcomed into a story about food, health, land, family, and community.",
    story:
      "The guest pathway helps people understand why this work matters before asking them to buy, volunteer, grow, or invest.",
    button: "Continue to Customer",
    target: "customer",
  },
  {
    id: "customer",
    label: "Customer",
    image: "/SAM_0249.JPG",
    title: "Healthy Communities Begin With Healthy Food.",
    subtitle:
      "Customers connect to fresh food, seedlings, Bubble Babies™, and nutrition awareness.",
    story:
      "The customer pathway turns interest into repeat healthy choices and local purchasing power.",
    button: "Shop the Farm Store",
    external: grownByUrl,
    target: "marketplace",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    image: "/SAM_0255.JPG",
    title: "The Marketplace Converts Interest Into Action.",
    subtitle:
      "Growers Supply Market connects growers, customers, demonstrations, tools, education, and local food access.",
    story:
      "This is where the ecosystem becomes visible. People can learn, buy, register, connect, volunteer, partner, and see how food security becomes community infrastructure.",
    button: "See Participants",
    target: "participants",
  },
  {
    id: "grower",
    label: "Grower",
    image: "/SAM_0281.JPG",
    title: "Growers Are Entrepreneurs.",
    subtitle:
      "Small growers need tools, knowledge, seedlings, demonstrations, markets, and support.",
    story:
      "The grower pathway connects local producers to opportunity and positions growing as part of a larger regional food economy.",
    button: "Continue to Youth Workforce",
    target: "youth",
  },
  {
    id: "youth",
    label: "Youth Workforce",
    image: "/Samaeera2.jpg",
    title: "Outdoor Work Becomes Confidence.",
    subtitle:
      "Youth learn responsibility, teamwork, safety, skill-building, and future readiness through farm-based work.",
    story:
      "The youth workforce pathway transforms the farm into a training ground where young people can build confidence, discipline, and belonging.",
    button: "Continue to Partners",
    target: "partners",
  },
  {
    id: "partners",
    label: "Partners",
    image: "/SAM_0301.JPG",
    title: "Collaboration Strengthens Communities.",
    subtitle:
      "Partners help connect food security, health, education, workforce, infrastructure, and opportunity.",
    story:
      "The partner pathway shows how city leaders, organizations, businesses, educators, growers, artists, and health partners contribute to one shared community ecosystem.",
    button: "Continue to Value-Added",
    target: "value",
  },
  {
    id: "value",
    label: "Value-Added",
    image: "/culniary_edibleflowers.jpeg",
    title: "Food Can Become Enterprise.",
    subtitle:
      "Prepared foods, edible flowers, herbs, packaging, and creative products open new economic pathways.",
    story:
      "Value-added producers show how local growing can become small business development, culinary education, and regional enterprise.",
    button: "Continue to Investment",
    target: "investment",
  },
  {
    id: "investment",
    label: "Investment",
    image: "/SAM_0313.JPG",
    title: "Investment In Food Security Is Investment In Community Health.",
    subtitle:
      "Infrastructure, irrigation, storage, workforce, growing systems, and marketplace capacity help the model become sustainable.",
    story:
      "The investment pathway helps funders and sponsors understand that Bronson Family Farm is not simply asking for support. It is building a replicable, place-based system.",
    button: "Register for Growers Supply Market",
    external: eventbriteUrl,
    target: "register",
  },
  {
    id: "participants",
    label: "Participants",
    image: "/SAM_0299.JPG",
    title: "Who Will Be There — Doing What.",
    subtitle:
      "The market brings together growers, artists, workforce partners, drone storytelling, garden centers, food leaders, and community organizations.",
    story:
      "Participants help visitors see the ecosystem in action through demonstrations, education, creativity, tools, produce, workforce, and community presence.",
    button: "Continue to Registration",
    target: "register",
  },
  {
    id: "register",
    label: "Register",
    image: "/SAM_0308.JPG",
    title: "Experience The Farm In Person.",
    subtitle:
      "Growers Supply Market is by invitation only. Registration is required through Eventbrite.",
    story:
      "The event is designed for people who want to learn, grow, support local food access, participate in the marketplace, or help build the next stage of Bronson Family Farm.",
    button: "Register Now",
    external: eventbriteUrl,
    target: "welcome",
  },
];

const participants = [
  ["Parker Farms", "Fresh produce, grower leadership, and regional food access."],
  ["BIOPIC / Sophia Buggs", "Food sovereignty, cultural knowledge, and growing wisdom."],
  ["SMARTS", "Outdoor arts, creativity, music, movement, and youth engagement."],
  ["Flying High Inc.", "Workforce development and culinary pathway introduction."],
  ["Gates Drone Services", "Drone perspective, land storytelling, and aerial documentation."],
  ["Home Depot", "Tools, supplies, demonstrations, and infrastructure support."],
  ["Elliott’s Garden Center", "Compost, soil support, and growing resources."],
  ["Petitti Garden Centers", "Plant knowledge and food production support."],
  ["Farm & Family Alliance Inc.", "Youth workforce, volunteers, growers, and education."],
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [language, setLanguage] = useState<keyof typeof text>("en");
  const [activeId, setActiveId] = useState("welcome");

  const activeIndex = stops.findIndex((s) => s.id === activeId);
  const active = stops[activeIndex] || stops[0];
  const next = stops[(activeIndex + 1) % stops.length];
  const previous = stops[(activeIndex - 1 + stops.length) % stops.length];

  const progress = useMemo(
    () => Math.round(((activeIndex + 1) / stops.length) * 100),
    [activeIndex]
  );

  const t = text[language];

  function go(id: string) {
    setActiveId(id);
    setTimeout(() => scrollTo("tour"), 40);
  }

  function primaryAction() {
    if (active.external) window.open(active.external, "_blank");
    if (active.target) go(active.target);
  }

  return (
    <>
      <style>{css}</style>

      <main>
        <nav className="nav">
          <button className="brand" onClick={() => go("welcome")}>
            <strong>Bronson Family Farm</strong>
            <span>Guided Ecosystem Demo</span>
          </button>

          <div className="navLinks">
            <button onClick={() => go("history")}>History</button>
            <button onClick={() => go("marketplace")}>Marketplace</button>
            <button onClick={() => go("youth")}>Youth</button>
            <button onClick={() => go("investment")}>Investment</button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer">
              Register
            </a>
          </div>
        </nav>

        <section className="hero">
          <img src="/GrowArea.jpg" />
          <div className="shade" />

          <div className="heroText">
            <p className="eyebrow">Growers Supply Market · May 16, 2026 · By Invitation Only</p>
            <h1>{t.welcome}</h1>
            <p>{t.guide}</p>

            <div className="languagePanel">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code as keyof typeof text)}
                  className={language === l.code ? "lang activeLang" : "lang"}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="buttons">
              <button onClick={() => scrollTo("tour")} className="goldBtn">
                {t.begin}
              </button>
              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="glassBtn">
                {t.register}
              </a>
              <a href={grownByUrl} target="_blank" rel="noreferrer" className="glassBtn">
                {t.shop}
              </a>
            </div>
          </div>
        </section>

        <section id="tour" className="section">
          <p className="kicker">Guided Tour Stop {activeIndex + 1} of {stops.length}</p>
          <h2>{active.label}: {active.title}</h2>

          <div className="progressRow">
            <span>{progress}% Complete</span>
            <span>Current Stop: {active.label}</span>
          </div>
          <div className="bar"><div style={{ width: `${progress}%` }} /></div>

          <div className="tourGrid">
            <div className="imageFrame">
              <img src={active.image} />
            </div>

            <div className="storyCard">
              <p className="kicker">{active.label}</p>
              <h3>{active.subtitle}</h3>
              <p>{active.story}</p>

              <div className="buttons">
                <button onClick={() => go(previous.id)} className="outlineBtn">
                  {t.back}: {previous.label}
                </button>
                <button onClick={primaryAction} className="darkBtn">
                  {active.button}
                </button>
                <button onClick={() => go(next.id)} className="outlineBtn">
                  {t.next}: {next.label}
                </button>
              </div>
            </div>
          </div>

          <div className="jumpGrid">
            {stops.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={s.id === active.id ? "jump activeJump" : "jump"}
              >
                <span>{i + 1}</span>
                {s.label}
              </button>
            ))}
          </div>
        </section>

        <section className="historyBlock">
          <div>
            <p className="kicker light">History & Legacy</p>
            <h2>A Living Response To Food Insecurity.</h2>
            <p>
              Bronson Family Farm honors family, land, agricultural memory, and community service.
              The farm connects the Bronson and Lorenzana legacies to today’s need for food access,
              wellness, youth opportunity, and community-rooted economic development.
            </p>
            <button onClick={() => go("history")} className="goldBtn">
              Open History Stop
            </button>
          </div>
          <img src="/SAM_0229.JPG" />
        </section>

        <section className="impact">
          <div>
            <span>Food Security</span>
            <h3>Food Access Is Infrastructure.</h3>
            <p>Growing, learning, buying, and sharing food are community stability strategies.</p>
            <button onClick={() => go("marketplace")}>Open Marketplace</button>
          </div>

          <div>
            <span>Youth Workforce</span>
            <h3>Work Builds Confidence.</h3>
            <p>The farm gives youth structured outdoor responsibility and future readiness.</p>
            <button onClick={() => go("youth")}>Open Youth Stop</button>
          </div>

          <div>
            <span>Investment</span>
            <h3>Support Builds Capacity.</h3>
            <p>Infrastructure makes the ecosystem sustainable, visible, and replicable.</p>
            <button onClick={() => go("investment")}>Open Investment Stop</button>
          </div>
        </section>

        <section className="section">
          <p className="kicker">Participants & Demonstrations</p>
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
            <button onClick={() => go("participants")} className="darkBtn">
              Open Participants Stop
            </button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="darkBtn">
              Register To Attend
            </a>
          </div>
        </section>

        <section className="final">
          <p className="kicker gold">Final Message</p>
          <h2>This Is More Than A Farm.</h2>
          <p>
            Bronson Family Farm is a guided ecosystem for food, wellness, history,
            youth workforce, marketplace development, partnership, and investment.
          </p>

          <div className="buttons centered">
            <button onClick={() => go("welcome")} className="goldBtn">
              Restart Guided Tour
            </button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="goldBtn">
              Register For Event
            </a>
            <a href={grownByUrl} target="_blank" rel="noreferrer" className="glassBtn">
              Shop Farm Store
            </a>
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
.hero{position:relative;min-height:94vh;display:flex;align-items:center;overflow:hidden}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.84),rgba(0,0,0,.5),rgba(0,0,0,.18))}
.heroText{position:relative;z-index:2;max-width:1150px;padding:90px 6vw;color:white}
.eyebrow,.kicker{text-transform:uppercase;letter-spacing:.25em;font-size:13px;font-weight:950;color:#7b705f}
.eyebrow{display:inline-block;color:#E7D7A3;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);border-radius:99px;padding:12px 18px}
h1{font-size:clamp(54px,8vw,106px);line-height:.92;margin:28px 0;font-weight:950;letter-spacing:-4px}
.heroText p:not(.eyebrow){font-size:25px;line-height:1.55;max-width:900px}
.languagePanel{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}
.lang{border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:white;border-radius:99px;padding:10px 16px;font-weight:900}
.activeLang{background:#E7D7A3;color:#173C2D}
.buttons{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}
.centered{justify-content:center}
.goldBtn,.glassBtn,.darkBtn,.outlineBtn{display:inline-block;border-radius:99px;padding:16px 24px;font-weight:950;font-size:16px;border:0}
.goldBtn{background:#E7D7A3;color:#173C2D}
.glassBtn{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.35);color:white}
.darkBtn{background:#173C2D;color:white}
.outlineBtn{background:#F5F1E6;color:#173C2D;border:1px solid #d9cfbb}
.section{max-width:1320px;margin:auto;padding:88px 6vw}
h2{font-size:clamp(42px,6vw,72px);line-height:1;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-3px}
.progressRow{display:flex;justify-content:space-between;margin-top:35px;font-weight:950;color:#173C2D}
.bar{height:13px;border-radius:99px;overflow:hidden;background:#ddd2bd;margin:10px 0 35px}
.bar div{height:100%;background:#173C2D}
.tourGrid{display:grid;grid-template-columns:1.05fr .95fr;gap:38px;align-items:stretch}
.imageFrame{height:640px;border-radius:42px;overflow:hidden;box-shadow:0 28px 60px rgba(0,0,0,.18)}
.imageFrame img,.historyBlock img{width:100%;height:100%;object-fit:cover}
.storyCard{background:white;border-radius:42px;padding:50px;box-shadow:0 28px 60px rgba(0,0,0,.12)}
h3{font-size:clamp(34px,4vw,54px);line-height:1.05;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-2px}
.storyCard p{font-size:22px;line-height:1.6;color:#555}
.jumpGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:35px}
.jump{border:0;border-radius:18px;background:white;color:#173C2D;padding:14px;font-weight:950;box-shadow:0 12px 25px rgba(0,0,0,.07)}
.jump span{display:block;color:#7b705f;font-size:12px}
.activeJump{background:#173C2D;color:white}
.historyBlock{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;background:#173C2D;color:white;padding:90px 6vw}
.historyBlock h2{color:white}
.historyBlock p{font-size:23px;line-height:1.65;color:rgba(255,255,255,.86)}
.historyBlock img{height:560px;border-radius:42px;box-shadow:0 28px 60px rgba(0,0,0,.25)}
.light,.gold{color:#E7D7A3}
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
.final{text-align:center;padding:110px 6vw;background:linear-gradient(135deg,#10281d,#173C2D,#2a241b);color:white}
.final h2{color:white}
.final p{max-width:920px;margin:30px auto;font-size:25px;line-height:1.6;color:rgba(255,255,255,.86)}
@media(max-width:900px){
.nav{align-items:flex-start;gap:12px;flex-direction:column}
.navLinks{gap:8px}
.navLinks button,.navLinks a{font-size:13px;padding:9px 12px}
.tourGrid,.historyBlock,.impact,.participantGrid{grid-template-columns:1fr}
.jumpGrid{grid-template-columns:repeat(2,1fr)}
.imageFrame,.historyBlock img{height:420px}
h1{letter-spacing:-2px}
.heroText p:not(.eyebrow),.storyCard p,.historyBlock p{font-size:20px}
.storyCard{padding:32px}
}
`;
