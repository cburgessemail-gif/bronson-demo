import React, { useState } from "react";

const IMAGE = {
  hero: "/GrowArea.jpg",
  guest: "/SAM_0220.JPG",
  marketplace: "/SAM_0221.JPG",
  grower: "/SAM_0222.JPG",
  youth: "/SAM_0223.JPG",
  partner: "/SAM_0225.JPG",
  valueAdded: "/SAM_0226.JPG",
  community: "/SAM_0229.JPG",
};

type PathwayKey =
  | "guest"
  | "marketplace"
  | "grower"
  | "youth"
  | "partner"
  | "valueAdded"
  | "community";

const pathways: Record<
  PathwayKey,
  {
    title: string;
    subtitle: string;
    image: string;
    tour: string;
    primary: string;
    cards: string[];
  }
> = {
  guest: {
    title: "Guest Pathway",
    subtitle: "Walk in as a visitor. Leave understanding the vision.",
    image: IMAGE.guest,
    tour: "GUIDED TOUR · 1 OF 8",
    primary:
      "Guests experience the farm as a living place where land, food, family, workforce development, and community renewal come together.",
    cards: [
      "Learn why Bronson Family Farm exists.",
      "See how the land connects food, health, and opportunity.",
      "Understand the Growers Supply Market experience.",
      "Discover how visitors can become customers, volunteers, growers, or partners.",
    ],
  },
  marketplace: {
    title: "Marketplace",
    subtitle: "Fresh food, seedlings, tools, and local purchasing power.",
    image: IMAGE.marketplace,
    tour: "GUIDED TOUR · 2 OF 8",
    primary:
      "The Marketplace connects interest to action by helping people purchase produce, seedlings, supplies, and farm-based products that support local growers.",
    cards: [
      "Shop fresh produce and seasonal farm goods.",
      "Purchase seedlings and Bubble Babies™.",
      "Support local growers and value-added producers.",
      "Build repeat healthy food choices through access and education.",
    ],
  },
  grower: {
    title: "Grower Pathway",
    subtitle: "Connect growers to tools, knowledge, markets, and opportunity.",
    image: IMAGE.grower,
    tour: "GUIDED TOUR · 3 OF 8",
    primary:
      "Growers are entrepreneurs contributing to a larger ecosystem. This pathway supports people who want to grow successfully and participate in the regional food economy.",
    cards: [
      "Access growing knowledge and seasonal support.",
      "Connect to marketplace opportunities.",
      "Share skills, tools, and lessons learned.",
      "Strengthen a community-centered food system.",
    ],
  },
  youth: {
    title: "Youth Workforce",
    subtitle: "Build skills, responsibility, confidence, and future readiness.",
    image: IMAGE.youth,
    tour: "GUIDED TOUR · 4 OF 8",
    primary:
      "Youth Workforce introduces young people to meaningful outdoor work, responsibility, teamwork, food systems, entrepreneurship, and leadership.",
    cards: [
      "Participate in structured farm-based learning.",
      "Practice attendance, safety, teamwork, and task completion.",
      "Develop life skills through real work.",
      "Connect parents, supervisors, and youth progress through the ecosystem.",
    ],
  },
  partner: {
    title: "Partner Pathway",
    subtitle: "Align resources, people, and institutions around community benefit.",
    image: IMAGE.partner,
    tour: "GUIDED TOUR · 5 OF 8",
    primary:
      "Partners help build the infrastructure around the farm — health, education, workforce, food access, community development, and sustainability.",
    cards: [
      "Support community-centered programming.",
      "Provide tools, education, demonstrations, or services.",
      "Strengthen food access and health outcomes.",
      "Help create a model that can be replicated.",
    ],
  },
  valueAdded: {
    title: "Value-Added Producer",
    subtitle: "Turn local growing into products, enterprise, and sustainability.",
    image: IMAGE.valueAdded,
    tour: "GUIDED TOUR · 6 OF 8",
    primary:
      "Value-added producers are entrepreneurs who transform ingredients, ideas, and cultural knowledge into products that strengthen the marketplace.",
    cards: [
      "Create products from locally grown food.",
      "Participate in market opportunities.",
      "Build small business capacity.",
      "Support sustainability through local production.",
    ],
  },
  community: {
    title: "Community Impact",
    subtitle: "A place-based destination for food, health, learning, and legacy.",
    image: IMAGE.community,
    tour: "GUIDED TOUR · 7 OF 8",
    primary:
      "Bronson Family Farm is more than acreage. It is a place-based ecosystem designed to improve food access, grow opportunity, and create a generational community asset.",
    cards: [
      "Support healthier families through healthy food.",
      "Create workforce and entrepreneurship pathways.",
      "Activate land for community benefit.",
      "Build a replicable model rooted in Youngstown.",
    ],
  },
};

