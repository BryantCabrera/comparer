import React from "react";
import "./App.css";
import Table from "./Table";
import DatabaseClient from "./DatabaseClient";
import Slider from "./Slider";

const App: React.FC = () => {
  const client = new DatabaseClient();
  return (
    <div style={{ margin: "100px" }} className="App">
      <Slider />
    </div>
  );
};

export default App;
