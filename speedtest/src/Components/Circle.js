import React from "react";

import "./Circle.css";

const Circle = (props) => {
  return (
    <div className={`circle ${props.color}`} onClick={props.click}>
      <p>{props.id}</p>
    </div>
  );
};

/* style={{ backgroundColor: props.color }} */

export default Circle;
