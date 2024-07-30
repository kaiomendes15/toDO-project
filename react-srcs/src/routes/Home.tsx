import axios from "axios";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

// import "./Home.css"

const Home = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {

        
        try {
            
            const response = await axios.get("")


        } catch (error) {
            
        }
    };

    useEffect( () => {

        getPosts();

    }, []);
    // array vazio -> useEffect só executa uma vez, no loading da pág
};

export default Home;