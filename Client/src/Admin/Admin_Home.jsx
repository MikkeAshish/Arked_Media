import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaListUl,
  FaClipboardList,
  FaHeadphones,
  FaMusic,
} from "react-icons/fa";

const Admin_Home = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-14">
          Admin Dashboard
        </h1>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Add Training */}
          <div
            onClick={() => navigate("/admin/add-training")}
            className="cursor-pointer bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition group"
          >
            <FaChalkboardTeacher className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2">Add Training</h3>
            <p className="text-gray-500 text-sm">
              Create and publish new training programs.
            </p>
          </div>

          {/* Add Seminar */}
          <div
            onClick={() => navigate("/admin/add-seminar")}
            className="cursor-pointer bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition group"
          >
            <FaUsers className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2">Add Seminar</h3>
            <p className="text-gray-500 text-sm">
              Add upcoming seminars & workshops.
            </p>
          </div>

          {/* Add Audio Book */}
          <div
            onClick={() => navigate("/admin/add-audio")}
            className="cursor-pointer bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition group"
          >
            <FaHeadphones className="text-4xl text-purple-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2">Add Audio Book</h3>
            <p className="text-gray-500 text-sm">
              Upload and manage audio books.
            </p>
          </div>

          {/* All Trainings */}
          <div
            onClick={() => navigate("/admin/all-training")}
            className="cursor-pointer bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition group"
          >
            <FaClipboardList className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2">All Trainings</h3>
            <p className="text-gray-500 text-sm">
              View, update or delete trainings.
            </p>
          </div>

          {/* All Seminars */}
          <div
            onClick={() => navigate("/admin/all-seminar")}
            className="cursor-pointer bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition group"
          >
            <FaListUl className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2">All Seminars</h3>
            <p className="text-gray-500 text-sm">
              Manage all seminar records.
            </p>
          </div>

          {/* ✅ All Audio Books (NEW) */}
          <div
            onClick={() => navigate("/admin/all-audio")}
            className="cursor-pointer bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition group"
          >
            <FaMusic className="text-4xl text-indigo-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2">All Audio Books</h3>
            <p className="text-gray-500 text-sm">
              View, play or delete audio books.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Admin_Home;
