import React from "react";
import { Link } from "react-router-dom";
import "./AppointmentSuccess.css";

export default function AppointmentSuccess() {
  return (
    <div className="appointment-success">
      <h1>✅ Rendez-vous confirmé !</h1>
      <p>Merci ! Votre rendez-vous a bien été enregistré.</p>
      <p>Vous recevrez bientôt un mail de confirmation.</p>
      <Link to="/" className="appointment-success-button">
        Retour à l&#39;accueil
      </Link>
    </div>
  );
}
