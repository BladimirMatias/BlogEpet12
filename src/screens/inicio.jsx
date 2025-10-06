import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inicio.css";

export default function Inicio() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
        <div className="menu-icon">&#9776;</div>
        <div className="header-text-container">
          <h1 className="header-title">E.P.E.T N° 12</h1>
          <p className="header-subtitle">
            Blog de informaciones sobre el colegio
          </p>
        </div>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwVz_An22ttdjU5FH-QPm_18b6kBOCIx6SC3j8dWlkn6rJtSsJ7GUJIyjNqcjfFY87OSAOycRDTwjN9ZTmDgkjl6Ox-ZJwEsYmC6yMbMRrtut5BvyUXqOmyYzye_DFQ5UcinJyNARpEl4sr5Kq2OYkeLZq9di_WiQ1jkR6zFmrdfrzdVxWjcv5xJnEzN-5/w1200-h630-p-k-no-nu/Logo%20con%20t%C3%ADtulo.png"
          alt="E.P.E.T. No. 12 Logo"
          className="logo"
        />
      </header>

      {/* Post Cards */}
      <main className="posts-container">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => navigate(`/post/${post.id}`)}
            style={{ cursor: "pointer" }}
          >
            <h2 className="post-title">{post.titulo}</h2>
            <p className="post-content">
              {post.contenido.substring(0, 100)}...
            </p>
            <p className="post-date">Fecha: {post.fecha}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
