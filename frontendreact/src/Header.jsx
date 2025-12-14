import React from "react";

export default function Header({ onNavigate }) {
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

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => onNavigate("/")}>Home</button>
        <button onClick={() => onNavigate("/gallery")}>Gallery</button>
        <button onClick={() => onNavigate("/album")}>Album</button>
        <button onClick={() => onNavigate("/about")}>About</button>
      </div>
    </div>
  );
}


