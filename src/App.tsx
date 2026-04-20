import React, { useEffect, useMemo, useState } from "react";

type View =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type Lang = "en" | "es" | "tl" | "it" | "jam" | "he";

type Product = {
  key: string;
  title: string;
  text: string;
  badge: string;
  image: string;
};

type Recipe = {
  key: string;
  title: string;
  text: string;
};

type PageBlock = {
  title: string;
  text: string;
};

type LangPack = {
  languageName: string;
  shortLabel: string;
  nav: Record<View, string>;
  top: {
    title: string;
    subtitle: string;
    language: string;
    guided: string;
    stopGuided: string;
    speak: string;
    mute: string;
  };
  home: {
    kicker: string;
    title: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
    stats: { number: string; title: string; text: string }[];
    sectionTitle: string;
    sectionText: string;
    pathways: { key: View; title: string; text: string }[];
  };
  guidedTour: {
    title: string;
    intro: string;
    next: string;
    previous: string;
    finish: string;
    steps: { view: View; label: string; blurb: string }[];
  };
  guest: {
    badge: string;
    heading: string;
    intro: string;
    cards: PageBlock[];
    actions: { toCustomer: string; toPartners: string };
  };
  customer: {
    badge: string;
    heading: string;
    intro: string;
    cards: PageBlock[];
    nutritionTitle: string;
    nutritionTips: string[];
    recipeTitle: string;
    recipes: Recipe[];
    actions: {
      marketplace: string;
      guest: string;
    };
  };
  marketplace: {
    badge: string;
    heading: string;
    intro: string;
    chips: string[];
    actions: {
      store: string;
      customer: string;
      grower: string;
      pickup: string;
    };
    productsTitle: string;
    products: Product[];
    strengthsTitle: string;
    strengths: string[];
    viewersTitle: string;
    viewersText: string;
    scheduleTitle: string;
    schedule: string[];
  };
  grower: {
    badge: string;
    heading: string;
    intro: string;
    cards: PageBlock[];
    opportunitiesTitle: string;
    opportunities: string[];
  };
  youth: {
    badge: string;
    heading: string;
    intro: string;
    cards: PageBlock[];
    supportTitle: string;
    support: string[];
  };
  partners: {
    badge: string;
    heading: string;
    intro: string;
    cards: PageBlock[];
    partnerStripTitle: string;
    partnerNames: string[];
  };
  footer: string;
};

const marketplaceImages = {
  greens:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  seedlings:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  bubble:
    "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
};

