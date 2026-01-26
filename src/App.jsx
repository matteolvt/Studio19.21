import React, { useState, useEffect } from "react";
// import Snowfall from "react-snowfall";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/homepage/homepage";
import Projets from "./pages/projets/projets";
import Services from "./pages/services/services";
import Appointment from "./pages/appointment/appointment";
import About from "./pages/about/about";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import PageTransition from "./components/PageTransition/PageTransition";
import Preloader from "./components/Preloader/Preloader";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import AppointmentSuccess from "./components/AppointmentSuccess.jsx/AppointmentSuccess";
import MentionsLegalesPage from "./pages/MentionsLegales/MentionsLegales";

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

            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/projets"
                  element={
                    <PageTransition>
                      <Projets />
                    </PageTransition>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageTransition>
                      <Appointment />
                    </PageTransition>
                  }
                />
                <Route
                  path="/validé"
                  element={
                    <PageTransition>
                      <AppointmentSuccess />
                    </PageTransition>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <PageTransition>
                      <Services />
                    </PageTransition>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageTransition>
                      <About />
                    </PageTransition>
                  }
                />
                <Route
                  path="/projets/:slug"
                  element={
                    <PageTransition>
                      <ProjectDetails />
                    </PageTransition>
                  }
                />
                <Route
                  path="/mentions-legales"
                  element={
                    <PageTransition>
                      <MentionsLegalesPage />
                    </PageTransition>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </SmoothScroll>
        </div>
      )}
    </>
  );
}

export default App;
