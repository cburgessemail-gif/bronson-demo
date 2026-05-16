import React, { useEffect, useMemo, useRef, useState } from "react";

const TOUR_TIMING = {
  firstMoveDelay: 2200,
  slideDuration: 13500,
  deepSlideDuration: 16000,
};

const slides = [
  {
    id: "ecosystem",
    title: "A Connected Food Ecosystem",
    subtitle: "People. Resources. Opportunity. Circulating Together.",
    image: "/EcosystemOverview.png",
    deep: true,
    ecosystem: true,
    text: "Bronson Family Farm is a place-based ecosystem where growers, families, youth, customers, partners, resources, and opportunities work together instead of separately. The ecosystem helps food, knowledge, workforce development, partnerships, and economic value circulate locally to strengthen the community over time.",
  },
  {
    id: "place",
    title: "The Place",
    subtitle: "Historic Lansdowne Airport • Youngstown, Ohio",
    image: "/SAM_0220.JPG",
    deep: true,
    text: "Bronson Family Farm is being developed on land connected to the Historic Lansdowne Airport. What was once a place of transportation and movement is now becoming a place of food production, learning, workforce development, agritourism, and community gathering.",
  },
  {
    id: "guest",
    title: "Explore the Farm",
    subtitle: "Experience the vision, story, and purpose",
    image: "/SAM_0221.JPG",
    pathway: "Explore the Farm",
    text: "Guests enter the ecosystem to understand what Bronson Family Farm is becoming and why it matters. They experience the land, the story, the growing areas, the community purpose, and the vision for food access, education, and family-centered agritourism.",
    detail:
      "This experience helps visitors understand the full vision before they decide how they want to participate.",
    experience: [
      "See the farm story, history, and purpose.",
      "Understand what a community food ecosystem is.",
      "Explore growing areas, demonstrations, and future destination plans.",
      "Identify where they may fit as a visitor, customer, volunteer, partner, or supporter.",
    ],
  },
  {
    id: "customer",
    title: "Healthy Food Access",
    subtitle: "Fresh, chemical-free food and healthier choices",
    image: "/SAM_0222.JPG",
    pathway: "Healthy Food Access",
    text: "Families connect to fresh, chemical-free food grown locally with care. This experience supports healthier family choices, nutrition awareness, and repeat access to local food through the marketplace and future distribution system.",
    detail:
      "This experience connects families to food, nutrition, wellness, and consistent healthy choices.",
    experience: [
      "Learn what is being grown and why quality matters.",
      "Connect to fresh, chemical-free produce.",
      "Understand how local food supports health and family wellness.",
      "Return through marketplace access, ordering, events, and community food distribution.",
    ],
  },
  {
    id: "marketplace",
    title: "Community Marketplace",
    subtitle: "Food and money circulate locally",
    image: "/SAM_0223.JPG",
    deep: true,
    pathway: "Community Marketplace",
    text: "The Community Marketplace helps food move efficiently through the ecosystem. Growers should not have to carry the burden of distribution alone. Bronson Family Farm works to connect growers with customers, schools, markets, businesses, organizations, institutions, and community buyers so the food moves — not the farmer.",
    detail:
      "This experience turns interest into purchasing power, distribution, and sustainability.",
    experience: [
      "Connect local growers to buyers and community outlets.",
      "Support food movement to schools, families, businesses, and organizations.",
      "Create a stronger system for selling, ordering, pickup, and distribution.",
      "Keep food dollars circulating locally instead of leaving the community.",
    ],
  },
  {
    id: "grower",
    title: "Grower Support System",
    subtitle: "Tools, supplies, demonstrations, and support",
    image: "/SAM_0225.JPG",
    deep: true,
    pathway: "Grower Support System",
    text: "Growers need more than land. They need education, demonstrations, tools, infrastructure ideas, networking, market access, and support. The Growers Supply Market was created to help small farms, gardeners, and community growers learn, prepare, build confidence, and grow more successfully.",
    detail:
      "This experience connects producers to tools, knowledge, market participation, and opportunity.",
    experience: [
      "See demonstrations and growing methods.",
      "Learn about tools, supplies, soil, irrigation, and production needs.",
      "Connect to marketplace and distribution opportunities.",
      "Build confidence as part of a larger food ecosystem.",
    ],
  },
  {
    id: "youth",
    title: "Youth Workforce Development",
    subtitle: "Skills, leadership, and future readiness",
    image: "/SAM_0226.JPG",
    deep: true,
    pathway: "Youth Workforce Development",
    text: "Youth workforce development is built into the ecosystem. Young people gain hands-on experience in leadership, responsibility, communication, teamwork, agriculture, food handling, customer engagement, and outdoor work readiness.",
    detail:
      "This experience builds responsibility, practical skills, confidence, and future readiness.",
    experience: [
      "Participate in structured outdoor learning and work experiences.",
      "Practice responsibility, safety, teamwork, and communication.",
      "Learn growing, food handling, customer service, and leadership skills.",
      "Build confidence for future employment, entrepreneurship, and service.",
    ],
  },
  {
    id: "partners",
    title: "Community Partnerships",
    subtitle: "Shared impact and collaboration",
    image: "/SAM_0229.JPG",
    pathway: "Community Partnerships",
    text: "Partners strengthen the ecosystem through collaboration, education, workforce support, health programming, demonstrations, funding, tools, sponsorship, and shared community investment.",
    detail:
      "This experience aligns resources, collaboration, and community benefit.",
    experience: [
      "Identify where partner resources can strengthen the ecosystem.",
      "Support education, health, workforce, food access, or infrastructure.",
      "Collaborate with growers, families, youth, and community organizations.",
      "Help create a replicable model for place-based food system development.",
    ],
  },
  {
    id: "future",
    title: "Future Destination",
    subtitle: "Agritourism and family experiences",
    image: "/FutureDestination.jpg",
    deep: true,
    text: "The long-term vision includes agritourism, family camping, educational experiences, an 18-hole mini-golf course, food education, children’s activities, value-added products, and destination experiences that reconnect people to land, food, and community.",
  },
  {
    id: "closing",
    title: "Thank You",
    subtitle: "Help us grow the ecosystem together",
    image: "/GrowArea2.jpg",
    deep: true,
    closing: true,
    text: "Thank you for experiencing the Bronson Family Farm ecosystem demo. Your feedback, ideas, partnerships, and support help strengthen the vision for local food access, growers, youth workforce development, health, education, and community revitalization throughout Youngstown and beyond.",
  },
];

