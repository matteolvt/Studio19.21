import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProjectDetailSlider.css";

const ProjectPagesSlider = ({ project }) => {
  if (!project || !project.websitePages || project.websitePages.length === 0) {
    return null;
  }

  const slidesToRender =
    project.websitePages.length < 6
      ? [...project.websitePages, ...project.websitePages]
      : project.websitePages;

  return (
    <section className="project-pages-slider">
      <div className="slider-container">
        <div className="slider-header">
          <span className="slider-label">Galerie</span>
          <h2 className="slider-title">Aperçu des pages</h2>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 35, // Angle un peu plus doux (50 c'est beaucoup)
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="pages-swiper"
        >
          {/* On utilise notre liste doublée "slidesToRender" */}
          {slidesToRender.map((page, index) => (
            // Note: avec une liste doublée, "page.id" n'est plus unique.
            // On utilise "index" pour la clé React pour éviter les erreurs.
            <SwiperSlide key={`${page.id}-${index}`} className="page-slide">
              <div className="page-image-wrapper">
                <img src={page.image} alt={page.title} className="page-image" />
                <div className="page-info">
                  <h3 className="page-title">{page.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

ProjectFeatures.propTypes = {
  project: PropTypes.shape({
    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default ProjectPagesSlider;
