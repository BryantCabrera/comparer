import React, { Fragment } from "react";

const Row = props => {
  return (
    <div>
      <Fragment>
        <p> {props.rowName} </p>
        {props.rowValues.map((score, index) => (
          <p key={index}> {score.value} </p>
        ))}
      </Fragment>
    </div>
  );
};

const Rows = props => {
  return props.rows.map((row, index) => (
    <Row key={index} rowName={`Sample ${index}`} rowValues={row} />
  ));
};

const Columns = props => {
  return Object.keys(props.columns).map((c, index) => <p key={index}> {c} </p>);
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
