import "../App.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-md navbar-${props.mode.bgcol === 'white'? 'light':'dark'} bg-${props.mode.bgcol === 'white'? 'light':'dark'}`}
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <button className="btn1" onClick={()=> {props.toggleMode('white','black','black','white','Light')}}></button>
            <button className="btn2" onClick={()=> {props.toggleMode('#533549','white','#F6B042','black', 'Wild')}}></button>
            <button className="btn3" onClick={()=> {props.toggleMode('#042743','white','green','white', 'Cool')}}></button>
            <button className="btn4" onClick={()=> {props.toggleMode('#292826','white','#010B13','white', 'Dark')}}></button>


            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togmode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable darkmode
              </label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
// used for checking errors of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
// default values of props
Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About",
};
