// import { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import HomePage from "./HomePage";
// import GalleryView from "./GalleryView";
// import PhotoGallery from "./PhotoGallery";
// import AboutCreator from "./AboutCreator";

// export default function App() {
//   const [page, setPage] = useState("/");
//   const [photos, setPhotos] = useState(() => {
//     const saved = localStorage.getItem("photos");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // 💾 SAVE TO LOCALSTORAGE
//   useEffect(() => {
//     localStorage.setItem("photos", JSON.stringify(photos));
//   }, [photos]);

//   // ➕ ADD
//   const addPhoto = photo => {
//     setPhotos(prev => [
//       ...prev,
//       {
//         ...photo,
//         id: Date.now(),
//         date: new Date().toLocaleDateString(),
//         deleted: false
//       }
//     ]);
//   };

//   // ✏️ UPDATE
//   const updatePhoto = updated => {
//     setPhotos(prev =>
//       prev.map(p => (p.id === updated.id ? updated : p))
//     );
//   };

//   // 🗑️ DELETE (soft delete)
//   const deletePhoto = id => {
//     setPhotos(prev =>
//       prev.map(p => (p.id === id ? { ...p, deleted: true } : p))
//     );
//   };

//   return (
//     <>
//       <Header onNavigate={setPage} />

//       {page === "/" && <HomePage photos={photos.filter(p => !p.deleted)} />}

//       {page === "/gallery" && (
//         <GalleryView photos={photos.filter(p => !p.deleted)} />
//       )}

//       {page === "/album" && (
//         <PhotoGallery
//           photos={photos}
//           addPhoto={addPhoto}
//           updatePhoto={updatePhoto}
//           deletePhoto={deletePhoto}
//         />
//       )}

//       {page === "/about" && <AboutCreator />}
      

//       <Footer />
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import HomePage from "./HomePage";
// import GalleryView from "./GalleryView";
// import PhotoGallery from "./PhotoGallery";
// import AboutCreator from "./AboutCreator";

// export default function App() {
//   const [page, setPage] = useState("/");
//   const [photos, setPhotos] = useState(() => {
//     const saved = localStorage.getItem("photos");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // 💾 SAVE TO LOCALSTORAGE
//   useEffect(() => {
//     localStorage.setItem("photos", JSON.stringify(photos));
//   }, [photos]);

//   // ➕ ADD
//   const addPhoto = photo => {
//     setPhotos(prev => [
//       ...prev,
//       {
//         ...photo,
//         id: Date.now(),
//         date: new Date().toLocaleDateString(),
//         deleted: false
//       }
//     ]);
//   };

//   // ✏️ UPDATE
//   const updatePhoto = updated => {
//     setPhotos(prev =>
//       prev.map(p => (p.id === updated.id ? updated : p))
//     );
//   };

//   // 🗑️ DELETE (soft delete)
//   const deletePhoto = id => {
//     setPhotos(prev =>
//       prev.map(p => (p.id === id ? { ...p, deleted: true } : p))
//     );
//   };

//   return (
//     <>
//       {/* 🌸 HEADER */}
//       <Header onNavigate={setPage} />

//       {/* 🌸 PAGES */}
//       {page === "/" && <HomePage photos={photos.filter(p => !p.deleted)} />}

//       {page === "/gallery" && (
//         <GalleryView photos={photos.filter(p => !p.deleted)} />
//       )}

//       {page === "/album" && (
//         <PhotoGallery
//           photos={photos}
//           addPhoto={addPhoto}
//           updatePhoto={updatePhoto}
//           deletePhoto={deletePhoto}
//         />
//       )}

//       {page === "/about" && <AboutCreator />}

//       {/* 🌸 FOOTER (FIXED) */}
//       <Footer onNavigate={setPage} />
//     </>
//   );
// }

import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import GalleryView from "./GalleryView";
import PhotoGallery from "./PhotoGallery";
import AboutCreator from "./AboutCreator";

export default function App() {
  const [page, setPage] = useState("/");
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem("photos");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔐 ADMIN MODE (set false to lock editing)
  const isAdmin = true;

  // 💾 SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photos));
  }, [photos]);

  // ⬆️ SCROLL TO TOP ON PAGE CHANGE
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // ➕ ADD PHOTO
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

  // ✏️ UPDATE PHOTO
  const updatePhoto = updated => {
    setPhotos(prev =>
      prev.map(p => (p.id === updated.id ? updated : p))
    );
  };

  // 🗑️ SOFT DELETE
  const deletePhoto = id => {
    setPhotos(prev =>
      prev.map(p => (p.id === id ? { ...p, deleted: true } : p))
    );
  };

  return (
    <>
      {/* 🌸 HEADER */}
      <Header onNavigate={setPage} currentPage={page} />

      {/* 🌸 PAGE CONTENT WITH FADE */}
      <div
        key={page}
        style={{
          animation: "fade 0.4s ease-in-out"
        }}
      >
        {page === "/" && (
          <HomePage photos={photos.filter(p => !p.deleted)} />
        )}

        {page === "/gallery" && (
          <GalleryView photos={photos.filter(p => !p.deleted)} />
        )}

        {page === "/album" && (
          <PhotoGallery
            photos={photos}
            addPhoto={isAdmin ? addPhoto : null}
            updatePhoto={isAdmin ? updatePhoto : null}
            deletePhoto={isAdmin ? deletePhoto : null}
          />
        )}

        {page === "/about" && <AboutCreator />}
      </div>

      {/* 🌸 FOOTER */}
      <Footer onNavigate={setPage} />
    </>
  );
}
