import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = ({ lenis }) => {
  const [showTitle, setShowTitle] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const items = [
    { label: "Menu", target: "menu" },
    { label: "About", target: "about" },
    { label: "Gallery", target: "gallery" },
    { label: "Contact Us", target: "contact" }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element && lenis) {
      const headerHeight = 60;
      const elementTop = element.offsetTop - headerHeight - 20;
      lenis.scrollTo(elementTop);
    } else if (element) {
      const headerHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false); // Close mobile menu after clicking
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
        padding: isMobile ? "0 1.5rem" : "0 clamp(2rem, 5vw, 4rem)",
        zIndex: 9999,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      {/* Logo/Title */}
      <div
        style={{
          fontWeight: "bolder",
          fontFamily: "Rethink Sans",
          fontSize: isMobile ? "18px" : "clamp(20px, 3vw, 24px)",
          opacity: showTitle ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <img 
          src="verduranamelogo.png" 
          alt="Verdura Logo"
          style={{
            width: isMobile ? "120px" : "clamp(140px, 20vw, 180px)",
            height: "auto",
            maxHeight: "40px",
            objectFit: "contain"
          }}
        />
      </div>

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            zIndex: 10000
          }}
        >
          <div style={{
            width: "25px",
            height: "3px",
            backgroundColor: "#000",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none"
          }}></div>
          <div style={{
            width: "25px",
            height: "3px",
            backgroundColor: "#000",
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1
          }}></div>
          <div style={{
            width: "25px",
            height: "3px",
            backgroundColor: "#000",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none"
          }}></div>
        </button>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav style={{ 
          display: "flex", 
          gap: "clamp(1.5rem, 3vw, 2.5rem)", 
          fontSize: "clamp(0.85rem, 1.5vw, 1rem)" 
        }}>
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => scrollToSection(item.target)}
              style={{
                position: "relative",
                cursor: "pointer",
                fontWeight: "500",
                paddingBottom: "8px",
                paddingLeft: "clamp(10px, 2vw, 20px)",
                paddingRight: "clamp(15px, 3vw, 30px)",
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
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <nav style={{
          position: "fixed",
          top: "60px",
          right: 0,
          width: "100%",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          zIndex: 9998,
          padding: "1rem 0"
        }}>
          {items.map((item, index) => (
            <div
              key={item.label}
              onClick={() => scrollToSection(item.target)}
              style={{
                padding: "1rem 1.5rem",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "1rem",
                borderBottom: index < items.length - 1 ? "1px solid #eee" : "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              {item.label}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;