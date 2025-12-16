import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-bold text-pink-600"
        >
          PhotoGallery
        </h1>

        <div className="flex items-center gap-4">
          {user ? (
            <button
              onClick={logout}
              className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-gray-600 hover:text-pink-600"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}



