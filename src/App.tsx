import React, { useState } from "react";

const IMAGE = {
  guest: "/GrowArea.jpg",
  marketplace: "/SAM_0220.JPG",
  grower: "/SAM_0221.JPG",
  youth: "/SAM_0222.JPG",
  partner: "/SAM_0223.JPG",
  valueAdded: "/SAM_0225.JPG",
  community: "/SAM_0226.JPG",
};

type PathwayKey =
  | "guest"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "valueAdded"
  | "community";

const order: PathwayKey[] = [
  "guest",
  "marketplace",
  "grower",
  "youth",
  "partner",
  "valueAdded",
  "community",
];

const pathways: Record<
  PathwayKey,
  {
    title: string;
    eyebrow: string;
    subtitle: string;
    image: string;
    meaning: string;
    experience: string;
    action: string;
  }
> = {
  guest: {
    title: "Guest Pathway",
    eyebrow: "Guided Tour · 1 of 7",
    subtitle: "Walk in as a visitor. Leave understanding the vision.",
    image: IMAGE.guest,
    meaning:
      "Guests begin by experiencing Bronson Family Farm as a living place — where land, food, family, history, and community renewal come together.",
    experience:
      "This pathway helps visitors understand why the farm exists and how they can move from curiosity into participation.",
    action: "Explore the marketplace, meet growers, or discover how to support the ecosystem.",
  },
  marketplace: {
    title: "Marketplace",
    eyebrow: "Guided Tour · 2 of 7",
    subtitle: "Fresh food, seedlings, tools, and local purchasing power.",
    image: IMAGE.marketplace,
    meaning:
      "The Marketplace turns interest into action by connecting people to produce, seedlings, supplies, and local products.",
    experience:
      "Customers can support growers, purchase healthy food, and participate in a local food economy rooted in community benefit.",
    action: "Shop, preorder, scan QR codes, or return for seasonal farm offerings.",
  },
  grower: {
    title: "Grower Pathway",
    eyebrow: "Guided Tour · 3 of 7",
    subtitle: "Growers are entrepreneurs in a larger ecosystem.",
    image: IMAGE.grower,
    meaning:
      "Growers are not isolated producers. They are contributors to a shared food system with tools, knowledge, markets, and support.",
    experience:
      "This pathway connects growers to education, seasonal support, supplies, demonstrations, and marketplace participation.",
    action: "Learn, grow, sell, teach, and strengthen local food access.",
  },
  youth: {
    title: "Youth Workforce",
    eyebrow: "Guided Tour · 4 of 7",
    subtitle: "Building skills, responsibility, and future readiness.",
    image: IMAGE.youth,
    meaning:
      "Youth Workforce gives young people meaningful outdoor work connected to food, land, responsibility, and leadership.",
    experience:
      "Youth learn safety, attendance, teamwork, task completion, communication, and entrepreneurship through real farm-based activity.",
    action: "Build confidence, document progress, and prepare for future opportunities.",
  },
  partner: {
    title: "Partner Pathway",
    eyebrow: "Guided Tour · 5 of 7",
    subtitle: "Aligning resources around community benefit.",
    image: IMAGE.partner,
    meaning:
      "Partners help build the infrastructure around the farm — health, education, workforce, food access, and sustainability.",
    experience:
      "Each partner contributes something meaningful: tools, education, demonstrations, screenings, services, funding, or expertise.",
    action: "Support the event, strengthen programming, and help build a replicable model.",
  },
  valueAdded: {
    title: "Value-Added Producer",
    eyebrow: "Guided Tour · 6 of 7",
    subtitle: "Turning local growing into products and enterprise.",
    image: IMAGE.valueAdded,
    meaning:
      "Value-added producers transform food, culture, creativity, and skill into products that strengthen the marketplace.",
    experience:
      "This pathway supports entrepreneurship, small business growth, local production, and sustainability.",
    action: "Create, package, sell, teach, and expand local economic opportunity.",
  },
  community: {
    title: "Community Impact",
    eyebrow: "Guided Tour · 7 of 7",
    subtitle: "A place-based destination for food, health, learning, and legacy.",
    image: IMAGE.community,
    meaning:
      "Bronson Family Farm is more than acreage. It is a community asset designed to improve food access and create generational opportunity.",
    experience:
      "The ecosystem connects guests, customers, growers, youth, partners, and producers into one shared place-based model.",
    action: "Carry the story forward, invest in the vision, and help grow what comes next.",
  },
};

