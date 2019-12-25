import React, { Fragment, useState } from "react";
import Slider from "./Slider";
import Table from "./Table";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(50);
  return (
    <Fragment>
      <Table value={value} />
      <Slider value={value} setValue={setValue} />
    </Fragment>
  );
};

export default App;
