import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from './pages/Project';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="text-2xl text-blue-500">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
