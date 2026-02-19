import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ShareBar.css";

export default function ShareBar({ url, title }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="sb-wrapper">
      <span className="sb-label">Partager</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title || "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sb-btn"
      >
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sb-btn"
      >
        LinkedIn
      </a>
      <button onClick={handleCopy} className="sb-btn">
        {copied ? "Copié !" : "Copier le lien"}
      </button>
    </div>
  );
}

ShareBar.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};