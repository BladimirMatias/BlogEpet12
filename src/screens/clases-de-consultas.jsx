import React from "react";
import "../styles/clasesdeconsulta.css";

export default function ClasesDeConsultas() {
  return (
    <div className="consulta-container">
      <h1 className="consulta-title">CLASES DE CONSULTAS</h1>
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTF5Z2bjXKAqvWEjh215vvS0WHITGe-1Og5wWBKffxQfvXvdllLlCvfSk7-Vo4fd24wxhkwaIt2OLXD_rqqApfvEx9P_12BwOn89Xikr2Zue-rumzRnqa4-6O9esHzQ4e-EBRllmSvu2dC/w169-h169/Clases+de+consulta.jpg"
        alt="Clases de consulta"
        className="consulta-img"
      />
      <div className="consulta-links">
        <p className="consulta-text">
          <strong>¿Qué son las clases de consulta?</strong><br />
          Son espacios donde el jefe de departamento de cada área, ayuda a los estudiantes con aquellas dudas que tengan sobre algún tema en particular de la materia.
        </p>
        <p className="consulta-text">
          <strong>¿Quiénes pueden asistir?</strong><br />
          Todos los estudiantes de la escuela (no importa que el jefe de departamento no sea su docente en el aula) que tengan dudas sobre algún contenido que están viendo en el aula durante el presente año lectivo.
        </p>
        <p className="consulta-text">
          <strong>¿En qué horarios?</strong><br />
          A continuación detallaremos los horarios de cada departamento. Deben ser lo más puntuales posibles. Es importante que tengan las dudas registradas así se hacen dinámicas las clases.
        </p>
        <div className="consulta-img-link">
          <a
            href="https://drive.google.com/file/d/1IXM1omCHXBMuqNZ173LYBlcJxxCcodHO/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz2ILulapT5DecUJdOPfCEx0W7PaSHCLlHoNWn3JwN81SoMNjaudgMXlc-7sEh8-hvuC0wSzrOKygkE3WnuStCkYqJ_DmU4rUf-k528Yhvh4vr9edeF4BXXzs38S8crlaNwxq5ZJyukRJ7C9Lt-O6rD0jniPrqSHY9qncuLGuItzqfpQVLIaVtA6tXo-5X/s320/Horarios%20de%20consulta.png"
              alt="Horarios de consulta"
              className="consulta-horario-img"
            />
          </a>
          <p className="consulta-ampliar">(HACER CLICK SOBRE LA IMAGEN PARA AMPLIAR)</p>
        </div>
      </div>
    </div>
  );
}