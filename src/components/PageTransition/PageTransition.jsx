import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PageTransition = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
