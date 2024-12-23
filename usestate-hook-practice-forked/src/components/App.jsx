import React, { useState } from "react";

function App() {
  function getTime() {
    let time = new Date().toLocaleTimeString();
    return time.substring(0, 7);
  }
  const [count, setCount] = useState(getTime);

  function refresh() {
    setCount(getTime);
  }

  setInterval(refresh, 1000);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={refresh}>Get Time</button>
    </div>
  );
}

export default App;
