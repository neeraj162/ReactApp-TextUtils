/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light');
  const toggleMode = ()=> {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Text Utils" mode={Mode} togmode={toggleMode}/>
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze" mode={Mode}/>
        {/* <About/> */}
      </div>
      
      
    </>
  );
}

export default App;
