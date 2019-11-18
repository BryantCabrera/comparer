import React, { Fragment } from "react";
import DatabaseClient from "./DatabaseClient";
import Tablet from "./Tablet";

const Table: React.FC = () => {
  const client = new DatabaseClient();
  let columns: Array<string> = ["column names"];
  columns.push(...client.getColumns());

  const rows: Array<Array<string>> = client.getRows();
  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        {columns.map(colName => (
          <Tablet value={colName} />
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {rows.map(row => {
          return row.map(e => <Tablet value={e} />);
        })}
      </div>
    </Fragment>
  );
};

export default Table;
