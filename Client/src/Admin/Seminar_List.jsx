import React, { useEffect, useState } from "react";
import axios from "axios";

const Seminar_List = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Fetch seminars from backend
  const fetchSeminars = async () => {
    try {
      // const res = await axios.get("https://arked-media-kyki.vercel.app/api/seminar/all");
      const res = await axios.get("http://localhost:3006/api/seminar/all");
      setSeminars(res.data.seminars);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching seminars", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeminars();
  }, []);

  // ❌ Delete seminar
  // ❌ Delete seminar – FIXED
const deleteSeminar = async (id) => {
  if (!window.confirm("Are you sure you want to delete this seminar?")) return;

  try {
    // const res = await axios.delete(`https://arked-media-kyki.vercel.app/api/seminar/delete/${id}`);
    const res = await axios.delete(`http://localhost:3006/api/seminar/delete/${id}`);
    if (res.data.success) {
      // Remove deleted seminar from UI immediately
      setSeminars(seminars.filter((s) => s._id !== id));
      alert("Seminar deleted successfully");
    }
  } catch (error) {
    console.error("Delete error", error);
    alert("Failed to delete seminar. Try again.");
  }
};


  if (loading) {
    return (
      <div className="text-center py-20 text-lg text-gray-600">
        Loading seminars...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-12 text-blue-700 text-center">
        Manage Seminars
      </h2>

      {seminars.length === 0 ? (
        <p className="text-center text-gray-500">
          No seminars available
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {seminars.map((s) => (
            <div
              key={s._id}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {s.title}
              </h3>

              <p className="text-gray-600 mb-4">{s.desc}</p>

              <div className="text-sm text-gray-700 space-y-1">
                <p><b>Speaker:</b> {s.speaker}</p>
                <p><b>Date:</b> {s.date}</p>
                <p><b>Time:</b> {s.time}</p>
                <p><b>Venue:</b> {s.venue}</p>
                <p><b>Audience:</b> {s.audience}</p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => deleteSeminar(s._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Seminar_List;
