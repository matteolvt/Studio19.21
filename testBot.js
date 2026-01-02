const data = {
  firstName: "Bot",
  name: "Test",
  email: "bot@test.com",
  phone: "0000000000",
  projectType: "site-vitrine",
  description: "Test honeypot",
  date: "2026-01-02",
  time: "09:00",
  honeypot: "rempli" // <- ceci doit bloquer le formulaire
};

fetch("http://localhost:5173/api/appointments", { // remplace par ton endpoint réel
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(result => console.log("Réponse du serveur :", result))
.catch(err => console.error("Erreur :", err));
