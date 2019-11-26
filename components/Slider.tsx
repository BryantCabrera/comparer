import React, {
  Dispatch,
  MouseEvent,
  RefObject,
  SetStateAction,
  useRef,
  useState
} from "react";

const setPosition = (
  event: any,
  setter: any
) => {
    const rect = event.target.getBoundingClientRect();
    console.log('rect: ', rect.left)
    const clientX: number = event.clientX;
    console.log('clientX: ', clientX)
    // console.log(rect.left)
    setter(clientX)
};

const Slider: React.FC = () => {
  const [x, setX] = useState(null);

  return (
    <div style={{ position: "absolute", margin: '10px' }}>
      <div
        style={{ position: "absolute", left: "0", top: "0" }}
        onDragOver={e => e.preventDefault()}
      >
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
      <div
        draggable={true}
        onDrag={event => setPosition(event, setX)}
        style={{
          position: "absolute",
          left: (x || 0).toString() + "px",
          top: "5px",
          width: "10px",
          height: "10px",
          padding: "0px",
        }}
      >
        <svg width="10" height="10" style={{display:"block"}}>
          <circle cx="5" cy="5" r="4" />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
