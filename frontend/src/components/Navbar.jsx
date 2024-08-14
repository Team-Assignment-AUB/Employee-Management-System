import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ handleLogout }) {
    const navigate = useNavigate();

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo} onClick={() => navigate("/")}>
            <img src="/Employee.svg" alt="Logo" style={styles.logoImage} />

            </div>
            <div style={styles.navLinks}>
                <button style={styles.button} onClick={() => navigate("/register")}>
                    Register
                </button>
                <button style={styles.button} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#fff",
        color: "#fff",
    },
    logo: {
        cursor: "pointer",
    },
    logoImage: {
        height: "100px",  // Adjust height as needed
        width: "auto",
    },
    navLinks: {
        display: "flex",
        gap: "15px",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#555",
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        cursor: "pointer",
    },
};

export default Navbar;
