import React, { useMemo, useState } from "react";

type Mode = "hero" | "cinematic" | "pathways" | "pathway" | "final";
type PathwayId = "guest" | "customer" | "marketplace" | "grower" | "youth" | "partners" | "value" | "investment";

type TourFrame = {
  id: string;
  label: string;
  text: string;
  image: string;
};

type Pathway = {
  id: PathwayId;
  label: string;
  title: string;
  line: string;
  image: string;
  detail: string;
};

const eventbriteUrl = "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const images = {
  hero: "GrowArea.jpg",
  arrival: "GrowArea.jpg",
  marketplace: "SAM_0214.JPG",
  grower: "GrowArea.jpg",
  youth: "SAM_0214.JPG",
  community: "SAM_0214.JPG",
  fallback: "GrowArea.jpg",
};

const tourFrames: TourFrame[] = [
  {
    id: "arrival",
    label: "Arrival",
    text: "Food. Wellness. Opportunity.",
    image: images.arrival,
  },
  {
    id: "marketplace",
    label: "Marketplace",
    text: "The food moves through the community.",
    image: images.marketplace,
  },
  {
    id: "grower",
    label: "Grower",
    text: "Growers need more than land.",
    image: images.grower,
  },
  {
    id: "youth",
    label: "Youth Workforce",
    text: "Outdoor work becomes confidence.",
    image: images.youth,
  },
  {
    id: "community",
    label: "Community",
    text: "Communities grow through participation.",
    image: images.community,
  },
];

const pathways: Pathway[] = [
  {
    id: "guest",
    label: "Guest",
    title: "Experience The Ecosystem.",
    line: "Food, learning, wellness, and participation come together here.",
    image: images.arrival,
    detail: "Guests enter the farm as a destination — a place where land, history, food, and community participation become visible.",
  },
  {
    id: "customer",
    label: "Customer",
    title: "Healthy Communities Begin With Healthy Food.",
    line: "Fresh food access strengthens long-term wellness.",
    image: images.marketplace,
    detail: "Customers connect to fresh, chemical-free food, nutrition awareness, and easier ways to participate in healthier choices.",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Local Food Creates Local Strength.",
    line: "The marketplace connects growers, customers, and opportunity.",
    image: images.marketplace,
    detail: "The Growers Supply Market is not only a sales event. It is where tools, knowledge, seedlings, growers, buyers, and partners meet.",
  },
  {
    id: "grower",
    label: "Grower",
    title: "Growers Need Infrastructure.",
    line: "Knowledge, tools, distribution, and participation strengthen local growing.",
    image: images.grower,
    detail: "Growers come because the ecosystem helps answer real needs: soil, tools, learning, buyers, distribution, and shared visibility.",
  },
  {
    id: "youth",
    label: "Youth Workforce",
    title: "Outdoor Work Builds Leadership.",
    line: "Young people develop confidence through participation and responsibility.",
    image: images.youth,
    detail: "Youth workforce development turns outdoor work into responsibility, confidence, safety, teamwork, and future readiness.",
  },
  {
    id: "partners",
    label: "Partners",
    title: "Partnership Creates Capacity.",
    line: "Communities become stronger when organizations work together.",
    image: images.community,
    detail: "Partners help build what one farm cannot build alone: water, tools, education, food safety, workforce, infrastructure, and trust.",
  },
  {
    id: "value",
    label: "Value-Added",
    title: "Food Can Become Enterprise.",
    line: "Local products create circulation and opportunity.",
    image: images.marketplace,
    detail: "Value-added producers turn food into prepared products, demonstrations, small business pathways, and local revenue circulation.",
  },
  {
    id: "investment",
    label: "Investment",
    title: "Investment Builds Resilience.",
    line: "Support strengthens food access, infrastructure, workforce development, and sustainability.",
    image: images.arrival,
    detail: "Investment helps the farm build the infrastructure needed for food access, youth workforce, agritourism, and long-term regional impact.",
  },
];

function imagePath(file: string) {
  return `/images/${file}`;
}

function handleImageError(e: React.SyntheticEvent<HTMLImageElement>, file: string) {
  const el = e.currentTarget;
  const current = el.getAttribute("src") || "";

  if (current.startsWith("/images/")) {
    el.src = `/${file}`;
    return;
  }

  if (!current.includes(images.fallback)) {
    el.src = `/images/${images.fallback}`;
    return;
  }

  el.style.display = "none";
  const parent = el.parentElement;
  if (parent) parent.classList.add("visualFallback");
}

