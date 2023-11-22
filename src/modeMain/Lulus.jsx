import React, { useState } from "react";
import LogoUMN from "../assets/other/logoUMN.png";
import GirlProfile from "../assets/assetsGame/profile_girl.png";
import BoyProfile from "../assets/assetsGame/profile_boy.png";

export default function Lulus(props) {
  return (
    <div
      style={{
        backgroundColor: "#ffe08c",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        boxShadow: "0px 0px 4px 4px grey",
        height: "80%",
        width: "80%",
        zIndex: 10,
        overflowY: "hidden",
        border: "1px solid #291809"
      }}
    >
      <div className="sidepipe sp-1"></div>
      <div className="sidepipe sp-2"></div>

      <img id="foto-mhs" src={props.gender ? BoyProfile : GirlProfile} alt="" />
      <div id="ijazah-content">
        <h1 id="ijazah-title-bold">Certificate</h1>
        <h1 id="ijazah-diberikan-kepada">Presented to</h1>
        <h1 className="ijazah-identitas">
          <i>{props.name}</i>
        </h1>
        <h1 className="ijazah-pernyataan">
          for fulfilling the requirements as a 7-day college graduate
        </h1>
        <h1 className="ijazah-identitas">
          <i>Jurusan {props.major}</i>
        </h1>

        <h1 className="ijazah-footer">Sincerely,</h1>
        <h1 className="ijazah-footer">Universitas Multimedia Nusantara</h1>
        <button onClick={props.backToMainMenu} id="button-exit-ijazah">
          Back to the menu
        </button>
      </div>
      <img id="logo-umn" src={LogoUMN} alt="logoumn" />
    </div>
  );
}
