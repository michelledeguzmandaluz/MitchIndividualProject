// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     const success = login(email, password);
//     if (!success) {
//       setError("Invalid email or password");
//     } else {
//       navigate("/");
//     }
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
//         <form onSubmit={handleSubmit} style={form}>
//           <h2 style={title}>Welcome Back</h2>
//           <p style={subtitle}>Login to access the Capturing Memories: Sunsets</p>

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={e => { setEmail(e.target.value); setError(""); }}
//             style={input}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => { setPassword(e.target.value); setError(""); }}
//             style={input}
//             required
//           />

//           {error && <p style={errorStyle}>{error}</p>}

//           <button type="submit" style={button}>Login</button>

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

// /* STYLES (unchanged) */
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

// const title = { color: "#be185d",
//   fontSize: 28,
//   marginBottom: 4,
//   textAlign: "center",
//   fontWeight: "bold", };
// const subtitle = { color: "#9d174d", marginBottom: 12, textAlign:"center"};
// const input = { padding: 10, borderRadius: 6, border: "1px solid #ccc", fontSize: 14 };
// const button = { padding: 12, borderRadius: 8, border: "none", background: "#ec4899", color: "#fff", fontWeight: 600, cursor: "pointer" };
// const footerText = { fontSize: 14, textAlign: "center", marginTop: 8 };
// const link = { color: "#ec4899", cursor: "pointer", fontWeight: 600 };
// const errorStyle = { color: "red", fontSize: 14, marginTop: 4 };

// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // 🔥 Clear fields every time page loads
//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//     setError("");
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();

//     const success = login(email, password);

//     if (!success) {
//       setError("Invalid email or password");
//     } else {
//       // 🔥 Clear after login
//       setEmail("");
//       setPassword("");
//       navigate("/");
//     }
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
//         <form onSubmit={handleSubmit} style={form} autoComplete="off">
//           <h2 style={title}>Welcome Back</h2>
//           <p style={subtitle}>Login to access the Capturing Memories: Sunsets</p>

//           <input
//             type="email"
//             name="email"
//             autoComplete="off"
//             placeholder="Email"
//             value={email}
//             onChange={e => { setEmail(e.target.value); setError(""); }}
//             style={input}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             autoComplete="new-password"
//             placeholder="Password"
//             value={password}
//             onChange={e => { setPassword(e.target.value); setError(""); }}
//             style={input}
//             required
//           />

//           {error && <p style={errorStyle}>{error}</p>}

//           <button type="submit" style={button}>Login</button>

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

// /* STYLES */
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

// const subtitle = { color: "#9d174d", marginBottom: 12, textAlign: "center" };
// const input = { padding: 10, borderRadius: 6, border: "1px solid #ccc", fontSize: 14 };
// const button = { padding: 12, borderRadius: 8, border: "none", background: "#ec4899", color: "#fff", fontWeight: 600, cursor: "pointer" };
// const footerText = { fontSize: 14, textAlign: "center", marginTop: 8 };
// const link = { color: "#ec4899", cursor: "pointer", fontWeight: 600 };
// const errorStyle = { color: "red", fontSize: 14, marginTop: 4 };

// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login, resetPassword } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   // 🔥 Clear fields every time page loads
//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//     setError("");
//     setMessage("");
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();

//     const success = login(email, password);

//     if (!success) {
//       setError("Invalid email or password");
//     } else {
//       setEmail("");
//       setPassword("");
//       navigate("/");
//     }
//   };

//   // 🔑 RESET PASSWORD
//   const handleResetPassword = () => {
//     if (!email) {
//       setError("Please enter your email to reset password");
//       return;
//     }

//     const success = resetPassword(email);

//     if (success) {
//       setMessage("Password reset link sent to your email");
//       setError("");
//     } else {
//       setError("Email not found");
//       setMessage("");
//     }
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
//         <form onSubmit={handleSubmit} style={form} autoComplete="off">
//           <h2 style={title}>Welcome Back</h2>
//           <p style={subtitle}>Login to access the Capturing Memories: Sunsets</p>

//           <input
//             type="email"
//             name="email"
//             autoComplete="off"
//             placeholder="Email"
//             value={email}
//             onChange={e => { setEmail(e.target.value); setError(""); setMessage(""); }}
//             style={input}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             autoComplete="new-password"
//             placeholder="Password"
//             value={password}
//             onChange={e => { setPassword(e.target.value); setError(""); }}
//             style={input}
//             required
//           />

