import React, { useMemo, useState } from "react";

type Pathway = {
  id: string;
  title: string;
  subtitle: string;
  mission: string;
  image: string;
  summary: string;
  details: string[];
};

export default function App() {
  const [selected, setSelected] = useState<string | null>(null);

  const pathways: Pathway[] = useMemo(
    () => [
      {
        id: "guest",
        title: "Guest Experience",
        subtitle: "Understand the land, story, and purpose",
        mission:
          "Help first-time visitors quickly understand Bronson Family Farm and why it matters to Youngstown and the Mahoning Valley.",
        image: "/images/GrowArea.jpg",
        summary:
          "Guests enter a living farm ecosystem where food, land stewardship, education, and family legacy come together.",
        details: [
          "Historic Lansdowne Airport land transformed into productive use",
          "Agriculture, agritourism, and community wellness combined",
          "Family-centered mission focused on future generations",
          "Invitation-only events create a curated visitor experience",
        ],
      },
      {
        id: "customer",
        title: "Customer Pathway",
        subtitle: "Fresh food • nutrition • repeat healthy choices",
        mission:
          "Connect families to fresh produce and healthy lifestyle choices.",
        image: "/images/SAM_0106.JPG",
        summary:
          "Customers discover local produce, seasonal items, and direct support of a regional farm ecosystem.",
        details: [
          "Fresh produce grown locally",
          "Nutrition-forward buying experience",
          "Supports community growers",
          "Healthy repeat purchasing habits",
        ],
      },
      {
        id: "market",
        title: "Marketplace",
        subtitle: "Convert interest into purchasing power",
        mission:
          "Create revenue streams that sustain growers, farmers, and the ecosystem.",
        image: "/images/SAM_0110.JPG",
        summary:
          "The marketplace turns curiosity into real transactions through produce, seedlings, supplies, and value-added products.",
        details: [
          "Growers Supply Market events",
          "Bubble Babies™ seedling products",
          "Vendor booths and partnerships",
          "Digital ordering and event check-in",
        ],
      },
      {
        id: "grower",
        title: "Grower Network",
        subtitle: "Connect producers to opportunity",
        mission:
          "Bring growers into one supportive ecosystem with access to customers and resources.",
        image: "/images/SAM_0107.JPG",
        summary:
          "Growers can participate in events, marketplace opportunities, and shared regional momentum.",
        details: [
          "Small growers welcomed",
          "Urban + rural collaboration",
          "Sales opportunities",
          "Shared visibility and support",
        ],
      },
      {
        id: "youth",
        title: "Youth Workforce",
        subtitle: "Skills • responsibility • future readiness",
        mission:
          "Build the next generation through practical experience and leadership.",
        image: "/images/SAM_0108.JPG",
        summary:
          "Youth gain real-world responsibility through agriculture, logistics, sales, teamwork, and stewardship.",
        details: [
          "Hands-on outdoor learning",
          "Work ethic development",
          "Leadership pathways",
          "Career exposure",
        ],
      },
      {
        id: "partners",
        title: "Partners",
        subtitle: "Align resources for community benefit",
        mission:
          "Unite institutions, businesses, nonprofits, and civic leaders for stronger outcomes.",
        image: "/images/SAM_0109.JPG",
        summary:
          "Strategic partnerships expand reach, credibility, and impact.",
        details: [
          "Farm & Family Alliance, Inc.",
          "Parker Farms",
          "Central State University",
          "Home Depot, Petitti’s, Elliott’s, Gates Drone Services",
        ],
      },
    ],
    []
  );

  const active =
    pathways.find((p) => p.id === selected) || pathways[0];

  return (
    <>
      <style>{styles}</style>

      <div className="appShell">
        <section
          className="hero"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)), url('/images/GrowArea.jpg')",
          }}
        >
          <div className="heroInner">
            <div className="badge">BRONSON FAMILY FARM</div>
            <h1 className="heroTitle">Growers Supply Market</h1>
            <p className="heroSub">
              May 16, 2026 • 9:00 AM – 2:00 PM • Youngstown, Ohio
            </p>
            <p className="heroSub small">
              By Invitation Only • Register on Eventbrite
            </p>

            <div className="heroActions">
              <button
                className="primaryBtn"
                onClick={() => setSelected("market")}
              >
                Enter Marketplace
              </button>

              <button
                className="secondaryBtn"
                onClick={() => setSelected("guest")}
              >
                Start Tour
              </button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <h2>Explore the Ecosystem</h2>
            <p>
              Choose a pathway below to understand the mission, purpose, and
              opportunity.
            </p>
          </div>

          <div className="pathGrid">
            {pathways.map((item) => (
              <button
                key={item.id}
                className={`pathCard ${
                  active.id === item.id ? "activeCard" : ""
                }`}
                onClick={() => setSelected(item.id)}
              >
                <img src={item.image} alt={item.title} />
                <div className="cardBody">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="detailWrap">
          <div className="detailImageWrap">
            <img src={active.image} alt={active.title} className="detailImage" />
          </div>

          <div className="detailText">
            <div className="miniLabel">MISSION PATHWAY</div>
            <h2>{active.title}</h2>
            <p className="mission">{active.mission}</p>
            <p className="summary">{active.summary}</p>

            <ul className="bulletList">
              {active.details.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="marketStrip">
          <h2>Growers Supply Market Includes</h2>

          <div className="marketGrid">
            <div className="miniCard">Garden Supplies</div>
            <div className="miniCard">Fresh Produce</div>
            <div className="miniCard">Bubble Babies™</div>
            <div className="miniCard">Workshops</div>
            <div className="miniCard">Arts & Crafts</div>
            <div className="miniCard">Family Experience</div>
          </div>
        </section>

        <footer className="footer">
          Developed by Bronson Family Farm • Co-owned with Farm & Family
          Alliance
        </footer>
      </div>
    </>
  );
}

const styles = `
*{
  box-sizing:border-box;
}

html,body,#root{
  margin:0;
  padding:0;
  font-family:Arial, Helvetica, sans-serif;
  background:#f5f3eb;
  color:#182014;
}

button{
  font-family:inherit;
}

.appShell{
  width:100%;
}

.hero{
  min-height:720px;
  background-size:cover;
  background-position:center;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px;
}

.heroInner{
  max-width:900px;
  text-align:center;
  color:#fff;
}

.badge{
  display:inline-block;
  padding:8px 14px;
  border-radius:999px;
  background:rgba(255,255,255,.15);
  border:1px solid rgba(255,255,255,.25);
  margin-bottom:18px;
  font-size:13px;
  letter-spacing:1px;
}

.heroTitle{
  font-size:72px;
  line-height:1;
  margin:0 0 16px 0;
  font-weight:800;
}

.heroSub{
  font-size:24px;
  margin:0 0 10px 0;
}

.heroSub.small{
  font-size:18px;
}

.heroActions{
  margin-top:28px;
  display:flex;
  gap:14px;
  justify-content:center;
  flex-wrap:wrap;
}

.primaryBtn,
.secondaryBtn{
  border:none;
  padding:14px 24px;
  border-radius:12px;
  cursor:pointer;
  font-size:16px;
  font-weight:700;
}

.primaryBtn{
  background:#2d6a2d;
  color:#fff;
}

.secondaryBtn{
  background:#fff;
  color:#182014;
}

.section{
  padding:54px 28px;
  max-width:1280px;
  margin:0 auto;
}

.sectionHeader{
  text-align:center;
  margin-bottom:28px;
}

.sectionHeader h2{
  margin:0 0 10px 0;
  font-size:38px;
}

.sectionHeader p{
  margin:0;
  color:#546050;
}

.pathGrid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:18px;
}

.pathCard{
  border:none;
  padding:0;
  background:#fff;
  border-radius:18px;
  overflow:hidden;
  cursor:pointer;
  box-shadow:0 8px 22px rgba(0,0,0,.08);
  text-align:left;
}

.pathCard img{
  width:100%;
  height:180px;
  object-fit:cover;
  display:block;
}

.cardBody{
  padding:16px;
}

.cardBody h3{
  margin:0 0 8px 0;
  font-size:22px;
}

.cardBody p{
  margin:0;
  color:#5c6659;
}

.activeCard{
  outline:3px solid #2d6a2d;
}

.detailWrap{
  display:grid;
  grid-template-columns:1.1fr 1fr;
  gap:28px;
  padding:0 28px 60px;
  max-width:1280px;
  margin:0 auto;
}

.detailImageWrap{
  min-height:460px;
}

.detailImage{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:22px;
}

.detailText{
  background:#fff;
  border-radius:22px;
  padding:28px;
  box-shadow:0 8px 24px rgba(0,0,0,.08);
}

.miniLabel{
  font-size:12px;
  letter-spacing:1px;
  color:#2d6a2d;
  font-weight:700;
}

.detailText h2{
  margin:10px 0;
  font-size:42px;
}

.mission{
  font-size:20px;
  font-weight:700;
  margin:0 0 14px;
}

.summary{
  color:#556255;
}

.bulletList{
  margin:18px 0 0;
  padding-left:20px;
}

.bulletList li{
  margin-bottom:10px;
}

.marketStrip{
  padding:60px 28px;
  background:#e8e3d4;
}

.marketStrip h2{
  text-align:center;
  margin:0 0 24px 0;
  font-size:38px;
}

.marketGrid{
  max-width:1180px;
  margin:0 auto;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:16px;
}

.miniCard{
  background:#fff;
  padding:20px;
  border-radius:16px;
  text-align:center;
  font-weight:700;
  box-shadow:0 6px 18px rgba(0,0,0,.06);
}

.footer{
  text-align:center;
  padding:24px;
  font-size:14px;
  color:#566055;
}

@media (max-width: 980px){
  .detailWrap{
    grid-template-columns:1fr;
  }

  .heroTitle{
    font-size:58px;
  }
}

@media (max-width: 760px){
  .hero{
    min-height:560px;
    padding:24px;
  }

  .heroTitle{
    font-size:42px;
  }

  .pathGrid,
  .marketGrid{
    grid-template-columns:1fr;
  }
}
`;
