import React, { useState } from "react";

const IMAGE = {
  hero: "/GrowArea.jpg",
  guest: "/GrowArea.jpg",
  marketplace: "/SAM_0220.JPG",
  grower: "/SAM_0221.JPG",
  youth: "/SAM_0222.JPG",
  partner: "/SAM_0223.JPG",
  valueAdded: "/SAM_0225.JPG",
  community: "/SAM_0226.JPG",
};

const PATHWAYS = [
  {
    key: "guest",
    title: "Guest Pathway",
    subtitle: "Walk in as a visitor. Leave understanding the vision.",
    content:
      "Guests experience Bronson Family Farm as a living place where land, food, family, history, and community renewal come together.",
  },
  {
    key: "marketplace",
    title: "Marketplace",
    subtitle: "Turn interest into participation.",
    content:
      "Explore fresh produce, tools, and value-added goods while supporting local growers.",
  },
  {
    key: "grower",
    title: "Grower Pathway",
    subtitle: "From knowledge to production.",
    content:
      "Growers access land, tools, and shared knowledge to participate in a thriving ecosystem.",
  },
  {
    key: "youth",
    title: "Youth Workforce",
    subtitle: "Learning by doing.",
    content:
      "Youth gain real-world skills through hands-on farming, teamwork, and responsibility.",
  },
  {
    key: "partner",
    title: "Partner Pathway",
    subtitle: "Organizations amplify impact.",
    content:
      "Partners provide resources, services, and support that strengthen the ecosystem.",
  },
  {
    key: "valueAdded",
    title: "Value-Added Producer",
    subtitle: "Extend the value of what is grown.",
    content:
      "Producers transform raw goods into finished products, increasing economic opportunity.",
  },
  {
    key: "community",
    title: "Community Impact",
    subtitle: "One system. Shared benefit.",
    content:
      "The farm strengthens food access, workforce readiness, and community health.",
  },
];

const styles = `
body {
  margin: 0;
  background: #f6f0df;
  font-family: Arial, sans-serif;
  color: #1f261f;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  background: #efe6cf;
}

.nav button {
  margin-right: 10px;
  padding: 8px 14px;
  background: #2f5233;
  color: white;
  border: none;
  border-radius: 6px;
}

.hero {
  padding: 60px 24px;
  color: white;
  background-size: cover;
  background-position: center;
}

.container {
  padding: 24px;
  max-width: 1000px;
  margin: auto;
}

.button-row button {
  margin: 5px;
  padding: 8px 12px;
  border-radius: 6px;
}
`;

const App = () => {
  const [step, setStep] = useState(0);

  const current = PATHWAYS[step];

  return (
    <>
      <style>{styles}</style>

      <div className="header">
        <div>Bronson Family Farm</div>
        <div className="nav">
          <button onClick={() => setStep(1)}>Enter Marketplace</button>
          <button onClick={() => setStep(2)}>Meet the Grower Pathway</button>
          <button onClick={() => setStep(3)}>Youth Workforce</button>
        </div>
      </div>

      <div
        className="hero"
        style={{
          backgroundImage: `url(${IMAGE[current.key]})`,
        }}
      >
        <div>Guided Tour · {step + 1} of {PATHWAYS.length}</div>
        <h1>{current.title}</h1>
        <p>{current.subtitle}</p>
        <button onClick={() => setStep((s) => (s + 1) % PATHWAYS.length)}>
          Continue Guided Tour
        </button>
      </div>

      <div className="container">
        <h3>What this pathway means</h3>
        <p>{current.content}</p>

        <h4>Choose a pathway</h4>
        <div className="button-row">
          {PATHWAYS.map((p, i) => (
            <button key={p.key} onClick={() => setStep(i)}>
              {p.title}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <button onClick={() => setStep((s) => Math.max(s - 1, 0))}>
            Previous
          </button>
          <button
            onClick={() =>
              setStep((s) => Math.min(s + 1, PATHWAYS.length - 1))
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
