import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inicio.css";
import { FadeLoader } from "react-spinners";

export default function Inicio() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://128.3.250.137:5000/posts")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(async (data) => {
        const postsWithMedia = await Promise.all(
          data.map(async (post) => {
            try {
              const res = await fetch(`http://128.3.250.137:5000/posts/${post.id}`);
              const detalle = await res.json();
              const matchImg = detalle.contenido.match(/<img[^>]*src=["']([^"']+)["']/);
              const imgUrl = matchImg ? matchImg[1] : null;
              const matchVideo = detalle.contenido.match(/<object[^>]*contentid="([^"]+)"[^>]*><\/object>/);
              const videoId = matchVideo ? matchVideo[1] : null;
              return { ...post, imgUrl, videoId };
            } catch {
              return { ...post, imgUrl: null, videoId: null };
            }
          })
        );
        setPosts(postsWithMedia);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="loading-text">
        <FadeLoader
          className="loaders-css"
          color="#118799"
          height={19}
          speedMultiplier={0.6}
          width={5}
        />
      </p>
    );
  }

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-card"
          onClick={() => navigate(`/post/${post.id}`)}
        >
          {post.imgUrl && (
            <img
              src={post.imgUrl}
              alt={post.titulo}
              style={{
                width: "100%",
                maxHeight: "180px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            />
          )}
          {post.videoId && (
            <iframe
              title="Video del post"
              src={`https://www.blogger.com/video.g?contentId=${post.videoId}`}
              width="100%"
              height="180"
              style={{
                borderRadius: "8px",
                marginBottom: "8px",
                background: "#000",
              }}
              allowFullScreen
            />
          )}
          <h2 className="post-title">{post.titulo}</h2>
          <p className="post-content">
            {post.contenido.substring(0, 100)}...
          </p>
          <p className="post-date">Fecha: {post.fecha}</p>
        </div>
      ))}
    </div>
  );
}
