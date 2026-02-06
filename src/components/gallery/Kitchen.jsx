import React, { useState, useEffect } from "react";

const Kitchen = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    const kitchenImages = [
        'kitchen1.jpg',
        'kitchen2.jpg',
        'kitchen3.jpg'
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="room-section" style={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#ffffff'
        }}>
            <h2 style={{
                color: "#461010",
                fontFamily: "Rethink Sans",
                fontWeight: "bold",
                textAlign: "center",
                position: 'absolute',
                top: isMobile ? '5vh' : '8vh',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                margin: 0,
                fontSize: isMobile ? 'clamp(1.2rem, 4vw, 1.5rem)' : 'clamp(1.5rem, 3vw, 2rem)',
                padding: '0 1rem'
            }}>
                KITCHEN
            </h2>

            <div className="horizontal-scroll-container" style={{
                display: 'flex',
                width: `${kitchenImages.length * (isMobile ? 90 : 80)}vw`,
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0,
                gap: 0,
                backgroundColor: 'transparent' 
            }}>
                {kitchenImages.map((image, index) => (
                    <div 
                        key={index}
                        className="gallery-image"
                        style={{
                            width: isMobile ? '90vw' : '80vw',
                            height: '100vh',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "center",
                            padding: isMobile 
                                ? '18vh 5vw 5vh 5vw' 
                                : '15vh 10vw 5vh 10vw',
                            boxSizing: 'border-box',
                            margin: 0
                        }}    
                    >
                        <img
                            src={image}
                            alt={`Kitchen ${index + 1}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '100%',
                                objectFit: isMobile ? 'contain' : 'cover',
                                borderRadius: isMobile ? '8px' : '10px',
                                boxShadow: isMobile 
                                    ? '0 5px 15px rgba(0,0,0,0.15)' 
                                    : '0 10px 30px rgba(0,0,0,0.2)',
                                backgroundColor: 'transparent' 
                            }}
                            onError={(e) => {
                                console.log(`Failed to load image: ${image}`);
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Kitchen;