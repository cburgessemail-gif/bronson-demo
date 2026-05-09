import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Factory,
  HandHeart,
  Handshake,
  HeartPulse,
  Home,
  Leaf,
  MapPin,
  Menu,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Users,
  X,
} from "lucide-react";

/*
  BRONSON FAMILY FARM — FINAL GUIDED DEMO
  Purpose: complete polished demo for sharing with funders, donors, partners, and community leaders.

  IMAGE SETUP
  Put these images in: public/images/

  Required filenames:
  GrowArea.jpg
  FarmEntrance.jpg
  FreshProduce.jpg
  MarketplaceProduce.jpg
  Seedlings.jpg
  YouthWorkforce.jpg
  CommunityPartners.jpg
  ValueAddedProducer.jpg
  FarmCommunity.jpg

  If an image is missing, the app will show a clean branded fallback instead of breaking.
*/

const eventbriteUrl = "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";
const grownByUrl = "https://grownby.com/farms/bronson-family-farm/shop";
const websiteUrl = "https://www.bronsonfamilyfarm.com/";

const images = {
  hero: "/images/GrowArea.jpg",
  guest: "/images/FarmEntrance.jpg",
  customer: "/images/FreshProduce.jpg",
  marketplace: "/images/MarketplaceProduce.jpg",
  grower: "/images/Seedlings.jpg",
  youth: "/images/YouthWorkforce.jpg",
  partners: "/images/CommunityPartners.jpg",
  valueAdded: "/images/ValueAddedProducer.jpg",
  donor: "/images/FarmCommunity.jpg",
};

const pathways = [
  {
    id: "guest",
    label: "Guest",
    title: "Experience the Vision",
    icon: Home,
    image: images.guest,
    statement: "The farm reconnects people to food, land, purpose, and community.",
    story:
      "Visitors enter the farm story and see why this work matters for Youngstown: food access, land restoration, education, wellness, and long-term community opportunity.",
    steps: ["Understand the mission", "See the land", "Choose a role"],
    cta: "Begin with the story",
  },
  {
    id: "customer",
    label: "Customer",
    title: "Fresh Food & Community Health",
    icon: ShoppingBasket,
    image: images.customer,
    statement: "Healthy food access becomes a practical pathway to community wellness.",
    story:
      "Customers connect to fresh produce, seedlings, nutrition awareness, seasonal choices, and a marketplace designed to help families return again and again.",
    steps: ["Find fresh food", "Learn what is growing", "Return seasonally"],
    cta: "Explore fresh food",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Interest Becomes Purchasing Power",
    icon: ShoppingBasket,
    image: images.marketplace,
    statement: "The marketplace turns community interest into real transactions.",
    story:
      "The Growers Supply Market connects produce, tools, seedlings, demonstrations, growers, and local entrepreneurship into a regional food access and economic opportunity model.",
    steps: ["Support growers", "Buy local", "Circulate dollars"],
    cta: "Enter the marketplace",
  },
  {
    id: "grower",
    label: "Grower",
    title: "Tools, Knowledge & Growing",
    icon: Sprout,
    image: images.grower,
    statement: "Growers need tools, knowledge, encouragement, and a place to participate.",
    story:
      "The grower pathway helps small farms, home gardeners, and emerging producers access demonstrations, seedlings, supplies, shared knowledge, and practical support.",
    steps: ["Learn", "Grow", "Participate"],
    cta: "Meet the grower pathway",
  },
  {
    id: "youth",
    label: "Youth Workforce",
    title: "Building Future Leaders",
    icon: BriefcaseBusiness,
    image: images.youth,
    statement: "Outdoor work becomes confidence, responsibility, and readiness.",
    story:
      "Youth learn responsibility, teamwork, leadership, environmental stewardship, entrepreneurship, and job readiness through hands-on farm-based experiences and employment pathways.",
    steps: ["Show up prepared", "Build skills", "Grow leadership"],
    cta: "See youth workforce",
  },
  {
    id: "partners",
    label: "Partners",
    title: "Collaborative Infrastructure",
    icon: Handshake,
    image: images.partners,
    statement: "No single organization can build the future alone.",
    story:
      "The partner pathway connects public, private, nonprofit, education, workforce, wellness, and community collaborators around food access and regional revitalization.",
    steps: ["Align resources", "Strengthen impact", "Scale together"],
    cta: "View partner role",
  },
  {
    id: "valueAdded",
    label: "Value-Added",
    title: "From Production to Enterprise",
    icon: Factory,
    image: images.valueAdded,
    statement: "Food can become product, brand, income, and enterprise.",
    story:
      "Value-added producers expand local opportunity through prepared foods, packaging, canning, product development, entrepreneurship, and market participation.",
    steps: ["Create products", "Package value", "Build enterprise"],
    cta: "Explore enterprise",
  },
  {
    id: "donor",
    label: "Donor / Sponsor",
    title: "Invest in Community Health",
    icon: HandHeart,
    image: images.donor,
    statement: "A donation supports food access, wellness, workforce, and community resilience.",
    story:
      "Donors help move the farm from vision to operating community infrastructure by supporting water access, growing supplies, safety, youth workforce, marketplace readiness, and health-centered programming.",
    steps: ["Fund the infrastructure", "Support youth", "Strengthen wellness"],
    cta: "See donation impact",
  },
];

