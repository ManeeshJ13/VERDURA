import React, { useEffect, useState } from "react";  
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all"; 
import Header from "./components/Header";
import ImageFadeSection from "./components/ImageFade";
import '../src/fonts.css';
import Footer from "./components/Footer";
import Gallery from "./components/Gallery"

//gsap plugin register
gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
    const [lenis, setLenis] = useState(null); // Add state to store Lenis instance

    //Initialize Lenis
    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });

        setLenis(lenisInstance); // Store Lenis instance in state

        //connecting Lenis and gsap
        lenisInstance.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <div>
            <Header lenis={lenis} /> {/* Pass Lenis instance to Header */}
            
            {/* Menu/Hero Section */}
            <div id="menu">
                <ImageFadeSection fromImage={"/verduralogo.png"} toImage={"/model1.jpg"} />
            </div>

            {/* About Section */}
            <div 
                id="about" 
                style={{
                    textAlign: "center",
                    maxWidth: "600px",
                    margin: "0 auto",
                    padding: "3rem",
                    paddingTop: "100px"
                }}
            >
                <h1 style={{
                    color: "#C9252B",
                    fontFamily: "Rethink Sans",
                    fontWeight: "bolder"
                }}>
                    ABOUT US
                </h1>
                <p style={{
                    color: "#461010",
                    fontFamily: "Rethink Sans",
                    fontWeight: "bold",
                }}>
                    Welcome to Verdura, one of a kind interior designing and manufacturing company that translates concepts to life- from imagination to installation. We place importance on your individual needs and requirements and blends with design aesthetics and manufacturing capabilities to deliver fully customized interior solutions that reflects your personality, lifestyles and tastes.
                </p>
                <p style={{
                    color: "#461010",
                    fontFamily: "Rethink Sans",
                    fontWeight: "bold"
                }}>
                    At Verdura, we start by listening to you, to the minute details, your expectations and then working with you to create signature pieces that match your space, style and standards. From cozy homes to work spaces, we craft environments that tell your story.
                </p>
            </div>

            {/* Gallery Section */}
           <Gallery />

            

            <Footer />
        </div>
    );
};

export default MainPage;