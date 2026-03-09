import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import React from "react";

const SEO = ({ title, description, image, url }) => {
  const canonicalUrl = url || (typeof window !== "undefined" 
  ? `${window.location.origin}${window.location.pathname}`
  : "https://www.studio1921.fr");

  return (
    <Helmet>
      {/* Titre et description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="u6wNQ2hPAsq3az5BMAurKg" async></script>

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || "https://www.studio1921.fr/og-image.png"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || "https://www.studio1921.fr/og-image.png"} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default SEO;