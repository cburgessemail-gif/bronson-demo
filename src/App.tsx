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

type PathwayContent = {
  badge: string;
  title: string;
  mission: string;
  soundBite: string;
  intro: string;
  knowledgeTitle: string;
  knowledge: string[];
  summaryTitle: string;
  summary: string;
  nextTitle: string;
  nextButtons: { label: string; view?: View; href?: string }[];
};

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
  home: {
    badge: string;
    title: string;
    intro: string;
    mission: string;
    primary: string;
    secondary: string;
    chips: string[];
    stats: { number: string; title: string; text: string }[];
    cards: { key: View; title: string; mission: string; outcome: string }[];
  };
  guided: {
    title: string;
    next: string;
    previous: string;
    finish: string;
    steps: { view: View; label: string; blurb: string }[];
  };
  pathways: Record<Exclude<View, "home">, PathwayContent>;
  footer: string;
};

const copy: Record<Lang, Copy> = {
  en: {
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Mission-Driven Ecosystem Demo",
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
    home: {
      badge: "Step into the ecosystem",
      title: "Bronson Family Farm is more than a farm.",
      intro:
        "It is a regenerative ecosystem connecting land, food access, marketplace activity, growers, youth workforce development, education, and partnership in Youngstown and the Mahoning Valley Area.",
      mission:
        "The mission of Bronson Family Farm is to restore land, grow healthy food, create opportunity, and build community systems for the Mahoning Valley Area.",
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
          title: "mission pathways",
          text: "Each pathway is built to achieve a specific outcome, not just display information.",
        },
      ],
      cards: [
        {
          key: "guest",
          title: "Guest",
          mission:
            "Help visitors understand the vision, story, and purpose of Bronson Family Farm.",
          outcome: "Outcome: visitors quickly understand the mission and why it matters.",
        },
        {
          key: "customer",
          title: "Customer",
          mission:
            "Improve access to fresh food, practical nutrition, and repeat healthy choices.",
          outcome: "Outcome: customers feel welcomed, informed, and motivated to return.",
        },
        {
          key: "marketplace",
          title: "Marketplace",
          mission:
            "Turn community interest into real purchasing power for local food access and farm sustainability.",
          outcome: "Outcome: visitors move naturally into buying or ordering.",
        },
        {
          key: "grower",
          title: "Grower",
          mission:
            "Connect producers to opportunity, visibility, and market participation.",
          outcome: "Outcome: growers want to participate and sell through the ecosystem.",
        },
        {
          key: "youth",
          title: "Youth Workforce",
          mission:
            "Develop skills, responsibility, and future readiness through real work experiences.",
          outcome: "Outcome: youth and families see a clear pathway to growth and readiness.",
        },
        {
          key: "partners",
          title: "Partners",
          mission:
            "Align resources, sponsorship, and collaboration for measurable community benefit.",
          outcome: "Outcome: institutions and supporters see clear reasons to engage.",
        },
      ],
    },
    guided: {
      title: "Guided Tour",
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      steps: [
        {
          view: "home",
          label: "Home",
          blurb:
            "Start with the overall mission of Bronson Family Farm and the purpose of the ecosystem.",
        },
        {
          view: "guest",
          label: "Guest",
          blurb:
            "This pathway helps visitors understand the vision, story, and purpose of the farm.",
        },
        {
          view: "customer",
          label: "Customer",
          blurb:
            "This pathway helps customers connect fresh food, nutrition, and repeat healthy choices.",
        },
        {
          view: "marketplace",
          label: "Marketplace",
          blurb:
            "This pathway converts community interest into real purchasing power.",
        },
        {
          view: "grower",
          label: "Grower",
          blurb:
            "This pathway connects growers to visibility, opportunity, and participation.",
        },
        {
          view: "youth",
          label: "Youth Workforce",
          blurb:
            "This pathway shows how real work experiences build readiness and responsibility.",
        },
        {
          view: "partners",
          label: "Partners",
          blurb:
            "This pathway shows how collaboration creates measurable community benefit.",
        },
      ],
    },
    pathways: {
      guest: {
        badge: "Guest Pathway",
        title: "Discover why this place matters.",
        mission:
          "The mission of the Guest pathway is to help visitors understand the vision, story, and purpose of Bronson Family Farm for stronger community connection.",
        soundBite: "Discover why this place matters.",
        intro:
          "Bronson Family Farm is more than farmland. It is a regenerative ecosystem created to restore land, improve food access, and build opportunity.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Visitors learn about rising food costs and the need for healthier local food systems.",
          "Visitors understand how restoration, agritourism, and community development connect.",
          "Visitors see the family legacy, land purpose, and broader mission behind the work.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "This pathway turns curiosity into understanding so people leave with a clear sense of why the farm exists.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Continue to Customer", view: "customer" },
          { label: "Explore Partners", view: "partners" },
        ],
      },
      customer: {
        badge: "Customer Pathway",
        title: "Healthy choices should feel easier.",
        mission:
          "The mission of the Customer pathway is to improve access to fresh food, practical nutrition, and repeat healthy choices for individuals and families.",
        soundBite: "Healthy choices should feel easier.",
        intro:
          "Customers enter a welcoming pathway designed to connect them with fresh food, practical guidance, and simple ways to return again.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Fresh produce and seasonal offerings are connected to practical food choices.",
          "Nutrition guidance helps customers understand how fresh food supports everyday health.",
          "Recipes and repeat-visit logic help turn one purchase into a healthier routine.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "This pathway helps individuals and families make stronger food choices and build repeat healthy habits.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Go to Marketplace", view: "marketplace" },
          { label: "Back to Guest", view: "guest" },
        ],
      },
      marketplace: {
        badge: "Marketplace Pathway",
        title: "Where interest becomes action.",
        mission:
          "The mission of the Marketplace pathway is to turn community interest into real purchasing power for local food access and farm sustainability.",
        soundBite: "Where interest becomes action.",
        intro:
          "The marketplace is where community interest moves into real buying, ordering, pickup, and support for farm sustainability.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Featured products, seasonal inventory, and pickup timing help people understand what is available now.",
          "SNAP-ready language, local food access, and GrownBy integration show real commerce, not just presentation.",
          "The marketplace connects community need to actual purchasing behavior and farm revenue.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "This pathway converts attention into real purchasing activity that supports both access and sustainability.",
        nextTitle: "Next",
        nextButtons: [
          {
            label: "Open GrownBy Store",
            href: "https://grownby.com/farms/bronson-family-farm/shop",
          },
          { label: "Become a Grower Vendor", view: "grower" },
          { label: "Back to Customer", view: "customer" },
        ],
      },
      grower: {
        badge: "Grower Pathway",
        title: "Grow with the ecosystem, not outside of it.",
        mission:
          "The mission of the Grower pathway is to connect producers to opportunity, visibility, and market participation for a stronger regional food system.",
        soundBite: "Grow with the ecosystem, not outside of it.",
        intro:
          "Growers are part of something larger than individual production. This pathway positions producers inside a supportive, community-facing system.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Production planning, readiness, and visibility help growers understand how to participate successfully.",
          "Market connection shows how growers can move products into community-centered sales.",
          "Shared opportunity creates a stronger regional food system rather than isolated effort.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "This pathway helps growers see clear value in participation, visibility, and real market opportunity.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Return to Marketplace", view: "marketplace" },
          { label: "View Partners", view: "partners" },
        ],
      },
      youth: {
        badge: "Youth Workforce Pathway",
        title: "Learn by doing real work with real purpose.",
        mission:
          "The mission of the Youth Workforce pathway is to develop skills, responsibility, and future readiness for young people through real work experiences.",
        soundBite: "Learn by doing real work with real purpose.",
        intro:
          "Young people are not entering a pretend experience. They are entering a real ecosystem where work, responsibility, support, and growth matter.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Hands-on learning connects effort to visible outcomes and real responsibility.",
          "Supervision and support show that growth happens through structure, guidance, and accountability.",
          "This pathway helps young people build confidence, work habits, and future readiness.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "This pathway prepares youth for life, work, and responsibility through meaningful participation.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Explore Partners", view: "partners" },
          { label: "Back Home", view: "home" },
        ],
      },
      partners: {
        badge: "Partners Pathway",
        title: "Support that creates visible impact.",
        mission:
          "The mission of the Partners pathway is to align resources, sponsorship, and collaboration for measurable community benefit.",
        soundBite: "Support that creates visible impact.",
        intro:
          "Partners are not supporting an idea alone. They are supporting a working solution connected to food access, youth development, restoration, and public value.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "City alignment, institutional collaboration, and sponsor visibility show practical pathways for engagement.",
          "Partnership strengthens food access, youth opportunity, and place-based community benefit.",
          "This pathway helps supporters see where their resources create visible impact.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "This pathway turns collaboration into measurable community value and strategic alignment.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Back to Guest", view: "guest" },
          { label: "Back Home", view: "home" },
        ],
      },
    },
    footer: "Developed by Bronson Family Farm",
  },

  es: {
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Demostración del Ecosistema Guiado por Misión",
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
    home: {
      badge: "Entre al ecosistema",
      title: "Bronson Family Farm es más que una granja.",
      intro:
        "Es un ecosistema regenerativo que conecta tierra, acceso a alimentos, actividad de mercado, productores, desarrollo laboral juvenil, educación y colaboración.",
      mission:
        "La misión de Bronson Family Farm es restaurar la tierra, cultivar alimentos saludables, crear oportunidades y fortalecer sistemas comunitarios para el área del Valle de Mahoning.",
      primary: "Entrar al Mercado",
      secondary: "Comenzar Recorrido",
      chips: [
        "Sirviendo al Área del Valle de Mahoning",
        "Alimentos Locales Frescos",
        "Conectado al Trabajo",
        "Impulsado por la Comunidad",
      ],
      stats: [
        {
          number: "118+",
          title: "acres de visión y posibilidad",
          text: "Un destino para acceso a alimentos, educación y beneficio comunitario.",
        },
        {
          number: "6",
          title: "rutas de misión",
          text: "Cada ruta existe para producir un resultado claro.",
        },
      ],
      cards: [
        {
          key: "guest",
          title: "Invitado",
          mission: "Ayuda a entender visión, historia y propósito.",
          outcome: "Resultado: los visitantes comprenden rápidamente la misión.",
        },
        {
          key: "customer",
          title: "Cliente",
          mission: "Mejora acceso a alimentos frescos y decisiones saludables repetidas.",
          outcome: "Resultado: los clientes se sienten bienvenidos y desean volver.",
        },
        {
          key: "marketplace",
          title: "Mercado",
          mission: "Convierte interés en poder real de compra.",
          outcome: "Resultado: las personas pasan naturalmente a comprar.",
        },
        {
          key: "grower",
          title: "Productor",
          mission: "Conecta productores con oportunidad y participación.",
          outcome: "Resultado: los productores quieren participar y vender.",
        },
        {
          key: "youth",
          title: "Juventud Laboral",
          mission: "Desarrolla habilidades, responsabilidad y preparación.",
          outcome: "Resultado: familias y jóvenes ven una ruta clara de crecimiento.",
        },
        {
          key: "partners",
          title: "Socios",
          mission: "Alinea recursos y colaboración para beneficio comunitario.",
          outcome: "Resultado: instituciones ven razones claras para involucrarse.",
        },
      ],
    },
    guided: {
      title: "Recorrido Guiado",
      next: "Siguiente",
      previous: "Anterior",
      finish: "Finalizar",
      steps: [
        { view: "home", label: "Inicio", blurb: "Comience con la misión general de la granja." },
        { view: "guest", label: "Invitado", blurb: "Esta ruta ayuda a entender la visión, historia y propósito." },
        { view: "customer", label: "Cliente", blurb: "Esta ruta conecta alimentos frescos, nutrición y decisiones repetidas." },
        { view: "marketplace", label: "Mercado", blurb: "Esta ruta convierte interés en poder real de compra." },
        { view: "grower", label: "Productor", blurb: "Esta ruta conecta productores con oportunidad y visibilidad." },
        { view: "youth", label: "Juventud Laboral", blurb: "Esta ruta muestra preparación y responsabilidad mediante trabajo real." },
        { view: "partners", label: "Socios", blurb: "Esta ruta muestra cómo la colaboración crea beneficio comunitario." },
      ],
    },
    pathways: {
      guest: {
        badge: "Ruta de Invitado",
        title: "Descubra por qué este lugar importa.",
        mission:
          "La misión de la ruta de Invitado es ayudar a los visitantes a entender la visión, la historia y el propósito de Bronson Family Farm para una conexión comunitaria más fuerte.",
        soundBite: "Descubra por qué este lugar importa.",
        intro:
          "Bronson Family Farm es más que tierra. Es un ecosistema regenerativo creado para restaurar tierra, mejorar acceso a alimentos y crear oportunidad.",
        knowledgeTitle: "Conocimiento",
        knowledge: [
          "Los visitantes aprenden sobre el aumento de costos de alimentos y la necesidad de sistemas locales más saludables.",
          "Los visitantes entienden cómo restauración, agroturismo y desarrollo comunitario se conectan.",
          "Los visitantes ven el legado familiar, el propósito de la tierra y la misión detrás del trabajo.",
        ],
        summaryTitle: "Resumen del Propósito",
        summary:
          "Esta ruta convierte curiosidad en comprensión para que las personas entiendan claramente por qué existe la granja.",
        nextTitle: "Siguiente",
        nextButtons: [
          { label: "Continuar a Cliente", view: "customer" },
          { label: "Explorar Socios", view: "partners" },
        ],
      },
      customer: {
        badge: "Ruta de Cliente",
        title: "Las decisiones saludables deben sentirse más fáciles.",
        mission:
          "La misión de la ruta de Cliente es mejorar acceso a alimentos frescos, nutrición práctica y decisiones saludables repetidas para personas y familias.",
        soundBite: "Las decisiones saludables deben sentirse más fáciles.",
        intro:
          "Los clientes entran a una ruta acogedora diseñada para conectarlos con alimentos frescos, orientación práctica y razones para volver.",
        knowledgeTitle: "Conocimiento",
        knowledge: [
          "Los productos frescos y las ofertas de temporada se conectan con decisiones alimentarias prácticas.",
          "La orientación nutricional ayuda a entender cómo los alimentos frescos apoyan la salud diaria.",
          "Recetas y lógica de regreso convierten una compra en un hábito más saludable.",
        ],
        summaryTitle: "Resumen del Propósito",
        summary:
          "Esta ruta ayuda a personas y familias a tomar mejores decisiones alimentarias y construir hábitos saludables repetidos.",
        nextTitle: "Siguiente",
        nextButtons: [
          { label: "Ir al Mercado", view: "marketplace" },
          { label: "Volver a Invitado", view: "guest" },
        ],
      },
      marketplace: {
        badge: "Ruta de Mercado",
        title: "Donde el interés se convierte en acción.",
        mission:
          "La misión de la ruta de Mercado es convertir el interés comunitario en poder real de compra para acceso a alimentos locales y sostenibilidad de la granja.",
        soundBite: "Donde el interés se convierte en acción.",
        intro:
          "El mercado es donde el interés de la comunidad se convierte en compra real, pedidos, recogida y sostenibilidad.",
        knowledgeTitle: "Conocimiento",
        knowledge: [
          "Productos destacados, inventario de temporada y horarios de recogida muestran lo que está disponible ahora.",
          "SNAP, acceso local y la integración con GrownBy muestran comercio real.",
          "El mercado conecta necesidad comunitaria con comportamiento real de compra e ingresos para la granja.",
        ],
        summaryTitle: "Resumen del Propósito",
        summary:
          "Esta ruta convierte atención en actividad real de compra que apoya acceso y sostenibilidad.",
        nextTitle: "Siguiente",
        nextButtons: [
          {
            label: "Abrir Tienda GrownBy",
            href: "https://grownby.com/farms/bronson-family-farm/shop",
          },
          { label: "Ser Productor Vendedor", view: "grower" },
          { label: "Volver a Cliente", view: "customer" },
        ],
      },
      grower: {
        badge: "Ruta de Productor",
        title: "Crezca con el ecosistema, no fuera de él.",
        mission:
          "La misión de la ruta de Productor es conectar productores con oportunidad, visibilidad y participación de mercado para un sistema alimentario regional más fuerte.",
        soundBite: "Crezca con el ecosistema, no fuera de él.",
        intro:
          "Los productores forman parte de algo más grande que la producción individual. Esta ruta los posiciona dentro de un sistema de apoyo.",
        knowledgeTitle: "Conocimiento",
        knowledge: [
          "La planificación, preparación y visibilidad ayudan a entender cómo participar con éxito.",
          "La conexión con el mercado muestra cómo mover productos hacia ventas centradas en la comunidad.",
          "La oportunidad compartida crea un sistema alimentario regional más fuerte.",
        ],
        summaryTitle: "Resumen del Propósito",
        summary:
          "Esta ruta ayuda a los productores a ver valor claro en participación, visibilidad y oportunidad real de mercado.",
        nextTitle: "Siguiente",
        nextButtons: [
          { label: "Volver al Mercado", view: "marketplace" },
          { label: "Ver Socios", view: "partners" },
        ],
      },
      youth: {
        badge: "Ruta de Juventud Laboral",
        title: "Aprender haciendo trabajo real con propósito real.",
        mission:
          "La misión de la ruta de Juventud Laboral es desarrollar habilidades, responsabilidad y preparación futura a través de experiencias laborales reales.",
        soundBite: "Aprender haciendo trabajo real con propósito real.",
        intro:
          "Los jóvenes no entran a una experiencia falsa. Entran a un ecosistema real donde trabajo, responsabilidad, apoyo y crecimiento importan.",
        knowledgeTitle: "Conocimiento",
        knowledge: [
          "El aprendizaje práctico conecta el esfuerzo con resultados visibles.",
          "La supervisión y el apoyo muestran que el crecimiento requiere estructura y responsabilidad.",
          "Esta ruta ayuda a desarrollar confianza, hábitos de trabajo y preparación futura.",
        ],
        summaryTitle: "Resumen del Propósito",
        summary:
          "Esta ruta prepara a la juventud para la vida, el trabajo y la responsabilidad mediante participación significativa.",
        nextTitle: "Siguiente",
        nextButtons: [
          { label: "Explorar Socios", view: "partners" },
          { label: "Volver al Inicio", view: "home" },
        ],
      },
      partners: {
        badge: "Ruta de Socios",
        title: "Apoyo que crea impacto visible.",
        mission:
          "La misión de la ruta de Socios es alinear recursos, patrocinio y colaboración para beneficio comunitario medible.",
        soundBite: "Apoyo que crea impacto visible.",
        intro:
          "Los socios no apoyan solo una idea. Apoyan una solución en funcionamiento conectada a acceso a alimentos, juventud, restauración y valor público.",
        knowledgeTitle: "Conocimiento",
        knowledge: [
          "La alineación cívica, la colaboración institucional y la visibilidad de patrocinio muestran rutas prácticas de compromiso.",
          "La colaboración fortalece acceso a alimentos, oportunidad juvenil y beneficio comunitario.",
          "Esta ruta ayuda a ver dónde los recursos crean impacto visible.",
        ],
        summaryTitle: "Resumen del Propósito",
        summary:
          "Esta ruta convierte colaboración en valor comunitario medible y alineación estratégica.",
        nextTitle: "Siguiente",
        nextButtons: [
          { label: "Volver a Invitado", view: "guest" },
          { label: "Volver al Inicio", view: "home" },
        ],
      },
    },
    footer: "Desarrollado por Bronson Family Farm",
  },

  tl: {
    ...({} as any),
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Mission-Driven Ecosystem Demo",
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
    home: {
      badge: "Pumasok sa ecosystem",
      title: "Ang Bronson Family Farm ay higit pa sa isang farm.",
      intro:
        "Ito ay isang regenerative ecosystem na nag-uugnay sa lupa, access sa pagkain, marketplace activity, growers, youth workforce development, edukasyon, at partnership.",
      mission:
        "Ang mission ng Bronson Family Farm ay ibalik ang sigla ng lupa, magpalago ng masustansyang pagkain, lumikha ng oportunidad, at bumuo ng community systems para sa Mahoning Valley Area.",
      primary: "Pumasok sa Pamilihan",
      secondary: "Simulan ang Tour",
      chips: [
        "Naglilingkod sa Mahoning Valley Area",
        "Sariwang Lokal na Pagkain",
        "Konektado sa Trabaho",
        "Pinapalakas ng Komunidad",
      ],
      stats: [
        {
          number: "118+",
          title: "ektarya ng pananaw at posibilidad",
          text: "Lugar para sa pagkain, edukasyon, at pakinabang ng komunidad.",
        },
        {
          number: "6",
          title: "mission pathways",
          text: "Bawat pathway ay may malinaw na layunin at resulta.",
        },
      ],
      cards: [
        {
          key: "guest",
          title: "Panauhin",
          mission: "Tulungan ang mga bisita na maunawaan ang vision, story, at purpose.",
          outcome: "Resulta: mabilis nilang nauunawaan ang mission.",
        },
        {
          key: "customer",
          title: "Mamimili",
          mission: "Pagbutihin ang access sa fresh food, nutrition, at repeat healthy choices.",
          outcome: "Resulta: gusto nilang bumalik at mamili muli.",
        },
        {
          key: "marketplace",
          title: "Pamilihan",
          mission: "Gawing tunay na purchasing power ang community interest.",
          outcome: "Resulta: natural silang lumilipat sa pagbili.",
        },
        {
          key: "grower",
          title: "Grower",
          mission: "Ikonekta ang producers sa oportunidad at market participation.",
          outcome: "Resulta: nais nilang sumali at magbenta.",
        },
        {
          key: "youth",
          title: "Kabataang Trabaho",
          mission: "Paunlarin ang skills, responsibility, at future readiness.",
          outcome: "Resulta: nakikita ng pamilya at kabataan ang malinaw na landas ng paglago.",
        },
        {
          key: "partners",
          title: "Kasosyo",
          mission: "I-align ang resources at collaboration para sa community benefit.",
          outcome: "Resulta: nakikita ng institutions ang malinaw na dahilan upang makilahok.",
        },
      ],
    },
    guided: {
      title: "Guided Tour",
      next: "Susunod",
      previous: "Nakaraan",
      finish: "Tapusin",
      steps: [
        { view: "home", label: "Home", blurb: "Magsimula sa pangkalahatang mission ng farm." },
        { view: "guest", label: "Panauhin", blurb: "Tinutulungan ng pathway na ito ang mga bisita na maunawaan ang vision at purpose." },
        { view: "customer", label: "Mamimili", blurb: "Ikokonekta ng pathway na ito ang fresh food, nutrition, at repeat healthy choices." },
        { view: "marketplace", label: "Pamilihan", blurb: "Ginagawa ng pathway na ito ang interest bilang tunay na purchasing power." },
        { view: "grower", label: "Grower", blurb: "Ikinokonekta nito ang growers sa visibility at opportunity." },
        { view: "youth", label: "Kabataang Trabaho", blurb: "Ipinapakita nito kung paano nabubuo ang readiness sa tunay na trabaho." },
        { view: "partners", label: "Kasosyo", blurb: "Ipinapakita nito kung paano lumilikha ng community benefit ang collaboration." },
      ],
    },
    pathways: {
      guest: {
        badge: "Guest Pathway",
        title: "Tuklasin kung bakit mahalaga ang lugar na ito.",
        mission:
          "Ang mission ng Guest pathway ay tulungan ang mga bisita na maunawaan ang vision, story, at purpose ng Bronson Family Farm para sa mas malakas na ugnayan sa komunidad.",
        soundBite: "Tuklasin kung bakit mahalaga ang lugar na ito.",
        intro:
          "Ang Bronson Family Farm ay higit pa sa lupain. Isa itong regenerative ecosystem na nilikha upang ibalik ang sigla ng lupa, pagbutihin ang access sa pagkain, at lumikha ng oportunidad.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Natututo ang mga bisita tungkol sa pagtaas ng presyo ng pagkain at pangangailangan para sa mas malusog na lokal na food systems.",
          "Nauunawaan nila kung paano nag-uugnay ang restoration, agritourism, at community development.",
          "Nakikita nila ang family legacy, purpose ng lupa, at mission sa likod ng gawain.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Ginagawang malinaw ng pathway na ito kung bakit umiiral ang farm at bakit mahalaga ito.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Tumuloy sa Mamimili", view: "customer" },
          { label: "Tingnan ang Kasosyo", view: "partners" },
        ],
      },
      customer: {
        badge: "Customer Pathway",
        title: "Dapat mas madaling pumili ng masustansya.",
        mission:
          "Ang mission ng Customer pathway ay pagbutihin ang access sa fresh food, practical nutrition, at repeat healthy choices para sa individuals at families.",
        soundBite: "Dapat mas madaling pumili ng masustansya.",
        intro:
          "Ang pathway na ito ay idinisenyo upang ikonekta ang mga mamimili sa fresh food, practical guidance, at malinaw na dahilan para bumalik.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Ang fresh produce at seasonal offerings ay konektado sa practical food choices.",
          "Ang nutrition guidance ay tumutulong sa pag-unawa kung paano sinusuportahan ng fresh food ang araw-araw na kalusugan.",
          "Ang recipes at repeat-visit logic ay tumutulong upang gawing mas malusog na habit ang pamimili.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Tinutulungan ng pathway na ito ang individuals at families na gumawa ng mas mabuting food choices at paulit-ulit na healthy habits.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Pumunta sa Pamilihan", view: "marketplace" },
          { label: "Bumalik sa Panauhin", view: "guest" },
        ],
      },
      marketplace: {
        badge: "Marketplace Pathway",
        title: "Dito nagiging aksyon ang interes.",
        mission:
          "Ang mission ng Marketplace pathway ay gawing tunay na purchasing power ang community interest para sa local food access at farm sustainability.",
        soundBite: "Dito nagiging aksyon ang interes.",
        intro:
          "Ang marketplace ay kung saan nagiging tunay na pagbili, ordering, pickup, at sustainability ang community interest.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Ipinapakita ng featured products, seasonal inventory, at pickup timing kung ano ang available ngayon.",
          "Ang SNAP-ready language, local food access, at GrownBy integration ay nagpapakita ng tunay na commerce.",
          "Ikinokonekta ng marketplace ang community need sa tunay na buying behavior at revenue ng farm.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Ginagawang tunay na purchasing activity ng pathway na ito ang attention para suportahan ang access at sustainability.",
        nextTitle: "Next",
        nextButtons: [
          {
            label: "Buksan ang GrownBy Store",
            href: "https://grownby.com/farms/bronson-family-farm/shop",
          },
          { label: "Maging Grower Vendor", view: "grower" },
          { label: "Bumalik sa Mamimili", view: "customer" },
        ],
      },
      grower: {
        badge: "Grower Pathway",
        title: "Lumago kasama ng ecosystem, hindi sa labas nito.",
        mission:
          "Ang mission ng Grower pathway ay ikonekta ang producers sa opportunity, visibility, at market participation para sa mas matatag na regional food system.",
        soundBite: "Lumago kasama ng ecosystem, hindi sa labas nito.",
        intro:
          "Ang growers ay bahagi ng mas malaking sistema kaysa sa individual production lamang.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Tinutulungan ng production planning, readiness, at visibility ang growers na maunawaan kung paano sasali nang matagumpay.",
          "Ipinapakita ng market connection kung paano ilipat ang products sa community-centered sales.",
          "Ang shared opportunity ay lumilikha ng mas malakas na regional food system.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Tinutulungan ng pathway na ito ang growers na makita ang malinaw na value sa participation at market opportunity.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Bumalik sa Pamilihan", view: "marketplace" },
          { label: "Tingnan ang Kasosyo", view: "partners" },
        ],
      },
      youth: {
        badge: "Youth Workforce Pathway",
        title: "Matuto sa tunay na trabaho na may tunay na layunin.",
        mission:
          "Ang mission ng Youth Workforce pathway ay paunlarin ang skills, responsibility, at future readiness sa pamamagitan ng tunay na work experiences.",
        soundBite: "Matuto sa tunay na trabaho na may tunay na layunin.",
        intro:
          "Hindi ito pretend experience. Totoong ecosystem ito kung saan mahalaga ang work, responsibility, support, at growth.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Ang hands-on learning ay nag-uugnay ng effort sa visible outcomes at real responsibility.",
          "Ipinapakita ng supervision at support na ang growth ay nangyayari sa structure, guidance, at accountability.",
          "Tinutulungan ng pathway na ito ang kabataan na bumuo ng confidence, work habits, at readiness.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Inihahanda ng pathway na ito ang youth para sa buhay, trabaho, at responsibility sa pamamagitan ng meaningful participation.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Tingnan ang Kasosyo", view: "partners" },
          { label: "Bumalik sa Home", view: "home" },
        ],
      },
      partners: {
        badge: "Partners Pathway",
        title: "Suportang lumilikha ng nakikitang epekto.",
        mission:
          "Ang mission ng Partners pathway ay i-align ang resources, sponsorship, at collaboration para sa measurable community benefit.",
        soundBite: "Suportang lumilikha ng nakikitang epekto.",
        intro:
          "Hindi lang idea ang sinusuportahan ng partners. Sinusuportahan nila ang working solution na konektado sa food access, youth development, restoration, at public value.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Ang city alignment, institutional collaboration, at sponsor visibility ay nagpapakita ng practical pathways for engagement.",
          "Pinapalakas ng partnership ang food access, youth opportunity, at place-based benefit.",
          "Tinutulungan ng pathway na ito ang supporters na makita kung saan lumilikha ng visible impact ang kanilang resources.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Ginagawang measurable community value at strategic alignment ng pathway na ito ang collaboration.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Bumalik sa Panauhin", view: "guest" },
          { label: "Bumalik sa Home", view: "home" },
        ],
      },
    },
    footer: "Binuo ng Bronson Family Farm",
  },

  it: {
    ...(null as any),
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Demo guidata dalla missione",
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
    home: {
      badge: "Entra nell'ecosistema",
      title: "Bronson Family Farm è più di una fattoria.",
      intro:
        "È un ecosistema rigenerativo che collega terra, accesso al cibo, mercato, produttori, sviluppo del lavoro giovanile, educazione e partnership.",
      mission:
        "La missione di Bronson Family Farm è restaurare la terra, coltivare cibo sano, creare opportunità e costruire sistemi comunitari per la Mahoning Valley.",
      primary: "Entra nel Mercato",
      secondary: "Inizia il Tour",
      chips: [
        "Al servizio della Mahoning Valley",
        "Cibo Locale Fresco",
        "Connesso al Lavoro",
        "Guidato dalla Comunità",
      ],
      stats: [
        { number: "118+", title: "acri di visione e possibilità", text: "Una destinazione per cibo, educazione e beneficio comunitario." },
        { number: "6", title: "percorsi di missione", text: "Ogni percorso esiste per produrre un risultato chiaro." },
      ],
      cards: [
        { key: "guest", title: "Ospite", mission: "Aiuta a comprendere visione, storia e scopo.", outcome: "Risultato: i visitatori comprendono rapidamente la missione." },
        { key: "customer", title: "Cliente", mission: "Migliora accesso al cibo fresco, nutrizione e scelte sane ripetute.", outcome: "Risultato: i clienti si sentono accolti e desiderano tornare." },
        { key: "marketplace", title: "Mercato", mission: "Trasforma l'interesse in vero potere d'acquisto.", outcome: "Risultato: le persone passano naturalmente all'acquisto." },
        { key: "grower", title: "Produttore", mission: "Collega i produttori a opportunità e partecipazione.", outcome: "Risultato: i produttori vogliono partecipare e vendere." },
        { key: "youth", title: "Lavoro Giovanile", mission: "Sviluppa competenze, responsabilità e preparazione.", outcome: "Risultato: giovani e famiglie vedono un percorso chiaro di crescita." },
        { key: "partners", title: "Partner", mission: "Allinea risorse e collaborazione per beneficio comunitario.", outcome: "Risultato: le istituzioni vedono ragioni chiare per coinvolgersi." },
      ],
    },
    guided: {
      title: "Tour Guidato",
      next: "Avanti",
      previous: "Indietro",
      finish: "Fine",
      steps: [
        { view: "home", label: "Home", blurb: "Inizia dalla missione generale della fattoria." },
        { view: "guest", label: "Ospite", blurb: "Questo percorso aiuta i visitatori a comprendere visione e scopo." },
        { view: "customer", label: "Cliente", blurb: "Questo percorso collega cibo fresco, nutrizione e scelte sane ripetute." },
        { view: "marketplace", label: "Mercato", blurb: "Questo percorso trasforma l'interesse in potere d'acquisto reale." },
        { view: "grower", label: "Produttore", blurb: "Questo percorso collega i produttori a visibilità e opportunità." },
        { view: "youth", label: "Lavoro Giovanile", blurb: "Mostra come il lavoro reale costruisce preparazione e responsabilità." },
        { view: "partners", label: "Partner", blurb: "Mostra come la collaborazione crea beneficio comunitario." },
      ],
    },
    pathways: {
      guest: {
        badge: "Percorso Ospite",
        title: "Scopri perché questo luogo conta.",
        mission:
          "La missione del percorso Ospite è aiutare i visitatori a comprendere la visione, la storia e lo scopo di Bronson Family Farm per una connessione comunitaria più forte.",
        soundBite: "Scopri perché questo luogo conta.",
        intro:
          "Bronson Family Farm è più di un terreno. È un ecosistema rigenerativo creato per restaurare la terra, migliorare l'accesso al cibo e creare opportunità.",
        knowledgeTitle: "Conoscenza",
        knowledge: [
          "I visitatori imparano sull'aumento dei costi del cibo e sul bisogno di sistemi locali più sani.",
          "Comprendono come si collegano restauro, agriturismo e sviluppo comunitario.",
          "Vedono l'eredità familiare, lo scopo della terra e la missione dietro il lavoro.",
        ],
        summaryTitle: "Sintesi dello Scopo",
        summary:
          "Questo percorso trasforma la curiosità in comprensione così che le persone capiscano chiaramente perché esiste la fattoria.",
        nextTitle: "Prossimo",
        nextButtons: [
          { label: "Continua al Cliente", view: "customer" },
          { label: "Esplora i Partner", view: "partners" },
        ],
      },
      customer: {
        badge: "Percorso Cliente",
        title: "Le scelte sane dovrebbero sembrare più facili.",
        mission:
          "La missione del percorso Cliente è migliorare l'accesso al cibo fresco, alla nutrizione pratica e alle scelte sane ripetute per individui e famiglie.",
        soundBite: "Le scelte sane dovrebbero sembrare più facili.",
        intro:
          "I clienti entrano in un percorso accogliente progettato per collegarli a cibo fresco, guida pratica e motivi per tornare.",
        knowledgeTitle: "Conoscenza",
        knowledge: [
          "I prodotti freschi e le offerte stagionali sono collegati a scelte alimentari pratiche.",
          "La guida nutrizionale aiuta a capire come il cibo fresco sostenga la salute quotidiana.",
          "Ricette e logica di ritorno trasformano un acquisto in un'abitudine più sana.",
        ],
        summaryTitle: "Sintesi dello Scopo",
        summary:
          "Questo percorso aiuta individui e famiglie a fare scelte alimentari migliori e costruire abitudini sane ripetute.",
        nextTitle: "Prossimo",
        nextButtons: [
          { label: "Vai al Mercato", view: "marketplace" },
          { label: "Torna a Ospite", view: "guest" },
        ],
      },
      marketplace: {
        badge: "Percorso Mercato",
        title: "Dove l'interesse diventa azione.",
        mission:
          "La missione del percorso Mercato è trasformare l'interesse della comunità in vero potere d'acquisto per accesso al cibo locale e sostenibilità della fattoria.",
        soundBite: "Dove l'interesse diventa azione.",
        intro:
          "Il mercato è dove l'interesse della comunità si trasforma in acquisto reale, ordini, ritiro e sostenibilità.",
        knowledgeTitle: "Conoscenza",
        knowledge: [
          "Prodotti in evidenza, inventario stagionale e orari di ritiro mostrano cosa è disponibile ora.",
          "SNAP, accesso locale e integrazione con GrownBy mostrano commercio reale.",
          "Il mercato collega il bisogno della comunità al comportamento reale di acquisto e al reddito della fattoria.",
        ],
        summaryTitle: "Sintesi dello Scopo",
        summary:
          "Questo percorso trasforma attenzione in attività reale di acquisto che sostiene accesso e sostenibilità.",
        nextTitle: "Prossimo",
        nextButtons: [
          {
            label: "Apri Negozio GrownBy",
            href: "https://grownby.com/farms/bronson-family-farm/shop",
          },
          { label: "Diventa Venditore Grower", view: "grower" },
          { label: "Torna al Cliente", view: "customer" },
        ],
      },
      grower: {
        badge: "Percorso Produttore",
        title: "Cresci con l'ecosistema, non fuori da esso.",
        mission:
          "La missione del percorso Produttore è collegare i produttori a opportunità, visibilità e partecipazione al mercato per un sistema alimentare regionale più forte.",
        soundBite: "Cresci con l'ecosistema, non fuori da esso.",
        intro:
          "I produttori fanno parte di qualcosa di più grande della sola produzione individuale.",
        knowledgeTitle: "Conoscenza",
        knowledge: [
          "Pianificazione, preparazione e visibilità aiutano a capire come partecipare con successo.",
          "Il collegamento al mercato mostra come spostare i prodotti verso vendite orientate alla comunità.",
          "L'opportunità condivisa crea un sistema alimentare regionale più forte.",
        ],
        summaryTitle: "Sintesi dello Scopo",
        summary:
          "Questo percorso aiuta i produttori a vedere un valore chiaro nella partecipazione, visibilità e vera opportunità di mercato.",
        nextTitle: "Prossimo",
        nextButtons: [
          { label: "Torna al Mercato", view: "marketplace" },
          { label: "Vedi i Partner", view: "partners" },
        ],
      },
      youth: {
        badge: "Percorso Lavoro Giovanile",
        title: "Imparare facendo vero lavoro con vero scopo.",
        mission:
          "La missione del percorso Lavoro Giovanile è sviluppare competenze, responsabilità e preparazione futura attraverso esperienze di lavoro reali.",
        soundBite: "Imparare facendo vero lavoro con vero scopo.",
        intro:
          "I giovani non entrano in un'esperienza finta. Entrano in un ecosistema reale dove lavoro, responsabilità, supporto e crescita contano.",
        knowledgeTitle: "Conoscenza",
        knowledge: [
          "L'apprendimento pratico collega l'impegno a risultati visibili e responsabilità reale.",
          "Supervisione e supporto mostrano che la crescita richiede struttura, guida e responsabilità.",
          "Questo percorso aiuta i giovani a costruire fiducia, abitudini di lavoro e preparazione futura.",
        ],
        summaryTitle: "Sintesi dello Scopo",
        summary:
          "Questo percorso prepara i giovani alla vita, al lavoro e alla responsabilità attraverso una partecipazione significativa.",
        nextTitle: "Prossimo",
        nextButtons: [
          { label: "Esplora i Partner", view: "partners" },
          { label: "Torna alla Home", view: "home" },
        ],
      },
      partners: {
        badge: "Percorso Partner",
        title: "Supporto che crea impatto visibile.",
        mission:
          "La missione del percorso Partner è allineare risorse, sponsorizzazione e collaborazione per beneficio comunitario misurabile.",
        soundBite: "Supporto che crea impatto visibile.",
        intro:
          "I partner non sostengono solo un'idea. Sostengono una soluzione funzionante collegata a accesso al cibo, sviluppo giovanile, restauro e valore pubblico.",
        knowledgeTitle: "Conoscenza",
        knowledge: [
          "Allineamento civico, collaborazione istituzionale e visibilità dello sponsor mostrano percorsi pratici di coinvolgimento.",
          "La partnership rafforza accesso al cibo, opportunità per i giovani e beneficio comunitario.",
          "Questo percorso aiuta i sostenitori a vedere dove le loro risorse creano impatto visibile.",
        ],
        summaryTitle: "Sintesi dello Scopo",
        summary:
          "Questo percorso trasforma la collaborazione in valore comunitario misurabile e allineamento strategico.",
        nextTitle: "Prossimo",
        nextButtons: [
          { label: "Torna a Ospite", view: "guest" },
          { label: "Torna alla Home", view: "home" },
        ],
      },
    },
    footer: "Sviluppato da Bronson Family Farm",
  },

  jam: {
    ...(null as any),
    brand: {
      title: "Bronson Family Farm",
      subtitle: "Mission-Driven Ecosystem Demo",
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
    home: {
      badge: "Step inna di ecosystem",
      title: "Bronson Family Farm a more dan jus a farm.",
      intro:
        "A one regenerative ecosystem weh link land, food access, marketplace activity, growers, youth workforce development, education, an partnership.",
      mission:
        "Di mission a Bronson Family Farm a fi restore land, grow healthy food, create opportunity, an build community systems fi di Mahoning Valley Area.",
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
        { number: "6", title: "mission pathway", text: "Each pathway have one clear purpose an result." },
      ],
      cards: [
        { key: "guest", title: "Guest", mission: "Help visitor understand di vision, story, an purpose.", outcome: "Outcome: dem quickly understand di mission." },
        { key: "customer", title: "Customer", mission: "Improve access to fresh food, nutrition, an repeat healthy choices.", outcome: "Outcome: customer feel welcomed an waan come back." },
        { key: "marketplace", title: "Marketplace", mission: "Turn community interest into real purchasing power.", outcome: "Outcome: people move natural into buying." },
        { key: "grower", title: "Grower", mission: "Connect producer to opportunity an market participation.", outcome: "Outcome: grower waan join an sell." },
        { key: "youth", title: "Youth Work", mission: "Build skill, responsibility, an future readiness.", outcome: "Outcome: youth an family see clear growth pathway." },
        { key: "partners", title: "Partners", mission: "Align resource an collaboration fi community benefit.", outcome: "Outcome: institution see clear reason fi engage." },
      ],
    },
    guided: {
      title: "Guided Tour",
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      steps: [
        { view: "home", label: "Home", blurb: "Start wid di overall mission a di farm." },
        { view: "guest", label: "Guest", blurb: "Dis pathway help visitor understand di vision an purpose." },
        { view: "customer", label: "Customer", blurb: "Dis pathway link fresh food, nutrition, an repeat healthy choices." },
        { view: "marketplace", label: "Marketplace", blurb: "Dis pathway turn interest into real purchasing power." },
        { view: "grower", label: "Grower", blurb: "Dis pathway connect grower to visibility an opportunity." },
        { view: "youth", label: "Youth Work", blurb: "Dis pathway show how real work build readiness an responsibility." },
        { view: "partners", label: "Partners", blurb: "Dis pathway show how collaboration build community benefit." },
      ],
    },
    pathways: {
      guest: {
        badge: "Guest Pathway",
        title: "Discover why dis place matter.",
        mission:
          "Di mission a di Guest pathway a fi help visitor understand di vision, story, an purpose a Bronson Family Farm fi stronger community connection.",
        soundBite: "Discover why dis place matter.",
        intro:
          "Bronson Family Farm more dan land. A one regenerative ecosystem weh create fi restore land, improve food access, an create opportunity.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Visitor learn bout rising food cost an di need fi healthier local food systems.",
          "Visitor understand how restoration, agritourism, an community development connect.",
          "Visitor see di family legacy, di purpose a di land, an di mission behind di work.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Dis pathway turn curiosity into understanding so people know clearly why di farm exist.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Continue to Customer", view: "customer" },
          { label: "Explore Partners", view: "partners" },
        ],
      },
      customer: {
        badge: "Customer Pathway",
        title: "Healthy choice fi feel easier.",
        mission:
          "Di mission a di Customer pathway a fi improve access to fresh food, practical nutrition, an repeat healthy choices fi individual an family.",
        soundBite: "Healthy choice fi feel easier.",
        intro:
          "Customer step into one welcoming pathway designed fi connect dem wid fresh food, practical guidance, an reason fi come back.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Fresh produce an seasonal offering connect wid practical food choices.",
          "Nutrition guidance help people understand how fresh food support everyday health.",
          "Recipe an return logic help turn one purchase into healthier habit.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Dis pathway help individual an family make stronger food choice an build repeat healthy habit.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Go to Marketplace", view: "marketplace" },
          { label: "Back to Guest", view: "guest" },
        ],
      },
      marketplace: {
        badge: "Marketplace Pathway",
        title: "A yah so interest turn action.",
        mission:
          "Di mission a di Marketplace pathway a fi turn community interest into real purchasing power fi local food access an farm sustainability.",
        soundBite: "A yah so interest turn action.",
        intro:
          "Marketplace a weh community interest move into real buying, ordering, pickup, an sustainability.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Featured product, seasonal inventory, an pickup timing show wah available now.",
          "SNAP-ready language, local food access, an GrownBy integration show real commerce.",
          "Marketplace link community need wid real buying behavior an farm revenue.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Dis pathway turn attention into real purchasing activity weh support access an sustainability.",
        nextTitle: "Next",
        nextButtons: [
          {
            label: "Open GrownBy Store",
            href: "https://grownby.com/farms/bronson-family-farm/shop",
          },
          { label: "Become a Grower Vendor", view: "grower" },
          { label: "Back to Customer", view: "customer" },
        ],
      },
      grower: {
        badge: "Grower Pathway",
        title: "Grow wid di ecosystem, no outside a it.",
        mission:
          "Di mission a di Grower pathway a fi connect producer to opportunity, visibility, an market participation fi a stronger regional food system.",
        soundBite: "Grow wid di ecosystem, no outside a it.",
        intro:
          "Grower part a something bigger dan individual production alone.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Planning, readiness, an visibility help grower understand how fi participate successfully.",
          "Market connection show how fi move product into community-centered sales.",
          "Shared opportunity build stronger regional food system.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Dis pathway help grower see clear value in participation, visibility, an real market opportunity.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Back to Marketplace", view: "marketplace" },
          { label: "View Partners", view: "partners" },
        ],
      },
      youth: {
        badge: "Youth Workforce Pathway",
        title: "Learn by doing real work wid real purpose.",
        mission:
          "Di mission a di Youth Workforce pathway a fi build skill, responsibility, an future readiness through real work experience.",
        soundBite: "Learn by doing real work wid real purpose.",
        intro:
          "Youth no enter no pretend experience. Dem enter one real ecosystem weh work, responsibility, support, an growth matter.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "Hands-on learning link effort to visible outcome an real responsibility.",
          "Supervision an support show seh growth come through structure, guidance, an accountability.",
          "Dis pathway help youth build confidence, work habit, an readiness.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Dis pathway prepare youth fi life, work, an responsibility through meaningful participation.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Explore Partners", view: "partners" },
          { label: "Back Home", view: "home" },
        ],
      },
      partners: {
        badge: "Partners Pathway",
        title: "Support weh create visible impact.",
        mission:
          "Di mission a di Partners pathway a fi align resource, sponsorship, an collaboration fi measurable community benefit.",
        soundBite: "Support weh create visible impact.",
        intro:
          "Partners no support just one idea. Dem support one working solution link to food access, youth development, restoration, an public value.",
        knowledgeTitle: "Knowledge",
        knowledge: [
          "City alignment, institutional collaboration, an sponsor visibility show practical engagement pathways.",
          "Partnership strengthen food access, youth opportunity, an place-based community benefit.",
          "Dis pathway help supporter see weh dem resource create visible impact.",
        ],
        summaryTitle: "Summary of Purpose",
        summary:
          "Dis pathway turn collaboration into measurable community value an strategic alignment.",
        nextTitle: "Next",
        nextButtons: [
          { label: "Back to Guest", view: "guest" },
          { label: "Back Home", view: "home" },
        ],
      },
    },
    footer: "Developed by Bronson Family Farm",
  },

  he: {
    ...(null as any),
    brand: {
      title: "Bronson Family Farm",
      subtitle: "הדגמת מערכת מונחית משימה",
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
    home: {
      badge: "היכנסו למערכת",
      title: "Bronson Family Farm היא יותר מחווה.",
      intro:
        "זוהי מערכת מתחדשת המחברת בין אדמה, גישה למזון, פעילות שוק, מגדלים, פיתוח תעסוקת נוער, חינוך ושיתופי פעולה.",
      mission:
        "המשימה של Bronson Family Farm היא לשקם אדמה, לגדל מזון בריא, ליצור הזדמנויות ולבנות מערכות קהילתיות עבור אזור Mahoning Valley.",
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
        { number: "6", title: "מסלולי משימה", text: "כל מסלול קיים כדי ליצור תוצאה ברורה." },
      ],
      cards: [
        { key: "guest", title: "אורח", mission: "מסייע להבין את החזון, הסיפור והמטרה.", outcome: "תוצאה: המבקרים מבינים במהירות את המשימה." },
        { key: "customer", title: "לקוח", mission: "משפר גישה למזון טרי, תזונה ובחירות חוזרות בריאות.", outcome: "תוצאה: הלקוחות מרגישים רצויים ורוצים לחזור." },
        { key: "marketplace", title: "שוק", mission: "הופך עניין קהילתי לכוח קנייה אמיתי.", outcome: "תוצאה: אנשים עוברים באופן טבעי לרכישה." },
        { key: "grower", title: "מגדל", mission: "מחבר מגדלים להזדמנות ולהשתתפות.", outcome: "תוצאה: מגדלים רוצים להצטרף ולמכור." },
        { key: "youth", title: "כוח עבודה לנוער", mission: "מפתח כישורים, אחריות ומוכנות לעתיד.", outcome: "תוצאה: צעירים ומשפחות רואים מסלול צמיחה ברור." },
        { key: "partners", title: "שותפים", mission: "מיישר משאבים ושיתוף פעולה לטובת הקהילה.", outcome: "תוצאה: מוסדות רואים סיבות ברורות להשתתף." },
      ],
    },
    guided: {
      title: "סיור מודרך",
      next: "הבא",
      previous: "הקודם",
      finish: "סיום",
      steps: [
        { view: "home", label: "בית", blurb: "התחילו מהמשימה הכללית של החווה." },
        { view: "guest", label: "אורח", blurb: "המסלול הזה מסייע למבקרים להבין חזון ומטרה." },
        { view: "customer", label: "לקוח", blurb: "המסלול הזה מחבר מזון טרי, תזונה ובחירות חוזרות בריאות." },
        { view: "marketplace", label: "שוק", blurb: "המסלול הזה הופך עניין לכוח קנייה אמיתי." },
        { view: "grower", label: "מגדל", blurb: "המסלול הזה מחבר מגדלים לנראות ולהזדמנות." },
        { view: "youth", label: "כוח עבודה לנוער", blurb: "המסלול הזה מראה כיצד עבודה אמיתית בונה מוכנות ואחריות." },
        { view: "partners", label: "שותפים", blurb: "המסלול הזה מראה כיצד שיתוף פעולה יוצר תועלת קהילתית." },
      ],
    },
    pathways: {
      guest: {
        badge: "מסלול אורח",
        title: "גלו למה המקום הזה חשוב.",
        mission:
          "המשימה של מסלול האורח היא לסייע למבקרים להבין את החזון, הסיפור והמטרה של Bronson Family Farm כדי ליצור חיבור קהילתי חזק יותר.",
        soundBite: "גלו למה המקום הזה חשוב.",
        intro:
          "Bronson Family Farm היא יותר מקרקע. זו מערכת מתחדשת שנוצרה כדי לשקם אדמה, לשפר גישה למזון וליצור הזדמנות.",
        knowledgeTitle: "ידע",
        knowledge: [
          "המבקרים לומדים על עליית מחירי המזון ועל הצורך במערכות מקומיות בריאות יותר.",
          "הם מבינים כיצד שיקום, אגריטוריזם ופיתוח קהילתי מתחברים.",
          "הם רואים את המורשת המשפחתית, מטרת הקרקע והמשימה שמאחורי העבודה.",
        ],
        summaryTitle: "סיכום המטרה",
        summary:
          "המסלול הזה הופך סקרנות להבנה כך שאנשים יבינו בבירור למה החווה קיימת.",
        nextTitle: "הבא",
        nextButtons: [
          { label: "המשך ללקוח", view: "customer" },
          { label: "צפה בשותפים", view: "partners" },
        ],
      },
      customer: {
        badge: "מסלול לקוח",
        title: "בחירות בריאות צריכות להרגיש קלות יותר.",
        mission:
          "המשימה של מסלול הלקוח היא לשפר גישה למזון טרי, תזונה מעשית ובחירות חוזרות בריאות עבור יחידים ומשפחות.",
        soundBite: "בחירות בריאות צריכות להרגיש קלות יותר.",
        intro:
          "הלקוחות נכנסים למסלול מזמין שנועד לחבר אותם למזון טרי, להדרכה מעשית ולסיבות לחזור.",
        knowledgeTitle: "ידע",
        knowledge: [
          "תוצרת טרייה והיצע עונתי מחוברים לבחירות מזון מעשיות.",
          "הדרכה תזונתית עוזרת להבין כיצד מזון טרי תומך בבריאות היומיומית.",
          "מתכונים ולוגיקת חזרה עוזרים להפוך רכישה אחת להרגל בריא יותר.",
        ],
        summaryTitle: "סיכום המטרה",
        summary:
          "המסלול הזה מסייע ליחידים ולמשפחות לבחור טוב יותר ולבנות הרגלים חוזרים בריאים.",
        nextTitle: "הבא",
        nextButtons: [
          { label: "עבור לשוק", view: "marketplace" },
          { label: "חזרה לאורח", view: "guest" },
        ],
      },
      marketplace: {
        badge: "מסלול שוק",
        title: "כאן עניין הופך לפעולה.",
        mission:
          "המשימה של מסלול השוק היא להפוך עניין קהילתי לכוח קנייה אמיתי עבור גישה למזון מקומי וקיימות החווה.",
        soundBite: "כאן עניין הופך לפעולה.",
        intro:
          "השוק הוא המקום שבו עניין קהילתי הופך לקנייה אמיתית, הזמנה, איסוף וקיימות.",
        knowledgeTitle: "ידע",
        knowledge: [
          "מוצרים נבחרים, מלאי עונתי וזמני איסוף מראים מה זמין עכשיו.",
          "שפת SNAP, גישה למזון מקומי ושילוב עם GrownBy מראים מסחר אמיתי.",
          "השוק מחבר בין צורך קהילתי להתנהגות קנייה אמיתית ולהכנסות לחווה.",
        ],
        summaryTitle: "סיכום המטרה",
        summary:
          "המסלול הזה הופך תשומת לב לפעילות קנייה אמיתית שתומכת בגישה ובקיימות.",
        nextTitle: "הבא",
        nextButtons: [
          {
            label: "פתח את חנות GrownBy",
            href: "https://grownby.com/farms/bronson-family-farm/shop",
          },
          { label: "הפוך למגדל מוכר", view: "grower" },
          { label: "חזרה ללקוח", view: "customer" },
        ],
      },
      grower: {
        badge: "מסלול מגדל",
        title: "גדלו עם המערכת, לא מחוץ לה.",
        mission:
          "המשימה של מסלול המגדל היא לחבר מגדלים להזדמנות, לנראות ולהשתתפות בשוק עבור מערכת מזון אזורית חזקה יותר.",
        soundBite: "גדלו עם המערכת, לא מחוץ לה.",
        intro:
          "המגדלים הם חלק ממשהו גדול יותר מייצור אישי בלבד.",
        knowledgeTitle: "ידע",
        knowledge: [
          "תכנון, מוכנות ונראות עוזרים למגדלים להבין כיצד להשתתף בהצלחה.",
          "חיבור לשוק מראה כיצד להעביר מוצרים למכירות ממוקדות קהילה.",
          "הזדמנות משותפת יוצרת מערכת מזון אזורית חזקה יותר.",
        ],
        summaryTitle: "סיכום המטרה",
        summary:
          "המסלול הזה עוזר למגדלים לראות ערך ברור בהשתתפות, בנראות ובהזדמנות שוק אמיתית.",
        nextTitle: "הבא",
        nextButtons: [
          { label: "חזרה לשוק", view: "marketplace" },
          { label: "צפה בשותפים", view: "partners" },
        ],
      },
      youth: {
        badge: "מסלול כוח עבודה לנוער",
        title: "ללמוד באמצעות עבודה אמיתית עם מטרה אמיתית.",
        mission:
          "המשימה של מסלול כוח העבודה לנוער היא לפתח כישורים, אחריות ומוכנות לעתיד באמצעות חוויות עבודה אמיתיות.",
        soundBite: "ללמוד באמצעות עבודה אמיתית עם מטרה אמיתית.",
        intro:
          "הצעירים אינם נכנסים לחוויה מדומה. הם נכנסים למערכת אמיתית שבה עבודה, אחריות, תמיכה וצמיחה חשובים.",
        knowledgeTitle: "ידע",
        knowledge: [
          "למידה מעשית מחברת מאמץ לתוצאות נראות ולאחריות אמיתית.",
          "פיקוח ותמיכה מראים שצמיחה מתרחשת דרך מבנה, הדרכה ואחריות.",
          "המסלול הזה עוזר לצעירים לבנות ביטחון, הרגלי עבודה ומוכנות.",
        ],
        summaryTitle: "סיכום המטרה",
        summary:
          "המסלול הזה מכין צעירים לחיים, לעבודה ולאחריות דרך השתתפות משמעותית.",
        nextTitle: "הבא",
        nextButtons: [
          { label: "צפה בשותפים", view: "partners" },
          { label: "חזרה לבית", view: "home" },
        ],
      },
      partners: {
        badge: "מסלול שותפים",
        title: "תמיכה שיוצרת השפעה נראית לעין.",
        mission:
          "המשימה של מסלול השותפים היא ליישר משאבים, חסויות ושיתוף פעולה עבור תועלת קהילתית מדידה.",
        soundBite: "תמיכה שיוצרת השפעה נראית לעין.",
        intro:
          "שותפים אינם תומכים רק ברעיון. הם תומכים בפתרון פעיל המחובר לגישה למזון, פיתוח נוער, שיקום וערך ציבורי.",
        knowledgeTitle: "ידע",
        knowledge: [
          "יישור עירוני, שיתוף פעולה מוסדי ונראות לחסויות מראים מסלולי מעורבות מעשיים.",
          "שותפות מחזקת גישה למזון, הזדמנות לנוער ותועלת קהילתית.",
          "המסלול הזה עוזר לתומכים לראות היכן המשאבים שלהם יוצרים השפעה נראית לעין.",
        ],
        summaryTitle: "סיכום המטרה",
        summary:
          "המסלול הזה הופך שיתוף פעולה לערך קהילתי מדיד וליישור אסטרטגי.",
        nextTitle: "הבא",
        nextButtons: [
          { label: "חזרה לאורח", view: "guest" },
          { label: "חזרה לבית", view: "home" },
        ],
      },
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
  const rtl = lang === "he";

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
      setView(t.guided.steps[guidedIndex].view);
    }
  }, [guided, guidedIndex, t]);

  useEffect(() => {
    if (!narration) {
      window.speechSynthesis?.cancel();
      return;
    }

    let text = "";
    if (view === "home") {
      text = `${t.home.title}. ${t.home.mission}`;
    } else {
      const p = t.pathways[view];
      text = `${p.title}. ${p.mission}. ${p.summary}`;
    }
    if (guided) {
      text = `${t.guided.title}. ${t.guided.steps[guidedIndex].label}. ${t.guided.steps[guidedIndex].blurb}`;
    }

    speak(text, lang);
    return () => window.speechSynthesis?.cancel();
  }, [view, lang, guided, guidedIndex, narration, t]);

  const startTour = () => {
    setGuided(true);
    setGuidedIndex(0);
    setView("home");
  };

  const stopTour = () => {
    setGuided(false);
    setGuidedIndex(0);
    window.speechSynthesis?.cancel();
  };

  const nextTour = () => {
    if (guidedIndex < t.guided.steps.length - 1) {
      setGuidedIndex((v) => v + 1);
    } else {
      stopTour();
      setView("home");
    }
  };

  const prevTour = () => {
    if (guidedIndex > 0) setGuidedIndex((v) => v - 1);
  };

  return (
    <div dir={rtl ? "rtl" : "ltr"} style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brandRow}>
            <div style={styles.brandIcon}>🌿</div>
            <div>
              <div style={styles.brandTitle}>{t.brand.title}</div>
              <div style={styles.brandSub}>{t.brand.subtitle}</div>
            </div>
          </div>

          <div style={styles.controls}>
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
              <div style={styles.guidedTitle}>{t.guided.title}</div>
              <div style={styles.guidedText}>
                <strong>{t.guided.steps[guidedIndex].label}:</strong>{" "}
                {t.guided.steps[guidedIndex].blurb}
              </div>
            </div>
            <div style={styles.actionRow}>
              <button onClick={prevTour} style={styles.secondaryBtn}>
                {t.guided.previous}
              </button>
              <button onClick={nextTour} style={styles.primaryBtn}>
                {guidedIndex === t.guided.steps.length - 1 ? t.guided.finish : t.guided.next}
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
                <p style={styles.heroText}>{t.home.intro}</p>

                <div style={styles.missionBox}>
                  <div style={styles.missionLabel}>Mission</div>
                  <div style={styles.missionText}>{t.home.mission}</div>
                </div>

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

          <div style={styles.contentShell}>
            <div style={styles.sectionTitle}>Mission Pathways</div>
            <div style={styles.sectionText}>
              Each pathway below is designed to achieve a mission outcome.
            </div>

            <div style={styles.cardsGrid}>
              {t.home.cards.map((card) => (
                <button
                  key={card.key}
                  onClick={() => setView(card.key)}
                  style={styles.pathCard}
                >
                  <div style={styles.cardTitle}>{card.title}</div>
                  <div style={styles.cardText}>{card.mission}</div>
                  <div style={styles.outcomeText}>{card.outcome}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {view !== "home" && (
        <section style={styles.section}>
          <div style={styles.pageSection}>
            <div style={styles.sectionBadge}>{t.pathways[view].badge}</div>
            <h2 style={styles.sectionTitle}>{t.pathways[view].title}</h2>

            <div style={styles.layerGrid}>
              <LayerBox title="Mission">
                <div style={styles.layerText}>{t.pathways[view].mission}</div>
              </LayerBox>

              <LayerBox title="Sound Bite">
                <div style={styles.layerText}>{t.pathways[view].soundBite}</div>
              </LayerBox>

              <LayerBox title="Intro">
                <div style={styles.layerText}>{t.pathways[view].intro}</div>
              </LayerBox>

              <LayerBox title={t.pathways[view].knowledgeTitle}>
                <ul style={styles.list}>
                  {t.pathways[view].knowledge.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </LayerBox>

              <LayerBox title={t.pathways[view].summaryTitle}>
                <div style={styles.layerText}>{t.pathways[view].summary}</div>
              </LayerBox>

              <LayerBox title={t.pathways[view].nextTitle}>
                <div style={styles.actionRow}>
                  {t.pathways[view].nextButtons.map((btn) =>
                    btn.href ? (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{ ...styles.primaryBtn, textDecoration: "none", display: "inline-block" }}
                      >
                        {btn.label}
                      </a>
                    ) : (
                      <button
                        key={btn.label}
                        onClick={() => btn.view && setView(btn.view)}
                        style={styles.secondaryBtn}
                      >
                        {btn.label}
                      </button>
                    )
                  )}
                </div>
              </LayerBox>
            </div>
          </div>
        </section>
      )}

      <footer style={styles.footer}>{t.footer}</footer>
    </div>
  );
}

function LayerBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={styles.layerBox}>
      <div style={styles.layerTitle}>{title}</div>
      {children}
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
  brandRow: {
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
  controls: {
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
  section: {
    padding: "34px 20px 54px",
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
  missionBox: {
    marginTop: "18px",
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px",
    padding: "18px",
    maxWidth: "880px",
  },
  missionLabel: {
    color: "#fff2c5",
    fontSize: "13px",
    fontWeight: 800,
    letterSpacing: "0.03em",
    textTransform: "uppercase",
  },
  missionText: {
    marginTop: "8px",
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: 1.65,
  },
  actionRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "22px",
    alignItems: "center",
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
  contentShell: {
    maxWidth: "1400px",
    margin: "0 auto",
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
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginTop: "24px",
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
  outcomeText: {
    marginTop: "12px",
    color: "#1f5b3a",
    lineHeight: 1.6,
    fontSize: "14px",
    fontWeight: 700,
  },
  layerGrid: {
    display: "grid",
    gap: "18px",
    marginTop: "22px",
  },
  layerBox: {
    background: "#ffffff",
    border: "1px solid rgba(14,74,57,0.08)",
    borderRadius: "22px",
    padding: "22px",
  },
  layerTitle: {
    color: "#14392b",
    fontWeight: 800,
    fontSize: "18px",
    lineHeight: 1.15,
  },
  layerText: {
    marginTop: "10px",
    color: "#586961",
    lineHeight: 1.7,
    fontSize: "15px",
  },
  list: {
    margin: "10px 0 0",
    paddingInlineStart: "20px",
    color: "#586961",
    lineHeight: 1.8,
    fontSize: "15px",
  },
  footer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px 34px",
    color: "#5f7067",
    fontSize: "14px",
  },
};
