import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
