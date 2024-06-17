import React from "react";
import { useState } from "react";

const Btnicon = (props) => {
const [index, setIndex] = useState(0);
    const btnclasses = "conferenceiconbtn " + props.btntype
  return (
    <div>
      <button
        className={btnclasses} id="me"
        onClick={(e) => {  
        
            console.log(e)

          setIndex(1 - index);
        }}
      >
        {props.stat.current[index]}
      </button>
    </div>
  );
};

export default Btnicon;
