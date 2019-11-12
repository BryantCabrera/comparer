import React from "react";
import "./App.css";
import Table from "./Table";
import DatabaseClient from "./DatabaseClient";

const App: React.FC = () => {
  const client = new DatabaseClient();
  return (
    <div style={{ margin: "10px" }} className="App">
      <Table />
    </div>
  );
};

export default App;
