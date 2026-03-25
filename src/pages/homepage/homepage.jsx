import React from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import HeroSection from "../../components/heroSection/heroSection.jsx";
import Section2 from "../../components/section2/section2.jsx";
import Portfolio from "../../components/portfolio/portfolio";
import Section4 from "../../components/section4/section4.jsx";
import NosServices from "../../components/nosServices/nosServices.jsx";
import FaqSection from "../../components/FaqSection/FaqSection.jsx";
import SEO from "../../components/SEO/SEO.jsx";
import "./homepage.css";

const homepageFaqs = [
  {
    question: "Pourquoi un artisan a-t-il besoin d'un site web ?",
    answer:
      "Aujourd'hui, plus de 80% des consommateurs recherchent un prestataire sur internet avant de le contacter. Sans site, vous êtes invisible pour ces clients potentiels. Un site vitrine bien conçu vous permet de présenter votre savoir-faire, de rassurer vos prospects avec des réalisations concrètes, et d'être trouvé sur Google par des personnes qui cherchent exactement ce que vous proposez — dans votre ville, dans votre secteur.",
  },
  {
    question: "Est-ce que je peux modifier mon site moi-même après la livraison ?",
    answer:
      "Oui. Selon l'offre choisie, nous vous livrons soit un site avec un espace d'administration simple (mise à jour de textes, ajout de photos), soit un projet dont vous recevez le code source complet. Dans tous les cas, nous vous formons à la prise en main lors de la livraison et restons disponibles pour répondre à vos questions. L'objectif est que vous soyez autonome.",
  },
  {
    question: "Comment se passe la première prise de contact ?",
    answer:
      "Tout commence par un appel découverte de 30 minutes, entièrement gratuit et sans engagement. On prend le temps de comprendre votre activité, vos clients, vos objectifs et ce que vous attendez de votre site. À l'issue de cet échange, nous vous envoyons un devis détaillé sous 24h. Pas de jargon technique, pas de forcing — juste une conversation honnête pour voir si on est faits pour travailler ensemble.",
  },
  {
    question: "Mon site sera-t-il visible sur Google ?",
    answer:
      "Chaque site que nous créons est optimisé pour le référencement naturel (SEO) dès la conception : structure HTML sémantique, balises méta, temps de chargement rapide, compatibilité mobile. Nous rédigeons également les contenus en tenant compte des mots-clés pertinents pour votre activité et votre zone géographique. Le SEO est un travail de fond qui porte ses fruits sur la durée — nous vous expliquons les bonnes pratiques pour continuer à progresser après la livraison.",
  },
  {
    question: "Que se passe-t-il si mon site tombe en panne ?",
    answer:
      "En cas de problème, vous nous contactez directement — pas de ticket anonyme, pas de centre d'appel. Pour les clients avec un forfait maintenance, nous intervenons sous 24h ouvrées. Pour les autres, nous restons disponibles et traitons chaque demande de support au cas par cas. Nos sites sont hébergés sur des infrastructures robustes avec des taux de disponibilité supérieurs à 99,9%, ce qui rend les pannes extrêmement rares.",
  },
  {
    question: "Travaillez-vous uniquement avec des artisans ?",
    answer:
      "Non — même si les artisans et les commerces de proximité sont au cœur de notre activité, nous accompagnons aussi des startups, des indépendants et des PME sur des projets plus complexes (applications web, e-commerce, refonte complète). Ce qui nous anime, c'est de créer des sites qui ont un impact réel sur l'activité de nos clients, quelle que soit leur taille.",
  },
];

function HomePage() {
  return (
    <div className="homepage">
      <SEO
        title="Studio1921 | Agence web Lyon – Création de sites pour artisans"
        description="Studio1921, agence web lyonnaise spécialisée dans la création de sites vitrine sur mesure pour artisans et PME. Design soigné, SEO optimisé, livraison rapide. Devis gratuit."
      />
      <Navbar />
      <HeroSection />
      <Section2 />
      <Portfolio />
      <Section4 />
      <NosServices />
      <FaqSection
        faqs={homepageFaqs}
        title="On répond à vos questions."
      />
      <Footer />
    </div>
  );
}

export default HomePage;