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
    image: "/images/projectpics/delivecrous/Home_full.webp",
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
    image: "/images/projectpics/Landing/pain_full.webp",
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

  {
    id: 4,
    navbarTheme: 'dark',
    slug: "saigon",
    title: "Saigon",
    tagline: "L'authentique Vietnam à Montchat — cantine le midi, bar & karaoké le soir.",
    year: "2026",
    image: "/images/projectpics/Landing/bar_full.webp",
    categoryIds: ["vitrine", "artisan"],
    client: "Saigon — Restaurant Lyon 7",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page pour un restaurant vietnamien atypique de Lyon 7 : carte complète, section bar & karaoké, et informations pratiques.",
    challenge: "Retranscrire l'ambiance unique du Saigon — un hybride entre cantine de quartier et bar festif — avec une identité visuelle qui mêle chaleur asiatique et néons nocturnes.",
    process: {
      text: "Le projet a démarré par une analyse de l'identité du lieu : un restaurant de quartier chaleureux le midi qui se transforme en bar festif le soir. La palette mêle des tons bambou et brun chaud pour la partie restaurant, et des accents néon rose et bleu pour l'ambiance bar. La navigation par onglets permet d'explorer la carte vietnamienne complète.",
      images: [
        "/images/projectpics/Landing/Saigon.webp",
        "/images/projectpics/Landing/Saigon_carte.webp"
      ]
    },

    websitePages: [
      { id: 'hero', title: "Accueil", image: "/images/projectpics/Landing/Saigon.webp" },
      { id: 'carte', title: "La Carte", image: "/images/projectpics/Landing/Saigon_carte.webp" },
      { id: 'bar', title: "Bar & Karaoké", image: "/images/projectpics/Landing/Saigon_bar.webp" },
      { id: 'infos', title: "Infos & Accès", image: "/images/projectpics/Landing/Saigon_infos.webp" },
      { id: 'bas', title: "Bas de page", image: "/images/projectpics/Landing/Saigon_footer.webp" }
    ],

    features: [
      {
        title: "Carte Vietnamienne Interactive",
        description: "Navigation par onglets entre Phô, Bo Bun, Tapas Viet et options végétariennes. Chaque plat est présenté avec sa description et son prix.",
        image: "/images/projectpics/Landing/Saigon_carte.webp"
      },
      {
        title: "Ambiance Saigon Bar & Karaoké",
        description: "Section dédiée à l'activité karaoké du soir avec réservation directe. Design néon qui contraste avec la chaleur naturelle de la partie restaurant.",
        image: "/images/projectpics/Landing/Saigon_bar.webp"
      }
    ],

    links: {
      live: "/Saigon/Saigon.html"
    }
  },

  {
    id: 5,
    navbarTheme: 'light',
    slug: "fournil-honore",
    title: "Le Fournil d'Honoré",
    tagline: "L'excellence artisanale au cœur de Lyon 2ème.",
    year: "2026",
    image: "/images/projectpics/Landing/FournilHonore.webp",
    categoryIds: ["vitrine", "artisan"],
    client: "Le Fournil d'Honoré — Boulangerie Lyon 2",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page haut de gamme pour une boulangerie artisanale lyonnaise : collection pains & viennoiseries, formules déjeuner, pâtisserie événementielle et terrasse.",
    challenge: "Concevoir une expérience visuelle premium qui reflète l'excellence artisanale d'une boulangerie de quartier, avec un curseur personnalisé, des animations soignées et une identité forte.",
    process: {
      text: "Le projet a démarré par une définition de l'identité visuelle haut de gamme : typographies serif élégantes, palette sobre et contrastée, animations d'entrée progressives. Un soin particulier a été apporté aux micro-interactions comme le curseur personnalisé et les effets de scroll reveal pour renforcer l'image premium de l'établissement.",
      images: [
        "/images/projectpics/Landing/FournilHonore.webp",
        "/images/projectpics/Landing/FournilHonore_collection.webp"
      ]
    },
    
    websitePages: [
      { id: 'hero', title: "Accueil", image: "/images/projectpics/Landing/FournilHonore.webp" },
      { id: 'collection', title: "Collection", image: "/images/projectpics/Landing/FournilHonore_collection.webp" },
      { id: 'dejeuner', title: "Déjeuner", image: "/images/projectpics/Landing/FournilHonore_dejeuner.webp" },
      { id: 'patisserie', title: "Pâtisserie", image: "/images/projectpics/Landing/FournilHonore_patisserie.webp" },
      { id: 'terrasse', title: "Terrasse", image: "/images/projectpics/Landing/FournilHonore_terrasse.webp" }
    ],

    features: [
      {
        title: "Collection Pains & Viennoiseries",
        description: "Présentation soignée de la collection de pains artisanaux et viennoiseries avec une mise en page élégante qui met en valeur chaque création.",
        image: "/images/projectpics/Landing/FournilHonore_collection.webp"
      },
      {
        title: "Pâtisserie & Événements",
        description: "Section dédiée aux créations pâtissières et commandes événementielles, avec formulaire de contact intégré pour les professionnels.",
        image: "/images/projectpics/Landing/FournilHonore_patisserie.webp"
      }
    ],

    links: {
      live: "/FournilHonore/FournilHonore.html"
    }
  },
];