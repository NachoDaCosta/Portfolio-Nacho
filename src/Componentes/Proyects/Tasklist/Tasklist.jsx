import React from "react";
import "./Tasklist.css";
const Tasklist = () => {
  return (
    <div className="tasklist-container">
      <div>
        <h1>Tasklist</h1>
        <span>The old familiar to-do list</span>
      </div>
      <div className="images-tasklist">
        <div className="first-row-imgs">
          <img alt="" src="./imagenes/TL1.png" />
          <img alt="" src="./imagenes/TL2.png" />
        </div>
        <div>
          <img alt="" src="./imagenes/TL3.png" />
        </div>
      </div>
    </div>
  );
};

export default Tasklist;