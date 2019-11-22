import React, { Dispatch, MouseEvent, RefObject, SetStateAction, useRef, useState } from "react";

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

const setPosition = (ref: RefObject<HTMLDivElement>, event: any) => {
    if(ref.current){
     const initX: number = ref.current.offsetLeft;
     const clientX: number = event.clientX; 

     const deltaX: number = clientX - initX
     console.log(clientX)
     ref.current.style.left = (initX + deltaX).toString() + 'px' 
    }
}

const Slider: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

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
      <div ref={ref} draggable={true} onDrag={(event) => setPosition(ref, event)} style={{position:"absolute", left:"30%", top:"0"}}>
        <svg width="10" height="10">
          <circle
            cx="5"
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
