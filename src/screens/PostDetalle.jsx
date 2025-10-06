import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/postdetalle.css";

export default function PostDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://128.3.250.137:5000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error loading post:", err));
  }, [id]);

  if (!post) {
    return <p>Cargando post...</p>;
  }

  return (
    <div className="post-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Volver
      </button>
      <h1>{post.titulo}</h1>
      <p className="post-date">Publicado el {post.fecha}</p>
      <p className="post-content">{post.contenido}</p>
    </div>
  );
}
