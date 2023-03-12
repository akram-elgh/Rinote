import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function Collection(props) {
  const [isClicked, setClicked] = useState(false);
  return (
    <div
      // style={{ backgroundColor: isClicked ? "#aa9fff" : "" }}
      className="collection"
      onClick={() => {
        setClicked(true);
        props.onClick(props.name);
      }}
    >
      <h2>{props.name}</h2>
      <p>Created in : {props.date}</p>
      <div className="delete-note">
        <button>
          <DeleteIcon
            onClick={() => {
              props.delete(props.name);
            }}
            color="action"
          ></DeleteIcon>
        </button>
      </div>
    </div>
  );
}
