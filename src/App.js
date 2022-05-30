import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import AboutPageComponent from "./PageComponents/AboutPageComponent";
import HomePageComponent from "./PageComponents/HomePageComponent";
import "./AppComponent.style.scss";

function App() {
  return (
    <div>
      <div className="grid-container">
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<HomePageComponent />} />

          <Route path="/about" element={<AboutPageComponent />} />
        </Routes>

        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