const experienceLabels = [
  "Explore the Farm",
  "Healthy Food Access",
  "Community Marketplace",
  "Grower Support System",
  "Youth Workforce Development",
  "Community Partnerships",
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const [paused, setPaused] = useState(false);
  const [tourJustStarted, setTourJustStarted] = useState(false);

  const timerRef = useRef<number | null>(null);
  const firstMoveRef = useRef<number | null>(null);

  const current = slides[index];
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  const clearAllTimers = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (firstMoveRef.current) {
      window.clearTimeout(firstMoveRef.current);
      firstMoveRef.current = null;
    }
  };

  const safeSetIndex = (newIndex: number) => {
    setIndex(Math.max(0, Math.min(newIndex, slides.length - 1)));
  };

  const goToSlide = (newIndex: number) => {
    clearAllTimers();
    setGuided(false);
    setPaused(false);
    setTourJustStarted(false);
    safeSetIndex(newIndex);
  };

  const startGuidedTour = () => {
    clearAllTimers();
    setIndex(0);
    setGuided(true);
    setPaused(false);
    setTourJustStarted(true);

    firstMoveRef.current = window.setTimeout(() => {
      setTourJustStarted(false);
      setIndex(1);
    }, TOUR_TIMING.firstMoveDelay);
  };

  const togglePause = () => {
    if (!guided) return;

    if (paused) {
      setPaused(false);
      return;
    }

    clearAllTimers();
    setPaused(true);
    setTourJustStarted(false);
  };

  const exploreExperience = (label: string) => {
    const target = slides.findIndex((slide) => slide.pathway === label);
    goToSlide(target);
  };

  useEffect(() => {
    if (!guided || paused || tourJustStarted) return;

    clearAllTimers();

    const duration = current.deep
      ? TOUR_TIMING.deepSlideDuration
      : TOUR_TIMING.slideDuration;

    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => {
        if (prev + 1 >= slides.length) {
          setGuided(false);
          setPaused(false);
          return prev;
        }

        return prev + 1;
      });
    }, duration);

    return clearAllTimers;
  }, [guided, paused, tourJustStarted, index, current.deep]);

  const progress = useMemo(() => {
    return ((index + 1) / slides.length) * 100;
  }, [index]);

  return (
    <main className="h-screen overflow-hidden bg-[#101510] text-white">
      <section className="relative h-screen overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        {guided && (
          <div className="absolute left-6 top-6 z-20 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-black shadow-xl">
            {paused ? "Guided Tour Paused" : "Guided Tour Running"}
          </div>
        )}

        <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-8 md:px-12">
          <header className="flex items-start justify-between gap-4">
            <div className="max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-lime-200">
                Bronson Family Farm
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
                {current.title}
              </h1>

              <p className="mt-4 text-lg text-lime-100 md:text-2xl">
                {current.subtitle}
              </p>
            </div>

            <div className="rounded-full bg-white/15 px-5 py-3 text-sm font-semibold backdrop-blur">
              {index + 1} / {slides.length}
            </div>
          </header>

          <section className="max-w-5xl rounded-[2rem] bg-black/45 p-6 shadow-2xl backdrop-blur-md md:p-8">
            <p className="text-xl leading-relaxed md:text-3xl md:leading-relaxed">
              {current.text}
            </p>

            {current.ecosystem && (
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-amber-200">Grow</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Local growers receive education, tools, demonstrations,
                    support, and marketplace access to grow healthier food
                    successfully.
                  </p>
                </div>

                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-amber-200">Connect</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Families, youth, customers, schools, organizations, and
                    partners connect through food, learning, workforce
                    development, and community experiences.
                  </p>
                </div>

                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-amber-200">
                    Circulate
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Food, money, education, partnerships, and opportunity
                    circulate locally to strengthen the ecosystem and community
                    over time.
                  </p>
                </div>
              </div>
            )}

            {current.detail && (
              <div className="mt-5 rounded-3xl border border-amber-700/40 bg-gradient-to-br from-[#7c2d12]/90 via-[#92400e]/90 to-[#78350f]/90 p-5 text-amber-50 shadow-2xl backdrop-blur">
                <h3 className="text-lg font-bold tracking-wide text-amber-200">
                  Why this experience matters
                </h3>

                <p className="mt-2 text-base leading-relaxed">
                  {current.detail}
                </p>
              </div>
            )}

            {current.experience && (
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {current.experience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-black/35 p-4 text-sm leading-relaxed text-white/90 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}

            {current.closing && (
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-amber-200">
                    Share Feedback
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Your feedback helps improve the guided tour, grower support,
                    marketplace systems, and future development.
                  </p>
                </div>

                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-amber-200">
                    Partnership Opportunities
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Bronson Family Farm welcomes partnerships involving
                    education, workforce development, agriculture, health, food
                    distribution, sponsorship, and community support.
                  </p>
                </div>

                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-amber-200">
                    Contact Constance Burgess
                  </h3>
                  <div className="mt-3 space-y-1 text-sm text-white/90">
                    <p>330-275-1604</p>
                    <p>cburgess@bronsonfamilyfarm.com</p>
                    <p>www.bronsonfamilyfarm.com</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          <footer className="space-y-4">
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-lime-300 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={startGuidedTour}
                  className="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-xl transition hover:bg-lime-200"
                >
                  {guided ? "Restart Tour" : "Guided Tour"}
                </button>

                {guided && (
                  <button
                    onClick={togglePause}
                    className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30"
                  >
                    {paused ? "Resume" : "Pause"}
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => goToSlide(index - 1)}
                  disabled={isFirst}
                  className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Back
                </button>

                {!isLast && (
                  <button
                    onClick={() => goToSlide(index + 1)}
                    className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {experienceLabels.map((label) => (
                <button
                  key={label}
                  onClick={() => exploreExperience(label)}
                  className="rounded-full bg-lime-300/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-lime-200"
                >
                  {label}
                </button>
              ))}
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
