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

type LanguageId = "en" | "es" | "tl" | "it" | "he" | "fr";

type TourFrame = {
  id: string;
  label: string;
  title: string;
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
  actions: { label: string; target: PathwayId | "final" | "event" | "pathways" }[];
};

const eventbriteUrl = "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const images = {
  hero: "GrowArea.jpg",
  arrival: "GrowArea.jpg",
  marketplace: "SAM_0214.JPG",
  customer: "SAM_0214.JPG",
  grower: "GrowArea2.jpg",
  youth: "SAM_0214.JPG",
  partners: "GrowArea.jpg",
  value: "SAM_0214.JPG",
  investment: "GrowArea2.jpg",
  community: "GrowArea.jpg",
  fallback: "GrowArea.jpg",
};

const languageLabels: Record<LanguageId, string> = {
  en: "English",
  es: "Spanish",
  tl: "Tagalog",
  it: "Italian",
  he: "Hebrew",
  fr: "French",
};

const translatedOpening: Record<LanguageId, string> = {
  en: "Food Security Begins Locally.",
  es: "La seguridad alimentaria comienza localmente.",
  tl: "Nagsisimula sa lokal na komunidad ang seguridad sa pagkain.",
  it: "La sicurezza alimentare comincia localmente.",
  he: "ביטחון תזונתי מתחיל בקהילה המקומית.",
  fr: "La sécurité alimentaire commence localement.",
};

const tourFrames: TourFrame[] = [
  {
    id: "arrival",
    label: "Arrival",
    title: "You Are Entering A Working Farm Ecosystem.",
    text:
      "Bronson Family Farm is located at the Historic Lansdowne Airport in Youngstown, Ohio — a place where land, history, food access, and community participation come together.",
    image: images.arrival,
  },
  {
    id: "history",
    label: "History + Place",
    title: "This Land Carries A Larger Story.",
    text:
      "The airport setting gives the farm a memorable identity: open land, movement, possibility, and a place-based opportunity to transform underused space into community food infrastructure.",
    image: images.community,
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "The Food Moves. The Farmer Does Not Have To.",
    text:
      "The ecosystem is designed to help food circulate to families, schools, businesses, and community partners through shared distribution, visibility, and market coordination.",
    image: images.marketplace,
  },
  {
    id: "grower",
    label: "Grower Need",
    title: "Growers Need More Than Land.",
    text:
      "Growers need tools, seedlings, soil knowledge, buyers, storage, food safety support, and practical pathways into the marketplace.",
    image: images.grower,
  },
  {
    id: "youth",
    label: "Youth Workforce",
    title: "Outdoor Work Becomes Confidence.",
    text:
      "Young people learn safety, responsibility, teamwork, communication, and leadership through meaningful farm-based work.",
    image: images.youth,
  },
  {
    id: "destination",
    label: "Agritourism Future",
    title: "This Can Become A Destination.",
    text:
      "The long-term vision includes agritourism, camping, youth activities, an 18-hole mini-golf experience, a kids zone, food demonstrations, and value-added enterprise.",
    image: images.community,
  },
];

