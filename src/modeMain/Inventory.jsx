import React, { useState } from "react";
import SotoBetawi from "../assets/other/sotoBetawi.png";
import ChickenExpress from "../assets/other/chickenExpress.png";
import SiomayBatagor from "../assets/other/siomayBatagor.png";
import ChineseFood from "../assets/other/chineseFood.png";
import SmoothieBowl from "../assets/other/smoothieBowl.png";
import TelurGulung from "../assets/other/telurGulung.png";
import Seblak from "../assets/other/seblak.png";
import BolaUbi from "../assets/other/bolaUbi.png";
import "../App.css";

export default function Supermarket(props) {
  const [foodImage, setFoodImage] = useState([
    SotoBetawi,
    ChickenExpress,
    SiomayBatagor,
    ChineseFood,
    SmoothieBowl,
    TelurGulung,
    Seblak,
    BolaUbi
  ]);

  function InventoryItemCard(properties) {
    return (
      <div className="inventory-card-div">
        <img
          className="gambar-supermarket"
          src={foodImage[properties.image - 1]}
          alt="GAMBAR"
        />
        <h1 className="font-tulisan inventory-content-text">
          {properties.name}
        </h1>
        <h1 className="font-tulisan inventory-content-text">
          {properties.stok}
        </h1>
      </div>
    );
  }

  return (
    <div id="inventory-div" className="">
      <div id="inventory-header" style={{ marginBottom: "15px" }}>
        <h1 className="font-tulisan inventory-title">Food Stock</h1>
        <button
          className="btn btn-secondary btnHover"
          onClick={props.updateOpenInventory_OUT}
        >
          X
        </button>
      </div>
      <div id="inventory-content">
        {props.userInventory.map((elements) => (
          <InventoryItemCard
            name={elements[0]}
            stok={elements[1]}
            image={elements[2]}
          />
        ))}
      </div>
    </div>
  );
}