export default function App() {
  const [active, setActive] = useState<PathwayKey>("guest");
  const current = pathways[active];
  const currentIndex = order.indexOf(active);
  const nextKey = order[(currentIndex + 1) % order.length];

  const goTo = (key: PathwayKey) => {
    setActive(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      className="min-h-screen bg-[#f4eddd] text-[#123d2a]"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-[#d8ceb7] bg-[#f4eddd]/95 px-6 py-4 backdrop-blur">
        <button
          onClick={() => goTo("guest")}
          className="text-2xl font-semibold tracking-tight"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Bronson Family Farm
        </button>

        <nav className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => goTo("marketplace")}
            className="rounded-full border border-[#cfc5ad] bg-white/75 px-5 py-2 text-sm font-medium shadow-sm"
          >
            Enter Marketplace
          </button>
          <button
            onClick={() => goTo("grower")}
            className="rounded-full border border-[#cfc5ad] bg-white/75 px-5 py-2 text-sm font-medium shadow-sm"
          >
            Meet the Grower Pathway
          </button>
          <button
            onClick={() => goTo("youth")}
            className="rounded-full border border-[#cfc5ad] bg-white/75 px-5 py-2 text-sm font-medium shadow-sm"
          >
            Youth Workforce
          </button>
        </nav>

        <select className="rounded-full border border-[#cfc5ad] bg-white/75 px-5 py-2 text-sm shadow-sm">
          <option>English</option>
          <option>Spanish</option>
          <option>Tagalog</option>
          <option>Italian</option>
          <option>Hebrew</option>
          <option>French</option>
        </select>
      </header>

      <section
        className="relative min-h-[78vh] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url("${current.image}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#173d27]/70 to-[#0e3a28]/90" />

        <div className="relative z-10 grid min-h-[78vh] items-center px-6 py-20 md:grid-cols-2">
          <div />
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#f4d85d]">
              {current.eyebrow}
            </p>

            <h1
              className="mb-6 text-5xl font-semibold leading-tight text-white md:text-7xl"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {current.title}
            </h1>

            <p
              className="max-w-2xl text-2xl font-semibold leading-snug text-[#fff3c4] md:text-3xl"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {current.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => goTo(nextKey)}
                className="rounded-full bg-[#f4d85d] px-6 py-3 font-bold text-[#123d2a] shadow-lg"
              >
                Continue Guided Tour
              </button>

              <button
                onClick={() => goTo("marketplace")}
                className="rounded-full border border-white/40 bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur"
              >
                Enter Marketplace
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 rounded-[2rem] bg-white/90 p-8 shadow-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8a6f21]">
            What this pathway means
          </p>
          <p
            className="text-2xl leading-relaxed text-[#123d2a]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {current.meaning}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white/90 p-8 shadow-lg">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8a6f21]">
              Experience
            </p>
            <p className="text-lg leading-relaxed">{current.experience}</p>
          </div>

          <div className="rounded-[2rem] bg-white/90 p-8 shadow-lg">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8a6f21]">
              Next step
            </p>
            <p className="text-lg leading-relaxed">{current.action}</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-[#123d2a] p-6 text-white shadow-xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#f4d85d]">
            Choose a pathway
          </p>

          <div className="grid gap-3 md:grid-cols-4">
            {order.map((key) => (
              <button
                key={key}
                onClick={() => goTo(key)}
                className={`rounded-2xl px-5 py-4 text-sm font-semibold transition ${
                  active === key
                    ? "bg-[#f4d85d] text-[#123d2a]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {pathways[key].title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-between gap-4">
          <button
            onClick={() =>
              goTo(order[(currentIndex - 1 + order.length) % order.length])
            }
            className="rounded-full border border-[#cfc5ad] bg-white/80 px-6 py-3 font-semibold shadow-sm"
          >
            Previous
          </button>

          <button
            onClick={() => goTo(nextKey)}
            className="rounded-full bg-[#123d2a] px-6 py-3 font-semibold text-white shadow-sm"
          >
            Next: {pathways[nextKey].title}
          </button>
        </div>
      </section>
    </main>
  );
}
