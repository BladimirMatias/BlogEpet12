import React from "react";
import "../styles/normativa.css"; //igual que normativa

export default function ParaAlumnos() {
  return (
    <div className="normativa-container">
      <h1 className="normativa-title">PLANILLAS PARA ALUMNOS</h1>
      
      <div className="normativa-links">
        <a href="https://drive.google.com/file/d/1DyW0zw7QQb_vNBCjEUr_BWQ7QDyysTmH/view"target="_blank" rel="noopener noreferrer" >SOLICITUD DE MATRICULA</a>
        <a href="https://drive.google.com/file/d/0Bwqi2nNAjvfrWkt1eEN2U0lYWTVHa3hTLTZWQVFiWXExSnJr/view?resourcekey=0-uiz6HimhbuifjtCWmiNIMw"target="_blank" rel="noopener noreferrer">HOJA DE RUTA</a>
        <a href="https://drive.google.com/file/d/1Yrw5VacYkANux0GP7B685xkiBmfMdWFr/view"target="_blank" rel="noopener noreferrer">PLANILLA MÉDICA</a>
        <a href="https://drive.google.com/file/d/1r1_FmOZ53RkoLeU4p4kO54h9ZuvR_Y1W/view"target="_blank" rel="noopener noreferrer">PLANILLA PARA RECURSANTES</a>
        <a href="https://drive.google.com/file/d/1N3uN_UO1VrYCgX0iGcmQrDFevr6uDpqX/view"target="_blank" rel="noopener noreferrer">PERMISO DE EXAMEN</a>
        </div>
    </div>
  );
}
