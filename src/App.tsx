import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  Users,
  ShoppingBasket,
  Tractor,
  Sprout,
  GraduationCap,
  Handshake,
  MapPin,
  Globe2,
  CheckCircle,
} from "lucide-react";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

const imageSets: Record<PathwayKey | "hero", string[]> = {
  hero: ["/GrowArea.jpg", "/GrowArea2.jpg", "/images/GrowArea.jpg", "/images/GrowArea2.jpg"],
  guest: ["/SAM_0251.JPG", "/SAM_0252.JPG", "/images/SAM_0251.JPG", "/images/GrowArea2.jpg"],
  customer: ["/SAM_0260.JPG", "/SAM_0261.JPG", "/images/SAM_0260.JPG", "/images/produce.jpg"],
  marketplace: ["/SAM_0280.JPG", "/SAM_0281.JPG", "/images/SAM_0280.JPG", "/images/marketplace.jpg"],
  grower: ["/SAM_0300.JPG", "/SAM_0301.JPG", "/images/SAM_0300.JPG", "/images/grower.jpg"],
  youth: ["/SAM_0320.JPG", "/SAM_0321.JPG", "/images/SAM_0320.JPG", "/images/youth.jpg"],
  partners: ["/SAM_0340.JPG", "/SAM_0341.JPG", "/images/SAM_0340.JPG", "/images/partners.jpg"],
};

function SmartImage({
  srcs,
  alt,
  className,
}: {
  srcs: string[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const src = srcs[index];

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        if (index < srcs.length - 1) setIndex(index + 1);
      }}
    />
  );
}

const pathways = [
  {
    key: "guest" as PathwayKey,
    title: "Guest Experience",
    icon: Home,
    short:
      "Walk the farm. Experience history, agriculture, wellness, youth engagement, growers markets, and future agritourism.",
    purpose:
      "Guests are introduced to the land, the airport history, the farm vision, and the larger food ecosystem being built in Youngstown.",
    depth: [
      "Learn why Bronson Family Farm is being developed at the Historic Lansdowne Airport.",
      "See how agriculture, wellness, culture, and education can share one place.",
      "Understand the future agritourism vision: farm tours, family activities, camping, mini-golf, youth spaces, and community events.",
    ],
  },
  {
    key: "customer" as PathwayKey,
    title: "Customer Pathway",
    icon: Users,
    short:
      "Customers access fresh, chemical-free food through a coordinated system focused on nutrition, convenience, and community health.",
    purpose:
      "Customers do not have to chase food across many places. The ecosystem moves food toward families, schools, businesses, and community partners.",
    depth: [
      "Choose fresh, chemical-free produce and seedlings.",
      "Use marketplace tools to connect with seasonal food and future ordering options.",
      "Support a local food system where money circulates back through growers, youth, and community services.",
    ],
  },
  {
    key: "marketplace" as PathwayKey,
    title: "Marketplace",
    icon: ShoppingBasket,
    short:
      "The marketplace connects growers, customers, tools, seedlings, supplies, education, and coordinated food distribution.",
    purpose:
      "The marketplace is not only a sales page. It is the exchange point where local food, supplies, knowledge, and opportunity move together.",
    depth: [
      "Feature seedlings, Bubble Babies™, produce, grower supplies, and value-added items.",
      "Support SNAP-aware and community-centered food access planning.",
      "Help growers sell through one coordinated system instead of managing distribution alone.",
    ],
  },
  {
    key: "grower" as PathwayKey,
    title: "Grower Pathway",
    icon: Tractor,
    short:
      "Growers receive access to tools, education, supplies, markets, coordination, and community-based support.",
    purpose:
      "Growers come because they need practical support: where to sell, what to grow, how to prepare, and how to stay connected to opportunity.",
    depth: [
      "Access growing knowledge, soil support, seedlings, tools, and market preparation.",
      "Connect with other growers instead of working in isolation.",
      "Participate in a regional system where the food moves through coordinated distribution.",
    ],
  },
  {
    key: "youth" as PathwayKey,
    title: "Youth Workforce",
    icon: GraduationCap,
    short:
      "Youth build responsibility, confidence, job readiness, teamwork, agriculture skills, and community pride through outdoor learning.",
    purpose:
      "The youth pathway turns the farm into a living classroom where young people can learn work habits, safety, leadership, and life skills.",
    depth: [
      "Orientation, safety, PPE, attendance, and participation expectations.",
      "Hands-on learning through planting, maintenance, event support, media, and customer interaction.",
      "Supervisor tools help track growth, responsibility, communication, and readiness.",
    ],
  },
  {
    key: "partners" as PathwayKey,
    title: "Partners",
    icon: Handshake,
    short:
      "Partners help align resources, education, health, workforce, agriculture, and community investment around one shared ecosystem.",
    purpose:
      "Partners strengthen the farm by contributing knowledge, tools, volunteers, sponsorship, education, health services, and visibility.",
    depth: [
      "Support food access, workforce development, health education, and community revitalization.",
      "Connect city, education, business, nonprofit, and grower partners around a shared purpose.",
      "Help build a model that can be replicated across other communities.",
    ],
  },
];

