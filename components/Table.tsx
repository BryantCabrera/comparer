import React, { Fragment, useContext, useState } from "react";
import Database from "./models/Database";

const Headers: React.FC<{ colNames: Array<string> }> = ({ colNames }) => {
  colNames = [""].concat(colNames);
  return (
    <tr>
      {colNames.map(c => (
        <th key={`header-${c}`}> {c} </th>
      ))}
    </tr>
  );
};

const Rows: React.FC<{ data: any }> = ({ data }) => {
  const [rowNames, setName] = useState(["s1"]);
  const columns = Object.keys(data);
  return (
    <Fragment>
      {rowNames.map((r, index) => {
        return (
          <tr key={`row-$r`}>
            {columns.map(c => (
              <td key={`cell-${r}${c}`}> {data[c][index]}</td>
            ))}
          </tr>
        );
      })}
    </Fragment>
  );
};

const Table: React.FC<{}> = () => {
  const {state} = useContext(Database)
  return (
    <table>
      <Fragment>
        <thead>
          <Headers colNames={Object.keys(state)} />
        </thead>
        <tbody>
          <Rows data={state} />
        </tbody>
      </Fragment>
    </table>
  );
};

export default Table;