export default function App() {
  const [active, setActive] = useState<PathwayKey>("guest");
  const current = pathways[active];

  const goTo = (key: PathwayKey) => {
    setActive(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#f4eddd] text-[#123d2a]">
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-[#d8ceb7] bg-[#f4eddd]/95 px-6 py-4 backdrop-blur">
        <button
          onClick={() => goTo("guest")}
          className="text-xl font-bold tracking-tight"
        >
          Bronson Family Farm
        </button>

        <nav className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-[#cfc5ad] bg-white/70 px-5 py-2" onClick={() => goTo("marketplace")}>
            Enter Marketplace
          </button>
          <button className="rounded-full border border-[#cfc5ad] bg-white/70 px-5 py-2" onClick={() => goTo("grower")}>
            Meet the Grower Pathway
          </button>
          <button className="rounded-full border border-[#cfc5ad] bg-white/70 px-5 py-2" onClick={() => goTo("youth")}>
            Youth Workforce
          </button>
        </nav>

        <select className="rounded-full border border-[#cfc5ad] bg-white/70 px-5 py-2">
          <option>English</option>
          <option>Spanish</option>
          <option>Tagalog</option>
          <option>Italian</option>
          <option>Hebrew</option>
          <option>French</option>
        </select>
      </header>

      <section
        className="relative min-h-[70vh] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url("${current.image}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-[#173d27]/70 to-[#0e3a28]/90" />

        <div className="relative z-10 grid min-h-[70vh] items-center px-6 py-20 md:grid-cols-2">
          <div />
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#f4d85d]">
              {current.tour}
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              {current.title}
            </h1>
            <p className="text-3xl font-semibold leading-snug text-[#fff3c4]">
              {current.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-[2rem] bg-white/85 p-8 text-xl shadow-xl">
          {current.primary}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {current.cards.map((card) => (
            <div key={card} className="rounded-[2rem] bg-white/85 p-8 text-lg shadow-lg">
              {card}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <button onClick={() => goTo("guest")} className="rounded-2xl bg-[#123d2a] px-5 py-4 text-white">
            Guest
          </button>
          <button onClick={() => goTo("marketplace")} className="rounded-2xl bg-[#123d2a] px-5 py-4 text-white">
            Marketplace
          </button>
          <button onClick={() => goTo("grower")} className="rounded-2xl bg-[#123d2a] px-5 py-4 text-white">
            Grower
          </button>
          <button onClick={() => goTo("youth")} className="rounded-2xl bg-[#123d2a] px-5 py-4 text-white">
            Youth Workforce
          </button>
          <button onClick={() => goTo("partner")} className="rounded-2xl bg-[#123d2a] px-5 py-4 text-white">
            Partners
          </button>
          <button onClick={() => goTo("valueAdded")} className="rounded-2xl bg-[#123d2a] px-5 py-4 text-white">
            Value-Added
          </button>
          <button onClick={() => goTo("community")} className="rounded-2xl bg-[#123d2a] px-5 py-4 text-white">
            Community Impact
          </button>
        </div>
      </section>
    </main>
  );
}
