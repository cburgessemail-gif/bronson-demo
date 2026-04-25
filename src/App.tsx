import React, { useMemo, useState } from "react";

type Lang = "English" | "Spanish" | "Tagalog" | "Italian" | "French" | "Hebrew";
type Role =
  | "Guest"
  | "Customer"
  | "Marketplace"
  | "Grower"
  | "Youth Workforce"
  | "Value-Added Producer"
  | "Partner";

const IMG = {
  hero: "/images/GrowArea.jpg",
  guest: "/images/SAM_0191.JPG",
  customer: "/images/SAM_0194.JPG",
  marketplace: "/images/marketplace.jpg",
  grower: "/images/SAM_0201.JPG",
  youth: "/images/people.jpg",
  producer: "/images/SAM_0208.JPG",
  partner: "/images/SAM_0210.JPG",
  farm: "/images/GrowArea3.jpg",
};

const roles: Role[] = [
  "Guest",
  "Customer",
  "Marketplace",
  "Grower",
  "Youth Workforce",
  "Value-Added Producer",
  "Partner",
];

const languageLine: Record<Lang, string> = {
  English: "Welcome to the Bronson Family Farm ecosystem.",
  Spanish: "Bienvenido al ecosistema de Bronson Family Farm.",
  Tagalog: "Maligayang pagdating sa ekosistema ng Bronson Family Farm.",
  Italian: "Benvenuti nell’ecosistema di Bronson Family Farm.",
  French: "Bienvenue dans l’écosystème de Bronson Family Farm.",
  Hebrew: "ברוכים הבאים למערכת האקולוגית של Bronson Family Farm.",
};

const data: Record<
  Role,
  {
    image: string;
    mission: string;
    soundbite: string;
    intro: string;
    knowledge: string[];
    purpose: string;
    next: string[];
  }
> = {
  Guest: {
    image: IMG.guest,
    mission: "Understand the vision, story, land, and purpose.",
    soundbite: "This is more than a farm. It is a living doorway into food, land, legacy, and community.",
    intro:
      "Guests enter Bronson Family Farm through the story of the land, the airport, the growers, the families, and the community network being built around local food.",
    knowledge: [
      "Bronson Family Farm is located at the Historic Lansdowne Airport site in Youngstown.",
      "The farm connects agriculture, agritourism, education, workforce development, and food access.",
      "Farm access and special events are by invitation only so the experience can be safe, guided, and well prepared.",
    ],
    purpose:
      "The guest pathway helps people understand why the farm exists before asking them to buy, volunteer, partner, or participate.",
    next: ["Explore Marketplace", "Become a Volunteer", "Meet the Partners"],
  },
  Customer: {
    image: IMG.customer,
    mission: "Connect fresh food, nutrition, and repeat healthy choices.",
    soundbite: "Customers are not just buying produce. They are helping keep food growing close to home.",
    intro:
      "The customer pathway connects families to fresh produce, Bubble Babies™ seedlings, seasonal offerings, nutrition education, and the marketplace.",
    knowledge: [
      "Customers can learn what is growing, what is available, and how to prepare fresh food.",
      "SNAP-friendly marketplace planning supports food access.",
      "Repeat customers help stabilize local growing and community food distribution.",
    ],
    purpose:
      "The customer pathway turns interest into healthy food choices and ongoing participation in the local food system.",
    next: ["Enter Store", "Learn Recipes", "Reserve for Market Day"],
  },
  Marketplace: {
    image: IMG.marketplace,
    mission: "Convert interest into purchasing power and sustainability.",
    soundbite: "The marketplace is where the ecosystem becomes real — produce, seedlings, vendors, growers, and buyers meet.",
    intro:
      "The marketplace connects Bronson Family Farm, Farm & Family Alliance, Parker Farms, growers, value-added producers, and customers through a shared local food economy.",
    knowledge: [
      "Growers Supply Market is Saturday, May 16, 2026, from 9:00 AM to 2:00 PM.",
      "The event is by invitation only, with registration through Eventbrite.",
      "Marketplace pathways support sales, pre-orders, vendor participation, SNAP access, and community visibility.",
    ],
    purpose:
      "The marketplace pathway helps the farm ecosystem become financially sustainable while supporting growers and families.",
    next: ["Open GrownBy Store", "Register on Eventbrite", "View Vendor Map"],
  },
  Grower: {
    image: IMG.grower,
    mission: "Connect producers to opportunity and market participation.",
    soundbite: "Growers are entrepreneurs inside a larger ecosystem — not isolated sellers.",
    intro:
      "Growers register through the portal to access marketplace opportunities, education, visibility, shared systems, and community-based selling pathways.",
    knowledge: [
      "Registered growers can participate in the marketplace ecosystem.",
      "Growers can connect to workshops, crop planning, basic infrastructure demonstrations, and sales opportunities.",
      "Farm & Family Alliance helps organize growers into a stronger regional food network.",
    ],
    purpose:
      "The grower pathway helps local producers move from growing alone to participating in a coordinated food system.",
    next: ["Register as Grower", "View Crop Planner", "Join Supply Market"],
  },
  "Youth Workforce": {
    image: IMG.youth,
    mission: "Build skills, responsibility, and future readiness.",
    soundbite: "Young people learn by doing — planting, serving, checking in guests, supporting markets, and seeing work matter.",
    intro:
      "The youth workforce pathway creates a guided experience where young people build life skills, job readiness, teamwork, responsibility, and confidence.",
    knowledge: [
      "Youth roles can include market support, guest assistance, basic farm tasks, setup, cleanup, and learning stations.",
      "Supervisors can track life skills progress, attendance, readiness, and growth.",
      "The parent portal supports communication, permissions, and family connection.",
    ],
    purpose:
      "The youth workforce pathway turns the farm into a place where young people can practice responsibility and see future possibilities.",
    next: ["Youth Sign-Up", "Supervisor Dashboard", "Parent Portal"],
  },
  "Value-Added Producer": {
    image: IMG.producer,
    mission: "Help makers turn local food and creativity into enterprise.",
    soundbite: "Value-added producers extend the life of the harvest and bring creativity into the local economy.",
    intro:
      "This pathway supports entrepreneurs who make sauces, preserves, baked goods, wellness products, crafts, demonstrations, and other farm-connected products.",
    knowledge: [
      "Value-added producers strengthen the market by expanding what customers can buy and experience.",
      "They help reduce waste by transforming produce into longer-lasting products.",
      "They contribute to a creative, regenerative, locally rooted economy.",
    ],
    purpose:
      "The value-added pathway helps makers become visible contributors to a larger food and community ecosystem.",
    next: ["Apply as Producer", "Share Product List", "Join Demonstrations"],
  },
  Partner: {
    image: IMG.partner,
    mission: "Align resources and collaboration for community benefit.",
    soundbite: "Partners help turn a farm into infrastructure for education, health, workforce, and food access.",
    intro:
      "Partners may support health education, gardening demonstrations, youth activities, supplies, media, food access, arts, workforce development, or infrastructure.",
    knowledge: [
      "Current ecosystem names include Bronson Family Farm, Farm & Family Alliance, Inc., Parker Farms, Gates Drone Services, Central State University, Home Depot, Petitti Garden Centers, Elliott’s Garden Center, and the Youngstown Area Jewish Foundation.",
      "Partners help create a stronger, more visible, more coordinated community food system.",
      "Partnership should be clear, useful, and aligned with the farm’s mission.",
    ],
    purpose:
      "The partner pathway shows how organizations can contribute resources without taking over the community-centered vision.",
    next: ["Partner Interest Form", "Sponsor a Zone", "Schedule Site Visit"],
  },
};

