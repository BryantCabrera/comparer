import React, { Fragment, useState } from "react";
import Sliders from "./Slider";
import Table from "./Table";
import "./App.css";

const init = (numDimensions, numSamples) => {
  const samples = new Array(numSamples).fill(50);
  return useState(
    new Array(numDimensions)
      .fill(0) // [0, 0, 0]
      .map(ar => samples) // [[[50, 40], dispatcher], [...], [...]]
      .reduce((acc, vals, index) => {
        // {0: [[50, 40], dispatcher], 1: ...}
        acc[index] = vals;
        return acc;
      }, {})
  );
};

const AddSample = props => {
  const { state, setState } = props;
  const handleClick = () => {
    const newState = {};
    Object.keys(state).forEach(key => {
      const val = [...state[key]];
      val.push(50);
      newState[key] = val;
    });
    setState(newState);
  };
  return (
    <button onClick={handleClick} type="button">
      {" "}
      Add Sample{" "}
    </button>
  );
};

const RemoveSample = props => {
  const { state, setState } = props;
  const handleClick = () => {
    const newState = {};
    Object.keys(state).forEach(key => {
      const val = [...state[key]].slice(0, -1);
      newState[key] = val;
    });
    setState(newState);
  };
  return (
    <button onClick={handleClick} type="button">
      {" "}
      Remove Sample{" "}
    </button>
  );
};

const AddDimension = props => {
  const { state, setState } = props;
  const handleClick = () => {
    const sampleArrayOfValues = Object.values(state)[0] || [];
    const newState = {
      ...state,
      [Object.keys(state).length]: new Array(sampleArrayOfValues.length).fill(
        50
      )
    };
    console.log(newState);
    setState(newState);
  };
  return <button onClick={handleClick}>Add Dimension</button>;
};

const RemoveDimension = props => {
  const { state, setState } = props;
  const handleClick = () => {
    const lastKey = Object.keys(state).slice(-1) || null;
    lastKey ? delete state[lastKey] : null;
    setState({ ...state });
  };
  return <button onClick={handleClick}>Remove Dimension</button>;
};

const App = () => {
  // {0 : [50, dispatcher] ...}
  const [state, setState] = init(3, 2);
  return (
    <Fragment>
      <Table state={state} />
      <AddSample state={state} setState={setState} />
      <RemoveSample state={state} setState={setState} />
      <AddDimension state={state} setState={setState} />
      <RemoveDimension state={state} setState={setState} />
      <Sliders state={state} setState={setState} />
    </Fragment>
  );
};

export default App;
