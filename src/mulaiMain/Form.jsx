import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");

  const chooseMajor = [
    {
      id: 0,
      major: "Choose your major"
    },
    {
      id: 1,
      major: "Informatika",
      course: [
        ["Sistem Digital", "SENIN", 8, 12],
        ["Matematika Diskrit", "SELASA", 13, 17],
        ["Programming Fundamental", "KAMIS", 13, 17]
      ]
    },
    {
      id: 2,
      major: "Desain Komunikasi Visual",
      course: [
        ["Drawing Principles", "SENIN", 8, 12],
        ["History of Art and Design", "SELASA", 13, 17],
        ["Typhography Principles", "KAMIS", 13, 17]
      ]
    },
    {
      id: 3,
      major: "Komunikasi Strategis",
      course: [
        ["Introduction to Communication Science", "SENIN", 8, 12],
        ["Communication & Technology", "SELASA", 13, 17],
        ["Business Principle", "KAMIS", 13, 15]
      ]
    },
    {
      id: 4,
      major: "Manajemen",
      course: [
        ["Fundamental of Business", "SENIN", 8, 12],
        ["Microeconomics", "SELASA", 13, 17],
        ["Mathematic for Business", "KAMIS", 13, 17]
      ]
    }
  ];

  function changeState(e) {
    if (name === "" || major === "" || major === "Choose your major") {
      if (name !== "" && major === "Choose your major") {
        alert("Please enter your study program!");
        return;
      } else if (name === "" && major !== "Choose your major" && major !== "") {
        alert("Please enter your name!");
        return;
      } else {
        alert("Please enter your name and course of study!");
        return;
      }
    }
    e.target.value = true;
    props.change_name(name);
    props.change_major(major);

    for (let i of chooseMajor) {
      if (i.major === major) {
        props.change_course(i.course);
        break;
      }
    }

    props.onclick(e.target.value);
  }

  const handleInputName = (event) => setName(event.target.value);
  const handleInputMajor = (event) => setMajor(event.target.value);
  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-2" id="login-form">
      <div className="d-flex flex-row justify-content-center">
        <form
          onSubmit={submitForm}
          className="d-flex flex-column justify-content-center"
        >
          <input
            className="form-control mx-auto text-center w-auto customStyleBox"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputName}
          />

          <select
            name={major}
            id="choose-major"
            value={major}
            onChange={handleInputMajor}
            className="btn btn-primary mx-auto mt-3 text-center w-auto customStyleBox"
          >
            {chooseMajor.map((j) => (
              <option
                id={j.id}
                key={j.id}
                value={j.major}
                onClick={handleInputMajor}
              >
                {j.major}
              </option>
            ))}
          </select>
          <button
            className="mx-auto mt-3 btn btn-primary btnHover w-auto customStyleBox"
            type="submit"
            value={props.value}
            onClick={changeState}
          >
            Let's get started!
          </button>
        </form>
      </div>
    </div>
  );
}
