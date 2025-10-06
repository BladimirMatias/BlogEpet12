import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./screens/inicio";
import PostDetalle from "./screens/PostDetalle";

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
