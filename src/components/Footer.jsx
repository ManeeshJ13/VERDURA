import React from "react";  

const Footer = () => {
    return (
        <footer style={{
            backgroundColor:"#461010",
            color:"#ffffff",
            textAlign:"center",
            padding:"clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)"
        }}> 
        {/* Contact Section */}
            <div 
                id="contact"
                style={{
                    textAlign: "center",
                    paddingTop: "10px",
                    minHeight: "2vh"
                }}
            >
                <h1 style={{
                    color: "#eeebebff",
                    fontFamily: "Rethink Sans",
                    fontWeight: "bolder",
                    fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                    marginBottom: "clamp(0.5rem, 2vw, 1rem)"
                }}>
                    CONTACT US
                </h1>
                <p style={{
                    color: "#df2121ff",
                    fontFamily: "Rethink Sans",
                    fontWeight: "bold",
                    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                    marginBottom: "clamp(1.5rem, 4vw, 2rem)"
                }}>
                    Get in touch with us for your interior design needs.
                </p>
            </div>
            {/*contact info*/}
            <div style={{
                color:'white',
                display:"flex",
                flexDirection: window.innerWidth <= 768 ? "column" : "row",
                justifyContent:"center",
                alignItems: window.innerWidth <= 768 ? "center" : "flex-start",
                gap: window.innerWidth <= 768 ? "2rem" : "clamp(2rem, 5vw, 5rem)",
                marginBottom:"2rem",
                fontSize:"clamp(0.9rem, 2vw, 1rem)",
                flexWrap: "wrap",
                padding: "0 clamp(1rem, 3vw, 2rem)"
            }}>
                <div style={{
                    minWidth: window.innerWidth <= 768 ? "auto" : "200px",
                    textAlign: window.innerWidth <= 768 ? "center" : "left"
                }}>
                    <h3 style={{
                        color:"#C9252B",
                        fontSize:"clamp(1rem, 2.5vw, 1.1rem)",
                        fontWeight:"bold",
                        marginBottom:"0.5rem",
                    }}>
                        Phone
                    </h3>
                    <p style={{
                        margin:0,
                        fontWeight:"500"
                    }}>
                        122334343434
                    </p>
                </div>

                <div style={{
                    minWidth: window.innerWidth <= 768 ? "auto" : "200px",
                    textAlign: window.innerWidth <= 768 ? "center" : "left"
                }}>
                    <h3 style={{
                        color:"#c9252b",
                        fontSize:"clamp(1rem, 2.5vw, 1.1rem)",
                        fontWeight:"bold",
                        marginBottom:"0.5rem",
                    }}>
                        Email
                    </h3>
                    <p style={{
                        margin:0,
                        fontWeight:"500",
                        wordBreak: "break-word"
                    }}>
                        ajnakjsnas.gmail.com
                    </p>
                </div>

                <div style={{
                    minWidth: window.innerWidth <= 768 ? "auto" : "200px",
                    textAlign: window.innerWidth <= 768 ? "center" : "left"
                }}>
                    <h3 style={{
                        color:"#c9252b",
                        fontSize:"clamp(1rem, 2.5vw, 1.1rem)",
                        fontWeight:"bold",
                        marginBottom:"0.5rem",
                    }}>
                        Location
                    </h3>
                    <p style={{
                        margin:0,
                        fontWeight:"500"
                    }}>
                        kochi kerala duh
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;