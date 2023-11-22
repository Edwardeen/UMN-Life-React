import React, { useState } from "react";
import MangoDrink from "../assets/other/mangoDrink.png";
import EsTeh from "../assets/other/esTeh.png";
import "../App.css";

export default function Cafe(props) {
  const [imageDrinks, setImageDrinks] = useState([MangoDrink, EsTeh]);

  return (
    <div id="cafe-div">
      <h1>DRINKING</h1>
      <div id="cafe-subdiv">
        <img
          src={imageDrinks[props.indexItemCafe]}
          style={{ borderRadius: "50%" }}
          alt="DRINKS"
        />
        <div id="cafe-choose-widget">
          <h1 className="info-barang-cafe">
            {props.cafeItemList[props.indexItemCafe][0]}
          </h1>
          <h1 className="info-barang-cafe">
            Rp. {props.cafeItemList[props.indexItemCafe][1]}
          </h1>
          <div id="cafe-carousel">
            <button
              className="button-geser-cafe"
              onClick={props.switchLeft_Cafe}
            >
              &lt;
            </button>
            <button onClick={props.buyDrinks} className="button-buy-drinks">
              BUY
            </button>
            <button
              className="button-geser-cafe"
              onClick={props.switchLeft_Cafe}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
