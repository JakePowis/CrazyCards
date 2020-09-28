import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ setToggleView }) {
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <aside className="sidebar">
      <button
        data-testid="close"
        className="sidebar-close-button"
        onClick={closeMenu}
      >
        x
      </button>
      <h3>Home</h3>
      <ul className="cards">
        <Link to="/">
          <li onClick={() => setToggleView("welcome")}>
            <span className="indent">Match a Card</span>
          </li>
        </Link>
      </ul>

      <h3>Our Cards</h3>
      <ul className="cards">
        <Link to="/card/1">
          <li>
            <span className="indent">Student Life</span>
          </li>
        </Link>
        <Link to="/card/2">
          {" "}
          <li>
            <span className="indent">Anywhere Card</span>
          </li>
        </Link>
        <Link to="/card/3">
          {" "}
          <li>
            <span className="indent">Liquid Card</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
}
