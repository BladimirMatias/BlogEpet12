import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/horariosdeclases.css"; //el mismo que horario de clases

const HorariosDeClase = () => {
  const navigate = useNavigate();
    
  return (
    <div className="horarios-container">
      <h1 className="horarios-title">Planillas</h1>

      <div className="horarios-links">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNpgeyXWNWrvtVoqM63fD6zDkulOlycerOlEEv_r-DQQ_yts38xXaiQSnQwWZhYO6HHSo9dPToVsgXYAsGdZuQqMiE6wyL6FyWzn9vVJsEhIZ-2DRrh8aY_nSlc2JaopgRHz4lD7EjNnVzaCADiljSlvGSWgPUnfA7A_NhDcDSU6g-peLMQr89oXvTBQ/s320/Alumnos.png"
          alt="Ciclo Básico"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => navigate("/paraalumnos")}
        />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHx7GezkNh7PupBxgdJk-Oj9mupykiR-GUZWwuNOHQJwykQE3FwT5bQvCFqgPTmOXje22vZbToZDU4mtuzDgyggiOM5_Jaj-aCY6TETtJtI9f3ssiAMiFfrTD8kQiX9ayccxmzhQG8lMqRMneO8rleqNtmSnxD0mWZmLco0sbFMQJcqRuW53c7goqEBQ/s320/Profesores.png"
          alt="Electromecánica"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => navigate("/paraprofesores")}
        />
      </div>
    </div>
  );
};

export default HorariosDeClase;
