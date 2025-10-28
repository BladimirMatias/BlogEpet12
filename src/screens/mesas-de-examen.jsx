import React from "react";
import "../styles/mesasdeexamen.css";

const MesasDeExamen = () => {
  return (
    <div className="mesasdeexamen-container">
      <h1 className="mesasdeexamen-title">MESAS DE EXAMEN</h1>
      <p className="mesasdeexamen-text">
        Estimados profesores, padres y estudiantes:
        <br />
        Encontrarán aquí las fechas y horarios de las próximas mesas de examen a tomarse en la escuela.
        <br />
        Debido a solicitudes de alumnos, o profesores, o por cuestiones de infraestructura, puede haber cambios de último momento en las fechas y horarios. Las versiones revisadas del documento se numeran con el sufijo R (número de versión). Si la versión publicada es posterior a la que Ud. ya agendó, revise nuevamente, ya que si cambió la versión es porque hubo modificaciones en el día y horario de alguna materia o en la composición del tribunal. Por favor esté atento a estos cambios para evitar inconvenientes.
        <br />
        Muchas gracias.
      </p>
      <h2 className="mesasdeexamen-subtitle">Inscripción a Mesas de materias<br />para finalizar estudios y PLE<br />del mes de Octubre de 2025</h2>
      <div className="mesasdeexamen-imglinks">
        <a href="https://drive.google.com/file/d/1ygDHBPNW4gX-jdsnfq8v7jBCxTNFTovs/view" target="_blank" rel="noopener noreferrer">
          <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsQP5AHbONX2pXH53DUwE7LkeesBRq1Q0iZXYIiQrxrrn8hjxWEx60a39-wMPnRNsxvcb4x4XcBKn4KBKeNI95X3GycXKWxNyrAL1OpJ0ODroMfVQB9Ad0fceG9KjxmW1yxuae89ujdIrrh7UERDvWn3B-0u6b7jDYPJ70sVxywdaUJIwhkGTdHyzj8bap/w400-h65/Inscripci%C3%B3n%20finalizada.png"
          alt="Inscripción finalizada"
          className="mesasdeexamen-img mesasdeexamen-imglink"
        />
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyo55xXE7-wCBCj0RoxCCkL9EUxzQbxbSVnTCXFPZq-Z850kiuH281wC6v1IiwIVfL_2EER0AtAaaNeCVf_SkGiR_0NV1FshHYt_utPj2H8CqBNWiUH0uS64JsN4YNgDOBHYmE_cgWruhS8iKMt0e-e0TGs88Cb4C_iVGe4DXFYBmCUr8s3QvPIpMN8qrc/s320/descargar-examen-de-ingles-nivel-basico-elemental.png"
            alt="Descargar inscripción mesas"
            className="mesasdeexamen-img mesasdeexamen-imglink"
          />
        </a>
      </div>
      <h2 className="mesasdeexamen-subtitle">Días y horarios de las mesas</h2>
      <p className="mesasdeexamen-text">
        Finalización de estudios Previas Libres y Equivalencias<br />mes de Octubre de 2025
      </p>
      <div className="mesasdeexamen-proximamente">PROXIMAMENTE!!</div>
      <div className="mesasdeexamen-atencion">
        <strong>ATENCIÓN:</strong>
        <br />
        LOS DÍAS Y HORARIOS DE LAS MESAS ESTÁN CONDICIONADOS A LA DISPONIBILIDAD DE LOS PROFESORES Y A LA SUPERPOSICIÓN DE ALUMNOS. REVISE SI EXISTIERAN CAMBIOS HASTA ÚLTIMO MOMENTO!!!
        <br />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh6fv3cZZh02I5QU2r8roVdxR-BggGPkC4qvzinMyGY-uJDwVW1Z6JsW09Fy47RY0AmDvEEIc3j2gH3KrU2zBKUrusoTvxv0Hwi_V78vdBx-6Mm9MY64vmseTzhv2KwE77UkYuRgzx0YFC/s200/atencin.png"
          alt="Atención"
          className="mesasdeexamen-img mesasdeexamen-imgatencion"
        />
      </div>
      <div className="mesasdeexamen-importante">
        <strong>IMPORTANTE:</strong>
        <br />
        Sr. Docente:<br />
        Las mesas de examen se organizan con la lista de profesores que están dictando las materias en el momento en que se confeccionan las mesas. Por lo tanto, si un titular de una materia se encuentra de licencia al momento de armar las mesas, quién aparecerá en el tribunal publicado es el SUPLENTE.
        <br />
        Si Ud. se reincorpora de una licencia después de la publicación de las mesas, y antes de la fecha de las mismas, es SU responsabilidad reemplazar a su suplente en las mesas, aún cuando la publicación no esté actualizada.
        <br />
        Estudiantes y Docentes:<br />
        Según la Resolución 151 la espera del estudiante para rendir en la mesa es de 30 minutos. Si llega a tardar más de 30 minutos, tiene la obligación de justificar. Si la escuela considera que ese justificativo es válido, se le podrá armar una nueva mesa.
        <br />
        Gracias.
      </div>
    </div>
  );
};

export default MesasDeExamen;
