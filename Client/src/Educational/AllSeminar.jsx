import React, { useEffect, useState } from "react";
import axios from "axios";

const AllSeminar = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Fetch all seminars
  const fetchSeminars = async () => {
    try {
      // const res = await axios.get("https://arked-media-kyki.vercel.app/api/seminar/all");
      const res = await axios.get("http://localhost:3006/api/seminar/all");
      setSeminars(res.data.seminars || []);
    } catch (error) {
      console.error("Error fetching seminars", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeminars();
  }, []);

  if (loading) {
    return (
      <p className="text-center py-24 text-blue-600 font-semibold">
        Loading Seminars...
      </p>
    );
  }

  return (
    <section className="py-24 px-6 md:px-20 bg-slate-200">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADING */}
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
          All Seminars & Workshops
        </h2>

        {seminars.length === 0 ? (
          <p className="text-center text-gray-500">
            No seminars available
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {seminars.map((s) => (
              <div
                key={s._id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  {s.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {s.desc}
                </p>

                <div className="space-y-2 text-sm text-gray-700">
                  <p><b>Speaker:</b> {s.speaker}</p>
                  <p><b>Date:</b> {s.date}</p>
                  <p><b>Time:</b> {s.time}</p>
                  <p><b>Venue:</b> {s.venue}</p>
                  <p><b>Audience:</b> {s.audience}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default AllSeminar;
