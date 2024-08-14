import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to log out?");
        
        if (confirmed) {
            alert("Logged out successfully!");
            navigate("/login"); 
        } 
    };

    return (
        <div>
            <Navbar handleLogout={handleLogout} />
            {/* Add the rest of your page content here */}
        </div>
    );
}

export default Home;
