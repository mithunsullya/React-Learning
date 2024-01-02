import React from "react";
import { createRoot } from "react-dom/client";
import Basics from "./Basics";

const App = () => {
  return (
    <div className="basic-jsx">
      <h1> Hello World </h1>
      <p> THis is the sample Jsx code. </p>
      <Basics />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
