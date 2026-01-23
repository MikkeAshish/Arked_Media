import React, { useState } from "react";

const Add_Seminar = () => {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    speaker: "",
    date: "",
    time: "",
    venue: "",
    audience: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://arked-media-kyki.vercel.app/api/seminar/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Seminar Added Successfully");

        // setForm({
        //   title: "",
        //   desc: "",
        //   speaker: "",
        //   date: "",
        //   time: "",
        //   venue: "",
        //   audience: "",
        // });
      } else {
        alert("❌ Failed to add seminar");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">
        Add New Seminar
      </h2>

      <form onSubmit={submitHandler} className="grid gap-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            placeholder={key.toUpperCase()}
            className="p-3 border rounded focus:outline-blue-500"
            onChange={handleChange}
            required
          />
        ))}

        <button
          disabled={loading}
          className="bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 disabled:opacity-60"
        >
          {loading ? "Adding..." : "Add Seminar"}
        </button>
      </form>
    </div>
  );
};

export default Add_Seminar;
