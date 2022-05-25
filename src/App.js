import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Weather Search Engine</h1>
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
