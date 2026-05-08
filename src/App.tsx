import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sprout,
  ShoppingBasket,
  BriefcaseBusiness,
  Handshake,
  Factory,
  Home,
  Leaf,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

/*
FINAL BRONSON FAMILY FARM DEMO
STABILIZED VERSION
NO REBUILDS
PLACE IMAGES IN: /public/images
*/

const IMAGES = {
  hero: "/images/GrowArea.jpg",
  guest: "/images/FarmEntrance.jpg",
  marketplace: "/images/MarketplaceProduce.jpg",
  grower: "/images/Seedlings.jpg",
  youth: "/images/YouthWorkforce.jpg",
  partners: "/images/CommunityPartners.jpg",
  valueAdded: "/images/ValueAddedProducer.jpg",
  customer: "/images/FreshProduce.jpg",
};

const eventbrite =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const pathways = [
  {
    id: "guest",
    title: "Guest Pathway",
    image: IMAGES.guest,
    icon: Home,
    storyTitle: "Why the Farm Exists",
    description:
      "Bronson Family Farm was created to help communities reconnect with food, land, opportunity, and one another.",
    story:
      "Guests experience the farm as a living ecosystem rooted in food access, education, agriculture, wellness, entrepreneurship, and regional revitalization in Youngstown and the Mahoning Valley.",
  },

  {
    id: "marketplace",
    title: "Marketplace",
    image: IMAGES.marketplace,
    icon: ShoppingBasket,
    storyTitle: "Economic Ecosystem",
    description:
      "Fresh produce, growers, entrepreneurs, and community commerce connected together.",
    story:
      "The marketplace pathway demonstrates how local food systems can strengthen regional sustainability, entrepreneurship, and economic circulation through growers, produce, and value-added products.",
  },

  {
    id: "grower",
    title: "Grower Pathway",
    image: IMAGES.grower,
    icon: Sprout,
    storyTitle: "Tools, Knowledge & Growing",
    description:
      "Helping growers access tools, education, seedlings, and opportunity.",
    story:
      "Growers connect to demonstrations, supplies, learning opportunities, and collaborative support designed to strengthen local growing capacity and food participation.",
  },

  {
    id: "youth",
    title: "Youth Workforce",
    image: IMAGES.youth,
    icon: BriefcaseBusiness,
    storyTitle: "Building Future Leaders",
    description:
      "Outdoor learning, responsibility, leadership, and workforce readiness.",
    story:
      "The Youth Workforce pathway helps young people develop leadership, teamwork, responsibility, entrepreneurship, and employment readiness through hands-on outdoor participation.",
  },

  {
    id: "partners",
    title: "Partners",
    image: IMAGES.partners,
    icon: Handshake,
    storyTitle: "Collaborative Infrastructure",
    description:
      "Public, private, nonprofit, wellness, and workforce collaboration.",
    story:
      "The ecosystem connects community organizations, businesses, workforce partners, educational institutions, and municipal collaboration to strengthen food access and regional opportunity.",
  },

  {
    id: "value",
    title: "Value-Added",
    image: IMAGES.valueAdded,
    icon: Factory,
    storyTitle: "From Production to Enterprise",
    description:
      "Transforming agricultural products into sustainable economic opportunity.",
    story:
      "Value-added producers expand opportunity through prepared foods, packaging, processing, entrepreneurship, and local product creation.",
  },
];

