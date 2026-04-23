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
};

export default function App() {
  const [lang, setLang] = useState("EN");

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openMarketplace = () => {
    window.open("https://grownby.com/farms/bronson-family-farm/shop", "_blank");
  };

  const images = {
    hero: "/GrowArea.jpg",
    guest: "/GrowArea2.jpg",
    customer: "/SAM_0225.JPG",
    marketplace: "/SAM_0249.JPG",
    grower: "/SAM_0238.JPG",
    youth: "/SAM_0222.JPG",
    partners: "/SAM_0223.JPG",
    production: "/SAM_0226.JPG",
    buyLocal: "/SAM_0229.JPG",
    events: "/SAM_0255.JPG",
    community: "/SAM_0257.JPG",
    footer: "/SAM_0249.JPG",
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
      heroBtn1: "Enter the Ecosystem",
      heroBtn2: "Explore Pathways",
      trust:
        "Regenerative Agriculture • Youth Workforce • Local Food Access • Grower Opportunity • Community Legacy",
      alignmentTitle: "A vision strengthened through collaboration",
      alignmentDesc:
        "Bronson Family Farm connects land, food, workforce development, education, growers, families, and partnership through a living ecosystem rooted in opportunity and renewal.",
      pathwayTitle: "Choose Your Pathway Into the Ecosystem",
      pathwayDesc:
        "Every pathway is designed to create value, belonging, and a reason to return.",
      journeyTitle: "Every pathway leads somewhere meaningful",
      journeyDesc:
        "This is not a static website. It is a living invitation into purpose, participation, and possibility.",
      happeningTitle: "Happening Now at Bronson Family Farm",
      happeningDesc:
        "Real momentum is already taking place through growing activity, market access, partnerships, and community participation.",
      historyTitle: "A Historic Place With a Living Future",
      connectTitle: "Be Part of What’s Growing",
      connectDesc:
        "Fresh food. Opportunity. Renewal. A place where people, land, and purpose meet again.",
    }),
    [lang]
  );

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
        "Visitors are invited to understand the story of the land, the purpose of the farm, and the possibility of renewal.",
      why:
        "When people understand the mission, they become advocates, customers, volunteers, and supporters.",
      points: [
        "Historic site significance",
        "The meaning behind regenerative farming",
        "A place people want to revisit",
      ],
      cta: "See History",
      image: images.guest,
    },
    {
      id: "journey-customer",
      title: "Customer Pathway",
      kicker: "Healthy repeat engagement",
      summary:
        "Customers gain access to fresh food, seasonal offerings, and a more personal connection to where food comes from.",
      why:
        "Repeat customers create sustainability and strengthen community food access.",
      points: [
        "Fresh produce",
        "Healthy choices",
        "Farm-to-community connection",
      ],
      cta: "See What’s Growing",
      image: images.customer,
    },
    {
      id: "journey-marketplace",
      title: "Marketplace Pathway",
      kicker: "Convert interest into revenue",
      summary:
        "The marketplace creates real economic movement through direct sales, visibility, and digital access.",
      why:
        "Strong marketplaces help farms survive and communities thrive.",
      points: [
        "Direct purchasing",
        "Digital convenience",
        "Regional grower opportunity",
      ],
      cta: "Open Marketplace",
      image: images.marketplace,
    },
    {
      id: "journey-grower",
      title: "Grower Pathway",
      kicker: "Opportunity through participation",
      summary:
        "Growers connect to markets, shared learning, visibility, and future opportunity.",
      why:
        "Local growers are stronger when connected than when isolated.",
      points: [
        "Market access",
        "Shared ecosystem value",
        "Regional collaboration",
      ],
      cta: "Connect",
      image: images.grower,
    },
    {
      id: "journey-youth",
      title: "Youth Workforce Pathway",
      kicker: "Future readiness",
      summary:
        "Young people learn discipline, agriculture, logistics, responsibility, and confidence.",
      why:
        "A stronger city begins with prepared young people and real pathways.",
      points: [
        "Hands-on learning",
        "Leadership habits",
        "Career exposure",
      ],
      cta: "Get Involved",
      image: images.youth,
    },
    {
      id: "journey-partners",
      title: "Partners Pathway",
      kicker: "Shared impact",
      summary:
        "Partners help scale food access, workforce development, land use, education, and community outcomes.",
      why:
        "The vision grows faster when resources align around common good.",
      points: [
        "Schools and institutions",
        "Sponsors and donors",
        "Civic collaboration",
      ],
      cta: "Partner With Us",
      image: images.partners,
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
        "Tours, workshops, markets, and experiences help people engage with the land.",
      img: images.events,
      btn: "View Events",
    },
    {
      title: "Growing Together",
      desc:
        "Partnerships, education, volunteers, and shared opportunity continue to expand.",
      img: images.community,
      btn: "See Partners",
    },
  ];

  const partnerCards = [
    "City of Youngstown",
    "OSU Extension",
    "Flying High Inc.",
    "Julilee Gardens Inc.",
    "United Way",
    "Regional Partners",
  ];

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

      <section
        className="relative flex min-h-[90vh] items-center bg-cover bg-center"
        style={{ backgroundImage: `url('${images.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />

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
                {copy.heroBtn1}
              </button>

              <button
                onClick={() => goTo("pathways")}
                className="rounded-2xl border border-white px-7 py-3 text-white"
              >
                {copy.heroBtn2}
              </button>
            </div>

            <p className="mt-6 text-sm text-white/80">
              Live language view: {languageNames[lang]}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef2e7] px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#466146]">
        {copy.trust}
      </section>

      <section className="bg-[#f8f7f1] px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h3 className="text-3xl font-semibold">{copy.alignmentTitle}</h3>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#556255]">
            {copy.alignmentDesc}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {partnerCards.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#dde4d8] bg-white px-4 py-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#244b2d]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
