import React, { useMemo, useState } from "react";

type Pathway = {
  id: string;
  title: string;
  subtitle: string;
  mission: string;
  image: string;
  fallback: string;
  details: string[];
};

function FarmImage({
  src,
  fallback,
  alt,
  className = "",
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}) {
  const [current, setCurrent] = useState(src);
  const [triedFallback, setTriedFallback] = useState(false);

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (!triedFallback) {
          setCurrent(fallback);
          setTriedFallback(true);
        }
      }}
    />
  );
}

export default function App() {
  const [selected, setSelected] = useState("guest");

  const pathways: Pathway[] = useMemo(
    () => [
      {
        id: "guest",
        title: "Guest Experience",
        subtitle: "Vision • Story • Purpose",
        mission:
          "Guests understand why Bronson Family Farm exists: land, food, family legacy, and community transformation working together.",
        image: "/images/GrowArea.JPG",
        fallback: "/images/GrowArea.jpg",
        details: [
          "Historic Lansdowne Airport land activated for community benefit",
          "A living farm experience, not a static presentation",
          "Food, stewardship, education, and legacy connected in one place",
          "Invitation-only access supports a guided and intentional experience",
        ],
      },
      {
        id: "customer",
        title: "Customer Pathway",
        subtitle: "Fresh Food • Nutrition • Repeat Healthy Choices",
        mission:
          "Customers connect with fresh produce, nutrition, and local purchasing choices that support a healthier Mahoning Valley.",
        image: "/images/SAM_0106.JPG",
        fallback: "/images/SAM_0106.jpg",
        details: [
          "Fresh local food and seasonal offerings",
          "Nutrition-forward customer education",
          "Produce, seedlings, and farm-based products",
          "Repeat healthy choices connected to the local food system",
        ],
      },
      {
        id: "marketplace",
        title: "Marketplace",
        subtitle: "Sales • Sustainability • Grower Opportunity",
        mission:
          "The marketplace converts interest into purchasing power so growers, vendors, and the ecosystem can become sustainable.",
        image: "/images/SAM_0110.JPG",
        fallback: "/images/SAM_0110.jpg",
        details: [
          "Growers Supply Market event experience",
          "Bubble Babies™ seedlings and farm products",
          "Vendor tables, demonstrations, and direct sales",
          "Supports both in-person and digital marketplace growth",
        ],
      },
      {
        id: "grower",
        title: "Grower Network",
        subtitle: "Producers • Access • Market Participation",
        mission:
          "Growers enter the ecosystem through the portal and gain access to visibility, resources, sales pathways, and shared opportunity.",
        image: "/images/SAM_0107.JPG",
        fallback: "/images/SAM_0107.jpg",
        details: [
          "Registered growers gain marketplace participation benefits",
          "Urban and rural growers are connected",
          "Training, visibility, and shared infrastructure are supported",
          "Growers are entrepreneurs contributing to the larger ecosystem",
        ],
      },
      {
        id: "youth",
        title: "Youth Workforce",
        subtitle: "Skills • Responsibility • Future Readiness",
        mission:
          "Youth build responsibility, confidence, and career readiness through real farm, event, marketplace, and logistics experiences.",
        image: "/images/SAM_0108.JPG",
        fallback: "/images/SAM_0108.jpg",
        details: [
          "Hands-on learning in agriculture and outdoor work",
          "Teamwork, responsibility, and leadership development",
          "Exposure to business, logistics, safety, and customer service",
          "Supervisor-guided growth connected to real outcomes",
        ],
      },
      {
        id: "partners",
        title: "Partners",
        subtitle: "Resources • Alignment • Community Benefit",
        mission:
          "Partners align resources, credibility, education, and support so the farm ecosystem can serve the broader community.",
        image: "/images/SAM_0109.JPG",
        fallback: "/images/SAM_0109.jpg",
        details: [
          "Farm & Family Alliance, Inc.",
          "Parker Farms",
          "Central State University",
          "Home Depot, Petitti’s Garden Center, Elliott’s Garden Center",
          "Gates Drone Services and Youngstown Area Jewish Foundation",
        ],
      },
    ],
    []
  );

  const active = pathways.find((p) => p.id === selected) || pathways[0];

  return (
    <>
      <style>{styles}</style>

      <main className="app">
        <section className="hero">
          <FarmImage
            src="/images/GrowArea.JPG"
            fallback="/images/GrowArea.jpg"
            alt="Bronson Family Farm growing area"
            className="heroImage"
          />

          <div className="heroOverlay" />

          <div className="heroContent">
            <div className="pill">BRONSON FAMILY FARM</div>

            <h1>Growers Supply Market</h1>

            <p className="eventLine">
              May 16, 2026 • 9:00 AM – 2:00 PM • Youngstown, Ohio
            </p>

            <p className="inviteLine">
              By Invitation Only • Register on Eventbrite
            </p>

            <div className="buttonRow">
              <button onClick={() => setSelected("marketplace")}>
                Enter Marketplace
              </button>

              <button className="light" onClick={() => setSelected("guest")}>
                Start Tour
              </button>
            </div>
          </div>
        </section>

        <section className="intro">
          <h2>Choose Your Pathway</h2>
          <p>
            Each pathway shows how Bronson Family Farm, Farm & Family Alliance,
            Inc., Parker Farms, growers, youth, customers, vendors, and partners
            work together as one living ecosystem.
          </p>
        </section>

        <section className="pathGrid">
          {pathways.map((path) => (
            <button
              key={path.id}
              className={`pathCard ${selected === path.id ? "active" : ""}`}
              onClick={() => setSelected(path.id)}
            >
              <FarmImage
                src={path.image}
                fallback={path.fallback}
                alt={path.title}
                className="cardImage"
              />

              <div className="cardText">
                <h3>{path.title}</h3>
                <p>{path.subtitle}</p>
              </div>
            </button>
          ))}
        </section>

        <section className="detail">
          <div className="detailImageBox">
            <FarmImage
              src={active.image}
              fallback={active.fallback}
              alt={active.title}
              className="detailImage"
            />
          </div>

          <div className="detailPanel">
            <span>MISSION PATHWAY</span>
            <h2>{active.title}</h2>
            <p className="mission">{active.mission}</p>

            <div className="layerBox">
              <h4>Sound Bite</h4>
              <p>{active.subtitle}</p>
            </div>

            <div className="layerBox">
              <h4>Knowledge</h4>
              <ul>
                {active.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="layerBox">
              <h4>Next Step</h4>
              <p>
                Continue through the ecosystem to see how this pathway connects
                to the full farm, marketplace, workforce, and partner model.
              </p>
            </div>
          </div>
        </section>

        <section className="market">
          <h2>Growers Supply Market Includes</h2>

          <div className="marketGrid">
            <div>Garden Supplies</div>
            <div>Fresh Produce</div>
            <div>Bubble Babies™</div>
            <div>Workshops</div>
            <div>Arts & Crafts</div>
            <div>Outdoor Demonstrations</div>
          </div>
        </section>

        <footer>
          Developed by Bronson Family Farm • Co-owned with Farm & Family
          Alliance, Inc.
        </footer>
      </main>
    </>
  );
}

const styles = `
* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f1e8;
  color: #1d2418;
}

button {
  font-family: inherit;
}

.app {
  width: 100%;
  overflow-x: hidden;
}

.hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  overflow: hidden;
  background: #77786f;
}

.heroImage {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heroOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.42),
    rgba(0, 0, 0, 0.56)
  );
}

.heroContent {
  position: relative;
  z-index: 2;
  max-width: 980px;
  text-align: center;
  color: white;
}

.pill {
  display: inline-block;
  padding: 9px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.28);
  font-size: 13px;
  letter-spacing: 1.2px;
  margin-bottom: 18px;
}

.hero h1 {
  margin: 0 0 18px;
  font-size: clamp(46px, 7vw, 88px);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -2px;
}

.eventLine {
  margin: 0 0 12px;
  font-size: clamp(20px, 3vw, 30px);
  font-weight: 500;
}

.inviteLine {
  margin: 0;
  font-size: clamp(17px, 2vw, 22px);
}

.buttonRow {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.buttonRow button {
  border: 0;
  border-radius: 12px;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  background: #28742d;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
}

.buttonRow button.light {
  background: white;
  color: #172011;
}

.intro {
  max-width: 920px;
  margin: 0 auto;
  padding: 56px 24px 22px;
  text-align: center;
}

.intro h2 {
  margin: 0 0 12px;
  font-size: clamp(34px, 5vw, 52px);
  letter-spacing: -1px;
}

.intro p {
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  color: #4d5848;
}

.pathGrid {
  width: min(1280px, calc(100% - 48px));
  margin: 24px auto 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
}

.pathCard {
  border: 0;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  text-align: left;
  cursor: pointer;
  padding: 0;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.09);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pathCard:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.12);
}

.pathCard.active {
  outline: 4px solid #28742d;
}

.cardImage {
  width: 100%;
  height: 180px;
  display: block;
  object-fit: cover;
  background: #77786f;
}

.cardText {
  padding: 18px;
}

.cardText h3 {
  margin: 0 0 8px;
  font-size: 22px;
}

.cardText p {
  margin: 0;
  color: #5a6654;
  line-height: 1.4;
}

.detail {
  width: min(1280px, calc(100% - 48px));
  margin: 0 auto 70px;
  display: grid;
  grid-template-columns: 1.08fr 1fr;
  gap: 28px;
  align-items: stretch;
}

.detailImageBox {
  min-height: 560px;
  border-radius: 24px;
  overflow: hidden;
  background: #77786f;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.12);
}

.detailImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.detailPanel {
  background: white;
  border-radius: 24px;
  padding: 30px;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.1);
}

.detailPanel span {
  display: inline-block;
  color: #28742d;
  font-size: 12px;
  letter-spacing: 1.4px;
  font-weight: 900;
  margin-bottom: 10px;
}

.detailPanel h2 {
  margin: 0 0 12px;
  font-size: clamp(34px, 4vw, 52px);
  letter-spacing: -1px;
}

.mission {
  margin: 0 0 20px;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
}

.layerBox {
  border: 1px solid #e2dfd5;
  border-radius: 16px;
  padding: 18px;
  margin-top: 14px;
  background: #faf8f0;
}

.layerBox h4 {
  margin: 0 0 8px;
  color: #28742d;
  font-size: 17px;
}

.layerBox p {
  margin: 0;
  line-height: 1.5;
  color: #3f4b3a;
}

.layerBox ul {
  margin: 0;
  padding-left: 20px;
}

.layerBox li {
  margin-bottom: 8px;
  line-height: 1.45;
}

.market {
  padding: 64px 24px;
  background: #e6dfcf;
}

.market h2 {
  margin: 0 0 28px;
  text-align: center;
  font-size: clamp(34px, 5vw, 52px);
}

.marketGrid {
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
}

.marketGrid div {
  background: white;
  border-radius: 18px;
  padding: 24px 18px;
  text-align: center;
  font-weight: 900;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
}

footer {
  padding: 28px 20px;
  text-align: center;
  font-size: 14px;
  color: #596352;
}

@media (max-width: 900px) {
  .detail {
    grid-template-columns: 1fr;
  }

  .detailImageBox {
    min-height: 380px;
  }
}

@media (max-width: 680px) {
  .hero {
    min-height: 600px;
  }

  .pathGrid,
  .detail {
    width: calc(100% - 28px);
  }

  .detailPanel {
    padding: 22px;
  }
}
`;
