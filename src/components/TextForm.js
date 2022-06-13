
import React, { useState } from "react";

export default function TextForm(props) {
  // const { speak } = useSpeechSynthesis()
  let voices = window.speechSynthesis.getVoices();
  let utterance;
  const handleUpClick = () => {
    // console.log("upper key was clicked")
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("upper key was clicked")
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log('OHH changed')
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  };
  const handleSpeech = () => {
    utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[4];
    console.log(utterance);
    speechSynthesis.speak(utterance);
  }
  const countWords = (str)=> {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  


  const [text, setText] = useState("");
  
  // wrong way to change the state is text="hello";
  return (
    <>
      <div className="container">
        <h5 style={{color: props.mode.col}}>{props.heading}</h5>
        <div className="mb-3">
          <textarea
            className="form-control px:2"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode.bgcol === 'white'?'white':'grey', color: props.mode.col === 'white'?'white':'black', cursor: 'url()'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn mx-1" style={{backgroundColor: props.mode.btnbg,  color: props.mode.btncol}} onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn mx-1" style={{backgroundColor: props.mode.btnbg,  color: props.mode.btncol}}  onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn mx-1" style={{backgroundColor: props.mode.btnbg,  color: props.mode.btncol}} onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn mx-1" style={{backgroundColor: props.mode.btnbg,  color: props.mode.btncol}} onClick={handleCopy}>
          Copy
        </button>
        <button className="btn mx-1" style={{backgroundColor: props.mode.btnbg,  color: props.mode.btncol}} onClick={handleSpeech}>
          Speech
        </button>
      </div>
      <div className="container my-3">
        <h5 style={{color: props.mode.col}}>Your text summary</h5>
        <p style={{color: props.mode.col}}>
          {countWords(text)} words and {text.length} characters
        </p>
        <p style={{color: props.mode.col}}>{0.008 * countWords(text)} minutes to read</p>
      </div>
    </>
  );
}
