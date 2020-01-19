import React, { Fragment, useState } from "react";

const Row = props => {
  return (
    <Fragment>
      <div> {props.rowName} </div>
      {props.rowValues.map((score, index) => (
        <div key={index}> {score.value} </div>
      ))}
    </Fragment>
  );
};

const transpose = columnWiseRows => {
  const rows = new Array(columnWiseRows[0].length);
  columnWiseRows.forEach(arr => {
    arr.forEach((obj, index) => {
      rows[index] ? rows[index].push(obj) : (rows[index] = [obj]);
    });
  });
  return rows;
};
const Rows = props => {
  const rows = transpose(props.rows);
  return rows.map((row, index) => (
    <Row key={index} rowName={`Sample ${index}`} rowValues={row} />
  ));
};

const Column = props => {
  const [state, setState] = useState(props.name);
  const { index, name } = props;
  const handleChange = e => setState(e.target.value);
  const handleEnter = e => {if(e.keyCode == 13) handleUpdate(e)}
  const handleUpdate = (e) => {
    const newState = {} 
    Object.entries(props.parentState)
      .forEach((keyValuePair, currIndex)=>{
         let key = keyValuePair[0]
         const value = keyValuePair[1]
         if(currIndex == index-1){ // index-1 because the first column is an empty name one above the rows; readOnly
           key = e.target.value
         }
         newState[key] = value
      })
    props.parentSetState(newState)
  }
  return (
    <input
      onChange={e => handleChange(e)}
      onBlur={e => handleUpdate(e)}
      onKeyUp={e => handleEnter(e)}
      readOnly={index == 0 ? true : false}
      key={index}
      value={state}
      type="text"
    />
  );
};

const Columns = props => {
  const { state, setState } = props;
  const columnNames = Object.keys(state); // [0, 1, 2, ..]
  let columns = columnNames.reduce((acc, colName, index) => {
    acc[colName] = index; // {0: 0, 1:1, ...}
    return acc;
  }, {});
  // we need a null header for the row names
  columns = [""].concat(Object.keys(columns));
  return columns.map((c, index) => (
    <Column
      name={c}
      key={index}
      index={index}
      parentState={state}
      parentSetState={setState}
    />
  ));
};

const Table = props => {
  const { state, setState } = props;

  const rows = Object.values(state); // [value1, value2, ...]
  return (
    <div className="table">
      <Fragment>
        <Columns state={state} setState={setState} />
        <Rows rows={rows} />
      </Fragment>
    </div>
  );
};

export default Table;
