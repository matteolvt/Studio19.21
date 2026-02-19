import React from "react";
import PropTypes from "prop-types";
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

BlogFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};