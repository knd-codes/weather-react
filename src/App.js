import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <h1>Krista's Weather App</h1>
      <Weather defaultCity="Dallas" />
      <footer>
        Project was coded by Krista Gonzalez, open-sourced on GitHub
        <a
          href="https://github.com/knd-codes/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
        </a>
       {" "} and {" "}
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        </footer>
        </div>
  );
}