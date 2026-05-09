import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ShoppingBasket,
  Sprout,
  BriefcaseBusiness,
  Handshake,
  Factory,
  Menu,
  X,
  CalendarDays,
  MapPin,
  ShieldCheck,
} from "lucide-react";

/*
FINAL STABILIZED BRONSON FAMILY FARM DEMO
FULL APP.TSX

IMPORTANT:
Images go inside:
public/images/

REQUIRED IMAGE FILES:

GrowArea.jpg
FarmEntrance.jpg
MarketplaceProduce.jpg
Seedlings.jpg
YouthWorkforce.jpg
CommunityPartners.jpg
ValueAddedProducer.jpg
FreshProduce.jpg
*/

const eventbrite =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const pathways = [
  {
    id: "guest",
    title: "Guest Pathway",
    icon: Home,
    image: "/images/FarmEntrance.jpg",
    headline: "Why the Farm Exists",
    subheadline:
      "Walk in as a visitor. Leave understanding the vision.",
    story:
      "Bronson Family Farm was created to help communities reconnect with food, land, opportunity, wellness, entrepreneurship, and one another. The ecosystem model is rooted in Youngstown and designed to strengthen long-term community resilience.",
  },

  {
    id: "marketplace",
    title: "Marketplace",
    icon: ShoppingBasket,
    image: "/images/MarketplaceProduce.jpg",
    headline: "Economic Ecosystem",
    subheadline:
      "Interest becomes purchasing power.",
    story:
      "The marketplace pathway demonstrates how growers, produce, entrepreneurship, value-added products, and community participation create sustainable regional food systems and economic opportunity.",
  },

  {
    id: "grower",
    title: "Grower Pathway",
    icon: Sprout,
    image: "/images/Seedlings.jpg",
    headline: "Tools, Knowledge & Growing",
    subheadline:
      "Helping growers grow successfully.",
    story:
      "Growers gain access to seedlings, demonstrations, educational support, tools, and collaborative learning opportunities designed to strengthen local growing capacity.",
  },

  {
    id: "youth",
    title: "Youth Workforce",
    icon: BriefcaseBusiness,
    image: "/images/YouthWorkforce.jpg",
    headline: "Building Future Leaders",
    subheadline:
      "Outdoor learning becomes workforce readiness.",
    story:
      "The Youth Workforce pathway helps young people develop leadership, teamwork, responsibility, environmental stewardship, entrepreneurship, and employment readiness through hands-on outdoor participation.",
  },

  {
    id: "partners",
    title: "Partners",
    icon: Handshake,
    image: "/images/CommunityPartners.jpg",
    headline: "Collaborative Infrastructure",
    subheadline:
      "Community collaboration creates sustainability.",
    story:
      "Bronson Family Farm connects public, nonprofit, wellness, workforce, educational, and private-sector partners together to strengthen food access, wellness, entrepreneurship, and regional opportunity.",
  },

  {
    id: "value",
    title: "Value-Added",
    icon: Factory,
    image: "/images/ValueAddedProducer.jpg",
    headline: "From Production to Enterprise",
    subheadline:
      "Food creates entrepreneurial opportunity.",
    story:
      "Value-added producers expand opportunity through prepared foods, packaging, processing, branding, entrepreneurship, and local product creation.",
  },
];

