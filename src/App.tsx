import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("EN");

  const pathways = [
    {
      title: "Guest",
      subtitle: "Discover the Story",
      desc: "Explore the land, history, purpose, and future of Bronson Family Farm.",
      img: "/GrowArea.jpg",
      btn: "Enter as Guest",
    },
    {
      title: "Customer",
      subtitle: "Eat Fresh. Live Better.",
      desc: "Access seasonal produce, healthy choices, events, and repeat buying opportunities.",
      img: "/SAM_0220.JPG",
      btn: "Shop Fresh",
    },
    {
      title: "Marketplace",
      subtitle: "Support Local Commerce",
      desc: "Buy from Bronson Family Farm and regional growers through a modern marketplace.",
      img: "/SAM_0221.JPG",
      btn: "Enter Marketplace",
    },
    {
      title: "Grower",
      subtitle: "Grow With Us",
      desc: "Connect producers to market access, collaboration, and opportunity.",
      img: "/GrowArea2.jpg",
      btn: "Become a Grower",
    },
    {
      title: "Youth Workforce",
      subtitle: "Build Skills for the Future",
      desc: "Hands-on learning in agriculture, logistics, leadership, and entrepreneurship.",
      img: "/SAM_0222.JPG",
      btn: "Join Program",
    },
    {
      title: "Partners",
      subtitle: "Create Community Impact",
      desc: "Align sponsorship, education, and mission-driven collaboration.",
      img: "/SAM_0223.JPG",
      btn: "Partner With Us",
    },
  ];

  const proof = [
    {
      title: "In Production",
      desc: "Seedlings, produce, regenerative growing systems, seasonal expansion.",
      img: "/SAM_0225.JPG",
      btn: "View What’s Growing",
    },
    {
      title: "Buy Local",
      desc: "Shop fresh food and support local growers through the marketplace.",
      img: "/SAM_0226.JPG",
      btn: "Enter Marketplace",
    },
    {
      title: "Upcoming Events",
      desc: "Tours, workshops, Growers Supply Market, and family experiences on the land.",
      img: "/SAM_0229.JPG",
      btn: "View Events",
    },
    {
      title: "Growing Together",
      desc: "Education, sponsors, civic collaboration, workforce pathways, and partnerships.",
      img: "/SAM_0238.JPG",
      btn: "See Partners",
    },
  ];

  const actions = [
    "Visit the Farm",
    "Shop Fresh",
    "Grow With Us",
    "Partner With Us",
    "Apply Today",
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#1f2d1f] font-sans">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Bronson Family Farm
        </h1>

        <div className="flex gap-2">
          {["EN", "ES", "TL", "FR"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                lang === l
                  ? "bg-green-800 text-white border-green-800"
                  : "bg-white text-green-800 border-gray-300 hover:border-green-700"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </header>

      <section
        className="relative min-h-[88vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/GrowArea.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl px-8 md:px-16 text-white">
          <p className="uppercase tracking-[4px] text-sm md:text-base mb-4">
            Historic Lansdowne Airport Site | Est. 1926
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            From Youngstown’s first airport to a new future of food, learning,
            and community renewal.
          </h2>

          <p className="text-lg md:text-2xl max-w-3xl mb-8 text-white/90 leading-relaxed">
            Bronson Family Farm is transforming historic land into a regenerative
            farm, agritourism destination, youth workforce pathway, and living
            ecosystem for the Mahoning Valley.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-green-700 hover:bg-green-800 rounded-xl text-white transition">
              Enter the Ecosystem
            </button>
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-[#1f2d1f] rounded-xl text-white transition">
              Explore Pathways
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Choose Your Pathway Into the Ecosystem
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A place where land, food, learning, business, and community come together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pathways.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm uppercase tracking-wide text-green-700 mb-2">
                  {item.title}
                </p>

                <h4 className="text-2xl font-semibold mb-3">
                  {item.subtitle}
                </h4>

                <p className="text-gray-700 leading-7 mb-6">
                  {item.desc}
                </p>

                <button className="w-full py-3 rounded-xl bg-green-700 text-white hover:bg-green-800 transition">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#e7efe4] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
              Happening Now at Bronson Family Farm
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Fresh activity. Real opportunities. Community momentum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {proof.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700 leading-7 mb-5">{item.desc}</p>
                  <button className="w-full py-3 rounded-xl border border-green-700 text-green-800 hover:bg-green-700 hover:text-white transition">
                    {item.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
          A Historic Place With a Living Future
        </h3>

        <p className="text-lg text-gray-700 leading-8">
          Lansdowne Airport was dedicated in 1926 as Youngstown’s first airport.
          Today, Bronson Family Farm is helping reconnect land, food, families,
          growers, and opportunity on the same historic ground.
        </p>
      </section>

      <section
        className="relative py-20 px-6 md:px-12 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/SAM_0249.JPG')" }}
      >
        <div className="absolute inset-0 bg-[#18311d]/85" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Be Part of What’s Growing
          </h3>

          <p className="text-lg text-white/85 mb-10 max-w-3xl mx-auto">
            Fresh food. Opportunity. Community renewal. Legacy in motion.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4 mb-12">
            {actions.map((btn, i) => (
              <button
                key={i}
                className="py-3 px-4 bg-white text-[#18311d] rounded-xl hover:bg-gray-200 transition font-medium"
              >
                {btn}
              </button>
            ))}
          </div>

          <p className="text-white/75">
            Historic Lansdowne Airport Site • Youngstown, Ohio
          </p>
          <p className="text-white/75 mt-2">www.bronsonfamilyfarm.com</p>
        </div>
      </section>
    </div>
  );
}
