import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Inicio from "./screens/inicio";
import PostDetalle from "./screens/post-detalle";
import HorariosDeClase from "./screens/horarios-de-clases";
import Programas from "./screens/Programas";
import Correlatividades from "./screens/Correlatividades";
import MesasDeExamen from "./screens/mesas-de-examen";
import Planillas from "./screens/planillas";
import Normativa from "./screens/Normativa";
import ParaAlumnos from "./screens/paraalumnos";
import ParaProfesores from "./screens/paraprofesores";
import Encuesta from "./screens/encuesta-ingresantes-2025";
import Equipo from "./screens/Equipo";
import Contacto from "./screens/Contacto";
import ClasesDeConsultas from "./screens/clases-de-consultas";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/horarios-de-clases" element={<HorariosDeClase />} />
          <Route path="/clases-de-consultas" element={<ClasesDeConsultas/>} />
          <Route path="/post/:id" element={<PostDetalle />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/correlatividades" element={<Correlatividades />} />
          <Route path="/mesas-de-examen" element={<MesasDeExamen />} />
          <Route path="/planillas" element={<Planillas />} />
          <Route path="/normativa" element={<Normativa />} />
          <Route path="/paraprofesores" element={<ParaProfesores />} />
          <Route path="/paraalumnos" element={<ParaAlumnos/>} />
          <Route path="/equipo" element={<Equipo/>} />
          <Route path="/contacto" element={<Contacto/>} />

          <Route path="/encuesta-ingresantes-2025" element={<Encuesta/>} />
        </Route>
      </Routes>
    </Router>
  );
}
