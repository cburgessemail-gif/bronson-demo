import React, { useMemo, useState } from "react";

type Mode = "hero" | "cinematic" | "pathways" | "pathway" | "final";
type PathwayId =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners"
  | "value"
  | "investment";

type TourFrame = {
  id: string;
  text: string;
  image: string;
  button: string;
};

type Pathway = {
  id: PathwayId;
  label: string;
  title: string;
  line: string;
  detail: string;
  image: string;
};

const images = {
  hero: "GrowArea.jpg",
  marketplace: "MarketplaceProduce.jpg",
  grower: "GrowArea.jpg",
  youth: "SAM_0214.JPG",
  community: "SAM_0214.JPG",
};

const frames: TourFrame[] = [
  {
    id: "arrival",
    text: "Food. Wellness. Opportunity.",
    image: images.hero,
    button: "Continue",
  },
  {
    id: "marketplace",
    text: "The food moves through the community.",
    image: images.marketplace,
    button: "Continue",
  },
  {
    id: "grower",
    text: "Growers need more than land.",
    image: images.grower,
    button: "Continue the Journey",
  },
  {
    id: "youth",
    text: "Outdoor work becomes confidence.",
    image: images.youth,
    button: "Continue the Journey",
  },
  {
    id: "community",
    text: "Communities grow through participation.",
    image: images.community,
    button: "Enter the Experience",
  },
];

const pathways: Pathway[] = [
  {
    id: "guest",
    label: "Guest",
    title: "Experience The Ecosystem.",
    line:
      "Food, wellness, learning, and participation come together here.",
    detail:
      "Bronson Family Farm transforms land near the Historic Lansdowne Airport into a destination for food access, education, wellness, and agritourism.",
    image: images.hero,
  },
  {
    id: "customer",
    label: "Customer",
    title: "Healthy Communities Begin With Healthy Food.",
    line:
      "Fresh food access strengthens long-term wellness.",
    detail:
      "Customers connect to fresh, chemical-free food while learning how healthier choices strengthen families and communities.",
    image: images.marketplace,
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Local Food Creates Local Strength.",
    line:
      "The marketplace connects growers, customers, and opportunity.",
    detail:
      "The Growers Supply Market brings together tools, growers, demonstrations, seedlings, partnerships, and regional food circulation.",
    image: images.marketplace,
  },
  {
    id: "grower",
    label: "Grower",
    title: "Growers Need Infrastructure.",
    line:
      "Knowledge, tools, and distribution strengthen local growing.",
    detail:
      "The ecosystem supports growers with visibility, infrastructure, education, collaboration, and market participation.",
    image: images.grower,
  },
  {
    id: "youth",
    label: "Youth Workforce",
    title: "Outdoor Work Builds Leadership.",
    line:
      "Young people develop confidence through participation.",
    detail:
      "Youth workforce pathways connect responsibility, teamwork, agriculture, wellness, and future readiness.",
    image: images.youth,
  },
  {
    id: "partners",
    label: "Partners",
    title: "Partnership Creates Capacity.",
    line:
      "Communities grow stronger together.",
    detail:
      "Partners help build infrastructure for food access, workforce development, education, wellness, and long-term sustainability.",
    image: images.community,
  },
  {
    id: "value",
    label: "Value-Added",
    title: "Food Can Become Enterprise.",
    line:
      "Local products create circulation and opportunity.",
    detail:
      "Value-added production transforms local food into products, entrepreneurship, demonstrations, and economic participation.",
    image: images.marketplace,
  },
  {
    id: "investment",
    label: "Investment",
    title: "Investment Builds Resilience.",
    line:
      "Support strengthens food access and sustainability.",
    detail:
      "Investment supports infrastructure, workforce development, agritourism, food distribution, and long-term regional impact.",
    image: images.hero,
  },
];

function img(file: string) {
  return `/images/${file}`;
}

