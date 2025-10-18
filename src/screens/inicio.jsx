import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inicio.css";
import { FadeLoader } from "react-spinners";

export default function Inicio() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu
  const menuRef = useRef(null); // Ref for the menu
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  if (loading) {
    return (
      <p className="loading-text">
        <FadeLoader
          className="loaders-css"
          color="#118799"
          height={19}
          speedMultiplier={0.6}
          width={5}
        />
      </p>
    );
  }

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </div>
        <div className="header-text-container">
          <h1 className="header-title">E.P.E.T N° 12</h1>
          <p className="header-subtitle">
            App de comunicaciones de la institución
          </p>
        </div>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwVz_An22ttdjU5FH-QPm_18b6kBOCIx6SC3j8dWlkn6rJtSsJ7GUJIyjNqcjfFY87OSAOycRDTwjN9ZTmDgkjl6Ox-ZJwEsYmC6yMbMRrtut5BvyUXqOmyYzye_DFQ5UcinJyNARpEl4sr5Kq2OYkeLZq9di_WiQ1jkR6zFmrdfrzdVxWjcv5xJnEzN-5/w1200-h630-p-k-no-nu/Logo%20con%20t%C3%ADtulo.png"
          alt="E.P.E.T. No. 12 Logo"
          className="logo"
        />
      </header>

      {/* Menu */}
      {menuOpen && (
        <nav className="menu" ref={menuRef}>
          <ul>
            <li onClick={() => navigate("/novedades")}>NOVEDADES</li>
            <li onClick={() => navigate("/horarios-de-clases")}>HORARIOS DE CLASES</li>
            <li onClick={() => navigate("/clases-de-consultas")}>CLASES DE CONSULTAS</li>
            <li onClick={() => navigate("/programas")}>PROGRAMAS</li>
            <li onClick={() => navigate("/correlatividades")}>CORRELATIVIDADES</li>
            <li onClick={() => navigate("/mesas-de-examen")}>MESAS DE EXAMEN</li>
            <li onClick={() => navigate("/calendario")}>CALENDARIO</li>
            <li onClick={() => navigate("/planillas")}>PLANILLAS</li>
            <li onClick={() => navigate("/normativa")}>NORMATIVA</li>
            <li onClick={() => navigate("/equipo")}>EQUIPO</li>
            <li onClick={() => navigate("/contacto")}>CONTACTO</li>
            <li onClick={() => navigate("/encuesta-ingresantes-2025")}>ENCUESTA A INGRESANTES A 1° AÑO 2025</li>  
          </ul>
        </nav>
      )}

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
