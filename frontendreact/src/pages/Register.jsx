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

//     // simple validation example
//     if (!name || !email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     register(name, email, password);
//     navigate("/"); // redirect to home page
//   };

//   return (
//     <div style={container}>
//       <form onSubmit={handleSubmit} style={form}>
//         <h2 style={title}>Create Account</h2>
//         <p style={subtitle}>Sign up to access the gallery</p>

//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={e => { setName(e.target.value); setError(""); }}
//           style={input}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => { setEmail(e.target.value); setError(""); }}
//           style={input}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => { setPassword(e.target.value); setError(""); }}
//           style={input}
//           required
//         />

//         {error && <p style={errorStyle}>{error}</p>}

//         <button type="submit" style={button}>Create Account</button>

//         <p style={footerText}>
//           Already have an account?{" "}
//           <span style={link} onClick={() => navigate("/login")}>
//             Login
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

// // Styles
// const container = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   background: "linear-gradient(135deg, #fce7f3, #fbcfe8)"
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

// const title = { color: "#be185d", fontSize: 28, marginBottom: 4 };
// const subtitle = { color: "#9d174d", marginBottom: 12 };
// const input = { padding: 10, borderRadius: 6, border: "1px solid #ccc", fontSize: 14 };
// const button = { padding: 12, borderRadius: 8, border: "none", background: "#ec4899", color: "#fff", fontWeight: 600, cursor: "pointer" };
// const footerText = { fontSize: 14, textAlign: "center", marginTop: 8 };
// const link = { color: "#ec4899", cursor: "pointer", fontWeight: 600 };
// const errorStyle = { color: "red", fontSize: 14, marginTop: 4 };

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
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8"
//       >
//         <h2 className="mb-1 text-center text-2xl font-bold text-pink-700 sm:text-3xl">
//           Create Account
//         </h2>

//         <p className="mb-6 text-center text-sm text-pink-600 sm:text-base">
//           Sign up to access the gallery
//         </p>

//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={e => {
//               setName(e.target.value);
//               setError("");
//             }}
//             required
//             className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={e => {
//               setEmail(e.target.value);
//               setError("");
//             }}
//             required
//             className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => {
//               setPassword(e.target.value);
//               setError("");
//             }}
//             required
//             className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
//           />
//         </div>

//         {error && (
//           <p className="mt-3 text-center text-sm text-red-500">
//             {error}
//           </p>
//         )}

//         <button
//           type="submit"
//           className="mt-6 w-full rounded-lg bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600 active:scale-[0.98]"
//         >
//           Create Account
//         </button>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/login")}
//             className="cursor-pointer font-semibold text-pink-600 hover:underline"
//           >
//             Login
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

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

  const inputStyle = `
    w-full
    rounded-2xl
    bg-white/90
    px-6 py-4
    text-lg
    text-gray-800
    shadow-md
    border-2 border-pink-400
    placeholder-gray-400
    focus:outline-none
    focus:ring-2 focus:ring-pink-400
  `;

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    register(name, email, password);
    navigate("/");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🌅 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/sunsets/sunset.mp4" type="video/mp4" />
      </video>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🎯 REGISTER CARD */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-3xl backdrop-blur-md p-8"
        >
          <div className="h-12" />

          <h2 className="mb-2 text-center text-3xl font-extrabold text-white">
            Create Account
          </h2>
          
          <p className="mb-12 text-center text-sm text-gray-300">
            Sign up to access the gallery
          </p>
{/* SPACER */}
          <div className="h-12" />
          <div className="space-y-8">
            {/* NAME */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => {
                setName(e.target.value);
                setError("");
              }}
              required
              className={inputStyle}
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setError("");
              }}
              required
              className={inputStyle}
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                setError("");
              }}
              required
              className={inputStyle}
            />
          </div>

          {error && (
            <p className="mt-6 text-center text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="h-12" />

          <button
            type="submit"
            className="
              w-full
              rounded-full
              bg-gradient-to-r from-pink-500 to-fuchsia-600
              py-3
              font-semibold
              text-white
              shadow-xl
              transition
              hover:scale-105
            "
          >
            Create Account
          </button>

          <div className="h-12" />

          <p className="text-center text-sm text-gray-300">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer font-semibold text-pink-400 hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}


