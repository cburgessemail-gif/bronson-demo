import React, { useMemo, useState } from "react";

const eventbriteUrl =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const images = {
  hero: "/GrowArea.jpg",
  guest: "/SAM_0220.JPG",
  customer: "/SAM_0249.JPG",
  marketplace: "/SAM_0255.JPG",
  grower: "/SAM_0281.JPG",
  youth: "/Samaeera2.jpg",
  partners: "/SAM_0301.JPG",
  value: "/culniary_edibleflowers.jpeg",
  donor: "/GrowArea2.jpg",
};

const pathways = [
  {
    id: "guest",
    label: "Guest",
    icon: "🏡",
    title: "Food. Wellness. Opportunity.",
    image: images.guest,
    supporting:
      "Bronson Family Farm reconnects communities to food security, education, outdoor engagement, and regional collaboration.",
  },
  {
    id: "customer",
    label: "Customer",
    icon: "🧺",
    title: "Healthy Communities Begin With Healthy Food.",
    image: images.customer,
    supporting:
      "Fresh food access, nutrition awareness, and community participation help strengthen long-term wellness and food security.",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: "🥬",
    title: "Local Food Creates Local Strength.",
    image: images.marketplace,
    supporting:
      "The marketplace transforms participation into food access, economic circulation, grower opportunity, and regional sustainability.",
  },
  {
    id: "grower",
    label: "Grower",
    icon: "🌱",
    title: "Unused Land Can Become Community Infrastructure.",
    image: images.grower,
    supporting:
      "The ecosystem helps growers access tools, knowledge, seedlings, demonstrations, collaboration, and pathways into local participation.",
  },
  {
    id: "youth",
    label: "Youth Workforce",
    icon: "💼",
    title: "Outdoor Work Becomes Confidence.",
    image: images.youth,
    supporting:
      "Young people develop leadership, responsibility, workforce readiness, and environmental stewardship through hands-on participation.",
  },
  {
    id: "partners",
    label: "Partners",
    icon: "🤝",
    title: "Collaboration Strengthens Communities.",
    image: images.partners,
    supporting:
      "Regional partnerships connect food security, wellness, workforce development, education, and long-term sustainability.",
  },
  {
    id: "value",
    label: "Value-Added",
    icon: "🏭",
    title: "Food Can Become Enterprise.",
    image: images.value,
    supporting:
      "Local products, prepared foods, packaging, and entrepreneurship help strengthen regional economic participation.",
  },
  {
    id: "donor",
    label: "Investment",
    icon: "💚",
    title: "An Investment In Food Security Is An Investment In Community Health.",
    image: images.donor,
    supporting:
      "Support helps expand food access, youth workforce development, wellness programming, growing infrastructure, and long-term regional resilience.",
  },
];

const partners = [
  "City of Youngstown",
  "New Vision Behavioral Health Services",
  "Nesco Resource",
  "Home Depot",
  "Central State University",
  "Petitti Garden Centers",
  "Elliott's Garden Center",
  "Parker Farms",
  "Youngstown Area Jewish Foundation",
  "Farm & Family Alliance Inc.",
  "Gates Drone Services",
];

