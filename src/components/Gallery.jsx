import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LivingRoom from "./gallery/LivingRoom";
import BedRoom from "./gallery/BedRoom";
import BathRoom from "./gallery/BathRoom";
import Kitchen from "./gallery/Kitchen";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const galleryRef = useRef();
    const sectionsRef = useRef([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const sections = sectionsRef.current;

        sections.forEach((section, index) => {
            const images = section.querySelectorAll('.gallery-image');
            const totalWidth = (images.length - 1) * (isMobile ? 90 : 80);
            const scrollDistance = isMobile ? totalWidth * 8 : totalWidth * 10;

            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    end: `+=${scrollDistance}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (images.length - 1),
                        duration: 0.3
                    },
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    onEnter: () => {
                        document.body.style.backgroundColor = '#ffffff';
                        setTimeout(() => {
                            document.body.style.overflowY = 'hidden';
                            document.body.style.height = '100vh';
                        }, 100);
                    },
                    onLeave: () => {
                        document.body.style.overflowY = 'auto';
                        document.body.style.height = 'auto';
                        document.body.style.backgroundColor = '';
                    },
                    onEnterBack: () => {
                        document.body.style.backgroundColor = '#ffffff';
                        setTimeout(() => {
                            document.body.style.overflowY = 'hidden';
                            document.body.style.height = '100vh';
                        }, 100);
                    },
                    onLeaveBack: () => {
                        document.body.style.overflowY = 'auto';
                        document.body.style.height = 'auto';
                        document.body.style.backgroundColor = '';
                    }
                }
            })
            .to(images, {
                x: -totalWidth + 'vw',
                duration: images.length,
                ease: "none"
            });
        });

        return () => {
            document.body.style.overflowY = 'auto';
            document.body.style.height = 'auto';
            document.body.style.backgroundColor = '';
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isMobile]);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) { 
            sectionsRef.current.push(el);
        }
    };

    return (
        <div 
            ref={galleryRef}
            id="gallery"
            style={{ 
                paddingTop: "clamp(30px, 8vw, 50px)",
                paddingLeft: "clamp(0.5rem, 2vw, 1rem)",
                paddingRight: "clamp(0.5rem, 2vw, 1rem)"
            }}
        >
            <h1 style={{
                color: "#c9252b",
                fontFamily: "Rethink Sans",
                fontWeight: "bolder",
                textAlign: "center",
                marginBottom: "clamp(20px, 5vw, 30px)",
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                position: 'relative',
                zIndex: 20
            }}>
                GALLERY
            </h1>

            <div ref={addToRefs}>
                <LivingRoom />
            </div>

            <div ref={addToRefs}>
                <BedRoom />
            </div>

            <div ref={addToRefs}>
                <BathRoom />
            </div>

            <div ref={addToRefs}>
                <Kitchen />
            </div>
        </div>
    );
};

export default Gallery;