import React from "react";

export default function Collection(props) {
  return (
    <div className="collection" onClick={() => props.onClick(props.name)}>
      <h2>{props.name}</h2>
      <p>Created in : {props.date}</p>
    </div>
  );
}