export default function App() {
  const [role, setRole] = useState<Role>("Guest");
  const [lang, setLang] = useState<Lang>("English");
  const [step, setStep] = useState(0);

  const current = data[role];

  const steps = useMemo(
    () => [
      { label: "Sound Bite", text: current.soundbite },
      { label: "Introduction", text: current.intro },
      { label: "Knowledge", text: current.knowledge.join(" ") },
      { label: "Purpose", text: current.purpose },
      { label: "Next Step", text: current.next.join(" · ") },
    ],
    [current]
  );

  const goRole = (nextRole: Role) => {
    setRole(nextRole);
    setStep(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <style>{css}</style>

      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(18,31,20,.86), rgba(18,31,20,.48)), url(${IMG.hero})` }}>
        <div className="topbar">
          <div>
            <div className="brand">Bronson Family Farm</div>
            <div className="subbrand">Developed by Bronson Family Farm</div>
          </div>

          <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
            {Object.keys(languageLine).map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="heroContent">
          <div className="pill">Growers Supply Market · May 16, 2026 · 9 AM–2 PM</div>
          <h1>A Living Farm Ecosystem for Food, Workforce, Marketplace, and Legacy</h1>
          <p>{languageLine[lang]}</p>
          <p>
            By invitation only. Register through Eventbrite for access to Growers Supply Market Day.
          </p>

          <div className="heroButtons">
            <button onClick={() => goRole("Marketplace")}>Enter Marketplace</button>
            <button onClick={() => goRole("Guest")}>Start Guided Tour</button>
          </div>
        </div>
      </section>

      <section className="roleNav">
        {roles.map((r) => (
          <button key={r} className={role === r ? "active" : ""} onClick={() => goRole(r)}>
            {r}
          </button>
        ))}
      </section>

      <section className="pathway">
        <div className="imageCard">
          <img src={current.image} alt={`${role} pathway`} onError={(e) => ((e.currentTarget.style.display = "none"))} />
          <div className="imageOverlay">
            <span>{role} Pathway</span>
          </div>
        </div>

        <div className="contentCard">
          <div className="smallTitle">Mission</div>
          <h2>{current.mission}</h2>

          <div className="stepBox">
            <div className="stepHeader">
              <span>{steps[step].label}</span>
              <span>{step + 1} / {steps.length}</span>
            </div>
            <p>{steps[step].text}</p>
          </div>

          <div className="stepControls">
            <button disabled={step === 0} onClick={() => setStep(step - 1)}>Back</button>
            <button disabled={step === steps.length - 1} onClick={() => setStep(step + 1)}>Next</button>
          </div>

          <div className="actions">
            {current.next.map((n) => (
              <button key={n} onClick={() => alert(`${n}: connected demo action for ${role}.`)}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="market">
        <div>
          <div className="smallTitle">Marketplace Preview</div>
          <h2>Fresh Produce · Bubble Babies™ · Grower Vendors · Outdoor Learning</h2>
          <p>
            The marketplace connects farm products, seedlings, local growers, value-added producers,
            nutrition education, demonstrations, and invited guests into one experience.
          </p>
        </div>

        <div className="marketGrid">
          <div className="marketItem">Bubble Babies™ Seedlings</div>
          <div className="marketItem">Fresh Produce</div>
          <div className="marketItem">Grower Registration</div>
          <div className="marketItem">Vendor Demonstrations</div>
          <div className="marketItem">SNAP-Friendly Planning</div>
          <div className="marketItem">QR Check-In</div>
        </div>
      </section>

      <section className="partners">
        <h2>Ecosystem Partners and Participants</h2>
        <div className="partnerGrid">
          {[
            "Bronson Family Farm",
            "Farm & Family Alliance, Inc.",
            "Parker Farms",
            "Gates Drone Services",
            "Central State University",
            "Home Depot",
            "Petitti Garden Centers",
            "Elliott’s Garden Center",
            "Youngstown Area Jewish Foundation",
          ].map((p) => (
            <div key={p}>{p}</div>
          ))}
        </div>
      </section>

      <footer>
        <strong>Bronson Family Farm Growers Supply Market</strong>
        <span>May 16, 2026 · 9:00 AM–2:00 PM · By Invitation Only · Register on Eventbrite</span>
      </footer>
    </main>
  );
}

const css = `
* { box-sizing: border-box; }
body { margin: 0; font-family: Georgia, 'Times New Roman', serif; background: #f5f1e8; color: #21351f; }
button, select { font: inherit; }
.hero {
  min-height: 88vh;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 28px;
  display: flex;
  flex-direction: column;
}
.topbar {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}
.brand { font-size: 1.5rem; font-weight: 800; }
.subbrand { font-size: .9rem; opacity: .85; }
select {
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.45);
  background: rgba(255,255,255,.92);
  color: #21351f;
}
.heroContent {
  margin: auto 0;
  max-width: 920px;
}
.pill {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 999px;
  background: #b53225;
  color: white;
  font-weight: 800;
  margin-bottom: 18px;
}
h1 {
  font-size: clamp(2.4rem, 6vw, 5.8rem);
  line-height: .95;
  margin: 0 0 22px;
}
h2 {
  font-size: clamp(1.7rem, 3vw, 3rem);
  line-height: 1;
  margin: 8px 0 18px;
}
p { font-size: 1.08rem; line-height: 1.55; }
.heroButtons, .stepControls, .actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}
button {
  cursor: pointer;
  border: 0;
  border-radius: 999px;
  padding: 12px 18px;
  background: #21351f;
  color: white;
  font-weight: 800;
}
button:disabled { opacity: .45; cursor: not-allowed; }
.heroButtons button:first-child { background: #b53225; }
.roleNav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 18px 24px;
  background: #fffaf0;
  border-bottom: 1px solid #ddd2bd;
  position: sticky;
  top: 0;
  z-index: 5;
}
.roleNav button {
  background: #e6dcc7;
  color: #21351f;
}
.roleNav button.active {
  background: #b53225;
  color: white;
}
.pathway {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 28px;
  padding: 42px 28px;
  max-width: 1280px;
  margin: auto;
}
.imageCard, .contentCard, .market, .partners {
  border-radius: 28px;
  overflow: hidden;
  background: white;
  box-shadow: 0 18px 45px rgba(36, 47, 28, .16);
}
.imageCard {
  position: relative;
  min-height: 540px;
  background: linear-gradient(135deg, #7b8b54, #21351f);
}
.imageCard img {
  width: 100%;
  height: 100%;
  min-height: 540px;
  object-fit: cover;
  display: block;
}
.imageOverlay {
  position: absolute;
  left: 18px;
  bottom: 18px;
}
.imageOverlay span {
  background: rgba(0,0,0,.62);
  color: white;
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 800;
}
.contentCard {
  padding: 32px;
}
.smallTitle {
  text-transform: uppercase;
  letter-spacing: .16em;
  font-size: .75rem;
  color: #b53225;
  font-weight: 900;
}
.stepBox {
  background: #f5f1e8;
  border: 1px solid #ddd2bd;
  border-radius: 22px;
  padding: 22px;
  min-height: 210px;
}
.stepHeader {
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  color: #6b5d3c;
}
.actions button {
  background: #7b8b54;
}
.market, .partners {
  max-width: 1280px;
  margin: 18px auto 42px;
  padding: 32px;
}
.marketGrid