function ImageBlock({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center rounded-[32px] bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
        <div className="text-center">
          <Leaf className="mx-auto mb-4 h-10 w-10" />
          <p className="font-semibold">Missing Image</p>
          <p className="text-sm opacity-80">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="h-full w-full rounded-[32px] object-cover"
    />
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStory, setActiveStory] = useState(pathways[0]);

  const nav = useMemo(
    () =>
      pathways.map((p) => ({
        id: p.id,
        title: p.title,
      })),
    []
  );

  return (
    <main className="min-h-screen bg-[#F4F0E2] text-[#1B1B1B]">
      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-[#d8d0bd] bg-[#F4F0E2]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1
              className="text-2xl font-bold text-[#173C2D]"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Bronson Family Farm
            </h1>
          </div>

          <nav className="hidden gap-3 lg:flex">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const found = pathways.find(
                    (p) => p.id === item.id
                  );
                  if (found) setActiveStory(found);
                }}
                className="rounded-full border border-[#d0c8b8] bg-white px-5 py-2 font-semibold text-[#173C2D] shadow-sm transition hover:bg-[#173C2D] hover:text-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item.title}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageBlock
            src={IMAGES.hero}
            alt="Bronson Family Farm"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-white"
          >
            <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
              Growers Supply Market · May 16, 2026
            </div>

            <h1
              className="text-6xl font-bold leading-tight md:text-8xl"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Choose Your Pathway Into the Ecosystem
            </h1>

            <p
              className="mt-8 max-w-3xl text-xl leading-9 text-white/90"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              Bronson Family Farm is building a
              community-centered growers supply market and
              ecosystem designed to strengthen food access,
              workforce development, wellness,
              entrepreneurship, sustainability, and regional
              opportunity throughout Youngstown and the
              Mahoning Valley.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={eventbrite}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#E8D9A9] px-7 py-4 text-lg font-bold text-[#173C2D] shadow-xl transition hover:bg-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Register on Eventbrite
              </a>

              <button
                onClick={() =>
                  setActiveStory(pathways[0])
                }
                className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-lg font-bold text-white backdrop-blur transition hover:bg-white/20"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Explore the Ecosystem
              </button>
            </div>

            <p
              className="mt-8 text-sm uppercase tracking-[0.35em] text-[#E8D9A9]"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              Select a pathway to experience the story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY EXPERIENCE */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <h2
            className="text-5xl font-bold text-[#173C2D]"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Guided Ecosystem Experience
          </h2>

          <p
            className="mt-5 max-w-3xl text-xl leading-8 text-[#444]"
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            Each pathway reveals a different part of the
            Bronson Family Farm ecosystem and how food,
            wellness, workforce development, entrepreneurship,
            and community infrastructure connect together.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.4 }}
            className="grid gap-10 lg:grid-cols-[1fr_1fr]"
          >
            <div className="h-[520px] overflow-hidden rounded-[36px] shadow-2xl">
              <ImageBlock
                src={activeStory.image}
                alt={activeStory.title}
              />
            </div>

            <div className="flex flex-col justify-center rounded-[36px] bg-white p-10 shadow-2xl">
              <div className="mb-5 inline-flex w-fit rounded-full bg-[#173C2D]/10 px-4 py-2 text-sm font-bold text-[#173C2D]">
                {activeStory.title}
              </div>

              <h3
                className="text-5xl font-bold leading-tight text-[#173C2D]"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                {activeStory.storyTitle}
              </h3>

              <p
                className="mt-7 text-2xl leading-10 text-[#333]"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {activeStory.description}
              </p>

              <p
                className="mt-7 text-lg leading-9 text-[#555]"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {activeStory.story}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  className="rounded-full bg-[#173C2D] px-7 py-4 font-bold text-white transition hover:bg-[#24543f]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Continue the Journey
                </button>

                <a
                  href={eventbrite}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#173C2D]/20 bg-[#f7f4ea] px-7 py-4 font-bold text-[#173C2D]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Register for the Event
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* EVENT */}

      <section className="bg-[#173C2D] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2
                className="text-5xl font-bold"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Growers Supply Market
              </h2>

              <div
                className="mt-8 grid gap-5 text-xl"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <p className="flex items-center gap-4">
                  <CalendarDays />
                  Saturday, May 16, 2026 · 9am – 2pm
                </p>

                <p className="flex items-center gap-4">
                  <MapPin />
                  Bronson Family Farm · Youngstown, Ohio
                </p>

                <p className="flex items-center gap-4">
                  <ShieldCheck />
                  By Invitation Only
                </p>
              </div>

              <a
                href={eventbrite}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex rounded-full bg-[#E8D9A9] px-8 py-4 text-lg font-bold text-[#173C2D]"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Register Through Eventbrite
              </a>
            </div>

            <div className="rounded-[36px] bg-white/10 p-10 backdrop-blur">
              <h3
                className="text-4xl font-bold"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Building More Than a Farm
              </h3>

              <p
                className="mt-6 text-xl leading-9 text-white/90"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Bronson Family Farm is designed as a
                community-centered ecosystem connecting food,
                workforce development, entrepreneurship,
                wellness, sustainability, and regional
                collaboration throughout Youngstown and the
                Mahoning Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}

      <section className="bg-[#F4F0E2] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2
            className="text-5xl font-bold text-[#173C2D]"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Community & Ecosystem Partners
          </h2>

          <div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            {[
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
            ].map((partner) => (
              <div
                key={partner}
                className="rounded-[28px] bg-white p-6 text-lg font-semibold shadow-lg"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#173C2D] px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h3
            className="text-3xl font-bold"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Bronson Family Farm
          </h3>

          <p
            className="mt-4 max-w-3xl text-lg leading-8 text-white/80"
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            Growing food, opportunity, wellness, and future
            generations through a place-based ecosystem rooted
            in Youngstown, Ohio.
          </p>
        </div>
      </footer>
    </main>
  );
}
