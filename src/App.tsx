import React, { useMemo, useState } from "react";

const eventbriteUrl =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const pathways = [
  {
    id: "guest",
    label: "Guest",
    icon: "🏡",
    image: "/SAM_0220.JPG",
    title: "Food. Wellness. Opportunity.",
    supporting:
      "Bronson Family Farm reconnects communities to food security, education, outdoor engagement, and regional collaboration.",
  },
  {
    id: "customer",
    label: "Customer",
    icon: "🧺",
    image: "/SAM_0249.JPG",
    title: "Healthy Communities Begin With Healthy Food.",
    supporting:
      "Fresh food access, nutrition awareness, and community participation help strengthen long-term wellness and food security.",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: "🥬",
    image: "/SAM_0255.JPG",
    title: "Local Food Creates Local Strength.",
    supporting:
      "The marketplace transforms community participation into food access, economic circulation, grower opportunity, and regional sustainability.",
  },
  {
    id: "grower",
    label: "Grower",
    icon: "🌱",
    image: "/SAM_0281.JPG",
    title: "Unused Land Can Become Community Infrastructure.",
    supporting:
      "The ecosystem helps growers access tools, knowledge, seedlings, demonstrations, collaboration, and pathways into local participation.",
  },
  {
    id: "youth",
    label: "Youth Workforce",
    icon: "💼",
    image: "/Samaeera2.jpg",
    title: "Outdoor Work Becomes Confidence.",
    supporting:
      "Young people develop leadership, responsibility, workforce readiness, and environmental stewardship through hands-on participation.",
  },
  {
    id: "partners",
    label: "Partners",
    icon: "🤝",
    image: "/SAM_0301.JPG",
    title: "Collaboration Strengthens Communities.",
    supporting:
      "Regional partnerships connect food security, wellness, workforce development, education, and long-term sustainability.",
  },
  {
    id: "value",
    label: "Value-Added",
    icon: "🏭",
    image: "/culniary_edibleflowers.jpeg",
    title: "Food Can Become Enterprise.",
    supporting:
      "Local products, prepared foods, packaging, and entrepreneurship help strengthen regional economic participation.",
  },
  {
    id: "investment",
    label: "Investment",
    icon: "💚",
    image: "/GrowArea2.jpg",
    title: "An Investment In Food Security Is An Investment In Community Health.",
    supporting:
      "Support helps expand food access, youth workforce development, wellness programming, growing infrastructure, and long-term regional resilience.",
  },
];

