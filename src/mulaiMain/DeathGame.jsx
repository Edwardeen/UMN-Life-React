import React, { useState } from "react";
import ImageGO from "../assets/assetsBackground/gamefinish.jpg";
import "../css/DeathGame.css";

export default function DeathGame(props) {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 id="text">Keep well...</h1>
      <button onClick={props.restartGame}>Play Again</button>
    </div>
  );
}
