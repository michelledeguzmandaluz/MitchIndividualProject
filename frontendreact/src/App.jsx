import { useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import GalleryView from "./GalleryView";
import PhotoGallery from "./PhotoGallery";
import AboutCreator from "./AboutCreator";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

import { useAuth } from "./context/AuthContext";

/* 🔐 Protected Route */
function ProtectedRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/" replace />;
}

/* 🧱 Layout */
function AppLayout({ user, logout }) {
  return (
    <>
      <Header user={user} onLogout={logout} />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  const { user, logout } = useAuth();
  const isAdmin = true;

  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem("photos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photos));
  }, [photos]);

  const addPhoto = (photo) => {
    setPhotos((prev) => [
      ...prev,
      {
        ...photo,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        deleted: false,
      },
    ]);
  };

  const updatePhoto = (updated) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  const deletePhoto = (id) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, deleted: true } : p))
    );
  };

  const permanentlyDeletePhoto = (id) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Routes>
      {/* 🌅 PUBLIC */}
      <Route path="/" element={user ? <Navigate to="/home" /> : <Welcome />} />
      <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/home" /> : <Register />}
      />
      <Route
        path="/reset-password"
        element={user ? <Navigate to="/home" /> : <ResetPassword />}
      />

      {/* 🔐 PROTECTED */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout user={user} logout={logout} />}>
          <Route
            path="/home"
            element={<HomePage photos={photos.filter((p) => !p.deleted)} />}
          />
          <Route
            path="/gallery"
            element={<GalleryView photos={photos.filter((p) => !p.deleted)} />}
          />
          <Route
            path="/album"
            element={
              <PhotoGallery
                photos={photos}
                addPhoto={isAdmin ? addPhoto : null}
                updatePhoto={isAdmin ? updatePhoto : null}
                deletePhoto={isAdmin ? deletePhoto : null}
                permanentlyDeletePhoto={
                  isAdmin ? permanentlyDeletePhoto : null
                }
              />
            }
          />
          <Route path="/about" element={<AboutCreator />} />
        </Route>
      </Route>

      {/* ❌ FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}



