import React, { useState } from "react";
import {
  ArrowRight,
  Sprout,
  ShoppingBasket,
  Users,
  GraduationCap,
  HandHeart,
  MapPin,
  Leaf,
  TreePine,
  Tractor,
  Heart,
  ChevronLeft,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  BookOpen,
  Landmark,
} from "lucide-react";

const grownByUrl = "https://grownby.com/farms/bronson-family-farm/shop";
const weatherUrl = "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121";
const websiteUrl = "https://www.bronsonfamilyfarm.com/";

type Screen =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

const heroImage =
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80";
const forestImage =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80";
const produceImage =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80";
const marketImage =
  "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80";
const growerImage =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80";
const youthImage =
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80";
const partnersImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

function App() {
  const [screen, setScreen] = useState<Screen>("home");

  let content;
  switch (screen) {
    case "guest":
      content = <GuestPage go={setScreen} />;
      break;
    case "customer":
      content = <CustomerPage go={setScreen} />;
      break;
    case "marketplace":
      content = <MarketplacePage go={setScreen} />;
      break;
    case "grower":
      content = <GrowerPage go={setScreen} />;
      break;
    case "youth":
      content = <YouthPage go={setScreen} />;
      break;
    case "partners":
      content = <PartnersPage go={setScreen} />;
      break;
    case "home":
    default:
      content = <HomePage go={setScreen} />;
      break;
  }

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <TopBar current={screen} go={setScreen} />
      {content}
    </div>
  );
}

