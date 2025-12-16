// import { useState } from "react";

// export default function PhotoGallery({
//   photos,
//   addPhoto,
//   updatePhoto,
//   deletePhoto,
//   permanentlyDeletePhoto,
// }) {
//   const [form, setForm] = useState({
//     id: null,
//     title: "",
//     message: "",
//     uploader: "",
//     anonymous: false,
//     image: "",
//   });

//   const [showDeleted, setShowDeleted] = useState(false);

//   function handleImage(e) {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () =>
//       setForm((prev) => ({ ...prev, image: reader.result }));
//     reader.readAsDataURL(file);
//   }

//   function submit(e) {
//     e.preventDefault();
//     if (!form.image || !form.title) return;

//     form.id ? updatePhoto(form) : addPhoto(form);
//     resetForm();
//   }

//   function editPhoto(photo) {
//     setForm(photo);
//   }

//   function resetForm() {
//     setForm({
//       id: null,
//       title: "",
//       message: "",
//       uploader: "",
//       anonymous: false,
//       image: "",
//     });
//   }

//   function restorePhoto(photoId) {
//     updatePhoto({
//       ...photos.find((p) => p.id === photoId),
//       deleted: false,
//     });
//   }

//   return (
//     <div style={{ padding: "2rem" }}>
//       {/* 🌸 HEADER */}
//       <div
//         className="card"
//         style={{
//           marginBottom: "2rem",
//           textAlign: "center",
//           background: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "2rem",
//             fontWeight: 900,
//             background: "linear-gradient(45deg, #ec4899, #db2777)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Photo Album
//         </h2>
//       </div>

//       {/* 📤 FORM */}
//       <form
//         className="card"
//         style={{ marginBottom: "2rem", padding: 16 }}
//         onSubmit={submit}
//       >
//         <input type="file" onChange={handleImage} style={inputStyle} />
//         <input
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           style={inputStyle}
//           required
//         />
//         <input
//           placeholder="Message"
//           value={form.message}
//           onChange={(e) => setForm({ ...form, message: e.target.value })}
//           style={inputStyle}
//         />
//         <input
//           placeholder="Uploader"
//           value={form.uploader}
//           onChange={(e) => setForm({ ...form, uploader: e.target.value })}
//           style={inputStyle}
//         />
//         <label style={{ display: "block", marginTop: 8 }}>
//           <input
//             type="checkbox"
//             checked={form.anonymous}
//             onChange={(e) =>
//               setForm({ ...form, anonymous: e.target.checked })
//             }
//           />{" "}
//           Upload as anonymous
//         </label>
//         <button type="submit" style={buttonStyle}>
//           {form.id ? "Update Photo" : "Add Photo"}
//         </button>
//       </form>

//       {/* 🖼️ ACTIVE PHOTOS */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "1.5rem",
//         }}
//       >
//         {photos
//           .filter((p) => !p.deleted)
//           .map((photo) => (
//             <div key={photo.id} className="card" style={{ padding: 8 }}>
//               <img
//                 src={photo.image}
//                 alt={photo.title}
//                 style={{
//                   width: "100%",
//                   height: 180,
//                   objectFit: "cover",
//                   borderRadius: 12,
//                 }}
//               />
//               <h4 style={{ marginTop: 8 }}>{photo.title}</h4>
//               <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
//                 <button onClick={() => editPhoto(photo)}>Edit</button>
//                 <button onClick={() => deletePhoto(photo.id)}>Delete</button>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* 🔘 TOGGLE TRASH */}
//       {photos.some((p) => p.deleted) && (
//         <button
//           onClick={() => setShowDeleted(!showDeleted)}
//           style={{
//             marginTop: 24,
//             background: "#f43f5e",
//             color: "#fff",
//             padding: "0.5rem 1rem",
//             border: "none",
//             borderRadius: 8,
//             cursor: "pointer",
//           }}
//         >
//           {showDeleted ? "Hide Deleted Photos" : "Show Deleted Photos"}
//         </button>
//       )}

//       {/* 🗑️ DELETED PHOTOS */}
//       {showDeleted && (
//         <div
//           style={{
//             marginTop: 16,
//             display: "grid",
//             gridTemplateColumns: "repeat(4, 1fr)",
//             gap: "1.5rem",
//           }}
//         >
//           {photos
//             .filter((p) => p.deleted)
//             .map((photo) => (
//               <div
//                 key={photo.id}
//                 className="card"
//                 style={{ padding: 8, opacity: 0.7 }}
//               >
//                 <img
//                   src={photo.image}
//                   alt={photo.title}
//                   style={{
//                     width: "100%",
//                     height: 180,
//                     objectFit: "cover",
//                     borderRadius: 12,
//                   }}
//                 />
//                 <h4 style={{ marginTop: 8 }}>{photo.title}</h4>

//                 <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
//                   <button
//                     onClick={() => restorePhoto(photo.id)}
//                     style={{
//                       background: "#22c55e",
//                       color: "#fff",
//                       border: "none",
//                       borderRadius: 8,
//                       padding: "6px 12px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Restore
//                   </button>

