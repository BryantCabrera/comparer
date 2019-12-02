import React, { useReducer } from "react";

const _reducer = (state: any, action: any) => {
  if (action.colName && action.rowNumber && action.value) {
    const colName = action.colName;
    const rowNumber = action.rowNumber;
    state.colName[rowNumber] = action.value;
  }
};

const Database = () => {
  const data = { d1: [0] };

  const [state, dispatcher] = useReducer(_reducer, data, () => data);
  return { state, dispatcher };
};

export default Database;
