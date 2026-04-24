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
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
          text: "Explore Bronson Family Farm",
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
    customer: "/SAM_0225.JPG",
    marketplace: "/SAM_0249.JPG",
    grower: "/SAM_0238.JPG",
    value: "/SAM_0226.JPG",
    youth: "/SAM_0222.JPG",
    partner: "/SAM_0223.JPG",

    produce1: "/SAM_0229.JPG",
    produce2: "/SAM_0255.JPG",
    produce3: "/SAM_0257.JPG",
    produce4: "/SAM_0249.JPG",
    produce5: "/SAM_0225.JPG",
    produce6: "/SAM_0238.JPG",

    footer: "/SAM_0249.JPG",
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
      heroText: "Un ecosistema regional de alimentos y oportunidad.",
      enter: "Comenzar",
      shop: "Mercado",
    },
    TL: {
      heroTitle:
        "Isang buhay na kapaligiran kung saan sabay lumalago ang pagkain, trabaho, at komunidad.",
      heroText: "Isang regional ecosystem para sa pagkain at oportunidad.",
      enter: "Simulan",
      shop: "Marketplace",
    },
    FR: {
      heroTitle:
        "Un environnement vivant où alimentation, travail et communauté grandissent ensemble.",
      heroText: "Un écosystème régional pour l’alimentation et l’opportunité.",
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
        "Discover the story of historic land becoming a place of food, opportunity, and renewal.",
      community:
        "Creates shared understanding and pride in what is being built here.",
      personal:
        "You understand the vision and where you belong in it.",
      resources: [
        "Land Story",
        "Tours",
        "Events",
        "Volunteer",
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
        "Fresh local food improves quality of life and supports growers.",
      community:
        "Keeps food dollars local and helps healthier families.",
      personal:
        "You gain trusted fresh products and reasons to return.",
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
      subtitle: "Regional Sustainability",
      image: images.marketplace,
      story:
        "The marketplace turns support into action.",
      community:
        "Strengthens growers, local supply chains, and resilience.",
      personal:
        "You directly help build a stronger food system.",
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
        "Growers need visibility, markets, and collaboration.",
      community:
        "More growers means more local food.",
      personal:
        "You gain opportunity, buyers, and ecosystem support.",
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
        "Turn local ingredients into higher-value products.",
      community:
        "Creates jobs, brands, and reduces waste.",
      personal:
        "You turn creativity into products and income.",
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
        "The farm is a teaching environment where readiness is built through real experience.",
      community:
        "Builds stronger future workers.",
      personal:
        "Participants gain confidence, habits, responsibility, and skills.",
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
        "No single organization solves challenges alone.",
      community:
        "Partnership turns resources into measurable impact.",
      personal:
        "Your organization gains a meaningful place to contribute.",
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
    () => paths.find((p) => p.key === active)!,
    [active]
  );

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
    <div className="min-h-screen bg-[#f7f4ec] text-[#17301c] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div>
          <p className="text-xs font-bold tracking-[4px] uppercase text-green-800">
            Developed by Bronson Family Farm
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Bronson Family Farm
          </h1>
        </div>

        <div className="flex gap-2">
          {(["EN", "ES", "TL", "FR"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-full border text-sm ${
                lang === l
                  ? "bg-green-800 text-white border-green-800"
                  : "bg-white text-green-800 border-gray-300"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[88vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url('${images.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-8 md:px-16 max-w-5xl text-white">
          <p className="uppercase tracking-[4px] text-sm mb-4">
            Historic Lansdowne Airport Site | Youngstown, Ohio
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            {copy.heroTitle}
          </h2>

          <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-8">
            {copy.heroText}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => goTo("story")}
              className="px-6 py-3 rounded-xl bg-green-700 hover:bg-green-800 font-semibold"
            >
              {copy.enter}
            </button>

            <button
              onClick={() => goTo("market")}
              className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-[#17301c] font-semibold"
            >
              {copy.shop}
            </button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[4px] font-bold text-green-800 mb-3">
            Guided Tour · Step 1
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold mb-6">
            Crops Grow Here. People Grow Here Too.
          </h3>

          <p className="text-lg leading-8 text-gray-700 mb-8">
            This ecosystem connects land, food, work experience, commerce,
            education, and community resilience into one living model.
          </p>

          <button
            onClick={() => goTo("paths")}
            className="px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800"
          >
            Continue Tour
          </button>
        </div>
      </section>

      {/* Opportunities */}
      <section id="paths" className="px-6 py-20 bg-[#e7efe4]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[4px] font-bold text-green-800 mb-3">
              Guided Tour · Step 2
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold">
              Choose Your Opportunity in the Ecosystem
            </h3>
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
                className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden text-left"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm uppercase font-bold text-green-700 mb-2">
                    {p.subtitle}
                  </p>

                  <h4 className="text-2xl font-semibold mb-3">
                    {p.title}
                  </h4>

                  <p className="text-gray-700 leading-7">
                    {p.story}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={activePath.image}
              alt={activePath.title}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[4px] font-bold text-green-800 mb-3">
              Guided Tour · Step 3
            </p>

            <h3 className="text-3xl md:text-5xl font-semibold mb-6">
              {activePath.title}
            </h3>

            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-[#f7f4ec]">
                <h4 className="text-xl font-semibold mb-2">
                  Why This Matters
                </h4>
                <p className="leading-8 text-gray-700">
                  {activePath.story}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f7f4ec]">
                <h4 className="text-xl font-semibold mb-2">
                  Community Value
                </h4>
                <p className="leading-8 text-gray-700">
                  {activePath.community}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f7f4ec]">
                <h4 className="text-xl font-semibold mb-2">
                  What It Means to You
                </h4>
                <p className="leading-8 text-gray-700">
                  {activePath.personal}
                </p>
              </div>

              {/* Resources */}
              <div className="p-6 rounded-2xl bg-[#f7f4ec]">
                <h4 className="text-xl font-semibold mb-4">
                  Clickable Tools & Resources
                </h4>

                <div className="grid md:grid-cols-2 gap-3">
                  {activePath.resources.map((r) => (
                    <button
                      key={r}
                      onClick={() => setResource(r)}
                      className="bg-white rounded-xl px-4 py-3 font-semibold shadow-sm text-left hover:bg-green-50"
                    >
                      {r}
                    </button>
                  ))}
                </div>

                {resource && (
                  <div className="mt-5 rounded-xl bg-white p-5 border">
                    <h5 className="font-semibold text-lg mb-2">
                      {resource}
                    </h5>
                    <p className="text-gray-700 leading-7">
                      {resource} is part of the {activePath.title} pathway and
                      helps users move forward with real opportunity, support,
                      and participation.
                    </p>
                  </div>
                )}
              </div>

              {/* Final CTA */}
              <div className="p-6 rounded-2xl bg-green-900 text-white">
                <h4 className="text-xl font-semibold mb-4">
                  Final Step
                </h4>

                <div className="grid md:grid-cols-3 gap-3">
                  <button
                    onClick={() => goTo("market")}
                    className="rounded-xl bg-white text-[#17301c] px-4 py-3 font-semibold hover:bg-gray-200"
                  >
                    Enter Marketplace
                  </button>

                  <button
                    onClick={shareDemo}
                    className="rounded-xl bg-white text-[#17301c] px-4 py-3 font-semibold hover:bg-gray-200"
                  >
                    Share With Others
                  </button>

                  <button
                    onClick={() => goTo("home")}
                    className="rounded-xl bg-white text-[#17301c] px-4 py-3 font-semibold hover:bg-gray-200"
                  >
                    Return Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section id="market" className="px-6 py-20 bg-[#e7efe4]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[4px] font-bold text-green-800 mb-3">
              Guided Tour · Final Destination
            </p>

            <h3 className="text-3xl md:text-5xl font-semibold mb-4">
              Marketplace
            </h3>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every local purchase helps strengthen regional food sustainability.
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
                className="overflow-hidden rounded-2xl bg-white shadow"
              >
                <img
                  src={img}
                  alt="Produce"
                  className="h-60 w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <button
              onClick={openMarketplace}
              className="rounded-xl bg-green-700 text-white px-4 py-3 font-semibold hover:bg-green-800"
            >
              Shop Marketplace
            </button>

            <button
              onClick={shareDemo}
              className="rounded-xl bg-white px-4 py-3 font-semibold border hover:bg-gray-100"
            >
              Share With Others
            </button>

            <button
              onClick={() => goTo("home")}
              className="rounded-xl bg-white px-4 py-3 font-semibold border hover:bg-gray-100"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[4px] font-bold text-green-800 mb-3">
            Partners & Participants
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded-full bg-[#f7f4ec] border px-5 py-3 font-semibold"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section
        className="relative px-6 py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: `url('${images.footer}')` }}
      >
        <div className="absolute inset-0 bg-[#17301c]/85" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <h3 className="text-3xl md:text-5xl font-semibold mb-5">
            Be Part of What’s Growing
          </h3>

          <p className="max-w-3xl mx-auto text-lg text-white/85 mb-10">
            Food sustainability. Opportunity. Education. Community renewal.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <button
              onClick={openMarketplace}
              className="rounded-xl bg-white text-[#17301c] px-4 py-3 font-semibold hover:bg-gray-200"
            >
              Marketplace
            </button>

            <button
              onClick={shareDemo}
              className="rounded-xl bg-white text-[#17301c] px-4 py-3 font-semibold hover:bg-gray-200"
            >
              Share
            </button>

            <button
              onClick={() => goTo("home")}
              className="rounded-xl bg-white text-[#17301c] px-4 py-3 font-semibold hover:bg-gray-200"
            >
              Home
            </button>
          </div>

          <p className="mt-10 text-white/75">
            Historic Lansdowne Airport Site • Youngstown, Ohio
          </p>
          <p className="mt-2 text-white/75">
            www.bronsonfamilyfarm.com
          </p>
        </div>
      </section>
    </div>
  );
}
