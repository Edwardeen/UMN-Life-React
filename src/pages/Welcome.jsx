import { Link, useNavigate } from "react-router-dom";

import "../css/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="text-center m-3 customStyle border border-2 py-3 w-50 mt-5 containerBox">
      <h3 className="font-weight-bold">WELCOME TO</h3>
      <h3>THE SIMULATION GAME OF UMNLife</h3>
      <h3>7 Days Student</h3>
      <p className="pt-1">
        Please read the{" "}
        <Link className="text-decoration-none" to="./Rules">
          rules
        </Link>{" "}
        first before you playing the game.
      </p>
      <button
        onClick={() => navigate("./MulaiMain")}
        id="headerButton"
        type="button"
        className="btn bg-light mt-5 buttonWelcome"
      >
        Enter
      </button>
    </div>
  );
}

export default Welcome;
