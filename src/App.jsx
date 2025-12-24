import React from "react";
import Snowfall from "react-snowfall";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import Projets from "./pages/projets/projets";
import Appointment from "./pages/appointment/appointment"

function App() {
  return (
    <>
      <Snowfall
        color="#DDE7EF"
        snowflakeCount={200}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/rdv" element={<Appointment />} />
      </Routes>
    </>
  );
}

export default App;
