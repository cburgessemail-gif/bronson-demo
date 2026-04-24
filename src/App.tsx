import React, { useMemo, useState } from "react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type LanguageKey = "en" | "es" | "tl" | "it" | "fr" | "he";

const IMAGE_BASE = "/images/";

const imageSets: Record<string, string[]> = {
  hero: [
    "farm-aerial-wide.jpg",
    "aerial-wide.jpg",
    "bronson-aerial.jpg",
    "farm-aerial.jpg",
    "hero.jpg",
  ],
  guest: ["guest-land.jpg", "forest-path.jpg", "farm-path.jpg", "aerial-wide.jpg"],
  customer: ["fresh-produce.jpg", "produce.jpg", "seedlings.jpg", "greens.jpg"],
  marketplace: [
    "grownby-storefront.jpg",
    "marketplace-grownby.jpg",
    "grownby.jpg",
    "storefront.jpg",
    "marketplace.jpg",
  ],
  grower: ["grower-field.jpg", "grower.jpg", "farm-training.jpg", "planting.jpg"],
  youth: ["youth-workforce.jpg", "youth.jpg", "rc-toys.jpg", "students.jpg"],
  partners: ["partners.jpg", "community.jpg", "event.jpg", "growers-market.jpg"],
};

const languages: Record<LanguageKey, string> = {
  en: "English",
  es: "Español",
  tl: "Tagalog",
  it: "Italiano",
  fr: "Français",
  he: "Hebrew",
};

const mission: Record<PathwayKey, any> = {
  guest: {
    title: "Guest Pathway",
    subtitle: "Understand the land, the story, and the purpose.",
    mission: "People understand the vision of Bronson Family Farm to experience land, legacy, food, and community restoration.",
    sound: "This is not just a farm. It is a living gateway into family legacy, land stewardship, and community renewal.",
    intro: "Guests begin with the land: the former airport, the forest edge, the growing fields, and the story that connects agriculture to belonging.",
    knowledge: "They learn why the farm exists, how regenerative growing supports families, and how agritourism can turn underused land into shared opportunity.",
    summary: "The guest leaves understanding why this place matters and how one visit can become a deeper connection.",
    next: "Continue to Customer Experience",
    nextKey: "customer",
  },
  customer: {
    title: "Customer Pathway",
    subtitle: "Fresh food, nutrition, and repeat healthy choices.",
    mission: "People understand the mission of fresh food access to support nutrition, confidence, and repeat healthy buying decisions.",
    sound: "Customers are invited to see food before they buy it, understand how it grows, and choose what supports their household.",
    intro: "The experience connects produce, seedlings, Bubble Babies™, recipes, and pickup options.",
    knowledge: "Customers see what is available, what is SNAP-eligible, what can be preordered, and how healthy food becomes easier to choose.",
    summary: "The customer leaves with a clear path from interest to purchase to continued healthy choices.",
    next: "Continue to Marketplace",
    nextKey: "marketplace",
  },
  marketplace: {
    title: "Marketplace Pathway",
    subtitle: "Convert interest into purchasing power and sustainability.",
    mission: "People understand the mission of the marketplace to turn community interest into sales, grower opportunity, and long-term sustainability.",
    sound: "The marketplace is where the ecosystem becomes real: growers, customers, vendors, and partners meet around food and value.",
    intro: "This pathway mirrors the GrownBy store experience, showing products, preorder options, pickup, and grower visibility.",
    knowledge: "The marketplace supports direct sales, SNAP-aware purchasing, vendor participation, and a stronger local food economy.",
    summary: "The marketplace turns attention into action and action into sustainability.",
    next: "Continue to Grower Pathway",
    nextKey: "grower",
  },
  grower: {
    title: "Grower Pathway",
    subtitle: "Connect producers to opportunity and market participation.",
    mission: "People understand the mission of the grower pathway to help producers register, prepare, sell, learn, and participate in the local food system.",
    sound: "Growers are not just invited to sell. They are invited into an ecosystem of preparation, visibility, and shared opportunity.",
    intro: "Growers enter through the portal, learn the benefits, connect to marketplace opportunities, and access support.",
    knowledge: "The pathway includes planning, product readiness, pricing, compliance awareness, event participation, and marketplace connection.",
    summary: "The grower leaves knowing where to enter, what support exists, and how to move toward selling.",
    next: "Continue to Youth Workforce",
    nextKey: "youth",
  },
  youth: {
    title: "Youth Workforce Pathway",
    subtitle: "Build skills, responsibility, and future readiness.",
    mission: "People understand the mission of youth workforce development to build confidence, practical skills, teamwork, and future opportunity.",
    sound: "Young people learn by doing: planting, organizing, greeting, scanning, selling, documenting, and serving.",
    intro: "Youth experience the farm as a real-world classroom connected to agriculture, technology, customer service, media, and entrepreneurship.",
    knowledge: "They gain exposure to responsibility, food systems, event operations, digital tools, and career pathways.",
    summary: "The youth pathway shows how a farm can become a training ground for future readiness.",
    next: "Continue to Partner Pathway",
    nextKey: "partners",
  },
  partners: {
    title: "Partner Pathway",
    subtitle: "Align resources and collaboration for community benefit.",
    mission: "People understand the mission of partnership to align resources, education, equipment, sponsorship, and community investment.",
    sound: "Partners help turn vision into infrastructure, outreach, training, and measurable community benefit.",
    intro: "This pathway shows how organizations can support the Growers Supply Market and the broader farm ecosystem.",
    knowledge: "Partners may support education, demonstrations, supplies, health education, media, sponsorship, technology, or infrastructure.",
    summary: "The partner leaves with a clear role, a clear reason, and a clear invitation to collaborate.",
    next: "Return to Welcome",
    nextKey: "guest",
  },
};

