import React from "react";

const Tablet: React.FC<{ value: string }> = ({ value }) => {
  return <input defaultValue={value} />;
};

export default Tablet;
