import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import MulaiMain from "./pages/mulaiMain";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Footer from "./components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App(props) {
  return (
    <Router>
      <div className="">
        <Header />
        <div className="row row-cols-auto justify-content-center">
          <Routes className="col">
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/MulaiMain" element={<MulaiMain />}></Route>
            <Route path="/Rules" element={<Rules />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Credits" element={<Credits />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
