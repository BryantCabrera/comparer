import React, {Dispatch, MouseEvent, SetStateAction, useState} from "react";

const handleDrag = (event:MouseEvent, setCx:Dispatch<SetStateAction<string>>) => {
    
    // don't know how to fix this
    const onMouseMove = (event:any) => {
        console.log(event)
       
    }

    document.addEventListener('mousemove', onMouseMove);
    // document.addEventListener('mouseup', onMouseUp);

}

const Slider: React.FC = () =>{
    let [cx, setCx] = useState("5") 

    return (
       <svg width="300" height="10">
        <circle cx={cx} cy="5.5" r="4" />
        <rect y="5" width="300" height="2" rx="10" ry="10" style={{fill: "rgb(96,125,139)"}}
            onClick={ (e:MouseEvent) => handleDrag(e, setCx)} 
        />  
       </svg> 
    )
}

export default Slider;
