// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);

//   // 🔍 Available in console
//   useEffect(() => {
//     console.log("Current user:", user);
//   }, [user]);

//   const handleLogout = () => {
//     console.log("Logging out user:", user);
//     logout();
//     setOpen(false);
//   };

//   const goTo = (path) => {
//     console.log("Navigate to:", path);
//     navigate(path);
//     setOpen(false);
//   };

//   return (
//     <header className="border-b bg-white">
//       <nav className="mx-auto max-w-6xl px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* LOGO */}
//           <h1
//             onClick={() => goTo("/")}
//             className="cursor-pointer text-xl font-bold text-pink-600"
//           >
//             PhotoGallery
//           </h1>

//           {/* DESKTOP MENU */}
//           <div className="hidden items-center gap-4 md:flex">
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <button
//                   onClick={() => goTo("/login")}
//                   className="text-sm text-gray-600 hover:text-pink-600"
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => goTo("/register")}
//                   className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
//                 >
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => {
//               console.log("Menu toggled:", !open);
//               setOpen(!open);
//             }}
//           >
//             ☰
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="mt-4 flex flex-col gap-3 md:hidden">
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <button
//                   onClick={() => goTo("/login")}
//                   className="text-left text-sm text-gray-600"
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => goTo("/register")}
//                   className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white"
//                 >
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Current user:", user);
  }, [user]);

  const handleLogout = () => {
    console.log("Logging out user:", user);
    logout();
    setOpen(false);
  };

  const goTo = (path) => {
    console.log("Navigate to:", path);
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <h1
            onClick={() => goTo("/")}
            className="cursor-pointer text-xl font-bold text-pink-600"
          >
            PhotoGallery
          </h1>

          <div className="hidden items-center gap-4 md:flex">
            {user ? (
              <button
                onClick={handleLogout}
                className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => goTo("/login")}
                  className="text-sm text-gray-600 hover:text-pink-600"
                >
                  Login
                </button>
                <button
                  onClick={() => goTo("/register")}
                  className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => {
              console.log("Menu toggled:", !open);
              setOpen(!open);
            }}
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="mt-4 flex flex-col gap-3 md:hidden">
            {user ? (
              <button
                onClick={handleLogout}
                className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => goTo("/login")}
                  className="text-left text-sm text-gray-600"
                >
                  Login
                </button>
                <button
                  onClick={() => goTo("/register")}
                  className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}


