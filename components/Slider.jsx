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

const Handle = ({
  handle: { id, value, percent },
  getHandleProps,
  rowName
}) => {
  return (
    <div
      className='handle'
      style={{
        left: `${percent}%`,
      }}
      {...getHandleProps(id)}
    >
      <div className='handleLabel'>
        {rowName}
      </div>
    </div>
  );
};

const MultiHandleSlider = props => {
  const { stateKey, state, setState, rowNames } = props;
  const values = state[stateKey];

  const handleChange = (newHandles, activeHandleID) => {
    const updatedHandle = newHandles.filter(h => h.key == activeHandleID)[0];

    const newValues = values.map(h => {
      h.value =
        h.key == updatedHandle.metadata.key ? updatedHandle.val : h.value;
      return h;
    });
    const newState = { ...state };
    newState[stateKey] = newValues;
    setState(newState);
  };

  return (
    <Fragment>
      <div className='sliderLabel'> {stateKey} </div>
      <Slider
        rootStyle={sliderStyle}
        step={1}
        domain={[0, 100]}
        values={values}
        onSlideEnd={(vs, { activeHandleID }) =>
          handleChange(vs, activeHandleID)
        }
      >
        <div className="rail" />
        <Handles>
          {/* handles and getHandleProps are supplied by Handles */}
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                  rowName={rowNames[handle.metadata.key]}
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
  const { state, setState, rowNames } = props;

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
            rowNames={rowNames}
          />
        );
      })}
    </div>
  );
};

export default Sliders;
