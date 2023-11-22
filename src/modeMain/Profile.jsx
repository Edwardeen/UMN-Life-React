import React, { useState } from "react";
import BGprofile from "../assets/assetsGame/background_profile.png";
import BoyProfile from "../assets/assetsGame/profile_boy.png";
import GirlProfile from "../assets/assetsGame/profile_girl.png";
import "../App.css";

export default function Profile(props) {
  return (
    <div
      id="profile-div"
      onClick={props.updateProfile}
      style={{
        backgroundImage: `url(${BGprofile})`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <img
        id="profile-foto"
        src={props.gender ? BoyProfile : GirlProfile}
        alt=""
      />
      <p id="profile-nim">00000058743</p>
      <h2 id="profile-nama">{props.name}</h2>
      <p id="profile-jurusan">{props.major}</p>
      <p id="profile-tanggal">Angkatan 2021</p>
    </div>
  );
}
