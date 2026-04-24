import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#243224]">
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 text-center"
        style={{ backgroundImage: "url('/images/GrowArea.jpg')" }}
      >
        <div className="bg-black/45 p-10 rounded-3xl max-w-4xl text-white">
          <p className="uppercase tracking-[5px] text-sm mb-4">
            Bronson Family Farm • Youngstown, Ohio
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
            Bronson Family Farm Ecosystem Demo
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-9">
            Food sustainability. Entrepreneurship. Workforce development.
            Community renewal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://grownby.com/farms/bronson-family-farm/shop"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#d8c3a5] text-[#243224] font-semibold"
            >
              Enter Marketplace
            </a>

            <a
              href="https://www.bronsonfamilyfarm.com/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-white font-semibold"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-sm text-[#5f6f52] font-bold mb-3">
            Ecosystem Pathways
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            One Land. Many Opportunities.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            ["Guest Experience", "/images/SAM_0255.JPG"],
            ["Customer Opportunity", "/images/SAM_0229.JPG"],
            ["Marketplace", "/images/SAM_0249.JPG"],
            ["Grower Opportunity", "/images/SAM_0238.JPG"],
            ["Value-Added Producer", "/images/SAM_0226.JPG"],
            ["Youth Workforce", "/images/SAM_0222.JPG"],
          ].map(([title, img]) => (
            <div
              key={title}
              className="bg-white rounded-3xl overflow-hidden shadow"
            >
              <img
                src={img}
                alt={title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-[#efe6d7]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Final Destination: Marketplace
          </h2>

          <p className="text-xl leading-9 text-[#5b5a4e] mb-10">
            Every pathway leads to food access, opportunity, and participation.
          </p>

          <a
            href="https://grownby.com/farms/bronson-family-farm/shop"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full bg-[#5f6f52] text-white font-semibold"
          >
            Shop Bronson Family Farm
          </a>
        </div>
      </section>
    </div>
  );
}
