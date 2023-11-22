import React, { useState } from "react";
import "../App.css";

export default function Tambahan(props) {
  return (
    <div className="row right-bottom-menu text-center">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan tombol-supermarket btnHover"
            onClick={props.updateOpenSupermarketMenu}
          >
            Buy necessities
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan btnHover"
            onClick={props.updateProfile}
          >
            Profile
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan btnHover"
            onClick={props.updatePM}
          >
            Course
          </button>
        </div>
      </div>
    </div>
  );
}
