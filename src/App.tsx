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
  | "airport"
  | "youngstown"
  | "foodCost"
  | "regenerative"
  | "ecosystem"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners"
  | "distribution"
  | "agritourism"
  | "replication"
  | "ending";

const imageSets: Record<PathwayKey | "hero" | TourStepKey, string[]> = {
  hero: ["/GrowArea.jpg"],
  welcome: ["/SAM_0220.JPG"],
  airport: ["/SAM_0221.JPG"],
  youngstown: ["/SAM_0238.JPG"],
  foodCost: ["/SAM_0249.JPG"],
  regenerative: ["/SAM_0257.JPG"],
  ecosystem: ["/SAM_0275.JPG"],
  guest: ["/SAM_0281.JPG"],
  customer: ["/culniary_edibleflowers.jpeg"],
  marketplace: ["/culniary_edibleflowers2.jpeg"],
  grower: ["/SAM_0290.JPG"],
  youth: ["/Samaeera2.jpg"],
  partners: ["/SAM_0305.JPG"],
  distribution: ["/SAM_0288.JPG"],
  agritourism: ["/SAM_0299.JPG"],
  replication: ["/SAM_0301.JPG"],
  ending: ["/WolfSpider.jpg"],
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
      "Guests learn the purpose of the farm.",
      "The experience builds connection before action.",
      "Future tours and events help people return to the land.",
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
      "Fresh food supports healthier choices.",
      "Purchases support local growers and youth workforce.",
      "Food access becomes easier through coordination.",
    ],
  },
  {
    key: "marketplace" as PathwayKey,
    title: "Marketplace",
    icon: ShoppingBasket,
    short:
      "The marketplace connects growers, customers, tools, seedlings, supplies, education, and food distribution.",
    purpose:
      "The marketplace is where food, seedlings, supplies, tools, growers, customers, and knowledge come together.",
    depth: [
      "The marketplace supports exchange.",
      "Growers gain visibility and opportunity.",
      "Customers gain access to food and growing resources.",
    ],
  },
  {
    key: "grower" as PathwayKey,
    title: "Grower Pathway",
    icon: Tractor,
    short:
      "Growers receive access to tools, education, supplies, markets, coordination, and community-based support.",
    purpose:
      "Growers receive support with planning, seedlings, tools, growing knowledge, market access, and distribution coordination.",
    depth: [
      "Growers need more than land.",
      "They need tools, markets, support, and coordination.",
      "The ecosystem reduces isolation for small growers.",
    ],
  },
  {
    key: "youth" as PathwayKey,
    title: "Youth Workforce",
    icon: GraduationCap,
    short:
      "Youth build responsibility, confidence, job readiness, teamwork, agriculture skills, and community pride.",
    purpose:
      "Youth learn responsibility, teamwork, safety, leadership, agriculture, communication, and work readiness through hands-on farm experience.",
    depth: [
      "The farm becomes a living classroom.",
      "Youth gain real-world work habits.",
      "The pathway builds confidence and future readiness.",
    ],
  },
  {
    key: "partners" as PathwayKey,
    title: "Partners",
    icon: Handshake,
    short:
      "Partners align resources, education, health, workforce, agriculture, and community investment around one ecosystem.",
    purpose:
      "Partners help strengthen the ecosystem through education, sponsorship, health services, tools, volunteers, visibility, and investment.",
    depth: [
      "Partners align resources around shared impact.",
      "The ecosystem connects public, nonprofit, business, and community support.",
      "Partnership makes the model stronger.",
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
      "This guided experience introduces Bronson Family Farm as a place-based food, grower, youth workforce, wellness, and agritourism ecosystem in Youngstown, Ohio.",
    bullets: [
      "The farm connects land, food, people, and opportunity.",
      "Each screen explains one part of the ecosystem.",
      "The tour moves automatically so the reader can follow the story.",
    ],
  },
  {
    key: "airport",
    label: "Historic Place",
    title: "Historic Lansdowne Airport",
    body:
      "Bronson Family Farm is being developed at the Historic Lansdowne Airport, where aviation history and community food infrastructure now meet.",
    bullets: [
      "The airport gives the farm a unique identity.",
      "Historic land is being reimagined for public benefit.",
      "The site supports farming, education, events, and future agritourism.",
    ],
  },
  {
    key: "youngstown",
    label: "Youngstown",
    title: "Why Youngstown Matters",
    body:
      "Youngstown needs practical food solutions that address access, cost, health, land use, and neighborhood reinvestment.",
    bullets: [
      "Fresh food access is uneven across communities.",
      "Food costs continue to pressure families.",
      "Local growing can help strengthen community resilience.",
    ],
  },
  {
    key: "foodCost",
    label: "Food Access",
    title: "Food Must Move Better",
    body:
      "The problem is not only growing food. The challenge is helping food move through the community in a way families, schools, growers, and partners can actually use.",
    bullets: [
      "Families should not have to chase fresh food.",
      "Growers need reliable paths to customers.",
      "The ecosystem helps coordinate food movement.",
    ],
  },
  {
    key: "regenerative",
    label: "Regeneration",
    title: "Regenerative Farming",
    body:
      "Regenerative farming focuses on rebuilding soil, reducing waste, protecting natural systems, and growing healthier food through better land stewardship.",
    bullets: [
      "Healthy soil supports healthy food.",
      "Chemical-free growing supports community wellness.",
      "Compost, mulch, ash, and natural inputs help restore the land.",
    ],
  },
  {
    key: "ecosystem",
    label: "Ecosystem",
    title: "One Connected System",
    body:
      "Bronson Family Farm and Farm & Family Alliance connect growers, customers, youth, partners, education, supplies, and distribution into one coordinated ecosystem.",
    bullets: [
      "Each pathway has a role.",
      "Each role supports the others.",
      "The system is built for long-term community benefit.",
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
    key: "distribution",
    label: "Distribution",
    title: "Food Moves Through the Ecosystem",
    body:
      "The benefit of the ecosystem is that food can move toward families, schools, businesses, and community partners instead of leaving growers and customers disconnected.",
    bullets: [
      "The food moves, not the burden.",
      "Distribution strengthens access.",
      "Coordination helps keep food and money circulating locally.",
    ],
  },
  {
    key: "agritourism",
    label: "Agritourism",
    title: "Future Destination",
    body:
      "The long-term vision expands the farm into a destination with tours, camping, events, youth spaces, family recreation, mini-golf, and seasonal experiences.",
    bullets: [
      "Agritourism creates revenue and visibility.",
      "Families gain a meaningful place to visit.",
      "The farm becomes both food infrastructure and destination.",
    ],
  },
  {
    key: "replication",
    label: "Replication",
    title: "A Model That Can Grow",
    body:
      "Bronson Family Farm is designed as a place-based model that can inform other communities working to connect food access, land use, youth workforce, and local economic development.",
    bullets: [
      "The model begins in Youngstown.",
      "The lessons can support other communities.",
      "The ecosystem creates a framework for regeneration.",
    ],
  },
  {
    key: "ending",
    label: "Conclusion",
    title: "End of Guided Experience",
    body:
      "Bronson Family Farm shows how land, food, growers, youth, customers, partners, and community investment can work together through one intentional ecosystem.",
    bullets: [
      "Every pathway has a purpose.",
      "Every role connects back to community benefit.",
      "The farm becomes a living model of regeneration.",
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
        `${currentStep.title}. ${currentStep.body}. ${currentStep.bullets.join(" ")}`
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
    }, 13000);

    return () => {
      window.clearTimeout(timer);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
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
    if (tourIndex < tourSteps.length - 1) setTourIndex(tourIndex + 1);
  };

  const prevTour = () => {
    setIsGuided(false);
    if (tourIndex > 0) setTourIndex(tourIndex - 1);
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
    setTourIndex(tourSteps.findIndex((step) => step.key === key));

    document.getElementById("pathway-detail")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <SmartImage
          srcs={imageSets.hero}
          alt="Bronson Family Farm"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-6">
          <div className="mb-4 flex flex-wrap gap-3">
            {["English", "Spanish", "Tagalog", "Italian", "Hebrew", "French"].map(
              (lang) => (
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
              )
            )}
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

      <section id="guided-tour" className="mx-auto max-w-7xl px-6 pt-4 pb-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl">
          <div className="grid min-h-[470px] md:grid-cols-[0.95fr_1.15fr]">
            <div className="relative min-h-[260px] overflow-hidden">
              <SmartImage
                srcs={imageSets[currentStep.key]}
                alt={currentStep.title}
                className="absolute inset-0 h-full w-full object-cover scale-[1.02] transition-transform duration-[12000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-black/15 backdrop-[brightness(.85)]" />

              <div className="absolute top-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Guided Tour
                </p>

                <h2 className="mt-3 max-w-md text-3xl font-black leading-tight md:text-4xl">
                  {currentStep.label}
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 md:p-6">
              <div>
                <div className="mb-4 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                      Step {tourIndex + 1} of {tourSteps.length}
                    </p>

                    <h3 className="mt-2 text-2xl font-black leading-tight md:text-3xl">
                      {currentStep.title}
                    </h3>
                  </div>

                  <Globe2 className="shrink-0 text-green-400" size={34} />
                </div>

                <p className="text-base leading-7 text-white/85">
                  {currentStep.body}
                </p>

                <ul className="mt-4 space-y-2">
                  {currentStep.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-white/85"
                    >
                      <CheckCircle
                        className="mt-1 shrink-0 text-green-400"
                        size={18}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-green-500 transition-all duration-700"
                    style={{
                      width: `${((tourIndex + 1) / tourSteps.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={prevTour}
                    disabled={tourIndex === 0}
                    className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-bold disabled:opacity-30"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>

                  <div className="flex flex-wrap justify-center gap-2">
                    {tourSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => jumpToStep(index)}
                        className={`h-3 w-3 rounded-full transition ${
                          index === tourIndex ? "bg-green-400" : "bg-white/20"
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsGuided((prev) => !prev)}
                      className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-bold hover:bg-white/10"
                    >
                      {isGuided ? <Pause size={18} /> : <Play size={18} />}
                      {isGuided ? "Pause" : "Resume"}
                    </button>

                    <button
                      onClick={nextTour}
                      disabled={tourIndex === tourSteps.length - 1}
                      className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 font-bold text-black disabled:opacity-30"
                    >
                      Next
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {tourIndex === tourSteps.length - 1 && (
                  <button
                    onClick={startGuidedTour}
                    className="mt-4 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black"
                  >
                    <RotateCcw size={18} />
                    Replay Guided Tour
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-green-400">Explore the Ecosystem</p>

          <h2 className="mt-3 text-5xl font-black">
            Pathways Through the Farm
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-8 text-white/70">
            Every pathway represents a different role inside the ecosystem.
            Together they create a connected regional system focused on food
            accessibility, grower support, workforce development, and
            sustainability.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((p) => {
            const Icon = p.icon;

            return (
              <article
                key={p.key}
                className="overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl transition hover:-translate-y-2"
              >
                <SmartImage
                  srcs={imageSets[p.key]}
                  alt={p.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <Icon className="mb-6 text-green-400" size={38} />

                  <h3 className="text-3xl font-black">{p.title}</h3>

                  <p className="mt-5 min-h-[120px] text-lg leading-8 text-white/80">
                    {p.short}
                  </p>

                  <button
                    onClick={() => jumpToPathway(p.key)}
                    className="mt-8 flex items-center gap-2 rounded-full bg-green-500 px-6 py-4 font-bold text-black transition hover:scale-105"
                  >
                    Enter Pathway
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {activeData && (
        <section id="pathway-detail" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-zinc-950 p-10 md:grid-cols-2">
            <SmartImage
              srcs={imageSets[activeData.key]}
              alt={activeData.title}
              className="h-full min-h-[420px] w-full rounded-[2rem] object-cover"
            />

            <div>
              <p className="text-green-400">Active Pathway</p>

              <h2 className="mt-3 text-5xl font-black">
                {activeData.title}
              </h2>

              <p className="mt-6 text-xl leading-9 text-white/80">
                {activeData.purpose}
              </p>

              <ul className="mt-8 space-y-5">
                {activeData.depth.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-lg leading-8 text-white/85"
                  >
                    <CheckCircle
                      className="mt-1 shrink-0 text-green-400"
                      size={22}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setIsGuided(true);
                  document.getElementById("guided-tour")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="mt-10 rounded-full bg-green-500 px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                Continue Guided Tour
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-5xl font-black">End of Experience</h2>

        <p className="mx-auto mt-8 max-w-4xl text-2xl leading-10 text-white/75">
          Bronson Family Farm demonstrates how food, agriculture, growers,
          education, youth workforce, community wellness, and economic
          sustainability can work together through one intentional ecosystem.
        </p>
      </section>
    </main>
  );
}
