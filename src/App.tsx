import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  Users,
  ShoppingBasket,
  Tractor,
  GraduationCap,
  Handshake,
  MapPin,
  Globe2,
  CheckCircle,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type TourStepKey =
  | "welcome"
  | "place"
  | "problem"
  | "solution"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners"
  | "future"
  | "ending";

const imageSets: Record<PathwayKey | "hero" | TourStepKey, string[]> = {
  hero: ["/GrowArea.jpg", "/SAM_0220.JPG", "/SAM_0221.JPG"],

  welcome: ["/SAM_0220.JPG", "/SAM_0221.JPG", "/SAM_0222.JPG"],

  place: ["/SAM_0220.JPG", "/SAM_0221.JPG", "/SAM_0222.JPG"],

  problem: ["/SAM_0238.JPG", "/SAM_0249.JPG", "/SAM_0255.JPG"],

  solution: ["/SAM_0257.JPG", "/SAM_0260.JPG", "/SAM_0274.JPG"],

  guest: ["/SAM_0275.JPG", "/SAM_0281.JPG", "/SAM_0282.JPG"],

  customer: [
    "/culniary_edibleflowers.jpeg",
    "/culniary_edibleflowers2.jpeg",
    "/SAM_0286.JPG",
  ],

  marketplace: [
    "/SAM_0286.JPG",
    "/SAM_0288.JPG",
    "/SAM_0289.JPG",
  ],

  grower: [
    "/SAM_0290.JPG",
    "/SAM_0291.JPG",
    "/SAM_0293.JPG",
  ],

  youth: [
    "/Samaeera2.jpg",
    "/Sameera3.jpg",
    "/Samerra4.jpg",
    "/Samerra5.jpg",
    "/Samerra6.jpg",
  ],

  partners: [
    "/SAM_0305.JPG",
    "/SAM_0307.JPG",
    "/SAM_0308.JPG",
    "/SAM_0310.JPG",
    "/SAM_0313.JPG",
  ],

  future: ["/SAM_0299.JPG", "/SAM_0301.JPG", "/SAM_0303.JPG"],

  ending: ["/GrowArea.jpg", "/snake.jpg", "/WolfSpider.jpg"],
};

