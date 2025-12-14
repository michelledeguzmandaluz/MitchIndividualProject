import { useState } from "react";

export default function PhotoGallery({
  photos,
  addPhoto,
  updatePhoto,
  deletePhoto
}) {
  const [form, setForm] = useState({
    id: null,
    title: "",
    message: "",
    uploader: "",
    anonymous: false,
    image: ""
  });

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(file);
  }

  function submit() {
    if (!form.image || !form.title) return;

    form.id ? updatePhoto(form) : addPhoto(form);
    resetForm();
  }

  function editPhoto(photo) {
    setForm(photo);
  }

  function resetForm() {
    setForm({
      id: null,
      title: "",
      message: "",
      uploader: "",
      anonymous: false,
      image: ""
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
          background: "linear-gradient(135deg, #fce7f3, #fbcfe8)"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 900,
            background: "linear-gradient(45deg, #ec4899, #db2777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Photo Album
        </h2>
      </div>

      {/* 📤 FORM */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <input type="file" onChange={handleImage} />

        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <input
          placeholder="Message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <input
          placeholder="Uploader"
          value={form.uploader}
          onChange={e => setForm({ ...form, uploader: e.target.value })}
        />

        <label style={{ display: "block", marginTop: 8 }}>
          <input
            type="checkbox"
            checked={form.anonymous}
            onChange={e => setForm({ ...form, anonymous: e.target.checked })}
          />{" "}
          Upload as anonymous
        </label>

        <button
          onClick={submit}
          style={{
            marginTop: 12,
            background: "linear-gradient(45deg, #ec4899, #db2777)",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            borderRadius: 12,
            fontWeight: 700
          }}
        >
          {form.id ? "Update Photo" : "Add Photo"}
        </button>
      </div>

      {/* 🖼️ LIST */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem"
        }}
      >
        {photos
          .filter(p => !p.deleted)
          .map(photo => (
            <div key={photo.id} className="card">
              <img
                src={photo.image}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 12
                }}
              />

              <h4 style={{ marginTop: 8 }}>{photo.title}</h4>

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => editPhoto(photo)}>Edit</button>
                <button onClick={() => deletePhoto(photo.id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

