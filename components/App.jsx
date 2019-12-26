import React, { Fragment, useState } from "react";
import Sliders from "./Slider";
import Table from "./Table";
import "./App.css";

const init = numDimensions => {
  return new Array(numDimensions)
    .fill(0) // [0, 0, 0, 0, 0]
    .map(ar => useState([50, 40])) // [[[50, 40], dispatcher], [...], [...]]
    .reduce((acc, valSetVal, index) => {
      // {0: [[50, 40], dispatcher], 1: ...}
      acc[index] = valSetVal;
      return acc;
    }, {});
};

const App = () => {
  // {0 : [50, dispatcher] ...}
  const valSetValsObj = init(5);
  return (
    <Fragment>
      <Table valSetValsObj={valSetValsObj} />
      <Sliders valsSetValsObj={valSetValsObj} />
    </Fragment>
  );
};

export default App;
