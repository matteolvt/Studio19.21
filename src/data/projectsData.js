export const categories = [
  { id: "all", label: "Tous" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "webapp", label: "Application web" },
  { id: "vitrine", label: "Site vitrine" },
];

export const projectsData = [
  {
    id: 1,
    slug: "maison-aurora",
    // --- Pour <ProjectHero /> ---
    title: "Maison Aurora",
    tagline: "Réinventer l'expérience d'achat de décoration en ligne.",
    year: 2024,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    
    // --- Pour <ProjectOverview /> ---
    categoryIds: ["ecommerce", "webapp"],
    client: "Aurora Home",
    role: "Lead Designer & Frontend Dev",
    timeline: "3 mois",
    techStack: ["Next.js", "TailwindCSS", "Stripe", "Framer Motion"],
    description: "Création d’une plateforme e-commerce premium pour une marque de décoration.",
    challenge: "La marque possédait un catalogue magnifique mais un site vieillissant qui ne convertissait pas sur mobile. L'objectif était de créer une expérience fluide, proche d'une application native, tout en conservant l'esthétique minimaliste de la marque.",

    // --- Pour <ProjectProcess /> ---
    process: {
      text: "Nous avons commencé par une analyse approfondie du parcours utilisateur existant. Les principaux points de friction se situaient au niveau du filtrage des produits et du checkout.",
      images: [
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1000&auto=format&fit=crop"
      ]
    },

    // 👇 NOUVEAU : Pour <ProjectPagesSlider /> ---
    websitePages: [
      {
        id: 'home',
        title: "Page d'accueil",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" // Salon lumineux
      },
      {
        id: 'shop',
        title: "Catalogue",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop" // Boutique
      },
      {
        id: 'product',
        title: "Fiche Produit",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" // Détail objet
      },
      {
        id: 'cart',
        title: "Panier & Checkout",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop" // Paiement
      }
    ],

    // --- Pour <ProjectFeatures /> ---
    features: [
      {
        title: "Filtrage Dynamique",
        description: "Un système de filtrage instantané sans rechargement de page, permettant aux utilisateurs de trier par couleur, matériau et prix.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Checkout Simplifié",
        description: "Réduction du processus de paiement de 5 à 2 étapes, avec intégration transparente de Stripe et Apple Pay.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop"
      }
    ],

    // --- Pour <ProjectResults /> ---
    results: {
      text: "Le lancement a été un succès immédiat avec une adoption massive sur mobile.",
      kpis: [
        { label: "Taux de conversion", value: "+45%" },
        { label: "Ventes mobile", value: "+120%" },
        { label: "Temps de chargement", value: "0.8s" }
      ],
      testimonial: {
        text: "Une refonte qui a dépassé nos espérances. Nos clients adorent la nouvelle fluidité du site.",
        author: "Sophie Martin, Fondatrice"
      }
    },

    // --- Pour <ProjectFooter /> ---
    links: {
      live: "https://maison-aurora-demo.com",
      github: "https://github.com/ton-profil/maison-aurora"
    }
  },

  {
    id: 2,
    slug: "studio-nox",
    // --- Pour <ProjectHero /> ---
    title: "Studio Nox",
    tagline: "L'architecture minimaliste rencontre le web immersif.",
    year: 2023,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    
    // --- Pour <ProjectOverview /> ---
    categoryIds: ["vitrine"],
    client: "Nox Architecture",
    role: "Creative Developer",
    timeline: "6 semaines",
    techStack: ["Vue.js", "GSAP", "Prismic", "WebGL"],
    description: "Site vitrine minimaliste pour un studio créatif.",
    challenge: "Le studio voulait un portfolio qui ne ressemble à aucun autre. Le défi technique était d'intégrer des transitions fluides et des animations complexes sans sacrifier les performances SEO.",

    // --- Pour <ProjectProcess /> ---
    process: {
      text: "L'accent a été mis sur le prototypage des animations dès le début. Nous avons utilisé GSAP pour orchestrer les transitions de page et créer une sensation de continuité.",
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1509395062549-38501c58d4a9?q=80&w=1000&auto=format&fit=crop"
      ]
    },

    // 👇 NOUVEAU : Pour <ProjectPagesSlider /> ---
    websitePages: [
      {
        id: 'home',
        title: "Landing Page",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop" // Architecture sombre
      },
      {
        id: 'portfolio',
        title: "Portfolio",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" // Structure béton
      },
      {
        id: 'detail',
        title: "Détail Projet",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop" // Intérieur moderne
      },
      {
        id: 'contact',
        title: "Contact",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" // Bureau sombre
      }
    ],

    // --- Pour <ProjectFeatures /> ---
    features: [
      {
        title: "Navigation Immersive",
        description: "Une navigation latérale qui suit le scroll de l'utilisateur, inspirée des plans d'architecte.",
        image: "https://images.unsplash.com/photo-1481487484168-9b995ecc1660?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Mode Sombre",
        description: "Un basculement automatique vers le mode sombre selon l'heure de la journée pour une ambiance feutrée.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
      }
    ],

    // --- Pour <ProjectResults /> ---
    results: {
      text: "Le site a reçu une mention honorable sur Awwwards.",
      kpis: [
        { label: "Temps moyen session", value: "4m 20s" },
        { label: "Contacts prospects", value: "+30%" },
        { label: "Performance Lighthouse", value: "98/100" }
      ],
      testimonial: {
        text: "Notre travail est enfin mis en valeur à la hauteur de sa qualité.",
        author: "Thomas Dubois, Architecte"
      }
    },

    // --- Pour <ProjectFooter /> ---
    links: {
      live: "https://studio-nox-demo.com",
      github: "https://github.com/ton-profil/studio-nox"
    }
  },
];