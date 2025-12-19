import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(" Footer mounted");
  }, []);

  const socialLinks = {
    facebook: "https://www.facebook.com/share/18XAptD4Hp/",
    twitter: "https://x.com/nilaganghotdogx?t=oV7DyNOTHAgSqC4q6ONzsQ&s=09",
    instagram: "https://www.instagram.com/zup_justmitch?igsh=aG1xOGl0enhuYTU4",
  };

  return (
    <footer
      style={{
        margin: "2rem 1rem 1rem",
        padding: "clamp(1.5rem, 5vw, 2rem)",
        borderRadius: 32,
        background: "linear-gradient(135deg, #ec4899, #f472b6, #f9a8d4)",
        boxShadow: "0 25px 60px rgba(236,72,153,0.45)",
        color: "white",
        backdropFilter: "blur(14px)",
        maxWidth: 1200,
        marginInline: "auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "clamp(1.5rem, 4vw, 2rem)",
          marginBottom: "1.5rem",
        }}
      >
        
        <div>
          <h3 style={{ fontWeight: 900, marginBottom: 8 }}>
            Capturing Memories
          </h3>
          <p
            style={{
              fontSize: "clamp(12px, 3.5vw, 13px)",
              opacity: 0.95,
              lineHeight: 1.6,
            }}
          >
            Preserving sunsets, moments, and emotions through photography.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Quick Links</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "clamp(12px, 3.5vw, 13px)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignItems: "center",
            }}
          >
            <li>
              <button onClick={() => navigate("/home")} style={linkStyle}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/gallery")} style={linkStyle}>
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/album")} style={linkStyle}>
                Album
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/about")} style={linkStyle}>
                About Creator
              </button>
            </li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4 style={{ fontWeight: 700, marginBottom: 12 }}>Follow Me</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(10px, 4vw, 14px)",
            }}
          >
            {["facebook", "twitter", "instagram"].map((name) => (
              <a
                key={name}
                href={socialLinks[name]}
                target="_blank"
                rel="noreferrer"
                onClick={() => console.log(`🔗 Footer social: ${name}`)}
              >
                <img
                  src={`/icons/${name}.jpg`}
                  width="32"
                  alt={name}
                  style={iconStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(255,255,255,0.8)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.35)",
          marginBottom: "1rem",
        }}
      />

      <div
        style={{
          textAlign: "center",
          fontSize: "clamp(11px, 3vw, 12px)",
          opacity: 0.9,
        }}
      >
        © {new Date().getFullYear()} Capturing Memories: Sunsets
      </div>
    </footer>
  );
}

const linkStyle = {
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontWeight: 500,
  padding: 0,
  transition: "opacity 0.3s, transform 0.3s",
};

const iconStyle = {
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  borderRadius: "50%",
};