function SmartImage({
  srcs,
  alt,
  className,
}: {
  srcs: string[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [srcs]);

  return (
    <img
      src={srcs[index]}
      alt={alt}
      className={className}
      onError={() => {
        if (index < srcs.length - 1) setIndex(index + 1);
      }}
    />
  );
}

const pathways = [
  {
    key: "guest" as PathwayKey,
    title: "Guest Experience",
    icon: Home,
    short:
      "Guests enter through story, land, history, agriculture, wellness, youth engagement, and future agritourism.",
    purpose:
      "Guests are guided through the meaning of the farm before they are asked to choose a role.",
    depth: [
      "The visit begins with the land and the history of the Historic Lansdowne Airport.",
      "Guests see how the farm connects food, family, wellness, education, and community revitalization.",
      "The experience points toward future agritourism: tours, camping, mini-golf, youth spaces, events, and family recreation.",
    ],
  },
  {
    key: "customer" as PathwayKey,
    title: "Customer Pathway",
    icon: Users,
    short:
      "Customers access fresh, chemical-free food through a coordinated system focused on nutrition and community health.",
    purpose:
      "Customers do not have to chase food across many disconnected places. The ecosystem helps move food toward families, schools, businesses, and community partners.",
    depth: [
      "Customers access local produce, seedlings, and future food-ordering options.",
      "The pathway supports healthier choices through fresh, chemical-free food.",
      "Every purchase helps circulate money through growers, youth workforce, and community-based food access.",
    ],
  },
  {
    key: "marketplace" as PathwayKey,
    title: "Marketplace",
    icon: ShoppingBasket,
    short:
      "The marketplace connects growers, customers, tools, seedlings, supplies, education, and food distribution.",
    purpose:
      "The marketplace is the exchange point where food, supplies, knowledge, customers, and opportunity move together.",
    depth: [
      "The marketplace can feature produce, seedlings, Bubble Babies™, grower supplies, and value-added products.",
      "Growers gain a coordinated place to connect with customers and institutions.",
      "The system supports food accessibility by helping organize local food movement.",
    ],
  },
  {
    key: "grower" as PathwayKey,
    title: "Grower Pathway",
    icon: Tractor,
    short:
      "Growers receive access to tools, education, supplies, markets, coordination, and community-based support.",
    purpose:
      "Growers come because they need practical support: what to grow, how to prepare, where to sell, and how to stay connected.",
    depth: [
      "Growers connect to education, seedlings, tools, soil support, and market preparation.",
      "The ecosystem reduces isolation by creating shared infrastructure and shared opportunity.",
      "The food moves through coordinated distribution so growers do not have to manage everything alone.",
    ],
  },
  {
    key: "youth" as PathwayKey,
    title: "Youth Workforce",
    icon: GraduationCap,
    short:
      "Youth build responsibility, confidence, job readiness, teamwork, agriculture skills, and community pride.",
    purpose:
      "The farm becomes a living classroom where young people learn work habits, safety, leadership, and responsibility.",
    depth: [
      "Youth learn through outdoor, hands-on work instead of only classroom instruction.",
      "The pathway includes safety, PPE, teamwork, communication, attendance, and accountability.",
      "Supervisors can observe growth in responsibility, leadership, and readiness.",
    ],
  },
  {
    key: "partners" as PathwayKey,
    title: "Partners",
    icon: Handshake,
    short:
      "Partners align resources, education, health, workforce, agriculture, and community investment around one ecosystem.",
    purpose:
      "Partners strengthen the farm by contributing knowledge, tools, volunteers, sponsorship, education, health services, and visibility.",
    depth: [
      "Partners support food access, workforce development, health education, and community revitalization.",
      "The pathway connects city, education, business, nonprofit, grower, and community resources.",
      "Together, partners help build a model that can be replicated in other communities.",
    ],
  },
];

const tourSteps: {
  key: TourStepKey;
  title: string;
  label: string;
  body: string;
  bullets: string[];
}[] = [
  {
    key: "welcome",
    label: "Opening",
    title: "Welcome to Bronson Family Farm",
    body:
      "Welcome to a guided ecosystem experience at Bronson Family Farm in Youngstown, Ohio. This experience moves through the story, purpose, pathways, and future vision of a place-based regenerative food system designed to strengthen growers, families, youth, and community resilience.",
    bullets: [
      "This is a fully guided experience designed to move automatically.",
      "Bronson Family Farm combines agriculture, education, food access, workforce development, and agritourism.",
      "The ecosystem is designed to help communities grow healthier, stronger, and more connected.",
    ],
  },
  {
    key: "place",
    label: "Place",
    title: "Historic Lansdowne Airport",
    body:
      "Bronson Family Farm is being developed at the Historic Lansdowne Airport on Youngstown’s east side. What was once aviation infrastructure is becoming food infrastructure — transforming underutilized land into a regenerative agricultural and community destination.",
    bullets: [
      "The airport creates a unique place-based identity for the farm.",
      "The site supports agriculture, education, events, growers, and future agritourism.",
      "The transformation demonstrates how communities can repurpose land for long-term public benefit.",
    ],
  },
  {
    key: "problem",
    label: "Need",
    title: "Food Access, Health, and Economic Pressure",
    body:
      "Youngstown families continue facing rising food costs, limited fresh food access, economic instability, and declining neighborhood investment. Small growers also face barriers including limited distribution systems, infrastructure costs, and lack of coordinated support.",
    bullets: [
      "Fresh food access is a community need.",
      "Growers need support, tools, markets, and distribution pathways.",
      "Families need nutritious, chemical-free food they can reach.",
    ],
  },
  {
    key: "solution",
    label: "Solution",
    title: "A Regenerative Community Food System",
    body:
      "Bronson Family Farm and Farm & Family Alliance create a coordinated ecosystem where food, growers, education, youth workforce, wellness, and community partnerships operate as one connected system instead of disconnected programs.",
    bullets: [
      "The system focuses on local food circulation and community accessibility.",
      "Regenerative growing practices support healthier soil, healthier food, and healthier communities.",
      "The ecosystem creates shared opportunity across multiple pathways.",
    ],
  },
  ...pathways.map((p) => ({
    key: p.key as TourStepKey,
    label: p.title,
    title: p.title,
    body: p.purpose,
    bullets: p.depth,
  })),
  {
    key: "future",
    label: "Future",
    title: "Future Agritourism Destination",
    body:
      "The long-term vision expands Bronson Family Farm into a regional destination where agriculture, recreation, education, wellness, tourism, and local economic opportunity work together through one immersive experience.",
    bullets: [
      "Future plans may include camping, seasonal festivals, family recreation, and tours.",
      "An 18-hole mini-golf course and children’s zones can support family engagement.",
      "Agritourism creates additional sustainability while keeping community identity rooted in agriculture.",
    ],
  },
  {
    key: "ending",
    label: "End",
    title: "A Model for Community Regeneration",
    body:
      "Bronson Family Farm demonstrates how land, food, growers, education, youth workforce, wellness, and economic sustainability can operate together through one intentional ecosystem designed to strengthen communities over generations.",
    bullets: [
      "Every pathway connects back to community benefit.",
      "The ecosystem helps circulate food, knowledge, opportunity, and investment locally.",
      "Bronson Family Farm represents a regenerative vision for the future of community food systems.",
    ],
  },
];

export default function App() {
  const [language, setLanguage] = useState("English");
  const [tourIndex, setTourIndex] = useState(0);
  const [isGuided, setIsGuided] = useState(true);
  const [activePathway, setActivePathway] = useState<PathwayKey | null>(null);
  const [narrationOn, setNarrationOn] = useState(false);

  const currentStep = tourSteps[tourIndex];

  const activeData = useMemo(
    () => pathways.find((p) => p.key === activePathway),
    [activePathway]
  );

  useEffect(() => {
    if (!isGuided) return;

    document.getElementById("guided-tour")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (narrationOn && "speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(
        `${currentStep.title}. ${currentStep.body}`
      );

      speech.rate = 0.9;
      speech.pitch = 1;
      speech.volume = 1;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(speech);
    }

    const timer = window.setTimeout(() => {
      if (tourIndex < tourSteps.length - 1) {
        setTourIndex((prev) => prev + 1);
      } else {
        setIsGuided(false);
      }
    }, 12000);

    return () => {
      window.clearTimeout(timer);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [tourIndex, isGuided, narrationOn, currentStep]);

  const startGuidedTour = () => {
    setTourIndex(0);
    setIsGuided(true);
    setActivePathway(null);

    document.getElementById("guided-tour")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const nextTour = () => {
    setIsGuided(false);

    if (tourIndex < tourSteps.length - 1) {
      setTourIndex(tourIndex + 1);
    }
  };

  const prevTour = () => {
    setIsGuided(false);

    if (tourIndex > 0) {
      setTourIndex(tourIndex - 1);
    }
  };

  const jumpToStep = (index: number) => {
    setIsGuided(false);
    setTourIndex(index);

    document.getElementById("guided-tour")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const jumpToPathway = (key: PathwayKey) => {
    setIsGuided(false);
    setActivePathway(key);

    setTourIndex(
      tourSteps.findIndex((step) => step.key === key)
    );

    document.getElementById("pathway-detail")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <SmartImage
          srcs={imageSets.hero}
          alt="Bronson Family Farm"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-6">
          <div className="mb-4 flex flex-wrap gap-3">
            {[
              "English",
              "Spanish",
              "Tagalog",
              "Italian",
              "Hebrew",
              "French",
            ].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  language === lang
                    ? "bg-green-500 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="mb-4 flex items-center gap-2 text-green-400">
            <MapPin size={18} />

            <span className="text-lg">
              Historic Lansdowne Airport · Youngstown, Ohio
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-none md:text-7xl">
            Bronson Family Farm
          </h1>

          <p className="mt-5 max-w-4xl text-xl leading-relaxed text-white/85">
            A guided ecosystem experience showing how land, growers, food,
            youth workforce, community partners, and future agritourism work
            together.
          </p>

          <div className="mt-7 flex flex-wrap gap-5">
            <button
              onClick={startGuidedTour}
              className="rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
            >
              Start Guided Tour
            </button>

            <button
              onClick={() => setNarrationOn((prev) => !prev)}
              className="rounded-full border border-white/30 px-8 py-4 text-lg font-bold hover:bg-white/10"
            >
              {narrationOn ? "Narration On" : "Turn Narration On"}
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("pathways")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/30 px-8 py-4 text-lg font-bold hover:bg-white/10"
            >
              Explore Pathways
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
