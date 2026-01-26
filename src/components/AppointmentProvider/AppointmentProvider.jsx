import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import emailjs from "@emailjs/browser";

// 🔹 Utilitaires pour conversion date
export const formatDateEU = (isoDate) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year.slice(2)}`; // JJ/MM/AA
};

export const parseDateEU = (euDate) => {
  if (!euDate) return "";
  const [day, month, year] = euDate.split("/");
  return `20${year}-${month}-${day}`; // YYYY-MM-DD
};

export default function AppointmentProvider({ children }) {
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [description, setDescription] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const allSlots = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  const [availableSlots, setAvailableSlots] = useState(allSlots);

  // 🔹 Reset créneau si date change
  useEffect(() => {
    setTime("");
  }, [date]);

  // 🔹 Vérifier créneaux déjà réservés
  useEffect(() => {
    const fetchBooked = async () => {
      if (!date) {
        setAvailableSlots(allSlots);
        return;
      }
      try {
        const snapshot = await getDocs(collection(db, "appointments"));
        const booked = snapshot.docs
          .map((doc) => doc.data())
          .filter((doc) => doc.date === date)
          .map((doc) => doc.time);
        setAvailableSlots(allSlots.filter((slot) => !booked.includes(slot)));
      } catch (e) {
        console.error("Erreur fetchBooked:", e);
      }
    };
    fetchBooked();
  }, [date]);

  // 🔹 Soumission formulaire
  const handleSubmit = async (onSuccessRedirect) => {
    try {
      // 🔹 validations
      if (honeypot) return alert("Bot détecté !");
      if (!captchaValue) return alert("Veuillez valider le captcha !");
      if (!date) return alert("Veuillez sélectionner une date !");
      if (!time) return alert("Veuillez sélectionner un créneau horaire !");
      if (
        !name ||
        !firstName ||
        !email ||
        !phone ||
        !projectType ||
        !description
      ) {
        return alert("Veuillez remplir tous les champs !");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) return alert("Email invalide !");

      const normalizedPhone = phone.replace(/\D/g, "");
      if (!/^\d{10}$/.test(normalizedPhone))
        return alert("Numéro de téléphone invalide !");
      if (description.length < 10)
        return alert("La description doit contenir au moins 10 caractères !");
      if (!availableSlots.includes(time))
        return alert("Ce créneau n'est plus disponible !");

      const lastSubmit = localStorage.getItem("lastSubmit");
      if (lastSubmit && Date.now() - lastSubmit < 60_000) {
        return alert(
          "Merci d'attendre une minute avant de renvoyer un rendez-vous."
        );
      }

      setIsSubmitting(true);

      // 🔹 Ajouter rendez-vous dans Firestore
      await addDoc(collection(db, "appointments"), {
        date,
        time,
        name,
        firstName,
        email,
        phone: normalizedPhone,
        projectType,
        description,
        createdAt: new Date(),
      });

      // 🔹 Envoyer email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT,
        {
          to_name: firstName,
          email,
          date: formatDateEU(date),
          time,
          projectType,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INTERNAL,
        {
          firstName,
          name,
          email,
          phone: normalizedPhone,
          date: formatDateEU(date),
          time,
          projectType,
          description,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      localStorage.setItem("lastSubmit", Date.now());

      // 🔹 Reset formulaire
      setDate("");
      setTime("");
      setName("");
      setFirstName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setDescription("");
      setHoneypot("");
      setCaptchaValue(null);
      setAvailableSlots(allSlots);

      if (onSuccessRedirect) onSuccessRedirect();
    } catch (e) {
      console.error("Erreur addDoc:", e);
      alert("Erreur lors de la réservation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return children({
    date,
    setDate,
    time,
    setTime,
    name,
    setName,
    firstName,
    setFirstName,
    email,
    setEmail,
    phone,
    setPhone,
    projectType,
    setProjectType,
    description,
    setDescription,
    honeypot,
    setHoneypot,
    captchaValue,
    setCaptchaValue,
    slots: availableSlots,
    availableSlots,
    handleSubmit,
    isSubmitting,
    formatDateEU,
    parseDateEU,
  });
}
