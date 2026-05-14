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
  hero: ["/GrowArea.jpg", "/GrowArea2.jpg", "/images/GrowArea.jpg", "/images/GrowArea2.jpg"],

  welcome: ["/GrowArea.jpg", "/GrowArea2.jpg", "/images/GrowArea.jpg"],
  place: ["/GrowArea2.jpg", "/GrowArea.jpg", "/images/GrowArea2.jpg"],
  problem: ["/SAM_0251.JPG", "/SAM_0252.JPG", "/images/SAM_0251.JPG"],
  solution: ["/SAM_0260.JPG", "/SAM_0261.JPG", "/images/SAM_0260.JPG"],

  guest: ["/SAM_0251.JPG", "/SAM_0252.JPG", "/images/SAM_0251.JPG", "/GrowArea2.jpg"],
  customer: ["/SAM_0260.JPG", "/SAM_0261.JPG", "/images/SAM_0260.JPG", "/images/produce.jpg"],
  marketplace: ["/SAM_0280.JPG", "/SAM_0281.JPG", "/images/SAM_0280.JPG", "/images/marketplace.jpg"],
  grower: ["/SAM_0300.JPG", "/SAM_0301.JPG", "/images/SAM_0300.JPG", "/images/grower.jpg"],
  youth: ["/SAM_0320.JPG", "/SAM_0321.JPG", "/images/SAM_0320.JPG", "/images/youth.jpg"],
  partners: ["/SAM_0340.JPG", "/SAM_0341.JPG", "/images/SAM_0340.JPG", "/images/partners.jpg"],

  future: ["/GrowArea2.jpg", "/SAM_0340.JPG", "/images/GrowArea2.jpg"],
  ending: ["/GrowArea.jpg", "/GrowArea2.jpg", "/images/GrowArea.jpg"],
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
    title: "Welcome to the Farm Experience",
    body:
      "This is a guided experience. The screen will move through the full story on its own so the viewer can simply look, read, and understand the Bronson Family Farm ecosystem.",
    bullets: [
      "Bronson Family Farm is more than a farm.",
      "It is a place-based food, grower, youth workforce, wellness, and community development ecosystem.",
      "Each step explains how the system works from beginning to end.",
    ],
  },
  {
    key: "place",
    label: "Place",
    title: "Historic Lansdowne Airport",
    body:
      "The farm is being developed at the Historic Lansdowne Airport in Youngstown, Ohio. The location gives the project a powerful place-based story where land, history, agriculture, and future opportunity meet.",
    bullets: [
      "A historic site becomes a productive community asset.",
      "The airport setting creates a memorable destination.",
      "The land supports food production, education, events, and agritourism.",
    ],
  },
  {
    key: "problem",
    label: "Need",
    title: "The Problem: Food Access and Food Cost",
    body:
      "Families are facing higher food costs, limited access to fresh produce, and disconnected systems for growers and customers. The need is practical: grow more food, move it better, teach people how to grow, and keep resources circulating locally.",
    bullets: [
      "Fresh food access is a community need.",
      "Growers need support, tools, markets, and distribution pathways.",
      "Families need nutritious, chemical-free food they can reach.",
    ],
  },
  {
    key: "solution",
    label: "Solution",
    title: "The Solution: A Coordinated Ecosystem",
    body:
      "Bronson Family Farm and Farm & Family Alliance create a coordinated system where food, growers, youth, customers, partners, and community resources work together instead of separately.",
    bullets: [
      "The food moves through the system, not the burden of access.",
      "Growers are connected to opportunity.",
      "Customers, schools, businesses, and partners can participate through clear pathways.",
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
      "The long-term vision expands the farm into a regional destination with agriculture, recreation, education, wellness, family activity, and community-based economic opportunity.",
    bullets: [
      "Future experiences may include camping, tours, events, and family recreation.",
      "An 18-hole mini-golf course and children’s activity zones can support agritourism.",
      "The destination model helps food, money, and opportunity circulate locally.",
    ],
  },
  {
    key: "ending",
    label: "End",
    title: "End of Guided Experience",
    body:
      "The experience ends with a clear understanding of the ecosystem: guests experience it, customers access food, growers gain support, youth build skills, partners align resources, and the community benefits.",
    bullets: [
      "Every role has a purpose.",
      "Every pathway connects back to food access and community benefit.",
      "Bronson Family Farm becomes a model for place-based food system development.",
    ],
  },
];