const pathways: Pathway[] = [
  {
    id: "guest",
    label: "Guest",
    title: "Experience The Ecosystem.",
    line: "Guests see the farm as a living story of food, land, history, wellness, and community possibility.",
    image: images.arrival,
    detail:
      "The Guest pathway introduces Bronson Family Farm as more than a farm visit. It is a guided experience through place, purpose, food access, and the people building a stronger local food system.",
    actions: [
      { label: "See How Food Moves", target: "marketplace" },
      { label: "Meet The Grower Need", target: "grower" },
      { label: "Explore All Pathways", target: "pathways" },
    ],
  },
  {
    id: "customer",
    label: "Customer",
    title: "Healthy Communities Begin With Healthy Food.",
    line: "Customers connect to fresh, chemical-free food and practical nutrition awareness.",
    image: images.customer,
    detail:
      "The Customer pathway explains why food quality matters. Bronson Family Farm is building access to fresh, local, chemical-free food so healthier choices become easier and more consistent for families.",
    actions: [
      { label: "Go To Marketplace", target: "marketplace" },
      { label: "See Value-Added Food", target: "value" },
      { label: "Continue Journey", target: "grower" },
    ],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Local Food Creates Local Strength.",
    line: "The marketplace connects growers, customers, seedlings, tools, education, and distribution.",
    image: images.marketplace,
    detail:
      "The Growers Supply Market is not just a farmers market. It is a grower-centered access point where people find supplies, demonstrations, seedlings, partners, food knowledge, and coordinated ways to move food into the community.",
    actions: [
      { label: "Why Growers Come", target: "grower" },
      { label: "Customer Food Access", target: "customer" },
      { label: "Event Registration", target: "event" },
    ],
  },
  {
    id: "grower",
    label: "Grower",
    title: "Growers Need Infrastructure.",
    line: "Growers need knowledge, tools, shared visibility, distribution, and market access.",
    image: images.grower,
    detail:
      "The Grower pathway answers the real reason to participate: growers need support systems. This ecosystem helps reduce isolation by connecting growers to supplies, education, customers, partners, and food movement.",
    actions: [
      { label: "See Marketplace Support", target: "marketplace" },
      { label: "Build With Partners", target: "partners" },
      { label: "Youth Workforce", target: "youth" },
    ],
  },
  {
    id: "youth",
    label: "Youth Workforce",
    title: "Outdoor Work Builds Leadership.",
    line: "Young people build responsibility, safety habits, confidence, teamwork, and future readiness.",
    image: images.youth,
    detail:
      "The Youth Workforce pathway shows how the farm becomes a training ground. Youth learn by doing — planting, preparing, supporting events, communicating, solving problems, and seeing their work matter.",
    actions: [
      { label: "Partner Support", target: "partners" },
      { label: "Value-Added Enterprise", target: "value" },
      { label: "Continue Journey", target: "investment" },
    ],
  },
  {
    id: "partners",
    label: "Partners",
    title: "Partnership Creates Capacity.",
    line: "Partners help build what one farm cannot build alone.",
    image: images.partners,
    detail:
      "The Partner pathway shows how organizations, funders, educators, growers, health partners, artists, workforce programs, and local businesses help create a stronger food ecosystem together.",
    actions: [
      { label: "Support The Mission", target: "investment" },
      { label: "Marketplace Role", target: "marketplace" },
      { label: "Youth Workforce Role", target: "youth" },
    ],
  },
  {
    id: "value",
    label: "Value-Added",
    title: "Food Can Become Enterprise.",
    line: "Prepared products, demonstrations, and small business pathways help money circulate locally.",
    image: images.value,
    detail:
      "The Value-Added pathway explains how fresh food can become sauces, meals, tastings, demonstrations, preserved goods, culinary training, and business opportunities that keep value in the community.",
    actions: [
      { label: "Customer Pathway", target: "customer" },
      { label: "Marketplace Pathway", target: "marketplace" },
      { label: "Investment Pathway", target: "investment" },
    ],
  },
  {
    id: "investment",
    label: "Investment",
    title: "Investment Builds Resilience.",
    line: "Capital support strengthens food access, infrastructure, workforce development, and sustainability.",
    image: images.investment,
    detail:
      "The Investment pathway explains what support makes possible: water, solar, storage, tools, safety systems, food distribution, youth workforce, value-added production, and an agritourism destination that can be replicated.",
    actions: [
      { label: "Final Message", target: "final" },
      { label: "See Partners", target: "partners" },
      { label: "Explore Again", target: "pathways" },
    ],
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
  const [language, setLanguage] = useState<LanguageId>("en");
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
      } else {
        setMode("pathways");
      }
      setAnimateKey((v) => v + 1);
      return;
    }

    if (mode === "pathway") {
      const current = pathways.findIndex((p) => p.id === activePathwayId);
      const next = pathways[current + 1];
      if (next) {
        setActivePathwayId(next.id);
      } else {
        setMode("final");
      }
      setAnimateKey((v) => v + 1);
    }
  }

  function back() {
    if (mode === "cinematic") {
      if (frameIndex > 0) setFrameIndex((v) => v - 1);
      else setMode("hero");
      setAnimateKey((v) => v + 1);
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

  function runAction(target: PathwayId | "final" | "event" | "pathways") {
    if (target === "event") {
      window.open(eventbriteUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (target === "final") {
      setMode("final");
      setAnimateKey((v) => v + 1);
      return;
    }

    if (target === "pathways") {
      setMode("pathways");
      setAnimateKey((v) => v + 1);
      return;
    }

    openPathway(target);
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
          <img
            src={imagePath(images.hero)}
            alt="Bronson Family Farm"
            onError={(e) => handleImageError(e, images.hero)}
          />
          <div className="shade" />

          <div className="brandBar">
            <div>
              <div className="brand">Bronson Family Farm</div>
              <div className="brandSub">Community Food Ecosystem</div>
            </div>
            <div className="eventPill">Growers Supply Market · May 16, 2026</div>
          </div>

          <div className="heroContent enterMotion">
            <p className="kicker">Historic Lansdowne Airport · Youngstown, Ohio</p>
            <h1>{translatedOpening[language]}</h1>
            <p className="heroText">
              A guided demo through food security, chemical-free growing, local food circulation,
              youth workforce, value-added enterprise, partnerships, and long-term agritourism.
            </p>

            <button className="goldBtn" onClick={startTour}>
              Enter the Ecosystem
            </button>

            <div className="languageRow" aria-label="Language selection">
              {(Object.keys(languageLabels) as LanguageId[]).map((id) => (
                <button
                  key={id}
                  className={language === id ? "activeLanguage" : ""}
                  onClick={() => setLanguage(id)}
                >
                  {languageLabels[id]}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {mode === "cinematic" && (
        <section className="cinematic screen" key={`frame-${activeFrame.id}-${animateKey}`}>
          <img
            src={imagePath(activeFrame.image)}
            alt={activeFrame.label}
            onError={(e) => handleImageError(e, activeFrame.image)}
          />
          <div className="shade deep" />

          <div className="tourStatus">
            <span>{activeFrame.label}</span>
            <span>
              {frameIndex + 1} / {tourFrames.length}
            </span>
          </div>

          <div className="progressRail">
            {tourFrames.map((frame, index) => (
              <button
                key={frame.id}
                className={index === frameIndex ? "activeDot" : ""}
                onClick={() => {
                  setFrameIndex(index);
                  setAnimateKey((v) => v + 1);
                }}
                aria-label={`Go to ${frame.label}`}
              />
            ))}
          </div>

          <div className="centerStatement frameMotion">
            <p className="kicker">{activeFrame.label}</p>
            <h2>{activeFrame.title}</h2>
            <p>{activeFrame.text}</p>
            <button className="goldBtn" onClick={nextFrame}>
              {frameIndex === tourFrames.length - 1 ? "Choose Your Pathway" : "Continue the Guided Tour"}
            </button>
          </div>

          <GuideControls onBack={back} onContinue={nextFrame} onExit={exitTour} />
        </section>
      )}

      {mode === "pathways" && (
        <section className="pathwayReveal screen scrollable" key={`pathways-${animateKey}`}>
          <img
            src={imagePath(images.arrival)}
            alt="Bronson Family Farm"
            onError={(e) => handleImageError(e, images.arrival)}
          />
          <div className="shade soft" />

          <div className="revealContent">
            <p className="kicker">Choose Your Entry Point</p>
            <h2>Every pathway shows how the ecosystem works.</h2>
            <p className="sectionIntro">
              Start anywhere. Each pathway connects to another part of the story so visitors understand
              how food, people, tools, learning, distribution, and investment work together.
            </p>

            <div className="pathwayGrid">
              {pathways.map((pathway, index) => (
                <button
                  key={pathway.id}
                  className="pathwayCard"
                  style={{ animationDelay: `${index * 90}ms` }}
                  onClick={() => openPathway(pathway.id)}
                >
                  <div className="cardImage">
                    <img
                      src={imagePath(pathway.image)}
                      alt={pathway.label}
                      onError={(e) => handleImageError(e, pathway.image)}
                    />
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

          <GuideControls
            onBack={back}
            onContinue={() => openPathway("guest")}
            onExit={exitTour}
            continueLabel="Start"
          />
        </section>
      )}

      {mode === "pathway" && (
        <section className="pathwayExperience screen" key={`pathway-${activePathway.id}-${animateKey}`}>
          <div className="splitVisual imageFirst">
            <img
              src={imagePath(activePathway.image)}
              alt={activePathway.label}
              onError={(e) => handleImageError(e, activePathway.image)}
            />
          </div>

          <div className="splitCopy">
            <p className="kicker titleSecond">{activePathway.label}</p>
            <h2 className="titleSecond">{activePathway.title}</h2>
            <p className="lineThird">{activePathway.line}</p>
            <p className="detailThird">{activePathway.detail}</p>

            <div className="journeyPrompt">
              <strong>Guided next step:</strong> choose where this story should go next.
            </div>

            <div className="actionLast">
              {activePathway.actions.map((action) => (
                <button
                  key={action.label}
                  className={action.target === "event" ? "goldBtn noMargin" : "greenBtn"}
                  onClick={() => runAction(action.target)}
                >
                  {action.label}
                </button>
              ))}
              <button className="creamBtn" onClick={nextFrame}>
                Continue In Order
              </button>
            </div>
          </div>

          <GuideControls onBack={back} onContinue={nextFrame} onExit={exitTour} />
        </section>
      )}

      {mode === "final" && (
        <section className="final screen" key={`final-${animateKey}`}>
          <img
            src={imagePath(images.community)}
            alt="Bronson Family Farm community"
            onError={(e) => handleImageError(e, images.community)}
          />
          <div className="shade deep" />

          <div className="finalContent frameMotion">
            <p className="kicker">Final Message</p>
            <h2>What Happens Here Can Change A Region.</h2>
            <p>
              Bronson Family Farm is building a place where food security, wellness,
              entrepreneurship, workforce development, education, chemical-free growing, and
              agritourism work together instead of separately.
            </p>
            <p className="subFinal">
              The ecosystem grows when people participate.
            </p>

            <div className="finalButtons">
              <button className="goldBtn noMargin" onClick={() => openPathway("investment")}>
                Support the Mission
              </button>
              <a className="clearBtn" href={eventbriteUrl} target="_blank" rel="noreferrer">
                Attend the Experience
              </a>
              <button className="clearBtn" onClick={() => setMode("pathways")}>
                Explore Another Pathway
              </button>
              <button className="clearBtn" onClick={exitTour}>
                Return Home
              </button>
            </div>
          </div>

          <GuideControls
            onBack={back}
            onContinue={() => setMode("pathways")}
            onExit={exitTour}
            continueLabel="Explore"
          />
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
.screen>img,.hero>img,.cinematic>img,.final>img,.pathwayReveal>img{
  position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;
  transform:scale(1.03);animation:slowScale 18s ease-out forwards
}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,10,7,.94),rgba(10,25,17,.68),rgba(10,25,17,.34));z-index:1}
.shade.deep{background:linear-gradient(180deg,rgba(6,14,10,.48),rgba(6,14,10,.86))}
.shade.soft{background:linear-gradient(180deg,rgba(13,33,24,.72),rgba(245,241,230,.96) 48%,rgba(245,241,230,1))}
.visualFallback{background:linear-gradient(135deg,#173C2D,#2F684D,#E7D7A3)}
.brandBar{position:absolute;top:0;left:0;right:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:28px clamp(22px,5vw,72px)}
.brand{font-size:1.3rem;font-weight:950;letter-spacing:-.02em}
.brandSub{margin-top:4px;font-size:.75rem;font-weight:900;text-transform:uppercase;letter-spacing:.18em;color:rgba(255,255,255,.72)}
.eventPill{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.12);border-radius:999px;padding:10px 14px;font-size:.85rem;font-weight:900;backdrop-filter:blur(12px)}
.heroContent{position:relative;z-index:2;min-height:100vh;display:flex;flex-direction:column;justify-content:center;max-width:1080px;padding:140px clamp(22px,7vw,96px) 110px}
.kicker{margin:0 0 18px;font-size:.8rem;font-weight:950;text-transform:uppercase;letter-spacing:.25em;color:var(--gold)}
h1{margin:0;font-size:clamp(4rem,10vw,8.8rem);line-height:.88;letter-spacing:-.075em;font-weight:1000;max-width:1100px}
.heroText{margin:34px 0 0;max-width:840px;font-size:clamp(1.25rem,2vw,1.9rem);line-height:1.55;color:rgba(255,255,255,.9)}
.languageRow{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.languageRow button{border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.08);backdrop-filter:blur(12px);color:white;border-radius:999px;padding:8px 14px;font-size:.78rem;font-weight:900}
.languageRow button.activeLanguage{background:var(--gold);color:var(--green)}
.goldBtn,.greenBtn,.creamBtn,.clearBtn{border:0;border-radius:999px;padding:17px 24px;font-size:1rem;font-weight:950;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;transition:transform .2s,background .2s,color .2s;box-shadow:0 20px 50px rgba(0,0,0,.22)}
.goldBtn{margin-top:42px;background:var(--gold);color:var(--green)}
.noMargin{margin-top:0}
.goldBtn:hover,.greenBtn:hover,.creamBtn:hover,.clearBtn:hover{transform:translateY(-2px)}
.greenBtn{background:var(--green);color:white}
.creamBtn{background:var(--cream);color:var(--green)}
.clearBtn{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);color:white;backdrop-filter:blur(10px)}
.tourStatus{position:absolute;z-index:3;top:32px;left:clamp(22px,5vw,72px);right:clamp(22px,5vw,72px);display:flex;justify-content:space-between;align-items:center;font-size:.85rem;font-weight:950;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.75)}
.progressRail{position:absolute;z-index:4;left:50%;top:84px;transform:translateX(-50%);display:flex;gap:10px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);padding:9px 12px;border-radius:999px;backdrop-filter:blur(14px)}
.progressRail button{width:12px;height:12px;border-radius:999px;border:0;background:rgba(255,255,255,.38);padding:0}
.progressRail button.activeDot{background:var(--gold);width:34px}
.centerStatement{position:relative;z-index:2;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:130px 24px}
.centerStatement h2{margin:0;max-width:1120px;font-size:clamp(3rem,7.2vw,7.8rem);line-height:.92;letter-spacing:-.07em;font-weight:1000;text-wrap:balance}
.centerStatement p:not(.kicker){max-width:900px;margin:28px auto 0;font-size:clamp(1.1rem,1.8vw,1.55rem);line-height:1.6;color:rgba(255,255,255,.88)}
.centerStatement .goldBtn{margin-top:42px}
.guideControls{position:fixed;z-index:20;left:50%;bottom:24px;transform:translateX(-50%);display:flex;gap:10px;border:1px solid rgba(255,255,255,.22);background:rgba(10,25,17,.56);padding:8px;border-radius:999px;backdrop-filter:blur(18px);box-shadow:0 20px 60px rgba(0,0,0,.35)}
.guideControls button{border:0;background:rgba(255,255,255,.12);color:white;border-radius:999px;padding:10px 14px;font-size:.86rem;font-weight:950}
.guideControls button:nth-child(2){background:var(--gold);color:var(--green)}
.revealContent{position:relative;z-index:2;min-height:100vh;padding:110px clamp(20px,5vw,72px) 130px;color:var(--text)}
.revealContent .kicker{color:var(--green)}
.revealContent h2{margin:0 0 20px;max-width:1040px;color:var(--green);font-size:clamp(2.8rem,6.4vw,6.2rem);line-height:.92;letter-spacing:-.06em;font-weight:1000}
.sectionIntro{max-width:900px;margin:0 0 42px;color:#4c463e;font-size:1.18rem;line-height:1.65;font-weight:750}
.pathwayGrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;max-width:1320px}
.pathwayCard{opacity:0;transform:translateY(34px);animation:cardUp .7s ease forwards;text-align:left;border:0;border-radius:32px;overflow:hidden;background:white;color:var(--text);box-shadow:0 28px 80px rgba(23,60,45,.2);transition:transform .25s,box-shadow .25s}
.pathwayCard:hover{transform:translateY(-7px);box-shadow:0 34px 96px rgba(23,60,45,.3)}
.cardImage{height:170px;background:var(--green);overflow:hidden}
.cardImage img{width:100%;height:100%;object-fit:cover;display:block}
.cardCopy{padding:22px}
.cardCopy span{display:block;color:var(--muted);font-size:.72rem;font-weight:950;text-transform:uppercase;letter-spacing:.2em}
.cardCopy strong{display:block;margin-top:10px;color:var(--green);font-size:1.45rem;line-height:1.05;font-weight:1000}
.cardCopy small{display:block;margin-top:12px;color:#5b554b;font-size:.95rem;line-height:1.45}
.pathwayExperience{display:grid;grid-template-columns:1.05fr .95fr;background:var(--cream);color:var(--text)}
.splitVisual{position:relative;min-height:100vh;overflow:hidden;background:var(--green)}
.splitVisual img{width:100%;height:100%;object-fit:cover;display:block}
.splitVisual:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,0))}
.splitCopy{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:110px clamp(28px,5vw,72px)}
.splitCopy .kicker{color:var(--green)}
.splitCopy h2{margin:0;color:var(--green);font-size:clamp(3.2rem,6.8vw,6.7rem);line-height:.88;letter-spacing:-.07em;font-weight:1000}
.lineThird{max-width:720px;margin:30px 0 0;font-size:clamp(1.35rem,2.2vw,2rem);line-height:1.38;color:#4c463e;font-weight:850}
.detailThird{max-width:720px;margin:24px 0 0;font-size:1.08rem;line-height:1.7;color:#5f584d}
.journeyPrompt{max-width:720px;margin-top:26px;padding:16px 18px;border-left:5px solid var(--green);background:rgba(23,60,45,.08);border-radius:18px;color:#403a33;line-height:1.45}
.actionLast{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}
.finalContent{position:relative;z-index:2;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:120px 24px}
.finalContent h2{margin:0;max-width:1100px;font-size:clamp(3.4rem,8vw,8.2rem);line-height:.9;letter-spacing:-.07em;font-weight:1000}
.finalContent p{max-width:940px;margin:34px auto 0;font-size:clamp(1.25rem,2vw,1.9rem);line-height:1.55;color:rgba(255,255,255,.88)}
.subFinal{font-weight:950;color:var(--gold)!important}
.finalButtons{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin-top:36px}
.enterMotion{animation:riseIn .9s ease both}
.frameMotion{animation:frameIn .8s ease both}
.imageFirst{animation:imageIn .75s ease both}
.titleSecond{animation:fadeUp .65s ease both;animation-delay:.22s}
.lineThird,.detailThird{animation:fadeUp .65s ease both;animation-delay:.42s}
.journeyPrompt,.actionLast{animation:fadeUp .65s ease both;animation-delay:.64s}
@keyframes slowScale{from{transform:scale(1.08)}to{transform:scale(1)}}
@keyframes riseIn{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
@keyframes frameIn{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:scale(1)}}
@keyframes cardUp{to{opacity:1;transform:translateY(0)}}
@keyframes imageIn{from{opacity:.2;transform:scale(1.02)}to{opacity:1;transform:scale(1)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:980px){
  .eventPill{display:none}
  .pathwayGrid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .pathwayExperience{grid-template-columns:1fr}
  .splitVisual{min-height:48vh}
  .splitCopy{min-height:52vh;padding-bottom:120px}
  .guideControls{bottom:14px}
  .centerStatement h2{font-size:clamp(3rem,12vw,6rem)}
}
@media(max-width:620px){
  .brandBar{padding:20px}
  .pathwayGrid{grid-template-columns:1fr}
  .heroContent{padding:120px 22px 110px}
  h1{font-size:clamp(3.1rem,16vw,5rem)}
  .heroText{font-size:1.15rem}
  .guideControls{width:calc(100% - 24px);justify-content:space-between}
  .guideControls button{flex:1;padding:10px 8px}
  .revealContent{padding:90px 18px 120px}
  .splitCopy h2,.finalContent h2{font-size:clamp(3rem,14vw,5.2rem)}
}
`;

export default App;
