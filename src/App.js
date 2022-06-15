/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState({
    bgcol: "white",
    col: "black",
    btnbg: "black",
    btncol: "white",
    alertcol: "light",
  }); // state for dark mode
  const [alert, setAlert] = useState(null); // state for alert

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  
  const removeBodyClass = () => {
    document.body.classList.remove("white");
    document.body.classList.remove("#042743");
    document.body.classList.remove("black");
    document.body.classList.remove("green");
  };

  const toggleMode = (bgcol, col, btnbg, btncol,alertcol) => {
    removeBodyClass();

    console.log(Mode);
    document.body.style.backgroundColor = bgcol;
    if(bgcol !== Mode.bgcol)
      showAlert(alertcol + " mode has been enabled", "success");

    setMode({ bgcol: bgcol, col: col, btnbg: btnbg, btncol: btncol,alertcol: alertcol});
  };
  return (
    <>
      <Router>
        <Navbar title="Text Utils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={Mode}/>}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>}/>
          </Routes>
        </div>
      </Router>
    </> 
  );
}

export default App;
