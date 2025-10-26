import React, { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/header.css";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Cerrar el menú al hacer clic fuera
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

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "" : "☰"}
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

      {/* Menu lateral */}
      {menuOpen && (
        <nav className="menu" ref={menuRef}>
          <ul>
            <li onClick={() => navigate("/")}>NOVEDADES</li>
            <li onClick={() => navigate("/horarios-de-clases")}>
              HORARIOS DE CLASES
            </li>
            <li onClick={() => navigate("/clases-de-consultas")}>
              CLASES DE CONSULTAS
            </li>
            <li onClick={() => navigate("/programas")}>PROGRAMAS</li>
            <li onClick={() => navigate("/correlatividades")}>
              CORRELATIVIDADES
            </li>
            <li onClick={() => navigate("/mesas-de-examen")}>MESAS DE EXAMEN</li>
            <li onClick={() => navigate("/planillas")}>PLANILLAS</li>
            <li onClick={() => navigate("/normativa")}>NORMATIVA</li>
            <li onClick={() => navigate("/equipo")}>EQUIPO</li>
            <li onClick={() => navigate("/contacto")}>CONTACTO</li>
            <li
              onClick={() =>
                navigate("/encuesta-ingresantes-2025")
              }
            >
              ENCUESTA A INGRESANTES A 1° AÑO 2025
            </li>
          </ul>
        </nav>
      )}

      {/* Contenido dinámico de cada pantalla */}
      <main
        className="main-content"
        onClick={() => {
          if (menuOpen) setMenuOpen(false);
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
