import React, { useMemo, useState } from "react";
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
} from "lucide-react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

const imageSets: Record<PathwayKey | "hero", string[]> = {
  hero: [
    "/GrowArea.jpg",
    "/GrowArea2.jpg",
    "/images/GrowArea.jpg",
    "/images/GrowArea2.jpg",
  ],

  guest: [
    "/SAM_0251.JPG",
    "/SAM_0252.JPG",
    "/images/SAM_0251.JPG",
    "/GrowArea2.jpg",
  ],

  customer: [
    "/SAM_0260.JPG",
    "/SAM_0261.JPG",
    "/images/SAM_0260.JPG",
    "/images/produce.jpg",
  ],

  marketplace: [
    "/SAM_0280.JPG",
    "/SAM_0281.JPG",
    "/images/SAM_0280.JPG",
    "/images/marketplace.jpg",
  ],

  grower: [
    "/SAM_0300.JPG",
    "/SAM_0301.JPG",
    "/images/SAM_0300.JPG",
    "/images/grower.jpg",
  ],

  youth: [
    "/SAM_0320.JPG",
    "/SAM_0321.JPG",
    "/images/SAM_0320.JPG",
    "/images/youth.jpg",
  ],

  partners: [
    "/SAM_0340.JPG",
    "/SAM_0341.JPG",
    "/images/SAM_0340.JPG",
    "/images/partners.jpg",
  ],
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

  return (
    <img
      src={srcs[index]}
      alt={alt}
      className={className}
      onError={() => {
        if (index < srcs.length - 1) {
          setIndex(index + 1);
        }
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
      "Walk the farm. Experience history, agriculture, wellness, youth engagement, growers markets, and future agritourism.",

    purpose:
      "Guests enter the ecosystem through story, land, history, and experience.",

    depth: [
      "Learn the history of the Historic Lansdowne Airport and its transformation into a living agricultural destination.",
      "Experience the connection between food, wellness, family, and community revitalization.",
      "Explore future agritourism including camping, educational experiences, mini-golf, events, and family recreation.",
    ],
  },

  {
    key: "customer" as PathwayKey,
    title: "Customer Pathway",
    icon: Users,
    short:
      "Customers access fresh, chemical-free food through a coordinated system focused on nutrition, convenience, and community health.",

    purpose:
      "Customers receive direct access to local food without needing to navigate disconnected systems.",

    depth: [
      "Access fresh chemical-free produce and seedlings.",
      "Support a local ecosystem where growers, youth, and families benefit together.",
      "Participate in a system where food moves through coordinated distribution pathways.",
    ],
  },

  {
    key: "marketplace" as PathwayKey,
    title: "Marketplace",
    icon: ShoppingBasket,
    short:
      "The marketplace connects growers, customers, tools, seedlings, supplies, education, and coordinated food distribution.",

    purpose:
      "The marketplace becomes the operational center of the ecosystem.",

    depth: [
      "Connect growers with customers and institutions.",
      "Feature Bubble Babies™, seedlings, produce, and grower supplies.",
      "Create a regional distribution system focused on food accessibility and sustainability.",
    ],
  },

  {
    key: "grower" as PathwayKey,
    title: "Grower Pathway",
    icon: Tractor,
    short:
      "Growers receive access to tools, education, supplies, markets, coordination, and community-based support.",

    purpose:
      "Growers are supported through practical infrastructure and collaboration.",

    depth: [
      "Connect with coordinated distribution opportunities.",
      "Access educational support, tools, seedlings, and supplies.",
      "Reduce isolation by participating in a connected grower ecosystem.",
    ],
  },

  {
    key: "youth" as PathwayKey,
    title: "Youth Workforce",
    icon: GraduationCap,
    short:
      "Youth build responsibility, confidence, job readiness, teamwork, agriculture skills, and community pride through outdoor learning.",

    purpose:
      "Youth develop leadership and workforce readiness through agriculture.",

    depth: [
      "Develop teamwork, leadership, responsibility, and communication.",
      "Learn agricultural practices, customer interaction, and event support.",
      "Participate in a structured outdoor workforce environment.",
    ],
  },

  {
    key: "partners" as PathwayKey,
    title: "Partners",
    icon: Handshake,
    short:
      "Partners help align resources, education, health, workforce, agriculture, and community investment around one shared ecosystem.",

    purpose:
      "Partners help strengthen and expand the ecosystem.",

    depth: [
      "Support food accessibility and workforce development.",
      "Align educational, business, nonprofit, and community resources.",
      "Help create a replicable regional ecosystem model.",
    ],
  },
];

const tourSteps = [
  "welcome",
  "place",
  "problem",
  "solution",
  "guest",
  "customer",
  "marketplace",
  "grower",
  "youth",
  "partners",
  "future",
  "ending",
];

export default function App() {
  const [language, setLanguage] = useState("English");
  const [tourIndex, setTourIndex] = useState(0);
  const [activePathway, setActivePathway] =
    useState<PathwayKey | null>(null);

  const currentStep = tourSteps[tourIndex];

  const activeData = useMemo(
    () => pathways.find((p) => p.key === activePathway),
    [activePathway]
  );

  const nextTour = () => {
    if (tourIndex < tourSteps.length - 1) {
      setTourIndex(tourIndex + 1);
    }
  };

  const prevTour = () => {
    if (tourIndex > 0) {
      setTourIndex(tourIndex - 1);
    }
  };

  const jumpToPathway = (key: PathwayKey) => {
    setActivePathway(key);
    setTourIndex(tourSteps.indexOf(key));

    document
      .getElementById("pathway-detail")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <SmartImage
          srcs={imageSets.hero}
          alt="Bronson Family Farm"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
          <div className="mb-6 flex flex-wrap gap-3">
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

          <div className="mb-5 flex items-center gap-2 text-green-400">
            <MapPin size={18} />
            <span className="text-lg">
              Historic Lansdowne Airport · Youngstown, Ohio
            </span>
          </div>

          <h1 className="max-w-5xl text-6xl font-black leading-none md:text-8xl">
            Bronson Family Farm
          </h1>

          <p className="mt-8 max-w-4xl text-2xl leading-relaxed text-white/85">
            A guided ecosystem experience showing how land, growers,
            food, youth workforce, community partners, and future
            agritourism work together.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button
              onClick={() => {
                setTourIndex(0);

                document
                  .getElementById("guided-tour")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
            >
              Start Guided Tour
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("pathways")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-full border border-white/30 px-8 py-4 text-lg font-bold hover:bg-white/10"
            >
              Explore Pathways
            </button>
          </div>
        </div>
      </section>

      <section
        id="guided-tour"
        className="mx-auto max-w-6xl px-6 pt-8 pb-20"
      >
        <div className="rounded-[2.5rem] border border-white/10 bg-zinc-950 p-10 shadow-2xl">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                Guided Tour · Step {tourIndex + 1} of{" "}
                {tourSteps.length}
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                {currentStep === "welcome" &&
                  "Welcome to the Farm Experience"}

                {currentStep === "place" &&
                  "The Place: Historic Lansdowne Airport"}

                {currentStep === "problem" &&
                  "The Problem: Food Access and Food Cost"}

                {currentStep === "solution" &&
                  "The Solution: A Coordinated Ecosystem"}

                {currentStep === "guest" &&
                  "Pathway 1: Guest Experience"}

                {currentStep === "customer" &&
                  "Pathway 2: Customer Pathway"}

                {currentStep === "marketplace" &&
                  "Pathway 3: Marketplace"}

                {currentStep === "grower" &&
                  "Pathway 4: Grower Pathway"}

                {currentStep === "youth" &&
                  "Pathway 5: Youth Workforce"}

                {currentStep === "partners" &&
                  "Pathway 6: Partners"}

                {currentStep === "future" &&
                  "Future Agritourism Destination"}

                {currentStep === "ending" &&
                  "End of Guided Tour"}
              </h2>
            </div>

            <Globe2 className="text-green-400" size={42} />
          </div>

          <div className="text-xl leading-9 text-white/85">
            {currentStep === "welcome" && (
              <p>
                Bronson Family Farm is more than a farm. It is a
                coordinated ecosystem connecting growers, food,
                workforce development, education, wellness, and
                community investment through one intentional system.
              </p>
            )}

            {currentStep === "place" && (
              <p>
                Located at the Historic Lansdowne Airport in
                Youngstown, Ohio, the farm transforms land into a
                living destination focused on food accessibility,
                community revitalization, agriculture, wellness, and
                future agritourism.
              </p>
            )}

            {currentStep === "problem" && (
              <p>
                Communities face rising food costs, limited access to
                fresh produce, disconnected grower systems, and
                reduced agricultural knowledge. Bronson Family Farm
                responds by reconnecting people, food, growers, and
                opportunity.
              </p>
            )}

            {currentStep === "solution" && (
              <p>
                The ecosystem coordinates growers, customers,
                workforce development, community organizations, and
                food distribution so food can move efficiently
                throughout the region while supporting local
                sustainability.
              </p>
            )}

            {["guest", "customer", "marketplace", "grower", "youth", "partners"].includes(
              currentStep
            ) && (
              <div className="space-y-6">
                {pathways
                  .filter((p) => p.key === currentStep)
                  .map((p) => (
                    <div key={p.key}>
                      <p>{p.purpose}</p>

                      <ul className="mt-6 space-y-4">
                        {p.depth.map((item) => (
                          <li
                            key={item}
                            className="flex gap-4"
                          >
                            <CheckCircle
                              className="mt-1 shrink-0 text-green-400"
                              size={22}
                            />

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}

            {currentStep === "future" && (
              <p>
                The future vision expands Bronson Family Farm into a
                regional agritourism destination featuring camping,
                family recreation, educational experiences,
                mini-golf, events, youth engagement, food
                distribution, and workforce pathways.
              </p>
            )}

            {currentStep === "ending" && (
              <p>
                The ecosystem works because every role matters:
                guests, customers, growers, youth participants,
                volunteers, educators, partners, and investors all
                help strengthen food accessibility and community
                sustainability.
              </p>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
            <button
              onClick={prevTour}
              disabled={tourIndex === 0}
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 font-bold disabled:opacity-30"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <div className="flex flex-wrap gap-3">
              {tourSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTourIndex(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    index === tourIndex
                      ? "bg-green-400"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTour}
              disabled={tourIndex === tourSteps.length - 1}
              className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-4 font-bold text-black disabled:opacity-30"
            >
              Next
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section
        id="pathways"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="mb-14 text-center">
          <p className="text-green-400">
            Explore the Ecosystem
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Pathways Through the Farm
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-8 text-white/70">
            Every pathway represents a different role inside the
            ecosystem. Together they create a connected regional
            system focused on food accessibility, grower support,
            workforce development, and sustainability.
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
                  <Icon
                    className="mb-6 text-green-400"
                    size={38}
                  />

                  <h3 className="text-3xl font-black">
                    {p.title}
                  </h3>

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
        <section
          id="pathway-detail"
          className="mx-auto max-w-6xl px-6 py-20"
        >
          <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-zinc-950 p-10 md:grid-cols-2">
            <SmartImage
              srcs={imageSets[activeData.key]}
              alt={activeData.title}
              className="h-full min-h-[420px] w-full rounded-[2rem] object-cover"
            />

            <div>
              <p className="text-green-400">
                Active Pathway
              </p>

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
                onClick={() =>
                  document
                    .getElementById("guided-tour")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="mt-10 rounded-full bg-green-500 px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                Continue Guided Tour
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-5xl font-black">
          End of Experience
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-2xl leading-10 text-white/75">
          Bronson Family Farm demonstrates how food, agriculture,
          growers, education, youth workforce, community wellness,
          and economic sustainability can work together through one
          intentional ecosystem.
        </p>
      </section>
    </main>
  );
}
