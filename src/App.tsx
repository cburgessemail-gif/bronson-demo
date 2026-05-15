import React, { useEffect, useMemo, useRef, useState } from "react";

const TOUR_TIMING = {
  slideDuration: 10500,
  deepSlideDuration: 12500,
  transitionDuration: 900,
  resumeDelay: 150,
};

const images = {
  entrance: "/GrowArea.jpg",
  place: "/SAM_0220.JPG",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  marketplace: "/SAM_0223.JPG",
  grower: "/SAM_0225.JPG",
  youth: "/SAM_0226.JPG",
  partners: "/SAM_0229.JPG",
};

const slides = [
  {
    id: "entrance",
    title: "Bronson Family Farm",
    subtitle: "A guided ecosystem experience",
    image: images.entrance,
    deep: true,
    text: "Welcome to Bronson Family Farm. This is more than a farm. It is a place-based food ecosystem designed to help growers, families, youth, customers, partners, and the community move together toward food access, health, workforce development, and local economic circulation.",
  },
  {
    id: "place",
    title: "The Place",
    subtitle: "Historic Lansdowne Airport, Youngstown, Ohio",
    image: images.place,
    deep: true,
    text: "Bronson Family Farm is growing on land connected to the Historic Lansdowne Airport. The land carries history, movement, and opportunity. Today, that same place is being reimagined as a working farm, a growers supply market, and a future agritourism destination.",
  },
  {
    id: "guest",
    title: "Guest Pathway",
    subtitle: "Understand the vision",
    image: images.guest,
    text: "Guests enter the farm to see what is possible. They learn why local growing matters, how food insecurity affects families, and how a farm can become a living classroom, gathering place, and community resource.",
  },
  {
    id: "customer",
    title: "Customer Pathway",
    subtitle: "Fresh, chemical-free food and healthier choices",
    image: images.customer,
    text: "Customers connect to fresh, chemical-free food grown with care. The goal is not only to sell produce, but to help families build healthier habits, understand nutrition, and return to the ecosystem again and again.",
  },
  {
    id: "marketplace",
    title: "Marketplace Pathway",
    subtitle: "Food moves through the ecosystem",
    image: images.marketplace,
    deep: true,
    text: "The marketplace is how food and money circulate. Growers should not have to travel everywhere alone. The ecosystem helps manage distribution to families, schools, businesses, markets, and partners so local food can move more efficiently through the community.",
  },
  {
    id: "grower",
    title: "Grower Pathway",
    subtitle: "Tools, knowledge, and people",
    image: images.grower,
    deep: true,
    text: "Growers need more than land. They need tools, supplies, demonstrations, education, market access, and support. Bronson Family Farm is building a growers supply market where small farms, gardeners, and community growers can learn, prepare, and grow successfully.",
  },
  {
    id: "youth",
    title: "Youth Workforce Pathway",
    subtitle: "Skills, responsibility, and future readiness",
    image: images.youth,
    deep: true,
    text: "Youth workforce development is built into the farm. Young people can learn responsibility, teamwork, safety, growing skills, food handling, customer service, and leadership in a real outdoor working environment.",
  },
  {
    id: "partners",
    title: "Partner Pathway",
    subtitle: "Shared resources and community benefit",
    image: images.partners,
    text: "Partners help strengthen the ecosystem. Schools, businesses, nonprofits, growers, funders, health educators, artists, and workforce partners can each contribute resources that help the community grow together.",
  },
  {
    id: "future",
    title: "Future Destination",
    subtitle: "Agritourism, education, and family experience",
    image: images.entrance,
    deep: true,
    text: "The long-term vision includes agritourism, camping, youth activities, an 18-hole mini-golf experience, food education, value-added products, and family-friendly spaces that bring people back to the land with purpose.",
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
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goToSlide = (nextIndex: number) => {
    setTransitioning(true);
    window.setTimeout(() => {
      setIndex(nextIndex);
      setTransitioning(false);
    }, TOUR_TIMING.transitionDuration);
  };

  const nextSlide = () => {
    const next = index + 1 >= slides.length ? 0 : index + 1;
    goToSlide(next);
  };

  const previousSlide = () => {
    const previous = index - 1 < 0 ? slides.length - 1 : index - 1;
    goToSlide(previous);
  };

  const startAutoAdvance = () => {
    clearTourTimer();

    const duration = current.deep
      ? TOUR_TIMING.deepSlideDuration
      : TOUR_TIMING.slideDuration;

    timerRef.current = window.setTimeout(() => {
      if (!paused && guided) {
        nextSlide();
      }
    }, duration);
  };

  useEffect(() => {
    clearTourTimer();

    if (guided && !paused && !transitioning) {
      startAutoAdvance();
    }

    return clearTourTimer;
  }, [guided, paused, index, transitioning]);

  const handleGuidedTour = () => {
    setGuided(true);
    setPaused(false);
    setIndex(0);
  };

  const togglePause = () => {
    if (paused) {
      setPaused(false);
      window.setTimeout(() => {
        startAutoAdvance();
      }, TOUR_TIMING.resumeDelay);
    } else {
      setPaused(true);
      clearTourTimer();
    }
  };

  const progress = useMemo(() => {
    return Math.round(((index + 1) / slides.length) * 100);
  }, [index]);

  return (
    <main className="min-h-screen bg-[#10160f] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ${
            transitioning ? "opacity-40" : "opacity-100"
          }`}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 md:px-12">
          <header className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-lime-200">
                Bronson Family Farm
              </p>
              <h1 className="mt-2 text-3xl font-bold md:text-5xl">
                {current.title}
              </h1>
            </div>

            <div className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
              {index + 1} / {slides.length}
            </div>
          </header>

          <section className="max-w-4xl rounded-3xl bg-black/45 p-6 shadow-2xl backdrop-blur-md md:p-8">
            <p className="mb-3 text-lg font-semibold text-lime-200 md:text-2xl">
              {current.subtitle}
            </p>

            <p className="text-xl leading-relaxed md:text-3xl md:leading-relaxed">
              {current.text}
            </p>
          </section>

          <footer className="space-y-4">
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-lime-300 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleGuidedTour}
                  className="rounded-full bg-lime-300 px-5 py-3 font-bold text-black shadow-lg transition hover:bg-lime-200"
                >
                  Guided Tour
                </button>

                {guided && (
                  <button
                    onClick={togglePause}
                    className="rounded-full bg-white/20 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/30"
                  >
                    {paused ? "Resume" : "Pause"}
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={previousSlide}
                  className="rounded-full bg-white/20 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/30"
                >
                  Back
                </button>

                <button
                  onClick={nextSlide}
                  className="rounded-full bg-white/20 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/30"
                >
                  Next
                </button>
              </div>
            </div>

            <nav className="flex flex-wrap gap-2">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(slideIndex)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
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
