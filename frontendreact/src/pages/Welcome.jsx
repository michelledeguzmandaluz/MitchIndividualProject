// // import { useNavigate } from "react-router-dom";

// // export default function Welcome() {
// //   const navigate = useNavigate();

// //   return (
// //     <div style={container}>
// //       <div style={card}>
// //         <h1 style={title}>Welcome!</h1>
// //         <p style={subtitle}>
// //           Please login or create an account to access the gallery.
// //         </p>

// //         <div style={{ display: "flex", gap: 16 }}>
// //           <button style={loginButton} onClick={() => navigate("/login")}>
// //             Login
// //           </button>
// //           <button style={registerButton} onClick={() => navigate("/register")}>
// //             Create Account
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ===== Styles =====
// // const container = {
// //   height: "100vh",
// //   display: "flex",
// //   justifyContent: "center",
// //   alignItems: "center",
// //   background: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
// //   fontFamily: "'Poppins', sans-serif"
// // };

// // const card = {
// //   display: "flex",
// //   flexDirection: "column",
// //   alignItems: "center",
// //   gap: 24,
// //   padding: "3rem",
// //   borderRadius: 24,
// //   background: "rgba(255, 255, 255, 0.25)",
// //   backdropFilter: "blur(10px)",
// //   boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
// //   textAlign: "center"
// // };

// // const title = {
// //   fontSize: 36,
// //   fontWeight: 700,
// //   background: "linear-gradient(45deg, #ec4899, #db2777)",
// //   WebkitBackgroundClip: "text",
// //   WebkitTextFillColor: "transparent"
// // };

// // const subtitle = {
// //   fontSize: 16,
// //   color: "#6b21a8"
// // };

// // const loginButton = {
// //   padding: "12px 24px",
// //   fontSize: 16,
// //   fontWeight: 600,
// //   borderRadius: 12,
// //   border: "none",
// //   cursor: "pointer",
// //   background: "linear-gradient(45deg, #ec4899, #db2777)",
// //   color: "#fff",
// //   transition: "0.3s",
// // };

// // const registerButton = {
// //   ...loginButton,
// //   background: "linear-gradient(45deg, #8b5cf6, #6366f1)"
// // };

// import { useNavigate } from "react-router-dom";

// export default function Welcome() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      
//       {/* Navbar */}
//       <header className="flex items-center justify-between px-6 py-4 sm:px-10">
//         <h1 className="text-xl font-bold text-pink-600">
//           PhotoGallery
//         </h1>

//         <div className="hidden gap-4 sm:flex">
//           <button
//             onClick={() => navigate("/login")}
//             className="rounded-lg px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-100"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => navigate("/register")}
//             className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
//           >
//             Sign Up
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center sm:flex-row sm:text-left">
        
//         {/* Left Content */}
//         <div className="flex-1">
//           <h2 className="mb-4 text-3xl font-bold text-gray-800 sm:text-5xl">
//             Store & Share Your  
//             <span className="text-pink-600"> Memories</span>
//           </h2>

//           <p className="mb-8 max-w-lg text-gray-600">
//             Upload, organize, and explore your favorite photos in one
//             beautiful gallery. Create an account to get started.
//           </p>

//           <div className="flex flex-col gap-4 sm:flex-row">
//             <button
//               onClick={() => navigate("/register")}
//               className="rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white hover:bg-pink-600"
//             >
//               Get Started
//             </button>

//             <button
//               onClick={() => navigate("/login")}
//               className="rounded-xl border border-pink-500 px-8 py-3 font-semibold text-pink-500 hover:bg-pink-50"
//             >
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Right Illustration */}
//         <div className="flex-1">
//           <div className="mx-auto h-64 w-full max-w-md rounded-2xl bg-white shadow-lg sm:h-80">
//             <div className="flex h-full items-center justify-center text-gray-400">
//               Gallery Preview
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// import { useNavigate } from "react-router-dom";

// export default function Welcome() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">

//       {/* Decorative Blobs */}
//       <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl" />

