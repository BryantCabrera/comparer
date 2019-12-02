import React, { useReducer } from "react";

const _has = (value: any) => {
  return value !== "" && value !== null && value !== undefined;
};
const _reducer = (state: any, action: any) => {
  if ([action.colName, action.rowNumber, action.value].every(v => _has(v))) {
    const colName = action.colName;
    const rowNumber = action.rowNumber;
    state[colName][rowNumber] = action.value;
  }
  console.log('in _reducer: ', state)
  return state;
};

const Database = () => {
  const data = { d1: [0] };

  const [state, dispatcher] = useReducer(_reducer, data, () => data);
  return { state, dispatcher };
};

export default Database;