const collaborators = [
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

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ImageBlock({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cx(
          "flex h-full min-h-[280px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#173C2D] via-[#25533E] to-[#E7D7A3] p-8 text-center text-white",
          className
        )}
      >
        <div>
          <Leaf className="mx-auto mb-4 h-10 w-10" />
          <p className="text-xl font-bold">Bronson Family Farm</p>
          <p className="mt-2 text-sm opacity-80">Image needed: {src}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={cx("h-full w-full rounded-[2rem] object-cover", className)}
    />
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex rounded-full border border-[#173C2D]/15 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#173C2D] shadow-sm">
      {children}
    </div>
  );
}

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full bg-[#173C2D] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#24543F]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(pathways[0]);

  const progress = useMemo(() => {
    const index = pathways.findIndex((p) => p.id === active.id);
    return Math.round(((index + 1) / pathways.length) * 100);
  }, [active]);

  const activeIndex = pathways.findIndex((p) => p.id === active.id);
  const nextPathway = pathways[(activeIndex + 1) % pathways.length];

  function choosePathway(pathway: (typeof pathways)[number]) {
    setActive(pathway);
    scrollToId("guided-tour");
  }

  return (
    <main className="min-h-screen bg-[#F5F1E6] text-[#1E1E1A]" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" }}>
      <header className="sticky top-0 z-50 border-b border-[#D9CFBB] bg-[#F5F1E6]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => scrollToId("top")} className="text-left">
            <p className="text-lg font-black tracking-tight text-[#173C2D]">Bronson Family Farm</p>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B6254]">Community Food Ecosystem</p>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            <button onClick={() => scrollToId("guided-tour")} className="rounded-full border border-[#D9CFBB] bg-white px-4 py-2 text-sm font-bold text-[#173C2D] hover:bg-[#173C2D] hover:text-white">
              Guided Tour
            </button>
            <button onClick={() => choosePathway(pathways[2])} className="rounded-full border border-[#D9CFBB] bg-white px-4 py-2 text-sm font-bold text-[#173C2D] hover:bg-[#173C2D] hover:text-white">
              Marketplace
            </button>
            <button onClick={() => choosePathway(pathways[4])} className="rounded-full border border-[#D9CFBB] bg-white px-4 py-2 text-sm font-bold text-[#173C2D] hover:bg-[#173C2D] hover:text-white">
              Youth Workforce
            </button>
            <button onClick={() => choosePathway(pathways[7])} className="rounded-full border border-[#D9CFBB] bg-white px-4 py-2 text-sm font-bold text-[#173C2D] hover:bg-[#173C2D] hover:text-white">
              Donate / Sponsor
            </button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#173C2D] px-5 py-2 text-sm font-black text-white shadow-md hover:bg-[#24543F]">
              Eventbrite
            </a>
          </nav>

          <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#D9CFBB] px-5 py-4 lg:hidden">
            <div className="grid gap-2">
              {["guided-tour", "event", "impact", "partners"].map((id) => (
                <button key={id} onClick={() => { setMenuOpen(false); scrollToId(id); }} className="rounded-2xl bg-white px-4 py-3 text-left font-bold text-[#173C2D]">
                  {id === "guided-tour" ? "Guided Tour" : id === "event" ? "Event" : id === "impact" ? "Impact" : "Partners"}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageBlock src={images.hero} alt="Bronson Family Farm growing area" className="rounded-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/52 to-black/20" />
        </div>

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-white">
            <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
              Growers Supply Market · May 16, 2026 · By Invitation Only
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
              A guided farm ecosystem for food, wellness, and opportunity.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/90">
              Bronson Family Farm is building a community-centered growers supply market that connects food access, workforce development, wellness, entrepreneurship, and regional revitalization in Youngstown.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton onClick={() => scrollToId("guided-tour")}>Start Guided Tour</PrimaryButton>
              <button onClick={() => choosePathway(pathways[7])} className="inline-flex items-center gap-2 rounded-full bg-[#E7D7A3] px-6 py-3 text-sm font-extrabold text-[#173C2D] shadow-lg transition hover:bg-white">
                Donation Impact
                <HandHeart className="h-4 w-4" />
              </button>
              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/20">
                Register for Event
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.55 }} className="rounded-[2rem] border border-white/25 bg-white/14 p-6 text-white shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E7D7A3]">What makes this guided?</p>
            <h2 className="mt-3 text-3xl font-black">The demo leads visitors through a clear journey.</h2>
            <div className="mt-6 grid gap-3">
              {["1. Why the farm exists", "2. Where each person fits", "3. How food becomes health and opportunity", "4. How partners and donors create impact"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/12 p-4 text-sm font-bold ring-1 ring-white/15">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="guided-tour" className="mx-auto max-w-7xl px-5 py-20">
        <SectionKicker>Guided Tour</SectionKicker>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#173C2D] md:text-6xl">Choose a role. Follow the story.</h2>
            <p className="mt-5 text-lg leading-8 text-[#514B42]">
              Each button now opens a different story, not the same place on the page. This lets a visitor, donor, surgeon, partner, parent, grower, or city leader immediately understand their role in the ecosystem.
            </p>

            <div className="mt-6 rounded-3xl bg-white p-5 shadow-xl ring-1 ring-[#D9CFBB]">
              <div className="mb-3 flex items-center justify-between text-sm font-black text-[#173C2D]">
                <span>Tour progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#E5DDCC]">
                <div className="h-full rounded-full bg-[#173C2D] transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {pathways.map((pathway, index) => {
                const Icon = pathway.icon;
                const selected = active.id === pathway.id;
                return (
                  <button
                    key={pathway.id}
                    onClick={() => setActive(pathway)}
                    className={cx(
                      "flex items-center gap-4 rounded-3xl p-4 text-left transition",
                      selected ? "bg-[#173C2D] text-white shadow-xl" : "bg-white text-[#173C2D] shadow-sm ring-1 ring-[#D9CFBB] hover:shadow-lg"
                    )}
                  >
                    <div className={cx("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl", selected ? "bg-white/15" : "bg-[#F5F1E6]")}> 
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Step {index + 1}</p>
                      <p className="font-black">{pathway.label}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article key={active.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.3 }} className="overflow-hidden rounded-[2.2rem] bg-white shadow-2xl ring-1 ring-[#D9CFBB]">
              <div className="grid lg:grid-cols-2">
                <div className="min-h-[360px] lg:min-h-[620px]">
                  <ImageBlock src={active.image} alt={active.title} className="rounded-none lg:rounded-l-[2.2rem] lg:rounded-r-none" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="mb-5 inline-flex w-fit rounded-full bg-[#173C2D]/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-[#173C2D]">
                    {active.label}
                  </div>
                  <h3 className="text-4xl font-black leading-tight tracking-tight text-[#173C2D] md:text-5xl">{active.title}</h3>
                  <p className="mt-6 text-2xl font-black leading-9 text-[#2F2A24]">{active.statement}</p>
                  <p className="mt-5 text-lg leading-8 text-[#514B42]">{active.story}</p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {active.steps.map((step) => (
                      <div key={step} className="rounded-2xl bg-[#F5F1E6] p-4 text-sm font-black text-[#173C2D]">
                        <CheckCircle2 className="mb-2 h-5 w-5" />
                        {step}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button onClick={() => setActive(nextPathway)} className="rounded-full bg-[#173C2D] px-6 py-3 text-sm font-black text-white shadow-lg hover:bg-[#24543F]">
                      Continue to {nextPathway.label}
                    </button>
                    {active.id === "donor" ? (
                      <a href={websiteUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[#173C2D]/20 bg-[#F5F1E6] px-6 py-3 text-sm font-black text-[#173C2D] hover:bg-white">
                        Visit Website
                      </a>
                    ) : (
                      <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[#173C2D]/20 bg-[#F5F1E6] px-6 py-3 text-sm font-black text-[#173C2D] hover:bg-white">
                        Register for Event
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section id="event" className="bg-[#173C2D] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E7D7A3]">Growers Supply Market</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Experience the ecosystem in person.</h2>
            <div className="mt-7 grid gap-4 text-lg font-bold text-white/90">
              <p className="flex items-center gap-3"><CalendarDays className="h-6 w-6 text-[#E7D7A3]" /> Saturday, May 16, 2026 · 9:00 AM – 2:00 PM</p>
              <p className="flex items-center gap-3"><MapPin className="h-6 w-6 text-[#E7D7A3]" /> Bronson Family Farm · Youngstown, Ohio</p>
              <p className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-[#E7D7A3]" /> By Invitation Only · Registration required</p>
            </div>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#E7D7A3] px-7 py-3 text-sm font-black text-[#173C2D] shadow-lg hover:bg-white">
              Register Through Eventbrite
            </a>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-8 shadow-2xl ring-1 ring-white/15">
            <h3 className="text-3xl font-black">What guests experience</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Fresh food access", "Grower demonstrations", "Youth workforce", "Health and wellness", "Local entrepreneurship", "Community collaboration"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold text-white/90">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-5 py-20">
        <SectionKicker>Donation Impact</SectionKicker>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#173C2D] md:text-6xl">A gift helps turn vision into operating infrastructure.</h2>
            <p className="mt-6 text-lg leading-8 text-[#514B42]">
              For a surgeon, health leader, donor, or sponsor, the message is clear: this project connects prevention, nutrition, mental wellness, youth development, and community health through a practical food ecosystem.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ImpactCard icon={HeartPulse} title="Community health" body="Fresh food, outdoor engagement, nutrition, and wellness support." />
              <ImpactCard icon={BriefcaseBusiness} title="Jobs & readiness" body="Youth and adult workforce pathways, including employment connections through Nesco Resource." />
              <ImpactCard icon={Sprout} title="Food access" body="Seedlings, produce, growers, and a practical marketplace model." />
              <ImpactCard icon={HandHeart} title="Donor leverage" body="Funding supports water, supplies, safety, youth programming, and marketplace readiness." />
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-[#D9CFBB]">
            <h3 className="text-3xl font-black text-[#173C2D]">A donor can help fund:</h3>
            <div className="mt-6 grid gap-3">
              {["Water access and irrigation", "Youth workforce tools and PPE", "Growing supplies and seedlings", "Food safety and wash station readiness", "Marketplace setup and event infrastructure", "Health, wellness, and nutrition education"].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#F5F1E6] p-4 font-bold text-[#2F2A24]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#173C2D]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionKicker>Collaborators</SectionKicker>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-[#173C2D] md:text-6xl">Collaboration is the infrastructure.</h2>
              <p className="mt-6 text-lg leading-8 text-[#514B42]">
                Bronson Family Farm is building relationships across municipal, nonprofit, education, wellness, workforce, and private-sector partners to strengthen food access and community opportunity.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {collaborators.map((partner) => (
                <div key={partner} className="rounded-3xl border border-[#D9CFBB] bg-[#F5F1E6] p-5 font-black text-[#173C2D] shadow-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0D241A] via-[#173C2D] to-[#2B241A] px-5 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#E7D7A3]">Closing Story</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">This is not simply agriculture. It is community infrastructure.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-white/86">
            Bronson Family Farm was created to grow food, knowledge, opportunity, wellness, and future generations through a place-based ecosystem rooted in Youngstown, Ohio.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button onClick={() => choosePathway(pathways[7])} className="rounded-full bg-[#E7D7A3] px-7 py-3 text-sm font-black text-[#173C2D] shadow-lg hover:bg-white">
              View Donation Impact
            </button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-black text-white backdrop-blur hover:bg-white/20">
              Register for Growers Supply Market
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#F5F1E6] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#6B6254] md:flex-row md:items-center md:justify-between">
          <p className="font-black text-[#173C2D]">Bronson Family Farm · Youngstown, Ohio</p>
          <p>Developed by Bronson Family Farm · Farm & Family Alliance Inc. ecosystem partner</p>
        </div>
      </footer>
    </main>
  );
}

function ImpactCard({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-[#D9CFBB]">
      <Icon className="mb-4 h-8 w-8 text-[#173C2D]" />
      <h3 className="text-xl font-black text-[#173C2D]">{title}</h3>
      <p className="mt-2 leading-7 text-[#514B42]">{body}</p>
    </div>
  );
}
