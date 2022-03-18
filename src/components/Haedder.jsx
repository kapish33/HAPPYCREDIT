import logo from "../logo.svg";
import React from "react";
import "./Haedder.css";

const Haedder = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  // onchage of screen size set width
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  React.useEffect(() => {
    if (width < 900) {
      // make all .shop display none
      document.querySelectorAll(".shop").forEach((el) => {
        el.style.display = "none";
      });
    } else {
      document.querySelectorAll(".shop").forEach((el) => {
        el.style.display = "block";
      });
    }
  }, [width]);

  console.log(width);
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
