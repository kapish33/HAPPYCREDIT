import React from "react";
import "./Down.css";
const Down = () => {
  React.useEffect(() => {
    document.querySelector(".giveBottom").style.borderBottom =
      "2px solid #00000048";
  }, []);
  const handelUnderLine = (index) => {
    const allGiveButtons = document.querySelectorAll(".giveBottom");
    console.log(allGiveButtons);
    allGiveButtons.forEach((button) => {
      button.style.borderBottom = "none";
    });
    allGiveButtons[index].style.borderBottom = "2px solid #00000048";
  };
  return (
    <div className="width grid_bottom">
      <div className="down_left">
        <h3>Categories</h3>
        <span
          onClick={() => {
            handelUnderLine(0);
          }}
          className="giveBottom"
        >
          Babies & Kids
        </span>
        <br />
        <br />
        <span
          onClick={() => {
            handelUnderLine(1);
          }}
          className="giveBottom"
        >
          Baby Health
        </span>
        <br />
        <br />
        <span
          onClick={() => {
            handelUnderLine(2);
          }}
          className="giveBottom"
        >
          Baby Safety
        </span>
        <br />
        <br />
        <span
          onClick={() => {
            handelUnderLine(3);
          }}
          className="giveBottom"
        >
          Baby Toys & Activity Equipment
        </span>
        <br />
        <br />
        <span
          onClick={() => {
            handelUnderLine(4);
          }}
          className="giveBottom"
        >
          Car Seats, Carriers & Strollers
        </span>
        <br />
        <br />
        <span
          onClick={() => {
            handelUnderLine(5);
          }}
          className="giveBottom"
        >
          Nursing & Feeding
        </span>
        <br />
        <br />
        <span
          onClick={() => {
            handelUnderLine(6);
          }}
          className="giveBottom"
        >
          Diapering
        </span>
        <br />
        <br />
        <span
          onClick={() => {
            handelUnderLine(7);
          }}
          className="giveBottom"
        >
          Potty Training
        </span>
        <br />
        <br />
        <hr />
        <br />

        <h2>Filter</h2>
        <h3>Type</h3>
        <div className="gapping">
          <input type="checkbox" name="OnlyCoupons" id="OnlyCoupons" />
          <label htmlFor="OnlyCoupons">Only Coupons</label>
          <br />
          <input type="checkbox" name="Exclusives" id="Exclusives" />
          <label htmlFor="Exclusives">Exclusives</label>
          <br />
          <input type="checkbox" name="BOGOAndMore" id="BOGOAndMore" />
          <label htmlFor="BOGOAndMore">BOGO and more</label>
        </div>
        <hr />
        <h3>Discount</h3>
        <div className="gapping">
          <input type="checkbox" name="0-49%Off" id="0-49%Off" />
          <label htmlFor="0-49%Off">0-49% off</label>
          <br />
          <input type="checkbox" name="50-80%Off" id="50-80%Off" />
          <label htmlFor="50-80%Off">50-80% off</label>
        </div>
        <hr />
      </div>

      <div className="down_right">y</div>
    </div>
  );
};

export default Down;