//       {/* TOP RIGHT AUTH BUTTONS */}
//       <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
//         <button
//           onClick={() => navigate("/login")}
//           className="rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-pink-600 shadow-md backdrop-blur transition hover:bg-white hover:shadow-lg"
//         >
//           Login
//         </button>

//         <button
//           onClick={() => navigate("/register")}
//           className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-pink-400/50"
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* CENTER HERO */}
//       <main className="flex min-h-screen items-center justify-center px-6">
//         <div className="relative text-center space-y-10 max-w-2xl">

//           {/* Soft Card Glow */}
//           <div className="absolute inset-0 -z-10 rounded-3xl bg-white/30 blur-xl" />

//           {/* Title */}
//           <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
//             Discover Your{" "}
//             <span className="bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
//               Sunset Memories
//             </span>
//           </h1>

        
//           {/* Feature Highlights */}
//           <div className="flex flex-wrap justify-center gap-4">
//             {[
              
//             ].map((item) => (
//               <span
//                 key={item}
//                 className="rounded-full bg-white/80 px-5 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>

//           {/* Spacer */}
//             <div className="h-10" />

//           {/* CTA Buttons */}
//           <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">
//             <button
//               onClick={() => navigate("/register")}
//               className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-12 py-3 text-white font-semibold shadow-xl transition hover:scale-105 hover:shadow-pink-400/50"
//             >
//               Get Started
//             </button>

//             <button
//               onClick={() => navigate("/login")}
//               className="rounded-full border border-pink-500 bg-white/70 px-12 py-3 font-semibold text-pink-600 backdrop-blur transition hover:bg-pink-50"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// import { useNavigate } from "react-router-dom";

// export default function Welcome() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen overflow-hidden">

//       {/* 🌅 VIDEO BACKGROUND (NO BLUR) */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         <source src="/sunsets/sunset.mp4" type="video/mp4" />
//       </video>

//       {/* 🌑 DARK GRADIENT OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

//       {/* TOP RIGHT AUTH BUTTONS */}
//       <div className="absolute top-6 right-6 z-20 flex gap-3">
//         <button
//           onClick={() => navigate("/login")}
//           className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-pink-600 shadow-md hover:bg-white transition"
//         >
//           Login
//         </button>

//         <button
//           onClick={() => navigate("/register")}
//           className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:scale-105 transition"
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* CENTER HERO */}
//       <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
//         <div className="max-w-2xl rounded-3xl bg-black/40 p-14 text-center shadow-2xl backdrop-blur-sm">

//           {/* TITLE */}
//           <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-2xl">
//             Discover Your{" "}
//             <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
//               Sunset Memories
//             </span>
//           </h1>

//           {/* Spacer */}
//            <div className="h-10" />

//           {/* SPACE */}
//           <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
//             <button
//               onClick={() => navigate("/register")}
//               className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-14 py-3 font-semibold text-white shadow-xl hover:scale-105 transition"
//             >
//               Get Started
//             </button>

//             <button
//               onClick={() => navigate("/login")}
//               className="rounded-full border border-white/40 bg-white/20 px-14 py-3 font-semibold text-white hover:bg-white/30 transition"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

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

      {/* 🌑 DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔝 TOP RIGHT AUTH BUTTONS */}
      <div className="absolute top-6 right-6 z-20 flex gap-3">
        <button
          onClick={() => navigate("/login")}
          className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-pink-600 shadow-md transition hover:bg-white"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
        >
          Sign Up
        </button>
      </div>

      {/* 🎯 CENTER HERO CONTENT */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div
          className="
            max-w-2xl
            rounded-3xl
            backdrop-blur-md
            p-14
            text-center
            
          "
        >
          {/* TITLE */}
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
              Sunset Memories
            </span>
          </h1>

          {/* SPACER */}
          <div className="h-12" />

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => navigate("/register")}
              className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-14 py-3 font-semibold text-white shadow-xl transition hover:scale-105"
            >
              Get Started
            </button>

            
          </div>
        </div>
      </main>
    </div>
  );
}





