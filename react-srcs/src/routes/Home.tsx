import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CompleteFunction from "../components/Buttons/CompleteFunction";



const Home = () => {

    // ! REQUISIÇÃO GET
    const [posts, setPosts] = useState([])

    const getPosts = async () => {

        
        try {
            
            // armazenar a resposta da API
            const response = await axios.get("http://localhost:8000/todos");
            
            // armazenar apenas os dados retornados pela resposta
            const data = response.data

            console.log(data)

            // atualizar os posts salvos nos dados
            setPosts(data)

        } catch (error) {
            console.log(error);
        };
    };

    useEffect( () => {

        getPosts();

    }, []);
    // array vazio -> useEffect só executa uma vez, no loading da pág
    // no loading da pag -> executa essa função para receber o JSON
    // ! FIM REQUISIÇÃO GET

    return (
        <div className="card">
            <h1>Start working on something!</h1>
            
            {posts.length === 0 ? (<p>Carregando ...</p>) : (
                posts.map((post: Posts) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.desc}</p>
                        <Link to={`/todos/${post.id}`} className="btn">Ler mais</Link>
                        <CompleteFunction />
                    </div>
                ))
            )}
                
        </div>
    );
};

export default Home;