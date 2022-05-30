import React from "react";
import "./ButtonComponent.style.scss";

const ButtonComponent = ({color, text}) => {
   
  return (
    <div>
      <button className="btn" color={color}>
        {text}
      </button>
    </div>
  );
};




export default ButtonComponent;
