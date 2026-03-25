import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/homepage/homepage";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import PageTransition from "./components/PageTransition/PageTransition";
import Preloader from "./components/Preloader/Preloader";
import SEO from "./components/SEO/SEO";

// Lazy loading pour tout sauf la homepage
const Projets = lazy(() => import("./pages/projets/projets"));
const Services = lazy(() => import("./pages/services/services"));
const Appointment = lazy(() => import("./pages/appointment/appointment"));
const About = lazy(() => import("./pages/about/about"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails/ProjectDetails"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const AppointmentSuccess = lazy(() => import("./components/AppointmentSuccess.jsx/AppointmentSuccess"));
const MentionsLegalesPage = lazy(() => import("./pages/MentionsLegales/MentionsLegales"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetail/BlogDetails"));

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <Preloader key="preloader" />}
      </AnimatePresence>

      {!showSplash && (
        <div className="site-content">
          <SmoothScroll>
            {/* <Snowfall
              color="#DDE7EF"
              snowflakeCount={200}
              style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            /> */}

            <Suspense fallback={null}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/projets"
                    element={<PageTransition><Projets /></PageTransition>}
                  />
                  <Route
                    path="/contact"
                    element={<PageTransition><Appointment /></PageTransition>}
                  />
                  <Route
                    path="/valide"
                    element={
                      <PageTransition>
                        {/* noindex : page de confirmation, pas à indexer */}
                        <SEO
                          title="Rendez-vous confirmé | Studio1921"
                          description="Votre rendez-vous a bien été confirmé."
                          noindex
                        />
                        <AppointmentSuccess />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/services"
                    element={<PageTransition><Services /></PageTransition>}
                  />
                  <Route
                    path="/about"
                    element={<PageTransition><About /></PageTransition>}
                  />
                  <Route
                    path="/projets/:slug"
                    element={<PageTransition><ProjectDetails /></PageTransition>}
                  />
                  <Route
                    path="/mentions-legales"
                    element={<PageTransition><MentionsLegalesPage /></PageTransition>}
                  />
                  <Route
                    path="/blog"
                    element={<PageTransition><Blog /></PageTransition>}
                  />
                  <Route
                    path="/blog/:slug"
                    element={<PageTransition><BlogDetailPage /></PageTransition>}
                  />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </SmoothScroll>
        </div>
      )}
    </>
  );
}

export default App;
