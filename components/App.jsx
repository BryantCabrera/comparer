import React, { Fragment, useState } from "react";
import { CSVLink } from "react-csv";

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
        acc[`dimension ${index}`] = vals;
        return acc;
      }, {})
  );
};

const initRowNames = numSamples =>
  useState(new Array(numSamples).fill("").map((_, index) => `Sample ${index}`));

const AddSample = props => {
  const { state, setState, rowNames, setRowNames } = props;
  const handleClick = () => {
    const newState = {};
    Object.keys(state).forEach(key => {
      const val = [...state[key]];
      val.push({ key: state[key].length, value: 50 });
      newState[key] = val;
    });
    setState(newState);
    setRowNames([...rowNames].concat([`Sample ${rowNames.length}`]));
  };
  return (
    <button onClick={handleClick} className="buttons add-sample" type="button">
      {" "}
      Add Sample{" "}
    </button>
  );
};

const RemoveSample = props => {
  const { state, setState, rowNames, setRowNames } = props;
  const handleClick = () => {
    const newState = {};
    Object.keys(state).forEach(key => {
      const val = [...state[key]].slice(0, -1);
      newState[key] = val;
    });
    setState(newState);
    setRowNames(rowNames.slice(0, -1));
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
  const { state, setState, setRowNames, rowNames } = props;
  const handleClick = () => {
    const sampleArrayOfValues = Object.values(state)[0] || [];
    const newState = {
      ...state,
      [`dimension ${Object.keys(state).length}`]: new Array(
        sampleArrayOfValues.length || 1
      )
        .fill(50)
        .map((e, index) => {
          return { key: index, value: e };
        })
    };
    updateCSS("--colNum", Object.keys(newState).length);
    // edge case, when all dimensions have been removed and a new dimension is being added, we need to add
    // a sample name
    if (rowNames.length == 0) setRowNames(["Sample 0"]);
    setState(newState);
  };
  return (
    <button className="buttons add-dimension" onClick={handleClick}>
      Add Dimension
    </button>
  );
};

const RemoveDimension = props => {
  const { state, setRowNames, setState } = props;
  const handleClick = () => {
    const lastKey = Object.keys(state).slice(-1) || null;
    lastKey ? delete state[lastKey] : null;
    if (Object.keys(state).length === 0) setRowNames([]); // if this is the last dimension, also remove all samples
    updateCSS("--colNum", Object.keys(state).length);
    setState({ ...state });
  };
  return (
    <button className="buttons remove-dimension" onClick={handleClick}>
      Remove Dimension
    </button>
  );
};

const DownloadCSV = props => {
  const csvData = [];
  const { rowNames, state } = props;
  const colNames = Object.keys(state);
  const headers = ["name", ...colNames];
  csvData.push(headers);

  rowNames.forEach((rowName, index) => {
    let row = [rowName];
    colNames.forEach(cname => {
      row.push(state[cname][index]["value"]);
    });
    csvData.push(row);
  });

  return (
    <button className="buttons download">
      {
        <CSVLink
          className="download"
          data={csvData}
          filename={"comparer-io.csv"}
        >
          Download CSV
        </CSVLink>
      }
    </button>
  );
};

const App = () => {
  // {0 : [50, 50, 50] ...}
  const [state, setState] = init(3, 2);
  const [rowNames, setRowNames] = initRowNames(2);
  return (
    <Fragment>
      <p className="title">The Comparer App - Decide Better</p>
      <div className="container">
        <Fragment>
          <Table
            state={state}
            setState={setState}
            rowNames={rowNames}
            setRowNames={setRowNames}
          />
          <div className="buttons-container">
            <AddSample
              state={state}
              setState={setState}
              rowNames={rowNames}
              setRowNames={setRowNames}
            />
            <RemoveSample
              state={state}
              setState={setState}
              rowNames={rowNames}
              setRowNames={setRowNames}
            />
            <AddDimension
              state={state}
              setState={setState}
              setRowNames={setRowNames}
              rowNames={rowNames}
            />
            <RemoveDimension
              state={state}
              setState={setState}
              setRowNames={setRowNames}
            />
            <DownloadCSV state={state} rowNames={rowNames} />
          </div>
          <Sliders state={state} setState={setState} rowNames={rowNames} />
        </Fragment>
      </div>
    </Fragment>
  );
};

export default App;
