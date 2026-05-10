import React, { useState } from "react";

type Pathway = {
  id: string;
  title: string;
  audience: string;
  image: string;
  purpose: string;
  experience: string[];
  action: string;
};

const EVENTBRITE =
  "https://www.eventbrite.com/e/bronson-family-farm-growers-supply-market-tickets-1984126092554?aff=oddtdtcreator";

const GROWNBY = "https://grownby.com/farms/bronson-family-farm/shop";

const pathways: Pathway[] = [
  {
    id: "guest",
    title: "Guest Pathway",
    audience: "Visitors, neighbors, families, and invited community members",
    image: "/images/farm-road.jpg",
    purpose:
      "Step into the farm, understand the story, and experience why Bronson Family Farm exists.",
    experience: [
      "Arrive through an invitation-only check-in experience.",
      "Learn how food, land, health, and community connect.",
      "See the farm as a place of learning, restoration, and possibility.",
    ],
    action: "Register for Growers Supply Market",
  },
  {
    id: "customer",
    title: "Customer Pathway",
    audience: "Families seeking fresh food, seedlings, and healthy choices",
    image: "/images/customer-produce.jpg",
    purpose:
      "Connect customers to fresh produce, seedlings, Bubble Babies™, and repeat healthy purchasing.",
    experience: [
      "Explore what is available from Bronson Family Farm and partner growers.",
      "Use QR codes to shop, register, or learn more.",
      "Support a local food system built for Youngstown families.",
    ],
    action: "Shop the Farm Store",
  },
  {
    id: "marketplace",
    title: "Marketplace Pathway",
    audience: "Growers, customers, vendors, and food-access partners",
    image: "/images/marketplace-produce.jpg",
    purpose:
      "Convert community interest into purchasing power, food access, and long-term sustainability.",
    experience: [
      "Discover growers, tools, demonstrations, products, and resources.",
      "Connect local food production with community purchasing.",
      "Support a growers supply market that strengthens the regional food economy.",
    ],
    action: "Visit the Marketplace",
  },
  {
    id: "grower",
    title: "Grower Pathway",
    audience: "Small farmers, gardeners, growers, and emerging producers",
    image: "/images/grow-area.jpg",
    purpose:
      "Connect growers to tools, knowledge, market opportunities, and technical support.",
    experience: [
      "Learn from demonstrations, soil education, growing methods, and peer growers.",
      "Access market opportunities through the farm ecosystem.",
      "Grow as an entrepreneur while contributing to a larger food system.",
    ],
    action: "Join the Grower Network",
  },
  {
    id: "youth",
    title: "Youth Workforce Pathway",
    audience: "Youth, parents, supervisors, and workforce partners",
    image: "/images/youth-workforce.jpg",
    purpose:
      "Build responsibility, confidence, skills, and future readiness through farm-based work.",
    experience: [
      "Participate in structured outdoor learning and hands-on work.",
      "Track attendance, skills, progress, and growth.",
      "Connect youth to food, entrepreneurship, teamwork, and community purpose.",
    ],
    action: "Explore Youth Workforce",
  },
  {
    id: "partners",
    title: "Partner Pathway",
    audience: "Funders, sponsors, institutions, city partners, and collaborators",
    image: "/images/partners-community.jpg",
    purpose:
      "Align resources, demonstrations, education, sponsorship, and investment around community benefit.",
    experience: [
      "See how partners contribute to food access, health, education, and economic development.",
      "Support infrastructure that can be replicated in other communities.",
      "Invest in a place-based model rooted in Youngstown’s East Side.",
    ],
    action: "Partner With the Farm",
  },
];

