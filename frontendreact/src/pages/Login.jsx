import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      setError("Invalid email or password");
    } else {
      navigate("/"); // match the home page route
    }
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={form}>
        <h2 style={title}>Welcome Back</h2>
        <p style={subtitle}>Login to access the gallery</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => { setEmail(e.target.value); setError(""); }}
          style={input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(""); }}
          style={input}
          required
        />

        {error && <p style={errorStyle}>{error}</p>}

        <button type="submit" style={button}>Login</button>

        <p style={footerText}>
          Don't have an account?{" "}
          <span style={link} onClick={() => navigate("/register")}>
            Create one
          </span>
        </p>
      </form>
    </div>
  );
}

// Styles
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #fce7f3, #fbcfe8)"
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: 24,
  borderRadius: 12,
  background: "#fff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  width: 320,
};

const title = { color: "#be185d", fontSize: 28, marginBottom: 4 };
const subtitle = { color: "#9d174d", marginBottom: 12 };
const input = { padding: 10, borderRadius: 6, border: "1px solid #ccc", fontSize: 14 };
const button = { padding: 12, borderRadius: 8, border: "none", background: "#ec4899", color: "#fff", fontWeight: 600, cursor: "pointer" };
const footerText = { fontSize: 14, textAlign: "center", marginTop: 8 };
const link = { color: "#ec4899", cursor: "pointer", fontWeight: 600 };
const errorStyle = { color: "red", fontSize: 14, marginTop: 4 };
