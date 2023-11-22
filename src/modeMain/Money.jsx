import React, { useState } from "react";
import NumberFormat from "react-number-format";
import IconMoney from "../assets/assetsIcon/money.png";
import "../App.css";

export default function Money(props) {
  return (
    <div className="container-uang mb-2">
      <div id="uang" className="text-center">
        <img src={IconMoney} className="moneyIcon" alt="" />
        <br />
        <NumberFormat
          value={props.money}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rp. "}
          suffix={".00"}
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: window.innerWidth > 750 ? "20px" : "14px"
          }}
        />
      </div>
    </div>
  );
}
