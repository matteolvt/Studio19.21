import React from "react";

const Maintenance = () => {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
      color: "#fff",
      textAlign: "center",
      fontFamily: "sans-serif",
      padding: "20px",
    },
    logo: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      letterSpacing: "4px",
    },
    line: {
      width: "50px",
      height: "2px",
      backgroundColor: "#fff",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.logo}>STUDIO 19.21</div>
      <div style={styles.line}></div>
      <h1>LANCEMENT PROCHAIN</h1>
      <p>Nous préparons quelque chose de spécial. Restez à l&apos;écoute.</p>
      <p style={{ marginTop: "40px", fontSize: "0.8rem", opacity: 0.6 }}>
        © 2025 Studio 19.21 - Agence Créative
      </p>
    </div>
  );
};

export default Maintenance;
