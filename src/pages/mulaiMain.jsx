import React, { useState } from "react";
import classNames from "classnames";

import Frame from "../mulaiMain/Frame";
import ModeMain from "../modeMain/ModeMain";
import DeathGameOver from "../mulaiMain/DeathGame";
import FailedGameOver from "../mulaiMain/FailedGame";

import "../css/mulaiMain.css";

function MulaiMain(props) {
  const [gameMenu, setGameMenu] = useState(false);
  const [gameName, setGameName] = useState("");
  const [gameMajor, setGameMajor] = useState("");
  const [course, setCourse] = useState([]);
  const [gender, setGender] = useState(true);

  const [isDead, setIsDead] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const updateSetIsDead = () => {
    setIsDead(true);
  };
  const updateSetIsFailed = () => {
    setIsFailed(true);
  };

  const restartGame = () => {
    setIsDead(false);
    setIsFailed(false);
  };

  function changeGameMenu(e) {
    setGameMenu(e); // *
  }

  function changeName(e) {
    setGameName(e);
  }

  function changeMajor(e) {
    setGameMajor(e);
  }

  function changeCourse(e) {
    setCourse(e);
  }

  function switchGender(e) {
    setGender(e);
  }

  const modeMainStyle = classNames("MulaiMain", {
    "w-75 border border-2 py-3 containerBox": gameMenu,
    "w-50 border border-2 py-3 containerBox": !gameMenu
  });

  const isDeadStyle = classNames("MulaiMain", {
    "w-50 border border-2 py-3 containerBox": isDead
  });

  const isFailedStyle = classNames("MulaiMain", {
    "w-50 border border-2 py-3 containerBox": isFailed
  });

  return (
    <div>
      {isDead ? (
        <DeathGameOver restartGame={restartGame} />
      ) : isFailed ? (
        <FailedGameOver restartGame={restartGame} />
      ) : gameMenu ? (
        <div className="containerBoxModeMain">
          <ModeMain
            name={gameName}
            major={gameMajor}
            course={course}
            gender={gender}
            updateSetIsDead={updateSetIsDead}
            updateSetIsFailed={updateSetIsFailed}
          />
        </div>
      ) : (
        <Frame
          value={gameMenu}
          onclick={changeGameMenu}
          name={gameName}
          name_major={gameMajor}
          course={course}
          change_name={changeName}
          change_major={changeMajor}
          change_course={changeCourse}
          gender={gender}
          switchGender={switchGender}
        />
      )}
    </div>
  );
}

export default MulaiMain;
