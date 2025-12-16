import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        margin: 20,
        background: "#ec4899",
        borderRadius: 20
      }}
    >
      {/* LOGO */}
      <div
        style={{
          width: 60,
          height: 60,
          background: "linear-gradient(45deg, #ffffff, #ede9fe)",
          color: "#6d28d9",
          fontWeight: 900,
          fontSize: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16
        }}
      >
        CM
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/gallery")}>Gallery</button>
        <button onClick={() => navigate("/album")}>Album</button>
        <button onClick={() => navigate("/about")}>About</button>

        {/* USER AUTH */}
        {user ? (
          <>
            <span style={{ marginLeft: 10 }}>Hi, {user.name}</span>
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

