import React, { useEffect, useMemo, useRef, useState } from "react";

type Screen =
  | "home"
  | "story"
  | "guest"
  | "customer"
  | "marketplace"
  | "nutrition"
  | "recipes"
  | "grower"
  | "calendar"
  | "producer"
  | "youth"
  | "supervisor"
  | "events"
  | "weather";

type Language = "English" | "Español" | "Tagalog" | "Italiano" | "Patwa" | "Hebrew";

const LIVE_MARKETPLACE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const LIVE_WEATHER_URL =
  "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121";

const route: Screen[] = [
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
  "events",
  "weather",
];

const images: Record<Screen, string> = {
  home: "/GrowArea2.jpg",
  story: "/SAM_0220.JPG",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  marketplace: "/SAM_0257.JPG",
  nutrition: "/SAM_0281.JPG",
  recipes: "/SAM_0282.JPG",
  grower: "/SAM_0223.JPG",
  calendar: "/SAM_0274.JPG",
  producer: "/SAM_0229.JPG",
  youth: "/SAM_0238.JPG",
  supervisor: "/SAM_0249.JPG",
  events: "/SAM_0275.JPG",
  weather: "/SAM_0288.JPG",
};

const gallery = [
  "/SAM_0289.JPG",
  "/SAM_0290.JPG",
  "/SAM_0291.JPG",
  "/SAM_0293.JPG",
  "/SAM_0301.JPG",
  "/SAM_0303.JPG",
];

const content: Record<
  Screen,
  {
    title: string;
    body: string;
    blurb: string;
    links: Screen[];
  }
> = {
  home: {
    title: "Bronson Family Farm",
    body:
      "Step into a living ecosystem built around food access, land restoration, education, wellness, workforce pathways, and marketplace opportunity.",
    blurb: "Start here to experience the full ecosystem.",
    links: ["story", "customer", "grower", "youth", "events", "marketplace"],
  },
  story: {
    title: "Our Story",
    body:
      "Bronson Family Farm carries family legacy into a future-focused Youngstown vision shaped by regenerative growing, agritourism, education, and community restoration.",
    blurb: "Legacy, land, restoration, and return.",
    links: ["guest", "events", "marketplace"],
  },
  guest: {
    title: "Guest Experience",
    body:
      "Guests discover the atmosphere of the land, the story of the farm, special experiences, and reasons to return again and again.",
    blurb: "A welcoming first experience for visitors.",
    links: ["story", "events", "weather"],
  },
  customer: {
    title: "Customer Journey",
    body:
      "Customers move from discovery to healthy buying, produce access, recipes, and practical nutrition guidance that makes the marketplace worth revisiting.",
    blurb: "A healthier buying journey.",
    links: ["marketplace", "nutrition", "recipes"],
  },
  marketplace: {
    title: "Marketplace",
    body:
      "The marketplace is the bridge to produce, seedlings, Bubble Babies, value-added goods, customer return, and live GrownBy commerce.",
    blurb: "Where interest becomes action.",
    links: ["customer", "nutrition", "recipes"],
  },
  nutrition: {
    title: "Health & Nutrition",
    body:
      "Health and nutrition help people compare natural food with overprocessed choices, making wellness practical and easier to understand.",
    blurb: "Food education that supports wellbeing.",
    links: ["recipes", "marketplace", "customer"],
  },
  recipes: {
    title: "Recipes",
    body:
      "Recipes turn interest into action by showing how farm products can become real meals, real habits, and real reasons to come back.",
    blurb: "Simple inspiration for real meals.",
    links: ["marketplace", "nutrition", "customer"],
  },
  grower: {
    title: "Grower Pathway",
    body:
      "Growers connect to seasonal planning, learning, coordination, and an ecosystem designed to support long-term participation and practical opportunity.",
    blurb: "Planning, growing, and shared opportunity.",
    links: ["calendar", "producer", "events"],
  },
  calendar: {
    title: "Crop Planner",
    body:
      "Crop planning gives the ecosystem a living seasonal rhythm through timing, readiness, coordination, and practical farm momentum.",
    blurb: "The seasonal rhythm of the farm.",
    links: ["grower", "weather", "events"],
  },
  producer: {
    title: "Value-Added Producer",
    body:
      "Prepared goods, branded products, local value creation, and future commerce opportunities can grow from this ecosystem.",
    blurb: "Future-ready products and local value.",
    links: ["marketplace", "grower", "events"],
  },
  youth: {
    title: "Youth Workforce",
    body:
      "Youth workforce participants encounter hands-on learning, food systems awareness, work readiness, land stewardship, and meaningful future pathways.",
    blurb: "Learning, work, and future pathways.",
    links: ["supervisor", "calendar", "events"],
  },
  supervisor: {
    title: "Supervisor Role",
    body:
      "Supervisors support youth workers with structure, encouragement, accountability, logistics, and wraparound care within the program.",
    blurb: "Support, structure, and oversight.",
    links: ["youth", "events", "calendar"],
  },
  events: {
    title: "Events",
    body:
      "Events bring people onto the land through demonstrations, education, agritourism, marketplace engagement, and family-centered experiences.",
    blurb: "The public-facing life of the farm.",
    links: ["guest", "marketplace", "weather"],
  },
  weather: {
    title: "Farm Conditions",
    body:
      "Farm conditions keep the platform grounded in the land, the season, and the living rhythm of work, events, and growth.",
    blurb: "A live feeling rooted in the land.",
    links: ["calendar", "events", "guest"],
  },
};

function getCountdownParts(target: Date) {
  const now = new Date();
  const diff = Math.max(target.getTime() - now.getTime(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
  };
}

function CommonNinjaWeatherEmbed() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://cdn.commoninja.com/sdk/latest/commonninja.js"]'
    );

    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        borderRadius: 24,
        overflow: "hidden",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: 12,
      }}
    >
      <div className="commonninja_component pid-c5e7ecac-0a36-47dd-b2f3-df0353708f47" />
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [language, setLanguage] = useState<Language>("English");
  const [autoTour, setAutoTour] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<Screen | null>(null);
  const [now, setNow] = useState(new Date());
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const currentIndex = route.indexOf(screen);
  const current = content[screen];
  const progress = ((currentIndex + 1) / route.length) * 100;
  const countdown = getCountdownParts(new Date("2026-05-16T09:00:00-04:00"));
  const timeText = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    const timer = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!voiceOn || !synthRef.current) return;

    const utter = new SpeechSynthesisUtterance(`${current.title}. ${current.body}`);
    utter.rate = 0.94;
    utter.pitch = 1;
    utter.volume = 1;

    if (language === "Español") utter.lang = "es-ES";
    else if (language === "Italiano") utter.lang = "it-IT";
    else if (language === "Hebrew") utter.lang = "he-IL";
    else utter.lang = "en-US";

    synthRef.current.cancel();
    synthRef.current.speak(utter);

    return () => synthRef.current?.cancel();
  }, [screen, voiceOn, language, current.title, current.body]);

  useEffect(() => {
    if (!autoTour) return;
    const timer = window.setTimeout(() => {
      if (currentIndex >= route.length - 1) {
        setAutoTour(false);
        setScreen("home");
      } else {
        setScreen(route[currentIndex + 1]);
      }
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [autoTour, currentIndex]);

  const goPrev = () => {
    setAutoTour(false);
    setScreen(route[Math.max(0, currentIndex - 1)]);
  };

  const goNext = () => {
    setAutoTour(false);
    setScreen(route[Math.min(route.length - 1, currentIndex + 1)]);
  };

  const startTour = () => {
    setAutoTour(true);
    setScreen("home");
