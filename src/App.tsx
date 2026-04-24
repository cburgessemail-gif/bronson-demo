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
  const [resource, setResource] = useState("");

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 92;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
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
    hero: "/images/GrowArea.jpg",

    guest: "/images/SAM_0255.JPG",
    customer: "/images/SAM_0229.JPG",
    marketplace: "/images/SAM_0249.JPG",
    grower: "/images/SAM_0238.JPG",
    value: "/images/SAM_0226.JPG",
    youth: "/images/SAM_0222.JPG",
    partner: "/images/SAM_0257.JPG",

    produce1: "/images/SAM_0229.JPG",
    produce2: "/images/SAM_0249.JPG",
    produce3: "/images/SAM_0226.JPG",
    produce4: "/images/SAM_0238.JPG",
    produce5: "/images/SAM_0255.JPG",
    produce6: "/images/SAM_0225.JPG",

    footer: "/images/GrowArea.jpg",
  };

  const copy = {
    EN: {
      heroTitle:
        "A Living Teaching Environment Where Food, Work, and Community Grow Together.",
      heroText:
        "Bronson Family Farm transforms historic land into a regional ecosystem for food sustainability, entrepreneurship, workforce development, marketplace opportunity, and community renewal.",
      enter: "Start Guided Tour",
      shop: "Enter Marketplace",
    },
    ES: {
      heroTitle:
        "Un entorno vivo donde la comida, el trabajo y la comunidad crecen juntos.",
      heroText: "Un ecosistema regional de alimentos y oportunidad.",
      enter: "Comenzar Tour",
      shop: "Mercado",
    },
    TL: {
      heroTitle:
        "Isang buhay na kapaligiran kung saan sabay lumalago ang pagkain, trabaho, at komunidad.",
      heroText: "Regional ecosystem para sa pagkain at oportunidad.",
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
        "Discover how the land is becoming a place of food, opportunity, learning, and renewal.",
      community:
        "Guests spread awareness, trust, and participation in the ecosystem.",
      personal:
        "You understand the vision and where you may belong in it.",
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
        "Fresh local food reconnects people to healthier choices and nearby growers.",
      community:
        "Customers strengthen food access and keep dollars circulating locally.",
      personal:
        "You gain fresh products, seasonal options, and reasons to return.",
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
        "The marketplace is where support becomes action and the ecosystem sustains itself.",
      community:
        "Supports growers, producers, jobs, and stronger regional supply.",
      personal:
        "Every purchase helps build a stronger local food system.",
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
      subtitle: "Food Entrepreneur",
      image: images.grower,
      story:
        "Growers are entrepreneurs contributing production to a larger ecosystem.",
      community:
        "More growers means more food resilience and more opportunity.",
      personal:
        "You gain market access, visibility, and support.",
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
      subtitle: "Creative Food Entrepreneur",
      image: images.value,
      story:
        "Value-added producers transform local ingredients into products that strengthen the ecosystem.",
      community:
        "Creates jobs, brands, less waste, and more reasons to shop local.",
      personal:
        "You turn creativity into products, income, and marketplace presence.",
      resources: [
        "Ingredient Sourcing",
        "Packaging Concepts",
        "Brand Story",
        "Product Categories",
        "Marketplace Shelf",
        "Seasonal Specials",
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
        "Partner-sponsored youth gain habits and confidence for future work.",
      personal:
        "Participants learn preparation, teamwork, safety, and responsibility.",
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
        "Organizations contribute resources into one larger ecosystem.",
      community:
        "Partnership creates measurable community benefit.",
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
    () => paths.find((p) => p.key === active) || paths[0],
    [active]
  );

  const resourceDetails: Record<string, string> = {
    "Land Story": "Shows how land, food, people, and opportunity connect.",
    "Guided Tours": "Helps visitors experience the ecosystem journey.",
    Events: "Markets, workshops, gatherings, and reasons to return.",
    "Volunteer Path": "A pathway to support the ecosystem through service.",
    "Photo Gallery": "Visual proof of land, crops, people, and progress.",
    "Choose Opportunity": "Find the role where you fit best.",

    "Fresh Produce": "Locally grown seasonal food available now.",
    "Bubble Babies™": "Seedling products helping people grow food.",
    Recipes: "Turns produce into practical healthy meals.",
    "SNAP Access": "Supports dignity and affordability.",
    "Pickup Info": "How customers receive orders.",
    "Seasonal Updates": "What is growing or available now.",

    "Fresh This Week": "Current produce and products available now.",
    "Local Growers": "Entrepreneurs supplying the ecosystem.",
    "Seasonal Offers": "Rotating reasons to return.",
    "Easy Checkout": "Smooth path from interest to purchase.",
    "Support Local": "Each purchase strengthens the region.",
    "Share Marketplace": "Invite others into the ecosystem.",

    "Market Access": "Pathway from growing to selling.",
    Training: "Knowledge that supports grower success.",
    "Crop Planning": "Seasonal strategy for stronger production.",
    Distribution: "Moving food where it is needed.",
    Visibility: "Being seen by buyers and partners.",

    "Ingredient Sourcing": "Connects producers to local ingredients.",
    "Packaging Concepts": "Shelf-ready, gift-ready presentation.",
    "Brand Story": "Explain what you make and why it matters.",
    "Product Categories":
      "Sauces, preserves, prepared foods, specialty goods.",
    "Marketplace Shelf": "Where products meet customers.",
    "Seasonal Specials": "Products tied to harvest cycles.",

    "Outdoor Learning": "Learning through real conditions and movement.",
    "Preparation Skills": "Dress, timing, readiness, responsibility.",
    Safety: "Weather, tools, hydration, awareness.",
    Teamwork: "Working together to complete tasks.",
    Leadership: "Initiative, trust, accountability.",
    Mentorship: "Guidance and growth.",

    Sponsorship: "Support equipment, programs, or events.",
    Programs: "Mission-aligned initiatives.",
    Collaboration: "Shared resources create greater outcomes.",
    "Impact Metrics": "Visible results and participation.",
    "Community Reach": "Broader audiences and stronger trust.",
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
      <header className="sticky top-0 z-50 bg-[#f9f6ef]/95 border-b border-[#d9cfbf] backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#5f6f52]">
              Developed by Bronson Family Farm
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Bronson Family Farm Ecosystem Demo
            </h1>
          </div>

          <div className="flex gap-2">
            {(["EN", "ES", "TL", "FR"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  lang === l
                    ? "bg-[#5f6f52] text-white border-[#5f6f52]"
                    : "bg-white border-[#d9cfbf] text-[#5f6f52]"
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
        className="scroll-mt-24 min-h-[88vh] relative flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url('${images.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-8 md:px-16 max-w-5xl text-white">
          <p className="uppercase tracking-[4px] text-sm mb-4">
            Historic Lansdowne Airport Site • Youngstown, Ohio
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            {copy.heroTitle}
          </h2>

          <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed">
            {copy.heroText}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => goTo("story")}
              className="px-6 py-3 rounded-full bg-[#d8c3a5] text-[#243224] font-semibold"
            >
              {copy.enter}
            </button>

            <button
              onClick={() => goTo("market")}
              className="px-6 py-3 rounded-full border border-white font-semibold"
            >
              {copy.shop}
            </button>
          </div>
        </div>
      </section>

      <section id="story" className="scroll-mt-24 px-6 py-20 bg-[#f9f6ef]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[4px] font-bold text-[#5f6f52] mb-3">
            Guided Tour · Step 1
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold mb-6">
            Crops Grow Here. People Grow Here Too.
          </h3>

          <p className="text-lg leading-8 text-[#5b5a4e] mb-8">
            This ecosystem connects land, food, entrepreneurship,
            workforce readiness, wellness, and community renewal.
          </p>

          <button
            onClick={() => goTo("food")}
            className="px-6 py-3 rounded-full bg-[#5f6f52] text-white font-semibold"
          >
            Continue
          </button>
        </div>
      </section>

      <section id="food" className="scroll-mt-24 px-6 py-20 bg-[#efe6d7]">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[4px] font-bold text-[#5f6f52] mb-3">
              Guided Tour · Step 2
            </p>

            <h3 className="text-3xl md:text-5xl font-semibold mb-6">
              Food Is the Shared Foundation
            </h3>

            <p className="text-lg leading-8 text-[#5b5a4e] mb-8">
              Food connects health, land, economy, families, culture,
              and sustainability.
            </p>

            <button
              onClick={() => goTo("paths")}
              className="px-6 py-3 rounded-full bg-[#5f6f52] text-white font-semibold"
            >
              Continue
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[images.produce1, images.produce2, images.produce3, images.produce4].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Produce"
                  className="h-48 w-full rounded-3xl object-cover"
                />
              )
            )}
          </div>
        </div>
      </section>

      <section id="paths" className="scroll-mt-24 px-6 py-20 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[4px] font-bold text-[#5f6f52] mb-3">
              Guided Tour · Step 3
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
                className="bg-white rounded-3xl overflow-hidden text-left shadow hover:shadow-xl"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm font-bold uppercase text-[#5f6f52] mb-2">
                    {p.subtitle}
                  </p>

                  <h4 className="text-2xl font-semibold mb-3">
                    {p.title}
                  </h4>

                  <p className="text-[#5b5a4e] leading-7">
                    {p.story}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-24 px-6 py-20 bg-[#f9f6ef]">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
            <img
              src={activePath.image}
              alt={activePath.title}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[4px] font-bold text-[#5f6f52] mb-3">
              Guided Tour · Step 4
            </p>

            <h3 className="text-3xl md:text-5xl font-semibold mb-6">
              {activePath.title}
            </h3>

            <div className="space-y-5">
              {[
                ["Why This Matters", activePath.story],
                ["Community Value", activePath.community],
                ["What It Means to You", activePath.personal],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="bg-[#f4efe6] rounded-3xl p-6"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    {title}
                  </h4>
                  <p className="leading-8 text-[#5b5a4e]">{text}</p>
                </div>
              ))}

              <div className="bg-[#f4efe6] rounded-3xl p-6">
                <h4 className="text-xl font-semibold mb-4">
                  Clickable Tools & Resources
                </h4>

                <div className="grid md:grid-cols-2 gap-3">
                  {activePath.resources.map((r) => (
                    <button
                      key={r}
                      onClick={() => setResource(r)}
                      className="bg-white rounded-2xl px-4 py-3 text-left font-semibold"
                    >
                      {r}
                    </button>
                  ))}
                </div>

                {resource && (
                  <div className="mt-5 bg-white rounded-3xl p-5 border border-[#d8c3a5]">
                    <h5 className="font-semibold text-lg mb-2">
                      {resource}
                    </h5>

                    <p className="leading-7 text-[#5b5a4e]">
                      {resourceDetails[resource]}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => goTo("market")}
                        className="px-5 py-2 rounded-full bg-[#5f6f52] text-white font-semibold"
                      >
                        Continue to Marketplace
                      </button>

                      <button
                        onClick={shareDemo}
                        className="px-5 py-2 rounded-full bg-white border"
                      >
                        Share
                      </button>

                      <button
                        onClick={() => goTo("paths")}
                        className="px-5 py-2 rounded-full bg-white border"
                      >
                        Choose Another
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-[#5f6f52] rounded-3xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-4">
                  Final Step
                </h4>

                <div className="grid md:grid-cols-3 gap-3">
                  <button
                    onClick={() => goTo("market")}
                    className="bg-white text-[#243224] rounded-full px-4 py-3 font-semibold"
                  >
                    Marketplace
                  </button>

                  <button
                    onClick={shareDemo}
                    className="bg-white text-[#243224] rounded-full px-4 py-3 font-semibold"
                  >
                    Share
                  </button>

                  <button
                    onClick={() => goTo("home")}
                    className="bg-white text-[#243224] rounded-full px-4 py-3 font-semibold"
                  >
                    Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="scroll-mt-24 px-6 py-20 bg-[#efe6d7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[4px] font-bold text-[#5f6f52] mb-3">
              Guided Tour · Final Destination
            </p>

            <h3 className="text-3xl md:text-5xl font-semibold mb-4">
              Marketplace
            </h3>

            <p className="text-lg text-[#5b5a4e] max-w-3xl mx-auto">
              Every journey ends where support becomes action.
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
              <img
                key={i}
                src={img}
                alt="Produce"
                className="h-60 w-full rounded-3xl object-cover"
              />
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <button
              onClick={openMarketplace}
              className="px-4 py-3 rounded-full bg-[#5f6f52] text-white font-semibold"
            >
              Shop Marketplace
            </button>

            <button
              onClick={shareDemo}
              className="px-4 py-3 rounded-full bg-white border font-semibold"
            >
              Share
            </button>

            <button
              onClick={() => goTo("home")}
              className="px-4 py-3 rounded-full bg-white border font-semibold"
            >
              Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
