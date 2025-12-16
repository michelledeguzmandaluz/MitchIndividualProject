import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    // simple validation example
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    register(name, email, password);
    navigate("/"); // redirect to home page
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={form}>
        <h2 style={title}>Create Account</h2>
        <p style={subtitle}>Sign up to access the gallery</p>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => { setName(e.target.value); setError(""); }}
          style={input}
          required
        />
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

        <button type="submit" style={button}>Create Account</button>

        <p style={footerText}>
          Already have an account?{" "}
          <span style={link} onClick={() => navigate("/login")}>
            Login
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
