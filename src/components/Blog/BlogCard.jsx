import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard({ title, excerpt, category, image, isHero, slug }) {
  return (
    <article className="blog-card">
      {image && (
        <div className="blog-card-image">
          <img
            src={image}
            alt={`Illustration de ${title}`}
            loading={isHero ? "eager" : "lazy"}
            {...(isHero ? { fetchPriority: "high" } : {})}
          />
        </div>
      )}
      <div className="blog-card-content">
        <span className="blog-card-category">{category}</span>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="blog-card-link">
          En savoir plus
        </Link>
      </div>
    </article>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string,
  isHero: PropTypes.bool,
  slug: PropTypes.string.isRequired,
};