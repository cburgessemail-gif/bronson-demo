import React, { useMemo, useState } from "react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type Pathway = {
  title: string;
  label: string;
  mission: string;
  image: string;
  soundbite: string;
  intro: string;
  knowledge: string[];
  purpose: string;
  next: string;
  action: string;
};

const img = (name: string) => `/images/${name}`;

const images = {
  hero: img("farm-aerial-wide.jpg"),
  guest: img("farm-aerial-wide.jpg"),
  customer: img("fresh-produce.jpg"),
  marketplace: img("grownby-storefront.jpg"),
  grower: img("grower-field.jpg"),
  youth: img("youth-workforce.jpg"),
  partners: img("partner-table.jpg"),
};

const pathways: Record<PathwayKey, Pathway> = {
  guest: {
    title: "Guest Pathway",
    label: "Guest",
    mission: "Understand the vision, story, and purpose.",
    image: images.guest,
    soundbite:
      "This land is a living demonstration of restoration, food access, legacy, and community possibility.",
    intro:
      "Guests enter through story. Bronson Family Farm introduces them to the Historic Lansdowne Airport site, the land, the people, and the purpose behind the farm ecosystem.",
    knowledge: [
      "The farm connects agriculture, agritourism, education, food access, and community wellness.",
      "Guests can attend events, walk the experience, learn the story, and return as supporters.",
      "The goal is to help visitors understand why this work matters for Youngstown and the Mahoning Valley.",
    ],
    purpose:
      "The Guest Pathway helps people understand the farm’s mission before asking them to buy, volunteer, partner, or participate.",
    next: "Explore the marketplace, attend Growers Supply Market, volunteer, or share the farm story.",
    action: "Begin Guest Journey",
  },
  customer: {
    title: "Customer Pathway",
    label: "Customer",
    mission: "Connect fresh food, nutrition, and repeat healthy choices.",
    image: images.customer,
    soundbite:
      "Customers come for food, seedlings, and resources — then return because the farm helps them live healthier.",
    intro:
      "The Customer Pathway shows how families can discover produce, seedlings, Bubble Babies™, nutrition education, and seasonal farm offerings.",
    knowledge: [
      "Customers can preorder through the marketplace and return for pickup opportunities.",
      "The farm supports healthier choices through demonstrations, food education, and fresh local products.",
      "Customer participation helps sustain the farm and strengthens local food access.",
    ],
    purpose:
      "The Customer Pathway turns interest in fresh food into repeated engagement, learning, and purchasing power.",
    next: "Review available products, visit the GrownBy store, or attend the next market event.",
    action: "View Customer Resources",
  },
  marketplace: {
    title: "Marketplace Pathway",
    label: "Marketplace",
    mission: "Convert interest into purchasing power and sustainability.",
    image: images.marketplace,
    soundbite:
      "The marketplace is where attention becomes action: orders, pickup, grower visibility, and revenue.",
    intro:
      "The Marketplace Pathway demonstrates how Bronson Family Farm connects customers, growers, value-added producers, and community buyers through GrownBy and market events.",
    knowledge: [
      "GrownBy supports online ordering and product visibility for the farm.",
      "The marketplace can help growers move from participation to sales.",
      "The marketplace supports sustainability by connecting food access, education, and revenue.",
    ],
    purpose:
      "The Marketplace Pathway shows how the ecosystem becomes financially active while still serving community needs.",
    next: "Enter the GrownBy store, support local growers, preorder products, or return for market days.",
    action: "Enter Marketplace",
  },
  grower: {
    title: "Grower Pathway",
    label: "Grower",
    mission: "Connect producers to opportunity and market participation.",
    image: images.grower,
    soundbite:
      "Growers enter the ecosystem to access customers, shared resources, education, and visibility.",
    intro:
      "The Grower Pathway shows how producers can connect to events, marketplace opportunities, education, and a broader local food network.",
    knowledge: [
      "Growers can register interest and participate in Growers Supply Market.",
      "The ecosystem supports shared learning, sales visibility, and collaboration.",
      "Growers are invited to return as part of a stronger regional food system.",
    ],
    purpose:
      "The Grower Pathway builds a bridge between independent growing and shared marketplace success.",
    next: "Register interest, attend Growers Supply Market, or connect with shared resources.",
    action: "Explore Grower Entry",
  },
  youth: {
    title: "Youth Workforce Pathway",
    label: "Youth Workforce",
    mission: "Build skills, responsibility, and future readiness.",
    image: images.youth,
    soundbite:
      "Youth enter as learners and grow into workers, leaders, problem-solvers, and community contributors.",
    intro:
      "The Youth Workforce Pathway turns the farm into a living classroom where young people can learn agriculture, customer service, teamwork, responsibility, and entrepreneurship.",
    knowledge: [
      "Youth can learn through hands-on growing, setup, market preparation, and supervised roles.",
      "The farm connects practical work with confidence, accountability, and career readiness.",
      "Youth participation supports both personal development and community benefit.",
    ],
    purpose:
      "The Youth Workforce Pathway gives young people meaningful work, exposure, responsibility, and future-facing skills.",
    next: "Explore youth roles, supervised learning, farm tasks, and market-day responsibilities.",
    action: "View Youth Pathway",
  },
  partners: {
    title: "Partner Pathway",
    label: "Partner",
    mission: "Align resources and collaboration for community benefit.",
    image: images.partners,
    soundbite:
      "Partners help turn vision into infrastructure, education, food access, and measurable impact.",
    intro:
      "The Partner Pathway shows how funders, civic leaders, businesses, educators, and community organizations can support the farm ecosystem.",
    knowledge: [
      "Partners may support supplies, sponsorships, demonstrations, infrastructure, education, or media.",
      "Partnerships help strengthen food access, youth development, agritourism, and economic activity.",
      "The ecosystem honors clear roles for Bronson Family Farm, Farm & Family Alliance, Inc., Parker Farms, and supporting partners.",
    ],
    purpose:
      "The Partner Pathway makes collaboration practical, visible, and tied to outcomes.",
    next: "Sponsor, volunteer, donate supplies, join an event, schedule a site visit, or support infrastructure.",
    action: "View Partner Opportunities",
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

function ImageBlock({
  src,
  title,
  className = "",
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-900 via-stone-700 to-amber-700 shadow-xl ${className}`}
    >
      {!failed && (
        <img
          src={src}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">
          Bronson Family Farm
        </p>
        <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState<PathwayKey>("guest");
  const [language, setLanguage] = useState("English");

  const pathway = useMemo(() => pathways[selected], [selected]);

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-stone-900">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-stone-950 via-emerald-950 to-stone-700">
        <img
          src={images.hero}
          alt="Bronson Family Farm aerial view"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-emerald-950/60" />

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
                  onClick={() => {
                    setSelected(key);
                    document
                      .getElementById("pathway")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
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

      <section id="pathway" className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <ImageBlock src={pathway.image} title={pathway.title} className="min-h-[460px]" />

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
              The marketplace is not just a page. It is a working pathway for orders,
              pickup, grower participation, product visibility, customer return, and
              long-term sustainability.
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
                onClick={() => {
                  setSelected("marketplace");
                  document
                    .getElementById("pathway")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border border-white/30 px-6 py-3 font-bold text-white"
              >
                View Marketplace Pathway
              </button>
            </div>
          </div>

          <ImageBlock
            src={images.marketplace}
            title="Marketplace / GrownBy Storefront"
            className="min-h-[360px]"
          />
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
              onClick={() => {
                setSelected(key);
                document
                  .getElementById("pathway")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-3xl bg-white p-6 text-left shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
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
            This demo is designed to make the Bronson Family Farm ecosystem understandable,
            usable, and repeatable. Guests see the story. Customers find food and resources.
            Growers see opportunity. Youth see skill-building. Partners see alignment.
            The marketplace turns the experience into action.
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
