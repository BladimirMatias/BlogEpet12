import React, { useEffect, useState } from "react";
import "../styles/inicio.css";

export default function Inicio() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://128.3.250.137:5000/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="menu-icon">&#9776;</div> {/* Unicode for hamburger icon */}
        <div className="header-text-container">
          <h1 className="header-title">E.P.E.T N° 12</h1>
          <p className="header-subtitle">Blog de informaciones sobre el colegio</p>
        </div>
        <img src="/epet12logo.png" alt="E.P.E.T. No. 12 Logo" className="logo" />
      </header>
      
      {/* Post Cards */}
      <main className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2 className="post-title">{post.titulo}</h2>
            <p className="post-content">{post.contenido.substring(0, 100)}...</p>
            <p className="post-date">Fecha: {post.fecha}</p>
          </div>
        ))}
      </main>
    </div>
  );
}