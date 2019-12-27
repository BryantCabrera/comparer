import React, { Fragment, useState } from "react";
import Sliders from "./Slider";
import Table from "./Table";
import "./App.css";

const init = (numDimensions, numSamples) => {
  const samples = new Array(numSamples).fill(50);
  return new Array(numDimensions)
    .fill(0) // [0, 0, 0, 0, 0]
    .map(ar => useState(samples)) // [[[50, 40], dispatcher], [...], [...]]
    .reduce((acc, valSetVal, index) => {
      // {0: [[50, 40], dispatcher], 1: ...}
      acc[index] = valSetVal;
      return acc;
    }, {});
};

const AddSample = props => {
  const { valSetValsObj } = props;
  const handleClick = () => {
    Object.entries(valSetValsObj).map(entry => {
      const [key, valSetVal] = entry;
      const [val, setVal] = valSetVal;
      const newVal = [...val, 50];
      setVal(newVal);
    });
  };
  return (
    <button onClick={handleClick} type="button">
      {" "}
      Add Sample{" "}
    </button>
  );
};

const RemoveSample = props => {
  const { valSetValsObj } = props;
  const handleClick = () => {
    Object.entries(valSetValsObj).map(entry => {
      const [key, valSetVal] = entry;
      const [val, setVal] = valSetVal;
      const newVal = [...val].slice(0, -1);
      setVal(newVal);
    });
  };
  return (
    <button onClick={handleClick} type="button">
      {" "}
      Remove Sample{" "}
    </button>
  );
};

const App = () => {
  // {0 : [50, dispatcher] ...}
  const valSetValsObj = init(3, 2);
  return (
    <Fragment>
      <Table valSetValsObj={valSetValsObj} />
      <AddSample valSetValsObj={valSetValsObj} />
      <RemoveSample valSetValsObj={valSetValsObj} />
      <Sliders valsSetValsObj={valSetValsObj} />
    </Fragment>
  );
};

export default App;
