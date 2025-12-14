export default function GalleryView({ photos }) {
  if (!photos || photos.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#9d174d" }}>
        No photos available.
      </p>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
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
            fontSize: "2rem",
            fontWeight: 900,
            background: "linear-gradient(45deg, #ec4899, #db2777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Gallery
        </h2>
        <p style={{ color: "#9d174d" }}>
          A collection of beautiful memories 🌸
        </p>
      </div>

      {/* 🔥 4 PHOTOS PER ROW */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem"
        }}
      >
        {photos.map(p => (
          <div key={p.id} className="card" style={{ padding: "1rem" }}>
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 16
              }}
            />

            <h3 style={{ marginTop: 10, color: "#be185d" }}>
              {p.title}
            </h3>

            <p style={{ fontSize: 12, color: "#9d174d" }}>
              {p.anonymous ? "Anonymous" : p.uploader}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
