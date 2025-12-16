import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import GalleryView from "./GalleryView";
import PhotoGallery from "./PhotoGallery";
import AboutCreator from "./AboutCreator";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { useAuth } from "./context/AuthContext";

// ProtectedRoute wrapper
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" replace />;
}

export default function App() {
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem("photos");
    return saved ? JSON.parse(saved) : [];
  });

  const { user, logout } = useAuth();
  const isAdmin = true;

  // Persist photos in localStorage
  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photos));
  }, [photos]);

  // Add photo
  const addPhoto = photo => {
    setPhotos(prev => [
      ...prev,
      {
        ...photo,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        deleted: false
      }
    ]);
  };

  // Update photo
  const updatePhoto = updated => {
    setPhotos(prev => prev.map(p => (p.id === updated.id ? updated : p)));
  };

  // Delete photo (soft delete)
  const deletePhoto = id => {
    setPhotos(prev => prev.map(p => (p.id === id ? { ...p, deleted: true } : p)));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Welcome />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />

        {/* Protected routes */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <Header user={user} onLogout={logout} />
              <Routes>
                <Route
                  path="/home"
                  element={<HomePage photos={photos.filter(p => !p.deleted)} />}
                />
                <Route
                  path="/gallery"
                  element={<GalleryView photos={photos.filter(p => !p.deleted)} />}
                />
                <Route
                  path="/album"
                  element={
                    <PhotoGallery
                      photos={photos}
                      addPhoto={isAdmin ? addPhoto : null}
                      updatePhoto={isAdmin ? updatePhoto : null}
                      deletePhoto={isAdmin ? deletePhoto : null}
                    />
                  }
                />
                <Route path="/about" element={<AboutCreator />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
              <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}








