import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Globe,
  Users,
  ShoppingBasket,
  Tractor,
  Sprout,
  HeartHandshake,
  Briefcase,
  Landmark,
} from "lucide-react";

const EVENTBRITE_URL = "https://www.eventbrite.com/e/1984126092554";
const GROWNBY_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const WEBSITE_URL = "https://www.bronsonfamilyfarm.com/";

const fallbackImage =
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80";

function FarmImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => setImageSrc(fallbackImage)}
    />
  );
}

const slides = [
  {
    id: "welcome",
    title: "Bronson Family Farm",
    subtitle:
      "A community-centered growers ecosystem rooted in health, food access, workforce development, and agritourism.",
    image: "/images/GrowArea.jpg",
  },
  {
    id: "history",
    title: "Historic Lansdowne Airport",
    subtitle:
      "A working airport transformed into a place-based agricultural ecosystem serving Youngstown and the Mahoning Valley.",
    image: "/images/Airport.jpg",
  },
  {
    id: "ecosystem",
    title: "The Ecosystem",
    subtitle:
      "The food moves — not the farmer. Growers connect to distribution, education, and opportunity through one coordinated system.",
    image: "/images/GrowArea2.jpg",
  },
];

const pathways = [
  {
    id: "guest",
    title: "Guest Experience",
    icon: <Landmark className="w-10 h-10" />,
    image: "/images/SAM_0214.JPG",
    description:
      "Walk the farm. Experience history, agriculture, wellness, youth engagement, growers markets, and future agritourism.",
    content: [
      "Historic airport property transformed into a growers ecosystem",
      "Future agritourism destination with camping, mini-golf, and family experiences",
      "Community events, demonstrations, and educational programming",
      "A guided place-based experience rooted in health and food accessibility",
    ],
  },
  {
    id: "customer",
    title: "Customer Pathway",
    icon: <ShoppingBasket className="w-10 h-10" />,
    image: "/images/Produce.jpg",
    description:
      "Customers access fresh, chemical-free food through a coordinated system focused on nutrition, convenience, and community health.",
    content: [
      "Fresh, chemical-free vegetables and herbs",
      "Food accessibility for families, seniors, and community members",
      "Simple online shopping through Bronson Family Farm’s GrownBy store",
      "The food moves through the ecosystem so customers do not have to chase multiple sources",
    ],
  },
  {
    id: "marketplace",
    title: "Marketplace",
    icon: <Tractor className="w-10 h-10" />,
    image: "/images/Marketplace.jpg",
    description:
      "The marketplace connects growers, customers, tools, seedlings, supplies, education, and coordinated food distribution.",
    content: [
      "Growers supply market model",
      "Seedlings, tools, demonstrations, and growing support",
      "Regional grower coordination",
      "Distribution infrastructure for schools, organizations, businesses, and communities",
    ],
  },
  {
    id: "grower",
    title: "Grower Pathway",
    icon: <Sprout className="w-10 h-10" />,
    image: "/images/Grower.jpg",
    description:
      "Growers join a collaborative ecosystem with shared distribution, technical support, training, and market access.",
    content: [
      "Shared distribution opportunities",
      "Training and technical support",
      "Regional coordination",
      "Market access without traveling to multiple locations",
    ],
  },
  {
    id: "youth",
    title: "Youth Workforce",
    icon: <Briefcase className="w-10 h-10" />,
    image: "/images/Youth.jpg",
    description:
      "Youth participate in an outdoor workforce development experience focused on responsibility, agriculture, teamwork, and future readiness.",
    content: [
      "8-week workforce experience",
      "Hands-on agriculture and operations training",
      "Leadership and life skills development",
      "Career exposure through farming, food systems, and agritourism",
    ],
  },
  {
    id: "partners",
    title: "Partners & Community",
    icon: <HeartHandshake className="w-10 h-10" />,
    image: "/images/Partners.jpg",
    description:
      "Public, nonprofit, educational, grower, health, and community partners help strengthen the regional food system.",
    content: [
      "Schools, nonprofits, growers, and health organizations",
      "Workforce and educational collaborations",
      "Food accessibility partnerships",
      "Community-centered economic development",
    ],
  },
];

