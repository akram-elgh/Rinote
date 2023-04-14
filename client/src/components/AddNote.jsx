import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function AddNote(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  return (
    <div>
      <div className="note-addbtn">
        <Fab
          color="primary"
          onClick={() => {
            props.onClick({ title: title, description: description });
            setTitle("");
            setDescription("");
          }}
        >
          <AddIcon />
        </Fab>
      </div>

      <div className="notes-container">
        <input
          onChange={handleTitleChange}
          className="title"
          type="text"
          placeholder="Title"
          value={title}
        ></input>
        <input
          onChange={handleDescriptionChange}
          className="description"
          type="text"
          placeholder="Description"
          value={description}
        ></input>
      </div>
    </div>
  );
}
