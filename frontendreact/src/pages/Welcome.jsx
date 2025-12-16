import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Welcome!</h1>
        <p style={subtitle}>
          Please login or create an account to access the gallery.
        </p>

        <div style={{ display: "flex", gap: 16 }}>
          <button style={loginButton} onClick={() => navigate("/login")}>
            Login
          </button>
          <button style={registerButton} onClick={() => navigate("/register")}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== Styles =====
const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
  fontFamily: "'Poppins', sans-serif"
};

const card = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
  padding: "3rem",
  borderRadius: 24,
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  textAlign: "center"
};

const title = {
  fontSize: 36,
  fontWeight: 700,
  background: "linear-gradient(45deg, #ec4899, #db2777)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const subtitle = {
  fontSize: 16,
  color: "#6b21a8"
};

const loginButton = {
  padding: "12px 24px",
  fontSize: 16,
  fontWeight: 600,
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  background: "linear-gradient(45deg, #ec4899, #db2777)",
  color: "#fff",
  transition: "0.3s",
};

const registerButton = {
  ...loginButton,
  background: "linear-gradient(45deg, #8b5cf6, #6366f1)"
};