//                   <button
//                     onClick={() => {
//                       if (
//                         window.confirm(
//                           "This will permanently delete this photo. This cannot be undone."
//                         )
//                       ) {
//                         permanentlyDeletePhoto(photo.id);
//                       }
//                     }}
//                     style={{
//                       background: "#dc2626",
//                       color: "#fff",
//                       border: "none",
//                       borderRadius: 8,
//                       padding: "6px 12px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Delete Forever
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// }

// const inputStyle = {
//   display: "block",
//   width: "100%",
//   padding: 8,
//   marginTop: 8,
//   borderRadius: 6,
//   border: "1px solid #ccc",
// };

// const buttonStyle = {
//   marginTop: 12,
//   background: "linear-gradient(45deg, #ec4899, #db2777)",
//   color: "#fff",
//   padding: "0.6rem 1.2rem",
//   borderRadius: 12,
//   fontWeight: 700,
//   border: "none",
//   cursor: "pointer",
// };


import { useState } from "react";

export default function PhotoGallery({
  photos,
  addPhoto,
  updatePhoto,
  deletePhoto,
  permanentlyDeletePhoto,
}) {
  const [form, setForm] = useState({
    id: null,
    title: "",
    message: "",
    uploader: "",
    anonymous: false,
    image: "",
  });

  const [showDeleted, setShowDeleted] = useState(false);

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Selected file:", file.name);

    const reader = new FileReader();
    reader.onload = () => {
      console.log("Image converted to base64");
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  function submit(e) {
    e.preventDefault();

    console.log("Submitting photo:", form);

    if (!form.image || !form.title) {
      console.log("Missing required fields");
      return;
    }

    form.id ? updatePhoto(form) : addPhoto(form);
    resetForm();
  }

  function editPhoto(photo) {
    console.log("Editing photo:", photo.id);
    setForm(photo);
  }

  function resetForm() {
    setForm({
      id: null,
      title: "",
      message: "",
      uploader: "",
      anonymous: false,
      image: "",
    });
  }

  function restorePhoto(photoId) {
    console.log("Restoring photo:", photoId);

    updatePhoto({
      ...photos.find((p) => p.id === photoId),
      deleted: false,
    });
  }

  return (
    <div style={{ padding: "2rem" }}>
      {/* 🌸 HEADER */}
      <div
        className="card"
        style={{
          marginBottom: "2rem",
          textAlign: "center",
          background: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 900,
            background: "linear-gradient(45deg, #ec4899, #db2777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Photo Album
        </h2>
      </div>

      {/* 📤 FORM */}
      <form
        className="card"
        style={{ marginBottom: "2rem", padding: 16 }}
        onSubmit={submit}
      >
        <input type="file" onChange={handleImage} style={inputStyle} />
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Uploader"
          value={form.uploader}
          onChange={(e) => setForm({ ...form, uploader: e.target.value })}
          style={inputStyle}
        />
        <label style={{ display: "block", marginTop: 8 }}>
          <input
            type="checkbox"
            checked={form.anonymous}
            onChange={(e) =>
              setForm({ ...form, anonymous: e.target.checked })
            }
          />{" "}
          Upload as anonymous
        </label>
        <button type="submit" style={buttonStyle}>
          {form.id ? "Update Photo" : "Add Photo"}
        </button>
      </form>

      {/* 🖼️ ACTIVE PHOTOS */}
      <div
        className="card-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
      >
        {photos
          .filter((p) => !p.deleted)
          .map((photo) => (
            <div key={photo.id} className="card" style={{ padding: 8 }}>
              <img
                src={photo.image}
                alt={photo.title}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />
              <h4 style={{ marginTop: 8 }}>{photo.title}</h4>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => editPhoto(photo)}>Edit</button>
                <button
                  onClick={() => {
                    console.log("Soft delete:", photo.id);
                    deletePhoto(photo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* 🔘 TOGGLE TRASH */}
      {photos.some((p) => p.deleted) && (
        <button
          onClick={() => setShowDeleted(!showDeleted)}
          style={{
            marginTop: 24,
            background: "#f43f5e",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          {showDeleted ? "Hide Deleted Photos" : "Show Deleted Photos"}
        </button>
      )}

      {/* 🗑️ DELETED PHOTOS */}
      {showDeleted && (
        <div
          className="card-grid"
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {photos
            .filter((p) => p.deleted)
            .map((photo) => (
              <div
                key={photo.id}
                className="card"
                style={{ padding: 8, opacity: 0.7 }}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
                <h4 style={{ marginTop: 8 }}>{photo.title}</h4>

                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <button
                    onClick={() => restorePhoto(photo.id)}
                    style={{
                      background: "#22c55e",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "6px 12px",
                      cursor: "pointer",
                    }}
                  >
                    Restore
                  </button>

                  <button
                    onClick={() => {
                      console.log("Permanent delete:", photo.id);
                      if (
                        window.confirm(
                          "This will permanently delete this photo. This cannot be undone."
                        )
                      ) {
                        permanentlyDeletePhoto(photo.id);
                      }
                    }}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "6px 12px",
                      cursor: "pointer",
                    }}
                  >
                    Delete Forever
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: 8,
  marginTop: 8,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const buttonStyle = {
  marginTop: 12,
  background: "linear-gradient(45deg, #ec4899, #db2777)",
  color: "#fff",
  padding: "0.6rem 1.2rem",
  borderRadius: 12,
  fontWeight: 700,
  border: "none",
  cursor: "pointer",
};