const languages = ["English", "Español", "Tagalog", "Italiano", "Français", "עברית"];

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedPathway, setSelectedPathway] = useState<any>(null);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const modalButtons = useMemo(() => {
    if (!selectedPathway) return null;

    if (selectedPathway.id === "customer") {
      return (
        <>
          <button
            onClick={() => window.open(GROWNBY_URL, "_blank")}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full"
          >
            Shop Fresh Food
          </button>

          <button
            onClick={() => setSelectedPathway(null)}
            className="border border-white px-8 py-4 rounded-full"
          >
            Return to Pathways
          </button>
        </>
      );
    }

    if (selectedPathway.id === "marketplace") {
      return (
        <>
          <button
            onClick={() => window.open(GROWNBY_URL, "_blank")}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full"
          >
            Explore Marketplace
          </button>

          <button
            onClick={() => window.open(EVENTBRITE_URL, "_blank")}
            className="border border-white px-8 py-4 rounded-full"
          >
            Growers Supply Market
          </button>
        </>
      );
    }

    return (
      <>
        <button
          onClick={() => window.open(EVENTBRITE_URL, "_blank")}
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full"
        >
          View Growers Supply Market
        </button>

        <button
          onClick={() => setSelectedPathway(null)}
          className="border border-white px-8 py-4 rounded-full"
        >
          Return to Pathways
        </button>
      </>
    );
  }, [selectedPathway]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <section className="relative h-screen">
        <FarmImage
          src={slides[slideIndex].image}
          alt={slides[slideIndex].title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full">
          <Globe className="w-4 h-4" />
          <select
            className="bg-transparent text-white outline-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} className="text-black" value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            {slides[slideIndex].title}
          </h1>

          <p className="max-w-4xl text-xl md:text-2xl leading-relaxed">
            {slides[slideIndex].subtitle}
          </p>

          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("pathways")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full flex items-center gap-3 text-lg"
            >
              Begin Guided Experience
              <ArrowRight />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("story")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white px-8 py-4 rounded-full"
            >
              Discover the Story
            </button>
          </div>
        </div>
      </section>

      <section id="story" className="py-24 px-6 md:px-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FarmImage
            src="/images/SAM_0188.JPG"
            alt="Bronson Family Farm growing area"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">A Different Kind of Farm</h2>

            <p className="text-lg leading-relaxed text-zinc-300 mb-6">
              Bronson Family Farm is more than a farm. It is a coordinated
              ecosystem designed to improve food accessibility, support growers,
              develop youth workforce pathways, and create long-term community
              sustainability.
            </p>

            <p className="text-lg leading-relaxed text-zinc-300 mb-6">
              Located at the historic Lansdowne Airport in Youngstown, Ohio,
              this working agricultural site blends farming, education,
              distribution, workforce development, and future agritourism into
              one connected experience.
            </p>

            <p className="text-lg leading-relaxed text-zinc-300">
              The goal is simple: strengthen the regional food system while
              helping communities grow healthier, stronger, and more connected.
            </p>
          </div>
        </div>
      </section>

      <section id="pathways" className="py-24 px-6 md:px-20 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Guided Ecosystem Pathways</h2>

          <p className="max-w-4xl mx-auto text-zinc-300 text-lg">
            Explore the ecosystem through intentional guided experiences
            designed for guests, customers, growers, youth, and community
            partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway) => (
            <div
              key={pathway.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition-all"
            >
              <FarmImage
                src={pathway.image}
                alt={pathway.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <div className="mb-4 text-green-500">{pathway.icon}</div>

                <h3 className="text-2xl font-bold mb-4">{pathway.title}</h3>

                <p className="text-zinc-300 mb-6">{pathway.description}</p>

                <button
                  onClick={() => setSelectedPathway(pathway)}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full flex items-center gap-2"
                >
                  Enter Pathway
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedPathway && (
        <div className="fixed inset-0 z-50 bg-black/90 overflow-y-auto">
          <div className="min-h-screen p-8 flex items-center justify-center">
            <div className="bg-zinc-950 rounded-3xl max-w-5xl w-full overflow-hidden border border-zinc-800">
              <FarmImage
                src={selectedPathway.image}
                alt={selectedPathway.title}
                className="w-full h-[420px] object-cover"
              />

              <div className="p-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-bold">
                    {selectedPathway.title}
                  </h2>

                  <button
                    onClick={() => setSelectedPathway(null)}
                    className="border border-zinc-600 px-5 py-2 rounded-full"
                  >
                    Close
                  </button>
                </div>

                <p className="text-xl text-zinc-300 mb-10">
                  {selectedPathway.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {selectedPathway.content.map((item: string, idx: number) => (
                    <div
                      key={idx}
                      className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
                    >
                      <div className="flex items-start gap-4">
                        <Users className="text-green-500 mt-1" />

                        <p className="text-lg text-zinc-200">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex flex-wrap gap-4">{modalButtons}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-16 px-6 border-t border-zinc-800 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Bronson Family Farm</h3>

          <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            A growers ecosystem focused on health, food accessibility,
            workforce development, education, sustainability, and future
            agritourism opportunities for Youngstown and the Mahoning Valley.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.open(WEBSITE_URL, "_blank")}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full"
            >
              Visit Website
            </button>

            <button
              onClick={() => window.open(EVENTBRITE_URL, "_blank")}
              className="border border-white px-6 py-3 rounded-full"
            >
              Growers Supply Market
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
