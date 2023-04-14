import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function AddCollection(props) {
  const [value, setValue] = useState("");
  const [addIsClicked, setAddisClicked] = useState(false);
  function handleChange(event) {
    setValue(event.target.value);
  }
  if (addIsClicked) {
    return (
      <div className="collection">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          value={value}
          required={true}
        ></input>
        <Fab
          color="primary"
          onClick={() => {
            props.onClick(value);
            setValue("");
            setAddisClicked(false);
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  } else {
    return (
      <div className="addbtn">
        <Fab
          color="primary"
          onClick={() => {
            setAddisClicked(true);
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}
