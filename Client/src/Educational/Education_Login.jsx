import React, { useState } from "react";
import axios from "axios"; // ✅ Import Axios
import { useNavigate } from "react-router-dom";

const Education_Login = () => {

    const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

   

    try {
      const res = await axios.post("http://localhost:3006/api/admin/login", form); 
      // ✅ Backend URL: update karo agar alag port/host ho
      if (res.data.success) {
        setSuccess(res.data.message);
        setError("");
        // Redirect karna ho to yaha useNavigate use kar sakte ho
         localStorage.setItem("isLoggedIn", "true");
        navigate("/Eductional");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Try again!"
      );
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10">

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Login to continue
        </p>

        {/* Success / Error */}
        {success && <p className="text-green-600 mb-4 text-center">{success}</p>}
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl bg-blue-700 text-white font-bold text-lg hover:bg-blue-800 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </section>
  );
};

export default Education_Login;
