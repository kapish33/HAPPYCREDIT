import React from "react";
import "./Deal.css";
import CloseIcon from "@mui/icons-material/Close";
const Deal = () => {
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
    </div>
  );
};

export default Deal;
