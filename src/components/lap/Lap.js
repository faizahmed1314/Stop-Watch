import React from "react";

const Lap = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.laps.map((lap, index) => {
        return (
          <li key={index} className="list-group-item">
            <h2>
              <span className="text-dark">Minute : </span>
              <span className="text-danger">{lap.min} </span>
              <span className="text-dark">Second : </span>
              <span className="text-danger">{lap.sec} </span>
              <span className="text-dark">Mili : </span>
              <span className="text-danger">{lap.mili} </span>
            </h2>
          </li>
        );
      })}
    </ul>
  );
};
export default Lap;
