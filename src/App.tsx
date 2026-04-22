// src/App.tsx
import React, { useMemo, useState } from "react";

type Role =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type Lang = "EN" | "ES" | "TL" | "IT" | "FR" | "HE";

export default function App() {
  const [page, setPage] = useState<Role>("home");
  const [lang, setLang] = useState<Lang>("EN");

  const text = useMemo(
    () => ({
      EN: {
        title: "Bronson Family Farm",
        intro:
          "Step into the ecosystem. Food. Learning. Growers. Workforce. Marketplace. Partnerships.",
        back: "Back Home",
        store: "Enter Storefront",
      },
      ES: {
        title: "Bronson Family Farm",
        intro:
          "Entre al ecosistema. Comida. Aprendizaje. Productores. Empleo juvenil. Mercado. Alianzas.",
        back: "Volver",
        store: "Entrar Tienda",
      },
      TL: {
        title: "Bronson Family Farm",
        intro:
          "Pumasok sa ecosystem. Pagkain. Pagkatuto. Growers. Kabataan. Marketplace. Partnerships.",
        back: "Bumalik",
        store: "Pumasok sa Tindahan",
      },
      IT: {
        title: "Bronson Family Farm",
        intro:
          "Entra nell’ecosistema. Cibo. Formazione. Coltivatori. Giovani. Mercato. Partner.",
        back: "Home",
        store: "Entra Negozio",
      },
      FR: {
        title: "Bronson Family Farm",
        intro:
          "Entrez dans l’écosystème. Nourriture. Formation. Producteurs. Jeunesse. Marché. Partenariats.",
        back: "Accueil",
        store: "Entrer Boutique",
      },
      HE: {
        title: "Bronson Family Farm",
        intro:
          "היכנסו למערכת האקולוגית. מזון. למידה. מגדלים. נוער. שוק. שותפויות.",
        back: "בית",
        store: "כניסה לחנות",
      },
    }),
    []
  );

  const LangBar = () => (
    <div className="flex flex-wrap gap-2 mb-8">
      {(["EN", "ES", "TL", "IT", "FR", "HE"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full text-sm border transition ${
            lang === l
              ? "bg-white text-black border-white"
              : "bg-white/10 text-white border-white/20"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  const NavBtn = ({
    label,
    go,
  }: {
    label: string;
    go: Role;
  }) => (
    <button
      onClick={() => setPage(go)}
      className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white hover:bg-white hover:text-black transition-all duration-300"
    >
      {label}
    </button>
  );

  const Shell = ({
    title,
    subtitle,
    image,
    children,
  }: {
    title: string;
    subtitle: string;
    image: string;
    children: React.ReactNode;
  }) => (
    <div className="min-h-screen relative text-white overflow-hidden">
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <LangBar />

        <button
          onClick={() => setPage("home")}
          className="mb-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 hover:bg-white hover:text-black transition"
        >
          {text[lang].back}
        </button>

        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h1>

        <p className="text-lg md:text-xl text-white/85 mb-10 max-w-3xl">
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );

  if (page === "guest")
    return (
      <Shell
        title="Guest Experience"
        subtitle="Understand the vision, story, purpose, airport legacy, and regenerative future."
        image="/images/guest-forest.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <NavBtn label="Customer Journey" go="customer" />
          <NavBtn label="Partners Pathway" go="partners" />
        </div>
      </Shell>
    );

  if (page === "customer")
    return (
      <Shell
        title="Customer Journey"
        subtitle="Fresh food, recipes, nutrition, healthier choices, reasons to return again and again."
        image="/images/customer-produce.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <NavBtn label="Open Marketplace" go="marketplace" />
          <NavBtn label="Grower Opportunities" go="grower" />
        </div>
      </Shell>
    );

  if (page === "marketplace")
    return (
      <Shell
        title="Marketplace"
        subtitle="Where interest becomes support and support becomes sustainability."
        image="/images/marketplace-storefront.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="https://grownby.com/farms/bronson-family-farm/shop"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-center hover:bg-white hover:text-black transition"
          >
            Open GrownBy Store
          </a>

          <NavBtn label="Grower Pathway" go="grower" />
        </div>
      </Shell>
    );

  if (page === "grower")
    return (
      <Shell
        title="Grower Pathway"
        subtitle="Connect producers to visibility, buyers, training, and market participation."
        image="/images/grower-field.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <NavBtn label="Marketplace" go="marketplace" />
          <NavBtn label="Partners" go="partners" />
        </div>
      </Shell>
    );

  if (page === "youth")
    return (
      <Shell
        title="Youth Workforce"
        subtitle="Build skills, responsibility, confidence, leadership, and future readiness."
        image="/images/youth-workforce.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <NavBtn label="Partners" go="partners" />
          <NavBtn label="Guest Pathway" go="guest" />
        </div>
      </Shell>
    );

  if (page === "partners")
    return (
      <Shell
        title="Partners Pathway"
        subtitle="Align schools, sponsors, health systems, growers, and community resources."
        image="/images/partners-collaboration.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <NavBtn label="Marketplace" go="marketplace" />
          <NavBtn label="Youth Workforce" go="youth" />
        </div>
      </Shell>
    );

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      <img
        src="/images/entrance-farm.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <LangBar />

        <h1 className="text-5xl md:text-7xl font-semibold mb-4">
          {text[lang].title}
        </h1>

        <p className="text-xl md:text-2xl text-white/85 mb-10 max-w-4xl">
          {text[lang].intro}
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <NavBtn label="Guest" go="guest" />
          <NavBtn label="Customer" go="customer" />
          <NavBtn label="Marketplace" go="marketplace" />
          <NavBtn label="Grower" go="grower" />
          <NavBtn label="Youth Workforce" go="youth" />
          <NavBtn label="Partners" go="partners" />
        </div>

        <div className="mt-10">
          <a
            href="https://grownby.com/farms/bronson-family-farm/shop"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 hover:bg-white hover:text-black transition"
          >
            {text[lang].store}
          </a>
        </div>
      </div>
    </div>
  );
}
