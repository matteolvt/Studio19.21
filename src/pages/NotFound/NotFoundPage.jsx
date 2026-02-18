import React from "react";
import { Helmet } from "react-helmet-async";
import PageTransition from "../../components/PageTransition/PageTransition";
import NotFoundContent from "../../components/NotFound/NotFoundContent";

export default function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>Page introuvable | Studio-19-21</title>
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <NotFoundContent />
    </PageTransition>
  );
}
