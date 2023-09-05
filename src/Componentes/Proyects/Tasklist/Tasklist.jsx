import React from "react";
import "./Tasklist.css";


const Tasklist = () => {
  return (
    <div className="tasklist-container">
      <div>
        <h1>Tasklist</h1>
        <span>
          The old familiar to-do list,which allows us to add, remove and edit a
          task
        </span>
      </div>
      <div className="images-tasklist">
        <img alt="" src="./imagenes/TL1.png" />
        <img alt="" src="./imagenes/TL2.png" />
        <img alt="" src="./imagenes/TL3.png" />
      </div>
    </div>
  );
};

export default Tasklist;