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

const Sliders = props => {
    const {valSetValsObj} = props
    return (
      Object.entries(valSetValsObj)
        .map((entry)=>{
          // key=0 or 1 valSetVal=[50, dispatcher]
          const [key, valSetVal ] = entry
          const [value, setValue] = valSetVal
          return <Slider key={key} value={value} setValue={setValue} />
        })
    )
}

export default Sliders;