function ImageBlock({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-[420px] items-center justify-center rounded-[36px] bg-gradient-to-br from-[#173C2D] to-[#285841] text-white">
        <div className="text-center">
          <p className="text-2xl font-bold">
            Missing Image
          </p>

          <p className="mt-3 text-sm opacity-70">
            {src}
          </p>
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

export default function App() {
  const [activePathway, setActivePathway] =
    useState(pathways[0]);

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <main className="min-h-screen bg-[#F5F1E6] text-[#1D1D1D]">
      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-[#d9cfbb] bg-[#F5F1E6]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1
              className="text-2xl font-bold text-[#173C2D]"
              style={{
                fontFamily:
                  "Playfair Display, serif",
              }}
            >
              Bronson Family Farm
            </h1>
          </div>

          <nav className="hidden gap-3 lg:flex">
            {pathways.map((pathway) => (
              <button
                key={pathway.id}
                onClick={() =>
                  setActivePathway(pathway)
                }
                className={`rounded-full px-5 py-2 font-semibold transition ${
                  activePathway.id ===
                  pathway.id
                    ? "bg-[#173C2D] text-white"
                    : "border border-[#d9cfbb] bg-white text-[#173C2D]"
                }`}
                style={{
                  fontFamily:
                    "Inter, sans-serif",
                }}
              >
                {pathway.title}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageBlock
            src="/images/GrowArea.jpg"
            alt="Bronson Family Farm"
          />

          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="max-w-4xl text-white"
          >
            <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
              Growers Supply Market · May 16,
              2026
            </div>

            <h1
              className="text-6xl font-bold leading-tight md:text-8xl"
              style={{
                fontFamily:
                  "Playfair Display, serif",
              }}
            >
              Choose Your Pathway Into the
              Ecosystem
            </h1>

            <p
              className="mt-8 max-w-3xl text-xl leading-9 text-white/90"
              style={{
                fontFamily:
                  "Inter, sans-serif",
              }}
            >
              Bronson Family Farm is building
              a community-centered growers
              supply market and ecosystem
              designed to strengthen food
              access, workforce development,
              wellness, entrepreneurship,
              sustainability, and regional
              opportunity throughout
              Youngstown and the Mahoning
              Valley.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={eventbrite}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#E7D7A3] px-7 py-4 text-lg font-bold text-[#173C2D] transition hover:bg-white"
                style={{
                  fontFamily:
                    "Inter, sans-serif",
                }}
              >
                Register on Eventbrite
              </a>

              <button
                onClick={() =>
                  setActivePathway(
                    pathways[0]
                  )
                }
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-lg font-bold text-white backdrop-blur"
                style={{
                  fontFamily:
                    "Inter, sans-serif",
                }}
              >
                Explore the Ecosystem
              </button>
            </div>

            <p
              className="mt-8 text-sm uppercase tracking-[0.35em] text-[#E7D7A3]"
              style={{
                fontFamily:
                  "Inter, sans-serif",
              }}
            >
              Select a pathway to experience
              the story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY EXPERIENCE */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14">
          <h2
            className="text-5xl font-bold text-[#173C2D]"
            style={{
              fontFamily:
                "Playfair Display, serif",
            }}
          >
            Guided Ecosystem Experience
          </h2>

          <p
            className="mt-5 max-w-3xl text-xl leading-8 text-[#555]"
            style={{
              fontFamily:
                "Inter, sans-serif",
            }}
          >
            Every pathway reveals a different
            part of the Bronson Family Farm
            ecosystem and how food,
            workforce development, wellness,
            entrepreneurship, and community
            infrastructure connect together.
          </p>
        </div>

        {/* STORY CARDS */}

        <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;

            return (
              <button
                key={pathway.id}
                onClick={() =>
                  setActivePathway(pathway)
                }
                className={`rounded-[32px] p-6 text-left transition-all ${
                  activePathway.id ===
                  pathway.id
                    ? "bg-[#173C2D] text-white shadow-2xl"
                    : "bg-white text-[#173C2D] shadow-lg hover:shadow-xl"
                }`}
              >
                <Icon className="mb-5 h-8 w-8" />

                <h3
                  className="text-3xl font-bold"
                  style={{
                    fontFamily:
                      "Playfair Display, serif",
                  }}
                >
                  {pathway.title}
                </h3>

                <p
                  className="mt-4 text-lg leading-7"
                  style={{
                    fontFamily:
                      "Inter, sans-serif",
                  }}
                >
                  {pathway.subheadline}
                </p>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STORY */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activePathway.id}
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -24,
            }}
            transition={{
              duration: 0.4,
            }}
            className="grid gap-10 lg:grid-cols-2"
          >
            {/* IMAGE */}

            <div className="h-[560px] overflow-hidden rounded-[36px] shadow-2xl">
              <ImageBlock
                src={activePathway.image}
                alt={
                  activePathway.title
                }
              />
            </div>

            {/* STORY */}

            <div className="flex flex-col justify-center rounded-[36px] bg-white p-12 shadow-2xl">
              <div className="mb-5 inline-flex w-fit rounded-full bg-[#173C2D]/10 px-4 py-2 text-sm font-bold text-[#173C2D]">
                {
                  activePathway.title
                }
              </div>

              <h2
                className="text-6xl font-bold leading-tight text-[#173C2D]"
                style={{
                  fontFamily:
                    "Playfair Display, serif",
                }}
              >
                {
                  activePathway.headline
                }
              </h2>

              <p
                className="mt-8 text-2xl leading-10 text-[#444]"
                style={{
                  fontFamily:
                    "Inter, sans-serif",
                }}
              >
                {
                  activePathway.subheadline
                }
              </p>

              <p
                className="mt-8 text-lg leading-9 text-[#666]"
                style={{
                  fontFamily:
                    "Inter, sans-serif",
                }}
              >
                {
                  activePathway.story
                }
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  className="rounded-full bg-[#173C2D] px-7 py-4 font-bold text-white transition hover:bg-[#24523e]"
                  style={{
                    fontFamily:
                      "Inter, sans-serif",
                  }}
                >
                  Continue the Journey
                </button>

                <a
                  href={eventbrite}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#173C2D]/20 bg-[#f5f1e6] px-7 py-4 font-bold text-[#173C2D]"
                  style={{
                    fontFamily:
                      "Inter, sans-serif",
                  }}
                >
                  Register for Event
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
                  fontFamily:
                    "Playfair Display, serif",
                }}
              >
                Growers Supply Market
              </h2>

              <div
                className="mt-8 grid gap-5 text-xl"
                style={{
                  fontFamily:
                    "Inter, sans-serif",
                }}
              >
                <p className="flex items-center gap-4">
                  <CalendarDays />
                  Saturday, May 16, 2026 ·
                  9am – 2pm
                </p>

                <p className="flex items-center gap-4">
                  <MapPin />
                  Bronson Family Farm ·
                  Youngstown, Ohio
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
                className="mt-10 inline-flex rounded-full bg-[#E7D7A3] px-8 py-4 text-lg font-bold text-[#173C2D]"
              >
                Register Through
                Eventbrite
              </a>
            </div>

            <div className="rounded-[36px] bg-white/10 p-12 backdrop-blur">
              <h3
                className="text-4xl font-bold"
                style={{
                  fontFamily:
                    "Playfair Display, serif",
                }}
              >
                Building More Than a Farm
              </h3>

              <p
                className="mt-6 text-xl leading-9 text-white/90"
                style={{
                  fontFamily:
                    "Inter, sans-serif",
                }}
              >
                Bronson Family Farm is
                designed as a
                community-centered ecosystem
                connecting food, workforce
                development, wellness,
                entrepreneurship,
                sustainability, and regional
                collaboration throughout
                Youngstown and the Mahoning
                Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}

      <section className="bg-[#F5F1E6] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2
            className="text-5xl font-bold text-[#173C2D]"
            style={{
              fontFamily:
                "Playfair Display, serif",
            }}
          >
            Community & Ecosystem Partners
          </h2>

          <div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            style={{
              fontFamily:
                "Inter, sans-serif",
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

      <footer className="bg-[#173C2D] px-6 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <h3
            className="text-3xl font-bold"
            style={{
              fontFamily:
                "Playfair Display, serif",
            }}
          >
            Bronson Family Farm
          </h3>

          <p
            className="mt-5 max-w-3xl text-lg leading-8 text-white/80"
            style={{
              fontFamily:
                "Inter, sans-serif",
            }}
          >
            Growing food, opportunity,
            wellness, entrepreneurship, and
            future generations through a
            place-based ecosystem rooted in
            Youngstown, Ohio.
          </p>
        </div>
      </footer>
    </main>
  );
}
