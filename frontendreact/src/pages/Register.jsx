// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     register(name, email, password);
//     navigate("/");
//   };

//   return (
//     <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      
//       {/* 🌅 VIDEO BACKGROUND */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           position: "absolute",
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: 0,
//         }}
//       >
//         <source src="/sunsets/sunset.mp4" type="video/mp4" />
//       </video>

//       {/* 🌑 DARK OVERLAY */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(0,0,0,0.6)",
//           zIndex: 1,
//         }}
//       />

//       {/* 🎯 REGISTER FORM */}
//       <div style={{ position: "relative", zIndex: 2 }}>
//         <div style={container}>
//           <form onSubmit={handleSubmit} style={form}>
//             <h2 style={title}>Create Account</h2>
//             <p style={subtitle}>Sign up to access the gallery</p>

//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={e => {
//                 setName(e.target.value);
//                 setError("");
//               }}
//               style={input}
//               required
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={e => {
//                 setEmail(e.target.value);
//                 setError("");
//               }}
//               style={input}
//               required
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={e => {
//                 setPassword(e.target.value);
//                 setError("");
//               }}
//               style={input}
//               required
//             />

//             {error && <p style={errorStyle}>{error}</p>}

//             <button type="submit" style={button}>
//               Create Account
//             </button>

//             <p style={footerText}>
//               Already have an account?{" "}
//               <span
//                 style={link}
//                 onClick={e => {
//                   e.preventDefault(); // 🔥 IMPORTANT FIX
//                   navigate("/login");
//                 }}
//               >
//                 Login
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* 🔧 STYLES */
// const container = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
// };

// const form = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 12,
//   padding: 24,
//   borderRadius: 12,
//   background: "#fff",
//   boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//   width: 320,
// };

// const title = { color: "#be185d", fontSize: 28,marginBottom: 4,
//   textAlign: "center",
//   fontWeight: "bold", };
// const subtitle = { color: "#9d174d", marginBottom: 12, textAlign:"center"};
// const input = { padding: 10, borderRadius: 6, border: "1px solid #ccc", fontSize: 14 };
// const button = {
//   padding: 12,
//   borderRadius: 8,
//   border: "none",
//   background: "#ec4899",
//   color: "#fff",
//   fontWeight: 600,
//   cursor: "pointer",
// };
// const footerText = { fontSize: 14, textAlign: "center", marginTop: 8 };
// const link = { color: "#ec4899", cursor: "pointer", fontWeight: 600 };
// const errorStyle = { color: "red", fontSize: 14, marginTop: 4 };

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔥 Clear fields every time Register page loads
  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    register(name, email, password);

    // 🔥 Clear after register
    setName("");
    setEmail("");
    setPassword("");

    navigate("/");
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

      {/* 🎯 REGISTER FORM */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={container}>
          <form onSubmit={handleSubmit} style={form} autoComplete="off">
            <h2 style={title}>Create Account</h2>
            <p style={subtitle}>Sign up to access the Capturing Memories: Sunsets</p>

            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Name"
              value={name}
              onChange={e => { setName(e.target.value); setError(""); }}
              style={input}
              required
            />

            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(""); }}
              style={input}
              required
            />

            <input
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="Password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(""); }}
              style={input}
              required
            />

            {error && <p style={errorStyle}>{error}</p>}

            <button type="submit" style={button}>
              Create Account
            </button>

            <p style={footerText}>
              Already have an account?{" "}
              <span
                style={link}
                onClick={e => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

/* STYLES */
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
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

const title = {
  color: "#be185d",
  fontSize: 28,
  marginBottom: 4,
  textAlign: "center",
  fontWeight: "bold",
};

const subtitle = { color: "#9d174d", marginBottom: 12, textAlign: "center" };
const input = { padding: 10, borderRadius: 6, border: "1px solid #ccc", fontSize: 14 };
const button = {
  padding: 12,
  borderRadius: 8,
  border: "none",
  background: "#ec4899",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};
const footerText = { fontSize: 14, textAlign: "center", marginTop: 8 };
const link = { color: "#ec4899", cursor: "pointer", fontWeight: 600 };
const errorStyle = { color: "red", fontSize: 14, marginTop: 4 };


