// import { useEffect } from "react";

// export default function AboutCreator() {
//   return (
//     <>
//       {/* ✨ STYLES */}
//       <style>{`
//         @keyframes pulse {
//           0% { box-shadow: 0 0 0 rgba(236,72,153,0.5); }
//           50% { box-shadow: 0 0 35px rgba(236,72,153,0.7); }
//           100% { box-shadow: 0 0 0 rgba(236,72,153,0.5); }
//         }

//         .social-icon {
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           border-radius: 50%;
//         }

//         .social-icon:hover {
//           transform: scale(1.15);
//           box-shadow: 0 0 20px rgba(236,72,153,0.8);
//         }
//       `}</style>

//       {/* 🌸 GLASS CARD */}
//       <div
//         className="card"
//         style={{
//           maxWidth: 640,
//           margin: "2rem auto",
//           textAlign: "center",
//           padding: "2.5rem",
//           background: "rgba(255, 182, 193, 0.35)",
//           backdropFilter: "blur(14px)",
//           borderRadius: 28,
//           border: "1px solid rgba(255,255,255,0.3)",
//           boxShadow: "0 25px 60px rgba(236,72,153,0.35)"
//         }}
//       >
//         {/* 👩‍🎨 PROFILE IMAGE */}
//         <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
//           <img
//             src="/images/mine.jpg"
//             alt="Michelle D. Daluz"
//             style={{
//               width: 280,
//               height: 280,
//               objectFit: "cover",
//               borderRadius: "50%",
//               border: "6px solid #ec4899",
//               animation: "pulse 3s infinite"
//             }}
//           />
//         </div>

//         {/* 👑 NAME + VERIFIED */}
//         <h2
//           style={{
//             fontSize: "2rem",
//             fontWeight: 900,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: 8,
//             background: "linear-gradient(45deg, #ec4899, #db2777)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent"
//           }}
//         >
//           Michelle D. Daluz
//           <span
//             title="Verified Creator"
//             style={{
//               fontSize: "1.2rem",
//               color: "#3b82f6"
//             }}
//           >
            
//           </span>
//         </h2>

//         <p style={{ color: "#9d174d", marginBottom: "1.6rem" }}>
//           Photographer · Sunset lover
//         </p>

//         {/* 🔗 SOCIAL ICONS */}
//         <div style={{ display: "flex", justifyContent: "center", gap: 26 }}>
//           <a href="https://www.facebook.com/share/18XAptD4Hp/" target="_blank" rel="noreferrer">
//             <img src="/icons/facebook.jpg" width="44" className="social-icon" />
//           </a>

//           <a href="https://x.com/nilaganghotdogx?t=oV7DyNOTHAgSqC4q6ONzsQ&s=09" target="_blank" rel="noreferrer">
//             <img src="/icons/twitter.jpg" width="48" className="social-icon" />
//           </a>

//           <a href="https://www.instagram.com/zup_justmitch?igsh=aG1xOGl0enhuYTU4" target="_blank" rel="noreferrer">
//             <img src="/icons/instagram.jpg" width="44" className="social-icon" />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect } from "react";

export default function AboutCreator() {

  useEffect(() => {
    console.log("👩‍🎨 About Creator page loaded");
  }, []);

  return (
    <>
      {/* ✨ STYLES */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 rgba(236,72,153,0.5); }
          50% { box-shadow: 0 0 35px rgba(236,72,153,0.7); }
          100% { box-shadow: 0 0 0 rgba(236,72,153,0.5); }
        }

        .social-icon {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 50%;
        }

        .social-icon:hover {
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(236,72,153,0.8);
        }
      `}</style>

      {/* 🌸 GLASS CARD */}
      <div
        className="card"
        style={{
          maxWidth: 640,
          width: "90%",               // ✅ responsive width
          margin: "2rem auto",
          textAlign: "center",
          padding: "clamp(1.5rem, 5vw, 2.5rem)", // ✅ responsive padding
          background: "rgba(255, 182, 193, 0.35)",
          backdropFilter: "blur(14px)",
          borderRadius: 28,
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 25px 60px rgba(236,72,153,0.35)"
        }}
      >
        {/* 👩‍🎨 PROFILE IMAGE */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <img
            src="/images/mine.jpg"
            alt="Michelle D. Daluz"
            style={{
              width: "clamp(180px, 50vw, 280px)",  // ✅ responsive image
              height: "clamp(180px, 50vw, 280px)",
              objectFit: "cover",
              borderRadius: "50%",
              border: "6px solid #ec4899",
              animation: "pulse 3s infinite"
            }}
          />
        </div>

        {/* 👑 NAME */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2rem)", // ✅ responsive text
            fontWeight: 900,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            background: "linear-gradient(45deg, #ec4899, #db2777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Michelle D. Daluz
        </h2>

        <p
          style={{
            color: "#9d174d",
            marginBottom: "1.6rem",
            fontSize: "clamp(0.9rem, 3.5vw, 1rem)" // ✅ responsive subtitle
          }}
        >
          Photographer · Sunset lover
        </p>

        {/* 🔗 SOCIAL ICONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(16px, 6vw, 26px)", // ✅ responsive gap
            flexWrap: "wrap"              // ✅ mobile wrap
          }}
        >
          <a
            href="https://www.facebook.com/share/18XAptD4Hp/"
            target="_blank"
            rel="noreferrer"
            onClick={() => console.log("🔗 Facebook clicked")}
          >
            <img src="/icons/facebook.jpg" width="44" className="social-icon" />
          </a>

          <a
            href="https://x.com/nilaganghotdogx?t=oV7DyNOTHAgSqC4q6ONzsQ&s=09"
            target="_blank"
            rel="noreferrer"
            onClick={() => console.log("🔗 Twitter clicked")}
          >
            <img src="/icons/twitter.jpg" width="48" className="social-icon" />
          </a>

          <a
            href="https://www.instagram.com/zup_justmitch?igsh=aG1xOGl0enhuYTU4"
            target="_blank"
            rel="noreferrer"
            onClick={() => console.log("🔗 Instagram clicked")}
          >
            <img src="/icons/instagram.jpg" width="44" className="social-icon" />
          </a>
        </div>
      </div>
    </>
  );
}Z
