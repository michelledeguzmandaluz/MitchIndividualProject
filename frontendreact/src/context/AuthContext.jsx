// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   /* ================= LOGIN ================= */
//   const login = (email, password) => {
//     const storedUser = JSON.parse(localStorage.getItem(email));

//     if (!storedUser) return false;
//     if (storedUser.password !== password) return false;

//     setUser(storedUser);
//     localStorage.setItem("user", JSON.stringify(storedUser));
//     return true;
//   };

//   /* ================= REGISTER ================= */
//   const register = (name, email, password) => {
//     const newUser = { name, email, password };

//     localStorage.setItem(email, JSON.stringify(newUser));
//     localStorage.setItem("user", JSON.stringify(newUser));
//     setUser(newUser);
//   };

//   /* ================= RESET PASSWORD ================= */
//   const resetPassword = (email, newPassword) => {
//     const storedUser = JSON.parse(localStorage.getItem(email));

//     if (!storedUser) return false;

//     const updatedUser = {
//       ...storedUser,
//       password: newPassword,
//     };

//     // 🔥 overwrite user record
//     localStorage.setItem(email, JSON.stringify(updatedUser));

//     // 🔄 update session user if same email
//     const currentUser = JSON.parse(localStorage.getItem("user"));
//     if (currentUser?.email === email) {
//       localStorage.setItem("user", JSON.stringify(updatedUser));
//       setUser(updatedUser);
//     }

//     return true;
//   };

//   /* ================= LOGOUT ================= */
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         register,
//         resetPassword,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (!storedUser) return false;
    if (storedUser.password !== password) return false;

    setUser(storedUser);
    localStorage.setItem("user", JSON.stringify(storedUser));
    return true;
  };

  const register = (name, email, password) => {
    const newUser = { name, email, password };

    localStorage.setItem(email, JSON.stringify(newUser));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const resetPassword = (email, newPassword) => {
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (!storedUser) return false;

    const updatedUser = {
      ...storedUser,
      password: newPassword,
    };

    localStorage.setItem(email, JSON.stringify(updatedUser));

    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser?.email === email) {
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    }

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
