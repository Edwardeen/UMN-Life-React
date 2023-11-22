import React, { useEffect, useState } from "react";
import Wifi from "../assets/assetsIcon/wifi.png";
import Battery from "../assets/assetsIcon/battery.png";
import "../App.css";

export default function News(props) {
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

  return (
    <div id="phone-edge">
      <div id="phone-screen">
        <div id="phone-top-screen" className="px-2">
          <h1 className="small-text" style={{ marginLeft: "5px" }}>
            {props.jam < 10 ? "0" + props.jam : props.jam} :{" "}
            {props.minute < 10 ? "0" + props.minute : props.minute}
          </h1>
          <div>
            <img src={Wifi} alt="" style={{ marginRight: "7px" }} />
            <img src={Battery} alt="" />
          </div>
        </div>
        <div id="tampilan-search-bar">
          <div id="search-bar">
            <h1
              style={{
                fontSize: "10px",
                margin: "4px 5px"
              }}
            >
              https://worldnews.com
            </h1>
          </div>
        </div>
        <h1 className="text-center pt-2" style={{ margin: "5px 15px" }}>
          {newsTitle !== "" ? newsTitle : "Loading News..."}
        </h1>
        <div
          className="black-line"
          style={{ marginTop: "3px", marginBottom: "3px" }}
        ></div>
        <p className="" style={{ margin: "0 15px", textAlign: "justify" }}>
          {newsContent !== "" ? newsContent : "Loading..."}
        </p>
      </div>
    </div>
  );
}
