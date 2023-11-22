import React, { useState } from "react";
import NumberFormat from "react-number-format";
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
  var counter = 0;

  function callBuyItem(callback, itemName) {
    callback(itemName);
  }

  function ItemCard(properties) {
    return (
      <div className="supermarket-item-card">
        <img
          className="image-supermarket"
          src={properties.image}
          alt="GAMBAR"
        />
        <h1 className="supermarket-name-item">{properties.name}</h1>
        <h1 className="supermarket-ptice-item">
          Harga :{" "}
          <NumberFormat
            value={properties.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp. "}
            suffix={".00"}
          />
        </h1>
        <h1 className="supermarket-stok-item">Stok : {properties.stok}</h1>
        <button onClick={() => properties.buyItem(properties.name)}>
          Beli
        </button>
      </div>
    );
  }

  return (
    <div id="supermarket-div">
      <div id="supermarket-header">
        <h1>Welcome to Supermarket</h1>
        <button onClick={props.updateOpenSupermarketMenu}>X</button>
      </div>
      <div id="frame-barang">
        {props.supermarketItemList.map((obj) => (
          <ItemCard
            name={obj[0]}
            price={obj[1]}
            stok={obj[2]}
            image={foodImage[obj[3] - 1]}
            buyItem={props.buyItem}
          />
        ))}
      </div>
    </div>
  );
}
