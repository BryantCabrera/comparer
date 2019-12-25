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
  const rows = { sample: [props.value] };
  const columns = { dimension: 0 };

  return (
    <Fragment>
      <Columns columns={columns} />
      <Rows rows={rows} />
    </Fragment>
  );
};

export default Table;
