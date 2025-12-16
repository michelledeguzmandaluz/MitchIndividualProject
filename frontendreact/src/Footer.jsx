// import React from "react";

// export default function Footer({ onNavigate }) {
//   return (
//     <footer
//       style={{
//         margin: "2rem 1rem 1rem",
//         padding: "2rem",
//         borderRadius: 32,
//         background: "linear-gradient(135deg, #ec4899, #f472b6, #f9a8d4)",
//         boxShadow: "0 25px 60px rgba(236,72,153,0.45)",
//         color: "white",
//         backdropFilter: "blur(14px)"
//       }}
//     >
//       {/* 🌸 TOP */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "2rem",
//           marginBottom: "1.5rem"
//         }}
//       >
//         {/* 🌸 BRAND */}
//         <div>
//           <h3 style={{ fontWeight: 900, marginBottom: 8 }}>
//             Capturing Memories
//           </h3>
//           <p style={{ fontSize: 13, opacity: 0.95, lineHeight: 1.6 }}>
//             Preserving sunsets, moments, and emotions through photography.
//           </p>
//         </div>

//         {/* 🔗 QUICK LINKS */}
//         <div style={{ textAlign: "center" }}>
//           <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Quick Links</h4>

//           <ul
//             style={{
//               listStyle: "none",
//               padding: 0,
//               fontSize: 13,
//               display: "flex",
//               flexDirection: "column",
//               gap: 8,
//               alignItems: "center"
//             }}
//           >
//             <li><button onClick={() => onNavigate("/")} style={linkStyle}>Home</button></li>
//             <li><button onClick={() => onNavigate("/gallery")} style={linkStyle}>Gallery</button></li>
//             <li><button onClick={() => onNavigate("/album")} style={linkStyle}>Album</button></li>
//             <li><button onClick={() => onNavigate("/about")} style={linkStyle}>About Creator</button></li>
//           </ul>
//         </div>

//         {/* 🌐 SOCIAL */}
//         <div style={{ textAlign: "center" }}>
//           <h4 style={{ fontWeight: 700, marginBottom: 12 }}>Follow Me</h4>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 14
//             }}
//           >
//             {["facebook", "twitter", "instagram"].map(name => (
//               <a
//                 key={name}
//                 href={`https://${name}.com/YOUR_USERNAME`}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <img
//                   src={`/icons/${name}.jpg`}
//                   width="32"
//                   style={iconStyle}
//                   onMouseOver={e => {
//                     e.currentTarget.style.transform = "scale(1.15)";
//                     e.currentTarget.style.boxShadow =
//                       "0 0 15px rgba(255,255,255,0.8)";
//                   }}
//                   onMouseOut={e => {
//                     e.currentTarget.style.transform = "scale(1)";
//                     e.currentTarget.style.boxShadow = "none";
//                   }}
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 🌸 DIVIDER */}
//       <div
//         style={{
//           height: 1,
//           background: "rgba(255,255,255,0.35)",
//           marginBottom: "1rem"
//         }}
//       />

//       {/* 🌸 BOTTOM */}
//       <div
//         style={{
//           textAlign: "center",
//           fontSize: 12,
//           opacity: 0.9
//         }}
//       >
//         © {new Date().getFullYear()} Capturing Memories: Sunsets
//       </div>
//     </footer>
//   );
// }

// /* 🌸 STYLES */
// const linkStyle = {
//   background: "none",
//   border: "none",
//   color: "white",
//   cursor: "pointer",
//   fontWeight: 500,
//   padding: 0,
//   transition: "opacity 0.3s, transform 0.3s"
// };

// const iconStyle = {
//   cursor: "pointer",
//   transition: "transform 0.3s, box-shadow 0.3s",
//   borderRadius: "50%"
// };

import React, { useEffect } from "react";

export default function Footer({ onNavigate }) {

  useEffect(() => {
    console.log("🦶 Footer mounted");
  }, []);

  return (
    <footer
      style={{
        margin: "2rem 1rem 1rem",
        padding: "clamp(1.5rem, 5vw, 2rem)", // ✅ responsive padding
        borderRadius: 32,
        background: "linear-gradient(135deg, #ec4899, #f472b6, #f9a8d4)",
        boxShadow: "0 25px 60px rgba(236,72,153,0.45)",
        color: "white",
        backdropFilter: "blur(14px)",
        maxWidth: 1200,       // ✅ responsive max width
        marginInline: "auto"  // ✅ center on wide screens
      }}
    >
      {/* 🌸 TOP */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "clamp(1.5rem, 4vw, 2rem)", // ✅ responsive gap
          marginBottom: "1.5rem"
        }}
      >
        {/* 🌸 BRAND */}
        <div>
          <h3 style={{ fontWeight: 900, marginBottom: 8 }}>
            Capturing Memories
          </h3>
          <p
            style={{
              fontSize: "clamp(12px, 3.5vw, 13px)", // ✅ responsive text
              opacity: 0.95,
              lineHeight: 1.6
            }}
          >
            Preserving sunsets, moments, and emotions through photography.
          </p>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div style={{ textAlign: "center" }}>
          <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Quick Links</h4>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "clamp(12px, 3.5vw, 13px)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignItems: "center"
            }}
          >
            <li>
              <button
                onClick={() => {
                  console.log("➡️ Footer: Home");
                  onNavigate("/");
                }}
                style={linkStyle}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  console.log("➡️ Footer: Gallery");
                  onNavigate("/gallery");
                }}
                style={linkStyle}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  console.log("➡️ Footer: Album");
                  onNavigate("/album");
                }}
                style={linkStyle}
              >
                Album
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  console.log("➡️ Footer: About Creator");
                  onNavigate("/about");
                }}
                style={linkStyle}
              >
                About Creator
              </button>
            </li>
          </ul>
        </div>

        {/* 🌐 SOCIAL */}
        <div style={{ textAlign: "center" }}>
          <h4 style={{ fontWeight: 700, marginBottom: 12 }}>Follow Me</h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(10px, 4vw, 14px)" // ✅ responsive spacing
            }}
          >
            {["facebook", "twitter", "instagram"].map(name => (
              <a
                key={name}
                href={`https://${name}.com/YOUR_USERNAME`}
                target="_blank"
                rel="noreferrer"
                onClick={() => console.log(`🔗 Footer social: ${name}`)}
              >
                <img
                  src={`/icons/${name}.jpg`}
                  width="32"
                  style={iconStyle}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(255,255,255,0.8)";
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🌸 DIVIDER */}
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.35)",
          marginBottom: "1rem"
        }}
      />

      {/* 🌸 BOTTOM */}
      <div
        style={{
          textAlign: "center",
          fontSize: "clamp(11px, 3vw, 12px)", // ✅ responsive text
          opacity: 0.9
        }}
      >
        © {new Date().getFullYear()} Capturing Memories: Sunsets
      </div>
    </footer>
  );
}

/* 🌸 STYLES */
const linkStyle = {
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontWeight: 500,
  padding: 0,
  transition: "opacity 0.3s, transform 0.3s"
};

const iconStyle = {
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  borderRadius: "50%"
};
