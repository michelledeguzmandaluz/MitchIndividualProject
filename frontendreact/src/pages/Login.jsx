// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//     setError("");
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();
//     setError("");

//     const success = login(email, password);

//     if (!success) {
//       setError("Invalid email or password");
//       return;
//     }

//     navigate("/home");
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
//           pointerEvents: "none",
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
//           pointerEvents: "none",
//         }}
//       />

//       {/* 🎯 LOGIN FORM */}
//       <div style={{ ...container, position: "relative", zIndex: 2 }}>
//         <form
//           onSubmit={handleSubmit}
//           style={form}
//           autoComplete="off"
//         >
//           {/* 🧠 HARD AUTOFILL BLOCKERS */}
//           <input type="text" name="fakeusernameremembered" style={{ display: "none" }} />
//           <input type="password" name="fakepasswordremembered" style={{ display: "none" }} />

//           <h2 style={title}>Welcome Back</h2>
//           <p style={subtitle}>
//             Login to access the Capturing Memories: Sunsets
//           </p>

//           <input
//             type="email"
//             name="user_login_email_x92"
//             autoComplete="off"
//             inputMode="email"
//             spellCheck={false}
//             placeholder="Email"
//             value={email}
//             onChange={e => {
//               setEmail(e.target.value);
//               setError("");
//             }}
//             style={input}
//             required
//           />

//           <input
//             type="password"
//             name="user_login_pass_x92"
//             autoComplete="new-password"
//             spellCheck={false}
//             placeholder="Password"
//             value={password}
//             onChange={e => {
//               setPassword(e.target.value);
//               setError("");
//             }}
//             style={input}
//             required
//           />

//           {error && <p style={errorStyle}>{error}</p>}

//           <button type="submit" style={button}>
//             Login
//           </button>

//           <p style={resetText} onClick={() => navigate("/reset-password")}>
//             Forgot password?
//           </p>

//           <p style={footerText}>
//             Don't have an account?{" "}
//             <span style={link} onClick={() => navigate("/register")}>
//               Create one
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// /* ================= STYLES ================= */

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

// const title = {
//   color: "#be185d",
//   fontSize: 28,
//   marginBottom: 4,
//   textAlign: "center",
//   fontWeight: "bold",
// };

// const subtitle = {
//   color: "#9d174d",
//   marginBottom: 12,
//   textAlign: "center",
// };

// const input = {
//   padding: 10,
//   borderRadius: 6,
//   border: "1px solid #ccc",
//   fontSize: 14,
// };

// const button = {
//   padding: 12,
//   borderRadius: 8,
//   border: "none",
//   background: "#ec4899",
//   color: "#fff",
//   fontWeight: 600,
//   cursor: "pointer",
// };

// const footerText = {
//   fontSize: 14,
//   textAlign: "center",
//   marginTop: 8,
// };

// const link = {
//   color: "#ec4899",
//   cursor: "pointer",
//   fontWeight: 600,
// };

// const errorStyle = {
//   color: "red",
//   fontSize: 14,
//   marginTop: 4,
// };

// const resetText = {
//   fontSize: 13,
//   color: "#be185d",
//   textAlign: "center",
//   cursor: "pointer",
//   marginTop: 4,
// };

// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//     setError("");
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();
//     setError("");

//     const success = login(email, password);

//     if (!success) {
//       setError("Invalid email or password");
//       return;
//     }

//     navigate("/home");
//   };

//   return (
//     <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
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
//           pointerEvents: "none",
//         }}
//       >
//         <source src="/sunsets/sunset.mp4" type="video/mp4" />
//       </video>

//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(0,0,0,0.6)",
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       <div style={{ ...container, position: "relative", zIndex: 2 }}>
//         <form onSubmit={handleSubmit} style={form} autoComplete="off">
//           <input type="text" name="fakeusernameremembered" style={{ display: "none" }} />
//           <input type="password" name="fakepasswordremembered" style={{ display: "none" }} />

//           <h2 style={title}>Welcome Back</h2>
//           <p style={subtitle}>
//             Login to access the Capturing Memories: Sunsets
//           </p>

