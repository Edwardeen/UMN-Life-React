import React, { useState } from "react";
import BoyLogin from "../assets/assetsChar/boy.png";
import GirlLogin from "../assets/assetsChar/girl.png";

export default function Character(props) {
  function swap() {
    props.switchGender(!props.gender);
  }

  return (
    <div
      className="d-flex flex-column justify-content-center"
      id="pilih-gender-frame"
    >
      <div className="text-center" id="pg-title">
        <h3>Choose your character</h3>
      </div>
      <div
        className="d-inline-flex justify-content-center align-items-center"
        id="pg-visual"
      >
        <div className="switchLeft" onClick={swap}></div>
        <img
          className="gambar-karakter"
          src={props.gender ? BoyLogin : GirlLogin}
          alt=""
        />
        <div className="switchRight" onClick={swap}></div>
      </div>
    </div>
  );
}
