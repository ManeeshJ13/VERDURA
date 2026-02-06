import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageFadeSection = ({ fromImage, toImage }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Bidirectional fade transforms
  const fadeOut = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const fadeIn = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  return (
    <div
      ref={ref}
      style={{
        height: isMobile ? "250vh" : "300vh", 
        position: "relative",
      }}
    >
      <motion.img
        src={fromImage}
        style={{
          opacity: fadeOut,
          position: "sticky",
          top: isMobile ? "150px" : "274px",
          left: isMobile ? "50%" : "334px",
          transform: isMobile ? "translateX(-50%)" : "none",
          width: isMobile ? "80vw" : "clamp(400px, 50vw, 772px)",
          height: isMobile ? "auto" : "clamp(100px, 15vh, 196px)",
          maxWidth: isMobile ? "300px" : "772px",
          objectFit: "contain",
          zIndex: 1,
          margin: isMobile ? "0" : "0 auto"
        }}
      />
      
      {/* Container for second image with red lines */}
      <motion.div
        style={{
          opacity: fadeIn,
          position: "sticky",
          top: isMobile ? "100px" : "clamp(400px, 50vh, 700px)",
          left: isMobile ? "50%" : "53px",
          transform: isMobile ? "translateX(-50%)" : "none",
          width: isMobile ? "90vw" : "clamp(600px, 70vw, 1000px)",
          height: isMobile ? "auto" : "clamp(600px, 70vh, 1000px)",
          maxWidth: isMobile ? "500px" : "1000px",
          paddingLeft: isMobile ? "0" : "5%",
          zIndex: 1,
          margin: isMobile ? "0" : "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Image wrapper with red lines */}
        <div style={{ 
          position: "relative", 
          display: "inline-block",
          width: "100%",
          maxWidth: isMobile ? "100%" : "none"
        }}>
          {/* Left red line */}
          <div style={{
            position: "absolute",
            left: isMobile ? "-20px" : "clamp(-50px, -8vw, -100px)",
            top: "0",
            width: isMobile ? "5px" : "clamp(5px, 1vw, 10px)",
            height: "100%",
            backgroundColor: "#C9252B",
            zIndex: 2
          }}></div>
          
          {/* The actual image */}
          <img
            src={toImage}
            alt="Interior Design"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              borderRadius: isMobile ? "20px" : "clamp(20px, 3vw, 40px)"
            }}
          />
          
          {/* Right red line */}
          <div style={{
            position: "absolute",
            right: isMobile ? "-20px" : "clamp(-50px, -8vw, -100px)",
            top: "0",
            width: isMobile ? "5px" : "clamp(5px, 1vw, 10px)",
            height: "100%",
            backgroundColor: "#C9252B",
            zIndex: 2
          }}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageFadeSection;