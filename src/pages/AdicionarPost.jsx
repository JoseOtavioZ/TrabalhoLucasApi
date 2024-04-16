import React, { useState } from "react";
import urlPlaceHolder from "../axios/config";

const AdicionarPost = () => {
  const [post, setPost] = useState(null);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleBuscarClick = async () => {
    setLoading(true);
    try {
      const response = await urlPlaceHolder.get(`/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Erro ao buscar post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="busca">
      <h2>Buscar Post</h2>
      <input type="text" value={id} onChange={handleIdChange} />
      <button onClick={handleBuscarClick}>Buscar</button>
      {loading && <p>Carregando...</p>}
      {post && (
        <div>
          <h3>ID: {post.id}</h3>
          <p>UserID: {post.userId}</p>
          <p>Título: {post.title}</p>
          <p>Corpo: {post.body}</p>
        </div>
      )}
    </div>
  );
};
export default AdicionarPost;