import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/horariosdeclases.css"; //el mismo que horario de clases

const HorariosDeClase = () => {
  const navigate = useNavigate();
    
  return (
    <div className="horarios-container">
      <h1 className="horarios-title">Correlatividades</h1>

      <div className="horarios-links">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfGT1hUmWtyo3GBvG24DEI1uZJyiymienSM03Amsaj76ViHEfZ54_yTObSNJIvFGs1ELr_iM1py1Hropa_fG2OrfNFSD4nHeDqheTgjEhCJf58MqG9i6yebK9Wx78cHtMzD6A6VcrjxQwN/s320/Electro.png"
          alt="Electromecánica"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => window.open("https://drive.google.com/file/d/1hYIvSkrCnu-_Qv6rVFkVPu3_9in2CBdh/view", "_blank")}
        />  
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPCqlmFh1KxRZXC0dlo4temcek_vVjYAhJRZs9WEPIagwSi_PUWb3QeOauLQHWDBqvZkCwGXN3oU5Mmv0xVEBg4eJtmgCJOhhJTWStYzQaG9C0PTqQF9KXDcckC4aHIP7IrZLh7170q6kO/s320/MMO.png"
          alt="Maestro Mayor de Obras"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => window.open("https://drive.google.com/file/d/1V8Wvs_WVJ1j8eliECYnX1Uj54yF2nveF/view", "_blank")}
        />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhyFAGVY9vkm_d2A5hyVtQs1nncY-gW0-7oSm_HG7XRj-2ybGzCgALmSsQHL92qMuSalKLAQj2OoT1B-tFSYho3gcmQNQoHy_LfedfhX-07don364PVyGBJnzgUTj_IQHixVhn1Zca9bJe/s320/Programacion.png"
          alt="Técnico en Programación"
          className="horario-img"
          style={{ cursor: "pointer", margin: "20px 0", maxWidth: "320px", width: "100%" }}
          onClick={() => window.open("https://drive.google.com/file/d/1YuSZQ9lF_FaS6NFvrSdv_-mLFRQwJURw/view", "_blank")}
        />
      </div>
    </div>
  );
};

export default HorariosDeClase;