//           {error && <p style={errorStyle}>{error}</p>}
//           {message && <p style={successStyle}>{message}</p>}

//           <button type="submit" style={button}>Login</button>

//           {/* 🔑 RESET PASSWORD */}
//           <p style={resetText} onClick={handleResetPassword}>
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

// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login, resetPassword } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [resetting, setResetting] = useState(false);

//   // 🔥 Clear fields every time page loads
//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//     setError("");
//     setMessage("");
//     setResetting(false);
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();

//     setError("");
//     setMessage("");

//     const success = login(email, password);

//     if (!success) {
//       setError("Invalid email or password");
//       return;
//     }

//     setEmail("");
//     setPassword("");
//     navigate("/");
//   };

//   // 🔑 RESET PASSWORD
//   const handleResetPassword = () => {
//     if (!email || resetting) return;

//     setResetting(true);
//     setError("");
//     setMessage("");

//     const success = resetPassword(email);

//     if (success) {
//       setMessage("Password reset link sent to your email");
//     } else {
//       setError("Email not found");
//     }

//     setResetting(false);
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
//         <form onSubmit={handleSubmit} style={form} autoComplete="off">
//           <h2 style={title}>Welcome Back</h2>
//           <p style={subtitle}>
//             Login to access the Capturing Memories: Sunsets
//           </p>

//           <input
//             type="email"
//             name="email"
//             autoComplete="off"
//             placeholder="Email"
//             value={email}
//             onChange={e => {
//               setEmail(e.target.value);
//               setError("");
//               setMessage("");
//             }}
//             style={input}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             autoComplete="new-password"
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
//           {message && <p style={successStyle}>{message}</p>}

//           <button type="submit" style={button}>
//             Login
//           </button>

//           {/* 🔑 RESET PASSWORD */}
//           <p
//             style={{
//               ...resetText,
//               opacity: resetting ? 0.6 : 1,
//               pointerEvents: resetting ? "none" : "auto",
//             }}
//             onClick={handleResetPassword}
//           >
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

// const successStyle = {
//   color: "green",
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

//   // 🔥 Clear fields every time page loads
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

//     setEmail("");
//     setPassword("");
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
//         <form onSubmit={handleSubmit} style={form} autoComplete="off">
//           <h2 style={title}>Welcome Back</h2>
//           <p style={subtitle}>
//             Login to access the Capturing Memories: Sunsets
//           </p>

//           <input
//             type="email"
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

//           {/* 🔑 RESET PASSWORD → PAGE */}
//           <p
//             style={resetText}
//             onClick={() => navigate("/reset-password")}
//           >
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

//   // 🔥 Clear fields every time page loads
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

//     setEmail("");
//     setPassword("");
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
//         <form onSubmit={handleSubmit} style={form} autoComplete="off">

//           {/* 🧠 Autofill blockers */}
//           <input type="text" style={{ display: "none" }} />
//           <input type="password" style={{ display: "none" }} />

//           <h2 style={title}>Welcome Back</h2>
//           <p style={subtitle}>
//             Login to access the Capturing Memories: Sunsets
//           </p>

//           <input
//             type="email"
//             name="login-email"
//             autoComplete="off"
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
//             name="login-password"
//             autoComplete="new-password"
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

//           {/* 🔑 RESET PASSWORD → PAGE */}
//           <p
//             style={resetText}
//             onClick={() => navigate("/reset-password")}
//           >
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

  const handleSubmit = e => {
    e.preventDefault();
    setError("");

    const success = login(email, password);

    if (!success) {
      setError("Invalid email or password");
      return;
    }

    navigate("/home");
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

      {/* 🎯 LOGIN FORM */}
      <div style={{ ...container, position: "relative", zIndex: 2 }}>
        <form
          onSubmit={handleSubmit}
          style={form}
          autoComplete="off"
        >
          {/* 🧠 HARD AUTOFILL BLOCKERS */}
          <input type="text" name="fakeusernameremembered" style={{ display: "none" }} />
          <input type="password" name="fakepasswordremembered" style={{ display: "none" }} />

          <h2 style={title}>Welcome Back</h2>
          <p style={subtitle}>
            Login to access the Capturing Memories: Sunsets
          </p>

          <input
            type="email"
            name="user_login_email_x92"
            autoComplete="off"
            inputMode="email"
            spellCheck={false}
            placeholder="Email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setError("");
            }}
            style={input}
            required
          />

          <input
            type="password"
            name="user_login_pass_x92"
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