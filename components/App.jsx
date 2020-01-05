import React, { Fragment, useState } from "react";
import Sliders from "./Slider";
import Table from "./Table";
import "./App.css";

const deepCopy = arrayOfObj => JSON.parse(JSON.stringify(arrayOfObj));

const updateCSS = (element, value) =>
  document.documentElement.style.setProperty(element, value);

const init = (numDimensions, numSamples) => {
  const samples = new Array(numSamples).fill(50).map((e, i) => {
    return { key: i, value: e };
  });
  return useState(
    new Array(numDimensions)
      .fill(0) // [0, 0, 0]
      .map(_ => deepCopy(samples)) // [[50, 50, 50], [...], [...]]
      .reduce((acc, vals, index) => {
        // {0: [50, 50], ...}
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
      val.push({ key: state[key].length, value: 50 });
      newState[key] = val;
    });
    setState(newState);
  };
  return (
    <button onClick={handleClick} className="buttons add-sample" type="button">
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
    <button
      onClick={handleClick}
      className="buttons remove-sample"
      type="button"
    >
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
      [Object.keys(state).length]: new Array(sampleArrayOfValues.length)
        .fill(50)
        .map((e, index) => {
          return { key: index, value: e };
        })
    };
    updateCSS("--colNum", Object.keys(newState).length);
    setState(newState);
  };
  return (
    <button className="buttons add-dimension" onClick={handleClick}>
      Add Dimension
    </button>
  );
};

const RemoveDimension = props => {
  const { state, setState } = props;
  const handleClick = () => {
    const lastKey = Object.keys(state).slice(-1) || null;
    lastKey ? delete state[lastKey] : null;
    updateCSS("--colNum", Object.keys(state).length);
    setState({ ...state });
  };
  return (
    <button className="buttons remove-dimension" onClick={handleClick}>
      Remove Dimension
    </button>
  );
};

const App = () => {
  // {0 : [50, 50, 50] ...}
  const [state, setState] = init(3, 2);
  return (
    <div className="container">
      <Fragment>
        <Table state={state} />
        <div className="buttons-container">
          <AddSample state={state} setState={setState} />
          <RemoveSample state={state} setState={setState} />
          <AddDimension state={state} setState={setState} />
          <RemoveDimension state={state} setState={setState} />
        </div>
        <Sliders state={state} setState={setState} />
      </Fragment>
    </div>
  );
};

export default App;
