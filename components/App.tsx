import React, { Fragment, useReducer } from "react";
import "./App.css";
import Database from "./models/Database";
import Table from "./Table";
import Slider from "./Slider";

const _has = (value: any) => {
  return value !== "" && value !== null && value !== undefined;
};
const _reducer = (state: any, action: any) => {
  console.log('state', console.log(state))
  console.log('action', console.log(action))
  if ([action.colName, action.rowNumber, action.value].every(v => _has(v))) {
    const colName = action.colName;
    const rowNumber = action.rowNumber;
    state[colName][rowNumber] = action.value;
  }
  return state;
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(_reducer, {'d1':[14]}) 
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
      <Database.Provider value={{state, dispatch}}>
      <Fragment>
        <div id="table-div">
          <Table />
        </div>
        <div id="sliders">
          <Slider />
        </div>
      </Fragment>
      </Database.Provider>
    </div>
  );
};

export default App;
