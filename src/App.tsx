import React, { useMemo, useState } from "react";

/**
 * Bronson Family Farm Guided Ecosystem Demo
 * Complete replacement App.tsx
 *
 * This file intentionally avoids Tailwind and icon libraries so the demo does not break
 * if Tailwind/lucide configuration is missing. It uses plain React + inline CSS.
 *
 * Image placement:
 * Put your real farm images in /public or /public/images.
 * The helper below tries /images/name first, then /name.
 */

type Lang = "en" | "es" | "tl" | "it" | "he" | "fr";
type PathwayId = "guest" | "customer" | "marketplace" | "grower" | "youth" | "partners" | "valueAdded" | "investment";

type Scene = {
  id: string;
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  body: string;
  bullets: string[];
  primary: string;
  primaryTarget: string;
  secondary: string;
  secondaryTarget: string;
};

type Pathway = {
  id: PathwayId;
  label: string;
  short: string;
  image: string;
  destination: string;
  promise: string;
  scenes: Scene[];
};

const imageCandidates = (file: string) => [`/images/${file}`, `/${file}`];

const img = (file: string) => imageCandidates(file)[0];

function handleImageError(e: React.SyntheticEvent<HTMLImageElement>, file: string, fallback = "GrowArea.jpg") {
  const el = e.currentTarget;
  const current = el.getAttribute("src") || "";

  if (current.startsWith("/images/")) {
    el.src = `/${file}`;
    return;
  }

  if (file !== fallback && !current.endsWith(fallback)) {
    el.src = `/images/${fallback}`;
    return;
  }

  if (!current.endsWith(fallback)) {
    el.src = `/${fallback}`;
    return;
  }

  el.style.display = "none";
  const parent = el.parentElement;
  if (parent) parent.classList.add("imageFallback");
}

const LANGS: { id: Lang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "es", label: "Español" },
  { id: "tl", label: "Tagalog" },
  { id: "it", label: "Italiano" },
  { id: "he", label: "Hebrew" },
  { id: "fr", label: "Français" },
];

const COPY: Record<Lang, { start: string; subtitle: string; tour: string; choose: string; response: string }> = {
  en: {
    start: "Start the Guided Farm Tour",
    subtitle: "A place-based food ecosystem at the Historic Lansdowne Airport in Youngstown.",
    tour: "Guided Tour",
    choose: "Choose a pathway. Each one tells a different part of the ecosystem story.",
    response: "Leave a Demo Response",
  },
  es: {
    start: "Comenzar el recorrido guiado",
    subtitle: "Un ecosistema alimentario basado en el lugar en el Aeropuerto Histórico Lansdowne de Youngstown.",
    tour: "Recorrido Guiado",
    choose: "Elija un camino. Cada uno cuenta una parte distinta de la historia del ecosistema.",
    response: "Dejar una respuesta del demo",
  },
  tl: {
    start: "Simulan ang Gabay na Paglilibot",
    subtitle: "Isang food ecosystem na nakaugat sa lugar sa Historic Lansdowne Airport sa Youngstown.",
    tour: "Gabay na Tour",
    choose: "Pumili ng pathway. Bawat isa ay nagsasabi ng ibang bahagi ng ecosystem.",
    response: "Mag-iwan ng tugon sa demo",
  },
  it: {
    start: "Inizia il tour guidato",
    subtitle: "Un ecosistema alimentare radicato nel territorio presso lo storico Lansdowne Airport di Youngstown.",
    tour: "Tour Guidato",
    choose: "Scegli un percorso. Ognuno racconta una parte diversa dell'ecosistema.",
    response: "Lascia una risposta al demo",
  },
  he: {
    start: "התחל את הסיור המודרך",
    subtitle: "מערכת מזון מקומית בשדה התעופה ההיסטורי Lansdowne ביונגסטאון.",
    tour: "סיור מודרך",
    choose: "בחרו מסלול. כל מסלול מספר חלק אחר מסיפור המערכת.",
    response: "השאירו תגובה להדגמה",
  },
  fr: {
    start: "Commencer la visite guidée",
    subtitle: "Un écosystème alimentaire enraciné au Historic Lansdowne Airport à Youngstown.",
    tour: "Visite guidée",
    choose: "Choisissez un parcours. Chacun raconte une partie différente de l'écosystème.",
    response: "Laisser une réponse au démo",
  },
};

const pathImage: Record<PathwayId, string> = {
  guest: "GrowArea.jpg",
  customer: "GrowArea.jpg",
  marketplace: "GrowArea.jpg",
  grower: "GrowArea.jpg",
  youth: "GrowArea.jpg",
  partners: "SAM_0214.JPG",
  valueAdded: "GrowArea.jpg",
  investment: "GrowArea.jpg",
};

