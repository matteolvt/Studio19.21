import React from "react";
import "./BlogCard.css";

export default function BlogCard({ title, excerpt, category, image, isHero }) {
  return (
    <article className="blog-card">
      {image && (
        <div className="blog-card-image">
          <img
            src={image}
            alt={`Illustration de ${title}`}
            loading={isHero ? "eager" : "lazy"}
            {...(isHero ? { fetchpriority: "high" } : {})}
          />
        </div>
      )}
      <div className="blog-card-content">
        <span className="blog-card-category">{category}</span>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
      </div>
    </article>
  );
}


