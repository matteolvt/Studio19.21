import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import "./AppointmentProvider.css";
import React from "react";

export default function AppointmentProvider({ children }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const allSlots = ["09:00", "10:00", "11:00", "14:00", "15:00"];
  const [availableSlots, setAvailableSlots] = useState(allSlots);

  useEffect(() => {
    if (!date) return;
    const fetchBooked = async () => {
        try {
        const q = query(collection(db, "appointments"), where("date", "==", date));
        const snapshot = await getDocs(q);
        const booked = snapshot.docs.map(doc => doc.data().time);
        setAvailableSlots(allSlots.filter(slot => !booked.includes(slot)));
        }   catch (e) { console.error(e); }
    };
    fetchBooked();
    }, [date]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!date || !time || !name || !email) return alert("Veuillez remplir tous les champs !");
    if (availableSlots.length === 0) return alert("Aucun créneau disponible !");
    try {
      await addDoc(collection(db, "appointments"), { date, time, name, email });
      alert(`RDV réservé ✅ ${name} - ${date} à ${time}`);
      setDate(""); setTime(""); setName(""); setEmail("");
    } catch (e) { console.error(e); alert("Erreur lors de la réservation"); }
  };
  return children({ date, setDate, time, setTime, name, setName, email, setEmail, availableSlots, handleSubmit });
}
