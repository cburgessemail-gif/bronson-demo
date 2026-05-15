import React, { useEffect, useMemo, useRef, useState } from "react";

const TOUR_TIMING = {
  slideDuration: 13000,
  deepSlideDuration: 15500,
  transitionDuration: 500,
};

const slides = [
  {
    id: "entrance",
    title: "Bronson Family Farm",
    subtitle: "A guided ecosystem experience",
    image: "/GrowArea.jpg",
    deep: true,
    text: "Welcome to Bronson Family Farm. This is more than a farm. It is a place-based food ecosystem designed to help growers, families, youth, customers, partners, and the community move together toward food access, workforce development, health, education, local food circulation, and regional revitalization.",
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
    title: "Guest Pathway",
    subtitle: "Understand the vision",
    image: "/SAM_0221.JPG",
    pathway: true,
    text: "Guests experience the atmosphere, story, purpose, and future of the ecosystem. The guided experience introduces visitors to growing areas, demonstrations, sustainability, community engagement, and the importance of local food systems.",
  },
  {
    id: "customer",
    title: "Customer Pathway",
    subtitle: "Fresh, chemical-free food",
    image: "/SAM_0222.JPG",
    pathway: true,
    text: "Customers gain access to fresh, chemical-free produce grown locally with care. The ecosystem supports healthier food choices, nutrition awareness, family wellness, and stronger connections between growers and consumers.",
  },
  {
    id: "marketplace",
    title: "Marketplace Pathway",
    subtitle: "Food and money circulate locally",
    image: "/SAM_0223.JPG",
    deep: true,
    pathway: true,
    text: "The marketplace pathway is designed to help food move efficiently through the ecosystem. Growers should not have to carry the burden of distribution alone. Bronson Family Farm works to connect growers with schools, markets, organizations, institutions, and community buyers so the food moves — not the farmer.",
  },
  {
    id: "grower",
    title: "Grower Pathway",
    subtitle: "Tools, supplies, demonstrations, and support",
    image: "/SAM_0225.JPG",
    deep: true,
    pathway: true,
    text: "Growers need more than land. They need education, demonstrations, tools, infrastructure ideas, networking, and market opportunities. The Growers Supply Market was created to help growers learn, prepare, build confidence, and grow more successfully.",
  },
  {
    id: "youth",
    title: "Youth Workforce Pathway",
    subtitle: "Skills, leadership, and future readiness",
    image: "/SAM_0226.JPG",
    deep: true,
    pathway: true,
    text: "Youth workforce development is integrated directly into the ecosystem. Young people gain hands-on experience in leadership, responsibility, communication, teamwork, food handling, growing practices, customer engagement, and outdoor work readiness.",
  },
  {
    id: "partners",
    title: "Partner Pathway",
    subtitle: "Shared impact and collaboration",
    image: "/SAM_0229.JPG",
    pathway: true,
    text: "Partners help strengthen the ecosystem through collaboration, education, workforce support, health programming, tools, supplies, demonstrations, funding, and community engagement that creates long-term shared benefit.",
  },
  {
    id: "future",
    title: "Future Destination",
    subtitle: "Agritourism and family experiences",
    image: "/SAM_0230.JPG",
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

const pathwayCards = [
  {
    title: "Guest Pathway",
    text: "Guests experience the vision, story, history, and purpose of Bronson Family Farm through a guided ecosystem experience designed to inspire learning, engagement, and community connection.",
  },
  {
    title: "Customer Pathway",
    text: "Customers gain access to fresh, chemical-free food while learning how local food systems improve nutrition, wellness, food access, and healthier family choices.",
  },
  {
    title: "Marketplace Pathway",
    text: "The marketplace pathway helps move food through the ecosystem efficiently by connecting growers to customers, schools, organizations, and institutions so the food moves — not the farmer.",
  },
  {
    title: "Grower Pathway",
    text: "Growers receive access to demonstrations, education, supplies, tools, infrastructure ideas, networking, and opportunities that strengthen local food production capacity.",
  },
  {
    title: "Youth Workforce Pathway",
    text: "Youth gain hands-on experience in leadership, teamwork, communication, responsibility, agriculture, customer service, and real-world outdoor workforce readiness.",
  },
  {
    title: "Partner Pathway",
    text: "Partners strengthen the ecosystem through collaboration, education, workforce support, health programming, funding, demonstrations, and shared community investment.",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const timerRef = useRef<number | null>(null);
  const current = slides[index];

  const clearTourTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goToSlide = (newIndex: number) => {
    if (newIndex < 0) return;

    clearTourTimer();
    setTransitioning(true);

    setTimeout(() => {
      setIndex(newIndex);
      setTransitioning(false);
    }, TOUR_TIMING.transitionDuration);
  };

  const nextSlide = () => {
    const next = index + 1 >= slides.length ? index : index + 1;
    goToSlide(next);
  };

  const previousSlide = () => {
    const previous = index - 1 < 0 ? 0 : index - 1;
    goToSlide(previous);
  };

  const startGuidedTour = () => {
    clearTourTimer();
    setTransitioning(false);
    setGuided(true);
    setPaused(false);
    setIndex(0);
  };

  const pauseTour = () => {
    clearTourTimer();
    setPaused(true);
  };

  const resumeTour = () => {
    clearTourTimer();
    setPaused(false);
  };

  const togglePause = () => {
    if (paused) {
      resumeTour();
    } else {
      pauseTour();
    }
  };

  const exploreManually = (targetIndex: number) => {
    clearTourTimer();
    setGuided(false);
    setPaused(false);
    goToSlide(targetIndex);
  };

  useEffect(() => {
    clearTourTimer();

    if (!guided || paused) return;

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

    return clearTourTimer;
  }, [guided, paused, index, current.deep]);

  const progress = useMemo(() => {
    return ((index + 1) / slides.length) * 100;
  }, [index]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#101510] text-white">
      <section className="relative min-h-screen">
        <img
          src={current.image}
          alt={current.title}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[500ms] ${
            transitioning ? "scale-105 opacity-40" : "scale-100 opacity-100"
          }`}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 md:px-12">
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-4xl">
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

          <section className="max-w-5xl rounded-[2rem] bg-black/40 p-6 shadow-2xl backdrop-blur-md md:p-10">
            <p className="text-xl leading-relaxed md:text-3xl md:leading-relaxed">
              {current.text}
            </p>

            {current.closing && (
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-lime-200">
                    Share Feedback
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Your feedback helps improve the ecosystem experience,
                    guided tour, grower support, marketplace systems, and
                    future development.
                  </p>
                </div>

                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-lime-200">
                    Partnership Opportunities
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Bronson Family Farm welcomes partnerships involving
                    education, workforce development, agriculture, health, food
                    distribution, technology, sponsorship, and community
                    support.
                  </p>
                </div>

                <div className="rounded-3xl bg-black/35 p-5 backdrop-blur">
                  <h3 className="text-lg font-bold text-lime-200">Contact</h3>
                  <div className="mt-3 space-y-2 text-sm text-white/90">
                    <p>Constance Burgess</p>
                    <p>330-275-1604</p>
                    <p>cburgess@bronsonfamilyfarm.com</p>
                    <p>www.bronsonfamilyfarm.com</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {current.pathway && (
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {pathwayCards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-3xl p-5 backdrop-blur ${
                    card.title === current.title
                      ? "bg-lime-300/90 text-black"
                      : "bg-black/35 text-white"
                  }`}
                >
                  <h3 className="text-lg font-bold">{card.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed opacity-90">
                    {card.text}
                  </p>
                </div>
              ))}
            </section>
          )}

          <footer className="space-y-5 pb-2">
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
                  className="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-xl transition hover:scale-[1.02] hover:bg-lime-200"
                >
                  Guided Tour
                </button>

                <button
                  onClick={togglePause}
                  className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30"
                >
                  {paused ? "Resume" : "Pause"}
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={previousSlide}
                  className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30"
                >
                  Back
                </button>

                <button
                  onClick={nextSlide}
                  className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Guest Pathway",
                "Customer Pathway",
                "Marketplace Pathway",
                "Grower Pathway",
                "Youth Workforce Pathway",
                "Partner Pathway",
              ].map((label) => {
                const targetIndex = slides.findIndex(
                  (slide) => slide.title === label
                );

                return (
                  <button
                    key={label}
                    onClick={() => exploreManually(targetIndex)}
                    className="rounded-full bg-lime-300/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-lime-200"
                  >
                    {label.replace(" Pathway", "")}
                  </button>
                );
              })}
            </div>

            <nav className="flex flex-wrap gap-2">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.id}
                  onClick={() => exploreManually(slideIndex)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    slideIndex === index
                      ? "bg-lime-300 text-black"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                >
                  {slide.title}
                </button>
              ))}
            </nav>
          </footer>
        </div>
      </section>
    </main>
  );
}
