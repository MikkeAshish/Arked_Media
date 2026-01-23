import React from "react";
import Creative_Agency from "./Creative_Agency";
import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import Educational from "./Educational";
import AllTrainings from "./Educational/AllTrainings";
import AllSeminar from "./Educational/AllSeminar";
import Add_Seminar from "./Admin/Add_Seminar";
import Seminar_List from "./Admin/Seminar_List";
import Admin_Home from "./Admin/Admin_Home";
import Add_Training from "./Admin/Add_Training";
import Training_List from "./Admin/Training_List";
import Gallery_1 from "./Educational/Gallery_1";
import Education_Login from "./Educational/Education_Login";
import Navbar from "./Educational/Navbar";
import Add_AudioBook from "./Admin/Add_AudioBook";
import AllAudioBook from "./Educational/AllAudioBook";
import AudioBook_List from "./Admin/AudioBook_List";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Creative_Agence" element={<Creative_Agency />} />
        <Route path="/Eductional" element={<Educational />} />
        <Route path="/gallery-1" element={< Gallery_1/>} />
        <Route path="/all-trainings" element={<AllTrainings />} />
        <Route path="/all-seminar" element={<AllSeminar/>}/>
        <Route path="/all-audioBook" element={<AllAudioBook/>}/>
        <Route path="/admin-login" element={<Education_Login/>}/>

        {/* Admin */}

        <Route path="/navbar" element={<Navbar />} />
        <Route path="/admin/home" element={<Admin_Home />} />
        {/* <Route path="/admin/training" element={<TrainingAdmin />} /> */}
        {/* http://localhost:5173/admin/training */}
        <Route path="/admin/add-training" element={<Add_Training />} />
        <Route path="/admin/add-seminar" element={<Add_Seminar />} />
        <Route path="/admin/add-audio" element={<Add_AudioBook />} />
        <Route path="/admin/all-training" element={<Training_List />} />
        <Route path="/admin/all-seminar" element={<Seminar_List />} />
        <Route path="/admin/all-audio" element={<AudioBook_List />} />
      </Routes>
    </>
  );
};

export default App;
