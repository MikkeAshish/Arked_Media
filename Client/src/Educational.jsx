import React, { useState } from "react";
import { assets } from "./assets/assets";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import Training_Info from "./Educational/Training_Info";
import Seminar from "./Educational/Seminar";
import Gallery_1 from "./Educational/Gallery_1";
import Navbar from "./Educational/Navbar";
import AudioBook from "./Educational/AudioBook";

const services = [
  {
    title: "Communication & Soft Skills Training",
    desc: "Verbal communication, body language, articulation, confidence-building, and professional etiquette.",
  },
  {
    title: "Resume Building & Professional Profile Development",
    desc: "Structured sessions to present skills and experiences clearly for academic and professional environments.",
  },
  {
    title: "HR Interview Preparation",
    desc: "Interview structure, common questions, self-introduction, and behavioral response training.",
  },
  {
    title: "Personal Interview (PI) Training",
    desc: "Handling personal and panel interviews with clarity, confidence, and structured thinking.",
  },
  {
    title: "Professional Presence Preparation",
    desc: "Emotional intelligence, adaptability, workplace communication, and real-world readiness.",
  },
  {
    title: "Public Speaking & Presentation Skills",
    desc: "Hands-on workshops to structure thoughts, speak clearly, and present with impact.",
  },
  {
    title: "Personal Branding for Students & Early Professionals",
    desc: "Defining and communicating personal value across academic and professional platforms.",
  },
  {
    title: "Institutional Workshops & Seminars",
    desc: "Customized programs designed with colleges, universities, and institutions.",
  },
];

const galleryImages = [
  assets.Workshop_Highlights_1,
  assets.Workshop_Highlights_2,
  assets.Workshop_Highlights_3,
  assets.Workshop_Highlights_4,
  assets.Workshop_Highlights_5,
  assets.Workshop_Highlights_6,
];

const Educationl = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + galleryImages.length) % galleryImages.length);

  const next = () => setCurrent((current + 1) % galleryImages.length);

  return (
    <div className="from-white to-blue-50 text-gray-800 overflow-hidden">
      <Navbar/>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-28 px-6 md:px-20">
        
        {/* <button
          onClick={() => navigate("/admin/home")}
          className="absolute top-6 right-6 z-20 bg-white text-blue-700 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition "
        >
          Admin 
        </button>

        <button
          onClick={() => navigate("/admin-login")}
          className="absolute top-6  z-20 bg-white text-blue-700 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition "
        >
          Login 
        </button> */}


        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Education & <span className="text-blue-200">Employability</span>{" "}
              Training
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl">
              Bridging the gap between education and professional communication
              through clarity, confidence, and industry readiness.
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition">
              Explore Our Programs
            </button>
          </motion.div>

          <motion.img
            src={assets.training}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-28 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group backdrop-blur-xl border border-blue-300 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-700 group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery-1 */}
      

      <Training_Info />

      <section>
        <Gallery_1/>
      </section>

      {/* Gallery-2 */}
      <section>
        {/* <Gallery_2/> */}
      </section>


      <Seminar />

      <AudioBook/>


      {/* GALLERY */}
      <section className="py-28 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">
            Training & Workshop Highlights
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            A glimpse into our on-ground sessions, interactive workshops, and
            real-world learning environments.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                onClick={() => {
                  setCurrent(index);
                  setOpen(true);
                }}
                className="cursor-pointer overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full aspect-video object-cover group-hover:scale-110 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              <FaTimes />
            </button>
            <button
              onClick={prev}
              className="absolute left-6 text-white text-3xl"
            >
              <FaChevronLeft />
            </button>

            <motion.img
              key={current}
              src={galleryImages[current]}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl"
            />

            <button
              onClick={next}
              className="absolute right-6 text-white text-3xl"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </section>

      {/* TRUST */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 py-24 px-6 md:px-20 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Educational Institutions
          </h2>
          <p className="text-blue-100 text-lg">
            Institutions trust us for communication-driven programs that create
            measurable academic and professional impact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 md:px-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[2.5rem] p-14 text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">
            Partner With Us
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Bring future-ready communication training to your institution and
            empower students beyond the classroom.
          </p>
          <button className="bg-blue-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-800 hover:scale-105 transition">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Educationl;
