import { useMemo, useState } from "react";

type Pathway = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  btn: string;
  target: string;
};

type ProofCard = {
  title: string;
  desc: string;
  img: string;
  btn: string;
};

type JourneyCard = {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  why: string;
  points: string[];
  cta: string;
  image: string;
  action: "marketplace" | "history" | "connect" | "happening";
};

export default function App() {
  const [lang, setLang] = useState("EN");

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openMarketplace = () => {
    window.open(
      "https://grownby.com/farms/bronson-family-farm/shop",
      "_blank"
    );
  };

  const languageNames: Record<string, string> = {
    EN: "English",
    ES: "Español",
    TL: "Tagalog",
    FR: "Français",
    HE: "עברית",
  };

  const copy = useMemo(
    () => ({
      heroTag: "Historic Lansdowne Airport Site | Est. 1926",
      heroTitle:
        "From Youngstown’s first airport to a new future of food, learning, and community renewal.",
      heroDesc:
        "Bronson Family Farm is transforming historic land into a regenerative farm, agritourism destination, youth workforce pathway, and living ecosystem for the Mahoning Valley.",
      enter: "Enter the Ecosystem",
      explore: "Explore Pathways",
      trust:
        "Regenerative Agriculture • Youth Workforce • Local Food Access • Grower Opportunity • Community Legacy",
      pathways: "Choose Your Pathway Into the Ecosystem",
      pathwaysDesc:
        "Every pathway is designed to create value, belonging, practical engagement, and a reason to return.",
      journey: "Every pathway leads somewhere meaningful",
      journeyDesc:
        "This is not a static website. It is a living invitation into purpose, participation, and possibility.",
      happening: "Happening Now at Bronson Family Farm",
      happeningDesc:
        "Real momentum is already taking place through growing activity, marketplace access, partnerships, events, and community participation.",
      history: "A Historic Place With a Living Future",
      connect: "Be Part of What’s Growing",
      connectDesc:
        "Fresh food. Opportunity. Renewal. A place where people, land, and purpose meet again.",
    }),
    [lang]
  );

  const images = {
    hero: "/images/SAM_0249.JPG",
    guest: "/images/GrowArea2.jpg",
    customer: "/images/SAM_0225.JPG",
    marketplace: "/images/SAM_0249.JPG",
    grower: "/images/SAM_0238.JPG",
    youth: "/images/SAM_0222.JPG",
    partners: "/images/SAM_0223.JPG",
    production: "/images/SAM_0226.JPG",
    buyLocal: "/images/SAM_0229.JPG",
    events: "/images/SAM_0255.JPG",
    community: "/images/SAM_0257.JPG",
    footer: "/images/SAM_0249.JPG",
  };

  const pathways: Pathway[] = [
    {
      title: "Guest",
      subtitle: "Discover the Story",
      desc:
        "Understand the vision, experience the land, and see why this place matters now.",
      img: images.guest,
      btn: "Enter as Guest",
      target: "journey-guest",
    },
    {
      title: "Customer",
      subtitle: "Eat Fresh. Live Better.",
      desc:
        "Access seasonal produce, healthy choices, and a reason to keep coming back.",
      img: images.customer,
      btn: "Shop Fresh",
      target: "journey-customer",
    },
    {
      title: "Marketplace",
      subtitle: "Support Local Commerce",
      desc:
        "Turn interest into buying power that supports farms and local economic growth.",
      img: images.marketplace,
      btn: "Enter Marketplace",
      target: "journey-marketplace",
    },
    {
      title: "Grower",
      subtitle: "Grow With Us",
      desc:
        "Connect growers to visibility, opportunity, and participation in a regional ecosystem.",
      img: images.grower,
      btn: "Become a Grower",
      target: "journey-grower",
    },
    {
      title: "Youth Workforce",
      subtitle: "Build Skills for the Future",
      desc:
        "Hands-on pathways in responsibility, agriculture, teamwork, and leadership.",
      img: images.youth,
      btn: "Join Program",
      target: "journey-youth",
    },
    {
      title: "Partners",
      subtitle: "Create Community Impact",
      desc:
        "Align institutions, sponsors, educators, and civic partners around practical results.",
      img: images.partners,
      btn: "Partner With Us",
      target: "journey-partners",
    },
  ];

  const journeys: JourneyCard[] = [
    {
      id: "journey-guest",
      title: "Guest Pathway",
      kicker: "Experience the vision",
      summary:
        "Visitors understand the story of the land, the purpose of the farm, and the possibility of renewal.",
      why:
        "When people understand the mission, they become advocates, customers, volunteers, and supporters.",
      points: [
        "Historic site significance",
        "Regenerative farming mission",
        "A place people want to revisit",
      ],
      cta: "See History",
      image: images.guest,
      action: "history",
    },
    {
      id: "journey-customer",
      title: "Customer Pathway",
      kicker: "Healthy repeat engagement",
      summary:
        "Customers gain access to fresh food, seasonal offerings, and a more personal connection to where food comes from.",
      why:
        "Repeat customers create sustainability while strengthening community food access.",
      points: ["Fresh produce", "Healthy choices", "Farm-to-community value"],
      cta: "See What’s Growing",
      image: images.customer,
      action: "happening",
    },
    {
      id: "journey-marketplace",
      title: "Marketplace Pathway",
      kicker: "Convert interest into revenue",
      summary:
        "The marketplace creates real economic movement through direct sales, visibility, and digital access.",
      why:
        "Strong marketplaces help farms survive and communities keep value local.",
      points: [
        "Direct shopping through GrownBy",
        "Digital convenience",
        "Regional grower opportunity",
      ],
      cta: "Open Marketplace",
      image: images.marketplace,
      action: "marketplace",
    },
    {
      id: "journey-grower",
      title: "Grower Pathway",
      kicker: "Opportunity through participation",
      summary:
        "Growers connect to markets, shared learning, visibility, and future opportunity.",
      why: "Local growers are stronger when connected than when isolated.",
      points: ["Market access", "Shared ecosystem value", "Collaboration"],
      cta: "Connect",
      image: images.grower,
      action: "connect",
    },
    {
      id: "journey-youth",
      title: "Youth Workforce Pathway",
      kicker: "Future readiness",
      summary:
        "Young people learn discipline, agriculture, logistics, teamwork, and confidence.",
      why:
        "A stronger city begins with prepared young people and practical pathways.",
      points: ["Hands-on learning", "Leadership habits", "Career exposure"],
      cta: "Get Involved",
      image: images.youth,
      action: "connect",
    },
    {
      id: "journey-partners",
      title: "Partners Pathway",
      kicker: "Shared impact",
      summary:
        "Partners help scale food access, workforce development, land use, education, and community outcomes.",
      why:
        "The vision grows faster when schools, sponsors, and institutions align.",
      points: ["Schools", "Sponsors", "Civic collaboration"],
      cta: "Partner With Us",
      image: images.partners,
      action: "connect",
    },
  ];

  const proof: ProofCard[] = [
    {
      title: "In Production",
      desc:
        "Seedlings, produce, regenerative growing systems, and seasonal expansion are underway.",
      img: images.production,
      btn: "View Activity",
    },
    {
      title: "Buy Local",
      desc:
        "Marketplace access creates direct support for local farming and community food systems.",
      img: images.buyLocal,
      btn: "Enter Marketplace",
    },
    {
      title: "Upcoming Events",
      desc:
        "Tours, workshops, markets, and farm experiences help people engage with the land.",
      img: images.events,
      btn: "View Events",
    },
    {
      title: "Growing Together",
      desc:
        "Partnerships, education, volunteers, and shared opportunities continue to expand.",
      img: images.community,
      btn: "See Partners",
    },
  ];

  const handleJourney = (action: JourneyCard["action"]) => {
    if (action === "marketplace") openMarketplace();
    if (action === "history") goTo("history");
    if (action === "connect") goTo("connect");
    if (action === "happening") goTo("happening");
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#1f2d1f]">
      <header className="sticky top-0 z-50 border-b border-[#d9ddcf] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-semibold">Bronson Family Farm</h1>
            <p className="text-xs uppercase tracking-[0.22em] text-[#577053]">
              Regenerative Farm Ecosystem
            </p>
          </div>

          <div className="flex gap-2">
            {["EN", "ES", "TL", "FR", "HE"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1 text-sm ${
                  lang === l
                    ? "bg-[#244b2d] text-white"
                    : "border border-[#cfd6c4] bg-white text-[#244b2d]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src="/images/SAM_0249.JPG"
          alt="Aerial view of Bronson Family Farm"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white">
              {copy.heroTag}
            </p>

            <h2 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
              {copy.heroTitle}
            </h2>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/90">
              {copy.heroDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => goTo("pathways")}
                className="rounded-2xl bg-[#2e6a3b] px-7 py-3 text-white"
              >
                {copy.enter}
              </button>

              <button
                onClick={() => goTo("pathways")}
                className="rounded-2xl border border-white px-7 py-3 text-white"
              >
                {copy.explore}
              </button>
            </div>

            <p className="mt-6 text-sm text-white/80">
              Live language view: {languageNames[lang]}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
