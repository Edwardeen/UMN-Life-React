import React, { useEffect, useState } from "react";
import "../App.css";

import Wifi from "../assets/assetsIcon/wifi.png";
import Battery from "../assets/assetsIcon/battery.png";

export default function ResponsivePhone(props) {
  const [newsJSON, setNewsJSON] = useState({});
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [counter, setCounter] = useState(0);

  const url =
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNewsJSON(data.articles);
      });

    const interval = setInterval(function () {
      try {
        const rand = Math.floor(Math.random() * newsJSON.length);
        setNewsTitle(newsJSON[rand].title);
        setNewsContent(newsJSON[rand].description);
      } catch (err) {
        console.error("ERROR");
      }
      clearInterval(interval);
    }, 10000);
  }, [props.jam]);

  ///////////

  return (
    <div id="phone-edge-mobile w-50" onClick={props.close}>
      <div id="phone-screen">
        <div id="phone-top-screen">
          <h1 className="small-text" style={{ marginLeft: "5px" }}>
            {props.jam < 10 ? "0" + props.jam : props.jam} :{" "}
            {props.minute < 10 ? "0" + props.minute : props.minute}
          </h1>
          <div>
            <img
              src={Wifi}
              className="w-25"
              alt="#"
              style={{ marginRight: "7px" }}
            />
            <img src={Battery} className="w-25" alt="#" />
          </div>
        </div>
        <div id="tampilan-search-bar">
          <div id="search-bar">
            <h1
              style={{
                fontSize: "10px",
                marginLeft: "3px"
              }}
            >
              https://worldnews.com
            </h1>
          </div>
        </div>
        <h1 style={{ margin: "0 15px" }}>
          {newsTitle !== "" ? newsTitle : "loading News..."}
        </h1>
        <div
          className="black-line"
          style={{ marginTop: "3px", marginBottom: "3px" }}
        ></div>
        <p style={{ margin: "0 15px" }}>
          {newsContent !== "" ? newsContent : "Loading..."}
        </p>
      </div>
    </div>
  );
}
