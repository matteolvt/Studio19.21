// src/data/blogData.js

export const posts = [
  {
    id: 1,
    slug: "comment-creer-un-site-ecommerce-performant",
    category: "E-COMMERCE",
    title: "Comment créer un site e-commerce performant",
    excerpt: "Découvrez les meilleures pratiques pour construire une boutique en ligne efficace.",
    date: "12 février 2025",
    readTime: "5 min de lecture",
    author: {
      name: "Sophie Martin",
      role: "Développeuse Web",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
    
    coverImage: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=75&fm=webp",
      alt: "Site e-commerce performant",
    },

    blocks: [
      { type: "paragraph", text: "Lancer un site e-commerce performant ne se résume pas à choisir une plateforme. Il s'agit d'orchestrer une expérience utilisateur fluide, une architecture technique solide et une stratégie de conversion bien pensée." },
      { type: "h2", text: "1. Choisir la bonne plateforme" },
      { type: "paragraph", text: "Shopify, WooCommerce, PrestaShop... chaque solution a ses forces. Votre choix dépendra du volume de produits, des fonctionnalités nécessaires et de votre budget." },
      { type: "h2", text: "2. Optimiser les performances" },
      { type: "paragraph", text: "Chaque seconde de chargement supplémentaire coûte des conversions. Compressez vos images, activez le cache, utilisez un CDN et préchargez les ressources critiques." },
      { type: "quote", text: "Un site qui se charge en moins de 2 secondes convertit en moyenne 15 % mieux qu'un site à 5 secondes." },
      { type: "h2", text: "3. Soigner l'expérience utilisateur" },
      { type: "paragraph", text: "Navigation claire, fiches produit détaillées, tunnel d'achat simplifié : chaque friction éliminée est un client potentiel récupéré. Pensez mobile-first." },
    ],

    relatedPosts: [
      { id: 2, slug: "les-bases-du-developpement-web-moderne", category: "DÉVELOPPEMENT WEB", title: "Les bases du développement web moderne", excerpt: "Un guide pour comprendre HTML, CSS, JS et React.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=60&fm=webp" },
      { id: 3, slug: "pourquoi-un-site-vitrine-est-essentiel", category: "SITE VITRINE", title: "Pourquoi un site vitrine est essentiel", excerpt: "Présentez votre entreprise et vos services avec style.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=60&fm=webp" },
    ],
  },

  {
    id: 2,
    slug: "les-bases-du-developpement-web-moderne",
    category: "DÉVELOPPEMENT WEB",
    title: "Les bases du développement web moderne",
    excerpt: "Un guide pour comprendre HTML, CSS, JS et React.",
    date: "28 janvier 2025",
    readTime: "7 min de lecture",
    author: {
      name: "Thomas Dupont",
      role: "Développeur Frontend",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    coverImage: {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=75&fm=webp",
      alt: "Développement web moderne",
    },

    blocks: [
      { type: "paragraph", text: "Le développement web a considérablement évolué ces dernières années. HTML, CSS et JavaScript restent les trois piliers incontournables, mais les outils, frameworks et bonnes pratiques qui les entourent ont profondément transformé la façon de construire des interfaces." },
      { type: "h2", text: "1. HTML : la structure avant tout" },
      { type: "paragraph", text: "Un bon HTML est sémantique : il utilise les balises appropriées pour décrire le contenu (article, section, nav, header…). Cela améliore l'accessibilité, le référencement naturel et la maintenabilité du code. Évitez les div à tout va et pensez d'abord à la structure." },
      { type: "h2", text: "2. CSS : du style avec méthode" },
      { type: "paragraph", text: "Flexbox et Grid ont révolutionné la mise en page. Aujourd'hui, il est rare d'avoir besoin de hacks ou de librairies complexes pour aligner des éléments. Les custom properties (variables CSS) permettent de gérer des thèmes cohérents et facilement modifiables." },
      { type: "quote", text: "Un CSS bien structuré, c'est 80 % du travail d'intégration. Ne sous-estimez jamais la puissance des fondations." },
      { type: "h2", text: "3. JavaScript et React" },
      { type: "paragraph", text: "JavaScript est devenu incontournable pour créer des interfaces dynamiques. React, développé par Meta, s'est imposé comme la référence pour construire des composants réutilisables. Son modèle basé sur l'état (state) et les props rend les interfaces prévisibles et faciles à tester." },
      { type: "h2", text: "4. Les outils du développeur moderne" },
      { type: "paragraph", text: "Vite pour le bundling, ESLint pour la qualité du code, Git pour le versioning, Figma pour les maquettes... Un bon développeur web maîtrise son environnement de travail autant que ses langages." },
    ],

    relatedPosts: [
      { id: 1, slug: "comment-creer-un-site-ecommerce-performant", category: "E-COMMERCE", title: "Comment créer un site e-commerce performant", excerpt: "Découvrez les meilleures pratiques pour construire une boutique en ligne efficace.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=60&fm=webp" },
      { id: 3, slug: "pourquoi-un-site-vitrine-est-essentiel", category: "SITE VITRINE", title: "Pourquoi un site vitrine est essentiel", excerpt: "Présentez votre entreprise et vos services avec style.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=60&fm=webp" },
    ],
  },

  {
    id: 3,
    slug: "pourquoi-un-site-vitrine-est-essentiel",
    category: "SITE VITRINE",
    title: "Pourquoi un site vitrine est essentiel",
    excerpt: "Présentez votre entreprise et vos services avec style.",
    date: "5 janvier 2025",
    readTime: "4 min de lecture",
    author: {
      name: "Camille Leroy",
      role: "Cheffe de projet Web",
      avatar: "https://i.pravatar.cc/80?img=32",
    },
    coverImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75&fm=webp",
      alt: "Site vitrine professionnel",
    },

    blocks: [
      { type: "paragraph", text: "En 2025, ne pas avoir de site web, c'est être invisible. Un site vitrine bien conçu est votre carte de visite permanente, accessible 24h/24, 7j/7. Il inspire confiance, présente vos services et capte de nouveaux clients, même quand vous dormez." },
      { type: "h2", text: "1. La première impression compte" },
      { type: "paragraph", text: "Vous avez moins de 5 secondes pour convaincre un visiteur de rester. Un design soigné, un message clair et une navigation intuitive font toute la différence. Un site mal conçu renvoie une image négative, même si vos prestations sont excellentes." },
      { type: "h2", text: "2. Être trouvé sur Google" },
      { type: "paragraph", text: "Un site vitrine optimisé pour le SEO vous permet d'apparaître dans les résultats de recherche quand vos clients potentiels cherchent vos services. C'est un investissement sur le long terme qui génère du trafic qualifié sans coût publicitaire constant." },
      { type: "quote", text: "Votre site web est votre meilleur commercial : il travaille pour vous en continu, sans congés ni horaires." },
      { type: "h2", text: "3. Crédibilité et professionnalisme" },
      { type: "paragraph", text: "Avant de vous contacter, vos prospects vont googler votre nom. Un site professionnel avec vos réalisations, vos témoignages clients et vos coordonnées rassure et légitime votre activité. C'est souvent le facteur décisif entre vous et un concurrent." },
      { type: "h2", text: "4. Un outil adapté à votre activité" },
      { type: "paragraph", text: "Site one-page pour un freelance, site multi-pages pour une PME, portfolio pour un créatif… il existe une solution adaptée à chaque besoin et chaque budget. L'essentiel est de partir sur des bases solides : structure claire, contenu pertinent et design cohérent avec votre identité." },
    ],

    relatedPosts: [
      { id: 1, slug: "comment-creer-un-site-ecommerce-performant", category: "E-COMMERCE", title: "Comment créer un site e-commerce performant", excerpt: "Découvrez les meilleures pratiques pour construire une boutique en ligne efficace.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=60&fm=webp" },
      { id: 2, slug: "les-bases-du-developpement-web-moderne", category: "DÉVELOPPEMENT WEB", title: "Les bases du développement web moderne", excerpt: "Un guide pour comprendre HTML, CSS, JS et React.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=60&fm=webp" },
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null;
}