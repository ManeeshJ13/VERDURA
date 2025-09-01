import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LivingRoom from "./gallery/LivingRoom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const galleryRef = useRef();
    const sectionsRef = useRef([]);

    useEffect(() => {
        const sections = sectionsRef.current;

        sections.forEach((section, index) => {
            const images = section.querySelectorAll('.gallery-image');
            const totalWidth = (images.length - 1) * 80;
            const scrollDistance = totalWidth * 10;

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
                        // NEW: Preserve background color during horizontal scroll
                        document.body.style.backgroundColor = '#ffffff';
                        setTimeout(() => {
                            document.body.style.overflowY = 'hidden';
                            document.body.style.height = '100vh';
                        }, 100);
                    },
                    onLeave: () => {
                        document.body.style.overflowY = 'auto';
                        document.body.style.height = 'auto';
                        // NEW: Reset background to original
                        document.body.style.backgroundColor = '';
                    },
                    onEnterBack: () => {
                        // NEW: Preserve background color during horizontal scroll
                        document.body.style.backgroundColor = '#ffffff';
                        setTimeout(() => {
                            document.body.style.overflowY = 'hidden';
                            document.body.style.height = '100vh';
                        }, 100);
                    },
                    onLeaveBack: () => {
                        document.body.style.overflowY = 'auto';
                        document.body.style.height = 'auto';
                        // NEW: Reset background to original
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
            // NEW: Reset all modified styles including background
            document.body.style.overflowY = 'auto';
            document.body.style.height = 'auto';
            document.body.style.backgroundColor = '';
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) { 
            sectionsRef.current.push(el);
        }
    };

    return (
        <div 
            ref={galleryRef}
            id="gallery"
            style={{ paddingTop: "50px" }}
        >
            <h1 style={{
                color: "#c9252b",
                fontFamily: "Rethink Sans",
                fontWeight: "bolder",
                textAlign: "center",
                marginBottom: "30px",
                position: 'relative',
                zIndex: 20
            }}>
                GALLERY
            </h1>

            <div ref={addToRefs}>
                <LivingRoom />
            </div>
        </div>
    );
};

export default Gallery;