type Pathway = (typeof pathways)[number];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ImageBlock({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-[320px] items-center justify-center rounded-[36px] bg-gradient-to-br from-[#173C2D] to-[#2F684D] text-white">
        <div className="p-8 text-center">
          <div className="mb-4 text-5xl">🌿</div>
          <p className="text-xl font-black">Image path needs review</p>
          <p className="mt-2 text-sm opacity-80">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full rounded-[36px] object-cover"
    />
  );
}

function ImpactPanel({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[36px] bg-white/10 p-10 backdrop-blur">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E7D7A3]">
        {kicker}
      </p>
      <h3 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
        {title}
      </h3>
      <p className="mt-6 text-xl leading-9 text-white/85">{body}</p>
    </div>
  );
}

export default function App() {
  const [activePathway, setActivePathway] = useState<Pathway>(pathways[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeIndex = pathways.findIndex((p) => p.id === activePathway.id);
  const nextPathway = pathways[(activeIndex + 1) % pathways.length];

  const progress = useMemo(() => {
    const index = pathways.findIndex((p) => p.id === activePathway.id);
    return Math.round(((index + 1) / pathways.length) * 100);
  }, [activePathway]);

  function choosePathway(pathway: Pathway) {
    setActivePathway(pathway);
    scrollToId("guided");
  }

  return (
    <main className="min-h-screen bg-[#F5F1E6] text-[#1C1C1C]">
      <header className="sticky top-0 z-50 border-b border-[#d9cfbb] bg-[#F5F1E6]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollToId("top")} className="text-left">
            <h1 className="text-xl font-black tracking-tight text-[#173C2D]">
              Bronson Family Farm
            </h1>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7b705f]">
              Community Food Ecosystem
            </p>
          </button>

          <nav className="hidden gap-3 lg:flex">
            <button onClick={() => scrollToId("guided")} className="rounded-full border border-[#d9cfbb] bg-white px-5 py-2 text-sm font-black text-[#173C2D] hover:bg-[#173C2D] hover:text-white">
              Guided Tour
            </button>
            <button onClick={() => choosePathway(pathways[2])} className="rounded-full border border-[#d9cfbb] bg-white px-5 py-2 text-sm font-black text-[#173C2D] hover:bg-[#173C2D] hover:text-white">
              Marketplace
            </button>
            <button onClick={() => choosePathway(pathways[4])} className="rounded-full border border-[#d9cfbb] bg-white px-5 py-2 text-sm font-black text-[#173C2D] hover:bg-[#173C2D] hover:text-white">
              Youth Workforce
            </button>
            <button onClick={() => choosePathway(pathways[7])} className="rounded-full bg-[#173C2D] px-5 py-2 text-sm font-black text-white hover:bg-[#2b5d47]">
              Donation Impact
            </button>
          </nav>

          <button className="text-3xl lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#d9cfbb] px-6 py-4 lg:hidden">
            <div className="grid gap-2">
              {pathways.map((pathway) => (
                <button
                  key={pathway.id}
                  onClick={() => {
                    setMenuOpen(false);
                    choosePathway(pathway);
                  }}
                  className="rounded-2xl bg-white px-4 py-3 text-left font-black text-[#173C2D]"
                >
                  {pathway.icon} {pathway.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageBlock src={images.hero} alt="Bronson Family Farm" />
          <div className="absolute inset-0 bg-black/58" />
        </div>

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-5xl text-white">
            <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur">
              Growers Supply Market · May 16, 2026 · By Invitation Only
            </div>

            <h1 className="max-w-5xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
              Food Security Begins Locally.
            </h1>

            <p className="mt-8 max-w-3xl text-2xl leading-10 text-white/90">
              Bronson Family Farm is building a regional ecosystem for food
              security, wellness, workforce development, entrepreneurship, and
              community resilience throughout Youngstown and Mahoning County.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => scrollToId("guided")} className="rounded-full bg-[#E7D7A3] px-7 py-4 text-lg font-black text-[#173C2D] transition hover:bg-white">
                Begin Guided Experience
              </button>

              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-lg font-black text-white backdrop-blur transition hover:bg-white/20">
                Register for Growers Supply Market
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="guided" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#7b705f]">
            Guided Experience
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight text-[#173C2D] md:text-6xl">
            Every Pathway Strengthens The Ecosystem.
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#555]">
            Explore how food security, wellness, workforce development,
            entrepreneurship, and community collaboration connect together
            through Bronson Family Farm.
          </p>
        </div>

        <div className="mb-10">
          <div className="mb-3 flex justify-between text-sm font-black text-[#173C2D]">
            <span>Guided Tour Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-[#ddd2bd]">
            <div className="h-full rounded-full bg-[#173C2D] transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pathways.map((pathway) => (
            <button
              key={pathway.id}
              onClick={() => choosePathway(pathway)}
              className={cx(
                "rounded-[30px] p-5 text-left transition-all",
                activePathway.id === pathway.id
                  ? "bg-[#173C2D] text-white shadow-2xl"
                  : "bg-white text-[#173C2D] shadow-lg hover:shadow-xl"
              )}
            >
              <div className="mb-5 text-3xl">{pathway.icon}</div>
              <p className="text-sm font-black uppercase tracking-[0.2em] opacity-70">
                {pathway.label}
              </p>
              <p className="mt-3 text-2xl font-black leading-tight">
                {pathway.title}
              </p>
            </button>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="h-[620px] overflow-hidden rounded-[40px] shadow-2xl">
            <ImageBlock src={activePathway.image} alt={activePathway.label} />
          </div>

          <div className="flex flex-col justify-center rounded-[40px] bg-white p-12 shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#7b705f]">
              {activePathway.label}
            </p>

            <h3 className="mt-5 text-5xl font-black leading-[1] tracking-tight text-[#173C2D] md:text-6xl">
              {activePathway.title}
            </h3>

            <p className="mt-8 text-2xl leading-10 text-[#555]">
              {activePathway.supporting}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-[#F5F1E6] p-6">
                <p className="text-lg font-black text-[#173C2D]">Food Security</p>
                <p className="mt-3 leading-7 text-[#666]">
                  Strengthening local access to healthy food, growers, education, and participation.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#F5F1E6] p-6">
                <p className="text-lg font-black text-[#173C2D]">Community Wellness</p>
                <p className="mt-3 leading-7 text-[#666]">
                  Connecting wellness, workforce, collaboration, outdoor engagement, and opportunity.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => setActivePathway(nextPathway)} className="rounded-full bg-[#173C2D] px-7 py-4 font-black text-white transition hover:bg-[#2b5d47]">
                Continue to {nextPathway.label}
              </button>

              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[#173C2D]/20 bg-[#F5F1E6] px-7 py-4 font-black text-[#173C2D]">
                Register for Event
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173C2D] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            <ImpactPanel kicker="Food Security" title="Food Access Is Community Infrastructure." body="Bronson Family Farm is helping strengthen long-term food security through agriculture, education, wellness, workforce development, and community participation." />
            <ImpactPanel kicker="Healthcare" title="Food Security Is Preventive Healthcare." body="Healthy food access, wellness, outdoor engagement, workforce opportunity, and community stability are interconnected." />
            <ImpactPanel kicker="Transformation" title="Transformation Begins With Vision." body="Bronson Family Farm is transforming overlooked land near Lansdowne Airport into a destination for food security, wellness, entrepreneurship, education, and agritourism." />
          </div>
        </div>
      </section>

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
              <div key={partner} className="rounded-[30px] bg-white p-7 text-xl font-black text-[#173C2D] shadow-lg">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#10281d] via-[#173C2D] to-[#2a241b] px-6 py-28 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E7D7A3]">
            Final Message
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
            This Is More Than A Farm.
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-2xl leading-10 text-white/85">
            Bronson Family Farm is building community infrastructure designed to
            grow food, opportunity, wellness, sustainability, and future
            generations throughout the Mahoning Valley.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button onClick={() => choosePathway(pathways[7])} className="rounded-full bg-[#E7D7A3] px-8 py-4 text-lg font-black text-[#173C2D] transition hover:bg-white">
              Support Food Security
            </button>

            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-black text-white backdrop-blur transition hover:bg-white/20">
              Register For Event
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#173C2D] px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-3xl font-black">Bronson Family Farm</h3>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Building a regional ecosystem for food security, wellness, workforce
            development, entrepreneurship, and community resilience.
          </p>
        </div>
      </footer>
    </main>
  );
}
