import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Sprout,
  ShoppingBasket,
  HeartPulse,
  BriefcaseBusiness,
  Handshake,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Leaf,
  Factory,
  Home,
  Menu,
  X,
} from "lucide-react";

/*
  Bronson Family Farm Demo
  Stable single-file App.tsx

  Image rules:
  - Place images in /public/images
  - Keep filenames exactly as written below, or change only the values in IMAGE_LIBRARY
  - Do not move images into src/assets
  - Avoid duplicate images across pathway cards
*/

const IMAGE_LIBRARY = {
  hero: "/images/GrowArea.jpg",
  guest: "/images/FarmEntrance.jpg",
  customer: "/images/ProduceTable.jpg",
  marketplace: "/images/MarketplaceProduce.jpg",
  grower: "/images/Seedlings.jpg",
  youth: "/images/YouthWorkforce.jpg",
  partners: "/images/CommunityPartners.jpg",
  valueAdded: "/images/ValueAddedProducer.jpg",
  impact: "/images/FarmCommunity.jpg",
};

const eventbriteUrl = "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";
const grownByUrl = "https://grownby.com/farms/bronson-family-farm/shop";
const websiteUrl = "https://www.bronsonfamilyfarm.com/";

const partners = [
  "City of Youngstown",
  "Farm & Family Alliance Inc.",
  "Parker Farms",
  "New Vision Behavioral Health Services",
  "Nesco Resource",
  "Home Depot",
  "Central State University",
  "Petitti Garden Centers",
  "Elliott's Garden Center",
  "Youngstown Area Jewish Foundation",
  "Gates Drone Services",
];

