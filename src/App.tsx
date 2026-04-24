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

    window.scrollTo({
      top: y,
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
          text: "Explore the Bronson Family Farm ecosystem demo.",
          url,
        });
      } catch {
        return;
      }
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
      enter: "Simulan",
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
        "Discover how historic land is becoming a place of food, opportunity, learning, and renewal.",
      community:
        "Guests help spread understanding, trust, and participation in the larger ecosystem.",
      personal:
        "You understand the vision, the purpose, and where you may belong in it.",
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
        "Fresh local food reconnects people to healthier choices, seasonal abundance, and nearby growers.",
      community:
        "Customers strengthen food access, keep dollars circulating locally, and support regional food sustainability.",
      personal:
        "You gain fresh products, seasonal options, nutrition awareness, and reasons to return.",
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
        "It supports growers, value-added producers, jobs, regional supply, and food resilience.",
      personal:
        "Every purchase helps build a stronger local food system while connecting you to fresh and seasonal products.",
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
        "Growers are entrepreneurs contributing food production to a larger regional ecosystem.",
      community:
        "More growers means more local food, stronger supply, regional resilience, and more opportunity.",
      personal:
        "You gain market access, visibility, collaboration, and support inside a larger system.",
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
        "This creates jobs, brands, less waste, stronger local commerce, and more reasons to shop locally.",
      personal:
        "You turn creativity, culture, ingredients, and skill into products, income, and marketplace presence.",
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
        "The farm is a teaching environment where readiness is built through real outdoor experience.",
      community:
        "Partner-sponsored youth gain structured participation that supports stronger future workers and healthier transitions into adulthood.",
      personal:
        "Participants practice preparation, safety, teamwork, confidence, responsibility, adaptability, and pride in effort.",
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
        "Organizations contribute resources, expertise, visibility, and support into one larger ecosystem.",
      community:
        "Partnership aligns resources so ideas become action and impact becomes visible.",
      personal:
        "Your organization gains a meaningful place to contribute, collaborate, and create measurable community benefit.",
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
      "Shows how land, food, people, history, and opportunity connect inside the ecosystem.",
    "Guided Tours":
      "Helps visitors experience the story, food purpose, opportunities, and marketplace journey.",
    Events:
      "Markets, workshops, tours, and gatherings create reasons for people to return.",
    "Volunteer Path":
      "A pathway for community members to support the ecosystem through service, events, growing, and outreach.",
    "Photo Gallery":
      "Visual proof of land, crops, people, progress, and participation.",
    "Choose Opportunity":
      "Helps each person find the role where they can benefit, contribute, or participate.",

    "Fresh Produce":
      "Locally grown seasonal food that connects customers to health, growers, and the marketplace.",
    "Bubble Babies™":
      "Seedling products that help families, customers, and growers begin growing food.",
    Recipes:
      "Turns produce into practical meals, nutrition education, and repeat healthy choices.",
    "SNAP Access":
      "Supports affordability, dignity, and access in the food purchasing experience.",
    "Pickup Info":
      "Helps customers understand how to receive orders and return for future purchases.",
    "Seasonal Updates":
      "Shows what is growing, what is fresh, and what is coming next.",

    "Fresh This Week":
      "Highlights available produce, seasonal products, and reasons to return to the marketplace.",
    "Local Growers":
      "Shows the food entrepreneurs supplying the ecosystem and strengthening the region.",
    "Seasonal Offers":
      "Rotating products tied to harvest cycles, local demand, and regional food availability.",
    "Easy Checkout":
      "Moves users from interest to purchase while keeping them connected to the ecosystem story.",
    "Support Local":
      "Each purchase helps sustain growers, producers, food access, and local dollars.",
    "Share Marketplace":
      "Allows users to invite others into the ecosystem and expand participation.",

    "Market Access":
      "Helps growers move from production into sales, visibility, and customer relationships.",
    Training:
      "Practical support that helps growers prepare, plan, and participate more effectively.",
    "Crop Planning":
      "Seasonal planning that supports production, timing, supply, and marketplace readiness.",
    Distribution:
      "Helps move local food from growers and producers toward customers and community need.",
    Visibility:
      "Helps growers and producers be seen by buyers, partners, and the community.",

    "Ingredient Sourcing":
      "Connects value-added producers to local crops, seasonal harvests, and ingredients that can become higher-value products.",
    "Packaging Concepts":
      "Helps producers think about shelf-ready, gift-ready, and market-ready presentation.",
    "Brand Story":
      "Supports producers in explaining what they make, why it matters, and how it connects to local food culture.",
    "Product Categories":
      "Shows examples such as sauces, preserves, baked goods, herb blends, honey products, prepared foods, and cultural food products.",
    "Marketplace Shelf":
      "Connects value-added products to the marketplace where customers can discover and purchase them.",
    "Seasonal Specials":
      "Creates return interest by featuring products tied to what is growing, harvested, or available now.",

    "Outdoor Learning":
      "Uses the farm environment to teach through real tasks, movement, changing weather, and visible results.",
    "Preparation Skills":
      "Teaches participants to dress for conditions, arrive ready, and take responsibility before work begins.",
    Safety:
      "Builds awareness of weather, footwear, gloves, hydration, tools, sun, mud, and changing outdoor conditions.",
    Teamwork:
      "Creates opportunities to communicate, cooperate, and complete shared responsibilities.",
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
            Everyone begins with the story of the land. This ecosystem connects
            food, work experience, local commerce, education, wellness, and
            community resilience into one living model.
          </p>

          <button
            onClick={() => goTo("food")}
            className="px-6 py-3 rounded-full bg-[#5f6f52] text-white font-semibold"
          >
            Continue to Food Purpose
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
              Food Is the Shared Foundation.
            </h3>

            <p className="text-lg leading-8 text-[#5b5a4e] mb-6">
              Food connects health, land, economy, families, culture, and
              sustainability.
            </p>

            <p className="text-lg leading-8 text-[#5b5a4e] mb-8">
              The marketplace helps local food move through the region while
              creating repeat reasons to return, purchase, share, and support
              what is growing.
            </p>

            <button
              onClick={() => goTo("paths")}
              className="px-6 py-3 rounded-full bg-[#5f6f52] text-white font-semibold"
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

      <section id="paths" className="scroll-mt-24 px-6 py-20 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[4px] font-bold text-[#5f6f52] mb-3">
              Guided Tour · Step 3
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold">
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
                className="bg-white rounded-3xl overflow-hidden text-left shadow hover:shadow-xl transition hover:-translate-y-1"
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

                  <h4 className="text-2xl font-semibold mb-3">{p.title}</h4>

                  <p className="text-[#5b5a4e] leading-7">{p.story}</p>
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
                <div key={title} className="bg-[#f4efe6] rounded-3xl p-6">
                  <h4 className="text-xl font-semibold mb-2">{title}</h4>
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
                      className="bg-white rounded-2xl px-4 py-3 text-left font-semibold hover:bg-[#efe6d7] transition"
                    >
                      {r}
                    </button>
                  ))}
                </div>

                {resource && (
                  <div className="mt-5 bg-white rounded-3xl p-5 border border-[#d8c3a5]">
                    <h5 className="font-semibold text-lg mb-2">{resource}</h5>

                    <p className="leading-7 text-[#5b5a4e]">
                      {resourceDetails[resource] ||
                        `${resource} helps this pathway move from interest into meaningful participation.`}
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
                  Final Step in This Pathway
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

            <p className="text-lg text-[#5b5a4e] max-w-3xl mx-auto leading-8">
              Every pathway leads here because the marketplace is where food
              sustainability becomes participation. Every local purchase helps
              support growers, value-added producers, regional food access, and
              the larger ecosystem.
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
                alt="Fresh produce"
                className="h-60 w-full rounded-3xl object-cover shadow-md"
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
              Share With Others
            </button>

            <button
              onClick={() => goTo("home")}
              className="px-4 py-3 rounded-full bg-white border font-semibold"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>

      <section
        id="partners"
        className="scroll-mt-24 px-6 py-16 bg-[#f9f6ef]"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[4px] font-bold text-[#5f6f52] mb-3">
            Partners & Participants
          </p>

          <h3 className="text-3xl md:text-4xl font-semibold">
            Collaboration Becomes Action
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {partners.map((p) => (
              <span
                key={p}
                className="px-5 py-3 rounded-full bg-[#f4efe6] border border-[#d8c3a5] font-semibold"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative px-6 py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: `url('${images.footer}')` }}
      >
        <div className="absolute inset-0 bg-[#243224]/85" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-semibold mb-5">
            Be Part of What’s Growing
          </h3>

          <p className="max-w-3xl mx-auto text-lg text-white/85 mb-10">
            Food sustainability. Opportunity. Education. Community renewal.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={openMarketplace}
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

          <p className="mt-10 text-white/75">
            Historic Lansdowne Airport Site • Youngstown, Ohio
          </p>

          <p className="mt-2 text-white/75">www.bronsonfamilyfarm.com</p>
        </div>
      </section>
    </div>
  );
}
