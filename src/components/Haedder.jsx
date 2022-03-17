import logo from "../logo.svg";
import React from "react";
import "./Haedder.css";

const Haedder = () => {
  return (
    <div className="boderHand">
      <div className="upper">
        <div className="upper_list">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="shop">shop</div>
          <div className="shop">How it works</div>
          <div className="shop">Pay in 4</div>
          <div className="shop">The shopping app</div>
          <div className="shop">Help</div>
        </div>
        <div className="buttons">
          <button>Log in</button>
          <button>Get the app</button>
        </div>
      </div>
    </div>
  );
};

export default Haedder;