const pathways = [
  {
    id: "guest",
    title: "Guest Pathway",
    shortTitle: "Guest",
    icon: Home,
    image: IMAGE_LIBRARY.guest,
    headline: "Experience the vision and purpose of Bronson Family Farm.",
    body:
      "Guests step into the story of the farm, the land, the community, and the purpose behind building a place-based food ecosystem in Youngstown.",
    actions: ["Explore the farm story", "Understand the vision", "Register for the event"],
  },
  {
    id: "customer",
    title: "Customer Pathway",
    shortTitle: "Customer",
    icon: ShoppingBasket,
    image: IMAGE_LIBRARY.customer,
    headline: "Access fresh food, healthy choices, and community connection.",
    body:
      "Customers discover produce, seedlings, Bubble Babies™, nutrition-centered choices, and the connection between food access and family wellness.",
    actions: ["Shop fresh food", "Learn what is growing", "Return for seasonal updates"],
  },
  {
    id: "marketplace",
    title: "Marketplace Pathway",
    shortTitle: "Marketplace",
    icon: ShoppingBasket,
    image: IMAGE_LIBRARY.marketplace,
    headline: "Supporting growers, entrepreneurs, and community food access.",
    body:
      "The marketplace connects people, produce, tools, demonstrations, and growers into a regional food access and economic opportunity model.",
    actions: ["View marketplace model", "Connect to GrownBy", "Support local growers"],
  },
  {
    id: "grower",
    title: "Grower Pathway",
    shortTitle: "Grower",
    icon: Sprout,
    image: IMAGE_LIBRARY.grower,
    headline: "Providing tools, knowledge, and opportunity for growers.",
    body:
      "Growers access education, supplies, demonstrations, peer learning, and pathways into a shared ecosystem that helps small producers participate and succeed.",
    actions: ["Learn growing basics", "Access tools and knowledge", "Join the ecosystem"],
  },
  {
    id: "youth",
    title: "Youth Workforce Pathway",
    shortTitle: "Youth Workforce",
    icon: BriefcaseBusiness,
    image: IMAGE_LIBRARY.youth,
    headline: "Building leadership, responsibility, and workforce readiness.",
    body:
      "Youth gain hands-on outdoor experience, responsibility, teamwork, agricultural exposure, and real-world readiness connected to future employment pathways.",
    actions: ["Build skills", "Track growth", "Prepare for work"],
  },
  {
    id: "partners",
    title: "Partner Pathway",
    shortTitle: "Partners",
    icon: Handshake,
    image: IMAGE_LIBRARY.partners,
    headline: "Building collaborative systems for long-term community impact.",
    body:
      "Partners align public, private, nonprofit, workforce, wellness, education, and business resources around food access and regional opportunity.",
    actions: ["Collaborate", "Support the event", "Invest in community infrastructure"],
  },
  {
    id: "value-added",
    title: "Value-Added Producer Pathway",
    shortTitle: "Value-Added",
    icon: Factory,
    image: IMAGE_LIBRARY.valueAdded,
    headline: "Transforming agricultural products into sustainable economic opportunity.",
    body:
      "Value-added producers turn food, crops, ideas, packaging, preparation, and entrepreneurship into expanded market and income opportunities.",
    actions: ["Create products", "Package value", "Grow enterprise"],
  },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ImageBlock({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cx(
          "flex min-h-[220px] items-center justify-center rounded-3xl bg-gradient-to-br from-stone-200 via-amber-100 to-emerald-100 p-6 text-center text-stone-700",
          className
        )}
      >
        <div>
          <Leaf className="mx-auto mb-3 h-10 w-10" />
          <p className="font-semibold">Bronson Family Farm</p>
          <p className="text-sm">Add image at: {src}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={cx("h-full w-full rounded-3xl object-cover", className)}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex rounded-full border border-emerald-800/20 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-sm backdrop-blur">
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePathway, setActivePathway] = useState(pathways[0]);

  const pathwayNav = useMemo(
    () => pathways.map((p) => ({ id: p.id, title: p.shortTitle })),
    []
  );

  return (
    <main className="min-h-screen bg-[#f7f1e5] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f7f1e5]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => scrollToId("top")} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-900 text-white shadow-md">
              <Sprout className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-900">Bronson Family Farm</p>
              <p className="text-xs text-stone-600">Developed by Bronson Family Farm</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {["pathways", "event", "impact", "partners"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-white hover:text-emerald-900"
              >
                {id === "pathways" ? "Pathways" : id === "event" ? "Event" : id === "impact" ? "Impact" : "Partners"}
              </button>
            ))}
            <a
              href={eventbriteUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-900 px-5 py-2 text-sm font-bold text-white shadow-md hover:bg-emerald-800"
            >
              Register
            </a>
          </nav>

          <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-stone-200 bg-[#f7f1e5] px-5 py-4 lg:hidden">
            <div className="grid gap-2">
              {["pathways", "event", "impact", "partners"].map((id) => (
                <button
                  key={id}
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToId(id);
                  }}
                  className="rounded-xl bg-white px-4 py-3 text-left font-semibold text-stone-800"
                >
                  {id === "pathways" ? "Pathways" : id === "event" ? "Event" : id === "impact" ? "Impact" : "Partners"}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageBlock src={IMAGE_LIBRARY.hero} alt="Bronson Family Farm aerial growing area" className="rounded-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        </div>

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl text-white">
            <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              Growers Supply Market · May 16, 2026 · By Invitation Only
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Choose Your Pathway Into the Ecosystem
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
              Bronson Family Farm is building a community-centered growers supply market and ecosystem designed to strengthen food access, workforce development, wellness, sustainability, entrepreneurship, and regional economic opportunity throughout Youngstown and the Mahoning Valley.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollToId("pathways")} className="rounded-full bg-white px-6 py-3 font-bold text-emerald-950 shadow-lg hover:bg-amber-100">
                Explore Pathways
              </button>
              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-700 px-6 py-3 font-bold text-white shadow-lg hover:bg-emerald-600">
                Register on Eventbrite
              </a>
              <a href={grownByUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/50 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur hover:bg-white/20">
                Visit Marketplace
              </a>
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-100">
              Select a pathway below to explore the Bronson Family Farm ecosystem.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-10 rounded-[2rem] border border-white/30 bg-white/15 p-5 text-white shadow-2xl backdrop-blur lg:mt-0">
            <h2 className="text-2xl font-black">Experience Something Different</h2>
            <p className="mt-3 text-white/90">
              Step into a living ecosystem where agriculture, education, wellness, entrepreneurship, and community collaboration come together to grow opportunity for future generations.
            </p>
            <div className="mt-6 grid gap-3">
              {pathwayNav.slice(0, 5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const selected = pathways.find((p) => p.id === item.id);
                    if (selected) setActivePathway(selected);
                    scrollToId("pathways");
                  }}
                  className="group flex items-center justify-between rounded-2xl bg-white/15 px-4 py-3 text-left font-bold hover:bg-white/25"
                >
                  {item.title}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-5 py-20">
        <SectionLabel>Guided ecosystem experience</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Every person has a role in the ecosystem.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The demo is organized by pathways so each visitor can immediately understand where they belong, what they can do, and how the farm connects food, workforce, wellness, entrepreneurship, and community infrastructure.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pathways.map((pathway) => {
                const Icon = pathway.icon;
                return (
                  <button
                    key={pathway.id}
                    onClick={() => setActivePathway(pathway)}
                    className={cx(
                      "rounded-3xl border p-4 text-left transition",
                      activePathway.id === pathway.id
                        ? "border-emerald-900 bg-emerald-900 text-white shadow-xl"
                        : "border-stone-200 bg-white text-stone-800 shadow-sm hover:border-emerald-800/40 hover:shadow-md"
                    )}
                  >
                    <Icon className="mb-3 h-6 w-6" />
                    <p className="font-black">{pathway.shortTitle}</p>
                    <p className={cx("mt-1 text-sm", activePathway.id === pathway.id ? "text-white/80" : "text-stone-600")}>{pathway.headline}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.article key={activePathway.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="h-[320px]">
              <ImageBlock src={activePathway.image} alt={activePathway.title} />
            </div>
            <div className="p-7">
              <h3 className="text-3xl font-black text-emerald-950">{activePathway.title}</h3>
              <p className="mt-3 text-xl font-bold text-stone-800">{activePathway.headline}</p>
              <p className="mt-4 leading-7 text-stone-700">{activePathway.body}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {activePathway.actions.map((action) => (
                  <div key={action} className="rounded-2xl bg-amber-50 p-4 text-sm font-bold text-stone-800">
                    {action}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section id="event" className="bg-emerald-950 px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionLabel>Growers Supply Market</SectionLabel>
            <h2 className="text-4xl font-black md:text-5xl">Saturday, May 16, 2026</h2>
            <div className="mt-6 grid gap-4 text-lg">
              <p className="flex items-center gap-3"><CalendarDays className="h-6 w-6 text-amber-200" /> 9:00 AM – 2:00 PM</p>
              <p className="flex items-center gap-3"><MapPin className="h-6 w-6 text-amber-200" /> Bronson Family Farm · Youngstown, Ohio</p>
              <p className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-amber-200" /> By Invitation Only · Eventbrite registration required</p>
            </div>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-amber-200 px-7 py-3 font-black text-emerald-950 shadow-lg hover:bg-white">
              Register Through Eventbrite
            </a>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-7 shadow-xl ring-1 ring-white/15">
            <h3 className="text-2xl font-black">The event brings the ecosystem to life.</h3>
            <p className="mt-4 leading-8 text-white/85">
              The Growers Supply Market brings together growers, educators, community organizations, businesses, families, and workforce partners to explore tools, resources, demonstrations, and opportunities that strengthen local food systems and community sustainability.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Food access", "Grower education", "Youth workforce", "Health and wellness", "Entrepreneurship", "Community collaboration"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="h-[460px]">
            <ImageBlock src={IMAGE_LIBRARY.impact} alt="Community impact at Bronson Family Farm" />
          </div>
          <div>
            <SectionLabel>Community impact</SectionLabel>
            <h2 className="text-4xl font-black md:text-5xl">Building more than a farm.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Bronson Family Farm is designed as a place-based ecosystem that connects food access, workforce development, entrepreneurship, youth engagement, wellness, sustainability, and community revitalization through collaborative partnerships and shared opportunity.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ImpactCard icon={BriefcaseBusiness} title="Workforce pathways" body="Creating job readiness and employment pathways with partners including Nesco Resource." />
              <ImpactCard icon={HeartPulse} title="Wellness connection" body="Connecting food, outdoor engagement, mental wellness, and community stability with partners including New Vision Behavioral Health." />
              <ImpactCard icon={Sprout} title="Food infrastructure" body="Strengthening local growing, fresh food access, and grower participation." />
              <ImpactCard icon={Users} title="Community belonging" body="Helping families, youth, growers, and partners see their role in a shared ecosystem." />
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Community & ecosystem collaborators</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">Collaboration is the infrastructure.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Bronson Family Farm is building collaborative relationships across public, nonprofit, educational, workforce, wellness, and private sectors to strengthen food access, nutrition education, workforce development, environmental stewardship, and regional economic opportunity.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner} className="rounded-3xl border border-stone-200 bg-[#f7f1e5] p-5 font-black text-emerald-950 shadow-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-stone-950 via-emerald-950 to-stone-900 px-5 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>Why this matters</SectionLabel>
          <h2 className="text-4xl font-black md:text-6xl">This is community infrastructure.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-white/85">
            Communities across America are facing rising food costs, health disparities, economic uncertainty, and increasing barriers to fresh food access. Bronson Family Farm was created to help communities reconnect with food, land, workforce development, wellness, education, entrepreneurship, and one another.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Grow food", "Grow opportunity", "Grow future generations"].map((item) => (
              <div key={item} className="rounded-3xl bg-white/10 p-6 text-xl font-black shadow-lg ring-1 ring-white/15">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="rounded-full bg-amber-200 px-7 py-3 font-black text-emerald-950 hover:bg-white">
              Register for Growers Supply Market
            </a>
            <a href={websiteUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-7 py-3 font-black text-white hover:bg-white/10">
              Visit BronsonFamilyFarm.com
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#f7f1e5] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-emerald-950">Bronson Family Farm · Youngstown, Ohio</p>
          <p>Developed by Bronson Family Farm · Farm & Family Alliance Inc. ecosystem partner</p>
        </div>
      </footer>
    </main>
  );
}

function ImpactCard({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-stone-200">
      <Icon className="mb-4 h-8 w-8 text-emerald-900" />
      <h3 className="text-xl font-black text-emerald-950">{title}</h3>
      <p className="mt-2 leading-6 text-stone-700">{body}</p>
    </div>
  );
}
