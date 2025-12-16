import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password) => {
    // 🔒 DEMO LOGIN (replace with API later)
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (!storedUser || storedUser.password !== password) {
      return false;
    }

    setUser(storedUser);
    localStorage.setItem("user", JSON.stringify(storedUser));
    return true;
  };

  const register = (name, email, password) => {
    const newUser = { name, email, password };

    localStorage.setItem(email, JSON.stringify(newUser));
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
