import React from "react";
import "./BlogFilters.css";

export default function BlogFilters({ categories, selected, setSelected, posts }) {
  const getPostCount = (category) => {
    if (category === "Tous") return posts.length;
    return posts.filter((post) => post.category === category).length;
  };

  return (
    <div className="blog-filters">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => setSelected(cat)}
        >
          {cat} <span className="blog-filter-count">{getPostCount(cat)}</span>
        </button>
      ))}
    </div>
  );
}
