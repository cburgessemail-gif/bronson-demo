import React, { useMemo, useState } from "react";

type Lang = "EN" | "ES" | "TL" | "FR";
type PathKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "value"
  | "youth"
  | "partner";

type Path = {
  key: PathKey;
  title: string;
  subtitle: string;
  image: string;
  story: string;
  community: string;
  personal: string;
  resources: string[];
};

export default function App() {
  const [lang, setLang] = useState<Lang>("EN");
  const [active, setActive] = useState<PathKey>("guest");
  const [resource, setResource] = useState<string>("");

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 92;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const openMarketplace = () => {
    window.open(
      "https://grownby.com/farms/bronson-family-farm/shop",
      "_blank"
    );
  };

  const shareDemo = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Bronson Family Farm",
          text: "Explore the Bronson Family Farm ecosystem.",
          url,
        });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard.");
      } catch {
        alert(url);
      }
    }
  };

  const images = {
    hero: "/GrowArea.jpg",
    guest: "/GrowArea2.jpg",
    customer: "/SAM_0229.JPG",
    marketplace: "/SAM_0249.JPG",
    grower: "/SAM_0238.JPG",
    value: "/SAM_0226.JPG",
    youth: "/SAM_0222.JPG",
    partner: "/SAM_0257.JPG",

    produce1: "/SAM_0225.JPG",
    produce2: "/SAM_0229.JPG",
    produce3: "/SAM_0249.JPG",
    produce4: "/SAM_0226.JPG",
    produce5: "/SAM_0238.JPG",
    produce6: "/SAM_0255.JPG",

    footer: "/GrowArea2.jpg",
  };

  const copy = {
    EN: {
      heroTitle:
        "A Living Teaching Environment Where Food, Work, and Community Grow Together.",
      heroText:
        "Bronson Family Farm transforms historic land into a regional ecosystem for food sustainability, workforce development, marketplace opportunity, and community renewal.",
      enter: "Start Guided Tour",
      shop: "Enter Marketplace",
    },
    ES: {
      heroTitle:
        "Un entorno vivo donde la comida, el trabajo y la comunidad crecen juntos.",
      heroText:
        "Bronson Family Farm transforma tierra histórica en un ecosistema regional de alimentos, trabajo y oportunidad.",
      enter: "Comenzar Tour",
      shop: "Mercado",
    },
    TL: {
      heroTitle:
        "Isang buhay na kapaligiran kung saan sabay lumalago ang pagkain, trabaho, at komunidad.",
      heroText:
        "Binabago ng Bronson Family Farm ang makasaysayang lupa bilang ecosystem para sa pagkain at oportunidad.",
      enter: "Simulan ang Tour",
      shop: "Marketplace",
    },
    FR: {
      heroTitle:
        "Un environnement vivant où alimentation, travail et communauté grandissent ensemble.",
      heroText:
        "Bronson Family Farm transforme un terrain historique en écosystème régional pour l’alimentation, le travail et l’opportunité.",
      enter: "Commencer",
      shop: "Marché",
    },
  }[lang];

  const paths: Path[] = [
    {
      key: "guest",
      title: "Guest Experience",
      subtitle: "Everyone Starts Here",
      image: images.guest,
      story:
        "Discover the story of historic land becoming a place of food, opportunity, teaching, and renewal.",
      community:
        "The guest experience creates shared understanding and helps the community see why this ecosystem matters.",
      personal:
        "You understand the vision, the land, the purpose, and where you may belong in the ecosystem.",
      resources: [
        "Land Story",
        "Guided Tours",
        "Events",
        "Volunteer Path",
        "Photo Gallery",
        "Choose Opportunity",
      ],
    },
    {
      key: "customer",
      title: "Customer Opportunity",
      subtitle: "Fresh Food & Health",
      image: images.customer,
      story:
        "Fresh local food improves quality of life and reconnects families to what is grown nearby.",
      community:
        "Customer participation keeps food dollars local, supports growers, and strengthens food access.",
      personal:
        "You gain fresh products, seasonal choices, nutrition awareness, and a reason to return.",
      resources: [
        "Fresh Produce",
        "Bubble Babies™",
        "Recipes",
        "SNAP Access",
        "Pickup Info",
        "Seasonal Updates",
      ],
    },
    {
      key: "marketplace",
      title: "Marketplace Opportunity",
      subtitle: "Regional Food Sustainability",
      image: images.marketplace,
      story:
        "The marketplace turns community support into action by moving fresh food, grower products, and local dollars through the region.",
      community:
        "It strengthens regional food sustainability, supports local growers, and reduces dependence on distant systems.",
      personal:
        "Every purchase helps build a stronger local food system while giving you access to fresh and seasonal products.",
      resources: [
        "Fresh This Week",
        "Local Growers",
        "Seasonal Offers",
        "Easy Checkout",
        "Support Local",
        "Share Marketplace",
      ],
    },
    {
      key: "grower",
      title: "Grower Opportunity",
      subtitle: "Produce & Prosper",
      image: images.grower,
      story:
        "Growers need visibility, markets, shared learning, and practical support to strengthen local production.",
      community:
        "More growers means more local food, stronger supply, and greater resilience for the region.",
      personal:
        "You gain a pathway to market access, collaboration, visibility, and ecosystem support.",
      resources: [
        "Market Access",
        "Training",
        "Crop Planning",
        "Distribution",
        "Visibility",
        "Events",
      ],
    },
    {
      key: "value",
      title: "Value-Added Producer",
      subtitle: "Create More Value",
      image: images.value,
      story:
        "Value-added producers turn local ingredients into shelf-ready, gift-ready, meal-ready, and specialty products.",
      community:
        "This creates jobs, brands, reduced waste, stronger local enterprise, and more reasons to shop locally.",
      personal:
        "You can turn creativity, culture, and ingredients into products, income, and marketplace participation.",
      resources: [
        "Packaging",
        "Branding",
        "Ingredients",
        "Marketplace Shelf",
        "Seasonal Ideas",
        "Growth Potential",
      ],
    },
    {
      key: "youth",
      title: "Youth Workforce Development",
      subtitle: "People Grow Here Too",
      image: images.youth,
      story:
        "The farm is a teaching environment where young people build readiness through real outdoor experience.",
      community:
        "Partner-referred youth gain structured participation that supports stronger future workers and healthier transitions into adulthood.",
      personal:
        "Participants practice preparation, safety, teamwork, confidence, responsibility, and adaptability in a real setting.",
      resources: [
        "Outdoor Learning",
        "Preparation Skills",
        "Safety",
        "Teamwork",
        "Leadership",
        "Mentorship",
      ],
    },
    {
      key: "partner",
      title: "Partner Opportunity",
      subtitle: "Shared Impact",
      image: images.partner,
      story:
        "No single organization solves food access, workforce development, health, education, and community renewal alone.",
      community:
        "Partnership aligns resources so ideas become action and impact becomes visible.",
      personal:
        "Your organization gains a meaningful way to contribute expertise, visibility, resources, and measurable benefit.",
      resources: [
        "Sponsorship",
        "Programs",
        "Visibility",
        "Collaboration",
        "Impact Metrics",
        "Community Reach",
      ],
    },
  ];

  const activePath = useMemo(
    () => paths.find((p) => p.key === active) || paths[0],
    [active]
  );

  const resourceDetails: Record<string, string> = {
    "Land Story":
      "Shows how the Historic Lansdowne Airport site is becoming a place of food, learning, work, and community renewal.",
    "Guided Tours":
      "Introduces visitors to the land, growing areas, marketplace purpose, and the larger ecosystem.",
    Events:
      "Connects guests to workshops, markets, tours, and community gatherings that create reasons to return.",
    "Volunteer Path":
      "Allows community members to support the farm through service, events, growing, and outreach.",
    "Photo Gallery":
      "Helps visitors see the land, crops, progress, and people behind the work.",
    "Choose Opportunity":
      "Guides each person toward the pathway where they can participate, benefit, or contribute.",
    "Fresh Produce":
      "Connects customers to seasonal food grown locally and available through the marketplace.",
    "Bubble Babies™":
      "Provides seedling rolls and growing starts that help families and growers begin producing food.",
    Recipes:
      "Turns fresh food into usable meals, nutrition education, and repeat healthy choices.",
    "SNAP Access":
      "Supports food access and purchasing dignity for eligible families.",
    "Pickup Info":
      "Helps customers understand how to receive orders and return for future purchases.",
    "Seasonal Updates":
      "Gives users a reason to come back and see what is fresh, growing, or available next.",
    "Fresh This Week":
      "Highlights produce and products currently available or coming soon.",
    "Local Growers":
      "Shows how growers are connected to customers and regional purchasing power.",
    "Seasonal Offers":
      "Creates recurring interest through changing products and seasonal abundance.",
    "Easy Checkout":
      "Moves users from interest to purchase without losing the story of the ecosystem.",
    "Support Local":
      "Shows how each purchase strengthens the regional food economy.",
    "Share Marketplace":
      "Allows users to invite others into the ecosystem and expand community participation.",
    "Market Access":
      "Helps growers move from production into sales opportunities.",
    Training:
      "Supports growers with practical knowledge, planning, and marketplace readiness.",
    "Crop Planning":
      "Helps growers think seasonally about production, timing, and market opportunity.",
    Distribution:
      "Connects local products to buyers and broader community food access.",
    Visibility:
      "Gives growers and partners a stronger presence inside the ecosystem.",
    Packaging:
      "Helps producers think about presentation, shelf readiness, and customer appeal.",
    Branding:
      "Supports value-added producers in communicating product identity and story.",
    Ingredients:
      "Connects producers to locally grown inputs and seasonal possibilities.",
    "Marketplace Shelf":
      "Shows where value-added products can appear in the buying experience.",
    "Seasonal Ideas":
      "Encourages producers to create products around harvest cycles and community demand.",
    "Growth Potential":
      "Shows how products can become income, brand development, and enterprise growth.",
    "Outdoor Learning":
      "Uses the farm environment to teach through movement, tasks, weather, and visible results.",
    "Preparation Skills":
      "Teaches participants to dress for weather, arrive ready, and take responsibility before work begins.",
    Safety:
      "Builds awareness of footwear, gloves, hydration, tools, weather, and changing outdoor conditions.",
    Teamwork:
      "Creates practical opportunities to communicate, cooperate, and complete shared responsibilities.",
    Leadership:
      "Allows participants to practice initiative, reliability, problem-solving, and pride in effort.",
    Mentorship:
      "Connects participants to guidance, encouragement, expectations, and growth.",
    Sponsorship:
      "Allows partners to support equipment, events, education, marketplace development, or workforce pathways.",
    Programs:
      "Connects partner missions to food access, workforce readiness, wellness, and community impact.",
    Collaboration:
      "Turns separate organizations into a shared ecosystem of action.",
    "Impact Metrics":
      "Helps partners see participation, outcomes, growth, and community value.",
    "Community Reach":
      "Extends the work through shared audiences, services, and trusted relationships.",
  };

  const partners = [
    "Farm & Family Alliance, Inc.",
    "Parker Farms",
    "City of Youngstown",
    "Jubilee Gardens Inc.",
    "Central State University",
    "Home Depot",
    "Gates Drone Services",
    "Petitti Garden Centers",
    "Elliott’s Garden Center",
    "Youngstown Area Jewish Foundation",
  ];

  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#243224] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#d9cfbf] bg-[#f9f6ef]/95 px-6 py-4 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#5f6f52]">
              Developed by Bronson Family Farm
            </p>
            <h1 className="text-2xl font-semibold tracking-wide md:text-3xl">
              Bronson Family Farm
            </h1>
          </div>

          <div className="flex gap-2">
            {(["EN", "ES", "TL", "FR"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  lang === l
                    ? "border-[#5f6f52] bg-[#5f6f52] text-white"
                    : "border-[#c8bea9] bg-white text-[#5f6f52] hover:border-[#5f6f52]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section
        id="home"
        className="scroll-mt-24 relative flex min-h-[88vh] items-center bg-cover bg-center"
        style={{ backgroundImage: `url('${images.hero}')` }}
      >
        <div className="absolute inset-0 bg-[#1f2d1f]/55" />

        <div className="relative z-10 max-w-5xl px-8 text-white md:px-16">
          <p className="mb-4 text-sm uppercase tracking-[4px]">
            Historic Lansdowne Airport Site | Youngstown, Ohio
          </p>

          <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
            {copy.heroTitle}
          </h2>

          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
            {copy.heroText}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => goTo("story")}
              className="rounded-full bg-[#d8c3a5] px-6 py-3 font-semibold text-[#243224] transition hover:bg-[#eadcc7]"
            >
              {copy.enter}
            </button>

            <button
              onClick={() => goTo("market")}
              className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#243224]"
            >
              {copy.shop}
            </button>
          </div>
        </div>
      </section>

      <section id="story" className="scroll-mt-24 bg-[#f9f6ef] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#5f6f52]">
            Guided Tour · Step 1
          </p>

          <h3 className="mb-6 text-3xl font-semibold md:text-5xl">
            Crops Grow Here. People Grow Here Too.
          </h3>

          <p className="mb-8 text-lg leading-8 text-[#5b5a4e]">
            Everyone begins with the story of the land. This ecosystem connects
            food, work experience, local commerce, education, wellness, and
            community resilience into one living model.
          </p>

          <button
            onClick={() => goTo("food")}
            className="rounded-full bg-[#5f6f52] px-6 py-3 font-semibold text-white transition hover:bg-[#4e5d43]"
          >
            Continue to Food Purpose
          </button>
        </div>
      </section>

      <section id="food" className="scroll-mt-24 bg-[#efe6d7] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#5f6f52]">
              Guided Tour · Step 2
            </p>

            <h3 className="mb-6 text-3xl font-semibold md:text-5xl">
              Food Is the Shared Foundation.
            </h3>

            <p className="mb-6 text-lg leading-8 text-[#5b5a4e]">
              Everyone enters the ecosystem through the same truth: food
              connects health, land, culture, work, commerce, and regional
              sustainability.
            </p>

            <p className="mb-8 text-lg leading-8 text-[#5b5a4e]">
              The marketplace helps local food move through the region while
              creating repeat reasons to return, purchase, share, and support
              what is growing.
            </p>

            <button
              onClick={() => goTo("paths")}
              className="rounded-full bg-[#5f6f52] px-6 py-3 font-semibold text-white transition hover:bg-[#4e5d43]"
            >
              Continue to Opportunities
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[images.produce1, images.produce2, images.produce3, images.produce4].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Fresh produce"
                  className="h-48 w-full rounded-3xl object-cover shadow-md"
                />
              )
            )}
          </div>
        </div>
      </section>

      <section id="paths" className="scroll-mt-24 bg-[#f4efe6] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#5f6f52]">
              Guided Tour · Step 3
            </p>

            <h3 className="text-3xl font-semibold md:text-4xl">
              Choose Your Opportunity in the Ecosystem
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#5b5a4e]">
              Each pathway continues the same journey: understand the purpose,
              see your role, explore useful resources, then arrive at the
              marketplace where participation becomes action.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paths.map((p) => (
              <button
                key={p.key}
                onClick={() => {
                  setActive(p.key);
                  setResource("");
                  goTo("journey");
                }}
                className="overflow-hidden rounded-3xl bg-[#fbf8f1] text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#5f6f52]">
                    {p.subtitle}
                  </p>

                  <h4 className="mb-3 text-2xl font-semibold">{p.title}</h4>

                  <p className="leading-7 text-[#5b5a4e]">{p.story}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-24 bg-[#f9f6ef] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src={activePath.image}
              alt={activePath.title}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#5f6f52]">
              Guided Tour · Step 4
            </p>

            <h3 className="mb-6 text-3xl font-semibold md:text-5xl">
              {activePath.title}
            </h3>

            <div className="space-y-5">
              <div className="rounded-3xl bg-[#f4efe6] p-6">
                <h4 className="mb-2 text-xl font-semibold">
                  Why This Matters
                </h4>
                <p className="leading-8 text-[#5b5a4e]">{activePath.story}</p>
              </div>

              <div className="rounded-3xl bg-[#f4efe6] p-6">
                <h4 className="mb-2 text-xl font-semibold">Community Value</h4>
                <p className="leading-8 text-[#5b5a4e]">
                  {activePath.community}
                </p>
              </div>

              <div className="rounded-3xl bg-[#f4efe6] p-6">
                <h4 className="mb-2 text-xl font-semibold">
                  What It Means to You
                </h4>
                <p className="leading-8 text-[#5b5a4e]">
                  {activePath.personal}
                </p>
              </div>

              <div className="rounded-3xl bg-[#f4efe6] p-6">
                <h4 className="mb-4 text-xl font-semibold">
                  Clickable Tools & Resources
                </h4>

                <div className="grid gap-3 md:grid-cols-2">
                  {activePath.resources.map((r) => (
                    <button
                      key={r}
                      onClick={() => setResource(r)}
                      className="rounded-2xl bg-white px-4 py-3 text-left font-semibold shadow-sm transition hover:bg-[#efe6d7]"
                    >
                      {r}
                    </button>
                  ))}
                </div>

                {resource && (
                  <div className="mt-5 rounded-3xl border border-[#d8c3a5] bg-white p-5">
                    <h5 className="mb-2 text-lg font-semibold">{resource}</h5>
                    <p className="leading-7 text-[#5b5a4e]">
                      {resourceDetails[resource] ||
                        `${resource} helps this pathway move from interest into meaningful participation.`}
                    </p>
                    <button
                      onClick={() => goTo("market")}
                      className="mt-4 rounded-full bg-[#5f6f52] px-5 py-2 font-semibold text-white transition hover:bg-[#4e5d43]"
                    >
                      Continue Toward Marketplace
                    </button>
                  </div>
                )}
              </div>

              <div className="rounded-3xl bg-[#5f6f52] p-6 text-white">
                <h4 className="mb-4 text-xl font-semibold">
                  Final Step in This Pathway
                </h4>

                <div className="grid gap-3 md:grid-cols-3">
                  <button
                    onClick={() => goTo("market")}
                    className="rounded-full bg-white px-4 py-3 font-semibold text-[#243224] hover:bg-[#efe6d7]"
                  >
                    Enter Marketplace
                  </button>

                  <button
                    onClick={shareDemo}
                    className="rounded-full bg-white px-4 py-3 font-semibold text-[#243224] hover:bg-[#efe6d7]"
                  >
                    Share With Others
                  </button>

                  <button
                    onClick={() => goTo("home")}
                    className="rounded-full bg-white px-4 py-3 font-semibold text-[#243224] hover:bg-[#efe6d7]"
                  >
                    Return Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="scroll-mt-24 bg-[#efe6d7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#5f6f52]">
              Guided Tour · Final Destination
            </p>

            <h3 className="mb-4 text-3xl font-semibold md:text-5xl">
              Marketplace
            </h3>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-[#5b5a4e]">
              Every pathway leads here because the marketplace is where food
              sustainability becomes participation. Every local purchase helps
              support growers, circulate dollars, reduce waste, and strengthen
              the regional food system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              images.produce1,
              images.produce2,
              images.produce3,
              images.produce4,
              images.produce5,
              images.produce6,
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl bg-white shadow-md"
              >
                <img
                  src={img}
                  alt="Fresh produce"
                  className="h-60 w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <button
              onClick={openMarketplace}
              className="rounded-full bg-[#5f6f52] px-4 py-3 font-semibold text-white hover:bg-[#4e5d43]"
            >
              Shop Marketplace
            </button>

            <button
              onClick={shareDemo}
              className="rounded-full border border-[#c8bea9] bg-white px-4 py-3 font-semibold hover:bg-[#f9f6ef]"
            >
              Share With Others
            </button>

            <button
              onClick={() => goTo("home")}
              className="rounded-full border border-[#c8bea9] bg-white px-4 py-3 font-semibold hover:bg-[#f9f6ef]"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-24 bg-[#f9f6ef] px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#5f6f52]">
            Partners & Participants
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[#d8c3a5] bg-[#f4efe6] px-5 py-3 font-semibold"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center px-6 py-20 text-white"
        style={{ backgroundImage: `url('${images.footer}')` }}
      >
        <div className="absolute inset-0 bg-[#243224]/85" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <h3 className="mb-5 text-3xl font-semibold md:text-5xl">
            Be Part of What’s Growing
          </h3>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/85">
            Food sustainability. Opportunity. Education. Community renewal.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <button
              onClick={openMarketplace}
              className="rounded-full bg-white px-4 py-3 font-semibold text-[#243224] hover:bg-[#efe6d7]"
            >
              Marketplace
            </button>

            <button
              onClick={shareDemo}
              className="rounded-full bg-white px-4 py-3 font-semibold text-[#243224] hover:bg-[#efe6d7]"
            >
              Share
            </button>

            <button
              onClick={() => goTo("home")}
              className="rounded-full bg-white px-4 py-3 font-semibold text-[#243224] hover:bg-[#efe6d7]"
            >
              Home
            </button>
          </div>

          <p className="mt-10 text-white/75">
            Historic Lansdowne Airport Site • Youngstown, Ohio
          </p>
          <p className="mt-2 text-white/75">www.bronsonfamilyfarm.com</p>
        </div>
      </section>
    </div>
  );
}
