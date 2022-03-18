import React from "react";
import "./Deal.css";
import CloseIcon from "@mui/icons-material/Close";
import BasicModal from "./Modal";
const Deal = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  // onchage of screen size set width
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  React.useEffect(() => {
    if (width < 900) {
      document.querySelector(".scrollX").style.display = "block";
      // hadndelspans as  visible
      document.querySelector(".hadndelspans").style.display = "block";
    } else {
      document.querySelector(".scrollX").style.display = "none";
      document.querySelector(".hadndelspans").style.display = "none";
    }
  }, [width]);
  return (
    <div className="width">
      <h1>All deals and coupons.</h1>
      <p>
        The best online deals and coupons, including Klarna exclusives, updated
        daily.
      </p>
      <div className="grid dealcross">
        <p>
          Pay in 4 anywhere with the Chrome extension.{" "}
          <a
            href="https://chrome.google.com/webstore/detail/klarna-shop-now-pay-later/hfapbcheiepjppjbnkphkmegjlipojba?hl=en&utm_source=klarnacom&utm_medium=referral&utm_campaign=klarnacom-deals&utm_content=announcement_banner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add to Chrome
          </a>
        </p>
        <CloseIcon
          onClick={() => {
            document.querySelector(".dealcross").style.display = "none";
          }}
          className="centerMuiIcoin"
        />
      </div>
      <div className="hadndelspans">
        <span
          style={{
            fontWeight: "100",
          }}
        >
          Popular categories
        </span>
        <span>
          <BasicModal />
        </span>
      </div>
      <div className="scrollX">
        <span>Babies & Kids</span>
        <span>Baby Health</span>
        <span>Baby Safety</span>
        <span>Baby Toys & Activity Equipment</span>
        <span>Car Seats, Carriers & Strollers</span>
        <span>Nursing & Feeding</span>
        <span>Diapering</span>
        <span>Potty Training</span>
      </div>
    </div>
  );
};

export default Deal;