export default function App() {
  const [language, setLanguage] = useState("English");
  const [tourIndex, setTourIndex] = useState(0);
  const [isGuided, setIsGuided] = useState(true);
  const [activePathway, setActivePathway] = useState<PathwayKey | null>(null);

  const currentStep = tourSteps[tourIndex];

  const activeData = useMemo(
    () => pathways.find((p) => p.key === activePathway),
    [activePathway]
  );

  useEffect(() => {
    if (!isGuided) return;

    const section = document.getElementById("guided-tour");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });

    const timer = window.setTimeout(() => {
      if (tourIndex < tourSteps.length - 1) {
        setTourIndex((prev) => prev + 1);
      } else {
        setIsGuided(false);
      }
    }, 8500);

    return () => window.clearTimeout(timer);
  }, [tourIndex, isGuided]);

  const startGuidedTour = () => {
    setTourIndex(0);
    setIsGuided(true);
    setActivePathway(null);
    document.getElementById("guided-tour")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    document.getElementById("guided-tour")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jumpToPathway = (key: PathwayKey) => {
    setIsGuided(false);
    setActivePathway(key);
    setTourIndex(tourSteps.findIndex((step) => step.key === key));
    document.getElementById("pathway-detail")?.scrollIntoView({ behavior: "smooth" });
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-10">
          <div className="mb-5 flex flex-wrap gap-3">
            {["English", "Spanish", "Tagalog", "Italian", "Hebrew", "French"].map((lang) => (
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
            <span className="text-lg">Historic Lansdowne Airport · Youngstown, Ohio</span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-none md:text-7xl">
            Bronson Family Farm
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-relaxed text-white/85">
            A guided ecosystem experience showing how land, growers, food,
            youth workforce, community partners, and future agritourism work together.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <button
              onClick={startGuidedTour}
              className="rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
            >
              Start Guided Tour
            </button>

            <button
              onClick={() =>
                document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/30 px-8 py-4 text-lg font-bold hover:bg-white/10"
            >
              Explore Pathways
            </button>
          </div>
        </div>
      </section>

      <section id="guided-tour" className="mx-auto max-w-7xl px-6 pt-8 pb-16">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl">
          <div className="grid min-h-[560px] md:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[320px]">
              <SmartImage
                srcs={imageSets[currentStep.key]}
                alt={currentStep.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                  Guided Tour
                </p>
                <h2 className="mt-3 text-4xl font-black leading-tight">
                  {currentStep.label}
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <div className="mb-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                      Step {tourIndex + 1} of {tourSteps.length}
                    </p>

                    <h3 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                      {currentStep.title}
                    </h3>
                  </div>

                  <Globe2 className="shrink-0 text-green-400" size={42} />
                </div>

                <p className="text-xl leading-9 text-white/85">{currentStep.body}</p>

                <ul className="mt-7 space-y-4">
                  {currentStep.bullets.map((item) => (
                    <li key={item} className="flex gap-4 text-lg leading-8 text-white/85">
                      <CheckCircle className="mt-1 shrink-0 text-green-400" size={22} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="mb-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-green-500 transition-all duration-700"
                    style={{
                      width: `${((tourIndex + 1) / tourSteps.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-5">
                  <button
                    onClick={prevTour}
                    disabled={tourIndex === 0}
                    className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold disabled:opacity-30"
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
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsGuided((prev) => !prev)}
                      className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
                    >
                      {isGuided ? <Pause size={18} /> : <Play size={18} />}
                      {isGuided ? "Pause" : "Resume"}
                    </button>

                    <button
                      onClick={nextTour}
                      disabled={tourIndex === tourSteps.length - 1}
                      className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-bold text-black disabled:opacity-30"
                    >
                      Next
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {tourIndex === tourSteps.length - 1 && (
                  <button
                    onClick={startGuidedTour}
                    className="mt-6 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black"
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

      <section id="pathways" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 text-center">
          <p className="text-green-400">Explore the Ecosystem</p>

          <h2 className="mt-3 text-5xl font-black">Pathways Through the Farm</h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-8 text-white/70">
            Every pathway represents a different role inside the ecosystem. Together
            they create a connected regional system focused on food accessibility,
            grower support, workforce development, and sustainability.
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

              <h2 className="mt-3 text-5xl font-black">{activeData.title}</h2>

              <p className="mt-6 text-xl leading-9 text-white/80">{activeData.purpose}</p>

              <ul className="mt-8 space-y-5">
                {activeData.depth.map((item) => (
                  <li key={item} className="flex gap-4 text-lg leading-8 text-white/85">
                    <CheckCircle className="mt-1 shrink-0 text-green-400" size={22} />
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

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
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
