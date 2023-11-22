import { Link } from "react-router-dom";

import "../css/Header.css";

function Header() {
  return (
    <div className="border-bottom border-2" id="pg-title">
      <div className="text-center">
        <img
          className="logo"
          src={require("../assets/other/logoUMN.png")}
          alt="Logo"
        />
        <h2 className="7Days pt-1">7 Days Student</h2>
      </div>
      <div className="navbar navbar-expand-lg navbar-light justify-content-center border-top border-2 mt-4">
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img
              src={require("../assets/assetsIcon/expand-arrow.png")}
              alt="#"
            />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-center w-100 justify-content-around">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="./">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./About">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Rules">
                RULES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Credits">
                CREDITS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
