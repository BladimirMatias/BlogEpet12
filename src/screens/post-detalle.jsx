import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/postdetalle.css";
import DefaultImage from "../assets/Epet12Blog.png";

export default function PostDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [cleanContent, setCleanContent] = useState("");

  useEffect(() => {
    fetch(`http://128.3.250.137:5000/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener el post");
        return res.json();
      })
      .then((data) => {
        setPost(data);

        // Buscar la URL de imagen dentro del contenido HTML
        const matchImg = data.contenido.match(/<img[^>]+src="([^">]+)"/);
        if (matchImg) {
          setImageUrl(matchImg[1]);
        }

        // Buscar el contentid del video
        const matchVideo = data.contenido.match(/<object[^>]*class="BLOG_video_class"[^>]*contentid="([^"]+)"[^>]*><\/object>/);
        if (matchVideo) {
          setVideoId(matchVideo[1]);
        }

        // Eliminar cualquier etiqueta <img> y <object> del contenido para que no se dupliquen
        const cleaned = data.contenido.replace(/<img[^>]*>/gi, "").replace(/<object[^>]*><\/object>/gi, "");
        setCleanContent(cleaned);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar el post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading-text">Cargando...</p>;
  if (!post) return <p className="error-text">Post no encontrado</p>;

  return (
    <div className="post-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Volver
      </button>

      <h1 className="title-h1">{post.titulo}</h1>
      <p className="post-date">Publicado el {post.fecha}</p>

      <div className="post-container">
        {/* Imagen principal (grande) */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Imagen del post"
            className="post-image"
          />
        )}
        {/* Video principal si existe */}
        {videoId && (
          <iframe
            title="Video del post"
            src={`https://www.blogger.com/video.g?contentId=${videoId}`}
            width="100%"
            height="400"
            style={{ borderRadius: "8px", marginBottom: "8px", background: "#000" }}
            allowFullScreen
          />
        )}
        {/* Contenido sin la imagen ni el video duplicados */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        <p className="post-author">Por: {post.autor}</p>
      </div>
    </div>
  );
}
