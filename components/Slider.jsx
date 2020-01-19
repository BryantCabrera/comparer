import React, { Fragment } from "react";
import { Slider, Handles } from "../react-compound-slider/src";

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
  const { stateKey, state, setState } = props;
  const values = state[stateKey];

  const handleChange = (newHandles, activeHandleID) => {
    const updatedHandle = newHandles.filter(h => h.key == activeHandleID)[0];

    const newValues = values.map(h => {
      h.value =
        h.key == updatedHandle.metadata.key
          ? (h.value = updatedHandle.val)
          : h.value;
      return h;
    });
    const newState = { ...state };
    newState[stateKey] = newValues;
    setState(newState);
  };

  return (
    <Fragment>
      <div> {stateKey} </div>
      <Slider
        rootStyle={sliderStyle}
        step={1}
        domain={[0, 100]}
        values={values}
        onSlideEnd={(vs, { activeHandleID }) =>
          handleChange(vs, activeHandleID)
        }
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
    </Fragment>
  );
};

const Sliders = props => {
  const { state, setState } = props;

  return (
    <div className="sliders">
      {Object.keys(state).map((key, index) => {
        // key=0 or 1 state={0: [50, 40], 1:[30, 20], ...}
        return (
          <MultiHandleSlider
            key={index}
            stateKey={key}
            state={state}
            setState={setState}
          />
        );
      })}
    </div>
  );
};

export default Sliders;
