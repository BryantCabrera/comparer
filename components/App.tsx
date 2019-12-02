import React, { Fragment } from "react";
import "./App.css";
import Table from "./Table";
import getStateAndDispatcher from "./models/Database";
import Slider from "./Slider";

const App: React.FC = () => {
  const { state, dispatcher } = getStateAndDispatcher();

  return (
    <div
      id="app"
      style={{
        display: "flex",
        margin: "100px",
        position: "absolute",
        width: "100%",
        height: "100%"
      }}
      className="App"
    >
      <Fragment>
        <div id="table-div">
          <Table state={state} />
        </div>
        <div id="sliders"></div>
      </Fragment>
    </div>
  );
};

export default App;
