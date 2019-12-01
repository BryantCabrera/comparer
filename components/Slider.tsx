import React, {
  Dispatch,
  MouseEvent,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from "react";

const Slider: React.FC = () => {
  const [x, setX] = useState(null);
  return (
   <input 
      type="range"
    />
  )
};

export default Slider;
