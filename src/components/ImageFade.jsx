import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageFadeSection = ({ fromImage, toImage }) => {
  const ref = useRef(null);

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
        height: "300vh", 
        position: "relative",
      }}
    >
      <motion.img
        src={fromImage}
        style={{
          opacity: fadeOut,
          position: "sticky",
          top: "274px",
          left:"334px",
          width: "772px",
          height: "196px",
          objectFit: "contain",
          zIndex: 1,
          margin:"0 auto"
        }}
      />
      
      {/* Container for second image with red lines */}
      <motion.div
        style={{
          opacity: fadeIn,
          position: "sticky",
          top: "700px",
          left:"53px",
          width: "1000px",
          height: "1000px",
          paddingLeft:"5%",
          zIndex: 1,
          margin: "0 auto",
          // Container positioning
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Image wrapper with red lines */}
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Left red line */}
          <div style={{
            position: "absolute",
            left: "-100px",
            top: "0",
            width: "10px",
            height: "100%",
            backgroundColor: "#C9252B",
            zIndex: 2
          }}></div>
          
          {/* The actual image */}
          <img
            src={toImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              borderRadius:"40px"
            }}
          />
          
          {/* Right red line */}
          <div style={{
            position: "absolute",
            right: "-100px",
            top: "0",
            width: "10px",
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