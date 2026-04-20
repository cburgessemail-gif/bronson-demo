import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  ShoppingBasket,
  Users,
  GraduationCap,
  ShieldCheck,
  Settings,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sprout,
  MapPin,
  Sun,
  CloudSun,
  Heart,
  BookOpen,
  Calendar,
  Plane,
  Trees,
  BadgeCheck,
  ScanLine,
  ExternalLink,
  Tractor,
  Apple,
  ChefHat,
  School,
  Building2,
  HandHeart,
  Layers3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const image = {
  hero: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80",
  forest: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
  market: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
  seedlings: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80",
  youth: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=80",
  grower: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
  family: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
  food: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  learning: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
  admin: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
};

const roles = [
  {
    id: "guest",
    title: "Guest",
    icon: Leaf,
    image: image.forest,
    blurb:
      "Step into the land, the story, and the purpose behind Bronson Family Farm and Farm & Family Alliance.",
    accent: "from-emerald-700/80 to-lime-600/70",
  },
  {
    id: "customer",
    title: "Customer",
    icon: ShoppingBasket,
    image: image.market,
    blurb:
      "Shop produce, discover Bubble Babies™, find nutrition guidance, and move easily into the marketplace.",
    accent: "from-green-700/80 to-amber-500/70",
  },
  {
    id: "grower",
    title: "Grower",
    icon: Sprout,
    image: image.grower,
    blurb:
      "Access land-based opportunity, collaboration, selling pathways, and shared tools in the grower ecosystem.",
    accent: "from-lime-700/80 to-emerald-500/70",
  },
  {
    id: "youth",
    title: "Youth Workforce",
    icon: GraduationCap,
    image: image.youth,
    blurb:
      "Experience hands-on learning, mentoring, food systems training, and pathways into work and leadership.",
    accent: "from-teal-700/80 to-cyan-500/70",
  },
  {
    id: "supervisor",
    title: "Supervisor",
    icon: ShieldCheck,
    image: image.learning,
    blurb:
      "Guide youth workforce participants with program structure, support resources, and operational visibility.",
    accent: "from-slate-700/80 to-emerald-600/70",
  },
  {
    id: "admin",
    title: "Admin",
    icon: Settings,
    image: image.admin,
    blurb:
      "See the full ecosystem—roles, operations, events, check-in, grower support, and marketplace coordination.",
    accent: "from-stone-700/80 to-zinc-500/70",
  },
];

const recipes = [
  {
    title: "Collard Greens & Garlic",
    text: "A simple farm-style side dish that turns fresh greens into a nourishing family meal.",
  },
  {
    title: "Tomato & Cucumber Summer Bowl",
    text: "Fresh produce, bright flavor, and a quick way to enjoy what is grown close to home.",
  },
  {
    title: "Pepper, Cabbage & Broccoli Stir-Fry",
    text: "A colorful weekday recipe that supports healthy eating without feeling complicated.",
  },
];

const produceItems = [
  "Broccoli",
  "Spinach",
  "Tomatoes",
  "Collards",
  "Peppers",
  "Cabbage",
  "Lettuce",
  "Mustards",
  "Kale",
  "Cilantro",
  "Bubble Babies™ Seedlings",
];

const logoline = [
  "Bronson Family Farm",
  "Farm & Family Alliance",
  "Developed by Bronson Family Farm",
  "Home Depot",
  "Petitti Garden Centers",
  "Elliott's Garden Center",
  "Jewish Federation",
  "Central State University",
  "City of Youngstown",
];

const tourSteps = [
  "Welcome",
  "Guest",
  "Customer",
  "Grower",
  "Youth Workforce",
  "Supervisor",
  "Admin",
  "Marketplace",
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="space-y-2">
      <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/80">{eyebrow}</div>
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
      {text ? <p className="max-w-3xl text-sm md:text-base text-white/80 leading-relaxed">{text}</p> : null}
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
      {children}
    </span>
  );
}

