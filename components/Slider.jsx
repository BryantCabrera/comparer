import React from "react";

const SliderPropsComponent = (value, setValue) => {
  return {
    type: "range",
    min: 0,
    max: 100,
    value: value,
    onChange: e => setValue(e.target.value)
  };
};

const Slider = props => {
  const { value, setValue } = props;
  const name = "d1";
  return <input {...SliderPropsComponent(value, setValue)} />;
};

export default Slider;