const pathways: Pathway[] = [
  {
    id: "guest",
    label: "Guest Pathway",
    short: "Understand the story, the place, and why this farm matters.",
    image: pathImage.guest,
    destination: "#guest",
    promise: "This pathway introduces the farm as a living destination, not just a growing site.",
    scenes: [
      {
        id: "guest-arrival",
        eyebrow: "Arrival",
        title: "Step into the Farm. Experience the Wonders of Life.",
        image: "GrowArea.jpg",
        alt: "Bronson Family Farm growing area at the historic airport site",
        body: "The Guest journey begins with the land itself. Bronson Family Farm is growing at the Historic Lansdowne Airport, a place once defined by movement through the air and now being reimagined as a place where food, families, education, and opportunity move through the community.",
        bullets: [
          "Guests are introduced to the airport history and the farm's future as an agritourism destination.",
          "The visit explains why food access, health, and local growing matter in Youngstown today.",
          "The farm becomes a place to learn, reflect, participate, and return."],
        primary: "Next: See the Ecosystem",
        primaryTarget: "scene:guest-ecosystem",
        secondary: "Jump to Pathways",
        secondaryTarget: "#pathways",
      },
      {
        id: "guest-ecosystem",
        eyebrow: "Meaning",
        title: "What Is the Ecosystem?",
        image: "SAM_0188.JPG",
        alt: "Farm pathway and growing space",
        body: "The ecosystem is the organized relationship between growers, customers, youth, partners, value-added producers, and the marketplace. It is designed so the food moves through the system instead of forcing every farmer, family, school, or business to travel everywhere alone.",
        bullets: [
          "Growers gain tools, knowledge, and market connection.",
          "Customers gain access to fresh, chemical-free food and nutrition education.",
          "Partners help build the infrastructure that keeps food and money circulating locally."],
        primary: "Next: Destination Vision",
        primaryTarget: "scene:guest-destination",
        secondary: "Explore Marketplace",
        secondaryTarget: "pathway:marketplace",
      },
      {
        id: "guest-destination",
        eyebrow: "Future",
        title: "From Farm Visit to Agritourism Destination",
        image: "SAM_0195.JPG",
        alt: "Outdoor farm area for future visitor experience",
        body: "The farm is becoming a place where people can visit, learn, shop, gather, and experience a different kind of community development. Future experiences include an 18-hole mini-golf course, kids zone, RC activities, camping, demonstrations, and food-centered learning.",
        bullets: [
          "The destination model creates repeat visits and sustainable revenue.",
          "Agritourism brings people to the farm while the food system moves food out to the community.",
          "The experience connects history, land, family legacy, health, and local economic development."],
        primary: "Choose Another Pathway",
        primaryTarget: "#pathways",
        secondary: "Leave a Demo Response",
        secondaryTarget: "#response",
      },
    ],
  },
  {
    id: "customer",
    label: "Customer Pathway",
    short: "Fresh food, nutrition, repeat healthy choices, and access.",
    image: pathImage.customer,
    destination: "#customer",
    promise: "This pathway shows how families connect to fresh, chemical-free food and practical health education.",
    scenes: [
      {
        id: "customer-food",
        eyebrow: "Food Access",
        title: "Fresh Food Should Be Reachable",
        image: "SAM_0188.JPG",
        alt: "Fresh growing space and crops at the farm",
        body: "The customer journey centers on access to fresh, chemical-free food. Customers should be able to understand what is available, why it matters nutritionally, and how to make repeat healthy choices without confusion.",
        bullets: [
          "The marketplace helps families find produce, seedlings, and growing supplies.",
          "Nutrition education connects food choices to wellness.",
          "SNAP-aware ordering and pickup options can support practical access."],
        primary: "Next: How Food Moves",
        primaryTarget: "scene:customer-circulation",
        secondary: "Go to Marketplace",
        secondaryTarget: "pathway:marketplace",
      },
      {
        id: "customer-circulation",
        eyebrow: "Circulation",
        title: "The Food Moves, Not the Farmer",
        image: "SAM_0195.JPG",
        alt: "Marketplace and distribution concept image",
        body: "The benefit of joining the ecosystem is that distribution is organized. Food can move to families, schools, community programs, businesses, and partners through coordinated systems instead of requiring every person to navigate separate locations on their own.",
        bullets: [
          "The ecosystem strengthens local growers by helping coordinate demand.",
          "Customers benefit from easier access to fresh food.",
          "Money circulates locally when growers, customers, and partners are connected."],
        primary: "Next: Health and Quality",
        primaryTarget: "scene:customer-quality",
        secondary: "Explore Grower Pathway",
        secondaryTarget: "pathway:grower",
      },
      {
        id: "customer-quality",
        eyebrow: "Quality",
        title: "Chemical-Free Food, Grown With Care",
        image: "SAM_0201.JPG",
        alt: "Chemical-free growing and soil-centered farm work",
        body: "The quality story matters. Bronson Family Farm emphasizes growing methods that respect the soil, the people eating the food, and the long-term health of the community.",
        bullets: [
          "Chemical-free growing supports trust and food confidence.",
          "Health education helps families understand what they are eating.",
          "The farm connects food quality to community wellness."],
        primary: "Choose Another Pathway",
        primaryTarget: "#pathways",
        secondary: "Leave a Demo Response",
        secondaryTarget: "#response",
      },
    ],
  },
  {
    id: "marketplace",
    label: "Marketplace Pathway",
    short: "Convert interest into purchasing power and local sustainability.",
    image: pathImage.marketplace,
    destination: "#marketplace",
    promise: "This pathway shows how growers, customers, and partners meet through a coordinated market system.",
    scenes: [
      {
        id: "marketplace-entry",
        eyebrow: "Marketplace",
        title: "A Growers Supply Market, Not Just a Farmers Market",
        image: "SAM_0195.JPG",
        alt: "Marketplace table, produce, seedlings, or event setup",
        body: "The Growers Supply Market is designed around grower need. It brings together tools, knowledge, seedlings, supplies, demonstrations, buyers, and partners so growers can build capacity and customers can understand the value of local food.",
        bullets: [
          "Growers come for practical resources, not only to sell.",
          "Participants demonstrate what they do and how it supports the food ecosystem.",
          "Customers learn how buying locally strengthens food access and local circulation."],
        primary: "Next: What Happens Here",
        primaryTarget: "scene:marketplace-activity",
        secondary: "Customer Journey",
        secondaryTarget: "pathway:customer",
      },
      {
        id: "marketplace-activity",
        eyebrow: "Activity",
        title: "Demonstrations, Supplies, Food, Art, and Workforce Connections",
        image: "SAM_0214.JPG",
        alt: "Participants and demonstration activity at the farm",
        body: "The marketplace experience can include Parker Farms, BIOPIC, SMARTS art activities, Flying High culinary pathway introductions, Queens Village wellness connections, seedlings, tools, soil education, and farm demonstrations. The goal is to make the grower need visible and actionable.",
        bullets: [
          "Flying High can introduce culinary training connected to local food pathways.",
          "SMARTS can bring creative activities that make the farm welcoming for children and families.",
          "Growers and value-added producers are treated as entrepreneurs inside a larger ecosystem."],
        primary: "Next: Circulate Food and Money",
        primaryTarget: "scene:marketplace-circulation",
        secondary: "Value-Added Producers",
        secondaryTarget: "pathway:valueAdded",
      },
      {
        id: "marketplace-circulation",
        eyebrow: "Local Economy",
        title: "Keeping Food and Money Moving Locally",
        image: "SAM_0231.JPG",
        alt: "Local food, value-added, or community marketplace activity",
        body: "The marketplace is the economic engine of the ecosystem. It helps convert interest into purchasing power, supports growers with reliable demand, and gives partners a place to invest in a visible community food system.",
        bullets: [
          "Food moves through the ecosystem to families, schools, businesses, and community programs.",
          "Growers gain a clearer path to sell, distribute, and scale.",
          "The community sees how food access, entrepreneurship, and workforce development connect."],
        primary: "Choose Another Pathway",
        primaryTarget: "#pathways",
        secondary: "Leave a Demo Response",
        secondaryTarget: "#response",
      },
    ],
  },
  {
    id: "grower",
    label: "Grower Pathway",
    short: "Tools, knowledge, shared infrastructure, and market participation.",
    image: pathImage.grower,
    destination: "#grower",
    promise: "This pathway explains why a grower should come and what need the ecosystem answers.",
    scenes: [
      {
        id: "grower-need",
        eyebrow: "Grower Need",
        title: "Why Should the Grower Come?",
        image: "SAM_0201.JPG",
        alt: "Growing area and farm tools",
        body: "A grower should come because growing food takes more than seeds. It takes knowledge, soil support, tools, water planning, pest awareness, distribution, buyers, and a community that understands the value of the work.",
        bullets: [
          "Growers can access demonstrations, supplies, and practical problem solving.",
          "The ecosystem helps reduce isolation by connecting growers to buyers and partners.",
          "The market creates a place where grower needs are seen, respected, and addressed."],
        primary: "Next: Shared Support",
        primaryTarget: "scene:grower-support",
        secondary: "Marketplace Pathway",
        secondaryTarget: "pathway:marketplace",
      },
      {
        id: "grower-support",
        eyebrow: "Support",
        title: "Tools, Knowledge, and Infrastructure",
        image: "SAM_0220.JPG",
        alt: "Farm support, partners, tools, and infrastructure",
        body: "Bronson Family Farm is building a growers supply market because growers need access to more than one-day sales. They need dependable support systems that help them plant, grow, harvest, prepare, sell, and distribute.",
        bullets: [
          "Tool access and demonstrations help growers make better decisions.",
          "Soil, compost, irrigation, and pest education strengthen production.",
          "Coordinated distribution helps growers participate without carrying the whole burden alone."],
        primary: "Next: Entrepreneur Role",
        primaryTarget: "scene:grower-enterprise",
        secondary: "Partner Pathway",
        secondaryTarget: "pathway:partners",
      },
      {
        id: "grower-enterprise",
        eyebrow: "Enterprise",
        title: "Growers Are Entrepreneurs Inside the Ecosystem",
        image: "SAM_0231.JPG",
        alt: "Grower enterprise and market opportunity",
        body: "The grower pathway recognizes growers as entrepreneurs. The ecosystem helps them connect production to demand, reduce waste, learn from others, and participate in a marketplace that is larger than one stand or one farm.",
        bullets: [
          "The grower is part of a regional solution to food insecurity.",
          "The ecosystem can help create predictable buyers and shared visibility.",
          "Grower success strengthens local health, local business, and local resilience."],
        primary: "Choose Another Pathway",
        primaryTarget: "#pathways",
        secondary: "Leave a Demo Response",
        secondaryTarget: "#response",
      },
    ],
  },
  {
    id: "youth",
    label: "Youth Workforce Pathway",
    short: "Skill-building, responsibility, confidence, and future readiness.",
    image: pathImage.youth,
    destination: "#youth",
    promise: "This pathway shows how youth grow through responsibility, outdoor work, and real skill development.",
    scenes: [
      {
        id: "youth-entry",
        eyebrow: "Youth Workforce",
        title: "Young People Learn by Doing Real Work",
        image: "SAM_0214.JPG",
        alt: "Youth workforce or people learning in an outdoor farm setting",
        body: "The youth workforce pathway is not a classroom pretending to be work. It is a structured farm-based experience where young people learn responsibility, teamwork, safety, communication, and the value of completing real tasks.",
        bullets: [
          "Youth participate in orientation, safety expectations, and role-based work.",
          "Supervisors observe progress, attendance, participation, and skill growth.",
          "Parents and guardians can understand what youth are learning and how they are growing."],
        primary: "Next: Skill Growth",
        primaryTarget: "scene:youth-skills",
        secondary: "Partner Pathway",
        secondaryTarget: "pathway:partners",
      },
      {
        id: "youth-skills",
        eyebrow: "Development",
        title: "Building Confidence, Discipline, and Future Readiness",
        image: "SAM_0188.JPG",
        alt: "Outdoor growing area used for youth skill development",
        body: "The farm gives youth a place to practice showing up, using tools safely, listening, solving problems, and seeing how their work contributes to something bigger than themselves.",
        bullets: [
          "Youth connect food, land, health, entrepreneurship, and community service.",
          "Badges and progress markers make growth visible.",
          "The pathway can connect to culinary, agriculture, STEAM, business, and public service careers."],
        primary: "Next: Connection to Ecosystem",
        primaryTarget: "scene:youth-ecosystem",
        secondary: "Grower Pathway",
        secondaryTarget: "pathway:grower",
      },
      {
        id: "youth-ecosystem",
        eyebrow: "Belonging",
        title: "Youth Become Part of the Food System Story",
        image: "SAM_0220.JPG",
        alt: "Community partners and youth opportunity at the farm",
        body: "Youth are not separate from the ecosystem. They help make it possible. Their work can support growers, market days, hospitality, food preparation, site care, technology, and future agritourism experiences.",
        bullets: [
          "Youth workforce development strengthens the farm and the community at the same time.",
          "The pathway creates practical experience that can be documented and shared.",
          "The farm becomes a living training ground for future opportunity."],
        primary: "Choose Another Pathway",
        primaryTarget: "#pathways",
        secondary: "Leave a Demo Response",
        secondaryTarget: "#response",
      },
    ],
  },
  {
    id: "partners",
    label: "Partner Pathway",
    short: "Align resources, solve practical barriers, and build community infrastructure.",
    image: pathImage.partners,
    destination: "#partners",
    promise: "This pathway shows partners where their resources fit and why coordination matters.",
    scenes: [
      {
        id: "partners-role",
        eyebrow: "Partnership",
        title: "Partners Help Build What One Farm Cannot Build Alone",
        image: "SAM_0220.JPG",
        alt: "Partners and infrastructure at Bronson Family Farm",
        body: "Partners are essential because the ecosystem requires infrastructure: water, power, tools, food safety, youth development, transportation, education, marketing, and distribution. Each partner helps solve a practical barrier.",
        bullets: [
          "City, education, nonprofit, health, arts, workforce, and business partners each have a role.",
          "The farm becomes a place where resources can align around visible community need.",
          "Partnership makes the food system more reliable and more replicable."],
        primary: "Next: Practical Asks",
        primaryTarget: "scene:partners-asks",
        secondary: "Investment Pathway",
        secondaryTarget: "pathway:investment",
      },
      {
        id: "partners-asks",
        eyebrow: "Action",
        title: "Partnership Is Specific, Practical, and Visible",
        image: "SAM_0195.JPG",
        alt: "Outdoor setup, resources, or marketplace support",
        body: "The strongest partnership asks are specific. A partner can support canopies, tables, chairs, handwashing, tools, soil, compost, trees, demonstrations, youth workforce, food safety, marketing, technology, transportation, or capital improvements.",
        bullets: [
          "The partner sees exactly how their contribution strengthens the ecosystem.",
          "The community sees collaboration in action.",
          "The farm can document outcomes and build trust for future investment."],
        primary: "Next: Replicable Model",
        primaryTarget: "scene:partners-replicate",
        secondary: "Youth Workforce Pathway",
        secondaryTarget: "pathway:youth",
      },
      {
        id: "partners-replicate",
        eyebrow: "Replication",
        title: "A Local Model That Can Be Repeated",
        image: "GrowArea.jpg",
        alt: "Bronson Family Farm land as a replicable community food model",
        body: "The partner pathway positions Bronson Family Farm and Farm & Family Alliance as a place-based model that can be learned from, improved, and repeated in other communities facing food access, workforce, and land-use challenges.",
        bullets: [
          "The model connects agriculture, health, entrepreneurship, and youth development.",
          "It gives funders and partners a visible place to invest.",
          "It turns underused land into community-serving infrastructure."],
        primary: "Choose Another Pathway",
        primaryTarget: "#pathways",
        secondary: "Leave a Demo Response",
        secondaryTarget: "#response",
      },
    ],
  },
  {
    id: "valueAdded",
    label: "Value-Added Producer Pathway",
    short: "Turn local food into products, enterprise, and circulation.",
    image: pathImage.valueAdded,
    destination: "#value-added",
    promise: "This pathway shows how food becomes product, enterprise, and local economic activity.",
    scenes: [
      {
        id: "value-entry",
        eyebrow: "Value-Added",
        title: "Producers Turn Food Into Opportunity",
        image: "SAM_0231.JPG",
        alt: "Value-added food, market, or product development",
        body: "Value-added producers are entrepreneurs. They help extend the life and value of local food by turning ingredients into prepared foods, preserved goods, culinary products, demonstrations, and small business opportunities.",
        bullets: [
          "Value-added work reduces waste and increases revenue potential.",
          "Culinary education can connect students and entrepreneurs to real market pathways.",
          "Products help customers experience local food in more ways."],
        primary: "Next: Food Circulation",
        primaryTarget: "scene:value-circulation",
        secondary: "Marketplace Pathway",
        secondaryTarget: "pathway:marketplace",
      },
      {
        id: "value-circulation",
        eyebrow: "Circulation",
        title: "Food Becomes Product, Product Becomes Local Revenue",
        image: "SAM_0195.JPG",
        alt: "Marketplace product and food circulation",
        body: "When fresh food becomes a product, it creates more points of participation. Growers, cooks, youth, customers, and partners can all connect through demonstrations, tastings, small batch sales, and future food enterprise development.",
        bullets: [
          "The ecosystem supports both growing and enterprise development.",
          "Food dollars can circulate through more local hands.",
          "Value-added production helps make the marketplace more sustainable."],
        primary: "Next: Future Kitchen and Canning",
        primaryTarget: "scene:value-future",
        secondary: "Customer Pathway",
        secondaryTarget: "pathway:customer",
      },
      {
        id: "value-future",
        eyebrow: "Future Buildout",
        title: "Preparing for Canning, Cooking, and Demonstration Space",
        image: "SAM_0220.JPG",
        alt: "Future infrastructure for canning, cooking, and demonstrations",
        body: "The long-term vision includes food preparation, canning, demonstration, and teaching spaces that help the farm reduce waste, extend seasonal value, and create more reasons for people to return.",
        bullets: [
          "Value-added production supports entrepreneurship and training.",
          "Demonstrations make the farm experience memorable.",
          "Future infrastructure turns the ecosystem into a stronger destination."],
        primary: "Choose Another Pathway",
        primaryTarget: "#pathways",
        secondary: "Leave a Demo Response",
        secondaryTarget: "#response",
      },
    ],
  },
  {
    id: "investment",
    label: "Investment Pathway",
    short: "Capital improvements, sustainability, and a replicable community model.",
    image: pathImage.investment,
    destination: "#investment",
    promise: "This pathway explains why investment strengthens the entire ecosystem.",
    scenes: [
      {
        id: "investment-case",
        eyebrow: "Investment Case",
        title: "Capital Turns Vision Into Infrastructure",
        image: "GrowArea2.jpg",
        alt: "Farm land and infrastructure opportunity",
        body: "Bronson Family Farm is building from the ground up. Capital investment can support water, solar power, security, storage, wash stations, transportation, shelter, growing infrastructure, and agritourism development.",
        bullets: [
          "Infrastructure reduces operating barriers and increases production capacity.",
          "Capital improvements make the farm safer, more reliable, and more scalable.",
          "Investment supports food access, workforce development, and local enterprise at the same time."],
        primary: "Next: Community Impact",
        primaryTarget: "scene:investment-impact",
        secondary: "Partner Pathway",
        secondaryTarget: "pathway:partners",
      },
      {
        id: "investment-impact",
        eyebrow: "Impact",
        title: "A Place-Based Investment in Youngstown",
        image: "SAM_0188.JPG",
        alt: "Youngstown farm land and place-based opportunity",
        body: "The investment is not only in a farm. It is in a community food system that can improve access to fresh food, support growers, train youth, create visitor experiences, and transform land into productive community infrastructure.",
        bullets: [
          "The farm connects history, land, health, business, education, and family legacy.",
          "The model creates visible outcomes funders and investors can understand.",
          "The work can become a replicable example for other communities."],
        primary: "Next: Destination Revenue",
        primaryTarget: "scene:investment-destination",
        secondary: "Marketplace Pathway",
        secondaryTarget: "pathway:marketplace",
      },
      {
        id: "investment-destination",
        eyebrow: "Sustainability",
        title: "Agritourism Helps Sustain the Mission",
        image: "SAM_0231.JPG",
        alt: "Agritourism, marketplace, and destination development",
        body: "The farm's future destination model creates revenue beyond produce alone. Mini-golf, camping, RC activities, kids experiences, demonstrations, prepared foods, and events can help sustain the mission while keeping food access at the center.",
        bullets: [
          "Revenue diversity helps protect the farm during seasonal and economic shifts.",
          "Visitor experiences bring people into the story.",
          "The destination keeps the ecosystem memorable, fundable, and alive."],
        primary: "Choose Another Pathway",
        primaryTarget: "#pathways",
        secondary: "Leave a Demo Response",
        secondaryTarget: "#response",
      },
    ],
  },
];

