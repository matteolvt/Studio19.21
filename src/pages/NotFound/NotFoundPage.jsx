import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import NotFoundContent from "../../components/NotFound/NotFoundContent";
import SEO from "../../components/SEO/SEO";

export default function NotFound() {
  return (
    <PageTransition>
      <SEO
        title="404 – Page non trouvée | Studio1921"
        description="La page que vous recherchez n'existe pas sur Studio1921."
      />
      <NotFoundContent />
    </PageTransition>
  );
}