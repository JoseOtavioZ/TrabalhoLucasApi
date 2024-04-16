import React, { useState, useEffect } from "react";
import urlPlaceHolder from "../axios/config";

const ListaPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await urlPlaceHolder.get("/");
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        getPosts();
    }, []);

    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>Título: {post.title}</h3>
                        <p>ID: {post.id}</p>
                        <p>UserID: {post.userId}</p>
                        <p>Corpo: {post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaPost;
