import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [typedText, setTypedText] = useState("");
  const [hovered, setHovered] = useState(false);

  function captureText(event) {
    setText(event.target.value);
    console.log(event.target.value);
  }
  function displayText() {
    setTypedText(text);
  }
  function setHoverFlag() {
    setHovered(true);
  }
  function unsetHoverFlag() {
    setHovered(false);
  }

  return (
    <div className="container">
      <h1>Hello {typedText}</h1>
      <input
        onChange={captureText}
        type="text"
        placeholder="What's your name?"
        value={text}
      />
      <button
        onClick={displayText}
        onMouseOver={setHoverFlag}
        onMouseOut={unsetHoverFlag}
        style={{ backgroundColor: hovered ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
