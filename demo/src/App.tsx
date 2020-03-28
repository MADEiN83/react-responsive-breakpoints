import React from "react";
import logo from "./logo.svg";

import { useBreakpoints } from "react-responsive-hooks";

function App() {
  const breakpoints = useBreakpoints();
  console.log(breakpoints);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Try to resize your browser</p>
        <p>
          <em>{JSON.stringify(breakpoints)}</em>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
