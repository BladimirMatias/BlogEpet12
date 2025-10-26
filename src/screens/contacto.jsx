import React from "react";
import "../styles/contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-container">
      <h1 className="contacto-title">CONTACTO</h1>
      <div className="contacto-links">
        <p className="contacto-label">DIRECCIÓN:</p>
        <a
          href="mailto:direccion@epet12smandes.edu.ar"
          className="contacto-mail"
        >
          direccion@epet12smandes.edu.ar
        </a>
        <p className="contacto-label">SECRETARÍA:</p>
        <a
          href="mailto:secretaria@epet12smandes.edu.ar"
          className="contacto-mail"
        >
          secretaria@epet12smandes.edu.ar
        </a>
        <p className="contacto-tel">(02972) 42-8433</p>
        <p className="contacto-label">PRECEPTORÍA:</p>
        <a
          href="mailto:preceptoria@epet12smandes.edu.ar"
          className="contacto-mail"
        >
          preceptoria@epet12smandes.edu.ar
        </a>
        <p className="contacto-tel">(2972) 42-2570</p>
      </div>
    </div>
  );
}