const content: Record<Lang, LangPack> = {
  en: {
    languageName: "English",
    shortLabel: "EN",
    nav: {
      home: "Home",
      guest: "Guest",
      customer: "Customer",
      marketplace: "Marketplace",
      grower: "Grower",
      youth: "Youth Workforce",
      partners: "Partners",
    },
    top: {
      title: "Bronson Family Farm",
      subtitle: "Regenerative Farm Ecosystem Demo",
      language: "Language",
      guided: "Guided Tour",
      stopGuided: "Stop Tour",
      speak: "Narration On",
      mute: "Narration Off",
    },
    home: {
      kicker: "Step into the ecosystem",
      title: "Bronson Family Farm is more than a farm.",
      intro:
        "It is a regenerative ecosystem connecting land, food access, marketplace activity, growers, youth workforce development, education, and partnership in Youngstown and the Mahoning Valley Area.",
      ctaPrimary: "Enter Marketplace",
      ctaSecondary: "Begin Guided Tour",
      chips: [
        "Serving the Mahoning Valley Area",
        "Fresh Local Food",
        "Workforce Connected",
        "Community Powered",
      ],
      stats: [
        {
          number: "118+",
          title: "acres of vision and possibility",
          text: "A destination for food access, agritourism, education, workforce pathways, and community return.",
        },
        {
          number: "6",
          title: "role pathways in one ecosystem",
          text: "Guest, Customer, Marketplace, Grower, Youth Workforce, and Partners each have a reason to come back again and again.",
        },
      ],
      sectionTitle: "Choose how people experience the platform.",
      sectionText:
        "Each pathway is designed to feel purposeful, welcoming, and active — not like a presentation. Visitors should understand why the farm exists, what it offers, and where they can go next.",
      pathways: [
        {
          key: "guest",
          title: "Guest",
          text: "Discover the story, the land, the mission, and why this place matters.",
        },
        {
          key: "customer",
          title: "Customer",
          text: "Find produce, nutrition guidance, recipes, and a clear path into the marketplace.",
        },
        {
          key: "marketplace",
          title: "Marketplace",
          text: "Move naturally into real farm commerce through a stronger storefront experience.",
        },
        {
          key: "grower",
          title: "Grower",
          text: "Support production, planning, participation, and market connection.",
        },
        {
          key: "youth",
          title: "Youth Workforce",
          text: "Show training, supervision, exposure, and meaningful participation.",
        },
        {
          key: "partners",
          title: "Partners",
          text: "Invite sponsors, institutions, cities, and supporters into the work.",
        },
      ],
    },
    guidedTour: {
      title: "Guided Tour",
      intro: "Follow the ecosystem journey step by step.",
      next: "Next Stop",
      previous: "Previous",
      finish: "Finish Tour",
      steps: [
        {
          view: "home",
          label: "Home",
          blurb:
            "Start with the vision: this is more than a farm. It is a regenerative ecosystem serving the Mahoning Valley Area.",
        },
        {
          view: "guest",
          label: "Guest",
          blurb:
            "Guests discover the story, the land, and the reason this work matters to families and community health.",
        },
        {
          view: "customer",
          label: "Customer",
          blurb:
            "Customers receive produce access, nutrition guidance, recipe ideas, and a smooth path into shopping.",
        },
        {
          view: "marketplace",
          label: "Marketplace",
          blurb:
            "The marketplace shows real commerce, seasonal offerings, pickup readiness, and GrownBy connection.",
        },
        {
          view: "grower",
          label: "Grower",
          blurb:
            "Growers connect to planning, production, visibility, and community-centered sales opportunities.",
        },
        {
          view: "youth",
          label: "Youth Workforce",
          blurb:
            "Youth workforce highlights training, responsibility, supervision, and future opportunity.",
        },
        {
          view: "partners",
          label: "Partners",
          blurb:
            "Partners see how their support advances food access, restoration, workforce development, and public value.",
        },
      ],
    },
    guest: {
      badge: "Guest Experience",
      heading: "Step into the story behind the land.",
      intro:
        "Bronson Family Farm responds to rising food costs, community need, and the desire for healthier, more connected local systems.",
      cards: [
        {
          title: "Why it matters",
          text: "Rising food costs push families toward overprocessed food. This ecosystem responds with land-based solutions, healthier access, and long-term community value.",
        },
        {
          title: "What guests discover",
          text: "The story, the land, the vision, the family legacy, and the connection between restoration, health, access, and opportunity.",
        },
        {
          title: "Where guests can go next",
          text: "Guests can continue into shopping, customer education, partnership exploration, or the youth workforce pathway.",
        },
      ],
      actions: {
        toCustomer: "Continue to Customer",
        toPartners: "Explore Partners",
      },
    },
    customer: {
      badge: "Customer Experience",
      heading: "Make healthy choices feel easier and more welcoming.",
      intro:
        "Customers should feel cared for, informed, and invited back through produce access, nutrition guidance, recipes, and a clear path into the marketplace.",
      cards: [
        {
          title: "Shop Seasonal Produce",
          text: "Fresh seedlings, produce, and farm offerings with simple ordering and pickup.",
        },
        {
          title: "Nutrition Guidance",
          text: "Practical food education that helps families make stronger everyday choices.",
        },
        {
          title: "Repeat Visit Logic",
          text: "Recipes, featured products, and buying habits are built to bring people back again and again.",
        },
      ],
      nutritionTitle: "Nutrition Guidance",
      nutritionTips: [
        "Choose more fresh greens, cabbage, broccoli, peppers, and seasonal produce when available.",
        "Use local produce to reduce dependence on heavily processed foods.",
        "Pair simple meal ideas with pickup options so healthy food is easier to use.",
      ],
      recipeTitle: "Recipe Ideas",
      recipes: [
        {
          key: "greens",
          title: "Mahoning Valley Greens Bowl",
          text: "Fresh greens, cabbage, peppers, and a simple dressing for a quick weekday meal.",
        },
        {
          key: "soup",
          title: "Garden Vegetable Soup",
          text: "A flexible recipe for cabbage, collards, broccoli, herbs, and seasonal vegetables.",
        },
        {
          key: "stir",
          title: "Farm Fresh Stir-Fry",
          text: "A quick skillet meal using peppers, broccoli, greens, and local add-ins.",
        },
      ],
      actions: {
        marketplace: "Go to Marketplace",
        guest: "Back to Guest Experience",
      },
    },
    marketplace: {
      badge: "Marketplace Experience",
      heading: "Marketplace powered by Bronson Family Farm + GrownBy",
      intro:
        "This page shows how customers browse what is available, plan pickup, and move naturally into real farm commerce.",
      chips: [
        "Serving the Mahoning Valley Area",
        "Available This Week",
        "SNAP Accepted",
        "Fresh Local Food",
        "Seasonal Inventory",
      ],
      actions: {
        store: "Open GrownBy Store",
        customer: "Back to Customer Path",
        grower: "Become a Grower Vendor",
        pickup: "Pickup Fridays 4–7 PM",
      },
      productsTitle: "Featured Marketplace Highlights",
      products: [
        {
          key: "greens",
          title: "Fresh Greens Bundle",
          text: "SNAP-friendly produce focus, seasonal availability, and market pickup connection.",
          badge: "Available This Week",
          image: marketplaceImages.greens,
        },
        {
          key: "seedlings",
          title: "Seedlings & Starts",
          text: "Garden-ready options for households, growers, and community planting activity.",
          badge: "Spring + Summer Ready",
          image: marketplaceImages.seedlings,
        },
        {
          key: "bubble",
          title: "Bubble Babies™",
          text: "A signature product that connects education, growing, and a memorable farm brand experience.",
          badge: "Featured Product",
          image: marketplaceImages.bubble,
        },
      ],
      strengthsTitle: "Marketplace strengths",
      strengths: [
        "Direct path to real purchasing",
        "Pickup and pre-order readiness",
        "Seasonal product storytelling",
        "Bridge between learning and buying",
      ],
      viewersTitle: "What this tells viewers",
      viewersText:
        "The farm is not only beautiful in concept. It is operational, community-serving, and capable of supporting repeat customer behavior through a real commerce channel.",
      scheduleTitle: "Marketplace rhythm",
      schedule: [
        "Featured inventory updated by season",
        "Pickup-ready ordering flow",
        "Community-friendly shopping experience",
        "Connected to GrownBy for real store access",
      ],
    },
    grower: {
      badge: "Grower Experience",
      heading: "A welcoming ecosystem for growers and producers.",
      intro:
        "Growers enter a supportive pathway where production, seasonality, visibility, and market connection work together.",
      cards: [
        {
          title: "Production Planning",
          text: "Support for crop timing, seed starts, seasonality, and readiness.",
        },
        {
          title: "Market Connection",
          text: "A clear bridge from growing into community commerce and customer access.",
        },
        {
          title: "Shared Ecosystem",
          text: "Growers should feel welcomed, useful, and visible inside a larger regional mission.",
        },
      ],
      opportunitiesTitle: "Grower opportunities",
      opportunities: [
        "Seasonal visibility through marketplace participation",
        "Connection to community-facing sales",
        "Supportive ecosystem positioning rather than isolation",
      ],
    },
    youth: {
      badge: "Youth Workforce Experience",
      heading: "Training, structure, support, and meaningful responsibility.",
      intro:
        "This pathway shows hands-on learning, work habits, structure, supervision, and support. Supervisor belongs within Youth Workforce only.",
      cards: [
        {
          title: "Hands-On Learning",
          text: "Land-based workforce exposure with real responsibility and visible contribution.",
        },
        {
          title: "Supervisor Support",
          text: "Guidance, accountability, workflow support, and connected wellness-oriented support resources.",
        },
        {
          title: "Meaningful Participation",
          text: "Youth should see themselves inside a real ecosystem with purpose, skills, and future pathways.",
        },
      ],
      supportTitle: "Support structure",
      support: [
        "Supervisor guidance within youth workforce",
        "Clear task ownership and accountability",
        "Connected support staff resources and wellness-centered care",
      ],
    },
    partners: {
      badge: "Partners Experience",
      heading: "Support that creates visible community value.",
      intro:
        "Partners should clearly see how their involvement supports food access, workforce development, agritourism, restoration, and measurable community benefit.",
      cards: [
        {
          title: "City & Civic Alignment",
          text: "Land use, youth pathways, neighborhood benefit, and visible public value.",
        },
        {
          title: "Institutional Collaboration",
          text: "A place for schools, universities, health organizations, nonprofits, and community systems to engage.",
        },
        {
          title: "Sponsor Visibility",
          text: "A credible platform for resource partners, supporters, and long-term collaborators.",
        },
      ],
      partnerStripTitle: "Current and desired partner visibility",
      partnerNames: [
        "Home Depot",
        "Petitti Garden Centers",
        "Elliott's Garden Center",
        "City of Youngstown",
        "Central State University",
        "Jewish Community Center",
      ],
    },
    footer: "Developed by Bronson Family Farm",
  },

  es: {
    ...({} as LangPack),
    languageName: "Español",
    shortLabel: "ES",
    nav: {
      home: "Inicio",
      guest: "Invitado",
      customer: "Cliente",
      marketplace: "Mercado",
      grower: "Productor",
      youth: "Juventud Laboral",
      partners: "Socios",
    },
    top: {
      title: "Bronson Family Farm",
      subtitle: "Demostración del Ecosistema Agrícola Regenerativo",
      language: "Idioma",
      guided: "Recorrido Guiado",
      stopGuided: "Detener Recorrido",
      speak: "Narración Activa",
      mute: "Narración Apagada",
    },
    home: {
      kicker: "Entre al ecosistema",
      title: "Bronson Family Farm es más que una granja.",
      intro:
        "Es un ecosistema regenerativo que conecta tierra, acceso a alimentos, actividad del mercado, productores, desarrollo laboral juvenil, educación y colaboración en Youngstown y el área del Valle de Mahoning.",
      ctaPrimary: "Entrar al Mercado",
      ctaSecondary: "Comenzar Recorrido Guiado",
      chips: [
        "Sirviendo al Área del Valle de Mahoning",
        "Alimentos Locales Frescos",
        "Conectado a la Fuerza Laboral",
        "Impulsado por la Comunidad",
      ],
      stats: [
        {
          number: "118+",
          title: "acres de visión y posibilidad",
          text: "Un destino para acceso a alimentos, agroturismo, educación, oportunidades laborales y beneficio comunitario.",
        },
        {
          number: "6",
          title: "rutas dentro de un ecosistema",
          text: "Invitado, Cliente, Mercado, Productor, Juventud Laboral y Socios tienen una razón para regresar una y otra vez.",
        },
      ],
      sectionTitle: "Elija cómo las personas experimentan la plataforma.",
      sectionText:
        "Cada ruta está diseñada para sentirse útil, acogedora y activa, no como una presentación. Los visitantes deben entender por qué existe la granja, qué ofrece y a dónde pueden ir después.",
      pathways: [
        { key: "guest", title: "Invitado", text: "Descubra la historia, la tierra, la misión y por qué este lugar importa." },
        { key: "customer", title: "Cliente", text: "Encuentre productos, orientación nutricional, recetas y un camino claro al mercado." },
        { key: "marketplace", title: "Mercado", text: "Muévase naturalmente hacia el comercio agrícola real mediante una experiencia más sólida." },
        { key: "grower", title: "Productor", text: "Apoye producción, planificación, participación y conexión con el mercado." },
        { key: "youth", title: "Juventud Laboral", text: "Muestre formación, supervisión, exposición y participación significativa." },
        { key: "partners", title: "Socios", text: "Invite patrocinadores, instituciones, ciudades y aliados al trabajo." },
      ],
    },
    guidedTour: {
      title: "Recorrido Guiado",
      intro: "Siga paso a paso el viaje del ecosistema.",
      next: "Siguiente Parada",
      previous: "Anterior",
      finish: "Finalizar Recorrido",
      steps: [
        { view: "home", label: "Inicio", blurb: "Comience con la visión: esto es más que una granja. Es un ecosistema regenerativo que sirve al Valle de Mahoning." },
        { view: "guest", label: "Invitado", blurb: "Los invitados descubren la historia, la tierra y la razón por la que este trabajo importa a las familias y a la salud comunitaria." },
        { view: "customer", label: "Cliente", blurb: "Los clientes reciben acceso a productos, orientación nutricional, ideas de recetas y un camino sencillo hacia las compras." },
        { view: "marketplace", label: "Mercado", blurb: "El mercado muestra comercio real, ofertas de temporada, preparación para recogida y conexión con GrownBy." },
        { view: "grower", label: "Productor", blurb: "Los productores se conectan con planificación, producción, visibilidad y oportunidades de venta centradas en la comunidad." },
        { view: "youth", label: "Juventud Laboral", blurb: "La juventud laboral destaca formación, responsabilidad, supervisión y oportunidad futura." },
        { view: "partners", label: "Socios", blurb: "Los socios ven cómo su apoyo impulsa acceso a alimentos, restauración, desarrollo laboral y valor público." },
      ],
    },
    guest: {
      badge: "Experiencia del Invitado",
      heading: "Entre en la historia detrás de la tierra.",
      intro:
        "Bronson Family Farm responde al aumento del costo de los alimentos, a la necesidad comunitaria y al deseo de sistemas locales más saludables y conectados.",
      cards: [
        { title: "Por qué importa", text: "El aumento del costo de los alimentos empuja a muchas familias hacia alimentos ultraprocesados. Este ecosistema responde con soluciones basadas en la tierra y valor comunitario." },
        { title: "Lo que descubren los invitados", text: "La historia, la tierra, la visión, el legado familiar y la conexión entre restauración, salud, acceso y oportunidad." },
        { title: "A dónde pueden ir después", text: "Los invitados pueden continuar hacia compras, educación para clientes, alianzas o la ruta laboral juvenil." },
      ],
      actions: { toCustomer: "Continuar a Cliente", toPartners: "Explorar Socios" },
    },
    customer: {
      badge: "Experiencia del Cliente",
      heading: "Haga que las decisiones saludables sean más fáciles y acogedoras.",
      intro:
        "Los clientes deben sentirse atendidos, informados e invitados a regresar mediante acceso a productos, orientación nutricional, recetas y un camino claro al mercado.",
      cards: [
        { title: "Comprar productos de temporada", text: "Plántulas frescas, productos y ofertas de la granja con pedidos y recogida sencillos." },
        { title: "Orientación nutricional", text: "Educación alimentaria práctica para ayudar a las familias a tomar decisiones más fuertes cada día." },
        { title: "Razón para volver", text: "Recetas, productos destacados y hábitos de compra pensados para traer a las personas de regreso." },
      ],
      nutritionTitle: "Orientación Nutricional",
      nutritionTips: [
        "Elija más verduras frescas, repollo, brócoli, pimientos y productos de temporada cuando estén disponibles.",
        "Use productos locales para reducir la dependencia de alimentos muy procesados.",
        "Combine ideas de comidas sencillas con opciones de recogida para facilitar el uso de alimentos saludables.",
      ],
      recipeTitle: "Ideas de Recetas",
      recipes: [
        { key: "greens", title: "Tazón de Verduras del Valle de Mahoning", text: "Verduras frescas, repollo, pimientos y un aderezo simple para una comida rápida." },
        { key: "soup", title: "Sopa de Vegetales del Huerto", text: "Una receta flexible para repollo, berza, brócoli, hierbas y vegetales de temporada." },
        { key: "stir", title: "Salteado Fresco de la Granja", text: "Una comida rápida usando pimientos, brócoli, verduras y otros ingredientes locales." },
      ],
      actions: { marketplace: "Ir al Mercado", guest: "Volver a Invitado" },
    },
    marketplace: {
      badge: "Experiencia del Mercado",
      heading: "Mercado impulsado por Bronson Family Farm + GrownBy",
      intro:
        "Esta página muestra cómo los clientes exploran lo disponible, planifican la recogida y entran naturalmente al comercio agrícola real.",
      chips: [
        "Sirviendo al Área del Valle de Mahoning",
        "Disponible Esta Semana",
        "SNAP Aceptado",
        "Alimentos Locales Frescos",
        "Inventario de Temporada",
      ],
      actions: {
        store: "Abrir Tienda GrownBy",
        customer: "Volver a Cliente",
        grower: "Ser Productor Vendedor",
        pickup: "Recogida Viernes 4–7 PM",
      },
      productsTitle: "Destacados del Mercado",
      products: [
        { key: "greens", title: "Paquete de Verduras Frescas", text: "Enfoque amigable con SNAP, disponibilidad de temporada y conexión con recogida.", badge: "Disponible Esta Semana", image: marketplaceImages.greens },
        { key: "seedlings", title: "Plántulas y Comienzos", text: "Opciones listas para jardín para hogares, productores y siembra comunitaria.", badge: "Lista para Primavera y Verano", image: marketplaceImages.seedlings },
        { key: "bubble", title: "Bubble Babies™", text: "Un producto distintivo que conecta educación, cultivo y una marca memorable.", badge: "Producto Destacado", image: marketplaceImages.bubble },
      ],
      strengthsTitle: "Fortalezas del mercado",
      strengths: ["Camino directo a la compra real", "Preparación para pedidos y recogida", "Historia de productos de temporada", "Puente entre aprendizaje y compra"],
      viewersTitle: "Lo que esto les muestra a los visitantes",
      viewersText:
        "La granja no solo es hermosa como idea. Es operativa, sirve a la comunidad y puede sostener compras repetidas mediante un canal comercial real.",
      scheduleTitle: "Ritmo del mercado",
      schedule: ["Inventario destacado actualizado por temporada", "Flujo de pedidos listo para recogida", "Experiencia de compra amigable con la comunidad", "Conectado a GrownBy para acceso real a la tienda"],
    },
    grower: {
      badge: "Experiencia del Productor",
      heading: "Un ecosistema acogedor para productores.",
      intro:
        "Los productores entran a una ruta de apoyo donde la producción, la temporada, la visibilidad y la conexión comercial trabajan juntas.",
      cards: [
        { title: "Planificación de Producción", text: "Apoyo para tiempos de cultivo, plántulas, temporada y preparación." },
        { title: "Conexión con el Mercado", text: "Un puente claro desde el cultivo hacia el comercio comunitario y el acceso del cliente." },
        { title: "Ecosistema Compartido", text: "Los productores deben sentirse bienvenidos, útiles y visibles dentro de una misión regional más amplia." },
      ],
      opportunitiesTitle: "Oportunidades para productores",
      opportunities: ["Visibilidad estacional a través del mercado", "Conexión con ventas orientadas a la comunidad", "Posicionamiento dentro de un ecosistema de apoyo"],
    },
    youth: {
      badge: "Experiencia de Juventud Laboral",
      heading: "Formación, estructura, apoyo y responsabilidad significativa.",
      intro:
        "Esta ruta muestra aprendizaje práctico, hábitos de trabajo, estructura, supervisión y apoyo. El supervisor pertenece solo a Juventud Laboral.",
      cards: [
        { title: "Aprendizaje Práctico", text: "Exposición laboral basada en la tierra con responsabilidad real y contribución visible." },
        { title: "Apoyo del Supervisor", text: "Orientación, responsabilidad, apoyo al flujo de trabajo y recursos conectados de bienestar." },
        { title: "Participación Significativa", text: "La juventud debe verse dentro de un ecosistema real con propósito, habilidades y futuro." },
      ],
      supportTitle: "Estructura de apoyo",
      support: ["Orientación del supervisor dentro de juventud laboral", "Propiedad clara de tareas y responsabilidad", "Recursos de apoyo conectados y cuidado centrado en el bienestar"],
    },
    partners: {
      badge: "Experiencia de Socios",
      heading: "Apoyo que crea valor comunitario visible.",
      intro:
        "Los socios deben ver claramente cómo su participación apoya acceso a alimentos, desarrollo laboral, agroturismo, restauración y beneficio comunitario medible.",
      cards: [
        { title: "Alineación Cívica y de Ciudad", text: "Uso de tierra, rutas juveniles, beneficio vecinal y valor público visible." },
        { title: "Colaboración Institucional", text: "Un lugar para que escuelas, universidades, salud, organizaciones sin fines de lucro y sistemas comunitarios participen." },
        { title: "Visibilidad para Patrocinadores", text: "Una plataforma creíble para socios de recursos, apoyos y colaboradores a largo plazo." },
      ],
      partnerStripTitle: "Visibilidad actual y deseada de socios",
      partnerNames: ["Home Depot", "Petitti Garden Centers", "Elliott's Garden Center", "City of Youngstown", "Central State University", "Jewish Community Center"],
    },
    footer: "Desarrollado por Bronson Family Farm",
  },

  tl: {
    ...(null as unknown as LangPack),
    languageName: "Tagalog",
    shortLabel: "TL",
    nav: {
      home: "Home",
      guest: "Panauhin",
      customer: "Mamimili",
      marketplace: "Pamilihan",
      grower: "Grower",
      youth: "Kabataang Trabaho",
      partners: "Kasosyo",
    },
    top: {
      title: "Bronson Family Farm",
      subtitle: "Demo ng Regenerative Farm Ecosystem",
      language: "Wika",
      guided: "Guided Tour",
      stopGuided: "Itigil ang Tour",
      speak: "May Salaysay",
      mute: "Walang Salaysay",
    },
    home: {
      kicker: "Pumasok sa ecosystem",
      title: "Ang Bronson Family Farm ay higit pa sa isang farm.",
      intro:
        "Ito ay isang regenerative ecosystem na nag-uugnay sa lupa, access sa pagkain, aktibidad sa pamilihan, growers, youth workforce development, edukasyon, at partnership sa Youngstown at sa Mahoning Valley Area.",
      ctaPrimary: "Pumasok sa Pamilihan",
      ctaSecondary: "Simulan ang Guided Tour",
      chips: ["Naglilingkod sa Mahoning Valley Area", "Sariwang Lokal na Pagkain", "Konektado sa Trabaho", "Pinapalakas ng Komunidad"],
      stats: [
        { number: "118+", title: "ektarya ng pananaw at posibilidad", text: "Isang lugar para sa access sa pagkain, agritourism, edukasyon, oportunidad sa trabaho, at pakinabang ng komunidad." },
        { number: "6", title: "mga landas sa iisang ecosystem", text: "May dahilan ang Panauhin, Mamimili, Pamilihan, Grower, Kabataang Trabaho, at Kasosyo upang bumalik nang paulit-ulit." },
      ],
      sectionTitle: "Piliin kung paano mararanasan ng mga tao ang platform.",
      sectionText:
        "Dinisenyo ang bawat landas upang maging kapaki-pakinabang, magiliw, at buhay — hindi parang presentasyon. Dapat maunawaan ng mga bisita kung bakit umiiral ang farm, ano ang iniaalok nito, at saan sila susunod na pupunta.",
      pathways: [
        { key: "guest", title: "Panauhin", text: "Tuklasin ang kuwento, ang lupa, ang misyon, at kung bakit mahalaga ang lugar na ito." },
        { key: "customer", title: "Mamimili", text: "Maghanap ng ani, gabay sa nutrisyon, mga recipe, at malinaw na daan sa pamilihan." },
        { key: "marketplace", title: "Pamilihan", text: "Dumiretso sa tunay na farm commerce sa mas malakas na storefront experience." },
        { key: "grower", title: "Grower", text: "Suportahan ang produksyon, pagpaplano, pakikilahok, at koneksyon sa merkado." },
        { key: "youth", title: "Kabataang Trabaho", text: "Ipakita ang training, supervision, exposure, at makabuluhang pakikilahok." },
        { key: "partners", title: "Kasosyo", text: "Anyayahan ang sponsors, institutions, lungsod, at supporters sa gawaing ito." },
      ],
    },
    guidedTour: {
      title: "Guided Tour",
      intro: "Sundan ang paglalakbay ng ecosystem nang paisa-isa.",
      next: "Susunod",
      previous: "Nakaraan",
      finish: "Tapusin ang Tour",
      steps: [
        { view: "home", label: "Home", blurb: "Magsimula sa bisyon: higit ito sa isang farm. Isa itong regenerative ecosystem para sa Mahoning Valley Area." },
        { view: "guest", label: "Panauhin", blurb: "Natutuklasan ng mga panauhin ang kuwento, lupa, at kung bakit mahalaga ang gawaing ito sa pamilya at kalusugan ng komunidad." },
        { view: "customer", label: "Mamimili", blurb: "Ang mga mamimili ay may access sa ani, gabay sa nutrisyon, recipe ideas, at madaling daan sa pamimili." },
        { view: "marketplace", label: "Pamilihan", blurb: "Ipinapakita ng pamilihan ang tunay na commerce, seasonal offerings, pickup readiness, at koneksyon sa GrownBy." },
        { view: "grower", label: "Grower", blurb: "Ang growers ay konektado sa planning, production, visibility, at community-centered sales opportunities." },
        { view: "youth", label: "Kabataang Trabaho", blurb: "Ipinapakita ng youth workforce ang training, responsibilidad, supervision, at future opportunity." },
        { view: "partners", label: "Kasosyo", blurb: "Nakikita ng mga kasosyo kung paano sinusuportahan ng kanilang tulong ang access sa pagkain, restoration, workforce development, at public value." },
      ],
    },
    guest: {
      badge: "Karanasan ng Panauhin",
      heading: "Pumasok sa kuwentong nasa likod ng lupa.",
      intro:
        "Tumutugon ang Bronson Family Farm sa pagtaas ng presyo ng pagkain, pangangailangan ng komunidad, at pagnanais para sa mas malusog at mas konektadong lokal na sistema.",
      cards: [
        { title: "Bakit ito mahalaga", text: "Itinutulak ng pagtaas ng presyo ng pagkain ang mga pamilya tungo sa sobrang processed na pagkain. Tumutugon ang ecosystem na ito sa pamamagitan ng land-based solutions at pangmatagalang halaga sa komunidad." },
        { title: "Ano ang natutuklasan ng panauhin", text: "Ang kuwento, ang lupa, ang bisyon, ang family legacy, at ang koneksyon ng restoration, health, access, at opportunity." },
        { title: "Saan sila puwedeng pumunta pagkatapos", text: "Maaaring magpatuloy ang mga panauhin sa pamimili, customer education, partnerships, o youth workforce pathway." },
      ],
      actions: { toCustomer: "Tumuloy sa Mamimili", toPartners: "Tingnan ang Kasosyo" },
    },
    customer: {
      badge: "Karanasan ng Mamimili",
      heading: "Gawing mas madali at mas magiliw ang malusog na pagpili.",
      intro:
        "Dapat maramdaman ng mga mamimili na sila ay inaalagaan, may kaalaman, at inaanyayahang bumalik sa pamamagitan ng access sa ani, gabay sa nutrisyon, mga recipe, at malinaw na daan sa pamilihan.",
      cards: [
        { title: "Mamili ng Seasonal Produce", text: "Sariwang seedlings, produce, at farm offerings na may simpleng ordering at pickup." },
        { title: "Gabay sa Nutrisyon", text: "Praktikal na food education upang makatulong sa mga pamilya na gumawa ng mas mabuting araw-araw na pagpili." },
        { title: "Dahilan para Bumalik", text: "Mga recipe, featured products, at buying habits na ginawa upang hikayatin ang paulit-ulit na pagbalik." },
      ],
      nutritionTitle: "Gabay sa Nutrisyon",
      nutritionTips: [
        "Pumili ng mas maraming sariwang gulay, repolyo, broccoli, peppers, at seasonal produce kapag mayroon.",
        "Gamitin ang lokal na produce upang mabawasan ang pagdepende sa labis na processed na pagkain.",
        "Ipares ang simpleng meal ideas sa pickup options para mas madaling gamitin ang masustansyang pagkain.",
      ],
      recipeTitle: "Mga Ideya sa Recipe",
      recipes: [
        { key: "greens", title: "Mahoning Valley Greens Bowl", text: "Sariwang gulay, repolyo, peppers, at simpleng dressing para sa mabilis na pagkain." },
        { key: "soup", title: "Garden Vegetable Soup", text: "Flexible na recipe para sa repolyo, collards, broccoli, herbs, at seasonal vegetables." },
        { key: "stir", title: "Farm Fresh Stir-Fry", text: "Mabilis na lutong kawali gamit ang peppers, broccoli, greens, at iba pang lokal na sangkap." },
      ],
      actions: { marketplace: "Pumunta sa Pamilihan", guest: "Bumalik sa Panauhin" },
    },
    marketplace: {
      badge: "Karanasan sa Pamilihan",
      heading: "Pamilihang pinapagana ng Bronson Family Farm + GrownBy",
      intro:
        "Ipinapakita ng pahinang ito kung paano tumitingin ang mga mamimili sa available na produkto, nagpaplano ng pickup, at natural na pumapasok sa tunay na farm commerce.",
      chips: ["Naglilingkod sa Mahoning Valley Area", "Available Ngayong Linggo", "Tinatanggap ang SNAP", "Sariwang Lokal na Pagkain", "Seasonal Inventory"],
      actions: {
        store: "Buksan ang GrownBy Store",
        customer: "Bumalik sa Mamimili",
        grower: "Maging Grower Vendor",
        pickup: "Pickup tuwing Biyernes 4–7 PM",
      },
      productsTitle: "Mga Tampok sa Marketplace",
      products: [
        { key: "greens", title: "Fresh Greens Bundle", text: "SNAP-friendly produce, seasonal availability, at pickup connection.", badge: "Available Ngayong Linggo", image: marketplaceImages.greens },
        { key: "seedlings", title: "Seedlings & Starts", text: "Garden-ready options para sa bahay, growers, at community planting.", badge: "Handa para sa Spring + Summer", image: marketplaceImages.seedlings },
        { key: "bubble", title: "Bubble Babies™", text: "Isang espesyal na produkto na nag-uugnay sa edukasyon, pagtatanim, at matibay na brand experience.", badge: "Featured Product", image: marketplaceImages.bubble },
      ],
      strengthsTitle: "Lakas ng marketplace",
      strengths: ["Direktang daan sa tunay na pagbili", "Handa para sa pickup at pre-order", "Kwento ng seasonal products", "Tulay ng pagkatuto at pagbili"],
      viewersTitle: "Ano ang sinasabi nito sa viewers",
      viewersText:
        "Ang farm ay hindi lamang maganda bilang konsepto. Ito ay gumagana, nagsisilbi sa komunidad, at kayang magdala ng paulit-ulit na pagbili sa tunay na commerce channel.",
      scheduleTitle: "Daloy ng marketplace",
      schedule: ["Featured inventory na ina-update ayon sa season", "Pickup-ready ordering flow", "Community-friendly shopping experience", "Konektado sa GrownBy para sa totoong access sa store"],
    },
    grower: {
      badge: "Karanasan ng Grower",
      heading: "Isang magiliw na ecosystem para sa growers at producers.",
      intro:
        "Ang growers ay pumapasok sa suportadong landas kung saan nagtutulungan ang production, seasonality, visibility, at market connection.",
      cards: [
        { title: "Production Planning", text: "Suporta para sa crop timing, seed starts, seasonality, at readiness." },
        { title: "Market Connection", text: "Malinaw na tulay mula sa pagtatanim tungo sa community commerce at access ng customer." },
        { title: "Shared Ecosystem", text: "Dapat maramdaman ng growers na sila ay tinatanggap, mahalaga, at nakikita sa mas malawak na regional mission." },
      ],
      opportunitiesTitle: "Mga oportunidad ng grower",
      opportunities: ["Seasonal visibility sa pamamagitan ng marketplace participation", "Koneksyon sa community-facing sales", "Supportive ecosystem positioning sa halip na pag-iisa"],
    },
    youth: {
      badge: "Karanasan ng Kabataang Trabaho",
      heading: "Training, istruktura, suporta, at makabuluhang responsibilidad.",
      intro:
        "Ipinapakita ng pathway na ito ang hands-on learning, work habits, structure, supervision, at support. Ang supervisor ay bahagi lamang ng Youth Workforce.",
      cards: [
        { title: "Hands-On Learning", text: "Land-based workforce exposure na may totoong responsibilidad at malinaw na kontribusyon." },
        { title: "Supervisor Support", text: "Gabay, pananagutan, workflow support, at connected wellness-oriented support resources." },
        { title: "Meaningful Participation", text: "Dapat makita ng kabataan ang kanilang sarili sa isang tunay na ecosystem na may purpose, skills, at future pathways." },
      ],
      supportTitle: "Support structure",
      support: ["Supervisor guidance sa loob ng youth workforce", "Malinaw na task ownership at accountability", "Connected support resources at wellness-centered care"],
    },
    partners: {
      badge: "Karanasan ng Kasosyo",
      heading: "Suportang lumilikha ng nakikitang halaga sa komunidad.",
      intro:
        "Dapat malinaw na makita ng mga kasosyo kung paano sinusuportahan ng kanilang paglahok ang access sa pagkain, workforce development, agritourism, restoration, at nasusukat na community benefit.",
      cards: [
        { title: "City at Civic Alignment", text: "Land use, youth pathways, neighborhood benefit, at nakikitang public value." },
        { title: "Institutional Collaboration", text: "Lugar para sa schools, universities, health organizations, nonprofits, at community systems." },
        { title: "Sponsor Visibility", text: "Isang kapanipaniwalang platform para sa resource partners, supporters, at long-term collaborators." },
      ],
      partnerStripTitle: "Kasalukuyan at gustong partner visibility",
      partnerNames: ["Home Depot", "Petitti Garden Centers", "Elliott's Garden Center", "City of Youngstown", "Central State University", "Jewish Community Center"],
    },
    footer: "Binuo ng Bronson Family Farm",
  },

  it: {
    ...(null as unknown as LangPack),
    languageName: "Italiano",
    shortLabel: "IT",
    nav: { home: "Home", guest: "Ospite", customer: "Cliente", marketplace: "Mercato", grower: "Produttore", youth: "Lavoro Giovanile", partners: "Partner" },
    top: { title: "Bronson Family Farm", subtitle: "Demo dell'Ecosistema Agricolo Rigenerativo", language: "Lingua", guided: "Tour Guidato", stopGuided: "Ferma Tour", speak: "Narrazione Attiva", mute: "Narrazione Spenta" },
    home: {
      kicker: "Entra nell'ecosistema",
      title: "Bronson Family Farm è più di una fattoria.",
      intro: "È un ecosistema rigenerativo che collega terra, accesso al cibo, attività di mercato, produttori, sviluppo del lavoro giovanile, educazione e partnership a Youngstown e nell'area della Mahoning Valley.",
      ctaPrimary: "Entra nel Mercato",
      ctaSecondary: "Inizia il Tour Guidato",
      chips: ["Al servizio dell'area della Mahoning Valley", "Cibo Locale Fresco", "Connesso al Lavoro", "Guidato dalla Comunità"],
      stats: [
        { number: "118+", title: "acri di visione e possibilità", text: "Una destinazione per accesso al cibo, agriturismo, educazione, opportunità lavorative e beneficio comunitario." },
        { number: "6", title: "percorsi in un ecosistema", text: "Ospite, Cliente, Mercato, Produttore, Lavoro Giovanile e Partner hanno una ragione per tornare ancora." },
      ],
      sectionTitle: "Scegli come le persone vivono la piattaforma.",
      sectionText: "Ogni percorso è progettato per essere utile, accogliente e attivo, non come una presentazione. I visitatori devono capire perché la fattoria esiste, cosa offre e dove possono andare dopo.",
      pathways: [
        { key: "guest", title: "Ospite", text: "Scopri la storia, la terra, la missione e perché questo luogo conta." },
        { key: "customer", title: "Cliente", text: "Trova prodotti, guida nutrizionale, ricette e un percorso chiaro verso il mercato." },
        { key: "marketplace", title: "Mercato", text: "Entra naturalmente nel vero commercio agricolo attraverso una vetrina più forte." },
        { key: "grower", title: "Produttore", text: "Sostieni produzione, pianificazione, partecipazione e collegamento al mercato." },
        { key: "youth", title: "Lavoro Giovanile", text: "Mostra formazione, supervisione, esposizione e partecipazione significativa." },
        { key: "partners", title: "Partner", text: "Invita sponsor, istituzioni, città e sostenitori nel lavoro." },
      ],
    },
    guidedTour: {
      title: "Tour Guidato",
      intro: "Segui il viaggio dell'ecosistema passo dopo passo.",
      next: "Prossima Tappa",
      previous: "Precedente",
      finish: "Termina Tour",
      steps: [
        { view: "home", label: "Home", blurb: "Inizia dalla visione: questo è più di una fattoria. È un ecosistema rigenerativo al servizio della Mahoning Valley." },
        { view: "guest", label: "Ospite", blurb: "Gli ospiti scoprono la storia, la terra e il motivo per cui questo lavoro è importante per le famiglie e la salute della comunità." },
        { view: "customer", label: "Cliente", blurb: "I clienti ricevono accesso ai prodotti, guida nutrizionale, idee per ricette e un percorso semplice verso gli acquisti." },
        { view: "marketplace", label: "Mercato", blurb: "Il mercato mostra vero commercio, offerte stagionali, ritiro pronto e connessione con GrownBy." },
        { view: "grower", label: "Produttore", blurb: "I produttori si collegano a pianificazione, produzione, visibilità e opportunità di vendita orientate alla comunità." },
        { view: "youth", label: "Lavoro Giovanile", blurb: "Il lavoro giovanile mette in evidenza formazione, responsabilità, supervisione e opportunità future." },
        { view: "partners", label: "Partner", blurb: "I partner vedono come il loro sostegno promuove accesso al cibo, ripristino, sviluppo del lavoro e valore pubblico." },
      ],
    },
    guest: {
      badge: "Esperienza Ospite",
      heading: "Entra nella storia dietro la terra.",
      intro: "Bronson Family Farm risponde all'aumento dei costi del cibo, ai bisogni della comunità e al desiderio di sistemi locali più sani e connessi.",
      cards: [
        { title: "Perché conta", text: "L'aumento dei costi del cibo spinge molte famiglie verso alimenti troppo processati. Questo ecosistema risponde con soluzioni legate alla terra e valore comunitario duraturo." },
        { title: "Cosa scoprono gli ospiti", text: "La storia, la terra, la visione, l'eredità familiare e il collegamento tra ripristino, salute, accesso e opportunità." },
        { title: "Dove possono andare dopo", text: "Gli ospiti possono continuare verso lo shopping, l'educazione del cliente, le partnership o il percorso del lavoro giovanile." },
      ],
      actions: { toCustomer: "Continua al Cliente", toPartners: "Esplora i Partner" },
    },
    customer: {
      badge: "Esperienza Cliente",
      heading: "Rendere le scelte sane più facili e accoglienti.",
      intro: "I clienti dovrebbero sentirsi curati, informati e invitati a tornare attraverso l'accesso ai prodotti, la guida nutrizionale, le ricette e un percorso chiaro verso il mercato.",
      cards: [
        { title: "Acquista prodotti stagionali", text: "Piantine fresche, prodotti e offerte della fattoria con ordinazione e ritiro semplici." },
        { title: "Guida nutrizionale", text: "Educazione alimentare pratica per aiutare le famiglie a fare scelte migliori ogni giorno." },
        { title: "Motivo per tornare", text: "Ricette, prodotti in evidenza e abitudini di acquisto pensati per riportare le persone ancora." },
      ],
      nutritionTitle: "Guida Nutrizionale",
      nutritionTips: [
        "Scegli più verdure fresche, cavolo, broccoli, peperoni e prodotti stagionali quando disponibili.",
        "Usa prodotti locali per ridurre la dipendenza da cibi fortemente processati.",
        "Abbina idee di pasti semplici alle opzioni di ritiro per rendere il cibo sano più facile da usare.",
      ],
      recipeTitle: "Idee di Ricette",
      recipes: [
        { key: "greens", title: "Ciotola Verde della Mahoning Valley", text: "Verdure fresche, cavolo, peperoni e un condimento semplice per un pasto veloce." },
        { key: "soup", title: "Zuppa di Verdure dell'Orto", text: "Una ricetta flessibile per cavolo, collard, broccoli, erbe e verdure stagionali." },
        { key: "stir", title: "Saltato Fresco della Fattoria", text: "Un pasto veloce in padella con peperoni, broccoli, verdure e ingredienti locali." },
      ],
      actions: { marketplace: "Vai al Mercato", guest: "Torna a Ospite" },
    },
    marketplace: {
      badge: "Esperienza Mercato",
      heading: "Mercato gestito da Bronson Family Farm + GrownBy",
      intro: "Questa pagina mostra come i clienti esplorano ciò che è disponibile, pianificano il ritiro e passano naturalmente al vero commercio agricolo.",
      chips: ["Al servizio della Mahoning Valley", "Disponibile Questa Settimana", "SNAP Accettato", "Cibo Locale Fresco", "Inventario Stagionale"],
      actions: { store: "Apri Negozio GrownBy", customer: "Torna al Cliente", grower: "Diventa Venditore Grower", pickup: "Ritiro il venerdì 4–7 PM" },
      productsTitle: "Punti Salienti del Mercato",
      products: [
        { key: "greens", title: "Fresh Greens Bundle", text: "Focus su prodotti compatibili con SNAP, disponibilità stagionale e connessione al ritiro.", badge: "Disponibile Questa Settimana", image: marketplaceImages.greens },
        { key: "seedlings", title: "Seedlings & Starts", text: "Opzioni pronte per il giardino per famiglie, produttori e attività comunitarie di piantagione.", badge: "Pronto per Primavera + Estate", image: marketplaceImages.seedlings },
        { key: "bubble", title: "Bubble Babies™", text: "Un prodotto distintivo che collega educazione, coltivazione e un'esperienza di marca memorabile.", badge: "Prodotto in Evidenza", image: marketplaceImages.bubble },
      ],
      strengthsTitle: "Punti di forza del mercato",
      strengths: ["Percorso diretto verso l'acquisto reale", "Prontezza per ordini e ritiro", "Narrazione dei prodotti stagionali", "Ponte tra apprendimento e acquisto"],
      viewersTitle: "Cosa comunica ai visitatori",
      viewersText: "La fattoria non è soltanto bella come idea. È operativa, al servizio della comunità e capace di sostenere acquisti ripetuti attraverso un vero canale commerciale.",
      scheduleTitle: "Ritmo del mercato",
      schedule: ["Inventario in evidenza aggiornato per stagione", "Flusso ordini pronto per il ritiro", "Esperienza di acquisto amichevole per la comunità", "Connesso a GrownBy per l'accesso reale al negozio"],
    },
    grower: {
      badge: "Esperienza Produttore",
      heading: "Un ecosistema accogliente per produttori e coltivatori.",
      intro: "I produttori entrano in un percorso di supporto dove produzione, stagionalità, visibilità e collegamento al mercato lavorano insieme.",
      cards: [
        { title: "Pianificazione della produzione", text: "Supporto per tempi di coltivazione, piantine, stagionalità e preparazione." },
        { title: "Collegamento al mercato", text: "Un ponte chiaro dalla coltivazione al commercio comunitario e all'accesso del cliente." },
        { title: "Ecosistema condiviso", text: "I produttori dovrebbero sentirsi accolti, utili e visibili all'interno di una missione regionale più ampia." },
      ],
      opportunitiesTitle: "Opportunità per i produttori",
      opportunities:
