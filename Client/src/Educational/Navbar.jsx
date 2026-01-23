import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/Eductional");
  };

  return (
    <nav className="  absolute top-0 left-0 w-full z-30 px-6 md:px-20 py-6 flex justify-end gap-4 bg-transparent">
      {!isLoggedIn && (
        <button
          onClick={() => navigate("/admin-login")}
          className="top-6 right-6 z-20 bg-white text-blue-700 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition"
        >
          Login
        </button>
      )}

      {isLoggedIn && (
        <button
          onClick={() => navigate("/admin/home")}
          className="top-6 right-6 z-20 bg-white text-blue-700 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition"
        >
          Admin
        </button>
      )}

      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="top-6 right-6 z-20 bg-white text-blue-700 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
