import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log("🧭 Header mounted");
    console.log("👤 Current user:", user);
  }, [user]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(12px, 4vw, 20px)",
        margin: "clamp(12px, 4vw, 20px)",
        background: "#ec4899",
        borderRadius: 20,
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      {/* LOGO + NAME */}
      <div
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer",
        }}
      >
        {/* CM LOGO */}
        <div
          style={{
            width: "clamp(48px, 12vw, 60px)",
            height: "clamp(48px, 12vw, 60px)",
            background: "linear-gradient(45deg, #ffffff, #ede9fe)",
            color: "#6d28d9",
            fontWeight: 900,
            fontSize: "clamp(18px, 4vw, 24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16,
          }}
        >
          CM
        </div>

        {/* BRAND NAME */}
        <div
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: 1.1,
          }}
        >
          Capturing Memories
        </div>
      </div>

      {/* NAVIGATION */}
      <div
        style={{
          display: "flex",
          gap: "clamp(6px, 2vw, 10px)",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/gallery")}>Gallery</button>
        <button onClick={() => navigate("/album")}>Album</button>
        <button onClick={() => navigate("/about")}>About</button>

        {user ? (
          <>
            <span style={{ fontSize: "clamp(12px, 3vw, 14px)" }}>
              Hi, {user.name}
            </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </>
        )}
      </div>
    </div>
  );
}
