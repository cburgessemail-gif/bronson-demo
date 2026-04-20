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

type Block = { title: string; text: string };

type Copy = {
  brand: {
    title: string;
    subtitle: string;
    language: string;
    guided: string;
    stopGuided: string;
    narrationOn: string;
    narrationOff: string;
  };
  nav: Record<View, string>;
  tour: {
    title: string;
    next: string;
    previous: string;
    finish: string;
    steps: { view: View; label: string; blurb: string }[];
  };
  home: {
    badge: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    chips: string[];
    stats: { number: string; title: string; text: string }[];
    sectionTitle: string;
    sectionText: string;
    cards: { key: View; title: string; text: string }[];
  };
  guest: {
    badge: string;
    title: string;
    text: string;
    cards: Block[];
    actions: [string, string];
  };
  customer: {
    badge: string;
    title: string;
    text: string;
    cards: Block[];
    nutritionTitle: string;
    nutrition: string[];
    recipesTitle: string;
    recipes: Block[];
    actions: [string, string];
  };
  marketplace: {
    badge: string;
    title: string;
    text: string;
    chips: string[];
    actions: [string, string, string, string];
    featuredTitle: string;
    products: { title: string; text: string; badge: string; accent: string }[];
    strengthTitle: string;
    strengths: string[];
    viewerTitle: string;
    viewerText: string;
    rhythmTitle: string;
    rhythm: string[];
  };
  grower: {
    badge: string;
    title: string;
    text: string;
    cards: Block[];
    listTitle: string;
    list: string[];
  };
  youth: {
    badge: string;
    title: string;
    text: string;
    cards: Block[];
    listTitle: string;
    list: string[];
  };
  partners: {
    badge: string;
    title: string;
    text: string;
    cards: Block[];
    stripTitle: string;
    strip: string[];
  };
  footer: string;
};