//           <input
//             type="email"
//             name="user_login_email_x92"
//             autoComplete="off"
//             inputMode="email"
//             spellCheck={false}
//             placeholder="Email"
//             value={email}
//             onChange={e => {
//               setEmail(e.target.value);
//               setError("");
//             }}
//             style={input}
//             required
//           />

//           <input
//             type="password"
//             name="user_login_pass_x92"
//             autoComplete="new-password"
//             spellCheck={false}
//             placeholder="Password"
//             value={password}
//             onChange={e => {
//               setPassword(e.target.value);
//               setError("");
//             }}
//             style={input}
//             required
//           />

//           {error && <p style={errorStyle}>{error}</p>}

//           <button type="submit" style={button}>
//             Login
//           </button>

//           <p style={resetText} onClick={() => navigate("/reset-password")}>
//             Forgot password?
//           </p>

//           <p style={footerText}>
//             Don't have an account?{" "}
//             <span style={link} onClick={() => navigate("/register")}>
//               Create one
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

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

// const title = {
//   color: "#be185d",
//   fontSize: 28,
//   marginBottom: 4,
//   textAlign: "center",
//   fontWeight: "bold",
// };

// const subtitle = {
//   color: "#9d174d",
//   marginBottom: 12,
//   textAlign: "center",
// };

// const input = {
//   padding: 10,
//   borderRadius: 6,
//   border: "1px solid #ccc",
//   fontSize: 14,
// };

// const button = {
//   padding: 12,
//   borderRadius: 8,
//   border: "none",
//   background: "#ec4899",
//   color: "#fff",
//   fontWeight: 600,
//   cursor: "pointer",
// };

// const footerText = {
//   fontSize: 14,
//   textAlign: "center",
//   marginTop: 8,
// };

// const link = {
//   color: "#ec4899",
//   cursor: "pointer",
//   fontWeight: 600,
// };

// const errorStyle = {
//   color: "red",
//   fontSize: 14,
//   marginTop: 4,
// };

// const resetText = {
//   fontSize: 13,
//   color: "#be185d",
//   textAlign: "center",
//   cursor: "pointer",
//   marginTop: 4,
// };

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setError("");
  }, []);

  // Allow free typing & pasting
  const handleEmailChange = e => {
    setEmail(e.target.value);
    setError("");
  };

  // Add @gmail.com only if missing
  const normalizeEmail = value => {
    if (!value) return "";
    return value.includes("@") ? value : `${value}@gmail.com`;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");

    const finalEmail = normalizeEmail(email);

    const success = login(finalEmail, password);

    if (!success) {
      setError("Invalid email or password");
      return;
    }

    navigate("/home");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
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

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div style={{ ...container, position: "relative", zIndex: 2 }}>
        <form onSubmit={handleSubmit} style={form} autoComplete="off">
          <input type="text" style={{ display: "none" }} />
          <input type="password" style={{ display: "none" }} />

          <h2 style={title}>Welcome Back</h2>
          <p style={subtitle}>
            Login to access the Capturing Memories: Sunsets
          </p>

          <input
            type="text"
            inputMode="email"
            spellCheck={false}
            placeholder="Email or username"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmail(normalizeEmail(email))}
            style={input}
            required
          />

          <input
            type="password"
            autoComplete="new-password"
            spellCheck={false}
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
              setError("");
            }}
            style={input}
            required
          />

          {error && <p style={errorStyle}>{error}</p>}

          <button type="submit" style={button}>
            Login
          </button>

          <p style={resetText} onClick={() => navigate("/reset-password")}>
            Forgot password?
          </p>

          <p style={footerText}>
            Don't have an account?{" "}
            <span style={link} onClick={() => navigate("/register")}>
              Create one
            </span>
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

const subtitle = {
  color: "#9d174d",
  marginBottom: 12,
  textAlign: "center",
};

const input = {
  padding: 10,
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 14,
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
  fontSize: 14,
  textAlign: "center",
  marginTop: 8,
};

const link = {
  color: "#ec4899",
  cursor: "pointer",
  fontWeight: 600,
};

const errorStyle = {
  color: "red",
  fontSize: 14,
  marginTop: 4,
};

const resetText = {
  fontSize: 13,
  color: "#be185d",
  textAlign: "center",
  cursor: "pointer",
  marginTop: 4,
};
