import React, { Fragment, useState } from "react";
import Sliders from "./Slider";
import Table from "./Table";
import "./App.css";

const init = (numDimensions) => {
    return new Array(numDimensions)
      .fill(0)
      .map(ar => useState(50))
      .reduce((acc, valSetVal, index)=>{
        acc[index] = valSetVal
        return acc
      }, {})
}

const App = () => {
  const valSetValsObj = init(5);
  return (
    <Fragment>
      <Table valSetValsObj={valSetValsObj} />
      <Sliders valSetValsObj={valSetValsObj} />
    </Fragment>
  );
};

export default App;
