import React, { useState } from "react";

const Add_Training = () => {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    trainer: "",
    duration: "",
    timing: "",
    mode: "",
    audience: "",
    certificate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://arked-media-kyki.vercel.app/api/training/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("✅ Training Added Successfully");
        // setForm({
        //   title: "",
        //   desc: "",
        //   trainer: "",
        //   duration: "",
        //   timing: "",
        //   mode: "",
        //   audience: "",
        //   certificate: "",
        // });
      } else {
        alert("❌ Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg mb-16">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Add New Training
      </h2>

      <form onSubmit={submitHandler} className="grid md:grid-cols-2 gap-6">
        {Object.keys(form).map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.toUpperCase()}
            required
            className="border p-3 rounded-xl focus:outline-blue-500"
          />
        ))}

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-blue-700 text-white py-3 rounded-full font-semibold hover:bg-blue-800 disabled:opacity-60"
        >
          {loading ? "Adding..." : "Add Training"}
        </button>
      </form>
    </div>
  );
};

export default Add_Training;
