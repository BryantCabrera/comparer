import React, {
  Dispatch,
  MouseEvent,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from "react";

const useDebounce = (callback: any, delay: number) => {
  const latestCallback = useRef(callback);
  const latestTimeout = useRef(1);

  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  return (obj: any) => {
    const { event, args } = obj;
    event.persist();
    if (latestTimeout.current) {
      clearTimeout(latestTimeout.current);
    }

    latestTimeout.current = window.setTimeout(
      () => latestCallback.current(event, ...args),
      delay
    );
  };
};

const setPosition = (event: any, setter: any) => {
  const rect = event.target.getBoundingClientRect();
  const clientX: number = event.pageX;
  console.log("clientX: ", clientX);
  // console.log(rect.left)
  setter(event.movementX);
};

const Slider: React.FC = () => {
  const [x, setX] = useState(null);
  const handleOnDrag = useDebounce(setPosition, 100);

  return (
    <div style={{ position: "absolute", margin: "10px" }}>
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
        onDrag={event => handleOnDrag({ event, args: [setX] })}
        // onDrag={event => setPosition(event, setX)}
        style={{
          position: "absolute",
          left: (x || 0).toString() + "px",
          top: "5px",
          width: "10px",
          height: "10px",
          padding: "0px"
        }}
      >
        <svg width="10" height="10" style={{ display: "block" }}>
          <circle cx="5" cy="5" r="4" />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
