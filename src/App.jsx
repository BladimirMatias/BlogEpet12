import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./screen/inicio";
import PostDetalle from "./screen/PostDetalle";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/post/:id" element={<PostDetalle />} />
      </Routes>
    </Router>
  );
}