const tourSteps = [
  "welcome",
  "place",
  "problem",
  "solution",
  "guest",
  "customer",
  "marketplace",
  "grower",
  "youth",
  "partners",
  "future",
  "ending",
];

export default function App() {
  const [language, setLanguage] = useState("English");
  const [tourIndex, setTourIndex] = useState(0);
  const [activePathway, setActivePathway] = useState<PathwayKey | null>(null);

  const tourStep = tourSteps[tourIndex];

  const activeData = useMemo(
    () => pathways.find((p) => p.key === activePathway),
    [activePathway]
  );

  const nextTour = () => {
    if (tourIndex < tourSteps.length - 1) setTourIndex(tourIndex + 1);
  };

  const backTour = () => {
    if (tourIndex > 0) setTourIndex(tourIndex - 1);
  };

  const jumpToPathway = (key: PathwayKey) => {
    setActivePathway(key);
    setTourIndex(tourSteps.indexOf(key));
    document.getElementById("pathway-detail")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <SmartImage
          srcs={imageSets.hero}
          alt="Bronson Family Farm grow area"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {["English", "Spanish", "Tagalog", "Italian", "Hebrew", "French"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`rounded-full px-4 py-2 text-sm ${
                  language === lang ? "bg-green-500 text-black" : "bg-white/10"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <p className="mb-3 flex items-center gap-2 text-green-400">
            <MapPin size={18} /> Historic Lansdowne Airport · Youngstown, Ohio
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Bronson Family Farm
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-white/85">
            A guided ecosystem experience showing how land, growers, food,
            youth workforce, community partners, and future agritourism work
            together.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => {
                setTourIndex(0);
                document.getElementById("guided-tour")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-green-500 px-6 py-3 font-bold text-black"
            >
              Start Guided Tour
            </button>

            <button
              onClick={() =>
                document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/30 px-6 py-3 font-bold"
            >
              Explore Pathways
            </button>
          </div>
        </div>
      </section>

      <section id="guided-tour" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-green-400">
                Guided Tour · Step {tourIndex + 1} of {tourSteps.length}
              </p>
              <h2 className="mt-2 text-3xl font-black">
                {tourStep === "welcome" && "Welcome to the Farm Experience"}
                {tourStep === "place" && "The Place: Historic Lansdowne Airport"}
                {tourStep === "problem" && "The Problem: Food Access and Food Cost"}
                {tourStep === "solution" && "The Solution: A Coordinated Grower Ecosystem"}
                {tourStep === "guest" && "Pathway 1: Guest Experience"}
                {tourStep === "customer" && "Pathway 2: Customer Pathway"}
                {tourStep === "marketplace" && "Pathway 3: Marketplace"}
                {tourStep === "grower" && "Pathway 4: Grower Pathway"}
                {tourStep === "youth" && "Pathway 5: Youth Workforce"}
                {tourStep === "partners" && "Pathway 6: Partners"}
                {tourStep === "future" && "Future Destination Vision"}
                {tourStep === "ending" && "End of Guided Tour"}
              </h2>
            </div>

            <Globe2 className="text-green-400" size={34} />
          </div>

          <div className="text-lg leading-8 text-white/85">
            {tourStep === "welcome" && (
              <p>
                This demo is a journey through Bronson Family Farm as a living
                ecosystem — not just a farm, not just a market, and not just an
                event. It shows how people enter, learn, buy, grow, work,
                partner, and help food circulate through the community.
              </p>
            )}

            {tourStep === "place" && (
              <p>
                The farm is being developed at the Historic Lansdowne Airport,
                where land, memory, agriculture, and future opportunity meet.
                The site gives Youngstown a unique place-based story: a working
                landscape becoming a food, education, wellness, and agritourism
                destination.
              </p>
            )}

            {tourStep === "problem" && (
              <p>
                Families are facing higher food costs, limited access to fresh
                food, and fewer local systems that connect nutrition, growers,
                youth opportunity, and community health. The need is practical:
                grow more food, move it better, teach people how to grow, and
                keep resources circulating locally.
              </p>
            )}

            {tourStep === "solution" && (
              <p>
                Bronson Family Farm and Farm & Family Alliance create a
                coordinated grower ecosystem. The food moves through the system
                so growers do not have to travel everywhere alone. Customers,
                schools, businesses, and community partners can connect through
                one organized pathway.
              </p>
            )}

            {["guest", "customer", "marketplace", "grower", "youth", "partners"].includes(
              tourStep
            ) && (
              <div>
                {pathways
                  .filter((p) => p.key === tourStep)
                  .map((p) => (
                    <div key={p.key}>
                      <p>{p.purpose}</p>
                      <ul className="mt-5 space-y-3">
                        {p.depth.map((item) => (
                          <li key={item} className="flex gap-3">
                            <CheckCircle className="mt-1 shrink-0 text-green-400" size={20} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}

            {tourStep === "future" && (
              <p>
                The future vision expands the farm into an agritourism
                destination with family experiences, farm-based learning,
                camping, an 18-hole mini-golf course, children’s activity
                zones, value-added production, events, and a regional model for
                food access and community revitalization.
              </p>
            )}

            {tourStep === "ending" && (
              <p>
                The tour ends by inviting each person to choose a role: guest,
                customer, grower, youth participant, volunteer, partner, or
                investor. The ecosystem works because each role helps food,
                knowledge, money, and opportunity circulate through the
                community.
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap justify-between gap-4">
            <button
              onClick={backTour}
              disabled={tourIndex === 0}
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold disabled:opacity-30"
            >
              <ArrowLeft size={18} /> Back
            </button>

            <div className="flex flex-wrap gap-2">
              {tourSteps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTourIndex(i)}
                  className={`h-3 w-3 rounded-full ${
                    i === tourIndex ? "bg-green-400" : "bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTour}
              disabled={tourIndex === tourSteps.length - 1}
              className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-bold text-black disabled:opacity-30"
            >
              Next <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-green-400">Choose Your Pathway</p>
          <h2 className="mt-2 text-4xl font-black">How People Enter the Ecosystem</h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            Each pathway tells a different part of the story, but all pathways
            connect to the same mission: fresh food, grower support, workforce
            development, and community benefit.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.key}
                className="overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl"
              >
                <SmartImage
                  srcs={imageSets[p.key]}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-7">
                  <Icon className="mb-5 text-green-400" size={36} />
                  <h3 className="text-2xl font-black">{p.title}</h3>
                  <p className="mt-4 min-h-[96px] text-white/80">{p.short}</p>

                  <button
                    onClick={() => jumpToPathway(p.key)}
                    className="mt-6 flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-black"
                  >
                    Enter Pathway <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {activeData && (
        <section id="pathway-detail" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-2">
            <SmartImage
              srcs={imageSets[activeData.key]}
              alt={activeData.title}
              className="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover"
            />

            <div>
              <p className="text-green-400">Selected Pathway</p>
              <h2 className="mt-2 text-4xl font-black">{activeData.title}</h2>
              <p className="mt-5 text-lg leading-8 text-white/80">{activeData.purpose}</p>

              <ul className="mt-6 space-y-4">
                {activeData.depth.map((item) => (
                  <li key={item} className="flex gap-3 text-white/85">
                    <CheckCircle className="mt-1 shrink-0 text-green-400" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.getElementById("guided-tour")?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 rounded-full bg-green-500 px-6 py-3 font-bold text-black"
              >
                Continue Guided Tour
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-4xl font-black">End of Demo</h2>
        <p className="mx-auto mt-4 max-w-3xl text-white/75">
          The full experience ends with a clear understanding of the ecosystem:
          guests experience it, customers access food, growers gain support,
          youth build skills, partners align resources, and the community
          benefits.
        </p>
      </section>
    </main>
  );
}
