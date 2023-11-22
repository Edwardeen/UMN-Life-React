import React, { useState, useEffect } from "react";
import Belajar from "../assets/assetsIcon/study.png";
import Main from "../assets/assetsIcon/play.png";
import Makan from "../assets/assetsIcon/eating.png";
import Tidur from "../assets/assetsIcon/sleep.png";
import "../App.css";

export default function Status(props) {
  // const [progress, setProgress] = useState([
  //   ["Makan", 50],
  //   ["Main", 50],
  //   ["Tidur", 50],
  //   ["Belajar", 0]
  // ]);
  // useEffect(function appRunTimer() {
  //   const interval = setInterval(() => {
  //     var tempActions = [...progress];

  //     if (tempActions[0][1] >= 100) {
  //       tempActions[0][1] = 100;
  //     }
  //     if (tempActions[1][1] >= 100) {
  //       tempActions[1][1] = 100;
  //     }
  //     if (tempActions[2][1] >= 100) {
  //       tempActions[2][1] = 100;
  //     }

  //     if (tempActions[0][1] >= 2) tempActions[0][1] -= 2;
  //     if (tempActions[1][1] >= 2) tempActions[1][1] -= 2;
  //     if (tempActions[2][1] >= 2) tempActions[2][1] -= 2;

  //     // console.log(tempActions[0][1]);
  //     // console.log(tempActions[1][1]);
  //     // console.log(tempActions[2][1]);

  //     if (tempActions[0][1] <= 15) {
  //       props.updateNotif("Makan dl");
  //     }
  //     if (tempActions[1][1] <= 15) {
  //       props.updateNotif("Main");
  //     }
  //     if (tempActions[2][1] <= 15) {
  //       props.updateNotif("Tidur dl");
  //     }

  //     if (tempActions[3][1] <= 15) {
  //       props.updateNotif("Belajar dl");
  //     }

  //     if (tempActions[3][1] >= 100) {
  //       props.getBelajarValue(tempActions[3][1]);
  //       tempActions[3][1] = 0;
  //     }
  //     props.getBelajarValue(tempActions[3][1]);
  //     setProgress(tempActions);
  //   }, 1000);

  //   return function stopTimer() {
  //     clearInterval(interval);
  //   };
  // }, []);

  // // const interval = setInterval(function () {
  // //   var tempActions = [...progress];
  // //   if (tempActions[0][1] >= 2) tempActions[0][1] -= 2;
  // //   if (tempActions[1][1] >= 2) tempActions[1][1] -= 2;
  // //   if (tempActions[2][1] >= 2) tempActions[2][1] -= 2;

  // //   console.log(tempActions[0][1]);
  // //   // console.log(tempActions[1][1]);
  // //   // console.log(tempActions[2][1]);

  // //   if (tempActions[0][1] <= 15) {
  // //     props.updateNotif("Makan dl");
  // //   }
  // //   if (tempActions[1][1] <= 15) {
  // //     props.updateNotif("Main");
  // //   }
  // //   if (tempActions[2][1] <= 15) {
  // //     props.updateNotif("Tidur dl");
  // //   }

  // //   if (tempActions[3][1] <= 15) {
  // //     props.updateNotif("Belajar dl");
  // //   }

  // //   if (tempActions[3][1] >= 100) {
  // //     props.getBelajarValue(tempActions[3][1]);
  // //     tempActions[3][1] = 0;
  // //   }
  // //   props.getBelajarValue(tempActions[3][1]);

  // //   setProgress(tempActions);
  // //   clearInterval(interval);
  // // }, 1000);

  // function doAction(action) {
  //   var incrementVal = 10;
  //   if (action === "Belajar") incrementVal = 1;
  //   var tempActions = [...progress];
  //   for (let i of tempActions) {
  //     if (i[0] === action) i[1] += incrementVal;
  //   }
  //   setProgress(tempActions);
  //   // clearInterval(interval);
  // }

  return (
    <div
      className="p-1"
      id="right-status-frame"
      style={{
        backgroundColor: "#F8FCDA",
        borderRadius: "8px",
        boxShadow: "0px 0px 5px 2px black",
        width: "275px"
      }}
    >
      {props.progress.map((status) => (
        <div className="container align-center align-items-center">
          <h5 className="progress-text text-center my-3" id="TextNamaStatus">
            {status[0]}
          </h5>
          <div className="progress-div d-inline-flex flex-row m-0">
            <button
              onClick={() => props.doAction(status[0])}
              disabled={status[status.length - 1]}
              className="player-action-button"
              id="ButtonStatus"
            >
              <img
                className="logoStatus w-50"
                id="logoStatus"
                src={
                  status[0] === "Makan"
                    ? Makan
                    : status[0] === "Main"
                    ? Main
                    : status[0] === "Tidur"
                    ? Tidur
                    : status[0] === "Study"
                    ? Belajar
                    : null
                }
                alt=""
              />
            </button>
            <progress
              className="progress-bar mx-3 w-500 my-2"
              id="progressbar"
              value={status[1]}
              max="200"
              min="0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
