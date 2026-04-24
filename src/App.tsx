import React, { useMemo, useState } from "react";

type PathwayKey = "guest" | "customer" | "marketplace" | "grower" | "youth" | "partners";

type Pathway = {
  title: string;
  label: string;
  mission: string;
  soundbite: string;
  intro: string;
  knowledge: string[];
  purpose: string;
  next: string;
  action: string;
  gradient: string;
  icon: string;
};

const pathways: Record<PathwayKey, Pathway> = {
  guest: {
    title: "Guest Pathway",
    label: "Guest",
    mission: "Understand the vision, story, and purpose.",
    soundbite: "Enter through story, land, legacy, restoration, and community possibility.",
    intro:
      "Guests are introduced to Bronson Family Farm as a living farm ecosystem rooted at the Historic Lansdowne Airport on Youngstown’s East Side.",
    knowledge: [
      "Learn why the farm connects agriculture, agritourism, food access, education, and wellness.",
      "See how visitors can return as customers, volunteers, supporters, or partners.",
      "Understand the farm as a place for restoration, learning, and community connection.",
    ],
    purpose:
      "The Guest Pathway helps people understand why the farm exists before asking them to participate.",
    next: "Explore the marketplace, attend Growers Supply Market, volunteer, or share the story.",
    action: "Begin Guest Journey",
    gradient: "from-emerald-950 via-green-800 to-amber-700",
    icon: "🌿",
  },
  customer: {
    title: "Customer Pathway",
    label: "Customer",
    mission: "Connect fresh food, nutrition, and repeat healthy choices.",
    soundbite:
      "Customers find food, seedlings, Bubble Babies™, nutrition resources, and reasons to return.",
    intro:
      "Customers are guided toward seasonal products, market pickup, fresh food education, and practical ways to make healthier choices.",
    knowledge: [
      "Preorder through the marketplace and return for pickup opportunities.",
      "Learn how fresh food, seedlings, and growing resources support healthier homes.",
      "Support local agriculture while strengthening food access in the Mahoning Valley.",
    ],
    purpose:
      "The Customer Pathway turns interest in fresh food into repeated engagement and purchasing power.",
    next: "Review available products, visit GrownBy, or attend the next market event.",
    action: "View Customer Resources",
    gradient: "from-lime-900 via-emerald-700 to-yellow-600",
    icon: "🥬",
  },
  marketplace: {
    title: "Marketplace Pathway",
    label: "Marketplace",
    mission: "Convert interest into purchasing power and sustainability.",
    soundbite:
      "The marketplace is where attention becomes action: orders, pickup, grower visibility, and revenue.",
    intro:
      "The Marketplace Pathway connects customers, growers, value-added producers, and community buyers through GrownBy and market events.",
    knowledge: [
      "GrownBy supports ordering, visibility, and customer access.",
      "The marketplace helps growers move from participation to sales.",
      "Marketplace activity supports sustainability, food access, and local economic growth.",
    ],
    purpose:
      "The Marketplace Pathway shows how the ecosystem becomes financially active while serving community needs.",
    next: "Enter GrownBy, support local growers, preorder products, or return for market days.",
    action: "Enter Marketplace",
    gradient: "from-orange-900 via-amber-700 to-emerald-700",
    icon: "🛒",
  },
  grower: {
    title: "Grower Pathway",
    label: "Grower",
    mission: "Connect producers to opportunity and market participation.",
    soundbite:
      "Growers access customers, shared resources, education, visibility, and a stronger food network.",
    intro:
      "Growers are invited into an ecosystem that supports market participation, supply sharing, education, collaboration, and sales visibility.",
    knowledge: [
      "Register interest and participate in Growers Supply Market.",
      "Connect with shared resources, demonstrations, and education.",
      "Return as part of a regional grower network designed for opportunity.",
    ],
    purpose:
      "The Grower Pathway builds a bridge between independent growing and shared marketplace success.",
    next: "Register interest, attend Growers Supply Market, or connect with shared resources.",
    action: "Explore Grower Entry",
    gradient: "from-green-950 via-lime-800 to-stone-700",
    icon: "🌱",
  },
  youth: {
    title: "Youth Workforce Pathway",
    label: "Youth Workforce",
    mission: "Build skills, responsibility, and future readiness.",
    soundbite:
      "Youth enter as learners and grow into workers, leaders, problem-solvers, and contributors.",
    intro:
      "The Youth Workforce Pathway turns the farm into a living classroom for agriculture, teamwork, responsibility, customer service, and entrepreneurship.",
    knowledge: [
      "Learn through hands-on growing, setup, market preparation, and supervised roles.",
      "Connect practical work with confidence, accountability, and career readiness.",
      "Support community benefit while building future-facing skills.",
    ],
    purpose:
      "The Youth Workforce Pathway gives young people meaningful work, exposure, responsibility, and confidence.",
    next: "Explore youth roles, supervised learning, farm tasks, and market-day responsibilities.",
    action: "View Youth Pathway",
    gradient: "from-sky-950 via-emerald-800 to-lime-700",
    icon: "🧑🏽‍🌾",
  },
  partners: {
    title: "Partner Pathway",
    label: "Partner",
    mission: "Align resources and collaboration for community benefit.",
    soundbite:
      "Partners help turn vision into infrastructure, education, food access, and measurable impact.",
    intro:
      "Partners can support supplies, sponsorships, demonstrations, infrastructure, education, technical assistance, storytelling, and community access.",
    knowledge: [
      "Support may include sponsorship, supplies, demonstrations, media, or infrastructure.",
      "Partnership strengthens food access, youth development, agritourism, and economic activity.",
      "The ecosystem honors clear roles for Bronson Family Farm, Farm & Family Alliance, Inc., Parker Farms, and supporting partners.",
    ],
    purpose:
      "The Partner Pathway makes collaboration practical, visible, and tied to outcomes.",
    next: "Sponsor, volunteer, donate supplies, join an event, schedule a site visit, or support infrastructure.",
    action: "View Partner Opportunities",
    gradient: "from-stone-950 via-emerald-900 to-amber-800",
    icon: "🤝",
  },
};

