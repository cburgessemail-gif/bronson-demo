const steps: Step[] = [
  {
    id: "entrance",
    nav: "Entrance",
    title: "Farm Entrance",
    subtitle: "Begin at the Historic Lansdowne Airport.",
    icon: MapPin,
    image: imagePaths.hero,
    bullets: [
      "A guided ecosystem experience rooted in food, land, people, and opportunity.",
      "The entrance introduces visitors to the purpose and scale of the vision.",
      "The airport location creates a memorable and place-based destination.",
    ],
    details:
      "Bronson Family Farm transforms underutilized land into food production, education, workforce development, marketplace circulation, and community collaboration.",
    actionLabel: "Continue to History",
    secondaryLabel: "Visit Marketplace",
    secondaryTarget: "marketplace",
  },

  {
    id: "history",
    nav: "History",
    title: "History & Legacy",
    subtitle: "The story behind the ecosystem.",
    icon: Plane,
    image: imagePaths.hero,
    bullets: [
      "The project is rooted in family legacy, agriculture, education, and service.",
      "The airport location reflects movement, visibility, and transformation.",
      "The ecosystem honors both history and future opportunity.",
    ],
    details:
      "The farm connects the Bronson and Lorenzana family legacies with a vision for regional food access, agritourism, youth workforce, and economic renewal.",
    actionLabel: "Continue to Ecosystem",
    secondaryLabel: "Visit Growers",
    secondaryTarget: "grower",
  },

  {
    id: "ecosystem",
    nav: "Ecosystem",
    title: "The Ecosystem",
    subtitle: "Food, tools, knowledge, and opportunity circulating together.",
    icon: Sprout,
    image: imagePaths.grower,
    bullets: [
      "The food moves, not the farmer.",
      "Growers connect to tools, buyers, education, and distribution.",
      "The ecosystem integrates community, food, workforce, and partnerships.",
    ],
    details:
      "This ecosystem helps connect growers, customers, youth, partners, and marketplace activity into one coordinated regional food system.",
    actionLabel: "Continue to Guest Pathway",
    secondaryLabel: "Visit Marketplace",
    secondaryTarget: "marketplace",
  },

  {
    id: "guest",
    nav: "Guest",
    title: "Guest Pathway",
    subtitle: "Understand the vision, story, and purpose.",
    icon: Users,
    image: imagePaths.guest,
    bullets: [
      "Guests experience the farm as a destination.",
      "Visitors understand the mission beyond produce sales.",
      "The pathway creates belonging and understanding.",
    ],
    details:
      "The guest pathway introduces people to the purpose of the farm: food access, education, growers, wellness, and community revitalization.",
    actionLabel: "Continue to Customer Pathway",
    secondaryLabel: "Register on Eventbrite",
    actionHref: "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator",
  },

  {
    id: "customer",
    nav: "Customer",
    title: "Customer Pathway",
    subtitle: "Fresh food, health, and repeat healthy choices.",
    icon: HeartPulse,
    image: imagePaths.customer,
    bullets: [
      "Customers gain access to local food and seedlings.",
      "Healthy food becomes more visible and accessible.",
      "The pathway encourages trust and repeat engagement.",
    ],
    details:
      "Customers learn how local growing strengthens health, nutrition, and community resilience through accessible, quality food.",
    actionLabel: "Visit Marketplace",
    actionHref: "https://grownby.com/farms/bronson-family-farm/shop",
    secondaryLabel: "Continue to Marketplace",
    secondaryTarget: "marketplace",
  },

  {
    id: "marketplace",
    nav: "Marketplace",
    title: "Marketplace Pathway",
    subtitle: "Transforming interest into sustainability.",
    icon: ShoppingBasket,
    image: imagePaths.marketplace,
    bullets: [
      "The marketplace helps food and dollars circulate locally.",
      "Growers connect to customers through coordinated distribution.",
      "The ecosystem supports local food accessibility.",
    ],
    details:
      "The marketplace creates a system where growers can participate in a larger coordinated food network instead of operating alone.",
    actionLabel: "Open Marketplace",
    actionHref: "https://grownby.com/farms/bronson-family-farm/shop",
    secondaryLabel: "Continue to Growers",
    secondaryTarget: "grower",
  },

  {
    id: "grower",
    nav: "Grower",
    title: "Grower Pathway",
    subtitle: "Tools, support, education, and opportunity.",
    icon: Tractor,
    image: imagePaths.grower,
    bullets: [
      "Growers gain practical support and connections.",
      "The Growers Supply Market focuses on grower needs.",
      "Knowledge, tools, seedlings, and demonstrations support success.",
    ],
    details:
      "This pathway explains why growers should come: practical help, real relationships, and stronger participation in the food ecosystem.",
    actionLabel: "Continue to Youth Workforce",
    secondaryLabel: "Register on Eventbrite",
    actionHref: "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator",
  },

  {
    id: "youth",
    nav: "Youth Workforce",
    title: "Youth Workforce Pathway",
    subtitle: "Skills, responsibility, and future readiness.",
    icon: GraduationCap,
    image: imagePaths.youth,
    bullets: [
      "Youth gain real-world outdoor work experience.",
      "Agriculture, RC activities, media, and teamwork create engagement.",
      "The farm becomes a living classroom.",
    ],
    details:
      "The youth workforce pathway prepares young people for leadership, responsibility, entrepreneurship, and workforce participation.",
    actionLabel: "Continue to Partners",
    secondaryLabel: "View Destination Vision",
    secondaryTarget: "destination",
  },

  {
    id: "partners",
    nav: "Partners",
    title: "Partner Pathway",
    subtitle: "Collaboration creating measurable impact.",
    icon: Handshake,
    image: imagePaths.partner,
    bullets: [
      "Partners help support education, workforce, food access, and infrastructure.",
      "Organizations can clearly see how they fit into the ecosystem.",
      "Partnership becomes visible and action-oriented.",
    ],
    details:
      "The partner pathway connects organizations, businesses, schools, funders, and civic leaders to real community impact opportunities.",
    actionLabel: "Continue to Destination",
    secondaryLabel: "Leave Feedback",
    secondaryTarget: "feedback",
  },

  {
    id: "destination",
    nav: "Destination",
    title: "Agritourism Destination",
    subtitle: "A place people remember and return to.",
    icon: Tent,
    image: imagePaths.destination,
    bullets: [
      "The long-term vision includes camping, mini-golf, RC experiences, food, and education.",
      "The destination model supports sustainability and visibility.",
      "The farm experience becomes interactive and memorable.",
    ],
    details:
      "Bronson Family Farm is evolving into a regional agritourism and food ecosystem destination centered around learning, wellness, and family experience.",
    actionLabel: "Continue to Event Day",
    secondaryLabel: "Visit Marketplace",
    secondaryTarget: "marketplace",
  },

  {
    id: "event",
    nav: "Event Day",
    title: "Growers Supply Market",
    subtitle: "A grower-centered ecosystem event.",
    icon: ShieldCheck,
    image: imagePaths.marketplace,
    bullets: [
      "This is not a farmers market.",
      "The event focuses on grower needs, demonstrations, tools, and collaboration.",
      "Participants include growers, educators, culinary, youth, and community organizations.",
    ],
    details:
      "The Growers Supply Market helps growers access ideas, relationships, tools, demonstrations, and opportunities for stronger food participation.",
    actionLabel: "Register on Eventbrite",
    actionHref: "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator",
    secondaryLabel: "Continue to Feedback",
    secondaryTarget: "feedback",
  },

  {
    id: "feedback",
    nav: "Feedback",
    title: "Complete the Journey",
    subtitle: "The ecosystem continues after the demo.",
    icon: MessageSquare,
    image: imagePaths.hero,
    bullets: [
      "Visitors can identify their role within the ecosystem.",
      "The journey closes with clear next steps.",
      "The demo encourages ongoing participation and collaboration.",
    ],
    details:
      "The final pathway allows visitors to continue their relationship with Bronson Family Farm through registration, marketplace participation, partnerships, volunteering, or investment.",
    actionLabel: "Return to Entrance",
    secondaryLabel: "Visit Website",
    actionHref: "https://www.bronsonfamilyfarm.com/",
  },
];
