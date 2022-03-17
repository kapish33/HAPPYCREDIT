import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { DataContext } from "../context/DataContext";
import "./Down.css";
const Down = () => {
  const { array } = React.useContext(DataContext);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(array);
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

      <div className="down_right">
        <TextField
          style={{
            marginTop: "20px",
          }}
          id="standard-basic"
          label="Search"
          variant="standard"
        />
        <div className="handel">
          <h3>{array.length} deals</h3>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Featured
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Featured"}>Featured</MenuItem>
              <MenuItem value={"A-Z"}>A-Z</MenuItem>
              <MenuItem value={"Newest"}>Newest</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="collectionCard">
          {array.map((item) => {
            return (
              <div className="handelCards" key={item.id}>
                <img src={item.url} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Down;
