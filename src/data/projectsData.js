export const categories = [
  { id: "all", label: "Tous" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "webapp", label: "Application web" },
  { id: "vitrine", label: "Site vitrine" },
  { id: "portfolio", label: "Portfolio" },
  { id: "artisan", label: "Artisan" },
];

export const projectsData = [
  {
    id: 1,
    navbarTheme: 'light',
    slug: "immersive-3d-portfolio",
    title: "Portfolio Immersif 3D",
    tagline: "Une expérience interactive pour repousser les limites du web.",
    year: "2026",
    image: "/images/projectpics/portfolio/scene.webp",
    categoryIds: ["portfolio", "webapp"],
    client: "Projet interne — Mattéo Livrozet",
    role: "Lead Designer & Frontend Dev",
    timeline: "2 mois",
    techStack: ["React", "Three.js", "GSAP"],
    description: "Création d’un portfolio immersif pensé comme une expérience interactive.",
    challenge: "L’objectif était de concevoir une expérience immersive et mémorable...",
    process: {
      text: "Le projet a débuté par une phase de réflexion hors écran...",
      images: [
        "/images/projectpics/portfolio/mockup.webp",
        "/images/projectpics/portfolio/blender.webp"
      ]
    },
    websitePages: [
      { id: 'loader', title: "Loading Screen", image: "/images/projectpics/portfolio/loader.webp" },
      { id: 'scene', title: "Scène Principale", image: "/images/projectpics/portfolio/scene.webp" },
      { id: 'livre', title: "Livre", image: "/images/projectpics/portfolio/livre.webp" },
      { id: 'livre-ouvert', title: "Livre Ouvert", image: "/images/projectpics/portfolio/livreOuvert.webp" }
    ],
    features: [
      {
        title: "Navigation 3D Narrative",
        description: "Une navigation pensée comme un parcours scénarisé...",
        image: "/images/projectpics/portfolio/accueil.webp"
      },
      {
        title: "Transitions Caméra Fluides",
        description: "Des transitions cinématographiques basées sur des easings personnalisés...",
        image: "/images/projectpics/portfolio/mockupIA.webp"
      }
    ],
    links: {
      github: "https://github.com/matteolvt/Portfolio3D"
    }
  },
  {
    id: 2,
    navbarTheme: 'dark',
    slug: "delivecrous",
    title: "Delivecrous — Application de Vente en Ligne",
    tagline: "Une boutique en ligne simple et intuitive pour vos clients.",
    year: "2026",
    image: "/images/projectpics/delivecrous/Home.webp",
    categoryIds: ["ecommerce", "webapp"],
    client: "Projet d'école — Delivecrous",
    role: "Développeur Frontend & Designer UI",
    timeline: "2 semaines",
    techStack: ["React", "CSS"],
    description: "Application de vente en ligne permettant la navigation, le panier et le checkout de produits.",
    challenge: "Créer une expérience utilisateur simple et efficace...",
    process: {
      text: "Le projet Delivecrous a commencé par la conception des composants sur Figma...",
      images: [
        "/images/projectpics/delivecrous/Composant.webp",
        "/images/projectpics/delivecrous/Prototype.webp"
      ]
    },
    websitePages: [
      { id: 'home', title: "Page d'Accueil", image: "/images/projectpics/delivecrous/Home.webp" },
      { id: 'produit', title: "Fiche Produit", image: "/images/projectpics/delivecrous/Detail.webp" },
      { id: 'authentification', title: "Authentification", image: "/images/projectpics/delivecrous/Auth.webp" },
      { id: 'panier', title: "Panier", image: "/images/projectpics/delivecrous/Cart.webp" },
      { id: 'validation', title: "Validation", image: "/images/projectpics/delivecrous/Valid.webp" }
    ],
    features: [
      {
        title: "Catalogue de Produits",
        description: "Permet aux clients de découvrir rapidement tous vos produits...",
        image: "/images/projectpics/delivecrous/Home.webp"
      },
      {
        title: "Connexion / Compte utilisateur",
        description: "Offre aux clients un espace personnel pour suivre leurs commandes...",
        image: "/images/projectpics/delivecrous/Auth.webp"
      },
      {
        title: "Gestion du Panier",
        description: "Simplifie le processus d’achat avec ajout et suppression faciles des produits...",
        image: "/images/projectpics/delivecrous/Cart.webp"
      },
      {
        title: "Validation de la commande",
        description: "Confirme la commande de manière claire et sécurisée...",
        image: "/images/projectpics/delivecrous/Valid.webp"
      }
    ],
    links: {
      github: "https://github.com/ShayyNwE/DeliveCROUS"
    }
  },

  {
    id: 3,
    navbarTheme: 'light',
    slug: "fournil-emile",
    title: "Au Fournil d'Émile",
    tagline: "Landing page artisanale pour une boulangerie lyonnaise.",
    year: "2026",
    image: "/images/projectpics/Landing/Fournil.webp",
    categoryIds: ["vitrine", "artisan"],
    client: "Au Fournil d'Émile — Boulangerie Lyon",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page complète pour une boulangerie artisanale lyonnaise...",
    challenge: "Concevoir une identité visuelle chaleureuse et artisanale...",
    process: {
      text: "Le projet a démarré par une phase de recherche d'identité visuelle...",
      images: ["/images/projectpics/Landing/Fournil.webp"]
    },
    websitePages: [
      { id: 'home', title: "Home", image: "/images/projectpics/Landing/Fournil.webp" },
      { id: 'histoire', title: "Notre Histoire", image: "/images/projectpics/Landing/Fournil_histoire.webp" },
      { id: 'expertise', title: "Notre Expertise", image: "/images/projectpics/Landing/Fournil_expertise.webp" },
      { id: 'creation', title: "Nos Création", image: "/images/projectpics/Landing/Fournil_creation.webp" },
      { id: 'info', title: "Nos Informations", image: "/images/projectpics/Landing/Fournil_footer.webp" }
    ],
    features: [
      { title: "Design Artisanal", description: "Palette terracotta et chocolat...", image: "/images/projectpics/Landing/Fournil.webp" },
      { title: "Carte Interactive", description: "Système d'onglets pour naviguer...", image: "/images/projectpics/Landing/Fournil_creation.webp" }
    ],
    links: {
      live: "/fournil-emile/Fournil.html",
    }
  },
];