import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setEmail("");
    setNewPassword("");
    setError("");
    setMessage("");
  }, []);

  const handleReset = e => {
    e.preventDefault();

    if (!email || !newPassword) {
      setError("All fields are required");
      return;
    }

    const success = resetPassword(email, newPassword);

    if (!success) {
      setError("Email not found");
      return;
    }

    setMessage("Password reset successful. Redirecting to login...");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>

      {/* 🌅 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <source src="/sunsets/sunset.mp4" type="video/mp4" />
      </video>

      {/* 🌑 DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* 🎯 RESET FORM */}
      <div style={{ ...container, position: "relative", zIndex: 2 }}>
        <form style={form} onSubmit={handleReset} autoComplete="off">
          <h2 style={title}>Reset Password</h2>
          <p style={subtitle}>Enter your email and new password</p>

          <input
            type="email"
            name="reset-email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={input}
            required
          />

          <input
            type="password"
            name="reset-password"
            autoComplete="new-password"
            placeholder="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            style={input}
            required
          />

          {error && <p style={errorStyle}>{error}</p>}
          {message && <p style={successStyle}>{message}</p>}

          <button type="submit" style={button}>
            Reset Password
          </button>

          <p style={footerText} onClick={() => navigate("/login")}>
            Back to Login
          </p>
        </form>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const form = {
  width: 320,
  padding: 24,
  borderRadius: 12,
  background: "#fff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const title = {
  textAlign: "center",
  fontSize: 26,
  color: "#be185d",
  fontWeight: "bold",
};

const subtitle = {
  textAlign: "center",
  fontSize: 14,
  color: "#9d174d",
};

const input = {
  padding: 10,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const button = {
  padding: 12,
  borderRadius: 8,
  border: "none",
  background: "#ec4899",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};

const footerText = {
  textAlign: "center",
  fontSize: 13,
  color: "#ec4899",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  fontSize: 14,
};

const successStyle = {
  color: "green",
  fontSize: 14,
};