function App() {
  const [mode, setMode] = useState<Mode>("hero");
  const [frameIndex, setFrameIndex] = useState(0);
  const [activePathwayId, setActivePathwayId] = useState<PathwayId>("guest");
  const [animateKey, setAnimateKey] = useState(0);

  const activeFrame = tourFrames[frameIndex];
  const activePathway = useMemo(
    () => pathways.find((p) => p.id === activePathwayId) || pathways[0],
    [activePathwayId]
  );

  function startTour() {
    setFrameIndex(0);
    setMode("cinematic");
    setAnimateKey((v) => v + 1);
  }

  function nextFrame() {
    if (mode === "cinematic") {
      if (frameIndex < tourFrames.length - 1) {
        setFrameIndex((v) => v + 1);
        setAnimateKey((v) => v + 1);
      } else {
        setMode("pathways");
        setAnimateKey((v) => v + 1);
      }
      return;
    }

    if (mode === "pathway") {
      const current = pathways.findIndex((p) => p.id === activePathwayId);
      const next = pathways[current + 1];
      if (next) {
        setActivePathwayId(next.id);
        setAnimateKey((v) => v + 1);
      } else {
        setMode("final");
        setAnimateKey((v) => v + 1);
      }
    }
  }

  function back() {
    if (mode === "cinematic") {
      if (frameIndex > 0) {
        setFrameIndex((v) => v - 1);
        setAnimateKey((v) => v + 1);
      } else {
        setMode("hero");
      }
      return;
    }

    if (mode === "pathways") {
      setMode("cinematic");
      setFrameIndex(tourFrames.length - 1);
      setAnimateKey((v) => v + 1);
      return;
    }

    if (mode === "pathway") {
      setMode("pathways");
      setAnimateKey((v) => v + 1);
      return;
    }

    if (mode === "final") {
      setMode("pathways");
      setAnimateKey((v) => v + 1);
    }
  }

  function openPathway(id: PathwayId) {
    setActivePathwayId(id);
    setMode("pathway");
    setAnimateKey((v) => v + 1);
  }

  function exitTour() {
    setMode("hero");
    setFrameIndex(0);
    setAnimateKey((v) => v + 1);
  }

  return (
    <main className="app">
      <style>{styles}</style>

      {mode === "hero" && (
        <section className="hero screen">
          <img src={imagePath(images.hero)} alt="Bronson Family Farm" onError={(e) => handleImageError(e, images.hero)} />
          <div className="shade" />
          <div className="brandBar">
            <div>
              <div className="brand">Bronson Family Farm</div>
              <div className="brandSub">Community Food Ecosystem</div>
            </div>
            
          </div>
          <div className="heroContent enterMotion">
            <p className="kicker">Historic Lansdowne Airport · Youngstown, Ohio</p>
            <h1>Food Security Begins Locally.</h1>
            <p className="heroText">
              Bronson Family Farm is building a regional ecosystem for food security, wellness, workforce development, entrepreneurship, and community resilience.
            </p>
            <button className="goldBtn" onClick={startTour}>Enter the Ecosystem</button>
            <div className="languageRow">
              <button>English</button>
              <button>Spanish</button>
              <button>Tagalog</button>
              <button>Italian</button>
              <button>Hebrew</button>
              <button>French</button>
            </div>
          </div>
        </section>
      )}

      {mode === "cinematic" && (
        <section className="cinematic screen" key={`frame-${activeFrame.id}-${animateKey}`}>
          <img src={imagePath(activeFrame.image)} alt={activeFrame.label} onError={(e) => handleImageError(e, activeFrame.image)} />
          <div className="shade deep" />
          <div className="tourStatus">
            <span>{activeFrame.label}</span>
            <span>{frameIndex + 1} / {tourFrames.length}</span>
          </div>
          <div className="centerStatement frameMotion">
            <h2>{activeFrame.text}</h2>
            <button className="goldBtn" onClick={nextFrame}>
              {frameIndex === tourFrames.length - 1 ? "Enter the Experience" : frameIndex >= 2 ? "Continue the Journey" : "Continue"}
            </button>
          </div>
          <GuideControls onBack={back} onContinue={nextFrame} onExit={exitTour} />
        </section>
      )}

      {mode === "pathways" && (
        <section className="pathwayReveal screen scrollable" key={`pathways-${animateKey}`}>
          <img src={imagePath(images.arrival)} alt="Bronson Family Farm" onError={(e) => handleImageError(e, images.arrival)} />
          <div className="shade soft" />
          <div className="revealContent">
            <p className="kicker">Choose Your Entry Point</p>
            <h2>Where Would You Like To Enter The Ecosystem?</h2>
            <div className="pathwayGrid">
              {pathways.map((pathway, index) => (
                <button
                  key={pathway.id}
                  className="pathwayCard"
                  style={{ animationDelay: `${index * 90}ms` }}
                  onClick={() => openPathway(pathway.id)}
                >
                  <div className="cardImage">
                    <img src={imagePath(pathway.image)} alt={pathway.label} onError={(e) => handleImageError(e, pathway.image)} />
                  </div>
                  <div className="cardCopy">
                    <span>{pathway.label}</span>
                    <strong>{pathway.title}</strong>
                    <small>{pathway.line}</small>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <GuideControls onBack={back} onContinue={() => openPathway("guest")} onExit={exitTour} continueLabel="Start" />
        </section>
      )}

      {mode === "pathway" && (
        <section className="pathwayExperience screen" key={`pathway-${activePathway.id}-${animateKey}`}>
          <div className="splitVisual imageFirst">
            <img src={imagePath(activePathway.image)} alt={activePathway.label} onError={(e) => handleImageError(e, activePathway.image)} />
          </div>
          <div className="splitCopy">
            <p className="kicker titleSecond">{activePathway.label}</p>
            <h2 className="titleSecond">{activePathway.title}</h2>
            <p className="lineThird">{activePathway.line}</p>
            <p className="detailThird">{activePathway.detail}</p>
            <div className="actionLast">
              <button className="greenBtn" onClick={nextFrame}>Continue the Journey</button>
              <button className="creamBtn" onClick={() => setMode("pathways")}>Explore Another Pathway</button>
            </div>
          </div>
          <GuideControls onBack={back} onContinue={nextFrame} onExit={exitTour} />
        </section>
      )}

      {mode === "final" && (
        <section className="final screen" key={`final-${animateKey}`}>
          <img src={imagePath(images.community)} alt="Bronson Family Farm community" onError={(e) => handleImageError(e, images.community)} />
          <div className="shade deep" />
          <div className="finalContent frameMotion">
            <p className="kicker">Final Message</p>
            <h2>What Happens Here Can Change A Region.</h2>
            <p>
              Bronson Family Farm is building a place where food security, wellness, entrepreneurship, workforce development, education, and agritourism work together instead of separately.
            </p>
            <p className="subFinal">The ecosystem grows when people participate.</p>
            <div className="finalButtons">
              <button className="goldBtn" onClick={() => openPathway("investment")}>Support the Mission</button>
              <a className="clearBtn" href={eventbriteUrl} target="_blank" rel="noreferrer">Attend the Experience</a>
              <button className="clearBtn" onClick={() => setMode("pathways")}>Explore Another Pathway</button>
            </div>
          </div>
          <GuideControls onBack={back} onContinue={() => setMode("pathways")} onExit={exitTour} continueLabel="Explore" />
        </section>
      )}
    </main>
  );
}

function GuideControls({
  onBack,
  onContinue,
  onExit,
  continueLabel = "Continue",
}: {
  onBack: () => void;
  onContinue: () => void;
  onExit: () => void;
  continueLabel?: string;
}) {
  return (
    <div className="guideControls">
      <button onClick={onBack}>Back</button>
      <button onClick={onContinue}>{continueLabel}</button>
      <button onClick={onExit}>Exit Tour</button>
    </div>
  );
}

const styles = `
:root{
  --green:#173C2D;
  --deep:#0d2118;
  --gold:#E7D7A3;
  --cream:#F5F1E6;
  --text:#1C1C1C;
  --muted:#6e6658;
}
*{box-sizing:border-box}
html,body,#root{margin:0;min-height:100%;background:var(--deep)}
body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
button,a{font-family:inherit}
button{cursor:pointer}
.app{min-height:100vh;background:var(--deep);color:white;overflow:hidden}
.screen{position:relative;min-height:100vh;width:100%;overflow:hidden}
.scrollable{overflow-y:auto}
.screen>img,.hero>img,.cinematic>img,.final>img,.pathwayReveal>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;transform:scale(1.03);animation:slowScale 18s ease-out forwards}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,10,7,.94),rgba(10,25,17,.68),rgba(10,25,17,.34));z-index:1}
.shade.deep{background:linear-gradient(180deg,rgba(6,14,10,.46),rgba(6,14,10,.82))}
.shade.soft{background:linear-gradient(180deg,rgba(13,33,24,.72),rgba(245,241,230,.96) 48%,rgba(245,241,230,1))}
.visualFallback{background:linear-gradient(135deg,#173C2D,#2F684D,#E7D7A3)}
.brandBar{position:absolute;top:0;left:0;right:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:28px clamp(22px,5vw,72px)}
.brand{font-size:1.3rem;font-weight:950;letter-spacing:-.02em}.brandSub{margin-top:4px;font-size:.75rem;font-weight:900;text-transform:uppercase;letter-spacing:.18em;color:rgba(255,255,255,.72)}
.eventPill{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.12);border-radius:999px;padding:10px 14px;font-size:.85rem;font-weight:900;backdrop-filter:blur(12px)}
.heroContent{position:relative;z-index:2;min-height:100vh;display:flex;flex-direction:column;justify-content:center;max-width:1040px;padding:140px clamp(22px,7vw,96px) 110px}
.kicker{margin:0 0 18px;font-size:.8rem;font-weight:950;text-transform:uppercase;letter-spacing:.25em;color:var(--gold)}
h1{margin:0;font-size:clamp(4rem,10vw,8.8rem);line-height:.88;letter-spacing:-.075em;font-weight:1000;max-width:1060px}.heroText{margin:34px 0 0;max-width:790px;font-size:clamp(1.25rem,2vw,1.9rem);line-height:1.55;color:rgba(255,255,255,.9)}.languageRow{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}.languageRow button{border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.08);backdrop-filter:blur(12px);color:white;border-radius:999px;padding:8px 14px;font-size:.78rem;font-weight:900}
.goldBtn,.greenBtn,.creamBtn,.clearBtn{border:0;border-radius:999px;padding:17px 24px;font-size:1rem;font-weight:950;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;transition:transform .2s,background .2s,color .2s;box-shadow:0 20px 50px rgba(0,0,0,.22)}
.goldBtn{margin-top:42px;background:var(--gold);color:var(--green)}.goldBtn:hover,.greenBtn:hover,.creamBtn:hover,.clearBtn:hover{transform:translateY(-2px)}.greenBtn{background:var(--green);color:white}.creamBtn{background:var(--cream);color:var(--green)}.clearBtn{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);color:white;backdrop-filter:blur(10px)}
.tourStatus{position:absolute;z-index:3;top:32px;left:clamp(22px,5vw,72px);right:clamp(22px,5vw,72px);display:flex;justify-content:space-between;align-items:center;font-size:.85rem;font-weight:950;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.75)}
.centerStatement{position:relative;z-index:2;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 24px}.centerStatement h2{margin:0;max-width:1050px;font-size:clamp(3.2rem,8vw,8.5rem);line-height:.92;letter-spacing:-.07em;font-weight:1000;text-wrap:balance}.centerStatement .goldBtn{margin-top:48px}
.guideControls{position:fixed;z-index:20;left:50%;bottom:24px;transform:translateX(-50%);display:flex;gap:10px;border:1px solid rgba(255,255,255,.22);background:rgba(10,25,17,.56);padding:8px;border-radius:999px;backdrop-filter:blur(18px);box-shadow:0 20px 60px rgba(0,0,0,.35)}
.guideControls button{border:0;background:rgba(255,255,255,.12);color:white;border-radius:999px;padding:10px 14px;font-size:.86rem;font-weight:950}.guideControls button:nth-child(2){background:var(--gold);color:var(--green)}
.revealContent{position:relative;z-index:2;min-height:100vh;padding:110px clamp(20px,5vw,72px) 110px;color:var(--text)}.revealContent .kicker{color:var(--green)}.revealContent h2{margin:0 0 42px;max-width:980px;color:var(--green);font-size:clamp(2.8rem,6.4vw,6.2rem);line-height:.92;letter-spacing:-.06em;font-weight:1000}.pathwayGrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;max-width:1320px}.pathwayCard{opacity:0;transform:translateY(34px);animation:cardUp .7s ease forwards;text-align:left;border:0;border-radius:32px;overflow:hidden;background:white;color:var(--text);box-shadow:0 28px 80px rgba(23,60,45,.2);transition:transform .25s,box-shadow .25s}.pathwayCard:hover{transform:translateY(-7px);box-shadow:0 34px 96px rgba(23,60,45,.3)}.cardImage{height:170px;background:var(--green);overflow:hidden}.cardImage img{width:100%;height:100%;object-fit:cover;display:block}.cardCopy{padding:22px}.cardCopy span{display:block;color:var(--muted);font-size:.72rem;font-weight:950;text-transform:uppercase;letter-spacing:.2em}.cardCopy strong{display:block;margin-top:10px;color:var(--green);font-size:1.45rem;line-height:1.05;font-weight:1000}.cardCopy small{display:block;margin-top:12px;color:#5b554b;font-size:.95rem;line-height:1.45}
.pathwayExperience{display:grid;grid-template-columns:1.05fr .95fr;background:var(--cream);color:var(--text)}.splitVisual{position:relative;min-height:100vh;overflow:hidden;background:var(--green)}.splitVisual img{width:100%;height:100%;object-fit:cover;display:block}.splitVisual:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,0))}.splitCopy{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:110px clamp(28px,5vw,72px)}.splitCopy .kicker{color:var(--green)}.splitCopy h2{margin:0;color:var(--green);font-size:clamp(3.2rem,6.8vw,6.7rem);line-height:.88;letter-spacing:-.07em;font-weight:1000}.lineThird{max-width:720px;margin:30px 0 0;font-size:clamp(1.35rem,2.2vw,2rem);line-height:1.38;color:#4c463e;font-weight:850}.detailThird{max-width:720px;margin:24px 0 0;font-size:1.08rem;line-height:1.7;color:#5f584d}.actionLast{display:flex;flex-wrap:wrap;gap:14px;margin-top:38px}
.finalContent{position:relative;z-index:2;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:120px 24px}.finalContent h2{margin:0;max-width:1100px;font-size:clamp(3.4rem,8vw,8.2rem);line-height:.9;letter-spacing:-.07em;font-weight:1000}.finalContent p{max-width:900px;margin:34px auto 0;font-size:clamp(1.25rem,2vw,1.9rem);line-height:1.55;color:rgba(255,255,255,.88)}.subFinal{font-weight:950;color:var(--gold)!important}.finalButtons{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin-top:36px}.finalButtons .goldBtn{margin-top:0}
.enterMotion{animation:riseIn .9s ease both}.frameMotion{animation:frameIn .8s ease both}.imageFirst{animation:imageIn .75s ease both}.titleSecond{animation:fadeUp .65s ease both;animation-delay:.22s}.lineThird,.detailThird{animation:fadeUp .65s ease both;animation-delay:.42s}.actionLast{animation:fadeUp .65s ease both;animation-delay:.64s}
@keyframes slowScale{from{transform:scale(1.08)}to{transform:scale(1)}}@keyframes riseIn{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}@keyframes frameIn{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:scale(1)}}@keyframes cardUp{to{opacity:1;transform:translateY(0)}}@keyframes imageIn{from{opacity:.2;transform:scale(1.02)}to{opacity:1;transform:scale(1)}}@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:980px){.eventPill{display:none}.pathwayGrid{grid-template-columns:repeat(2,minmax(0,1fr))}.pathwayExperience{grid-template-columns:1fr}.splitVisual{min-height:48vh}.splitCopy{min-height:52vh;padding-bottom:120px}.guideControls{bottom:14px}.centerStatement h2{font-size:clamp(3rem,12vw,6rem)}}
@media(max-width:620px){.brandBar{padding:20px}.pathwayGrid{grid-template-columns:1fr}.heroContent{padding:120px 22px 110px}h1{font-size:clamp(3.1rem,16vw,5rem)}.heroText{font-size:1.15rem}.guideControls{width:calc(100% - 24px);justify-content:space-between}.guideControls button{flex:1;padding:10px 8px}.revealContent{padding:90px 18px 110px}.splitCopy h2,.finalContent h2{font-size:clamp(3rem,14vw,5.2rem)}}
`;

export default App;