export default function BronsonFamilyFarmFinalMasterApp() {
  const [screen, setScreen] = useState<"home" | "role" | "tour">("home");
  const [selectedRole, setSelectedRole] = useState("guest");
  const [tourIndex, setTourIndex] = useState(0);
  const [isTourPlaying, setIsTourPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [weatherTick, setWeatherTick] = useState(72);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWeatherTick((v) => (v >= 76 ? 71 : v + 1));
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (screen !== "tour" || !isTourPlaying) return;
    timerRef.current = window.setInterval(() => {
      setTourIndex((prev) => (prev < tourSteps.length - 1 ? prev + 1 : prev));
    }, 3500);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [screen, isTourPlaying]);

  useEffect(() => {
    if (tourIndex === tourSteps.length - 1) setIsTourPlaying(false);
  }, [tourIndex]);

  const selected = useMemo(() => roles.find((r) => r.id === selectedRole) || roles[0], [selectedRole]);

  const openRole = (id: string) => {
    setSelectedRole(id);
    setScreen("role");
  };

  const startTour = () => {
    setTourIndex(0);
    setScreen("tour");
    setIsTourPlaying(true);
  };

  const marketplaceUrl = "https://grownby.com/farms/bronson-family-farm/shop";
  const weatherUrl = "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121";
  const websiteUrl = "https://www.bronsonfamilyfarm.com/";

  return (
    <div className="min-h-screen bg-[#07130d] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,125,70,0.28),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.18),transparent_28%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${image.forest})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07130d]/70 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-200/75">Bronson Family Farm</div>
              <div className="text-lg md:text-xl font-semibold tracking-tight">Live Ecosystem Demo</div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-2xl" onClick={() => setMuted((m) => !m)}>
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Button className="rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white" onClick={startTour}>
                <Play className="mr-2 h-4 w-4" /> Guided Tour
              </Button>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {screen === "home" && (
            <motion.main
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-7xl px-4 md:px-8 pb-20"
            >
              <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 pt-8 md:pt-12 items-stretch">
                <GlassCard className="overflow-hidden">
                  <div className="relative min-h-[560px] md:min-h-[650px]">
                    <div className="absolute inset-0" style={{ backgroundImage: `url(${image.hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/30 to-emerald-950/80" />
                    <div className="relative h-full p-6 md:p-10 flex flex-col justify-between">
                      <div className="flex flex-wrap gap-2">
                        <Pill><Plane className="mr-2 h-3.5 w-3.5" /> Historic Lansdowne Airport</Pill>
                        <Pill><Trees className="mr-2 h-3.5 w-3.5" /> Regenerative Land Vision</Pill>
                        <Pill><HandHeart className="mr-2 h-3.5 w-3.5" /> Community Ecosystem</Pill>
                      </div>

                      <div className="max-w-3xl space-y-5">
                        <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-emerald-100/80">Step into the Farm. Experience something different.</div>
                        <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-[0.95]">
                          A living farm ecosystem rooted in land, legacy, food, and future.
                        </h1>
                        <p className="max-w-2xl text-base md:text-xl leading-relaxed text-white/85">
                          Bronson Family Farm is more than a farm. It is a regenerative, welcoming, off-grid vision where families, growers, youth, partners, and customers return again and again for resources, nourishment, learning, and opportunity.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                          <Button className="rounded-2xl bg-white text-[#0c1b12] hover:bg-emerald-50" onClick={() => openRole("guest")}>
                            Enter Experience <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={startTour}>
                            <Play className="mr-2 h-4 w-4" /> Auto Demo
                          </Button>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-3 pt-6">
                        <GlassCard className="p-4 bg-black/25">
                          <div className="text-xs uppercase tracking-[0.22em] text-emerald-200/75">Why it matters</div>
                          <div className="mt-2 text-lg font-medium">Food costs are rising.</div>
                          <p className="mt-2 text-sm text-white/80">Too many families are pushed toward overprocessed food. This ecosystem responds with fresh access, learning, and dignity.</p>
                        </GlassCard>
                        <GlassCard className="p-4 bg-black/25">
                          <div className="text-xs uppercase tracking-[0.22em] text-emerald-200/75">What returns people</div>
                          <div className="mt-2 text-lg font-medium">Resources people can use.</div>
                          <p className="mt-2 text-sm text-white/80">Marketplace access, recipes, workforce pathways, grower support, events, and family-centered experiences.</p>
                        </GlassCard>
                        <GlassCard className="p-4 bg-black/25">
                          <div className="text-xs uppercase tracking-[0.22em] text-emerald-200/75">Built for partnership</div>
                          <div className="mt-2 text-lg font-medium">Public, private, and community aligned.</div>
                          <p className="mt-2 text-sm text-white/80">Designed to welcome schools, growers, volunteers, agencies, sponsors, and mission-aligned collaborators.</p>
                        </GlassCard>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <div className="space-y-6">
                  <GlassCard className="p-5 md:p-6">
                    <SectionTitle
                      eyebrow="Today at the farm"
                      title="Live-feeling overview"
                      text="A polished, story-led demo of the Bronson Family Farm ecosystem and the pathways available across the platform."
                    />
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/8 p-4 border border-white/10">
                        <div className="flex items-center gap-2 text-emerald-200"><CloudSun className="h-4 w-4" /> Weather</div>
                        <div className="mt-2 text-2xl font-semibold">{weatherTick}°F</div>
                        <a className="mt-1 inline-flex text-sm text-white/75 hover:text-white underline underline-offset-4" href={weatherUrl} target="_blank" rel="noreferrer">
                          View Youngstown weather <ExternalLink className="ml-1 h-3.5 w-3.5" />
                        </a>
                      </div>
                      <div className="rounded-2xl bg-white/8 p-4 border border-white/10">
                        <div className="flex items-center gap-2 text-emerald-200"><MapPin className="h-4 w-4" /> Place</div>
                        <div className="mt-2 text-lg font-semibold">Youngstown, Ohio</div>
                        <div className="mt-1 text-sm text-white/75">Historic Lansdowne Airport site</div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-700/30 to-amber-500/20 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-emerald-100/80">Main pathways</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {roles.map((role) => (
                          <button
                            key={role.id}
                            onClick={() => openRole(role.id)}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition"
                          >
                            {role.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-5 md:p-6 overflow-hidden">
                    <div className="text-xs uppercase tracking-[0.25em] text-emerald-200/75">Partner presence</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {logoline.map((item) => (
                        <div key={item} className="rounded-full border border-white/10 bg-white/7 px-3 py-2 text-xs md:text-sm text-white/90">
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-white/75">
                      Replace these placeholders with your final logos if you want to point them to local files later. The spacing and presentation are already built in.
                    </p>
                  </GlassCard>
                </div>
              </section>

              <section className="pt-10 md:pt-14">
                <SectionTitle
                  eyebrow="Choose a role"
                  title="Every entry point leads somewhere meaningful"
                  text="Each pathway is designed to feel useful, welcoming, and worth returning to—not like a presentation, but like a living platform."
                />
                <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <motion.button
                        key={role.id}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => openRole(role.id)}
                        className="text-left"
                      >
                        <GlassCard className="overflow-hidden h-full">
                          <div className="relative h-56">
                            <div className="absolute inset-0" style={{ backgroundImage: `url(${role.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                            <div className={`absolute inset-0 bg-gradient-to-br ${role.accent}`} />
                            <div className="absolute inset-0 bg-black/25" />
                            <div className="relative h-full p-5 flex flex-col justify-between">
                              <div className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-white/15 border border-white/15 backdrop-blur">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="text-2xl font-semibold tracking-tight">{role.title}</div>
                                <p className="mt-2 text-sm leading-relaxed text-white/85">{role.blurb}</p>
                              </div>
                            </div>
                          </div>
                        </GlassCard>
                      </motion.button>
                    );
                  })}
                </div>
              </section>
            </motion.main>
          )}

          {screen === "role" && (
            <motion.main
              key="role"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="mx-auto max-w-7xl px-4 md:px-8 pb-20"
            >
              <div className="pt-8 md:pt-10 flex items-center justify-between gap-3">
                <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => setScreen("home")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Entrance
                </Button>
                <div className="flex flex-wrap gap-2 justify-end">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`rounded-full px-3 py-2 text-sm border transition ${selectedRole === role.id ? "bg-emerald-600 border-emerald-500 text-white" : "bg-white/5 border-white/15 text-white/85 hover:bg-white/10"}`}
                    >
                      {role.title}
                    </button>
                  ))}
                </div>
              </div>

              <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mt-6">
                <GlassCard className="overflow-hidden">
                  <div className="relative min-h-[460px] md:min-h-[560px]">
                    <div className="absolute inset-0" style={{ backgroundImage: `url(${selected.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${selected.accent}`} />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="relative p-6 md:p-8 h-full flex flex-col justify-end">
                      <div className="max-w-2xl">
                        <div className="text-xs uppercase tracking-[0.28em] text-white/75">Role pathway</div>
                        <h1 className="mt-2 text-4xl md:text-6xl font-semibold tracking-tight">{selected.title}</h1>
                        <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">{selected.blurb}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <div className="space-y-6">
                  {selectedRole === "guest" && <GuestPanel websiteUrl={websiteUrl} onGoCustomer={() => setSelectedRole("customer")} />}
                  {selectedRole === "customer" && <CustomerPanel marketplaceUrl={marketplaceUrl} />}
                  {selectedRole === "grower" && <GrowerPanel />}
                  {selectedRole === "youth" && <YouthPanel />}
                  {selectedRole === "supervisor" && <SupervisorPanel />}
                  {selectedRole === "admin" && <AdminPanel />}
                </div>
              </section>
            </motion.main>
          )}

          {screen === "tour" && (
            <motion.main
              key="tour"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-auto max-w-7xl px-4 md:px-8 pb-20"
            >
              <div className="pt-8 md:pt-10 flex items-center justify-between gap-4">
                <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => setScreen("home")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Exit Tour
                </Button>
                <div className="flex items-center gap-2">
                  <Button className="rounded-2xl bg-white text-[#0c1b12] hover:bg-emerald-50" onClick={() => setIsTourPlaying((p) => !p)}>
                    {isTourPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                    {isTourPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => setTourIndex((i) => Math.max(0, i - 1))}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => setTourIndex((i) => Math.min(tourSteps.length - 1, i + 1))}>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <GlassCard className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-emerald-200/75">Guided Demo</div>
                      <div className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">{tourSteps[tourIndex]}</div>
                    </div>
                    <div className="min-w-[220px] flex-1 max-w-md">
                      <Progress value={((tourIndex + 1) / tourSteps.length) * 100} className="h-2 bg-white/10" />
                      <div className="mt-2 text-sm text-white/70">Step {tourIndex + 1} of {tourSteps.length}</div>
                    </div>
                  </div>

                  <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
                    <TourVisual step={tourSteps[tourIndex]} />
                    <TourNarrative step={tourSteps[tourIndex]} muted={muted} onJump={openRole} marketplaceUrl={marketplaceUrl} />
                  </div>
                </GlassCard>
              </div>
            </motion.main>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function TourVisual({ step }: { step: string }) {
  const map: Record<string, string> = {
    Welcome: image.hero,
    Guest: image.forest,
    Customer: image.market,
    Grower: image.grower,
    "Youth Workforce": image.youth,
    Supervisor: image.learning,
    Admin: image.admin,
    Marketplace: image.seedlings,
  };

  return (
    <GlassCard className="overflow-hidden min-h-[320px] md:min-h-[500px]">
      <div className="relative h-full min-h-[320px] md:min-h-[500px]">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${map[step]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-emerald-950/30 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%)]" />
        <div className="relative p-6 md:p-8 h-full flex flex-col justify-end">
          <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/80">Visual sequence</div>
          <div className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">{step}</div>
        </div>
      </div>
    </GlassCard>
  );
}

function TourNarrative({ step, muted, onJump, marketplaceUrl }: { step: string; muted: boolean; onJump: (id: string) => void; marketplaceUrl: string }) {
  const narrative: Record<string, { title: string; text: string; cta?: string; action?: () => void; href?: string }> = {
    Welcome: {
      title: "A guided entrance into the ecosystem",
      text: muted
        ? "Narration is muted. This tour introduces the purpose of the land, the experience of the platform, and the pathways that bring people back."
        : "Welcome to Bronson Family Farm. This is a living ecosystem rooted in land, legacy, fresh food, learning, partnership, and the future of community-centered agriculture.",
    },
    Guest: {
      title: "Guests discover the story before anything else",
      text: "This role explains why the farm exists, what makes the land special, and how the ecosystem connects history, food access, agritourism, and community restoration.",
      cta: "Open Guest",
      action: () => onJump("guest"),
    },
    Customer: {
      title: "Customers move naturally toward the marketplace",
      text: "Customers can browse produce, find Bubble Babies™, access recipes, and receive nutrition-friendly guidance that makes healthy choices feel possible and practical.",
      cta: "Open Customer",
      action: () => onJump("customer"),
    },
    Grower: {
      title: "Growers enter a support and selling ecosystem",
      text: "Growers can explore collaboration, training, distribution pathways, event participation, and systems that make it easier to produce and sell with dignity.",
      cta: "Open Grower",
      action: () => onJump("grower"),
    },
    "Youth Workforce": {
      title: "Youth workforce is experiential and future-facing",
      text: "The youth pathway centers on work readiness, land-based learning, confidence building, supervision, and exposure to real food system careers.",
      cta: "Open Youth Workforce",
      action: () => onJump("youth"),
    },
    Supervisor: {
      title: "Supervisors support youth and operations",
      text: "This pathway provides visibility into attendance, schedules, team support, check-ins, and the structure needed to keep youth programming strong.",
      cta: "Open Supervisor",
      action: () => onJump("supervisor"),
    },
    Admin: {
      title: "Admin sees the whole system",
      text: "The admin view helps coordinate programs, roles, events, marketplace activity, scanning workflows, and the ecosystem as one connected experience.",
      cta: "Open Admin",
      action: () => onJump("admin"),
    },
    Marketplace: {
      title: "The ecosystem connects outward to commerce",
      text: "Marketplace access should feel real, easy, and trustworthy. This demo connects naturally to the Bronson Family Farm GrownBy shop.",
      cta: "Open Marketplace",
      href: marketplaceUrl,
    },
  };

  const current = narrative[step];

  return (
    <div className="space-y-5">
      <GlassCard className="p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Narrative</div>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">{current.title}</h3>
        <p className="mt-4 text-base text-white/82 leading-relaxed">{current.text}</p>
        {current.cta && current.action ? (
          <Button className="mt-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500" onClick={current.action}>
            {current.cta}
          </Button>
        ) : null}
        {current.cta && current.href ? (
          <a href={current.href} target="_blank" rel="noreferrer">
            <Button className="mt-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500">
              {current.cta} <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        ) : null}
      </GlassCard>

      <GlassCard className="p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Notes</div>
        <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
          <div className="rounded-2xl bg-white/6 border border-white/10 p-4">This master build is English-only to keep the experience stable and focused.</div>
          <div className="rounded-2xl bg-white/6 border border-white/10 p-4">Voice logic can be layered in later without changing the visual structure.</div>
        </div>
      </GlassCard>
    </div>
  );
}

function GuestPanel({ websiteUrl, onGoCustomer }: { websiteUrl: string; onGoCustomer: () => void }) {
  return (
    <>
      <GlassCard className="p-5 md:p-6">
        <SectionTitle
          eyebrow="Guest experience"
          title="Feel the land, the purpose, and the invitation"
          text="The guest pathway introduces the meaning behind Bronson Family Farm: a regenerative vision restoring land, strengthening community, and making room for family, learning, and healthy food access."
        />
        <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
          <Info icon={Trees} title="Regenerative identity" text="This is not a typical farm experience. It is a place of restoration, memory, stewardship, and future possibility." />
          <Info icon={Plane} title="Historic setting" text="Built at the Historic Lansdowne Airport site, where transformation and possibility meet land use and community imagination." />
          <Info icon={Heart} title="Family-centered" text="Designed to welcome children, elders, neighbors, volunteers, and people encountering the farm for the first time." />
          <Info icon={HandHeart} title="Return value" text="Guests can keep exploring, attend events, shop, volunteer, learn, and become part of the wider ecosystem." />
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={websiteUrl} target="_blank" rel="noreferrer">
            <Button className="rounded-2xl bg-emerald-600 hover:bg-emerald-500">Visit Website <ExternalLink className="ml-2 h-4 w-4" /></Button>
          </a>
          <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={onGoCustomer}>
            Continue to Customer <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </GlassCard>

      <GlassCard className="p-5 md:p-6 overflow-hidden">
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <div className="h-48" style={{ backgroundImage: `url(${image.hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </GlassCard>
    </>
  );
}

function CustomerPanel({ marketplaceUrl }: { marketplaceUrl: string }) {
  return (
    <>
      <GlassCard className="p-5 md:p-6">
        <SectionTitle
          eyebrow="Customer pathway"
          title="Buy with confidence. Learn as you go."
          text="Customers should be able to move smoothly from inspiration to purchase, while also receiving support around food choices, fresh produce, and simple preparation ideas."
        />
        <div className="mt-5 grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
            <div className="flex items-center gap-2 text-emerald-200"><ShoppingBasket className="h-4 w-4" /> Marketplace Highlights</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {produceItems.map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90 border border-white/10">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <Info icon={Apple} title="Nutrition-friendly guidance" text="Fresh food becomes more realistic when customers can connect products to meals, habits, and affordable choices." />
            <Info icon={ChefHat} title="Recipe access" text="Simple recipes encourage repeat visits and help people feel more confident buying produce they may not usually choose." />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={marketplaceUrl} target="_blank" rel="noreferrer">
            <Button className="rounded-2xl bg-emerald-600 hover:bg-emerald-500">Enter Marketplace <ExternalLink className="ml-2 h-4 w-4" /></Button>
          </a>
          <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10">Track buying habits</Button>
        </div>
      </GlassCard>

      <GlassCard className="p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Recipe inspirations</div>
        <div className="mt-4 space-y-3">
          {recipes.map((recipe) => (
            <div key={recipe.title} className="rounded-2xl bg-white/6 border border-white/10 p-4">
              <div className="font-medium text-white">{recipe.title}</div>
              <div className="mt-1 text-sm text-white/75 leading-relaxed">{recipe.text}</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </>
  );
}

function GrowerPanel() {
  return (
    <>
      <GlassCard className="p-5 md:p-6">
        <SectionTitle
          eyebrow="Grower ecosystem"
          title="Resources, coordination, and pathways to sell"
          text="Growers are not entering a static page. They are entering a support structure that can connect land, planning, events, marketplace activity, and long-term participation."
        />
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <Info icon={Sprout} title="Production pathway" text="From seedlings to field production, growers can align with seasonal opportunities and collaborative support." />
          <Info icon={ShoppingBasket} title="Sales opportunities" text="The ecosystem can connect growers to markets, pop-ups, event days, and ongoing customer visibility." />
          <Info icon={Calendar} title="Event participation" text="Growers Supply Market and other gatherings create a reason to re-enter the platform and stay active." />
          <Info icon={Layers3} title="Shared tools" text="Planning, coordination, visibility, and network-building matter just as much as growing itself." />
        </div>
      </GlassCard>

      <GlassCard className="p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Grower value</div>
        <div className="mt-4 grid md:grid-cols-3 gap-3">
          {[
            "Collaboration with other growers",
            "Visibility within a branded ecosystem",
            "Pathways into market participation",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/6 border border-white/10 p-4 text-sm text-white/82">{item}</div>
          ))}
        </div>
      </GlassCard>
    </>
  );
}

function YouthPanel() {
  return (
    <>
      <GlassCard className="p-5 md:p-6">
        <SectionTitle
          eyebrow="Youth workforce"
          title="Learning by doing"
          text="This pathway shows youth workforce programming as practical, guided, and connected to real futures in food systems, operations, teamwork, and confidence building."
        />
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <Info icon={GraduationCap} title="Hands-on learning" text="Youth participate in land-based work, systems thinking, and practical activities that feel real—not simulated." />
          <Info icon={Users} title="Mentorship" text="The pathway is supported by adults, supervisors, and ecosystem partners who strengthen confidence and accountability." />
          <Info icon={School} title="Career exposure" text="Food, hospitality, logistics, horticulture, wellness, and entrepreneurship can all be visible here." />
          <Info icon={BadgeCheck} title="Growth and belonging" text="Young people should feel seen, useful, and connected to something larger than a one-time experience." />
        </div>
      </GlassCard>

      <GlassCard className="p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Program sequence</div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/85">
          {[
            "Orientation",
            "Attendance & check-in",
            "Field tasks",
            "Mentor support",
            "Reflection",
            "Workforce readiness",
          ].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/7 px-3 py-2">{item}</span>
          ))}
        </div>
      </GlassCard>
    </>
  );
}

function SupervisorPanel() {
  return (
    <>
      <GlassCard className="p-5 md:p-6">
        <SectionTitle
          eyebrow="Supervisor support"
          title="Operational visibility for the youth workforce pathway"
          text="Supervisors belong specifically to the youth workforce program. This role helps them manage support, structure, attendance, and program flow."
        />
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <Info icon={ScanLine} title="Check-in visibility" text="Support role-based arrival, attendance, and event/program participation through scanning and tracking workflows." />
          <Info icon={Calendar} title="Scheduling" text="Supervisors need a clear picture of who is expected, what is planned, and where support is needed." />
          <Info icon={Users} title="Support staff coordination" text="This role can align with support resources, including wellness and structured program oversight." />
          <Info icon={ShieldCheck} title="Safe, accountable environment" text="The pathway reinforces consistency, responsibility, and confidence for both youth and staff." />
        </div>
      </GlassCard>

      <GlassCard className="p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Supervisor dashboard preview</div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <Metric label="Checked in" value="18" />
          <Metric label="Scheduled today" value="24" />
          <Metric label="Needs follow-up" value="3" />
        </div>
      </GlassCard>
    </>
  );
}

function AdminPanel() {
  return (
    <>
      <GlassCard className="p-5 md:p-6">
        <SectionTitle
          eyebrow="Admin control"
          title="See the ecosystem as one connected experience"
          text="Admin can oversee programs, roles, market activity, event flow, grower participation, and the digital pathways connecting the system together."
        />
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <Info icon={Building2} title="System-wide view" text="Admin can understand how the public-facing experience, marketplace, grower activity, and programs relate to one another." />
          <Info icon={Calendar} title="Event management" text="Support event setup, reservations, QR check-ins, and role-specific attendance experiences." />
          <Info icon={ShoppingBasket} title="Marketplace awareness" text="See how product presentation, customer access, and buying journeys reinforce repeat engagement." />
          <Info icon={Tractor} title="Operational backbone" text="Track the parts of the ecosystem that keep it feeling active, stable, and professionally managed." />
        </div>
      </GlassCard>

      <GlassCard className="p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Admin snapshot</div>
        <div className="mt-4 grid md:grid-cols-4 gap-3">
          <Metric label="Active roles" value="6" />
          <Metric label="Programs" value="4" />
          <Metric label="Upcoming events" value="3" />
          <Metric label="Marketplace links" value="Live" />
        </div>
      </GlassCard>
    </>
  );
}

function Info({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
      <div className="flex items-center gap-2 text-emerald-200"><Icon className="h-4 w-4" /> <span className="font-medium text-white">{title}</span></div>
      <div className="mt-2 text-sm text-white/76 leading-relaxed">{text}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <Card className="rounded-2xl border-white/10 bg-white/6 text-white shadow-none">
      <CardContent className="p-4">
        <div className="text-xs uppercase tracking-[0.22em] text-emerald-200/75">{label}</div>
        <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      </CardContent>
    </Card>
  );
}
