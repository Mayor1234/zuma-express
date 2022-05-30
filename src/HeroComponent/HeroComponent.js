import React from "react";
import "./HeroComponent.style.scss";
import lexus4 from "../images/lexus4.webp";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const HeroComponent = () => {
  return (
    <div className="hero row">
      <div className="left-hero">
        <h2>Find Your Next Car</h2>
        <ButtonComponent  color='blue' text='View Inventory'/>
      </div>
      <div className="right-hero">
        <img src={lexus4} alt="background_car" />
      </div>
    </div>
  );
};

export default HeroComponent;
 