const partners = [
  "Farm & Family Alliance, Inc.",
  "Bronson Family Farm",
  "Parker Farms",
  "Central State University",
  "The Home Depot",
  "Petitti Garden Centers",
  "Elliott’s Garden Center",
  "Gates Drone Services",
  "Thomases Family Endowment of the Youngstown Area Jewish Federation",
];

const languages = ["English", "Spanish", "Tagalog", "Italian", "French", "Hebrew"];

function VisualPanel({ pathway }: { pathway: Pathway }) {
  return (
    <div
      className={`relative min-h-[460px] overflow-hidden rounded-[2rem] bg-gradient-to-br ${pathway.gradient} shadow-xl`}
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute left-10 top-10 h-52 w-52 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-black blur-3xl" />
      </div>

      <div className="relative flex h-full min-h-[460px] flex-col justify-between p-8 text-white">
        <div className="text-7xl">{pathway.icon}</div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-100">
            Bronson Family Farm
          </p>
          <h3 className="mt-3 text-4xl font-semibold">{pathway.title}</h3>
          <p className="mt-4 max-w-md text-lg leading-8 text-white/90">
            {pathway.soundbite}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState<PathwayKey>("guest");
  const [language, setLanguage] = useState("English");

  const pathway = useMemo(() => pathways[selected], [selected]);

  const goPathway = (key: PathwayKey) => {
    setSelected(key);
    setTimeout(() => {
      document.getElementById("pathway")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-stone-900">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-emerald-950 to-stone-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-5rem] h-[34rem] w-[34rem] rounded-full bg-lime-700 blur-3xl" />
          <div className="absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-emerald-100">
                Bronson Family Farm
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Growers Supply Market Demo
              </h1>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-full border border-white/30 bg-white/95 px-5 py-3 text-sm font-semibold text-stone-900 shadow"
            >
              {languages.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </header>

          <div className="mt-auto max-w-4xl pb-12 pt-20">
            <p className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              May 16, 2026 • 9:00 AM–2:00 PM • Historic Lansdowne Airport
            </p>

            <h2 className="mt-7 text-4xl font-semibold leading-tight text-white md:text-7xl">
              A living farm ecosystem for food, growers, youth, families, and partners.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
              This demo shows how people enter the Bronson Family Farm ecosystem, understand
              the mission, find resources, and return through meaningful role-based pathways.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {(Object.keys(pathways) as PathwayKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => goPathway(key)}
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                    selected === key
                      ? "bg-emerald-300 text-emerald-950"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {pathways[key].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pathway"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <VisualPanel pathway={pathway} />

        <div className="rounded-[2rem] bg-white p-6 shadow-xl md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            {language} Guided Pathway
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{pathway.title}</h2>

          <p className="mt-4 text-lg font-semibold text-stone-700">{pathway.mission}</p>

          <div className="mt-8 grid gap-5">
            <div className="rounded-3xl bg-emerald-50 p-5">
              <h3 className="text-lg font-bold text-emerald-950">Sound Bite</h3>
              <p className="mt-2 leading-7 text-stone-700">{pathway.soundbite}</p>
            </div>

            <div className="rounded-3xl bg-stone-50 p-5">
              <h3 className="text-lg font-bold">Intro</h3>
              <p className="mt-2 leading-7 text-stone-700">{pathway.intro}</p>
            </div>

            <div className="rounded-3xl bg-stone-50 p-5">
              <h3 className="text-lg font-bold">Knowledge</h3>
              <ul className="mt-3 space-y-3 text-stone-700">
                {pathway.knowledge.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-amber-50 p-5">
              <h3 className="text-lg font-bold">Summary of Purpose</h3>
              <p className="mt-2 leading-7 text-stone-700">{pathway.purpose}</p>
            </div>

            <div className="rounded-3xl bg-emerald-950 p-5 text-white">
              <h3 className="text-lg font-bold">Next Step</h3>
              <p className="mt-2 leading-7 text-emerald-50">{pathway.next}</p>
              <button className="mt-5 rounded-full bg-emerald-300 px-5 py-3 text-sm font-bold text-emerald-950">
                {pathway.action}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-200">
              Marketplace Connection
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              GrownBy connects the farm ecosystem to real purchasing power.
            </h2>

            <p className="mt-5 text-lg leading-8 text-emerald-50">
              The marketplace is a working pathway for orders, pickup, grower participation,
              product visibility, customer return, and long-term sustainability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://grownby.com/farms/bronson-family-farm/shop"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-300 px-6 py-3 font-bold text-emerald-950"
              >
                Enter GrownBy Store
              </a>

              <button
                onClick={() => goPathway("marketplace")}
                className="rounded-full border border-white/30 px-6 py-3 font-bold text-white"
              >
                View Marketplace Pathway
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-amber-700 via-orange-800 to-emerald-900 p-8 shadow-xl">
            <div className="text-7xl">🛒</div>
            <h3 className="mt-8 text-3xl font-semibold">Marketplace / GrownBy Storefront</h3>
            <p className="mt-4 text-lg leading-8 text-emerald-50">
              Products, pickup, growers, customers, and repeat engagement connect here.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
          Full Ecosystem
        </p>

        <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          Six pathways, one connected experience.
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(pathways) as PathwayKey[]).map((key) => (
            <button
              key={key}
              onClick={() => goPathway(key)}
              className="rounded-3xl bg-white p-6 text-left shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">{pathways[key].icon}</div>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                {pathways[key].label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{pathways[key].title}</h3>
              <p className="mt-3 leading-7 text-stone-700">{pathways[key].mission}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#ebe4d4] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-800">
            Ecosystem Partners
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-tight">
            Built through aligned collaboration.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-3xl bg-white p-5 text-lg font-semibold shadow"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
            Demonstration Outcome
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            People should know where they fit, what they can do, and why they should return.
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-stone-700">
            Guests see the story. Customers find food and resources. Growers see opportunity.
            Youth see skill-building. Partners see alignment. The marketplace turns the
            experience into action.
          </p>
        </div>
      </section>

      <footer className="bg-stone-950 px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Bronson Family Farm Demo</h2>
            <p className="mt-2 text-stone-300">
              Developed by Bronson Family Farm • Co-owned ecosystem with Farm & Family Alliance, Inc.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full bg-white px-6 py-3 font-bold text-stone-950"
          >
            Return to Entrance
          </button>
        </div>
      </footer>
    </main>
  );
}
