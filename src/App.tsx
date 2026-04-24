import React, { useMemo, useState } from "react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

const img = (name: string) => `/images/${name}`;

const farmImages = {
  hero: img("farm-aerial-wide.jpg"),
  guest: img("farm-trail.jpg"),
  customer: img("fresh-produce.jpg"),
  marketplace: img("grownby-storefront.jpg"),
  grower: img("grower-field.jpg"),
  youth: img("youth-workforce.jpg"),
  partners: img("partner-table.jpg"),
};

const pathways: Record<
  PathwayKey,
  {
    title: string;
    mission: string;
    image: string;
    soundbite: string;
    intro: string;
    knowledge: string[];
    purpose: string;
    next: string;
  }
> = {
  guest: {
    title: "Guest Pathway",
    mission: "Understand the vision, story, and purpose of Bronson Family Farm.",
    image: farmImages.guest,
    soundbite:
      "Step onto the land and see why this farm exists: legacy, food access, healing, and opportunity.",
    intro:
      "Guests enter the ecosystem through story. The farm is more than a location; it is a living demonstration of restoration, regenerative land use, and community possibility.",
    knowledge: [
      "Bronson Family Farm is located at the Historic Lansdowne Airport on Youngstown’s East Side.",
      "The farm connects agriculture, agritourism, education, wellness, and local economic development.",
      "Visitors are invited to return, learn, participate, and share the story.",
    ],
    purpose:
      "The Guest Pathway helps people understand the land, the mission, and why this project matters.",
    next: "Explore the marketplace, attend an event, volunteer, or share the farm with others.",
  },
  customer: {
    title: "Customer Pathway",
    mission: "Connect fresh food, nutrition, and repeat healthy choices.",
    image: farmImages.customer,
    soundbite:
      "Customers should see food as nourishment, access, and a reason to return again and again.",
    intro:
      "The Customer Pathway helps community members discover fresh produce, seedlings, Bubble Babies™, nutrition education, and seasonal food options.",
    knowledge: [
      "Customers can preorder, attend market events, and learn how to grow or prepare fresh food.",
      "The farm supports healthy choices through education, demonstrations, and access.",
      "Products may connect to pickup opportunities through markets and online ordering.",
    ],
    purpose:
      "The Customer Pathway turns interest in healthy food into repeat engagement with local agriculture.",
    next: "Visit the marketplace, reserve for an event, or learn what is available this season.",
  },
  marketplace: {
    title: "Marketplace Pathway",
    mission: "Convert interest into purchasing power and sustainability.",
    image: farmImages.marketplace,
    soundbite:
      "The marketplace connects community demand with local growers, food access, and farm sustainability.",
    intro:
      "The Marketplace Pathway shows how Bronson Family Farm, Farm & Family Alliance, and partner growers can move from visibility to sales, orders, pickup, and long-term participation.",
    knowledge: [
      "The marketplace experience connects to GrownBy for online ordering and product visibility.",
      "Growers can benefit from a shared ecosystem that supports sales, storytelling, and customer access.",
      "The marketplace strengthens sustainability by linking food, education, growers, and buyers.",
    ],
    purpose:
      "The Marketplace Pathway demonstrates how the farm ecosystem can generate revenue while supporting food access.",
    next: "Enter the store, review products, support local growers, or return for future market days.",
  },
  grower: {
    title: "Grower Pathway",
    mission: "Connect producers to opportunity and market participation.",
    image: farmImages.grower,
    soundbite:
      "Growers should see a path from soil and seeds to customers, education, and economic opportunity.",
    intro:
      "The Grower Pathway helps producers understand how they can connect to the ecosystem through registration, market participation, supply sharing, education, and visibility.",
    knowledge: [
      "Growers can participate in events, demonstrations, and marketplace opportunities.",
      "The ecosystem supports coordination, education, and a stronger local food network.",
      "Growers are invited into a system designed to help them return and grow over time.",
    ],
    purpose:
      "The Grower Pathway builds a bridge between independent growing and shared marketplace success.",
    next: "Register interest, prepare for Growers Supply Market, or explore shared resources.",
  },
  youth: {
    title: "Youth Workforce Pathway",
    mission: "Build skills, responsibility, and future readiness.",
    image: farmImages.youth,
    soundbite:
      "Youth enter the farm as learners and leave with skills, responsibility, confidence, and purpose.",
    intro:
      "The Youth Workforce Pathway introduces young people to agriculture, entrepreneurship, teamwork, customer service, environmental stewardship, and career readiness.",
    knowledge: [
      "Youth can learn through hands-on farm tasks, market preparation, demonstrations, and role-based responsibilities.",
      "The farm creates space for practical learning connected to real community needs.",
      "The pathway supports confidence, accountability, and future opportunity.",
    ],
    purpose:
      "The Youth Workforce Pathway turns the farm into a living classroom for work, leadership, and service.",
    next: "Explore roles, participate in supervised learning, or connect through partner programs.",
  },
  partners: {
    title: "Partner Pathway",
    mission: "Align resources and collaboration for community benefit.",
    image: farmImages.partners,
    soundbite:
      "Partners help turn vision into infrastructure, access, education, and long-term community impact.",
    intro:
      "The Partner Pathway shows how organizations, funders, businesses, educators, and civic leaders can align with the farm ecosystem.",
    knowledge: [
      "Partnership may include sponsorship, education, supplies, demonstrations, media, infrastructure, or technical support.",
      "The ecosystem is designed to respect the roles of Bronson Family Farm, Farm & Family Alliance, and participating partners.",
      "Partners help strengthen food access, youth development, agritourism, and local economic activity.",
    ],
    purpose:
      "The Partner Pathway makes collaboration visible, practical, and tied to clear outcomes.",
    next: "Sponsor, volunteer, provide resources, participate in events, or schedule a site visit.",
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

function ImagePanel({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-stone-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState<PathwayKey>("guest");
  const [language, setLanguage] = useState("English");

  const pathway = useMemo(() => pathways[selected], [selected]);

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-stone-900">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={farmImages.hero}
          alt="Bronson Family Farm aerial view"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-emerald-950/60" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-100">
                Bronson Family Farm
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Growers Supply Market Demo
              </h1>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm font-medium text-stone-900 shadow"
            >
              {languages.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </header>

          <div className="mt-auto max-w-3xl pb-12 pt-20">
            <p className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur w-fit">
              May 16, 2026 • 9:00 AM–2:00 PM • Historic Lansdowne Airport
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-7xl">
              A living farm ecosystem for food, growers, youth, families, and partners.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-100 md:text-xl">
              This demo shows how people enter the Bronson Family Farm ecosystem, understand
              the mission, find resources, and return through meaningful role-based pathways.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {(Object.keys(pathways) as PathwayKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    selected === key
                      ? "bg-emerald-300 text-emerald-950"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                >
                  {pathways[key].title.replace(" Pathway", "")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr]">
        <ImagePanel src={pathway.image} alt={pathway.title} className="min-h-[420px]" />

        <div className="rounded-3xl bg-white p-6 shadow-xl md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            {language} Guided Pathway
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{pathway.title}</h2>
          <p className="mt-4 text-lg font-medium text-stone-700">{pathway.mission}</p>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl bg-emerald-50 p-5">
              <h3 className="font-semibold text-emerald-950">Sound Bite</h3>
              <p className="mt-2 text-stone-700">{pathway.soundbite}</p>
            </div>

            <div className="rounded-2xl bg-stone-50 p-5">
              <h3 className="font-semibold">Intro</h3>
              <p className="mt-2 text-stone-700">{pathway.intro}</p>
            </div>

            <div className="rounded-2xl bg-stone-50 p-5">
              <h3 className="font-semibold">Knowledge</h3>
              <ul className="mt-3 space-y-2 text-stone-700">
                {pathway.knowledge.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-amber-50 p-5">
              <h3 className="font-semibold">Summary of Purpose</h3>
              <p className="mt-2 text-stone-700">{pathway.purpose}</p>
            </div>

            <div className="rounded-2xl bg-emerald-900 p-5 text-white">
              <h3 className="font-semibold">Next Step</h3>
              <p className="mt-2 text-emerald-50">{pathway.next}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-200">
            Marketplace Connection
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold md:text-5xl">
                GrownBy connects the marketplace to real purchasing power.
              </h2>
              <p className="mt-5 text-lg leading-8 text-emerald-50">
                The demo should show that the marketplace is not just a page. It is a pathway
                to ordering, pickup, grower participation, customer return, and long-term
                sustainability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://grownby.com/farms/bronson-family-farm/shop"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-emerald-950"
                >
                  Enter GrownBy Store
                </a>
                <button
                  onClick={() => setSelected("marketplace")}
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white"
                >
                  View Marketplace Pathway
                </button>
              </div>
            </div>

            <ImagePanel
              src={farmImages.marketplace}
              alt="GrownBy marketplace storefront"
              className="min-h-[340px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
          Ecosystem Partners
        </p>
        <h2 className="mt-3 text-4xl font-semibold">Built through aligned collaboration.</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner} className="rounded-2xl bg-white p-5 font-semibold shadow">
              {partner}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Bronson Family Farm Demo</h2>
            <p className="mt-2 text-stone-300">
              Developed by Bronson Family Farm • Co-owned ecosystem with Farm & Family Alliance, Inc.
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full bg-white px-6 py-3 font-semibold text-stone-900"
          >
            Return to Entrance
          </button>
        </div>
      </section>
    </main>
  );
}
