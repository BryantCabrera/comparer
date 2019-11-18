import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";

const onMouseDown = (
  event: MouseEvent,
  setCx: Dispatch<SetStateAction<string>>
) => {
  event.preventDefault();
  console.log("clicked!");

  // don't know how to fix this
  const onMouseMove = (event: any) => {
    console.log(event);
  };

  const onMouseUp = (event: any) => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
};

const Slider: React.FC = () => {
  let [cx, setCx] = useState("5");

  return (
    <div style={{position: "relative"}}>
      <div style={{position: "absolute", left:"30%", top:"0"}}>
        <svg width="300" height="10">
          <rect
            y="5"
            width="300"
            height="2"
            rx="10"
            ry="10"
            style={{ fill: "rgb(96,125,139)" }}
          />
        </svg>
      </div>
      <div draggable={true} onDrag={() => console.log("draggin")} style={{position:"absolute", left:"30%", top:"0"}}>
        <svg width="10" height="10">
          <circle
            cx={cx}
            cy="0"
            r="4"
            onDrag={(e: MouseEvent) => console.log("draggedme")}
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
