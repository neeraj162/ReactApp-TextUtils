
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
        <h5>{props.heading}</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpeech}>
          Speech
        </button>
      </div>
      <div className="container my-3">
        <h5>Your text summary</h5>
        <p>
          {countWords(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
    </>
  );
}
