import React from "react";

const LivingRoom = () => {
    const livingRoomImages = [
        'living1.jpg',
        'kitchen1.jpg',
        'bedroom1.jpg',
        'dining1.jpg'
    ];

    return (
        <div className="room-section" style={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#ffffff' // NEW: Explicitly set white background
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
                LIVING ROOM
            </h2>

            <div className="horizontal-scroll-container" style={{
                display: 'flex',
                width: `${livingRoomImages.length * 80}vw`,
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0,
                gap: 0,
                backgroundColor: 'transparent' // NEW: Ensure container doesn't have dark background
            }}>
                {livingRoomImages.map((image, index) => (
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
                            alt={`Living Room ${index + 1}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '100%',
                                objectFit: 'cover', // NEW: Changed from 'contain' to 'cover' to eliminate white borders
                                borderRadius: '10px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                backgroundColor: 'transparent' // NEW: Ensure no background color shows
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

export default LivingRoom;