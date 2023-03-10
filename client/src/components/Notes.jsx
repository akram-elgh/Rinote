import React from "react";

export default function Note(props) {
  return (
    <div className="notes-container">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
