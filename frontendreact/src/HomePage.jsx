import { useEffect } from "react";

export default function HomePage({ photos }) {

  // 🌅 MANUAL SUNSET PHOTOS (READ-ONLY)
  const featuredSunsets = [
    { id: 1, image: "/sunsets/sunset1.jpg" },
    { id: 2, image: "/sunsets/sunset2.jpg" },
    { id: 3, image: "/sunsets/sunset3.jpg" },
    { id: 4, image: "/sunsets/sunset4.jpg" },
    { id: 5, image: "/sunsets/sunset5.jpg" },
    { id: 6, image: "/sunsets/sunset6.jpg" },
    { id: 7, image: "/sunsets/sunset7.jpg" },
    { id: 8, image: "/sunsets/sunset8.jpg" },
    { id: 9, image: "/sunsets/sunset9.jpg" },
    { id: 10, image: "/sunsets/sunset10.jpg" },
    { id: 11, image: "/sunsets/sunset11.jpg" },
    { id: 12, image: "/sunsets/sunset12.jpg" },
    { id: 13, image: "/sunsets/sunset13.jpg" },
    { id: 14, image: "/sunsets/sunset14.jpg" }
  ];

  useEffect(() => {
    console.log("🏠 HomePage mounted");
    console.log("📊 Community photos count:", photos?.length || 0);
  }, [photos]);

  return (
    <div
      style={{
        padding: "clamp(1rem, 4vw, 2rem)" // ✅ responsive padding
      }}
    >
      {/* 🌸 HERO */}
      <div
        className="card"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          background: "linear-gradient(135deg, #fce7f3, #fbcfe8)"
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 6vw, 2.5rem)", // ✅ responsive title
            fontWeight: 900,
            background: "linear-gradient(45deg, #ec4899, #db2777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem"
          }}
        >
          Capturing Memories: Sunsets
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 4vw, 1.1rem)", // ✅ responsive subtitle
            color: "#9d174d"
          }}
        >
          Hand-picked sunset moments by Michelle D. Daluz
        </p>
      </div>

      {/* 🌅 FEATURED SUNSETS */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h3
          style={{
            color: "#ec4899",
            marginBottom: "1rem",
            fontWeight: 700,
            fontSize: "clamp(1rem, 4vw, 1.1rem)" // ✅ responsive heading
          }}
        >
          Featured Sunsets
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", // ✅ responsive grid
            gap: "clamp(1rem, 3vw, 1.5rem)"
          }}
        >
          {featuredSunsets.map(sunset => (
            <img
              key={sunset.id}
              src={sunset.image}
              alt="Sunset"
              style={{
                width: "100%",
                height: "clamp(180px, 40vw, 220px)", // ✅ responsive height
                objectFit: "cover",
                borderRadius: 16,
                boxShadow: "0 10px 30px rgba(236,72,153,0.3)"
              }}
            />
          ))}
        </div>
      </div>

      {/* 📊 STATS */}
      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(1.5rem, 6vw, 2rem)", // ✅ responsive gap
          textAlign: "center",
          flexWrap: "wrap" // ✅ wrap on small screens
        }}
      >
        <div>
          <div
            style={{
              fontSize: "clamp(1.6rem, 6vw, 2rem)", // ✅ responsive number
              fontWeight: 800,
              color: "#ec4899"
            }}
          >
            {photos.length}
          </div>
          <div
            style={{
              fontSize: "clamp(0.85rem, 3.5vw, 0.9rem)", // ✅ responsive label
              color: "#9d174d"
            }}
          >
            Album Photos
          </div>
        </div>
      </div>
    </div>
  );
}
