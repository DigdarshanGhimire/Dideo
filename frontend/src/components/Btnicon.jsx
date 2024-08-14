import React from "react";
import { useState, useRef } from "react";

const Btnicon = (props) => {
let [index, setIndex] = useState(0);
    const btnclasses = "conferenceiconbtn " + props.btntype
  return (
    <div>
      <button
        className={btnclasses} id="me"
        onClick={(e) => {  
          props.tool(Boolean(1-index))
          setIndex(1 - index)
          
        }}
      >
        {props.stat.current[index]}
      </button>
    </div>
  );
};

export default Btnicon;
