import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = ({ lenis }) => {
  const [showTitle, setShowTitle] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const items = [
    { label: "Menu", target: "menu" },
    { label: "About", target: "about" },
    { label: "Gallery", target: "gallery" },
    { label: "Contact Us", target: "contact" }
  ];

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element && lenis) {
      // Use Lenis scrollTo method for smooth scrolling
      const headerHeight = 60;
      const elementTop = element.offsetTop - headerHeight - 20; // 20px buffer
      lenis.scrollTo(elementTop);
    } else if (element) {
      // Fallback if Lenis is not available
      const headerHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTitle(scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#FFFFFF",
        color: "#000000",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4rem",
        zIndex: 9999,
      }}
    >
      {/* fixed title*/}
      <div
        style={{
          fontWeight: "bolder",
          fontFamily: "Rethink Sans",
          fontSize: "24px",
          opacity: showTitle ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <img src="verduranamelogo.png" style={{width:"180px",height:"40px"}}>
        </img>
      </div>

      {/* Right: Hoverable Menu */}
      <nav style={{ display: "flex", gap: "2.5rem", fontSize: "1rem" }}>
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            whileHover={{
              scale: 1.2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => scrollToSection(item.target)}
            style={{
              position: "relative",
              cursor: "pointer",
              fontWeight: "500",
              paddingBottom: "8px",
              paddingLeft: "20px",
              paddingRight: "30px",
            }}
          >
            {item.label}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "black",
                transform: hoveredItem === index ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease-out",
              }}
            />
          </motion.div>
        ))}
      </nav>
    </header>
  );
};

export default Header;