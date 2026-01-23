import React, { useEffect, useState } from "react";

const AllTrainings = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch all trainings
  const fetchTrainings = async () => {
    try {
      const res = await fetch("https://arked-media-kyki.vercel.app/api/training/all");
      const data = await res.json();
      setTrainings(data.trainings || []);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to load trainings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  if (loading) {
    return (
      <p className="text-center py-20 text-blue-700 font-semibold">
        Loading Trainings...
      </p>
    );
  }

  return (
    <section className="py-24 px-6 md:px-20 bg-slate-200">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
          All Training Programs
        </h2>

        {trainings.length === 0 ? (
          <p className="text-center text-gray-600">
            No trainings available
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainings.map((t) => (
              <div
                key={t._id}
                className="bg-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  {t.title}
                </h3>

                <p className="text-gray-600 mb-5 line-clamp-3">
                  {t.desc}
                </p>

                <div className="space-y-1 text-sm">
                  <p><b>Trainer:</b> {t.trainer}</p>
                  <p><b>Duration:</b> {t.duration}</p>
                  <p><b>Timing:</b> {t.timing}</p>
                  <p><b>Mode:</b> {t.mode}</p>
                  <p><b>Audience:</b> {t.audience}</p>
                  <p><b>Certificate:</b> {t.certificate}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default AllTrainings;
