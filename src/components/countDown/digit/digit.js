import React from "react";
import "./digit.css";

const Digit = (props) => {
  return (
    <div
      className="digit text-center mx-4"
      style={{ borderColor: props.color }}
    >
      <h1 className="display-2 py-3" style={{ color: props.color }}>
        {props.value < 10 ? `0${props.value}` : props.value}
      </h1>
    </div>
  );
};
export default Digit;
