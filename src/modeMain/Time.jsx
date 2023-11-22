import React, { useState, useEffect } from "react";
import TimeAndDate from "../assets/assetsIcon/time_date.png";
import "../App.css";

export default function Time(props) {

  return (
    <div
      className="container-jam"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h3
          style={{
            color:
              props.listHari[props.currentHari] === "SUNDAY " ? "red" : ""
          }}
        >
          {props.listHari[props.currentHari]}
        </h3>
        <h3>-</h3>
        <div className="flex-item jam-waktu p-2">
          <h3 className="">
            {props.hour < 10 ? "0" + props.hour : props.hour} :{" "}
            {props.minute < 10 ? "0" + props.minute : props.minute}
          </h3>
        </div>
      </div>
    </div>
  );
}
