import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import Courses from "./Courses/Courses";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