function TopBar({ current, go }: { current: Screen; go: (s: Screen) => void }) {
  const items: { key: Screen; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "guest", label: "Guest" },
    { key: "customer", label: "Customer" },
    { key: "marketplace", label: "Marketplace" },
    { key: "grower", label: "Grower" },
    { key: "youth", label: "Youth Workforce" },
    { key: "partners", label: "Partners" },
  ];

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-emerald-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between sm:px-6 lg:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800">
            <TreePine className="h-5 w-5 text-emerald-100" />
          </div>
          <div>
            <div className="text-lg font-semibold">Bronson Family Farm</div>
            <div className="text-xs uppercase tracking-[0.2em] text-emerald-200">
              Regenerative Farm Ecosystem Demo
            </div>
          </div>
        </button>

        <div className="flex flex-wrap gap-2">
          {items.map((item) => {
            const active = current === item.key;
            return (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={
                  active
                    ? "rounded-full bg-white px-4 py-2 text-sm font-medium text-emerald-950"
                    : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HomePage({ go }: { go: (s: Screen) => void }) {
  const tiles = [
    {
      key: "guest" as Screen,
      icon: MapPin,
      title: "Guest Experience",
      text: "Step into the land, the story, and the purpose behind a regenerative farm rooted in Youngstown's future.",
    },
    {
      key: "customer" as Screen,
      icon: ShoppingBasket,
      title: "Customer Journey",
      text: "Discover produce, Bubble Babies™, recipes, nutrition guidance, and direct access to the marketplace.",
    },
    {
      key: "marketplace" as Screen,
      icon: Sprout,
      title: "Marketplace",
      text: "The strongest page in the demo: polished, visual, product-centered, and connected to GrownBy.",
    },
    {
      key: "grower" as Screen,
      icon: Tractor,
      title: "Grower Ecosystem",
      text: "A welcoming network for growers, value-added producers, and collaborative agricultural opportunity.",
    },
    {
      key: "youth" as Screen,
      icon: GraduationCap,
      title: "Youth Workforce",
      text: "Hands-on training, supervision, support, and pathways into work, wellness, and entrepreneurship.",
    },
    {
      key: "partners" as Screen,
      icon: HandHeart,
      title: "Partners & Sponsors",
      text: "A platform for collaboration across education, civic leadership, business, philanthropy, and community.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/40 shadow-2xl">
        <div className="relative min-h-[78vh] px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <img src={heroImage} alt="Bronson Family Farm" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-emerald-950/75 to-emerald-900/55" />

          <div className="relative z-10 grid min-h-[70vh] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-emerald-100">
                Step into the Farm. Experience something different.
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                A living farm ecosystem for food, family, workforce, wellness, and regional renewal.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/90 sm:text-lg">
                Bronson Family Farm brings regenerative growing, agritourism, education, marketplace access, and community-centered opportunity together in one place—designed to keep people returning again and again.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => go("marketplace")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-emerald-950"
                >
                  Enter Marketplace <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go("guest")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm text-white"
                >
                  Explore the Experience
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {tiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <button key={tile.key} onClick={() => go(tile.key)} className="text-left">
                    <div className="h-full rounded-3xl border border-white/10 bg-emerald-950/55 p-5 backdrop-blur hover:bg-emerald-900/70">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800/80">
                        <Icon className="h-5 w-5 text-emerald-100" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{tile.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-emerald-50/80">{tile.text}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-200">
                        Open <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageFrame({
  title,
  eyebrow,
  description,
  image,
  children,
  back,
}: {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  children: React.ReactNode;
  back?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {back}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/40 shadow-2xl">
          <div className="relative min-h-[320px] px-6 py-8 sm:min-h-[380px] sm:px-8 lg:px-10 lg:py-10">
            <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-emerald-950/75 to-emerald-900/60" />
            <div className="relative z-10 flex h-full flex-col justify-end gap-5">
              <div className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-emerald-100">
                {eyebrow}
              </div>
              <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">{title}</h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/85 sm:text-base">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function CardGrid({ items }: { items: { icon: any; title: string; text: string }[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800">
              <Icon className="h-5 w-5 text-emerald-100" />
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-emerald-50/80">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

function GuestPage({ go }: { go: (s: Screen) => void }) {
  return (
    <PageFrame
      title="A place with purpose, memory, and future possibility."
      eyebrow="Guest Experience"
      description="Guests are not just visiting a farm. They are stepping into a regenerative landscape where land restoration, food access, local history, family legacy, and East Side opportunity come together."
      image={forestImage}
      back={<BackButton onClick={() => go("home")} />}
    >
      <CardGrid
        items={[
          {
            icon: TreePine,
            title: "Experience the Land",
            text: "The farm is designed to feel immersive, welcoming, and alive—more than a destination, it is an encounter with a different future.",
          },
          {
            icon: Landmark,
            title: "Understand the Meaning",
            text: "This work honors family heritage, agricultural tradition, and a commitment to creating community value through the land.",
          },
          {
            icon: Heart,
            title: "Return for More",
            text: "Guests can come back for market days, workshops, youth activity, farm stories, demonstrations, and seasonal experiences.",
          },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Why this matters in Youngstown</h2>
          <p className="mt-4 text-sm leading-7 text-emerald-50/85 sm:text-base">
            Bronson Family Farm stands as a response to rising food costs, overprocessed substitutes, neighborhood disconnection, and the need for visible, place-based opportunity. It restores land while creating a reason for families, young people, growers, educators, and civic partners to gather in one ecosystem.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => go("customer")} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-emerald-950">
              See the Customer Journey
            </button>
            <button onClick={() => go("partners")} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white">
              View Partners
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Live links</h2>
          <div className="mt-4 space-y-3 text-sm">
            <LinkCard href={websiteUrl} label="Bronson Family Farm website" />
            <LinkCard href={weatherUrl} label="Youngstown weather" />
            <LinkCard href={grownByUrl} label="GrownBy marketplace" />
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function CustomerPage({ go }: { go: (s: Screen) => void }) {
  return (
    <PageFrame
      title="From curiosity to nourishment to repeat engagement."
      eyebrow="Customer Journey"
      description="Customers should immediately understand what they can buy, how they can buy it, why it matters, and what else they can learn or return for."
      image={produceImage}
      back={<BackButton onClick={() => go("home")} />}
    >
      <CardGrid
        items={[
          {
            icon: ShoppingBasket,
            title: "Shop Produce",
            text: "Fresh farm offerings, preorders, pickups, and direct pathways into the market experience.",
          },
          {
            icon: Sprout,
            title: "Bubble Babies™",
            text: "A signature growing concept that brings seedlings and educational engagement together in a memorable way.",
          },
          {
            icon: BookOpen,
            title: "Recipes & Nutrition",
            text: "The customer experience includes guidance on better food choices, meal ideas, and practical ways to use farm products.",
          },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">A better customer flow</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "See what is available now",
              "Preorder or plan pickup",
              "Learn how products support healthier choices",
              "Return for recipes, events, and seasonal offerings",
            ].map((step) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-200" />
                  <span>{step}</span>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => go("marketplace")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-emerald-950">
            Go to Marketplace <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Why people come back</h2>
          <p className="mt-4 text-sm leading-7 text-emerald-50/85 sm:text-base">
            This is not a one-time transaction. The demo is built to encourage repeat visits through produce, seedlings, Bubble Babies™, market pickups, recipes, food education, events, and evolving seasonal engagement.
          </p>
        </div>
      </div>
    </PageFrame>
  );
}

function MarketplacePage({ go }: { go: (s: Screen) => void }) {
  const products = [
    { title: "Fresh Produce", note: "Seasonal vegetables and market-ready farm offerings." },
    { title: "Bubble Babies™", note: "Seedling innovation with visual identity and educational value." },
    { title: "Preorders & Pickup", note: "A cleaner path for customers who want reliability and convenience." },
    { title: "Farm-linked Education", note: "Nutrition, recipes, and guidance tied to what is being sold." },
  ];

  return (
    <PageFrame
      title="The marketplace is where the demo feels most alive."
      eyebrow="Marketplace"
      description="This page sets the standard for the rest of the experience: visual, useful, product-centered, and directly connected to the Bronson Family Farm storefront on GrownBy."
      image={marketImage}
      back={<BackButton onClick={() => go("home")} />}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800">
              <ShoppingBasket className="h-5 w-5 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Shop the strongest experience</h2>
              <p className="mt-1 text-sm text-emerald-50/75">
                Built to feel more like a living storefront than a presentation.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <div key={product.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-lg font-semibold text-white">{product.title}</div>
                <div className="mt-2 text-sm leading-7 text-emerald-50/80">{product.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={grownByUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-emerald-950"
            >
              Open GrownBy Store <ExternalLink className="h-4 w-4" />
            </a>
            <button onClick={() => go("customer")} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white">
              Back to Customer Path
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Marketplace standards for the rest of the demo</h2>
          <div className="mt-5 space-y-3 text-sm text-emerald-50/80">
            {[
              "Stronger imagery",
              "Cleaner visual hierarchy",
              "Clearer purpose on arrival",
              "Less presentation feel",
              "More obvious pathways and return value",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-200" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function GrowerPage({ go }: { go: (s: Screen) => void }) {
  return (
    <PageFrame
      title="A grower ecosystem that feels welcoming, useful, and worth returning to."
      eyebrow="Grower Path"
      description="Growers need more than information. They need a place that feels collaborative, friendly, visually appealing, and connected to opportunity."
      image={growerImage}
      back={<BackButton onClick={() => go("home")} />}
    >
      <CardGrid
        items={[
          { icon: Leaf, title: "Sell & Share", text: "Create pathways for growers and producers to participate in a visible farm-centered marketplace." },
          { icon: Users, title: "Belong", text: "The ecosystem should feel co-owned, welcoming, and relational—not cold, technical, or transactional." },
          { icon: ShieldCheck, title: "Build Capacity", text: "Support can include infrastructure, collaboration, promotion, and pathways into broader opportunity." },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Designed for repeat use</h2>
          <p className="mt-4 text-sm leading-7 text-emerald-50/85 sm:text-base">
            This part of the demo should invite growers back for updates, opportunities, participation, collaboration, and shared visibility. It should feel like an ecosystem people want to re-enter, not a static page they read once.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Connected next step</h2>
          <button onClick={() => go("partners")} className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-emerald-950">
            See Community Partners <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </PageFrame>
  );
}

function YouthPage({ go }: { go: (s: Screen) => void }) {
  return (
    <PageFrame
      title="A youth workforce pathway with supervision, support, and real-world learning."
      eyebrow="Youth Workforce"
      description="The youth workforce pathway should show training, guidance, structure, and the support systems that help young people grow into opportunity."
      image={youthImage}
      back={<BackButton onClick={() => go("home")} />}
    >
      <CardGrid
        items={[
          {
            icon: GraduationCap,
            title: "Hands-on Training",
            text: "Learning can include farming, hospitality, marketplace support, events, and operational responsibility.",
          },
          {
            icon: Users,
            title: "Supervisor Support",
            text: "Supervisors exist within the youth workforce pathway and provide structure, oversight, accountability, and development support.",
          },
          {
            icon: Heart,
            title: "Wellness & Stability",
            text: "Support staff resources can strengthen the pathway so young people are not left to navigate growth alone.",
          },
        ]}
      />

      <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Why this pathway matters</h2>
        <p className="mt-4 text-sm leading-7 text-emerald-50/85 sm:text-base">
          The youth workforce pathway is where agriculture, confidence, structure, teamwork, and future readiness meet. It gives young people a visible place in the ecosystem and shows families, educators, and funders that the farm is not only growing food—it is growing people.
        </p>
      </div>
    </PageFrame>
  );
}

function PartnersPage({ go }: { go: (s: Screen) => void }) {
  const partners = [
    "The Home Depot",
    "Petitti Garden Centers",
    "Central State University",
    "City of Youngstown",
    "Youngstown Area Jewish Federation",
    "Farm & Family Alliance",
  ];

  return (
    <PageFrame
      title="Partnership makes the ecosystem bigger than the farm alone."
      eyebrow="Partners & Sponsors"
      description="This page shows how civic, educational, philanthropic, and business relationships can strengthen the farm’s reach, relevance, and long-term impact."
      image={partnersImage}
      back={<BackButton onClick={() => go("home")} />}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Visible collaboration</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {partners.map((partner) => (
              <div key={partner} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white">
                {partner}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-emerald-900/40 p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Continue the journey</h2>
          <p className="mt-4 text-sm leading-7 text-emerald-50/85 sm:text-base">
            The strongest close is not an ending. It is an invitation to continue exploring the marketplace, the grower ecosystem, the youth workforce pathway, and the broader purpose behind Bronson Family Farm.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => go("marketplace")} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-emerald-950">
              Return to Marketplace
            </button>
            <button onClick={() => go("home")} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
      <ChevronLeft className="h-4 w-4" /> Back to Home
    </button>
  );
}

function LinkCard({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-white hover:bg-white/10"
    >
      <span>{label}</span>
      <ExternalLink className="h-4 w-4 text-emerald-200" />
    </a>
  );
}

export default App;
