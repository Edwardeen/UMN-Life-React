import React, { useEffect, useState } from "react";
import "../App.css";

import BoyEat from "../assets/assetsChar/boyEating.gif";
import GirlEat from "../assets/assetsChar/girlEating.png";

import BoyPlay from "../assets/assetsChar/boyPlaying.png";
import GirlPlay from "../assets/assetsChar/girlPlaying.png";

import BoySleep from "../assets/assetsChar/boySleep.png";
import GirlSleep from "../assets/assetsChar/girlSleep.gif";

import BoyStudy from "../assets/assetsChar/boyStudying.png";
import GirlStudy from "../assets/assetsChar/girlStudying.png";

import BoyNormal from "../assets/assetsChar/boy.png";
import GirlNormal from "../assets/assetsChar/girl.png";

export default function Student(props) {
  function studentRegards() {
    if (props.hour >= 0 && props.hour <= 10)
      return `Good Morning, ${props.name}`;
    if (props.hour >= 11 && props.hour <= 15)
      return `Good Afternoon, ${props.name}`;
    if (props.hour >= 16 && props.hour <= 18)
      return `Good Evening, ${props.name}`;
    if (props.hour >= 19 && props.hour <= 24)
      return `Good Night, ${props.name}`;
  }

  useEffect(() => {
    setAnimasiStudent(props.statusStudent);
  }, [props.statusStudent]);

  const [animasiStudent, setAnimasiStudent] = useState(props.statusStudent);

  function changeAnimasi() {
    if (props.gender) {
      // cowo
      if (animasiStudent === "normal") {
        return BoyNormal;
      } else if (animasiStudent === "belajar") {
        return BoyStudy;
      } else if (animasiStudent === "makan") {
        return BoyEat;
      } else if (animasiStudent === "tidur") {
        return BoySleep;
      } else if (animasiStudent === "main") {
        return BoyPlay;
      }
    } else {
      if (animasiStudent === "normal") {
        return GirlNormal;
      } else if (animasiStudent === "belajar") {
        return GirlStudy;
      } else if (animasiStudent === "makan") {
        return GirlEat;
      } else if (animasiStudent === "tidur") {
        return GirlSleep;
      } else if (animasiStudent === "main") {
        return GirlPlay;
      }
    }
  }

  return (
    <div>
      <div className="black-line"></div>
      <div id="center-notifikasi">
        <div id="home-section">
          <img
            id="center-gambar-pemain"
            className="w-50"
            src={changeAnimasi()}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