export default function App() {
  const [mode, setMode] = useState<Mode>("hero");
  const [frame, setFrame] = useState(0);
  const [activePathway, setActivePathway] =
    useState<PathwayId>("guest");

  const pathway = useMemo(
    () =>
      pathways.find((p) => p.id === activePathway) || pathways[0],
    [activePathway]
  );

  function nextFrame() {
    if (frame < frames.length - 1) {
      setFrame(frame + 1);
    } else {
      setMode("pathways");
    }
  }

  return (
    <main className="app">
      <style>{styles}</style>

      {mode === "hero" && (
        <section className="screen">
          <img src={img(images.hero)} className="bg" />
          <div className="overlay" />

          <div className="hero">
            <p className="eyebrow">
              Historic Lansdowne Airport · Youngstown
            </p>

            <h1>Food Security Begins Locally.</h1>

            <p className="heroText">
              Bronson Family Farm is building a regional
              ecosystem for food access, wellness,
              workforce development, entrepreneurship,
              agritourism, and community resilience.
            </p>

            <button
              className="primary"
              onClick={() => setMode("cinematic")}
            >
              Enter the Ecosystem
            </button>
          </div>
        </section>
      )}

      {mode === "cinematic" && (
        <section className="screen cinematic">
          <img src={img(frames[frame].image)} className="bg" />
          <div className="overlay dark" />

          <div className="center">
            <h2>{frames[frame].text}</h2>

            <button
              className="primary"
              onClick={nextFrame}
            >
              {frames[frame].button}
            </button>
          </div>
        </section>
      )}

      {mode === "pathways" && (
        <section className="screen pathways">
          <img src={img(images.hero)} className="bg" />
          <div className="overlay dark" />

          <div className="pathwayIntro">
            <p className="eyebrow">
              Guided Ecosystem Experience
            </p>

            <h2>
              Where Would You Like To Enter The
              Ecosystem?
            </h2>

            <div className="grid">
              {pathways.map((p, index) => (
                <button
                  key={p.id}
                  className="card"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                  onClick={() => {
                    setActivePathway(p.id);
                    setMode("pathway");
                  }}
                >
                  <img src={img(p.image)} />

                  <div className="cardContent">
                    <span>{p.label}</span>
                    <strong>{p.title}</strong>
                    <small>{p.line}</small>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {mode === "pathway" && (
        <section className="screen">
          <img src={img(pathway.image)} className="bg" />
          <div className="overlay dark" />

          <div className="pathwayContent">
            <p className="eyebrow">{pathway.label}</p>

            <h2>{pathway.title}</h2>

            <p className="statement">
              {pathway.line}
            </p>

            <p className="detail">
              {pathway.detail}
            </p>

            <button
              className="primary"
              onClick={() => setMode("final")}
            >
              Continue the Journey
            </button>
          </div>
        </section>
      )}

      {mode === "final" && (
        <section className="screen">
          <img src={img(images.community)} className="bg" />
          <div className="overlay dark" />

          <div className="center">
            <p className="eyebrow">Final Message</p>

            <h2>
              What Happens Here Can Change A
              Region.
            </h2>

            <p className="heroText finalText">
              Bronson Family Farm is building a
              place where food security, wellness,
              entrepreneurship, workforce
              development, education, and
              agritourism work together instead
              of separately.
            </p>

            <div className="buttonRow">
              <button className="primary">
                Support the Mission
              </button>

              <button className="secondary">
                Attend the Experience
              </button>

              <button
                className="secondary"
                onClick={() => setMode("pathways")}
              >
                Explore Another Pathway
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

const styles = `
html,body,#root{
margin:0;
background:#06110c;
font-family:Inter,sans-serif;
}

.app{
min-height:100vh;
color:white;
}

.screen{
position:relative;
min-height:100vh;
overflow:hidden;
}

.bg{
position:absolute;
inset:0;
width:100%;
height:100%;
object-fit:cover;
animation:zoom 18s ease-out forwards;
}

.overlay{
position:absolute;
inset:0;
background:linear-gradient(
180deg,
rgba(0,0,0,.25),
rgba(0,0,0,.7)
);
}

.dark{
background:linear-gradient(
180deg,
rgba(0,0,0,.35),
rgba(0,0,0,.82)
);
}

.hero{
position:relative;
z-index:2;
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
padding:0 7vw;
max-width:1100px;
}

.eyebrow{
font-size:.8rem;
letter-spacing:.25em;
text-transform:uppercase;
font-weight:800;
color:#e5d39f;
}

h1,h2{
margin:0;
line-height:.9;
font-weight:900;
letter-spacing:-.06em;
}

h1{
font-size:clamp(4rem,9vw,8rem);
max-width:1000px;
}

h2{
font-size:clamp(3rem,8vw,7rem);
max-width:1100px;
}

.heroText{
margin-top:28px;
font-size:clamp(1.2rem,2vw,1.8rem);
line-height:1.6;
max-width:760px;
color:rgba(255,255,255,.9);
}

.center{
position:relative;
z-index:2;
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
padding:0 24px;
}

.primary,.secondary{
border:0;
border-radius:999px;
padding:16px 24px;
font-weight:800;
cursor:pointer;
font-size:1rem;
}

.primary{
margin-top:40px;
background:#e5d39f;
color:#173628;
}

.secondary{
background:rgba(255,255,255,.12);
border:1px solid rgba(255,255,255,.22);
color:white;
backdrop-filter:blur(12px);
}

.pathwayIntro{
position:relative;
z-index:2;
padding:120px 5vw;
}

.grid{
margin-top:50px;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
}

.card{
opacity:0;
transform:translateY(60px);
animation:rise .8s ease forwards;
background:rgba(255,255,255,.08);
border:1px solid rgba(255,255,255,.16);
border-radius:28px;
overflow:hidden;
backdrop-filter:blur(14px);
color:white;
text-align:left;
padding:0;
cursor:pointer;
}

.card img{
width:100%;
height:180px;
object-fit:cover;
display:block;
}

.cardContent{
padding:20px;
}

.cardContent span{
display:block;
font-size:.72rem;
letter-spacing:.2em;
text-transform:uppercase;
color:#e5d39f;
font-weight:800;
}

.cardContent strong{
display:block;
margin-top:10px;
font-size:1.4rem;
line-height:1.05;
}

.cardContent small{
display:block;
margin-top:12px;
font-size:.95rem;
line-height:1.5;
color:rgba(255,255,255,.82);
}

.pathwayContent{
position:relative;
z-index:2;
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:0 24px;
max-width:1100px;
margin:auto;
}

.statement{
margin-top:30px;
font-size:clamp(1.4rem,2vw,2rem);
font-weight:700;
max-width:850px;
}

.detail{
margin-top:24px;
font-size:1.1rem;
line-height:1.8;
max-width:850px;
color:rgba(255,255,255,.85);
}

.buttonRow{
display:flex;
flex-wrap:wrap;
gap:14px;
justify-content:center;
margin-top:40px;
}

.finalText{
text-align:center;
}

@keyframes rise{
to{
opacity:1;
transform:translateY(0);
}
}

@keyframes zoom{
from{
transform:scale(1.06);
}
to{
transform:scale(1);
}
}

@media(max-width:980px){

.grid{
grid-template-columns:repeat(2,1fr);
}

}

@media(max-width:640px){

.grid{
grid-template-columns:1fr;
}

h1{
font-size:4rem;
}

h2{
font-size:3rem;
}

}
`;
