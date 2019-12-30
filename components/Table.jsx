import React, { Fragment } from "react";

const Row = props => {
  return (
    <div className="row">
      <Fragment>
        <p> {props.rowName} </p>
        {props.rowValues.map((score, index) => (
          <p key={index}> {score} </p>
        ))}
      </Fragment>
    </div>
  );
};

const Rows = props => {
  return Object.entries(props.rows).map(([rowName, rowValues], index) => (
    <Row key={index} rowName={rowName} rowValues={rowValues} />
  ));
};

const Columns = props => {
  return Object.keys(props.columns).map((c, index) => <p key={index}> {c} </p>);
};

const Table = props => {
  const { state } = props;

  const columnNames = Object.keys(state); // [0, 1, 2, ..]
  const rowVals = Object.values(state); // [[value1, value2], ...]
  // TODO: this part is wrong fix it. there is one
  // row name
  const rows = { sample: [rowVals] };
  const columns = columnNames.reduce((acc, colName, index) => {
    acc[colName] = index; // {0: 0, 1:1, ...}
    return acc;
  }, {});

  return (
    <Fragment>
      <Columns columns={columns} />
      <Rows rows={rows} />
    </Fragment>
  );
};

export default Table;
