import React, { useState } from "react";

type Role =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

export default function App() {
  const [page, setPage] = useState<Role>("home");

  const Button = ({
    label,
    go,
  }: {
    label: string;
    go: Role;
  }) => (
    <button
      onClick={() => setPage(go)}
      className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white hover:bg-white hover:text-black transition"
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
    <div className="min-h-screen relative text-white">
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <button
          onClick={() => setPage("home")}
          className="mb-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 hover:bg-white hover:text-black transition"
        >
          Back Home
        </button>

        <h1 className="text-5xl font-semibold mb-4">{title}</h1>
        <p className="text-xl text-white/85 mb-8 max-w-3xl">{subtitle}</p>

        {children}
      </div>
    </div>
  );

  if (page === "guest")
    return (
      <Shell
        title="Guest Pathway"
        subtitle="Understand the vision, story, purpose, and meaning of Bronson Family Farm."
        image="/images/guest-forest.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Button label="Customer Pathway" go="customer" />
          <Button label="Partners Pathway" go="partners" />
        </div>
      </Shell>
    );

  if (page === "customer")
    return (
      <Shell
        title="Customer Pathway"
        subtitle="Fresh food, nutrition, healthy choices, reasons to return."
        image="/images/customer-produce.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Button label="Open Marketplace" go="marketplace" />
          <Button label="Grower Pathway" go="grower" />
        </div>
      </Shell>
    );

  if (page === "marketplace")
    return (
      <Shell
        title="Marketplace"
        subtitle="Where attention becomes action and support becomes sustainability."
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
          <Button label="Grower Pathway" go="grower" />
        </div>
      </Shell>
    );

  if (page === "grower")
    return (
      <Shell
        title="Grower Pathway"
        subtitle="Connect producers to opportunity, visibility, and market participation."
        image="/images/grower-field.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Button label="Marketplace" go="marketplace" />
          <Button label="Partners" go="partners" />
        </div>
      </Shell>
    );

  if (page === "youth")
    return (
      <Shell
        title="Youth Workforce"
        subtitle="Build skills, confidence, responsibility, and future readiness."
        image="/images/youth-workforce.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Button label="Partners" go="partners" />
          <Button label="Guest Pathway" go="guest" />
        </div>
      </Shell>
    );

  if (page === "partners")
    return (
      <Shell
        title="Partners Pathway"
        subtitle="Align resources, sponsors, schools, health systems, and community benefit."
        image="/images/partners-collaboration.jpg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Button label="Marketplace" go="marketplace" />
          <Button label="Youth Workforce" go="youth" />
        </div>
      </Shell>
    );

  return (
    <div className="min-h-screen relative text-white">
      <img
        src="/images/entrance-farm.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-semibold mb-4">
          Bronson Family Farm
        </h1>

        <p className="text-2xl text-white/85 mb-10 max-w-4xl">
          Step into the ecosystem. Food. Learning. Growers. Workforce.
          Marketplace. Partnerships.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Button label="Guest" go="guest" />
          <Button label="Customer" go="customer" />
          <Button label="Marketplace" go="marketplace" />
          <Button label="Grower" go="grower" />
          <Button label="Youth Workforce" go="youth" />
          <Button label="Partners" go="partners" />
        </div>

        <div className="mt-10">
          <a
            href="https://grownby.com/farms/bronson-family-farm/shop"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 hover:bg-white hover:text-black transition"
          >
            Enter Storefront
          </a>
        </div>
      </div>
    </div>
  );
}