export default function App() {
  const [selected, setSelected] = useState<Pathway>(pathways[0]);

  const handleAction = (pathway: Pathway) => {
    if (pathway.id === "customer" || pathway.id === "marketplace") {
      window.open(GROWNBY, "_blank");
    } else {
      window.open(EVENTBRITE, "_blank");
    }
  };

  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#1f2a1f]">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/farm-aerial.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-screen items-center px-6 py-16 md:px-16">
          <div className="max-w-5xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#f3d79b]">
              Bronson Family Farm
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-7xl">
              Step into the Farm.
              <br />
              Experience the Wonders of Life.
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-8 md:text-2xl">
              Bronson Family Farm is building a growers supply market that
              brings together tools, knowledge, people, food, youth workforce,
              partners, and community purpose.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full bg-[#f3d79b] px-7 py-3 font-semibold text-[#1f2a1f] shadow-lg hover:bg-[#ffe7ad]"
              >
                Begin the Demo
              </button>

              <button
                onClick={() => window.open(EVENTBRITE, "_blank")}
                className="rounded-full border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-[#1f2a1f]"
              >
                Register on Eventbrite
              </button>
            </div>

            <p className="mt-6 text-sm text-white/85">
              Growers Supply Market · Saturday, May 16, 2026 · 9:00 AM – 2:00 PM · By Invitation Only
            </p>
          </div>
        </div>
      </section>

      <section id="pathways" className="px-6 py-14 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#7a4f22]">
              Choose Your Pathway
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              One farm. Multiple ways to participate.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4a5946]">
              Each pathway shows how people enter the Bronson Family Farm ecosystem —
              as guests, customers, growers, youth workforce participants, marketplace
              users, or partners.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {pathways.map((pathway) => (
              <button
                key={pathway.id}
                onClick={() => setSelected(pathway)}
                className={`rounded-2xl p-4 text-left shadow-md transition ${
                  selected.id === pathway.id
                    ? "bg-[#27462c] text-white"
                    : "bg-white text-[#1f2a1f] hover:bg-[#e7dcc8]"
                }`}
              >
                <p className="text-sm font-bold">{pathway.title}</p>
              </button>
            ))}
          </div>

          <div className="mt-10 grid overflow-hidden rounded-[2rem] bg-white shadow-2xl md:grid-cols-2">
            <div className="h-[360px] md:h-full">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/farm-aerial.jpg";
                }}
              />
            </div>

            <div className="p-8 md:p-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#7a4f22]">
                {selected.audience}
              </p>

              <h3 className="mb-5 text-3xl font-bold md:text-5xl">
                {selected.title}
              </h3>

              <p className="mb-6 text-lg leading-8 text-[#3e4a39]">
                {selected.purpose}
              </p>

              <div className="space-y-4">
                {selected.experience.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-[#f4efe5] p-4">
                    <p className="font-medium leading-7">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleAction(selected)}
                className="mt-8 rounded-full bg-[#27462c] px-7 py-3 font-semibold text-white shadow-lg hover:bg-[#1d351f]"
              >
                {selected.action}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#27462c] px-6 py-14 text-white md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f3d79b]">
              Why This Matters
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Food access is community infrastructure.
            </h2>
          </div>

          <div className="text-lg leading-8 text-white/90">
            <p>
              Bronson Family Farm is addressing food insecurity in Youngstown by
              connecting land, growers, education, health, youth workforce, and
              marketplace access into one living ecosystem.
            </p>
            <p className="mt-5">
              This demo shows how invited participants can move from awareness
              to action — registering, shopping, learning, growing, volunteering,
              partnering, and investing in a stronger regional food future.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-2xl font-bold">Event</h3>
              <p>Growers Supply Market</p>
              <p>Saturday, May 16, 2026</p>
              <p>9:00 AM – 2:00 PM</p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold">Access</h3>
              <p>By Invitation Only</p>
              <p>Registration required through Eventbrite.</p>
              <p>Gate opens for setup at 7:30 AM.</p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold">Location</h3>
              <p>Bronson Family Farm</p>
              <p>Historic Lansdowne Airport Area</p>
              <p>Youngstown, Ohio</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => window.open(EVENTBRITE, "_blank")}
              className="rounded-full bg-[#27462c] px-7 py-3 font-semibold text-white hover:bg-[#1d351f]"
            >
              Register on Eventbrite
            </button>

            <button
              onClick={() => window.open(GROWNBY, "_blank")}
              className="rounded-full border border-[#27462c] px-7 py-3 font-semibold text-[#27462c] hover:bg-[#27462c] hover:text-white"
            >
              Shop Bronson Family Farm
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
