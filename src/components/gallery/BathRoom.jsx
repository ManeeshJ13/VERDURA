import React from "react";

const BathRoom = () => {
    const bathRoomImages = [
        'bathroom1.jpg',
        'bathroom2.jpg'
    ];

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
                top: '8vh',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                margin: 0
            }}>
                BATHROOM
            </h2>

            <div className="horizontal-scroll-container" style={{
                display: 'flex',
                width: `${bathRoomImages.length * 80}vw`,
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0,
                gap: 0,
                backgroundColor: 'transparent' // NEW: Ensure container doesn't have dark background
            }}>
                {bathRoomImages.map((image, index) => (
                    <div 
                        key={index}
                        className="gallery-image"
                        style={{
                            width: '80vw',
                            height: '100vh',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "center",
                            padding: '15vh 10vw 5vh 10vw',
                            boxSizing: 'border-box',
                            margin: 0
                        }}    
                    >
                        <img
                            src={image}
                            alt={`Bath Room ${index + 1}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '100%',
                                objectFit: 'cover', 
                                borderRadius: '10px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
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

export default BathRoom;