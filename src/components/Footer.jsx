import React from "react";  

const Footer = () => {
    return (
        <footer style={{
            backgroundColor:"#461010",
            color:"#ffffff",
            textAlign:"center",
            padding:"3rem 2rem 2rem 2rem"
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
                    fontWeight: "bolder"
                }}>
                    CONTACT US
                </h1>
                <p style={{
                    color: "#df2121ff",
                    fontFamily: "Rethink Sans",
                    fontWeight: "bold"
                }}>
                    Get in touch with us for your interior design needs.
                </p>
            </div>
            {/*contact info*/}
            <div style={{
                color:'white',
                display:"flex",
                justifyContent:"wrap",
                gap:"5rem",
                marginBottom:"2rem",
                fontSize:"1rem",
                marginLeft:"20%"
            }}>
                <div style={{
                    minWidth:"200px"
                    }}>
                    <h3 style={{
                        color:"#C9252B",
                        fontSize:"1.1rem",
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
                    minWidth:"200px"
                }}>
                    <h3 style={{
                        color:"#c9252b",
                        fontSize:"1.1rem",
                        fontWeight:"bold",
                        marginBottom:"0.5rem",
                    }}>
                        Email
                    </h3>
                    <p style={{
                        margin:0,
                        fontWeight:"500"
                    }}>
                        ajnakjsnas.gmail.com
                    </p>
                </div>

                <div style={{
                    minWidth:"200px"
                }}>
                    <h3 style={{
                        color:"#c9252b",
                        fontSize:"1.1rem",
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