const partners = [
  "Farm & Family Alliance, Inc.",
  "Bronson Family Farm",
  "Parker Farms",
  "Central State University",
  "The Home Depot",
  "Elliott's Garden Center",
  "Petitti Garden Centers",
  "Youngstown Area Jewish Foundation",
  "Gates Drone Services",
];

function SmartImage({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const candidates = imageSets[name] || imageSets.hero;
  const [index, setIndex] = useState(0);
  const src = IMAGE_BASE + candidates[index];

  return (
    <div className={`relative overflow-hidden bg-emerald-950 ${className || ""}`}>
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        onError={() => {
          if (index < candidates.length - 1) setIndex(index + 1);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
    </div>
  );
}

export default function App() {
  const [pathway, setPathway] = useState<PathwayKey>("guest");
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [step, setStep] = useState(0);

  const current = mission[pathway];

  const steps = useMemo(
    () => [
      ["Sound Bite", current.sound],
      ["Intro", current.intro],
      ["Knowledge", current.knowledge],
      ["Purpose Summary", current.summary],
      ["Next Move", current.next],
    ],
    [current]
  );

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else {
      setPathway(current.nextKey);
      setStep(0);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4efe4] text-[#182313]">
      <section className="relative min-h-screen">
        <SmartImage name="hero" className="absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white/85 px-5 py-4 shadow-lg backdrop-blur">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
                Developed by Bronson Family Farm
              </p>
              <h1 className="text-2xl font-bold text-stone-900 md:text-4xl">
                Bronson Family Farm Ecosystem Demo
              </h1>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageKey)}
              className="rounded-2xl border border-emerald-800 bg-white px-4 py-3 font-semibold"
            >
              {Object.entries(languages).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </header>

          <div className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-[2rem] bg-white/88 p-6 shadow-2xl backdrop-blur md:p-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-800">
                Serving the Mahoning Valley Area
              </p>

              <h2 className="text-4xl font-black leading-tight text-stone-950 md:text-6xl">
                A living farm, marketplace, and workforce ecosystem.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                This demo shows how guests, customers, growers, youth workers,
                and partners move through a meaningful pathway — from story, to
                food access, to marketplace participation, to community benefit.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {(Object.keys(mission) as PathwayKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setPathway(key);
                      setStep(0);
                    }}
                    className={`rounded-2xl px-5 py-3 text-sm font-bold shadow ${
                      pathway === key
                        ? "bg-emerald-900 text-white"
                        : "bg-[#efe1bf] text-stone-900 hover:bg-[#e3d09f]"
                    }`}
                  >
                    {mission[key].title.replace(" Pathway", "")}
                  </button>
                ))}
              </div>
            </section>

            <section className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <SmartImage name={pathway} className="h-72" />

              <div className="p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-800">
                  {current.subtitle}
                </p>

                <h3 className="mt-2 text-3xl font-black text-stone-950 md:text-4xl">
                  {current.title}
                </h3>

                <p className="mt-4 rounded-2xl bg-emerald-950 p-4 text-white">
                  {current.mission}
                </p>

                <div className="mt-5 rounded-2xl border border-stone-200 bg-[#fbf8ef] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-800">
                    {steps[step][0]}
                  </p>
                  <p className="mt-3 text-lg leading-8 text-stone-800">
                    {steps[step][1]}
                  </p>
                </div>

                <button
                  onClick={nextStep}
                  className="mt-5 w-full rounded-2xl bg-emerald-900 px-5 py-4 text-lg font-black text-white shadow-lg hover:bg-emerald-800"
                >
                  Continue
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl md:p-8">
          <h2 className="text-3xl font-black text-stone-950">
            Growers Supply Market
          </h2>
          <p className="mt-3 text-lg text-stone-700">
            May 16, 2026 · 9:00 AM–2:00 PM · Bronson Family Farm
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4efe4] p-5">
              <h3 className="text-xl font-black">Marketplace</h3>
              <p className="mt-2 text-stone-700">
                Fresh produce, seedlings, Bubble Babies™, grower products, and
                preorder pickup.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f4efe4] p-5">
              <h3 className="text-xl font-black">Demonstrations</h3>
              <p className="mt-2 text-stone-700">
                Outdoor learning, regenerative ideas, food education, arts,
                restoration, and practical growing support.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f4efe4] p-5">
              <h3 className="text-xl font-black">QR Check-In</h3>
              <p className="mt-2 text-stone-700">
                Reservation-based entry, role-based pathways, vendor support,
                and community engagement.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-emerald-950 p-6 text-white shadow-xl md:p-8">
          <h2 className="text-3xl font-black">Partner Alignment</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-2xl bg-white/10 px-4 py-3 font-semibold"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-sm font-semibold text-stone-600">
        Bronson Family Farm · Farm & Family Alliance, Inc. · Parker Farms
      </footer>
    </main>
  );
}
