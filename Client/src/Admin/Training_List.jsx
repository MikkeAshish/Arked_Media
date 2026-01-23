import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const Training_List = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch all trainings
  const fetchTrainings = async () => {
    try {
      // const res = await fetch("https://arked-media-kyki.vercel.app/api/training/all");
      const res = await fetch("http://localhost:3006/api/training/all");
      const data = await res.json();
      setTrainings(data.trainings || []);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to load trainings");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete training
  const deleteTraining = async (id) => {
    if (!window.confirm("Are you sure you want to delete this training?")) return;

    try {
      // await fetch(`https://arked-media-kyki.vercel.app/api/training/delete/${id}`, {
      await fetch(`http://localhost:3006/api/training/delete/${id}`, {
        method: "DELETE",
      });

      setTrainings(trainings.filter((t) => t._id !== id));
    } catch (error) {
      console.error(error);
      alert("❌ Delete failed");
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-blue-600 font-semibold">
        Loading Trainings...
      </p>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">
        All Trainings
      </h2>

      {trainings.length === 0 ? (
        <p className="text-center text-gray-500">
          No trainings available
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((t) => (
            <div
              key={t._id}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl text-blue-700 mb-2">
                {t.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {t.desc}
              </p>

              <div className="space-y-1 text-sm text-gray-700">
                <p><b>Trainer:</b> {t.trainer}</p>
                <p><b>Duration:</b> {t.duration}</p>
                <p><b>Mode:</b> {t.mode}</p>
                <p><b>Audience:</b> {t.audience}</p>
              </div>

              <button
                onClick={() => deleteTraining(t._id)}
                className="mt-5 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-full text-sm font-semibold"
              >
                <FaTrash /> Delete Training
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Training_List;
