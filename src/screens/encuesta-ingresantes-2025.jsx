import React from "react";
import "../styles/encuesta.css";

export default function Encuesta() {
  return (
    <div className="encuesta-container">
      <h1 className="encuesta-title">ENCUESTA A INGRESANTES A 1° AÑO - 2025</h1>
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDtixURIJx530FUznieSNqsRJoowjWr-75MxukoCcgESrF-F6EYqV2_GhOF84rdhyuCPWsn-iW8HqyI7KTKxGGN81sBybJNClHnUPUEU7vjQgddfSnSKFcGYgI8dlopmf2JqyliBJzccZ6UGeuNksG8-6Pnn8_nC_QpdfAeS4Cp5maSq6Ch17-IyHQ7Qn0/w175-h175/Bienvenidos%202025.jpg"
        alt="Bienvenidos 2025"
        className="encuesta-img"
      />
      <div className="encuesta-links">
        <p className="encuesta-text">
          Estimadas familias y estudiantes de ambas sedes:
        </p>
        <p className="encuesta-text">
          Queremos darles la bienvenida a nuestro próximo ciclo 2024 y a nuestra institución; e invitarlos a responder esta encuesta acompañados del adulto responsable (madre/padre/tutor). Para ello les solicitamos, por favor, completar cada uno de los campos del formulario, ya que, de esa manera, tendremos la información para mantener un contacto más estrecho con ustedes y con sus familias.
        </p>
        <p className="encuesta-text">
          Dicho formulario es para aquellos estudiantes que ya tienen la vacante en nuestro establecimiento.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeCIbllBDnjiaJmGlM_taAmguzCdwsUeHBi79W4fwRYJS-oPw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="encuesta-link"
        >
          ENCUESTA AQUÍ
        </a>
        <p className="encuesta-text">
          Muchas gracias.
        </p>
        <p className="encuesta-equipo">
          Equipo Directivo
        </p>
      </div>
    </div>
  );
}