const partners = [
  "City of Youngstown",
  "Home Depot",
  "Central State University",
  "Petitti Garden Centers",
  "Elliott's Garden Center",
  "Parker Farms",
  "Youngstown Area Jewish Foundation",
  "Farm & Family Alliance Inc.",
  "Gates Drone Services",
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function ImagePanel({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-[420px] items-center justify-center rounded-[40px] bg-[#173C2D] text-white">
        <div className="text-center">
          <div className="text-5xl">🌿</div>
          <p className="mt-4 text-xl font-black">
            Image Missing
          </p>
          <p className="mt-2 text-sm opacity-70">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

export default function App() {
  const [active, setActive] = useState(pathways[0]);

  const currentIndex = pathways.findIndex(
    (p) => p.id === active.id
  );

  const nextPathway =
    pathways[(currentIndex + 1) % pathways.length];

  const progress = useMemo(() => {
    return Math.round(
      ((currentIndex + 1) / pathways.length) * 100
    );
  }, [currentIndex]);

  return (
    <main className="min-h-screen bg-[#F5F1E6] text-[#1C1C1C]">

      {/* HERO */}

      <section
        className="relative min-h-screen overflow-hidden"
        id="top"
      >
        <div className="absolute inset-0">
          <ImagePanel
            src="/GrowArea.jpg"
            alt="Bronson Family Farm"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">

          <div className="max-w-5xl text-white">

            <div className="mb-8 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur">
              Growers Supply Market · May 16, 2026 · By Invitation Only
            </div>

            <h1 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
              Food Security
              <br />
              Begins Locally.
            </h1>

            <p className="mt-10 max-w-3xl text-2xl leading-10 text-white/90">
              Bronson Family Farm is building a regional ecosystem
              for food security, wellness, workforce development,
              entrepreneurship, and community resilience throughout
              Youngstown and Mahoning County.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button
                onClick={() => scrollToId("guided")}
                className="rounded-full bg-[#E7D7A3] px-8 py-5 text-lg font-black text-[#173C2D] transition hover:bg-white"
              >
                Begin Guided Experience
              </button>

              <a
                href={eventbriteUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-5 text-lg font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                Register For Event
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* GUIDED EXPERIENCE */}

      <section
        id="guided"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="mb-16">

          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#7b705f]">
            Guided Experience
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-[#173C2D] md:text-6xl">
            Every Pathway Strengthens The Ecosystem.
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#555]">
            Explore how food security, wellness, workforce development,
            entrepreneurship, and community collaboration connect
            together through Bronson Family Farm.
          </p>

        </div>

        {/* PROGRESS */}

        <div className="mb-12">

          <div className="mb-3 flex justify-between text-sm font-black text-[#173C2D]">
            <span>Guided Tour Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-[#ddd2bd]">
            <div
              className="h-full rounded-full bg-[#173C2D]"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* PATHWAY BUTTONS */}

        <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {pathways.map((pathway) => (

            <button
              key={pathway.id}
              onClick={() => setActive(pathway)}
              className={`rounded-[30px] p-5 text-left transition-all ${
                active.id === pathway.id
                  ? "bg-[#173C2D] text-white shadow-2xl"
                  : "bg-white text-[#173C2D] shadow-lg hover:shadow-xl"
              }`}
            >

              <div className="mb-5 text-3xl">
                {pathway.icon}
              </div>

              <p className="text-sm font-black uppercase tracking-[0.2em] opacity-70">
                {pathway.label}
              </p>

              <p className="mt-3 text-2xl font-black leading-tight">
                {pathway.title}
              </p>

            </button>
          ))}
        </div>

        {/* ACTIVE PANEL */}

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <ImagePanel
              src={active.image}
              alt={active.label}
            />
          </div>

          <div className="flex flex-col justify-center rounded-[40px] bg-white p-12 shadow-2xl">

            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#7b705f]">
              {active.label}
            </p>

            <h3 className="mt-5 text-5xl font-black leading-[1] tracking-tight text-[#173C2D] md:text-6xl">
              {active.title}
            </h3>

            <p className="mt-8 text-2xl leading-10 text-[#555]">
              {active.supporting}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-[28px] bg-[#F5F1E6] p-6">
                <p className="text-lg font-black text-[#173C2D]">
                  Food Security
                </p>

                <p className="mt-3 leading-7 text-[#666]">
                  Strengthening local access to healthy food,
                  growers, education, and participation.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#F5F1E6] p-6">
                <p className="text-lg font-black text-[#173C2D]">
                  Community Wellness
                </p>

                <p className="mt-3 leading-7 text-[#666]">
                  Connecting wellness, workforce,
                  collaboration, outdoor engagement,
                  and opportunity.
                </p>
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={() => setActive(nextPathway)}
                className="rounded-full bg-[#173C2D] px-7 py-4 font-black text-white transition hover:bg-[#2b5d47]"
              >
                Continue to {nextPathway.label}
              </button>

              <a
                href={eventbriteUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#173C2D]/20 bg-[#F5F1E6] px-7 py-4 font-black text-[#173C2D]"
              >
                Register For Event
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* IMPACT */}

      <section className="bg-[#173C2D] px-6 py-24 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">

          <div className="rounded-[36px] bg-white/10 p-10 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E7D7A3]">
              Food Security
            </p>

            <h3 className="mt-5 text-4xl font-black leading-tight">
              Food Access Is Community Infrastructure.
            </h3>

            <p className="mt-6 text-xl leading-9 text-white/85">
              Bronson Family Farm strengthens long-term food
              security through agriculture, education,
              wellness, workforce development,
              and community participation.
            </p>
          </div>

          <div className="rounded-[36px] bg-white/10 p-10 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E7D7A3]">
              Healthcare
            </p>

            <h3 className="mt-5 text-4xl font-black leading-tight">
              Food Security Is Preventive Healthcare.
            </h3>

            <p className="mt-6 text-xl leading-9 text-white/85">
              Healthy food access, outdoor engagement,
              workforce opportunity, and community
              stability are interconnected.
            </p>
          </div>

          <div className="rounded-[36px] bg-white/10 p-10 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E7D7A3]">
              Transformation
            </p>

            <h3 className="mt-5 text-4xl font-black leading-tight">
              Transformation Begins With Vision.
            </h3>

            <p className="mt-6 text-xl leading-9 text-white/85">
              Bronson Family Farm is transforming
              overlooked land into a destination
              for food security, wellness,
              entrepreneurship, education,
              and agritourism.
            </p>
          </div>

        </div>
      </section>

      {/* PARTNERS */}

      <section className="bg-[#F5F1E6] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#7b705f]">
            Community & Ecosystem Partners
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-[#173C2D] md:text-6xl">
            Collaboration Strengthens Communities.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {partners.map((partner) => (

              <div
                key={partner}
                className="rounded-[30px] bg-white p-7 text-xl font-black text-[#173C2D] shadow-lg"
              >
                {partner}
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* FINAL */}

      <section className="bg-gradient-to-br from-[#10281d] via-[#173C2D] to-[#2a241b] px-6 py-28 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E7D7A3]">
            Final Message
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
            This Is More Than A Farm.
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-2xl leading-10 text-white/85">
            Bronson Family Farm is building community infrastructure
            designed to grow food, opportunity, wellness,
            sustainability, and future generations throughout
            the Mahoning Valley.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button
              onClick={() => setActive(pathways[7])}
              className="rounded-full bg-[#E7D7A3] px-8 py-4 text-lg font-black text-[#173C2D] transition hover:bg-white"
            >
              Support Food Security
            </button>

            <a
              href={eventbriteUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              Register For Event
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
