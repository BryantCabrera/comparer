import React, { useCallback, useContext, useState } from "react";
import Database from './models/Database';

const useEventHandler = (initialState: any, dispatcher: any) => {
  const [value, setValue] = useState(initialState);
  const handleChange = useCallback(({ target: { name, value } }) => {
    setValue({ [name]: value });
    dispatcher({ colName: "d1", rowNumber: 0, value });
  }, []);

  return { value, handleChange };
};

const Slider: React.FC<{}> = () => {
  const { state, dispatch } = useContext(Database);
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={state['d1']['0']}
      onChange={(e)=> dispatch(state, {colName: 'd1', rowNumber: '0', value: e.target.value})}
    />
  );
};

export default Slider;
