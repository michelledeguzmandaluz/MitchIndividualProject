import { useEffect } from "react";

export default function GalleryView({ photos }) {

  useEffect(() => {
    console.log("🖼️ GalleryView mounted");
    console.log("📸 Photos count:", photos?.length || 0);
  }, [photos]);

  if (!photos || photos.length === 0) {
    console.log("⚠️ No photos available");
    return (
      <p style={{ textAlign: "center", color: "#9d174d" }}>
        No photos available.
      </p>
    );
  }

  return (
    <div
      style={{
        padding: "clamp(1rem, 4vw, 2rem)" // ✅ responsive padding
      }}
    >
      <div
        className="card"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          background: "linear-gradient(135deg, #fce7f3, #fbcfe8)"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2rem)", // ✅ responsive title
            fontWeight: 900,
            background: "linear-gradient(45deg, #ec4899, #db2777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Gallery
        </h2>

        <p
          style={{
            color: "#9d174d",
            fontSize: "clamp(0.9rem, 3.5vw, 1rem)" // ✅ responsive text
          }}
        >
          A collection of beautiful memories
        </p>
      </div>

      {/* 🔥 RESPONSIVE GRID (still 4 max per row) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", // ✅ responsive
          gap: "clamp(1rem, 3vw, 1.5rem)"
        }}
      >
        {photos.map(p => (
          <div key={p.id} className="card" style={{ padding: "1rem" }}>
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "clamp(180px, 40vw, 220px)", // ✅ responsive height
                objectFit: "cover",
                borderRadius: 16
              }}
            />

            <h3
              style={{
                marginTop: 10,
                color: "#be185d",
                fontSize: "clamp(1rem, 4vw, 1.1rem)" // ✅ responsive title
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                fontSize: "clamp(11px, 3vw, 12px)", // ✅ responsive uploader
                color: "#9d174d"
              }}
            >
              {p.anonymous ? "Anonymous" : p.uploader}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

