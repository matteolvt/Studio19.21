import React from "react";
import "./section2.css";

import logo from "../../assets/logo.svg";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="section2-content">
        <h2>
          Notre but est de concevoir des expériences digitales soignées et sur
          mesure, offrant à chaque entreprise une visibilité forte et un
          positionnement professionnel.
        </h2>
      </div>

      <div className="section2-bg-logo">
        <img src={logo} alt="" />
      </div>
    </section>
  );
};

export default Section2;
