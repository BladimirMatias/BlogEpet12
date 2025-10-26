import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/horariosdeclases.css";

const HorariosDeClase = () => {
  const navigate = useNavigate();
    
  return (
    <div className="horarios-container">
      <h1 className="horarios-title">Horarios de Clase</h1>

      <div className="horarios-links">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3OmuzRYOf9L8JSoyV1fM6Q8fhSHGfi4XG_F1s8EkAuJ4dWblSMBuWJrsITtRsp2fGDwEcznmTAoNTTUg9mO4IVHJ3eT0tNsbHiDHteC0azOY4vDEH45DLXQ76lYMnkJNP4kZKRd8YCNAq/s320/Ciclo+basico.png"
          alt="Ciclo Básico"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => window.open("https://epet12smandes.blogspot.com/p/horarios-ciclo-basico.html", "_blank")}
        />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfGT1hUmWtyo3GBvG24DEI1uZJyiymienSM03Amsaj76ViHEfZ54_yTObSNJIvFGs1ELr_iM1py1Hropa_fG2OrfNFSD4nHeDqheTgjEhCJf58MqG9i6yebK9Wx78cHtMzD6A6VcrjxQwN/s320/Electro.png"
          alt="Electromecánica"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => window.open("https://epet12smandes.blogspot.com/p/horarios-electro.html", "_blank")}
        />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPCqlmFh1KxRZXC0dlo4temcek_vVjYAhJRZs9WEPIagwSi_PUWb3QeOauLQHWDBqvZkCwGXN3oU5Mmv0xVEBg4eJtmgCJOhhJTWStYzQaG9C0PTqQF9KXDcckC4aHIP7IrZLh7170q6kO/s320/MMO.png"
          alt="Maestro Mayor de Obras"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => window.open("https://epet12smandes.blogspot.com/p/horarios-mmo.html", "_blank")}
        />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhyFAGVY9vkm_d2A5hyVtQs1nncY-gW0-7oSm_HG7XRj-2ybGzCgALmSsQHL92qMuSalKLAQj2OoT1B-tFSYho3gcmQNQoHy_LfedfhX-07don364PVyGBJnzgUTj_IQHixVhn1Zca9bJe/s320/Programacion.png"
          alt="Técnico en Programación"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => window.open("https://epet12smandes.blogspot.com/p/horarios-programacion.html", "_blank")}
        />
      </div>
    </div>
  );
};

export default HorariosDeClase;
