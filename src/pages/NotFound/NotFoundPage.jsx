import PageTransition from "../../components/PageTransition/PageTransition";
import NotFoundContent from "../../components/NotFound/NotFoundContent";
import React from "react";

export default function NotFound() {
  return (
    <PageTransition>
      <NotFoundContent />
    </PageTransition>
  );
}
