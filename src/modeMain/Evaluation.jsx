import React, { useEffect, useState } from "react";
import "../App.css";

export default function Evaluation(props) {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    console.log("CHANGED");
    setCourseData([]);
    const tempData = courseData;
    var ctr = 0;
    for (let mk of props.attendanceListCourse) {
      tempData.push([mk[0][0]]);
      // console.log(props.infoMatkul);
      tempData[tempData.length - 1].push(mk[0][1]);
      tempData[tempData.length - 1].push(mk[0][2]);
      tempData[tempData.length - 1].push(mk[0][3]);
      tempData[tempData.length - 1].push(props.infoCourse[ctr][1]);
      tempData[tempData.length - 1].push(mk[1]);
      ctr++;
    }
    setCourseData(tempData);
    console.log(courseData);
  }, [props.infoCourse, props.attendanceListCourse]);

  useEffect(() => {
    console.log("woqwowqwoqw");
    props.updateMoney(props.money + 1500 * props.tingkatBelajar);
    console.log(props.tingkatBelajar);
  }, [props.tingkatBelajar]);

  const laporanTingkatBelajar = () => {
    if (props.tingkatBelajar < 100) return "This week you look really lazy :)";
    if (props.tingkatBelajar < 200) return "You still don't learn enough";
    if (props.tingkatBelajar < 350) return "You work hard, keep it up";
    if (props.tingkatBelajar < 450) return "You look excited this week";
    if (props.tingkatBelajar >= 450)
      return "Cool, your enthusiasm for learning is very high, really needs to be appreciated!";
  };

  function TableRow(properties) {
    return (
      <tr>
        <td>{properties.course}</td>
        <td>
          <h1 className="evaluasi-cell-text">{properties.hari}</h1>
          <h1 className="evaluasi-cell-text">
            {properties.jadwalStart < 10
              ? "0" + properties.jadwalStart + ".00"
              : properties.jadwalStart + ".00"}
            -
            {properties.jadwalEnd < 10
              ? "0" + properties.jadwalEnd + ".00"
              : properties.jadwalEnd + ".00"}
          </h1>
        </td>
        <td>{properties.progress} / 14</td>
        <td>{properties.attendance ? "Hadir" : "Tidak Hadir"}</td>
      </tr>
    );
  }

  function checkClassAttendance() {
    // setColorCtr((colorCtr) => colorCtr + 1);
    return (
      <table id="absen-matkul-table">
        <tr>
          <th>Course</th>
          <th>Schedule</th>
          <th>Progress</th>
          <th>Attendance</th>
        </tr>
        {courseData.map((element, index) => (
          <TableRow
            courseName={element[0]}
            hari={element[1]}
            jadwalStart={element[2]}
            jadwalEnd={element[3]}
            progress={element[4]}
            attendance={element[5]}
            style={{
              backgroundColor:
                index % 2 == 0 ? "red !important" : "blue !important"
            }}
          />
        ))}
      </table>
    );
  }

  return (
    <div id="evaluasi-div">
      <h1 id="evaluasi-title">Weekly Evaluation{props.mingguKe}</h1>
      <div id="evaluasi-header">
        <div className="line"></div>
        <div id="evaluasi-identity-wrapper">
          <div className="identity-box">
            <h1 className="evaluasi-header-texts">{props.name}</h1>
          </div>
          <div className="identity-box">
            <h1 className="evaluasi-header-texts">{props.major}</h1>
          </div>
        </div>
      </div>
      <div className="evaluasi-content-wrapper">
        <h1 className="evaluasi-regular-text">{laporanTingkatBelajar()}</h1>
        <progress
          value={props.tingkatBelajar}
          max="600"
          id="progress-belajar-mandiri"
          className="progress-bar"
        ></progress>
        <h1 className="evaluasi-regular-text">
          Your self-study score : {props.tingkatBelajar}
        </h1>
        <h1 className="evaluasi-regular-text" style={{ marginTop: "20px" }}>
          Class Attendance Data This Week
        </h1>
        {checkClassAttendance()}
        <button
          style={{
            marginTop: "20px",
            width: "20%",
            backgroundColor: "#ff6e6e",
            borderRadius: "50px",
            border: "none",
            color: "white",
            boxShadow: "0px 0px 2px 2px grey"
          }}
          onClick={props.resetProgressMingguan}
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
