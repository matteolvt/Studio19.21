import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export default function AppointmentProvider({ children }) {

  // Formulaire
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [description, setDescription] = useState("");
  const [honeypot, setHoneypot] = useState(""); // champ invisible pour bots

  const allSlots = ["09:00","10:00","11:00","11:30","14:00","15:00","16:00","17:00"];
  const [availableSlots, setAvailableSlots] = useState(allSlots);

  // 🔹 Vérifie les créneaux déjà réservés
  useEffect(() => {
    if (!date) return;
    const fetchBooked = async () => {
      try {
        const q = query(collection(db, "appointments"), where("date", "==", date));
        const snapshot = await getDocs(q);
        const booked = snapshot.docs.map((doc) => doc.data().time);
        setAvailableSlots(allSlots.filter((slot) => !booked.includes(slot)));
      } catch (e) {
        console.error("Erreur fetchBooked:", e);
      }
    };
    fetchBooked();
  }, [date]);

  // 🔹 Soumission du formulaire
  const handleSubmit = async () => {
    // Honeypot
    if (honeypot) return alert("Bot détecté !");
    
    // Vérification champs
    if (!date || !time || !name || !email || !projectType || !description) {
      return alert("Veuillez remplir tous les champs !");
    }

    // Vérification slots
    if (!availableSlots.includes(time)) {
      return alert("Ce créneau n'est plus disponible !");
    }

    // Limitation soumissions (1 min)
    const lastSubmit = localStorage.getItem("lastSubmit");
    if (lastSubmit && Date.now() - lastSubmit < 60_000) {
      return alert("Merci d'attendre une minute avant de renvoyer un rendez-vous.");
    }

    // 🔹 ReCAPTCHA v3
    if (!window.grecaptcha) return alert("reCAPTCHA non chargé !");
    const token = await window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: "appointment_form" });
    if (!token || token.length < 10) return alert("Échec de la validation reCAPTCHA !");

    try {
      await addDoc(collection(db, "appointments"), {
        date, time, name, firstName, email, phone, projectType, description,
        createdAt: new Date()
      });

      localStorage.setItem("lastSubmit", Date.now());

      alert(`Rendez-vous enregistré ✅ Merci ${firstName}`);

      // reset formulaire
      setDate(""); setTime(""); setName(""); setFirstName(""); 
      setEmail(""); setPhone(""); setProjectType(""); setDescription(""); setHoneypot("");

    } catch (e) {
      console.error("Erreur addDoc:", e);
      alert("Erreur lors de la réservation");
    }
  };

  return children({
    date, setDate,
    time, setTime,
    name, setName,
    firstName, setFirstName,
    email, setEmail,
    phone, setPhone,
    projectType, setProjectType,
    description, setDescription,
    honeypot, setHoneypot,
    slots: availableSlots,
    availableSlots,
    handleSubmit
  });
}
