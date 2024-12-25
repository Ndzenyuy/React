import React, { useState } from "react";

function App() {
  const [headingText, changeHeadingText] = useState("Hello");
  const [isMousedOver, changeState] = useState(false);

  function handleClic() {
    changeHeadingText("Submitted");
  }
  function handleMouseOver() {
    changeState(true);
  }
  function handleMouseOut() {
    changeState(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClic}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
