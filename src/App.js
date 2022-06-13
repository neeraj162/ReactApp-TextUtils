/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";

function App() {
  const [Mode, setMode] = useState({bgcol: 'white', col: 'black', btnbg: 'black', btncol: 'white'}); // state for dark mode
  const [alert, setAlert] = useState(null); // state for alert
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const removeBodyClass = ()=> {
    document.body.classList.remove('white');
    document.body.classList.remove('#042743');
    document.body.classList.remove('black');
    document.body.classList.remove('green');
  }


  const toggleMode = (bgcol,col,btnbg,btncol)=> {
    removeBodyClass();

    console.log(Mode);
    document.body.style.backgroundColor = bgcol;
    showAlert(bgcol + " mode has been enabled","success"); 

    setMode({bgcol: bgcol, col: col, btnbg: btnbg, btncol: btncol});
    
  }
  return (
    <>
      <Navbar title="Text Utils" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>
        {/* <About/> */}
      </div>
      
      
    </>
  );
}

export default App;
