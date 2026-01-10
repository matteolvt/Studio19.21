import React from "react";
import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-content">
        <h2>Notre histoire</h2>
        <div className="story-text">
          <p>
            Tout est parti d'un constat frustrant : trop de sites se
            ressemblent, produits à la chaîne par des agences qui privilégient
            le volume à la qualité. Nous avons créé Studio 19.21 pour prendre le
            contre-pied et proposer une approche artisanale du web.
          </p>
          <p>
            Mattéo (le créatif) et Tom (l'ingénieur) ont uni leurs forces pour
            offrir le meilleur des deux mondes. Pourquoi 19.21 ? C'est un clin
            d'œil à nos jours de naissance respectifs. Ce nom scelle notre
            complémentarité : derrière chaque projet, il y a deux passionnés qui
            s'investissent personnellement.
          </p>
          <p>
            Chaque projet est une collaboration directe, sans intermédiaires.
            Nous prenons le temps de comprendre votre ADN pour le transformer en
            un site web performant, élégant et durable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
