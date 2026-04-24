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

  const images = {
    hero: "/GrowArea.jpg",
    guest: "/GrowArea2.jpg",
    customer: "/SAM_0225.JPG",
    marketplace: "/SAM_0249.JPG",
    grower: "/SAM_0238.JPG",
    value: "/SAM_0226.JPG",
    youth: "/SAM_0222.JPG",
    partner: "/SAM_0223.JPG",
    proof1: "/SAM_0229.JPG",
    proof2: "/SAM_0255.JPG",
    proof3: "/SAM_0257.JPG",
    footer: "/SAM_0249.JPG",
  };

  const copy = {
    EN: {
      heroTitle:
        "A Living Teaching Environment Where Food, Work, and Community Grow Together.",
      heroText:
        "Bronson Family Farm transforms historic land into a regional ecosystem for food sustainability, workforce development, marketplace opportunity, and community renewal.",
      enter: "Enter the Experience",
      shop: "Enter Marketplace",
    },
    ES: {
      heroTitle:
        "Un entorno vivo de enseñanza donde la comida, el trabajo y la comunidad crecen juntos.",
      heroText:
        "Bronson Family Farm transforma tierra histórica en un ecosistema regional para alimentos, trabajo y renovación comunitaria.",
      enter: "Entrar",
      shop: "Mercado",
    },
    TL: {
      heroTitle:
        "Isang buhay na kapaligiran ng pagkatuto kung saan sabay lumalago ang pagkain, trabaho, at komunidad.",
      heroText:
        "Binabago ng Bronson Family Farm ang makasaysayang lupa bilang ecosystem para sa pagkain at oportunidad.",
      enter: "Pumasok",
      shop: "Marketplace",
    },
    FR: {
      heroTitle:
        "Un environnement vivant d’apprentissage où alimentation, travail et communauté grandissent ensemble.",
      heroText:
        "Bronson Family Farm transforme un terrain historique en écosystème régional.",
      enter: "Entrer",
      shop: "Marché",
    },
  }[lang];

  const paths: Path[] = [
    {
      key: "guest",
      title: "Guest Experience",
      subtitle: "Start Here",
      image: images.guest,
      story:
        "Everyone begins here. Discover the story of historic land becoming a place of food, opportunity, and renewal.",
      community:
        "Creates a shared understanding of why this ecosystem matters.",
      personal:
        "You understand the vision and where you belong in it.",
      resources: [
        "Land Story",
        "Tours",
        "Events",
        "Volunteer Opportunities",
        "Photo Gallery",
        "Choose Role",
      ],
    },
    {
      key: "customer",
      title: "Customer Opportunity",
      subtitle: "Fresh Food & Health",
      image: images.customer,
      story:
        "Fresh local food improves quality of life and strengthens local agriculture.",
      community:
        "Supports growers, food access, and healthier families.",
      personal:
        "You gain trusted fresh products and reasons to return.",
      resources: [
        "Fresh Produce",
        "Bubble Babies™",
        "Recipes",
        "SNAP Access",
        "Seasonal Updates",
        "Pickup Options",
      ],
    },
    {
      key: "marketplace",
      title: "Marketplace Opportunity",
      subtitle: "Regional Food Sustainability",
      image: images.marketplace,
      story:
        "The marketplace turns support into action and helps keep food dollars local.",
      community:
        "Strengthens growers, supply chains, and regional resilience.",
      personal:
        "You directly help build a stronger local food system.",
      resources: [
        "GrownBy Store",
        "Local Products",
        "Seasonal Offers",
        "Grower Goods",
        "Fresh This Week",
        "Easy Checkout",
      ],
    },
    {
      key: "grower",
      title: "Grower Opportunity",
      subtitle: "Produce & Prosper",
      image: images.grower,
      story:
        "Growers need visibility, markets, and collaboration—not just land.",
      community:
        "More growers means more local food and stronger neighborhoods.",
      personal:
        "You gain opportunity, buyers, and ecosystem support.",
      resources: [
        "Market Access",
        "Training",
        "Crop Planning",
        "Events",
        "Distribution",
        "Visibility",
      ],
    },
    {
      key: "value",
      title: "Value-Added Producer",
      subtitle: "Create More Value",
      image: images.value,
      story:
        "Raw ingredients can become higher-value products that grow local enterprise.",
      community:
        "Creates jobs, brands, and reduces waste.",
      personal:
        "You turn creativity into products and income.",
      resources: [
        "Product Ideas",
        "Brand Visibility",
        "Marketplace Access",
        "Packaging Concepts",
        "Seasonal Ingredients",
        "Growth Potential",
      ],
    },
    {
      key: "youth",
      title: "Youth Workforce Development",
      subtitle: "People Grow Here Too",
      image: images.youth,
      story:
        "The farm is a teaching environment where young people build readiness through real experience.",
      community:
        "Builds stronger future workers and healthier transitions to adulthood.",
      personal:
        "Participants gain confidence, habits, responsibility, and skills.",
      resources: [
        "Outdoor Learning",
        "Preparation Skills",
        "Teamwork",
        "Safety Habits",
        "Leadership Tasks",
        "Mentorship",
      ],
    },
    {
      key: "partner",
      title: "Partner Opportunity",
      subtitle: "Shared Impact",
      image: images.partner,
      story:
        "No single organization solves community challenges alone.",
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

  const endButtons = [
    {
      label: "Enter Marketplace",
      action: () => openMarketplace(),
    },
    {
      label: "Share With Others",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: "Bronson Family Farm",
            text: "Explore Bronson Family Farm",
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard");
        }
      },
    },
    {
      label: "Return Home",
      action: () => goTo("hero"),
    },
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
        id="hero"
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
              onClick={() => goTo("paths")}
              className="px-6 py-3 rounded-xl bg-green-700 hover:bg-green-800 font-semibold"
            >
              {copy.enter}
            </button>

            <button
              onClick={openMarketplace}
              className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-[#17301c] font-semibold"
            >
              {copy.shop}
            </button>
          </div>
        </div>
      </section>

      {/* Shared Story */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[4px] font-bold text-green-800 mb-3">
            Shared Purpose
          </p>
          <h3 className="text-3xl md:text-5xl font-semibold mb-6">
            Crops Grow Here. People Grow Here Too.
          </h3>
          <p className="text-lg leading-8 text-gray-700">
            This ecosystem connects land, food, work experience, local commerce,
            education, and community resilience into one living model for the
            Mahoning Valley.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section id="paths" className="px-6 py-20 bg-[#e7efe4]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[4px] font-bold text-green-800 mb-3">
              Opportunities
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
                  <h4 className="text-2xl font-semibold mb-3">{p.title}</h4>
                  <p className="text-gray-700 leading-7">{p.story}</p>
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
              Your Journey
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

              <div className="p-6 rounded-2xl bg-[#f7f4ec]">
                <h4 className="text-xl font-semibold mb-4">
                  Tools & Resources Available
                </h4>

                <div className="grid md:grid-cols-2 gap-3">
                  {activePath.resources.map((r) => (
                    <div
                      key={r}
                      className="bg-white rounded-xl px-4 py-3 font-semibold shadow-sm"
                    >
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              {/* Final destination */}
              <div className="p-6 rounded-2xl bg-green-900 text-white">
                <h4 className="text-xl font-semibold mb-4">
                  Your Next Decision
                </h4>

                <div className="grid md:grid-cols-3 gap-3">
                  {endButtons.map((b) => (
                    <button
                      key={b.label}
                      onClick={b.action}
                      className="rounded-xl bg-white text-[#17301c] px-4 py-3 font-semibold hover:bg-gray-200"
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="px-6 py-20 bg-[#e7efe4]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[4px] font-bold text-green-800 mb-3">
              Reasons to Return
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold">
              This Ecosystem Is Active and Growing
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                img: images.proof1,
                title: "Fresh This Week",
                text: "New produce, seedlings, and seasonal products.",
              },
              {
                img: images.proof2,
                title: "Upcoming Events",
                text: "Markets, workshops, tours, and community gatherings.",
              },
              {
                img: images.proof3,
                title: "Growing Impact",
                text: "More partners, more participation, more opportunity.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >
                <img
                  src={x.img}
                  alt={x.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-3">
                    {x.title}
                  </h4>
                  <p className="text-gray-700 leading-7">{x.text}</p>
                </div>
              </div>
            ))}
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
            {endButtons.map((b) => (
              <button
                key={b.label}
                onClick={b.action}
                className="rounded-xl bg-white text-[#17301c] px-4 py-3 font-semibold hover:bg-gray-200"
              >
                {b.label}
              </button>
            ))}
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