const copy: Record<Lang, Copy> = {
  en: {
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Regenerative Farm Ecosystem Demo",
      language: "Language",
      guided: "Guided Tour",
      stopGuided: "Stop Tour",
      narrationOn: "Narration On",
      narrationOff: "Narration Off",
    },
    nav: {
      home: "Home",
      guest: "Guest",
      customer: "Customer",
      marketplace: "Marketplace",
      grower: "Grower",
      youth: "Youth Workforce",
      partners: "Partners",
    },
    tour: {
      title: "Guided Tour",
      next: "Next Stop",
      previous: "Previous",
      finish: "Finish Tour",
      steps: [
        {
          view: "home",
          label: "Home",
          blurb:
            "Start with the vision. Bronson Family Farm is more than a farm. It is a regenerative ecosystem serving the Mahoning Valley Area.",
        },
        {
          view: "guest",
          label: "Guest",
          blurb:
            "Guests discover the story, the land, and why this work matters to families, food access, and community health.",
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
            "The marketplace shows real commerce, seasonal offerings, pickup readiness, and connection to GrownBy.",
        },
        {
          view: "grower",
          label: "Grower",
          blurb:
            "Growers connect to planning, production, visibility, and community-centered selling opportunities.",
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
            "Partners see how their support advances food access, restoration, workforce development, and visible public value.",
        },
      ],
    },
    home: {
      badge: "Step into the ecosystem",
      title: "Bronson Family Farm is more than a farm.",
      text:
        "It is a regenerative ecosystem connecting land, food access, marketplace activity, growers, youth workforce development, education, and partnership in Youngstown and the Mahoning Valley Area.",
      primary: "Enter Marketplace",
      secondary: "Begin Guided Tour",
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
        "Each pathway is designed to feel purposeful, welcoming, and active — not like a presentation.",
      cards: [
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
    guest: {
      badge: "Guest Experience",
      title: "Step into the story behind the land.",
      text:
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
      actions: ["Continue to Customer", "Explore Partners"],
    },
    customer: {
      badge: "Customer Experience",
      title: "Make healthy choices feel easier and more welcoming.",
      text:
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
      nutrition: [
        "Choose more fresh greens, cabbage, broccoli, peppers, and seasonal produce when available.",
        "Use local produce to reduce dependence on heavily processed foods.",
        "Pair simple meal ideas with pickup options so healthy food is easier to use.",
      ],
      recipesTitle: "Recipe Ideas",
      recipes: [
        {
          title: "Mahoning Valley Greens Bowl",
          text: "Fresh greens, cabbage, peppers, and a simple dressing for a quick weekday meal.",
        },
        {
          title: "Garden Vegetable Soup",
          text: "A flexible recipe for cabbage, collards, broccoli, herbs, and seasonal vegetables.",
        },
        {
          title: "Farm Fresh Stir-Fry",
          text: "A quick skillet meal using peppers, broccoli, greens, and local add-ins.",
        },
      ],
      actions: ["Go to Marketplace", "Back to Guest Experience"],
    },
    marketplace: {
      badge: "Marketplace Experience",
      title: "Marketplace powered by Bronson Family Farm + GrownBy",
      text:
        "This page shows how customers browse what is available, plan pickup, and move naturally into real farm commerce.",
      chips: [
        "Serving the Mahoning Valley Area",
        "Available This Week",
        "SNAP Accepted",
        "Fresh Local Food",
        "Seasonal Inventory",
      ],
      actions: [
        "Open GrownBy Store",
        "Back to Customer Path",
        "Become a Grower Vendor",
        "Pickup Fridays 4–7 PM",
      ],
      featuredTitle: "Featured Marketplace Highlights",
      products: [
        {
          title: "Fresh Greens Bundle",
          text: "SNAP-friendly produce focus, seasonal availability, and market pickup connection.",
          badge: "Available This Week",
          accent: "#78a95c",
        },
        {
          title: "Seedlings & Starts",
          text: "Garden-ready options for households, growers, and community planting activity.",
          badge: "Spring + Summer Ready",
          accent: "#d78a3f",
        },
        {
          title: "Bubble Babies™",
          text: "A signature product that connects education, growing, and a memorable farm brand experience.",
          badge: "Featured Product",
          accent: "#cd6d5e",
        },
      ],
      strengthTitle: "Marketplace strengths",
      strengths: [
        "Direct path to real purchasing",
        "Pickup and pre-order readiness",
        "Seasonal product storytelling",
        "Bridge between learning and buying",
      ],
      viewerTitle: "What this tells viewers",
      viewerText:
        "The farm is not only beautiful in concept. It is operational, community-serving, and capable of supporting repeat customer behavior through a real commerce channel.",
      rhythmTitle: "Marketplace rhythm",
      rhythm: [
        "Featured inventory updated by season",
        "Pickup-ready ordering flow",
        "Community-friendly shopping experience",
        "Connected to GrownBy for real store access",
      ],
    },
    grower: {
      badge: "Grower Experience",
      title: "A welcoming ecosystem for growers and producers.",
      text:
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
      listTitle: "Grower opportunities",
      list: [
        "Seasonal visibility through marketplace participation",
        "Connection to community-facing sales",
        "Supportive ecosystem positioning rather than isolation",
      ],
    },
    youth: {
      badge: "Youth Workforce Experience",
      title: "Training, structure, support, and meaningful responsibility.",
      text:
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
      listTitle: "Support structure",
      list: [
        "Supervisor guidance within youth workforce",
        "Clear task ownership and accountability",
        "Connected support staff resources and wellness-centered care",
      ],
    },
    partners: {
      badge: "Partners Experience",
      title: "Support that creates visible community value.",
      text:
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
      stripTitle: "Current and desired partner visibility",
      strip: [
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
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Demostración del Ecosistema Agrícola Regenerativo",
      language: "Idioma",
      guided: "Recorrido Guiado",
      stopGuided: "Detener Recorrido",
      narrationOn: "Narración Activa",
      narrationOff: "Narración Apagada",
    },
    nav: {
      home: "Inicio",
      guest: "Invitado",
      customer: "Cliente",
      marketplace: "Mercado",
      grower: "Productor",
      youth: "Juventud Laboral",
      partners: "Socios",
    },
    tour: {
      title: "Recorrido Guiado",
      next: "Siguiente",
      previous: "Anterior",
      finish: "Finalizar",
      steps: [
        { view: "home", label: "Inicio", blurb: "Comience con la visión del ecosistema." },
        { view: "guest", label: "Invitado", blurb: "Descubra la historia y el propósito del lugar." },
        { view: "customer", label: "Cliente", blurb: "Acceda a productos, recetas y orientación nutricional." },
        { view: "marketplace", label: "Mercado", blurb: "Explore comercio real y conexión con GrownBy." },
        { view: "grower", label: "Productor", blurb: "Conéctese con producción y acceso al mercado." },
        { view: "youth", label: "Juventud Laboral", blurb: "Vea formación, apoyo y responsabilidad." },
        { view: "partners", label: "Socios", blurb: "Vea cómo el apoyo crea valor comunitario." },
      ],
    },
    home: {
      badge: "Entre al ecosistema",
      title: "Bronson Family Farm es más que una granja.",
      text:
        "Es un ecosistema regenerativo que conecta tierra, acceso a alimentos, actividad de mercado, productores, desarrollo laboral juvenil, educación y colaboración en Youngstown y el área del Valle de Mahoning.",
      primary: "Entrar al Mercado",
      secondary: "Comenzar Recorrido",
      chips: [
        "Sirviendo al Área del Valle de Mahoning",
        "Alimentos Locales Frescos",
        "Conectado a la Fuerza Laboral",
        "Impulsado por la Comunidad",
      ],
      stats: [
        { number: "118+", title: "acres de visión y posibilidad", text: "Un destino para acceso a alimentos, agriturismo, educación y beneficio comunitario." },
        { number: "6", title: "rutas dentro de un ecosistema", text: "Hay una razón para regresar una y otra vez." },
      ],
      sectionTitle: "Elija cómo las personas experimentan la plataforma.",
      sectionText: "Cada ruta está diseñada para sentirse útil, acogedora y activa.",
      cards: [
        { key: "guest", title: "Invitado", text: "Descubra la historia, la tierra y la misión." },
        { key: "customer", title: "Cliente", text: "Encuentre productos, recetas y orientación." },
        { key: "marketplace", title: "Mercado", text: "Entre en el comercio agrícola real." },
        { key: "grower", title: "Productor", text: "Apoye producción y conexión con el mercado." },
        { key: "youth", title: "Juventud Laboral", text: "Muestre formación y participación significativa." },
        { key: "partners", title: "Socios", text: "Invite patrocinadores e instituciones." },
      ],
    },
    guest: {
      badge: "Experiencia del Invitado",
      title: "Entre en la historia detrás de la tierra.",
      text: "La granja responde al aumento del costo de los alimentos y a la necesidad de sistemas locales más saludables.",
      cards: [
        { title: "Por qué importa", text: "Responde con soluciones basadas en la tierra y valor comunitario." },
        { title: "Lo que se descubre", text: "Historia, visión, legado y conexión entre salud y oportunidad." },
        { title: "Qué sigue", text: "Compras, educación del cliente, alianzas o juventud laboral." },
      ],
      actions: ["Continuar a Cliente", "Explorar Socios"],
    },
    customer: {
      badge: "Experiencia del Cliente",
      title: "Haga que las decisiones saludables sean más fáciles.",
      text: "Los clientes deben sentirse atendidos, informados e invitados a regresar.",
      cards: [
        { title: "Comprar productos de temporada", text: "Pedidos y recogida sencillos." },
        { title: "Orientación nutricional", text: "Educación práctica para decisiones más fuertes." },
        { title: "Razón para volver", text: "Recetas y productos destacados que animan el regreso." },
      ],
      nutritionTitle: "Orientación Nutricional",
      nutrition: [
        "Elija más verduras frescas y productos de temporada.",
        "Use productos locales para reducir la dependencia de alimentos procesados.",
        "Combine ideas de comidas sencillas con opciones de recogida.",
      ],
      recipesTitle: "Ideas de Recetas",
      recipes: [
        { title: "Tazón de Verduras", text: "Verduras frescas, repollo y pimientos." },
        { title: "Sopa del Huerto", text: "Receta flexible con vegetales de temporada." },
        { title: "Salteado de la Granja", text: "Comida rápida con verduras frescas." },
      ],
      actions: ["Ir al Mercado", "Volver a Invitado"],
    },
    marketplace: {
      badge: "Experiencia del Mercado",
      title: "Mercado impulsado por Bronson Family Farm + GrownBy",
      text: "Los clientes exploran lo disponible, planifican la recogida y entran al comercio agrícola real.",
      chips: [
        "Sirviendo al Área del Valle de Mahoning",
        "Disponible Esta Semana",
        "SNAP Aceptado",
        "Alimentos Locales Frescos",
        "Inventario de Temporada",
      ],
      actions: [
        "Abrir Tienda GrownBy",
        "Volver a Cliente",
        "Ser Productor Vendedor",
        "Recogida Viernes 4–7 PM",
      ],
      featuredTitle: "Destacados del Mercado",
      products: [
        { title: "Paquete de Verduras Frescas", text: "Disponibilidad de temporada y conexión con recogida.", badge: "Disponible Esta Semana", accent: "#78a95c" },
        { title: "Plántulas y Comienzos", text: "Opciones listas para jardín para hogares y productores.", badge: "Primavera + Verano", accent: "#d78a3f" },
        { title: "Bubble Babies™", text: "Producto distintivo que conecta educación y cultivo.", badge: "Producto Destacado", accent: "#cd6d5e" },
      ],
      strengthTitle: "Fortalezas del mercado",
      strengths: [
        "Camino directo a la compra real",
        "Preparación para pedidos y recogida",
        "Historia de productos de temporada",
        "Puente entre aprendizaje y compra",
      ],
      viewerTitle: "Lo que esto muestra",
      viewerText: "La granja es operativa, sirve a la comunidad y puede sostener compras repetidas.",
      rhythmTitle: "Ritmo del mercado",
      rhythm: [
        "Inventario actualizado por temporada",
        "Flujo de pedidos listo para recogida",
        "Experiencia de compra amigable",
        "Conectado a GrownBy",
      ],
    },
    grower: {
      badge: "Experiencia del Productor",
      title: "Un ecosistema acogedor para productores.",
      text: "Producción, temporada, visibilidad y conexión comercial trabajan juntas.",
      cards: [
        { title: "Planificación", text: "Apoyo para tiempos de cultivo y preparación." },
        { title: "Conexión con el mercado", text: "Puente claro hacia el comercio comunitario." },
        { title: "Ecosistema compartido", text: "Los productores deben sentirse visibles y útiles." },
      ],
      listTitle: "Oportunidades",
      list: [
        "Visibilidad estacional",
        "Conexión con ventas comunitarias",
        "Posicionamiento en un ecosistema de apoyo",
      ],
    },
    youth: {
      badge: "Experiencia de Juventud Laboral",
      title: "Formación, estructura y apoyo.",
      text: "Aprendizaje práctico, hábitos de trabajo y supervisión.",
      cards: [
        { title: "Aprendizaje práctico", text: "Responsabilidad real y contribución visible." },
        { title: "Apoyo del supervisor", text: "Orientación y apoyo al flujo de trabajo." },
        { title: "Participación significativa", text: "Propósito, habilidades y futuro." },
      ],
      listTitle: "Estructura de apoyo",
      list: [
        "Orientación del supervisor",
        "Responsabilidad clara",
        "Recursos conectados de bienestar",
      ],
    },
    partners: {
      badge: "Experiencia de Socios",
      title: "Apoyo que crea valor comunitario visible.",
      text: "La participación de los socios apoya acceso a alimentos y beneficio comunitario medible.",
      cards: [
        { title: "Alineación cívica", text: "Uso de tierra, juventud y valor público." },
        { title: "Colaboración institucional", text: "Escuelas, universidades y sistemas comunitarios." },
        { title: "Visibilidad para patrocinadores", text: "Plataforma creíble para colaboradores." },
      ],
      stripTitle: "Visibilidad de socios",
      strip: [
        "Home Depot",
        "Petitti Garden Centers",
        "Elliott's Garden Center",
        "City of Youngstown",
        "Central State University",
        "Jewish Community Center",
      ],
    },
    footer: "Desarrollado por Bronson Family Farm",
  },

  tl: {
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Demo ng Regenerative Farm Ecosystem",
      language: "Wika",
      guided: "Guided Tour",
      stopGuided: "Itigil ang Tour",
      narrationOn: "May Salaysay",
      narrationOff: "Walang Salaysay",
    },
    nav: {
      home: "Home",
      guest: "Panauhin",
      customer: "Mamimili",
      marketplace: "Pamilihan",
      grower: "Grower",
      youth: "Kabataang Trabaho",
      partners: "Kasosyo",
    },
    tour: {
      title: "Guided Tour",
      next: "Susunod",
      previous: "Nakaraan",
      finish: "Tapusin",
      steps: [
        { view: "home", label: "Home", blurb: "Magsimula sa bisyon ng ecosystem." },
        { view: "guest", label: "Panauhin", blurb: "Tuklasin ang kuwento at layunin ng lugar." },
        { view: "customer", label: "Mamimili", blurb: "Makakuha ng produce, recipes, at nutrition guidance." },
        { view: "marketplace", label: "Pamilihan", blurb: "Tingnan ang tunay na commerce at GrownBy connection." },
        { view: "grower", label: "Grower", blurb: "Makaugnay sa production at market access." },
        { view: "youth", label: "Kabataang Trabaho", blurb: "Tingnan ang training, support, at responsibility." },
        { view: "partners", label: "Kasosyo", blurb: "Tingnan kung paano lumilikha ng community value ang suporta." },
      ],
    },
    home: {
      badge: "Pumasok sa ecosystem",
      title: "Ang Bronson Family Farm ay higit pa sa isang farm.",
      text:
        "Ito ay isang regenerative ecosystem na nag-uugnay sa lupa, access sa pagkain, activity sa marketplace, growers, youth workforce development, edukasyon, at partnership sa Youngstown at sa Mahoning Valley Area.",
      primary: "Pumasok sa Pamilihan",
      secondary: "Simulan ang Tour",
      chips: [
        "Naglilingkod sa Mahoning Valley Area",
        "Sariwang Lokal na Pagkain",
        "Konektado sa Trabaho",
        "Pinapalakas ng Komunidad",
      ],
      stats: [
        { number: "118+", title: "ektarya ng pananaw at posibilidad", text: "Lugar para sa pagkain, edukasyon, at community return." },
        { number: "6", title: "mga landas sa iisang ecosystem", text: "May dahilan para bumalik nang paulit-ulit." },
      ],
      sectionTitle: "Piliin kung paano mararanasan ang platform.",
      sectionText: "Bawat landas ay kapaki-pakinabang, magiliw, at buhay.",
      cards: [
        { key: "guest", title: "Panauhin", text: "Tuklasin ang kuwento, lupa, at misyon." },
        { key: "customer", title: "Mamimili", text: "Hanapin ang produce, recipe, at guidance." },
        { key: "marketplace", title: "Pamilihan", text: "Pumasok sa tunay na farm commerce." },
        { key: "grower", title: "Grower", text: "Suportahan ang production at market connection." },
        { key: "youth", title: "Kabataang Trabaho", text: "Ipakita ang training at makabuluhang participation." },
        { key: "partners", title: "Kasosyo", text: "Anyayahan ang sponsor at institutions." },
      ],
    },
    guest: {
      badge: "Karanasan ng Panauhin",
      title: "Pumasok sa kuwentong nasa likod ng lupa.",
      text: "Tumugon ang farm sa tumataas na presyo ng pagkain at pangangailangan ng komunidad.",
      cards: [
        { title: "Bakit mahalaga", text: "May land-based solutions at pangmatagalang community value." },
        { title: "Ano ang matutuklasan", text: "Kuwento, bisyon, family legacy, at health connection." },
        { title: "Ano ang susunod", text: "Pamimili, customer education, partnerships, o youth workforce." },
      ],
      actions: ["Tumuloy sa Mamimili", "Tingnan ang Kasosyo"],
    },
    customer: {
      badge: "Karanasan ng Mamimili",
      title: "Gawing mas madali ang healthy choices.",
      text: "Dapat maramdaman ng mga mamimili na sila ay inaalagaan at inaanyayahang bumalik.",
      cards: [
        { title: "Mamili ng seasonal produce", text: "Madaling ordering at pickup." },
        { title: "Gabay sa nutrisyon", text: "Praktikal na education para sa mas mabuting pagpili." },
        { title: "Dahilan para bumalik", text: "Recipe at featured products para sa repeat visits." },
      ],
      nutritionTitle: "Gabay sa Nutrisyon",
      nutrition: [
        "Pumili ng mas maraming sariwang gulay at seasonal produce.",
        "Gamitin ang lokal na produce upang mabawasan ang processed foods.",
        "Ipares ang meal ideas sa pickup options.",
      ],
      recipesTitle: "Mga Recipe",
      recipes: [
        { title: "Greens Bowl", text: "Sariwang gulay at simpleng dressing." },
        { title: "Garden Soup", text: "Flexible na recipe para sa seasonal vegetables." },
        { title: "Farm Stir-Fry", text: "Mabilis na meal gamit ang sariwang gulay." },
      ],
      actions: ["Pumunta sa Pamilihan", "Bumalik sa Panauhin"],
    },
    marketplace: {
      badge: "Karanasan sa Pamilihan",
      title: "Pamilihang pinapagana ng Bronson Family Farm + GrownBy",
      text: "Ipinapakita ng pahinang ito ang available products, pickup, at tunay na commerce.",
      chips: [
        "Naglilingkod sa Mahoning Valley Area",
        "Available Ngayong Linggo",
        "Tinatanggap ang SNAP",
        "Sariwang Lokal na Pagkain",
        "Seasonal Inventory",
      ],
      actions: [
        "Buksan ang GrownBy Store",
        "Bumalik sa Mamimili",
        "Maging Grower Vendor",
        "Pickup Biyernes 4–7 PM",
      ],
      featuredTitle: "Mga Tampok sa Marketplace",
      products: [
        { title: "Fresh Greens Bundle", text: "Seasonal availability at pickup connection.", badge: "Available Ngayong Linggo", accent: "#78a95c" },
        { title: "Seedlings & Starts", text: "Garden-ready options para sa bahay at growers.", badge: "Spring + Summer", accent: "#d78a3f" },
        { title: "Bubble Babies™", text: "Product na nag-uugnay sa education at growing.", badge: "Featured Product", accent: "#cd6d5e" },
      ],
      strengthTitle: "Lakas ng marketplace",
      strengths: [
        "Direktang daan sa pagbili",
        "Handa para sa pickup at pre-order",
        "Kwento ng seasonal products",
        "Tulay sa pagitan ng pagkatuto at pagbili",
      ],
      viewerTitle: "Ano ang ipinapakita nito",
      viewerText: "Ang farm ay gumagana, nagsisilbi sa komunidad, at kayang magdala ng repeat buying.",
      rhythmTitle: "Daloy ng marketplace",
      rhythm: [
        "Updated inventory ayon sa season",
        "Pickup-ready ordering flow",
        "Community-friendly shopping",
        "Konektado sa GrownBy",
      ],
    },
    grower: {
      badge: "Karanasan ng Grower",
      title: "Magiliw na ecosystem para sa growers.",
      text: "Nagtutulungan ang production, seasonality, visibility, at market connection.",
      cards: [
        { title: "Production Planning", text: "Suporta sa timing at readiness." },
        { title: "Market Connection", text: "Malinaw na tulay sa community commerce." },
        { title: "Shared Ecosystem", text: "Dapat maramdaman ng growers na sila ay mahalaga." },
      ],
      listTitle: "Mga Oportunidad",
      list: [
        "Seasonal visibility",
        "Community-facing sales",
        "Supportive ecosystem positioning",
      ],
    },
    youth: {
      badge: "Karanasan ng Kabataang Trabaho",
      title: "Training, structure, at support.",
      text: "Hands-on learning, work habits, at supervision.",
      cards: [
        { title: "Hands-On Learning", text: "Tunay na responsibilidad at visible contribution." },
        { title: "Supervisor Support", text: "Guidance at workflow support." },
        { title: "Meaningful Participation", text: "Purpose, skills, at future pathways." },
      ],
      listTitle: "Support structure",
      list: [
        "Supervisor guidance",
        "Clear accountability",
        "Connected wellness resources",
      ],
    },
    partners: {
      badge: "Karanasan ng Kasosyo",
      title: "Suportang lumilikha ng visible community value.",
      text: "Ang paglahok ng mga kasosyo ay sumusuporta sa food access at measurable benefit.",
      cards: [
        { title: "City at Civic Alignment", text: "Land use, youth pathways, at public value." },
        { title: "Institutional Collaboration", text: "Schools, universities, at community systems." },
        { title: "Sponsor Visibility", text: "Credible platform para sa collaborators." },
      ],
      stripTitle: "Partner visibility",
      strip: [
        "Home Depot",
        "Petitti Garden Centers",
        "Elliott's Garden Center",
        "City of Youngstown",
        "Central State University",
        "Jewish Community Center",
      ],
    },
    footer: "Binuo ng Bronson Family Farm",
  },

  it: {
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Demo dell'Ecosistema Agricolo Rigenerativo",
      language: "Lingua",
      guided: "Tour Guidato",
      stopGuided: "Ferma Tour",
      narrationOn: "Narrazione Attiva",
      narrationOff: "Narrazione Spenta",
    },
    nav: {
      home: "Home",
      guest: "Ospite",
      customer: "Cliente",
      marketplace: "Mercato",
      grower: "Produttore",
      youth: "Lavoro Giovanile",
      partners: "Partner",
    },
    tour: {
      title: "Tour Guidato",
      next: "Avanti",
      previous: "Indietro",
      finish: "Fine",
      steps: [
        { view: "home", label: "Home", blurb: "Inizia dalla visione dell'ecosistema." },
        { view: "guest", label: "Ospite", blurb: "Scopri la storia e lo scopo del luogo." },
        { view: "customer", label: "Cliente", blurb: "Accedi a prodotti, ricette e guida nutrizionale." },
        { view: "marketplace", label: "Mercato", blurb: "Esplora il commercio reale e il collegamento a GrownBy." },
        { view: "grower", label: "Produttore", blurb: "Collegati a produzione e accesso al mercato." },
        { view: "youth", label: "Lavoro Giovanile", blurb: "Vedi formazione, supporto e responsabilità." },
        { view: "partners", label: "Partner", blurb: "Vedi come il sostegno crea valore comunitario." },
      ],
    },
    home: {
      badge: "Entra nell'ecosistema",
      title: "Bronson Family Farm è più di una fattoria.",
      text:
        "È un ecosistema rigenerativo che collega terra, accesso al cibo, attività di mercato, produttori, sviluppo del lavoro giovanile, educazione e partnership a Youngstown e nell'area della Mahoning Valley.",
      primary: "Entra nel Mercato",
      secondary: "Inizia il Tour",
      chips: [
        "Al servizio della Mahoning Valley",
        "Cibo Locale Fresco",
        "Connesso al Lavoro",
        "Guidato dalla Comunità",
      ],
      stats: [
        { number: "118+", title: "acri di visione e possibilità", text: "Una destinazione per accesso al cibo, educazione e beneficio comunitario." },
        { number: "6", title: "percorsi in un ecosistema", text: "C'è una ragione per tornare ancora." },
      ],
      sectionTitle: "Scegli come le persone vivono la piattaforma.",
      sectionText: "Ogni percorso è progettato per essere utile, accogliente e attivo.",
      cards: [
        { key: "guest", title: "Ospite", text: "Scopri la storia, la terra e la missione." },
        { key: "customer", title: "Cliente", text: "Trova prodotti, ricette e guida." },
        { key: "marketplace", title: "Mercato", text: "Entra nel vero commercio agricolo." },
        { key: "grower", title: "Produttore", text: "Sostieni produzione e collegamento al mercato." },
        { key: "youth", title: "Lavoro Giovanile", text: "Mostra formazione e partecipazione significativa." },
        { key: "partners", title: "Partner", text: "Invita sponsor e istituzioni." },
      ],
    },
    guest: {
      badge: "Esperienza Ospite",
      title: "Entra nella storia dietro la terra.",
      text: "La fattoria risponde all'aumento dei costi del cibo e ai bisogni della comunità.",
      cards: [
        { title: "Perché conta", text: "Offre soluzioni legate alla terra e valore comunitario duraturo." },
        { title: "Cosa si scopre", text: "Storia, visione, eredità familiare e connessione con la salute." },
        { title: "Cosa viene dopo", text: "Shopping, educazione del cliente, partnership o lavoro giovanile." },
      ],
      actions: ["Continua al Cliente", "Esplora i Partner"],
    },
    customer: {
      badge: "Esperienza Cliente",
      title: "Rendere le scelte sane più facili.",
      text: "I clienti dovrebbero sentirsi curati, informati e invitati a tornare.",
      cards: [
        { title: "Acquista prodotti stagionali", text: "Ordinazione e ritiro semplici." },
        { title: "Guida nutrizionale", text: "Educazione pratica per decisioni più forti." },
        { title: "Motivo per tornare", text: "Ricette e prodotti in evidenza per visite ripetute." },
      ],
      nutritionTitle: "Guida Nutrizionale",
      nutrition: [
        "Scegli più verdure fresche e prodotti stagionali.",
        "Usa prodotti locali per ridurre la dipendenza da cibi processati.",
        "Abbina idee di pasti semplici alle opzioni di ritiro.",
      ],
      recipesTitle: "Idee di Ricette",
      recipes: [
        { title: "Ciotola di Verdure", text: "Verdure fresche e condimento semplice." },
        { title: "Zuppa dell'Orto", text: "Ricetta flessibile con verdure stagionali." },
        { title: "Saltato della Fattoria", text: "Pasto veloce con verdure fresche." },
      ],
      actions: ["Vai al Mercato", "Torna a Ospite"],
    },
    marketplace: {
      badge: "Esperienza Mercato",
      title: "Mercato gestito da Bronson Family Farm + GrownBy",
      text: "Questa pagina mostra prodotti disponibili, ritiro e commercio agricolo reale.",
      chips: [
        "Al servizio della Mahoning Valley",
        "Disponibile Questa Settimana",
        "SNAP Accettato",
        "Cibo Locale Fresco",
        "Inventario Stagionale",
      ],
      actions: [
        "Apri Negozio GrownBy",
        "Torna al Cliente",
        "Diventa Venditore Grower",
        "Ritiro venerdì 4–7 PM",
      ],
      featuredTitle: "Punti Salienti del Mercato",
      products: [
        { title: "Fresh Greens Bundle", text: "Disponibilità stagionale e connessione al ritiro.", badge: "Disponibile Questa Settimana", accent: "#78a95c" },
        { title: "Seedlings & Starts", text: "Opzioni pronte per il giardino per famiglie e produttori.", badge: "Primavera + Estate", accent: "#d78a3f" },
        { title: "Bubble Babies™", text: "Prodotto distintivo che collega educazione e coltivazione.", badge: "Prodotto in Evidenza", accent: "#cd6d5e" },
      ],
      strengthTitle: "Punti di forza del mercato",
      strengths: [
        "Percorso diretto all'acquisto",
        "Prontezza per ordini e ritiro",
        "Narrazione dei prodotti stagionali",
        "Ponte tra apprendimento e acquisto",
      ],
      viewerTitle: "Cosa comunica",
      viewerText: "La fattoria è operativa, al servizio della comunità e capace di sostenere acquisti ripetuti.",
      rhythmTitle: "Ritmo del mercato",
      rhythm: [
        "Inventario aggiornato per stagione",
        "Flusso ordini pronto per il ritiro",
        "Esperienza di acquisto amichevole",
        "Connesso a GrownBy",
      ],
    },
    grower: {
      badge: "Esperienza Produttore",
      title: "Un ecosistema accogliente per produttori.",
      text: "Produzione, stagionalità, visibilità e collegamento al mercato lavorano insieme.",
      cards: [
        { title: "Pianificazione", text: "Supporto per tempi di coltivazione e preparazione." },
        { title: "Collegamento al mercato", text: "Ponte chiaro verso il commercio comunitario." },
        { title: "Ecosistema condiviso", text: "I produttori dovrebbero sentirsi visibili e utili." },
      ],
      listTitle: "Opportunità",
      list: [
        "Visibilità stagionale",
        "Connessione alle vendite comunitarie",
        "Posizionamento in un ecosistema di supporto",
      ],
    },
    youth: {
      badge: "Esperienza Lavoro Giovanile",
      title: "Formazione, struttura e supporto.",
      text: "Apprendimento pratico, abitudini di lavoro e supervisione.",
      cards: [
        { title: "Apprendimento pratico", text: "Responsabilità reale e contributo visibile." },
        { title: "Supporto del supervisore", text: "Guida e supporto al flusso di lavoro." },
        { title: "Partecipazione significativa", text: "Scopo, competenze e futuro." },
      ],
      listTitle: "Struttura di supporto",
      list: [
        "Guida del supervisore",
        "Responsabilità chiara",
        "Risorse di benessere connesse",
      ],
    },
    partners: {
      badge: "Esperienza Partner",
      title: "Sostegno che crea valore comunitario visibile.",
      text: "Il coinvolgimento dei partner sostiene accesso al cibo e beneficio comunitario misurabile.",
      cards: [
        { title: "Allineamento civico", text: "Uso della terra, percorsi giovanili e valore pubblico." },
        { title: "Collaborazione istituzionale", text: "Scuole, università e sistemi comunitari." },
        { title: "Visibilità per gli sponsor", text: "Piattaforma credibile per collaboratori." },
      ],
      stripTitle: "Visibilità dei partner",
      strip: [
        "Home Depot",
        "Petitti Garden Centers",
        "Elliott's Garden Center",
        "City of Youngstown",
        "Central State University",
        "Jewish Community Center",
      ],
    },
    footer: "Sviluppato da Bronson Family Farm",
  },

  jam: {
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Regenerative Farm Ecosystem Demo",
      language: "Language",
      guided: "Guided Tour",
      stopGuided: "Stop Tour",
      narrationOn: "Voice On",
      narrationOff: "Voice Off",
    },
    nav: {
      home: "Home",
      guest: "Guest",
      customer: "Customer",
      marketplace: "Marketplace",
      grower: "Grower",
      youth: "Youth Work",
      partners: "Partners",
    },
    tour: {
      title: "Guided Tour",
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      steps: [
        { view: "home", label: "Home", blurb: "Start wid di vision a di ecosystem." },
        { view: "guest", label: "Guest", blurb: "Discover di story an di purpose a di place." },
        { view: "customer", label: "Customer", blurb: "Get produce, recipe, an nutrition guidance." },
        { view: "marketplace", label: "Marketplace", blurb: "Explore real commerce an GrownBy connection." },
        { view: "grower", label: "Grower", blurb: "Link up wid production an market access." },
        { view: "youth", label: "Youth Work", blurb: "See training, support, an responsibility." },
        { view: "partners", label: "Partners", blurb: "See how support build community value." },
      ],
    },
    home: {
      badge: "Step inna di ecosystem",
      title: "Bronson Family Farm a more dan jus a farm.",
      text:
        "A one regenerative ecosystem weh link land, food access, marketplace activity, growers, youth workforce development, education, an partnership inna Youngstown an di Mahoning Valley Area.",
      primary: "Go ina Marketplace",
      secondary: "Start Tour",
      chips: [
        "Serving di Mahoning Valley Area",
        "Fresh Local Food",
        "Workforce Connected",
        "Community Powered",
      ],
      stats: [
        { number: "118+", title: "acres a vision an possibility", text: "Destination fi food access, education, an community return." },
        { number: "6", title: "role pathway inna one ecosystem", text: "Plenty reason fi come back again." },
      ],
      sectionTitle: "Choose how people ago experience di platform.",
      sectionText: "Each pathway fi feel useful, welcoming, an active.",
      cards: [
        { key: "guest", title: "Guest", text: "Discover di story, di land, an di mission." },
        { key: "customer", title: "Customer", text: "Find produce, recipe, an guidance." },
        { key: "marketplace", title: "Marketplace", text: "Move into real farm commerce." },
        { key: "grower", title: "Grower", text: "Support production an market connection." },
        { key: "youth", title: "Youth Work", text: "Show training an meaningful participation." },
        { key: "partners", title: "Partners", text: "Invite sponsor an institution." },
      ],
    },
    guest: {
      badge: "Guest Experience",
      title: "Step inna di story behind di land.",
      text: "Di farm answer rising food cost an community need.",
      cards: [
        { title: "Why it matter", text: "Land-based solution an long-term community value deh yah." },
        { title: "Wah people discover", text: "Story, vision, family legacy, an health connection." },
        { title: "Wah next", text: "Shopping, customer education, partnership, or youth workforce." },
      ],
      actions: ["Continue to Customer", "Explore Partners"],
    },
    customer: {
      badge: "Customer Experience",
      title: "Mek healthy choice easier.",
      text: "Customer fi feel cared for, informed, an invited fi come back.",
      cards: [
        { title: "Shop seasonal produce", text: "Simple ordering an pickup." },
        { title: "Nutrition guidance", text: "Practical education fi stronger everyday choice." },
        { title: "Reason fi return", text: "Recipe an featured products fi repeat visit." },
      ],
      nutritionTitle: "Nutrition Guidance",
      nutrition: [
        "Choose more fresh greens an seasonal produce.",
        "Use local produce fi cut down pon processed food.",
        "Pair simple meal idea wid pickup option.",
      ],
      recipesTitle: "Recipe Ideas",
      recipes: [
        { title: "Greens Bowl", text: "Fresh greens an simple dressing." },
        { title: "Garden Soup", text: "Flexible recipe wid seasonal vegetable." },
        { title: "Farm Stir-Fry", text: "Quick meal wid fresh vegetable." },
      ],
      actions: ["Go to Marketplace", "Back to Guest"],
    },
    marketplace: {
      badge: "Marketplace Experience",
      title: "Marketplace powered by Bronson Family Farm + GrownBy",
      text: "Dis page show available product, pickup, an real farm commerce.",
      chips: [
        "Serving di Mahoning Valley Area",
        "Available Dis Week",
        "SNAP Accepted",
        "Fresh Local Food",
        "Seasonal Inventory",
      ],
      actions: [
        "Open GrownBy Store",
        "Back to Customer",
        "Become a Grower Vendor",
        "Pickup Friday 4–7 PM",
      ],
      featuredTitle: "Featured Marketplace Highlights",
      products: [
        { title: "Fresh Greens Bundle", text: "Seasonal availability an pickup connection.", badge: "Available Dis Week", accent: "#78a95c" },
        { title: "Seedlings & Starts", text: "Garden-ready option fi household an grower.", badge: "Spring + Summer", accent: "#d78a3f" },
        { title: "Bubble Babies™", text: "Product weh link education an growing.", badge: "Featured Product", accent: "#cd6d5e" },
      ],
      strengthTitle: "Marketplace strength",
      strengths: [
        "Direct path to purchase",
        "Pickup an pre-order readiness",
        "Seasonal product story",
        "Bridge between learning an buying",
      ],
      viewerTitle: "Wah dis show",
      viewerText: "Di farm operational, community-serving, an able fi support repeat buying.",
      rhythmTitle: "Marketplace rhythm",
      rhythm: [
        "Updated inventory by season",
        "Pickup-ready ordering flow",
        "Community-friendly shopping",
        "Connected to GrownBy",
      ],
    },
    grower: {
      badge: "Grower Experience",
      title: "One welcoming ecosystem fi grower.",
      text: "Production, seasonality, visibility, an market connection work together.",
      cards: [
        { title: "Planning", text: "Support fi timing an readiness." },
        { title: "Market connection", text: "Clear bridge to community commerce." },
        { title: "Shared ecosystem", text: "Grower fi feel visible an useful." },
      ],
      listTitle: "Opportunity",
      list: [
        "Seasonal visibility",
        "Community-facing sales",
        "Supportive ecosystem positioning",
      ],
    },
    youth: {
      badge: "Youth Workforce Experience",
      title: "Training, structure, an support.",
      text: "Hands-on learning, work habit, an supervision.",
      cards: [
        { title: "Hands-on learning", text: "Real responsibility an visible contribution." },
        { title: "Supervisor support", text: "Guidance an workflow support." },
        { title: "Meaningful participation", text: "Purpose, skill, an future pathway." },
      ],
      listTitle: "Support structure",
      list: [
        "Supervisor guidance",
        "Clear accountability",
        "Connected wellness resources",
      ],
    },
    partners: {
      badge: "Partners Experience",
      title: "Support weh build visible community value.",
      text: "Partner involvement support food access an measurable community benefit.",
      cards: [
        { title: "City an civic alignment", text: "Land use, youth pathway, an public value." },
        { title: "Institutional collaboration", text: "School, university, an community system." },
        { title: "Sponsor visibility", text: "Credible platform fi collaborator." },
      ],
      stripTitle: "Partner visibility",
      strip: [
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

  he: {
    brand: {
      title: "Bronson Family Farm",
      subtitle: "הדגמת מערכת חקלאית מתחדשת",
      language: "שפה",
      guided: "סיור מודרך",
      stopGuided: "עצור סיור",
      narrationOn: "קריינות פעילה",
      narrationOff: "קריינות כבויה",
    },
    nav: {
      home: "בית",
      guest: "אורח",
      customer: "לקוח",
      marketplace: "שוק",
      grower: "מגדל",
      youth: "כוח עבודה לנוער",
      partners: "שותפים",
    },
    tour: {
      title: "סיור מודרך",
      next: "הבא",
      previous: "הקודם",
      finish: "סיום",
      steps: [
        { view: "home", label: "בית", blurb: "התחילו מהחזון של המערכת." },
        { view: "guest", label: "אורח", blurb: "גלו את הסיפור ואת מטרת המקום." },
        { view: "customer", label: "לקוח", blurb: "קבלו תוצרת, מתכונים והדרכה תזונתית." },
        { view: "marketplace", label: "שוק", blurb: "חקרו מסחר אמיתי וחיבור ל-GrownBy." },
        { view: "grower", label: "מגדל", blurb: "התחברו לייצור ולגישה לשוק." },
        { view: "youth", label: "כוח עבודה לנוער", blurb: "ראו הכשרה, תמיכה ואחריות." },
        { view: "partners", label: "שותפים", blurb: "ראו כיצד תמיכה יוצרת ערך קהילתי." },
      ],
    },
    home: {
      badge: "היכנסו למערכת",
      title: "Bronson Family Farm היא יותר מחווה.",
      text:
        "זוהי מערכת מתחדשת המחברת בין אדמה, גישה למזון, פעילות שוק, מגדלים, פיתוח תעסוקת נוער, חינוך ושיתופי פעולה ב-Youngstown ובאזור Mahoning Valley.",
      primary: "כניסה לשוק",
      secondary: "התחל סיור",
      chips: [
        "משרתים את אזור Mahoning Valley",
        "מזון מקומי טרי",
        "מחובר לתעסוקה",
        "מונע בידי הקהילה",
      ],
      stats: [
        { number: "118+", title: "אקרים של חזון ואפשרות", text: "יעד לגישה למזון, חינוך ותועלת קהילתית." },
        { number: "6", title: "מסלולים במערכת אחת", text: "יש סיבה לחזור שוב ושוב." },
      ],
      sectionTitle: "בחרו כיצד יחוו אנשים את הפלטפורמה.",
      sectionText: "כל מסלול נועד להיות מועיל, מזמין וחי.",
      cards: [
        { key: "guest", title: "אורח", text: "גלו את הסיפור, האדמה והשליחות." },
        { key: "customer", title: "לקוח", text: "מצאו תוצרת, מתכונים והדרכה." },
        { key: "marketplace", title: "שוק", text: "היכנסו למסחר חקלאי אמיתי." },
        { key: "grower", title: "מגדל", text: "תמיכה בייצור ובחיבור לשוק." },
        { key: "youth", title: "כוח עבודה לנוער", text: "הצגת הכשרה והשתתפות משמעותית." },
        { key: "partners", title: "שותפים", text: "הזמנת נותני חסות ומוסדות." },
      ],
    },
    guest: {
      badge: "חוויית אורח",
      title: "היכנסו לסיפור שמאחורי האדמה.",
      text: "החווה מגיבה לעליית מחירי המזון ולצורכי הקהילה.",
      cards: [
        { title: "למה זה חשוב", text: "יש כאן פתרונות מבוססי אדמה וערך קהילתי ארוך טווח." },
        { title: "מה מגלים", text: "סיפור, חזון, מורשת משפחתית וקשר לבריאות." },
        { title: "מה הלאה", text: "קניות, חינוך לקוחות, שותפויות או כוח עבודה לנוער." },
      ],
      actions: ["המשך ללקוח", "צפה בשותפים"],
    },
    customer: {
      badge: "חוויית לקוח",
      title: "להפוך בחירות בריאות לקלות יותר.",
      text: "הלקוחות צריכים להרגיש שמטפלים בהם, שהם מקבלים מידע ושמזמינים אותם לחזור.",
      cards: [
        { title: "קניית תוצרת עונתית", text: "הזמנה ואיסוף פשוטים." },
        { title: "הדרכה תזונתית", text: "חינוך מעשי לקבלת החלטות טובות יותר." },
        { title: "סיבה לחזור", text: "מתכונים ומוצרים מובילים לביקורים חוזרים." },
      ],
      nutritionTitle: "הדרכה תזונתית",
      nutrition: [
        "בחרו יותר עלים ירוקים ותוצרת עונתית.",
        "השתמשו בתוצרת מקומית להפחתת תלות במזון מעובד.",
        "שלבו רעיונות פשוטים לארוחות עם אפשרויות איסוף.",
      ],
      recipesTitle: "רעיונות למתכונים",
      recipes: [
        { title: "קערת ירקות", text: "ירקות טריים ורוטב פשוט." },
        { title: "מרק גינה", text: "מתכון גמיש עם ירקות עונתיים." },
        { title: "מוקפץ מהחווה", text: "ארוחה מהירה עם ירקות טריים." },
      ],
      actions: ["עבור לשוק", "חזרה לאורח"],
    },
    marketplace: {
      badge: "חוויית שוק",
      title: "שוק המופעל על ידי Bronson Family Farm + GrownBy",
      text: "עמוד זה מציג מוצרים זמינים, איסוף ומסחר חקלאי אמיתי.",
      chips: [
        "משרתים את אזור Mahoning Valley",
        "זמין השבוע",
        "SNAP מתקבל",
        "מזון מקומי טרי",
        "מלאי עונתי",
      ],
      actions: [
        "פתח את חנות GrownBy",
        "חזרה ללקוח",
        "הפוך למגדל מוכר",
        "איסוף שישי 4–7 PM",
      ],
      featuredTitle: "מובילי שוק נבחרים",
      products: [
        { title: "Fresh Greens Bundle", text: "זמינות עונתית וחיבור לאיסוף.", badge: "זמין השבוע", accent: "#78a95c" },
        { title: "Seedlings & Starts", text: "אפשרויות מוכנות לגינה לבתים ולמגדלים.", badge: "אביב + קיץ", accent: "#d78a3f" },
        { title: "Bubble Babies™", text: "מוצר ייחודי המחבר חינוך וגידול.", badge: "מוצר מוביל", accent: "#cd6d5e" },
      ],
      strengthTitle: "חוזקות השוק",
      strengths: [
        "דרך ישירה לרכישה",
        "מוכנות להזמנה ולאיסוף",
        "סיפור מוצר עונתי",
        "גשר בין למידה לקנייה",
      ],
      viewerTitle: "מה זה משדר",
      viewerText: "החווה פעילה, משרתת את הקהילה ומסוגלת לתמוך בקנייה חוזרת.",
      rhythmTitle: "קצב השוק",
      rhythm: [
        "מלאי מתעדכן לפי עונה",
        "זרימת הזמנה מוכנה לאיסוף",
        "חוויית קנייה ידידותית",
        "מחובר ל-GrownBy",
      ],
    },
    grower: {
      badge: "חוויית מגדל",
      title: "מערכת מזמינה למגדלים.",
      text: "ייצור, עונתיות, נראות וחיבור לשוק עובדים יחד.",
      cards: [
        { title: "תכנון", text: "תמיכה בתזמון ובמוכנות." },
        { title: "חיבור לשוק", text: "גשר ברור למסחר קהילתי." },
        { title: "מערכת משותפת", text: "המגדלים צריכים להרגיש נראים ומועילים." },
      ],
      listTitle: "הזדמנויות",
      list: [
        "נראות עונתית",
        "חיבור למכירות קהילתיות",
        "מיקום בתוך מערכת תומכת",
      ],
    },
    youth: {
      badge: "חוויית כוח עבודה לנוער",
      title: "הכשרה, מבנה ותמיכה.",
      text: "למידה מעשית, הרגלי עבודה ופיקוח.",
      cards: [
        { title: "למידה מעשית", text: "אחריות אמיתית ותרומה נראית לעין." },
        { title: "תמיכת מפקח", text: "הכוונה ותמיכה בזרימת עבודה." },
        { title: "השתתפות משמעותית", text: "מטרה, מיומנויות ועתיד." },
      ],
      listTitle: "מבנה תמיכה",
      list: [
        "הכוונת מפקח",
        "אחריות ברורה",
        "משאבי רווחה מחוברים",
      ],
    },
    partners: {
      badge: "חוויית שותפים",
      title: "תמיכה היוצרת ערך קהילתי נראה לעין.",
      text: "מעורבות השותפים תומכת בגישה למזון ובתועלת קהילתית מדידה.",
      cards: [
        { title: "התאמה עירונית ואזרחית", text: "שימוש בקרקע, מסלולי נוער וערך ציבורי." },
        { title: "שיתוף פעולה מוסדי", text: "בתי ספר, אוניברסיטאות ומערכות קהילתיות." },
        { title: "נראות לנותני חסות", text: "פלטפורמה אמינה לשיתופי פעולה." },
      ],
      stripTitle: "נראות שותפים",
      strip: [
        "Home Depot",
        "Petitti Garden Centers",
        "Elliott's Garden Center",
        "City of Youngstown",
        "Central State University",
        "Jewish Community Center",
      ],
    },
    footer: "פותח על ידי Bronson Family Farm",
  },
};

const speechLang: Record<Lang, string> = {
  en: "en-US",
  es: "es-ES",
  tl: "fil-PH",
  it: "it-IT",
  jam: "en-JM",
  he: "he-IL",
};

function isRTL(lang: Lang) {
  return lang === "he";
}

function speak(text: string, lang: Lang) {
  if (!("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechLang[lang];
  utterance.rate = 0.96;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [lang, setLang] = useState<Lang>("en");
  const [guided, setGuided] = useState(false);
  const [guidedIndex, setGuidedIndex] = useState(0);
  const [narration, setNarration] = useState(false);

  const t = copy[lang];
  const dir = isRTL(lang) ? "rtl" : "ltr";

  const navItems = useMemo(
    () => [
      { key: "home" as View, label: t.nav.home },
      { key: "guest" as View, label: t.nav.guest },
      { key: "customer" as View, label: t.nav.customer },
      { key: "marketplace" as View, label: t.nav.marketplace },
      { key: "grower" as View, label: t.nav.grower },
      { key: "youth" as View, label: t.nav.youth },
      { key: "partners" as View, label: t.nav.partners },
    ],
    [t]
  );

  useEffect(() => {
    if (guided) {
      setView(t.tour.steps[guidedIndex].view);
    }
  }, [guided, guidedIndex, t]);

  useEffect(() => {
    if (!narration) {
      window.speechSynthesis?.cancel();
      return;
    }
    const pageText: Record<View, string> = {
      home: `${t.home.title}. ${t.home.text}`,
      guest: `${t.guest.title}. ${t.guest.text}`,
      customer: `${t.customer.title}. ${t.customer.text}`,
      marketplace: `${t.marketplace.title}. ${t.marketplace.text}`,
      grower: `${t.grower.title}. ${t.grower.text}`,
      youth: `${t.youth.title}. ${t.youth.text}`,
      partners: `${t.partners.title}. ${t.partners.text}`,
    };
    const text = guided
      ? `${t.tour.title}. ${t.tour.steps[guidedIndex].label}. ${t.tour.steps[guidedIndex].blurb}`
      : pageText[view];
    speak(text, lang);
    return () => window.speechSynthesis?.cancel();
  }, [guided, guidedIndex, view, lang, narration, t]);

  const nextTour = () => {
    if (guidedIndex < t.tour.steps.length - 1) {
      setGuidedIndex((v) => v + 1);
    } else {
      setGuided(false);
      setGuidedIndex(0);
      setView("home");
    }
  };

  const prevTour = () => {
    if (guidedIndex > 0) setGuidedIndex((v) => v - 1);
  };

  const startTour = () => {
    setGuided(true);
    setGuidedIndex(0);
    setView(t.tour.steps[0].view);
  };

  const stopTour = () => {
    setGuided(false);
    setGuidedIndex(0);
    window.speechSynthesis?.cancel();
  };

  return (
    <div dir={dir} style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brandWrap}>
            <div style={styles.brandIcon}>🌿</div>
            <div>
              <div style={styles.brandTitle}>{t.brand.title}</div>
              <div style={styles.brandSub}>{t.brand.subtitle}</div>
            </div>
          </div>

          <div style={styles.headerControls}>
            <div style={styles.controlGroup}>
              <span style={styles.controlLabel}>{t.brand.language}</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                style={styles.select}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="tl">Tagalog</option>
                <option value="it">Italiano</option>
                <option value="jam">Jamaican Patois</option>
                <option value="he">עברית</option>
              </select>
            </div>

            <button onClick={() => (guided ? stopTour() : startTour())} style={styles.topButton}>
              {guided ? t.brand.stopGuided : t.brand.guided}
            </button>

            <button onClick={() => setNarration((v) => !v)} style={styles.topButton}>
              {narration ? t.brand.narrationOff : t.brand.narrationOn}
            </button>
          </div>

          <nav style={styles.nav}>
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setGuided(false);
                  setView(item.key);
                }}
                style={{
                  ...styles.navButton,
                  ...(view === item.key ? styles.navButtonActive : {}),
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {guided && (
        <section style={styles.guidedWrap}>
          <div style={styles.guidedBox}>
            <div>
              <div style={styles.guidedTitle}>{t.tour.title}</div>
              <div style={styles.guidedText}>
                <strong>{t.tour.steps[guidedIndex].label}:</strong>{" "}
                {t.tour.steps[guidedIndex].blurb}
              </div>
            </div>
            <div style={styles.guidedButtons}>
              <button onClick={prevTour} style={styles.secondaryBtn}>
                {t.tour.previous}
              </button>
              <button onClick={nextTour} style={styles.primaryBtn}>
                {guidedIndex === t.tour.steps.length - 1 ? t.tour.finish : t.tour.next}
              </button>
            </div>
          </div>
        </section>
      )}

      {view === "home" && (
        <section style={styles.section}>
          <div style={styles.hero}>
            <div style={styles.heroBadge}>🌱 {t.home.badge}</div>
            <div style={styles.heroGrid}>
              <div>
                <h1 style={styles.heroTitle}>{t.home.title}</h1>
                <p style={styles.heroText}>{t.home.text}</p>
                <div style={styles.actionRow}>
                  <button onClick={() => setView("marketplace")} style={styles.primaryBtn}>
                    {t.home.primary}
                  </button>
                  <button onClick={startTour} style={styles.ghostBtn}>
                    {t.home.secondary}
                  </button>
                </div>
                <div style={styles.chipRow}>
                  {t.home.chips.map((chip) => (
                    <span key={chip} style={styles.heroChip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div style={styles.statGrid}>
                {t.home.stats.map((s) => (
                  <div key={s.number + s.title} style={styles.statCard}>
                    <div style={styles.statNumber}>{s.number}</div>
                    <div style={styles.statTitle}>{s.title}</div>
                    <div style={styles.statText}>{s.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.shell}>
            <h2 style={styles.sectionTitle}>{t.home.sectionTitle}</h2>
            <p style={styles.sectionText}>{t.home.sectionText}</p>
            <div style={styles.cardsGrid}>
              {t.home.cards.map((card) => (
                <button
                  key={card.key}
                  onClick={() => setView(card.key)}
                  style={styles.pathCard}
                >
                  <div style={styles.cardTitle}>{card.title}</div>
                  <div style={styles.cardText}>{card.text}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {view === "guest" && (
        <PageSection badge={t.guest.badge} title={t.guest.title} text={t.guest.text}>
          <div style={styles.cardsGrid}>
            {t.guest.cards.map((card) => (
              <Card key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
          <div style={styles.actionRow}>
            <button onClick={() => setView("customer")} style={styles.primaryBtn}>
              {t.guest.actions[0]}
            </button>
            <button onClick={() => setView("partners")} style={styles.secondaryBtn}>
              {t.guest.actions[1]}
            </button>
          </div>
        </PageSection>
      )}

      {view === "customer" && (
        <PageSection badge={t.customer.badge} title={t.customer.title} text={t.customer.text}>
          <div style={styles.cardsGrid}>
            {t.customer.cards.map((card) => (
              <Card key={card.title} title={card.title} text={card.text} />
            ))}
          </div>

          <div style={styles.twoGrid}>
            <Panel title={t.customer.nutritionTitle}>
              <ul style={styles.list}>
                {t.customer.nutrition.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>

            <Panel title={t.customer.recipesTitle}>
              <div style={styles.innerStack}>
                {t.customer.recipes.map((r) => (
                  <div key={r.title} style={styles.recipeCard}>
                    <div style={styles.recipeTitle}>{r.title}</div>
                    <div style={styles.recipeText}>{r.text}</div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div style={styles.actionRow}>
            <button onClick={() => setView("marketplace")} style={styles.primaryBtn}>
              {t.customer.actions[0]}
            </button>
            <button onClick={() => setView("guest")} style={styles.secondaryBtn}>
              {t.customer.actions[1]}
            </button>
          </div>
        </PageSection>
      )}

      {view === "marketplace" && (
        <PageSection
          badge={t.marketplace.badge}
          title={t.marketplace.title}
          text={t.marketplace.text}
        >
          <div style={styles.chipRow}>
            {t.marketplace.chips.map((chip) => (
              <span key={chip} style={styles.marketChip}>
                {chip}
              </span>
            ))}
          </div>

          <div style={styles.actionRow}>
            <a
              href="https://grownby.com/farms/bronson-family-farm/shop"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.primaryBtn, textDecoration: "none", display: "inline-block" }}
            >
              {t.marketplace.actions[0]}
            </a>
            <button onClick={() => setView("customer")} style={styles.secondaryBtn}>
              {t.marketplace.actions[1]}
            </button>
            <button onClick={() => setView("grower")} style={styles.secondaryBtn}>
              {t.marketplace.actions[2]}
            </button>
            <span style={styles.pickupChip}>{t.marketplace.actions[3]}</span>
          </div>

          <Panel title={t.marketplace.featuredTitle}>
            <div style={styles.cardsGrid}>
              {t.marketplace.products.map((p) => (
                <div key={p.title} style={styles.productCard}>
                  <div style={{ ...styles.productTop, borderTop: `6px solid ${p.accent}` }}>
                    <span style={styles.productBadge}>{p.badge}</span>
                  </div>
                  <div style={styles.productBody}>
                    <div style={styles.cardTitle}>{p.title}</div>
                    <div style={styles.cardText}>{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <div style={styles.threeGrid}>
            <Panel title={t.marketplace.strengthTitle}>
              <ul style={styles.list}>
                {t.marketplace.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>

            <Panel title={t.marketplace.viewerTitle}>
              <div style={styles.panelText}>{t.marketplace.viewerText}</div>
            </Panel>

            <Panel title={t.marketplace.rhythmTitle}>
              <ul style={styles.list}>
                {t.marketplace.rhythm.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
          </div>
        </PageSection>
      )}

      {view === "grower" && (
        <PageSection badge={t.grower.badge} title={t.grower.title} text={t.grower.text}>
          <div style={styles.cardsGrid}>
            {t.grower.cards.map((card) => (
              <Card key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
          <Panel title={t.grower.listTitle}>
            <ul style={styles.list}>
              {t.grower.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </PageSection>
      )}

      {view === "youth" && (
        <PageSection badge={t.youth.badge} title={t.youth.title} text={t.youth.text}>
          <div style={styles.cardsGrid}>
            {t.youth.cards.map((card) => (
              <Card key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
          <Panel title={t.youth.listTitle}>
            <ul style={styles.list}>
              {t.youth.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </PageSection>
      )}

      {view === "partners" && (
        <PageSection badge={t.partners.badge} title={t.partners.title} text={t.partners.text}>
          <div style={styles.cardsGrid}>
            {t.partners.cards.map((card) => (
              <Card key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
          <Panel title={t.partners.stripTitle}>
            <div style={styles.chipRow}>
              {t.partners.strip.map((item) => (
                <span key={item} style={styles.partnerChip}>
                  {item}
                </span>
              ))}
            </div>
          </Panel>
        </PageSection>
      )}

      <footer style={styles.footer}>{t.footer}</footer>
    </div>
  );
}

function PageSection({
  badge,
  title,
  text,
  children,
}: {
  badge: string;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <section style={styles.section}>
      <div style={styles.pageSection}>
        <div style={styles.sectionBadge}>{badge}</div>
        <h2 style={styles.sectionTitle}>{title}</h2>
        <p style={styles.sectionText}>{text}</p>
        <div style={styles.sectionStack}>{children}</div>
      </div>
    </section>
  );
}

function Card({ title, text }: Block) {
  return (
    <div style={styles.card}>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardText}>{text}</div>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={styles.panel}>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.panelInner}>{children}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f3efe4 0%, #f8f8f4 45%, #eef4ee 100%)",
    color: "#163327",
    fontFamily: "Inter, Arial, Helvetica, sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(7, 49, 36, 0.97)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  },
  headerInner: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "16px 20px",
    display: "grid",
    gap: "14px",
  },
  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  brandIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "14px",
    display: "grid",
    placeItems: "center",
    background: "rgba(240, 215, 132, 0.18)",
    color: "#f5df96",
    fontSize: "22px",
  },
  brandTitle: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 800,
    lineHeight: 1.1,
  },
  brandSub: {
    color: "rgba(255,255,255,0.72)",
    fontSize: "12px",
    marginTop: "4px",
  },
  headerControls: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  controlGroup: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  controlLabel: {
    color: "#dce9dd",
    fontSize: "13px",
    fontWeight: 700,
  },
  select: {
    borderRadius: "999px",
    padding: "10px 14px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "14px",
    outline: "none",
  },
  topButton: {
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "#ffffff",
    borderRadius: "999px",
    padding: "10px 14px",
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  navButton: {
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "#ffffff",
    borderRadius: "999px",
    padding: "10px 14px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
  },
  navButtonActive: {
    border: "1px solid rgba(240,215,132,0.55)",
    background: "rgba(240,215,132,0.18)",
    color: "#fff3c4",
  },
  guidedWrap: {
    padding: "16px 20px 0",
  },
  guidedBox: {
    maxWidth: "1400px",
    margin: "0 auto",
    background: "linear-gradient(135deg, #fff9e8 0%, #f4f8ef 100%)",
    border: "1px solid rgba(14,74,57,0.10)",
    borderRadius: "24px",
    padding: "18px 22px",
    boxShadow: "0 10px 20px rgba(25, 47, 35, 0.06)",
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  guidedTitle: {
    color: "#1f5b3a",
    fontWeight: 800,
    fontSize: "14px",
  },
  guidedText: {
    marginTop: "8px",
    color: "#40564d",
    fontSize: "15px",
    lineHeight: 1.6,
    maxWidth: "900px",
  },
  guidedButtons: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  section: {
    padding: "34px 20px 54px",
  },
  shell: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  hero: {
    maxWidth: "1400px",
    margin: "0 auto 34px",
    background:
      "radial-gradient(circle at 78% 25%, rgba(255,255,255,0.14), transparent 20%), radial-gradient(circle at 15% 82%, rgba(255,215,122,0.10), transparent 20%), linear-gradient(135deg, #0b3a2d 0%, #0f4b3b 48%, #1c7049 100%)",
    borderRadius: "28px",
    padding: "54px 42px",
    boxShadow: "0 24px 60px rgba(12, 36, 27, 0.20)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  heroBadge: {
    display: "inline-block",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.10)",
    color: "#f3ebc9",
    padding: "8px 14px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "20px",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.25fr) minmax(280px, 0.9fr)",
    gap: "26px",
    alignItems: "start",
  },
  heroTitle: {
    margin: 0,
    color: "#ffffff",
    fontSize: "clamp(34px, 6vw, 64px)",
    lineHeight: 1.02,
    fontWeight: 800,
    maxWidth: "900px",
  },
  heroText: {
    marginTop: "18px",
    maxWidth: "820px",
    color: "rgba(255,255,255,0.84)",
    fontSize: "18px",
    lineHeight: 1.7,
  },
  actionRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "22px",
  },
  primaryBtn: {
    border: "none",
    background: "#f0d784",
    color: "#24311d",
    borderRadius: "999px",
    padding: "14px 22px",
    fontWeight: 800,
    fontSize: "15px",
    cursor: "pointer",
  },
  secondaryBtn: {
    border: "1px solid rgba(20,57,43,0.12)",
    background: "#ffffff",
    color: "#14392b",
    borderRadius: "999px",
    padding: "11px 16px",
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
  },
  ghostBtn: {
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    borderRadius: "999px",
    padding: "14px 22px",
    fontWeight: 700,
    fontSize: "15px",
    cursor: "pointer",
  },
  chipRow: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  heroChip: {
    display: "inline-block",
    borderRadius: "999px",
    padding: "8px 12px",
    background: "rgba(255,255,255,0.10)",
    color: "#e9f0dc",
    fontSize: "13px",
    fontWeight: 700,
  },
  marketChip: {
    display: "inline-block",
    borderRadius: "999px",
    padding: "8px 12px",
    background: "#e8efdf",
    color: "#1f5b3a",
    fontSize: "13px",
    fontWeight: 800,
  },
  pickupChip: {
    display: "inline-block",
    borderRadius: "999px",
    padding: "11px 16px",
    background: "rgba(31,91,58,0.08)",
    color: "#1f5b3a",
    fontSize: "14px",
    fontWeight: 800,
  },
  statGrid: {
    display: "grid",
    gap: "18px",
  },
  statCard: {
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "22px",
  },
  statNumber: {
    color: "#fff2c5",
    fontSize: "34px",
    lineHeight: 1,
    fontWeight: 800,
    marginBottom: "8px",
  },
  statTitle: {
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "14px",
  },
  statText: {
    marginTop: "8px",
    color: "rgba(255,255,255,0.76)",
    lineHeight: 1.6,
    fontSize: "14px",
  },
  pageSection: {
    maxWidth: "1400px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.78)",
    border: "1px solid rgba(14,74,57,0.10)",
    borderRadius: "28px",
    padding: "30px",
    boxShadow: "0 14px 30px rgba(25, 47, 35, 0.08)",
  },
  sectionBadge: {
    display: "inline-block",
    borderRadius: "999px",
    background: "#e8efdf",
    color: "#1f5b3a",
    padding: "8px 14px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "16px",
  },
  sectionTitle: {
    margin: 0,
    color: "#14392b",
    fontSize: "clamp(28px, 4vw, 42px)",
    lineHeight: 1.08,
    fontWeight: 800,
  },
  sectionText: {
    marginTop: "14px",
    color: "#42594f",
    lineHeight: 1.7,
    fontSize: "17px",
    maxWidth: "920px",
  },
  sectionStack: {
    marginTop: "22px",
    display: "grid",
    gap: "22px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  },
  twoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
  },
  threeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid rgba(14,74,57,0.08)",
    borderRadius: "22px",
    padding: "22px",
  },
  pathCard: {
    textAlign: "start",
    background: "rgba(255,255,255,0.78)",
    border: "1px solid rgba(14,74,57,0.10)",
    borderRadius: "24px",
    padding: "22px",
    boxShadow: "0 14px 30px rgba(25, 47, 35, 0.08)",
    cursor: "pointer",
  },
  cardTitle: {
    color: "#14392b",
    fontWeight: 800,
    fontSize: "20px",
    lineHeight: 1.15,
  },
  cardText: {
    marginTop: "10px",
    color: "#586961",
    lineHeight: 1.65,
    fontSize: "15px",
  },
  panel: {
    background: "#ffffff",
    border: "1px solid rgba(14,74,57,0.08)",
    borderRadius: "22px",
    padding: "22px",
  },
  panelInner: {
    marginTop: "10px",
  },
  panelText: {
    color: "#586961",
    lineHeight: 1.7,
    fontSize: "15px",
  },
  list: {
    margin: 0,
    paddingInlineStart: "20px",
    color: "#586961",
    lineHeight: 1.8,
    fontSize: "15px",
  },
  innerStack: {
    display: "grid",
    gap: "12px",
  },
  recipeCard: {
    border: "1px solid rgba(14,74,57,0.08)",
    borderRadius: "18px",
    padding: "16px",
    background: "#ffffff",
  },
  recipeTitle: {
    color: "#173126",
    fontWeight: 800,
    fontSize: "18px",
  },
  recipeText: {
    marginTop: "8px",
    color: "#5e6f67",
    lineHeight: 1.6,
    fontSize: "14px",
  },
  productCard: {
    background: "#ffffff",
    border: "1px solid rgba(14,74,57,0.08)",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 10px 22px rgba(25, 47, 35, 0.06)",
  },
  productTop: {
    height: "70px",
    background: "linear-gradient(180deg, #f8f7f3 0%, #f0efe8 100%)",
    padding: "14px",
    display: "flex",
    alignItems: "flex-start",
  },
  productBadge: {
    display: "inline-block",
    borderRadius: "999px",
    padding: "8px 12px",
    background: "#f3f7ef",
    color: "#184a35",
    fontSize: "12px",
    fontWeight: 800,
    border: "1px solid rgba(14,74,57,0.08)",
  },
  productBody: {
    padding: "18px",
  },
  partnerChip: {
    display: "inline-block",
    borderRadius: "999px",
    padding: "10px 14px",
    background: "#f3f7ef",
    border: "1px solid rgba(14,74,57,0.10)",
    color: "#14392b",
    fontSize: "14px",
    fontWeight: 700,
  },
  footer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px 34px",
    color: "#5f7067",
    fontSize: "14px",
  },
};
