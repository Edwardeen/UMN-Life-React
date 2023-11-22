import React, { useState } from "react";
import ImageGO from "../assets/assetsBackground/gamefinish.jpg";
import "../css/FailedGame.css";

export default function FailedGame(props) {
  return (
    <div
      style={{
        backgroundColor: "",
        height: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 className="mb-3 fw-bold h1do">You failed University!</h1>
      <h1>Study hard, don't always have fun</h1>
      <button onClick={props.restartGame}>Play Again</button>
    </div>
  );
}