function findScene(id: string): Scene | undefined {
  for (const p of pathways) {
    const s = p.scenes.find((scene) => scene.id === id);
    if (s) return s;
  }
  return undefined;
}

function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [activePathway, setActivePathway] = useState<PathwayId>("guest");
  const [activeSceneId, setActiveSceneId] = useState("guest-arrival");
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const active = useMemo(() => pathways.find((p) => p.id === activePathway) || pathways[0], [activePathway]);
  const scene = useMemo(() => findScene(activeSceneId) || active.scenes[0], [active, activeSceneId]);
  const sceneIndex = active.scenes.findIndex((s) => s.id === scene.id);
  const isRTL = lang === "he";

  function go(target: string) {
    if (target.startsWith("scene:")) {
      const id = target.replace("scene:", "");
      const foundPath = pathways.find((p) => p.scenes.some((s) => s.id === id));
      if (foundPath) setActivePathway(foundPath.id);
      setActiveSceneId(id);
      setTimeout(() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
      return;
    }
    if (target.startsWith("pathway:")) {
      const id = target.replace("pathway:", "") as PathwayId;
      const found = pathways.find((p) => p.id === id);
      if (found) {
        setActivePathway(found.id);
        setActiveSceneId(found.scenes[0].id);
        setTimeout(() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
      }
      return;
    }
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function nextScene() {
    const next = active.scenes[sceneIndex + 1] || active.scenes[0];
    setActiveSceneId(next.id);
    document.getElementById("tour")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function prevScene() {
    const prev = active.scenes[sceneIndex - 1] || active.scenes[active.scenes.length - 1];
    setActiveSceneId(prev.id);
    document.getElementById("tour")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function selectPathway(id: PathwayId) {
    const p = pathways.find((item) => item.id === id) || pathways[0];
    setActivePathway(id);
    setActiveSceneId(p.scenes[0].id);
    setTimeout(() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
  }

  return (
    <div className="app" dir={isRTL ? "rtl" : "ltr"}>
      <style>{styles}</style>

      <header className="hero" id="home">
        <div className="heroOverlay" />
        <div className="nav">
          <div>
            <div className="brand">Bronson Family Farm</div>
            <div className="tagline">Developed by Bronson Family Farm</div>
          </div>
          <div className="languageBar" aria-label="Language selector">
            {LANGS.map((item) => (
              <button key={item.id} className={lang === item.id ? "lang active" : "lang"} onClick={() => setLang(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="heroContent">
          <p className="kicker">Historic Lansdowne Airport • Youngstown, Ohio</p>
          <h1>A Guided Ecosystem Experience for Food, Family, Growers, and Community</h1>
          <p className="subtitle">{COPY[lang].subtitle}</p>
          <div className="heroButtons">
            <button className="primaryBtn" onClick={() => go("#pathways")}>{COPY[lang].start}</button>
            <button className="secondaryBtn" onClick={() => go("#story")}>Understand the Story</button>
            <button className="secondaryBtn" onClick={() => go("#response")}>{COPY[lang].response}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="story" id="story">
          <div className="sectionLabel">The Story</div>
          <h2>From Historic Airfield to Community Food Infrastructure</h2>
          <p>
            Bronson Family Farm is growing at the Historic Lansdowne Airport, transforming a place known for movement into a place where food, knowledge, opportunity, and family legacy can move through Youngstown. The farm is not simply presenting a problem. It is demonstrating a response: a growers supply market, a learning environment, a marketplace, a workforce pathway, and a future agritourism destination.
          </p>
          <div className="storyGrid">
            <div className="storyCard"><strong>Place-Based</strong><span>Rooted in Youngstown's East Side and the history of the airport.</span></div>
            <div className="storyCard"><strong>Grower-Centered</strong><span>Built around the practical needs growers face before, during, and after harvest.</span></div>
            <div className="storyCard"><strong>Community-Serving</strong><span>Designed so fresh, chemical-free food and local money circulate through the community.</span></div>
          </div>
        </section>

        <section className="pathways" id="pathways">
          <div className="sectionLabel">{COPY[lang].tour}</div>
          <h2>{COPY[lang].choose}</h2>
          <div className="pathwayGrid">
            {pathways.map((p) => (
              <button key={p.id} className={activePathway === p.id ? "pathwayCard selected" : "pathwayCard"} onClick={() => selectPathway(p.id)}>
                <img src={img(p.image)} alt="" onError={(e) => handleImageError(e, p.image)} />
                <span>{p.label}</span>
                <small>{p.short}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="tour" id="tour">
          <div className="tourTop">
            <div>
              <div className="sectionLabel">{active.label}</div>
              <h2>{scene.title}</h2>
              <p className="promise">{active.promise}</p>
            </div>
            <div className="stepper">Step {Math.max(sceneIndex + 1, 1)} of {active.scenes.length}</div>
          </div>

          <div className="tourPanel">
            <div className="imagePanel">
              <img src={img(scene.image)} alt={scene.alt} onError={(e) => handleImageError(e, scene.image)} />
              <div className="imageCaption">{scene.eyebrow}</div>
            </div>
            <div className="copyPanel">
              <p className="bodyText">{scene.body}</p>
              <ul>
                {scene.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="buttonRow">
                <button className="primaryBtn" onClick={() => go(scene.primaryTarget)}>{scene.primary}</button>
                <button className="secondaryBtn dark" onClick={() => go(scene.secondaryTarget)}>{scene.secondary}</button>
              </div>
              <div className="tourControls">
                <button onClick={prevScene}>Back</button>
                <button onClick={nextScene}>Next</button>
                <button onClick={() => go("#pathways")}>Jump to Pathways</button>
                <button onClick={() => go("#response")}>Respond</button>
              </div>
            </div>
          </div>
        </section>

        <section className="map" id="ecosystem-map">
          <div className="sectionLabel">How the Ecosystem Works</div>
          <h2>The food moves through a coordinated system.</h2>
          <div className="flow">
            <div>Growers</div><span>→</span><div>Bronson Family Farm</div><span>→</span><div>Marketplace</div><span>→</span><div>Families, Schools, Businesses, Programs</div><span>→</span><div>Local Circulation</div>
          </div>
          <p>
            This is the benefit of the ecosystem: the farmer does not have to carry the whole burden alone. The system manages visibility, education, distribution, and community connection so food and money can circulate locally.
          </p>
        </section>

        <section className="response" id="response">
          <div className="sectionLabel">Demo Response</div>
          <h2>After the demo, visitors need a place to respond.</h2>
          <p>This demo does not require registration. It invites reflection, feedback, and next-step interest.</p>
          <textarea value={response} onChange={(e) => setResponse(e.target.value)} placeholder="What pathway interested you most? What would you like to support, visit, fund, or learn more about?" />
          <button className="primaryBtn" onClick={() => setSubmitted(true)}>Save Demo Response</button>
          {submitted && <div className="thanks">Response saved in this demo view. Connect this button later to Supabase, HubSpot, Google Forms, or your CRM.</div>}
        </section>
      </main>

      <footer>
        <strong>Bronson Family Farm</strong>
        <span>Growers Supply Market • Community Food Ecosystem • Youngstown, Ohio</span>
        <button onClick={() => go("#home")}>Back to Top</button>
      </footer>
    </div>
  );
}

const styles = `
:root {
  --forest:#1f3327;
  --moss:#52633f;
  --cream:#f7f0df;
  --wheat:#ddc899;
  --soil:#3a281f;
  --leaf:#dfe9cf;
  --white:#fffaf0;
  --shadow:0 24px 70px rgba(18,28,20,.28);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Georgia,'Times New Roman',serif;background:var(--cream);color:var(--soil)}
button{font-family:inherit;cursor:pointer}
.app{min-height:100vh;background:linear-gradient(180deg,#f8f1df,#efe2c5)}
.hero{min-height:94vh;position:relative;background-image:url('/images/GrowArea.jpg');background-size:cover;background-position:center;display:flex;flex-direction:column;color:white;overflow:hidden}
.hero:after{content:'';position:absolute;inset:0;background-image:url('/GrowArea.jpg');background-size:cover;background-position:center;z-index:-2}
.heroOverlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(20,31,23,.92),rgba(20,31,23,.68),rgba(20,31,23,.25));z-index:0}
.nav{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:flex-start;gap:24px;padding:28px clamp(18px,4vw,60px)}
.brand{font-size:1.5rem;font-weight:800;letter-spacing:.03em}.tagline{font-size:.92rem;color:var(--leaf);margin-top:4px}.languageBar{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end}.lang{border:1px solid rgba(255,255,255,.45);background:rgba(255,255,255,.12);color:white;border-radius:999px;padding:8px 12px}.lang.active{background:var(--wheat);color:var(--forest);font-weight:800}
.heroContent{position:relative;z-index:2;max-width:980px;padding:8vh clamp(20px,6vw,88px) 12vh}.kicker,.sectionLabel{text-transform:uppercase;letter-spacing:.16em;font-weight:800;font-size:.8rem;color:var(--wheat)}
h1{font-size:clamp(2.6rem,7vw,6rem);line-height:.94;margin:16px 0;max-width:1000px} .subtitle{font-size:clamp(1.15rem,2.4vw,1.65rem);line-height:1.5;max-width:760px;color:#fff7df}.heroButtons,.buttonRow,.tourControls{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
.primaryBtn,.secondaryBtn,.tourControls button,footer button{border:0;border-radius:999px;padding:13px 18px;font-weight:800;box-shadow:0 10px 22px rgba(0,0,0,.16)}.primaryBtn{background:var(--wheat);color:var(--forest)}.secondaryBtn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.38);color:white}.secondaryBtn.dark,.tourControls button{background:var(--forest);color:var(--cream)}
main{width:min(1180px,92vw);margin:auto}.story,.pathways,.tour,.map,.response{padding:70px 0}.story h2,.pathways h2,.tour h2,.map h2,.response h2{font-size:clamp(2rem,4.6vw,3.8rem);line-height:1;margin:10px 0 18px;color:var(--forest)}.story p,.map p,.response p{font-size:1.18rem;line-height:1.7;max-width:900px}.storyGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:26px}.storyCard{background:var(--white);border-radius:24px;padding:24px;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:10px}.storyCard strong{font-size:1.25rem;color:var(--forest)}.storyCard span{line-height:1.55}
.pathwayGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.pathwayCard{text-align:left;background:var(--white);border:2px solid transparent;border-radius:28px;overflow:hidden;padding:0;box-shadow:var(--shadow);color:var(--soil);transition:.2s transform,.2s border}.pathwayCard:hover{transform:translateY(-4px)}.pathwayCard.selected{border-color:var(--moss)}.pathwayCard img{width:100%;height:150px;object-fit:cover;background:var(--leaf)}.pathwayCard.imageFallback{min-height:150px;background:linear-gradient(135deg,#dfe9cf,#f7f0df,#ddc899)}.pathwayCard span{display:block;font-weight:900;font-size:1.1rem;padding:16px 16px 6px;color:var(--forest)}.pathwayCard small{display:block;padding:0 16px 18px;line-height:1.45;font-size:.92rem}
.tourTop{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.promise{font-size:1.08rem;line-height:1.55;max-width:780px}.stepper{background:var(--forest);color:var(--cream);border-radius:999px;padding:10px 16px;font-weight:800;white-space:nowrap}.tourPanel{display:grid;grid-template-columns:1.05fr .95fr;background:var(--white);border-radius:34px;overflow:hidden;box-shadow:var(--shadow);min-height:560px}.imagePanel{position:relative;background:var(--leaf)}.imageFallback{background:linear-gradient(135deg,#1f3327,#52633f,#ddc899);min-height:150px}.imagePanel img{width:100%;height:100%;object-fit:cover;display:block}.imageCaption{position:absolute;left:20px;bottom:20px;background:rgba(31,51,39,.88);color:var(--cream);border-radius:999px;padding:10px 15px;font-weight:900}.copyPanel{padding:clamp(24px,4vw,48px);display:flex;flex-direction:column;justify-content:center}.bodyText{font-size:1.2rem;line-height:1.72}.copyPanel li{margin:12px 0;line-height:1.55;font-size:1.04rem}.tourControls{border-top:1px solid #e2d2aa;padding-top:18px}.tourControls button{box-shadow:none;padding:10px 14px}
.flow{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin:24px 0}.flow div{background:var(--forest);color:var(--cream);border-radius:18px;padding:16px 18px;font-weight:900}.flow span{font-size:1.5rem;color:var(--moss);font-weight:900}.response textarea{width:100%;min-height:160px;border:2px solid #d2bd8a;border-radius:24px;padding:18px;font-size:1rem;background:var(--white);margin:14px 0}.thanks{margin-top:14px;background:#edf5df;border-left:6px solid var(--moss);padding:16px;border-radius:14px;font-weight:800;color:var(--forest)}
footer{background:var(--forest);color:var(--cream);padding:30px clamp(18px,4vw,60px);display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}footer span{color:var(--leaf)}footer button{background:var(--wheat);color:var(--forest)}
@media(max-width:940px){.nav{flex-direction:column}.pathwayGrid{grid-template-columns:repeat(2,1fr)}.tourPanel{grid-template-columns:1fr}.imagePanel img{height:360px}.storyGrid{grid-template-columns:1fr}.tourTop{flex-direction:column}.hero{min-height:86vh}}
@media(max-width:560px){.pathwayGrid{grid-template-columns:1fr}.heroButtons,.buttonRow,.tourControls{flex-direction:column}.primaryBtn,.secondaryBtn,.tourControls button{width:100%}h1{font-size:2.45rem}.languageBar{justify-content:flex-start}.imagePanel img{height:280px}}
`;

export default App;
