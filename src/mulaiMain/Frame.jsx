import React, { useState } from "react";
import Character from "./Character";
import Form from "./Form";

export default function Frame(props) {
  return (
    <div id="login-frame" className="my-5">
      <Character gender={props.gender} switchGender={props.switchGender} />
      <Form
        value={props.value}
        onclick={props.onclick}
        name={props.name}
        major={props.name_major}
        course={props.course}
        change_name={props.change_name}
        change_major={props.change_major}
        change_course={props.change_course}
        changeApprove={props.changeApprove}
      />
    </div>
  );
}
