import React, { Fragment } from "react";

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

const Columns = props => {
  // we need a null header for the row names
  const columns = [null].concat(Object.keys(props.columns));
  return columns.map((c, index) => <div key={index}> {c} </div>);
};

const Table = props => {
  const { state } = props;

  const columnNames = Object.keys(state); // [0, 1, 2, ..]
  const rows = Object.values(state); // [value1, value2, ...]
  const columns = columnNames.reduce((acc, colName, index) => {
    acc[colName] = index; // {0: 0, 1:1, ...}
    return acc;
  }, {});

  return (
    <div className="table">
      <Fragment>
        <Columns columns={columns} />
        <Rows rows={rows} />
      </Fragment>
    </div>
  );
};

export default Table;
