import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Timer";

import "./styles.css";

function App() {
  return <Timer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
