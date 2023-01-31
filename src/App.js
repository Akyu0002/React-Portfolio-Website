import React from "react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
