import React from "react";
import "./style.css";

const Bar = ({
    width,
    height,
    val,
    stateA,
    stateB,
    stateC,
    stateD,
    sorted,
    style
  }) => {
    let classNames = 'Bar';
    if (sorted) classNames += ' Bar__sorted';
    if (stateD) classNames += ' Bar__stateD';
    else if (stateC) classNames += ' Bar__stateC';
    else if (stateB) classNames += ' Bar__stateB';
    else if (stateA) classNames += ' Bar__stateA';
  
    let BarStyle = { ...style, width: `${width}%`, height: `${height}%` };
    if (stateA || stateB || stateC || stateD) {
      BarStyle['marginRight'] = `${0.3 * width}%`;
      BarStyle['marginLeft'] = `${0.3 * width}% `;
    }
  
    return (
      <div style={BarStyle} className={classNames}>
        <span className="Bar__Text">{val}</span>
      </div>
    );
  };
  
  export default Bar;
  