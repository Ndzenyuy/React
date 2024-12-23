import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form const isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
