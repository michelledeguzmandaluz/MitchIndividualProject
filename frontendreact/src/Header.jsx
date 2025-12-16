// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./context/AuthContext";

// export default function Header() {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: 20,
//         margin: 20,
//         background: "#ec4899",
//         borderRadius: 20
//       }}
//     >
//       {/* LOGO */}
//       <div
//         style={{
//           width: 60,
//           height: 60,
//           background: "linear-gradient(45deg, #ffffff, #ede9fe)",
//           color: "#6d28d9",
//           fontWeight: 900,
//           fontSize: 24,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           borderRadius: 16
//         }}
//       >
//         CM
//       </div>

//       {/* NAVIGATION */}
//       <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
//         <button onClick={() => navigate("/")}>Home</button>
//         <button onClick={() => navigate("/gallery")}>Gallery</button>
//         <button onClick={() => navigate("/album")}>Album</button>
//         <button onClick={() => navigate("/about")}>About</button>

//         {/* USER AUTH */}
//         {user ? (
//           <>
//             <span style={{ marginLeft: 10 }}>Hi, {user.name}</span>
//             <button onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <button onClick={() => navigate("/login")}>Login</button>
//             <button onClick={() => navigate("/register")}>Register</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

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
        padding: "clamp(12px, 4vw, 20px)", // ✅ responsive padding
        margin: "clamp(12px, 4vw, 20px)",  // ✅ responsive margin
        background: "#ec4899",
        borderRadius: 20,
        flexWrap: "wrap",                 // ✅ wrap on small screens
        gap: 12                           // ✅ spacing when wrapped
      }}
    >
      {/* LOGO */}
      <div
        style={{
          width: "clamp(48px, 12vw, 60px)",  // ✅ responsive size
          height: "clamp(48px, 12vw, 60px)",
          background: "linear-gradient(45deg, #ffffff, #ede9fe)",
          color: "#6d28d9",
          fontWeight: 900,
          fontSize: "clamp(18px, 4vw, 24px)", // ✅ responsive text
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          cursor: "pointer"
        }}
        onClick={() => {
          console.log("🏠 Logo clicked");
          navigate("/");
        }}
      >
        CM
      </div>

      {/* NAVIGATION */}
      <div
        style={{
          display: "flex",
          gap: "clamp(6px, 2vw, 10px)", // ✅ responsive gap
          alignItems: "center",
          flexWrap: "wrap",             // ✅ wrap buttons on mobile
          justifyContent: "center"
        }}
      >
        <button onClick={() => { console.log("➡️ Home"); navigate("/"); }}>
          Home
        </button>
        <button onClick={() => { console.log("➡️ Gallery"); navigate("/gallery"); }}>
          Gallery
        </button>
        <button onClick={() => { console.log("➡️ Album"); navigate("/album"); }}>
          Album
        </button>
        <button onClick={() => { console.log("➡️ About"); navigate("/about"); }}>
          About
        </button>

        {/* USER AUTH */}
        {user ? (
          <>
            <span style={{ marginLeft: 10, fontSize: "clamp(12px, 3vw, 14px)" }}>
              Hi, {user.name}
            </span>
            <button
              onClick={() => {
                console.log("🚪 Logout clicked");
                logout();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => { console.log("➡️ Login"); navigate("/login"); }}>
              Login
            </button>
            <button onClick={() => { console.log("➡️ Register"); navigate("/register"); }}>
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}

