import React, { Fragment } from "react";
import { Slider, Handles } from "react-compound-slider";

const SliderPropsComponent = (value, setValue) => {
  return {
    type: "range",
    min: 0,
    max: 100,
    value: value,
    onChange: e => setValue(e.target.value)
  };
};

const sliderStyle = {
  // Give the slider some width
  position: "relative",
  width: "100%",
  height: 80
};

const railStyle = {
  position: "absolute",
  width: "100%",
  height: 10,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: "#8B9CB6"
};

const Handle = ({ handle: { id, value, percent }, getHandleProps }) => {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: -15,
        marginTop: 25,
        zIndex: 2,
        width: 30,
        height: 30,
        border: 0,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "#2C4870",
        color: "#333"
      }}
      {...getHandleProps(id)}
    >
      <div style={{ fontFamily: "Roboto", fontSize: 11, marginTop: -35 }}>
        {value}
      </div>
    </div>
  );
};

const MultiHandleSlider = props => {
  const { values, setValue } = props;
  return (
    <Slider
      rootStyle={sliderStyle}
      step={1}
      domain={[0, 100]}
      values={values}
      onChange={vs => setValue(vs)}
    >
      <div style={railStyle} />
      <Handles>
        {/* handles and getHandleProps are supplied by Handles */}
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map(handle => (
              <Handle
                key={handle.id}
                handle={handle}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>
    </Slider>
  );
};

const Sliders = props => {
  const { valsSetValsObj } = props;
  return Object.entries(valsSetValsObj).map(entry => {
    // key=0 or 1 valsSetVal=[[50, 40], dispatcher]
    const [key, valsSetVal] = entry;
    const [values, setValue] = valsSetVal;
    return <MultiHandleSlider key={key} values={values} setValue={setValue} />;
  });
};

export default Sliders;
