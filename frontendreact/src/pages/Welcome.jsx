// import { useNavigate } from "react-router-dom";

// export default function Welcome() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen overflow-hidden">

//       {/* 🌅 VIDEO BACKGROUND */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         <source src="/sunsets/sunset.mp4" type="video/mp4" />
//       </video>

//       {/* 🌑 DARK OVERLAY FOR READABILITY */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* 🔝 TOP RIGHT AUTH BUTTONS */}
//       <div className="absolute top-6 right-6 z-20 flex gap-3">
//         <button
//           onClick={() => navigate("/login")}
//           className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-pink-600 shadow-md transition hover:bg-white"
//         >
//           Login
//         </button>

//         <button
//           onClick={() => navigate("/register")}
//           className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* 🎯 CENTER HERO CONTENT */}
//       <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
//         <div
//           className="
//             max-w-2xl
//             rounded-3xl
//             backdrop-blur-md
//             p-14
//             text-center
            
//           "
//         >
//           {/* TITLE */}
//           <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl">
//             Discover Your{" "}
//             <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
//               Sunset Memories
//             </span>
//           </h1>

//           {/* SPACER */}
//           <div className="h-12" />

//           {/* CTA BUTTONS */}
//           <div className="flex flex-col sm:flex-row justify-center gap-6">
//             <button
//               onClick={() => navigate("/register")}
//               className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-14 py-3 font-semibold text-white shadow-xl transition hover:scale-105"
//             >
//               Get Started
//             </button>

            
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("🌅 Welcome page loaded");
  }, []);

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

      {/* 🔝 TOP RIGHT AUTH BUTTONS */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex gap-3">
        <button
          onClick={() => {
            console.log("➡️ Navigate to Login");
            navigate("/login");
          }}
          className="rounded-full bg-white/90 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-pink-600 shadow-md transition hover:bg-white"
        >
          Login
        </button>

        <button
          onClick={() => {
            console.log("➡️ Navigate to Register");
            navigate("/register");
          }}
          className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg transition hover:scale-105"
        >
          Sign Up
        </button>
      </div>

      {/* 🎯 CENTER HERO CONTENT */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6">
        <div
          className="
            max-w-2xl
            rounded-3xl
            backdrop-blur-md
            p-6 sm:p-10 md:p-14
            text-center
          "
        >
          {/* TITLE */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
              Sunset Memories
            </span>
          </h1>

          {/* SPACER */}
          <div className="h-8 sm:h-12" />

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button
              onClick={() => {
                console.log("🚀 Get Started clicked");
                navigate("/register");
              }}
              className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-10 sm:px-14 py-3 font-semibold text-white shadow-xl transition hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}




