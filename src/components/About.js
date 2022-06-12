import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    
  });

  const [button, setBtntext] = useState("Enable Dark mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black", 
      });
      setBtntext("Enable Light mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtntext("Enable Dark mode");
    }
  };

  return (
    <div className="container px-3 py-1" style={myStyle} id="featured-3">
      <h3 className="pb-2 border-bottom">About Text Utils page</h3>
      <div className="row g-4 py-3 row-cols-1 row-cols-lg-1">
        <div className="feature col">
          <h3>String Functions</h3>
          <p>
            Apart from counting words and characters, our online editor can help
            you to improve word choice and writing style, and, optionally, help
            you to detect grammar mistakes and plagiarism. To check word count,
            simply place your cursor into the text box above and start typing.
            You'll see the number of characters and words increase or decrease
            as you type, delete, and edit them. You can also copy and paste text
            from another program over into the online editor above. The
            Auto-Save feature will make sure you won't lose any changes while
            editing, even if you leave the site and come back later. Tip:
            Bookmark this page now. Knowing the word count of a text can be
            important. For example, if an author has to write a minimum or
            maximum amount of words for an article, essay, report, story, book,
            paper, you name it. WordCounter will help to make sure its word
            count reaches a specific requirement or stays within a certain
            limit.
          </p>
        </div>
      </div>
      <hr />
      <button onClick={toggleStyle} type="button" className="btn btn-primary">
        {button}
      </button>
    </div>
  );
}
