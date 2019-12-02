import React, { useCallback, useState } from "react";

const useEventHandler = (initialState: any, dispatcher: any) => {
  const [value, setValue] = useState(initialState);
  const handleChange = useCallback(({ target: { name, value } }) => {
    setValue({ [name]: value });
    dispatcher({ colName: "d1", rowNumber: 0, value });
  }, []);

  return { value, handleChange };
};

const Slider: React.FC<{ databaseDispatcher: any }> = ({
  databaseDispatcher
}) => {
  const { value, handleChange } = useEventHandler(
    { score: 51 },
    databaseDispatcher
  );
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value.score}
      onChange={handleChange}
    />
  );
};

export default Slider;
