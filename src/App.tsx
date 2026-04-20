import React, { useEffect, useMemo, useRef, useState } from "react";

type RoleKey =
  | "home"
  | "story"
  | "guest"
  | "customer"
  | "grower"
  | "producer"
  | "youth"
  | "supervisor"
  | "marketplace"
  | "nutrition"
  | "recipes"
  | "calendar"
  | "weather"
  | "partners";

type Scene = {
  key: RoleKey;
  title: string;
  eyebrow: string;
  subtitle: string;
  purpose: string;
  image: string;
  overlay?: string;
};

const STORE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const WEBSITE_URL = "https://www.bronsonfamilyfarm.com/";
const EVENTBRITE_URL = "https://www.eventbrite.com/";
const WEATHER_URL =
  "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121";

const commonNinjaScriptId = "commonninja-weather-script";

const appShell: React.CSSProperties = {
  minHeight: "100vh",
  width: "100%",
  background:
    "radial-gradient(circle at top, rgba(120,160,120,.18), transparent 35%), linear-gradient(180deg, #08120d 0%, #0f1f16 38%, #14271d 100%)",
  color: "#f4f0e8",
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const imageLayer = (url: string, overlay?: string): React.CSSProperties => ({
  position: "absolute",
  inset: 0,
  backgroundImage: `${overlay ? `${overlay}, ` : ""}url("${url}")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.32,
  filter: "saturate(1.05) contrast(1.03)",
});

const ASSETS = {
  entrance:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
  story:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80",
  guest:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
  customer:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  grower:
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80",
  producer:
    "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1600&q=80",
  youth:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80",
  supervisor:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  marketplace:
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
  nutrition:
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=80",
  recipes:
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1600&q=80",
  calendar:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  weather:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
  partners:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
};

const SCENES: Record<RoleKey, Scene> = {
  home: {
    key: "home",
    eyebrow: "Bronson Family Farm",
    title: "Step into a living ecosystem, not just a website.",
    subtitle:
      "Bronson Family Farm is a regenerative farm and community-centered agritourism vision rooted in family legacy, land restoration, food access, education, youth workforce development, and marketplace connection.",
    purpose:
      "This demo helps guests, customers, growers, value-added producers, youth workers, and supervisors understand why the ecosystem exists, what resources are available, and where each pathway leads next.",
    image: ASSETS.entrance,
    overlay:
      "linear-gradient(180deg, rgba(6,11,8,.66) 0%, rgba(9,16,12,.62) 32%, rgba(7,12,9,.88) 100%)",
  },
  story: {
    key: "story",
    eyebrow: "Purpose & Legacy",
    title: "Why this farm exists",
    subtitle:
      "Inspired by family agricultural roots, including Constance’s grandmother from the Philippines who farmed in Santa Rosa, California, the farm carries forward a legacy of growing food, stewarding land, and helping families thrive.",
    purpose:
      "Bronson Family Farm blends agriculture, agritourism, technology, education, and wraparound support so people can return again and again for food, learning, work pathways, wellbeing, and community.",
    image: ASSETS.story,
  },
  guest: {
    key: "guest",
    eyebrow: "Guest Pathway",
    title: "Discover the land, the mission, and the experience.",
    subtitle:
      "Guests are welcomed into the story of the farm through immersive exploration, events, tours, partnerships, and a clearer understanding of how land restoration and food access work together.",
    purpose:
      "This pathway is for first-time visitors, civic leaders, media, families, and supporters who want to understand the vision before deciding where to go next.",
    image: ASSETS.guest,
  },
  customer: {
    key: "customer",
    eyebrow: "Customer Pathway",
    title: "Buy, learn, return, and build healthier habits.",
    subtitle:
      "Customers are not only purchasing produce, seedlings, and farm goods. They are gaining access to food education, recipe inspiration, crop visibility, and a marketplace designed to keep them connected.",
    purpose:
      "This pathway leads directly to the marketplace while also offering practical support around healthier food choices, recipe ideas, and returning for future purchases.",
    image: ASSETS.customer,
  },
  grower: {
    key: "grower",
    eyebrow: "Grower Pathway",
    title: "Grow with structure, visibility, and support.",
    subtitle:
      "Growers can engage with crop planning, seasonal rhythm, educational resources, events, and the broader ecosystem being built around production, collaboration, and community connection.",
    purpose:
      "This pathway demonstrates how Bronson Family Farm can support growing activity, planning, shared visibility, and participation in the larger grower ecosystem.",
    image: ASSETS.grower,
  },
  producer: {
    key: "producer",
    eyebrow: "Value-Added Producer Pathway",
    title: "Transform farm output into market-ready opportunity.",
    subtitle:
      "Value-added producers can connect to ingredients, seasonal supply, story-driven branding, demonstrations, community events, and the broader marketplace experience.",
    purpose:
      "This pathway is built for those who want to make, package, teach, or sell products that extend the value of what is grown on the land.",
    image: ASSETS.producer,
  },
  youth: {
    key: "youth",
    eyebrow: "Youth Workforce Pathway",
    title: "Learn by doing in a real ecosystem.",
    subtitle:
      "Youth workers experience the farm as a hands-on workforce development environment where agriculture, customer service, logistics, stewardship, technology, and teamwork all meet.",
    purpose:
      "This pathway shows how the farm can function as a place-based learning environment that prepares young people for work, responsibility, and future opportunity.",
    image: ASSETS.youth,
  },
  supervisor: {
    key: "supervisor",
    eyebrow: "Youth Workforce Support",
    title: "Guide, support, and strengthen the youth experience.",
    subtitle:
      "The supervisor role exists within the youth workforce program and helps coordinate support, accountability, coaching, workflow, and access to additional helping resources when needed.",
    purpose:
      "This pathway reflects leadership support for youth workers, including structure, encouragement, and connection to supportive staffing resources.",
    image: ASSETS.supervisor,
  },
  marketplace: {
    key: "marketplace",
    eyebrow: "Marketplace",
    title: "Connect directly to GrownBy and the farm’s selling pathway.",
    subtitle:
      "The marketplace experience points customers toward Bronson Family Farm’s GrownBy store while keeping the farm story, food values, and customer return journey visible.",
    purpose:
      "This pathway is where interest becomes action through shopping, seasonal availability, preorder opportunities, and repeat engagement.",
    image: ASSETS.marketplace,
  },
  nutrition: {
    key: "nutrition",
    eyebrow: "Food & Nutrition",
    title: "Make food decisions with more clarity.",
    subtitle:
      "The ecosystem helps people move away from dependence on overprocessed substitutes and toward fresher, more nourishing choices that can strengthen individuals, families, and communities.",
    purpose:
      "This pathway provides simple nutrition guidance that complements the customer and family experience.",
    image: ASSETS.nutrition,
  },
  recipes: {
    key: "recipes",
    eyebrow: "Recipe Inspiration",
    title: "Turn fresh produce into meals people will actually make.",
    subtitle:
      "Recipes help visitors imagine what they can do with what they buy, making the marketplace more useful and the farm more memorable.",
    purpose:
      "This pathway supports repeat customer engagement through practical food inspiration.",
    image: ASSETS.recipes,
  },
  calendar: {
    key: "calendar",
    eyebrow: "Season & Planning",
    title: "See the rhythm of the farm year.",
    subtitle:
      "Crop planning, planting windows, harvest timing, and featured activities help the ecosystem feel alive and operational rather than static.",
    purpose:
      "This pathway gives growers, partners, and supporters a stronger sense of seasonality and movement.",
    image: ASSETS.calendar,
  },
  weather: {
    key: "weather",
    eyebrow: "Weather",
    title: "Bring the conditions of the land into the experience.",
    subtitle:
      "Weather matters because this is a real agricultural place. Conditions shape planting, growing, harvesting, events, and the visitor experience.",
    purpose:
      "This pathway adds a live-feeling operational layer to the demo.",
    image: ASSETS.weather,
  },
  partners: {
    key: "partners",
    eyebrow: "Partnerships",
    title: "A place where community partners can see themselves.",
    subtitle:
      "The ecosystem is strengthened through educational, civic, health, funding, grower, and marketplace relationships that align with the farm’s purpose.",
    purpose:
      "This pathway helps institutions and collaborators understand how they can participate in something larger than a single event.",
    image: ASSETS.partners,
  },
};

const navButtonStyle: React.CSSProperties = {
  background: "rgba(245, 238, 221, 0.08)",
  color: "#f8f3e8",
  border: "1px solid rgba(245, 238, 221, 0.16)",
  borderRadius: 999,
  padding: "10px 16px",
  cursor: "pointer",
  fontSize: 14,
  lineHeight: 1.2,
  letterSpacing: ".01em",
  transition: "all .25s ease",
  backdropFilter: "blur(8px)",
};

const actionButton: React.CSSProperties = {
  border: "none",
  borderRadius: 999,
  padding: "14px 20px",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer",
};

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 28,
  boxShadow: "0 18px 50px rgba(0,0,0,.24)",
  backdropFilter: "blur(12px)",
};

function App() {
  const [active, setActive] = useState<RoleKey>("home");
  const [autoTour, setAutoTour] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);
  const [showWeatherWidget, setShowWeatherWidget] = useState(true);
  const [tourIndex, setTourIndex] = useState(0);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const journeyOrder: RoleKey[] = useMemo(
    () => [
      "home",
      "story",
      "guest",
      "customer",
      "marketplace",
      "nutrition",
      "recipes",
      "grower",
      "calendar",
      "producer",
      "youth",
      "supervisor",
      "weather",
      "partners",
    ],
    []
  );

  const scene = SCENES[active];

  useEffect(() => {
    synthRef.current = window.speechSynthesis || null;
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (!voiceOn) {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      return;
    }
    speakScene(scene);
  }, [active, voiceOn]);

  useEffect(() => {
    if (!autoTour) return;
    setActive(journeyOrder[tourIndex]);

    const timer = window.setTimeout(() => {
      setTourIndex((prev) => {
        if (prev >= journeyOrder.length - 1) {
          setAutoTour(false);
          return 0;
        }
        return prev + 1;
      });
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [autoTour, tourIndex, journeyOrder]);

  useEffect(() => {
    if (!showWeatherWidget) return;

    if (document.getElementById(commonNinjaScriptId)) return;

    const script = document.createElement("script");
    script.id = commonNinjaScriptId;
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);
  }, [showWeatherWidget]);

  const speakScene = (s: Scene) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const text = `${s.title}. ${s.subtitle}. ${s.purpose}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find(
        (v) =>
          /en/i.test(v.lang) &&
          /natural|samantha|ava|zira|aria|jenny|google us english/i.test(v.name)
      ) ||
      voices.find((v) => /en/i.test(v.lang)) ||
      null;

    if (preferred) utterance.voice = preferred;
    window.speechSynthesis.speak(utterance);
  };

  const go = (key: RoleKey) => {
    setActive(key);
  };

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const startTour = () => {
    setTourIndex(0);
    setAutoTour(true);
    setActive(journeyOrder[0]);
  };

  const stopTour = () => {
    setAutoTour(false);
    setTourIndex(0);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  };

  return (
    <div style={appShell}>
      <style>{`
        * { box-sizing: border-box; }
        html, body, #root { margin: 0; min-height: 100%; background: #08120d; }
        a { color: inherit; text-decoration: none; }
        button:hover { transform: translateY(-1px); }
        .layout {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }
        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 22px;
          background: rgba(6, 12, 9, 0.62);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .brand {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .brand small {
          color: rgba(244,240,232,.72);
          letter-spacing: .18em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .brand strong {
          font-size: 18px;
          font-weight: 700;
        }
        .navwrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: flex-end;
        }
        .hero {
          position: relative;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 24px;
          padding: 34px 24px 24px;
          min-height: calc(100vh - 82px);
        }
        .heroLeft {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 8px 20px 8px;
          max-width: 900px;
        }
        .eyebrow {
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 12px;
          color: #d9ccb0;
          margin-bottom: 14px;
        }
        .title {
          font-size: clamp(2.4rem, 5vw, 5rem);
          line-height: .98;
          font-weight: 800;
          margin: 0 0 18px 0;
          max-width: 900px;
        }
        .subtitle {
          font-size: clamp(1rem, 1.55vw, 1.25rem);
          line-height: 1.7;
          color: rgba(248,243,232,.92);
          max-width: 820px;
          margin-bottom: 18px;
        }
        .purpose {
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(240,234,222,.78);
          max-width: 760px;
          margin-bottom: 28px;
        }
        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 12px;
          margin-top: 12px;
          max-width: 800px;
        }
        .statCard {
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 16px;
          backdrop-filter: blur(10px);
        }
        .statLabel {
          font-size: 12px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(245,238,221,.64);
          margin-bottom: 8px;
        }
        .statValue {
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.3;
        }
        .heroRight {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: stretch;
        }
        .panel {
          width: 100%;
          padding: 20px;
          border-radius: 28px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 18px 50px rgba(0,0,0,.28);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .panelTitle {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
        }
        .panelText {
          font-size: .98rem;
          line-height: 1.7;
          color: rgba(246,241,233,.86);
          margin: 0;
        }
        .grid2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 12px;
        }
        .miniCard {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          min-height: 102px;
        }
        .miniCard strong {
          display: block;
          margin-bottom: 8px;
          font-size: .98rem;
        }
        .miniCard span {
          font-size: .92rem;
          line-height: 1.55;
          color: rgba(242,237,227,.78);
        }
        .section {
          padding: 0 24px 28px;
          position: relative;
          z-index: 2;
        }
        .sectionGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 14px;
        }
        .journeyCard {
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          min-height: 175px;
          transition: all .25s ease;
        }
        .journeyCard:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.075);
        }
        .journeyCard h4 {
          margin: 0 0 10px 0;
          font-size: 1rem;
        }
        .journeyCard p {
          margin: 0;
          font-size: .92rem;
          color: rgba(242,237,227,.78);
          line-height: 1.6;
        }
        .footerBand {
          padding: 20px 24px 36px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          position: relative;
          z-index: 2;
        }
        .weatherBox {
          min-height: 320px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(0,0,0,.18);
        }
        .iframeWrap {
          border-radius: 22px;
          overflow: hidden;
          min-height: 320px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.03);
        }
        .muted {
          color: rgba(242,237,227,.74);
          line-height: 1.7;
          font-size: .95rem;
        }
        @media (max-width: 1100px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .sectionGrid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }
        }
        @media (max-width: 720px) {
          .topbar {
            align-items
