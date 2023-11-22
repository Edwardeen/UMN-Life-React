import { StrictMode } from "react";

const CreditsCard = (props) => {
  return (
    <div className="square text-center">
      <div className="personImg">
        <img
          className="w-50 rounded-circle"
          src={props.img}
          alt={`${props.name}'s Photo`}
        />
      </div>
      <h3>{props.name}</h3>
      <p>{props.nim}</p>
    </div>
  );
};

export default CreditsCard;
