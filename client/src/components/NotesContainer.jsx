import React, { useState } from "react";
import AddNote from "./AddNote.jsx";
import Notes from "./Notes.jsx";
// import AddIcon from "@mui/icons-material/Add";
// import Fab from "@mui/material/Fab";
import axios from "axios";

export default function NotesContainer(props) {
  const [data, setData] = useState([
    {
      topic: "",
      title: "",
      description: "",
    },
  ]);
  const url = "http://localhost:3001/api/notes/?topic=" + props.topic;
  props.isClicked && axios.get(url).then((response) => setData(response.data));
  function handleClick(input) {
    console.log(input);
    axios.post(url, { ...input, topic: props.topic }).then(
      setTimeout(
        axios.get(url).then((response) => setData(response.data)),
        100
      )
    );
    setData([
      {
        topic: "",
        title: "",
        description: "",
      },
    ]);
  }
  return (
    <div
      className="container"
      style={{ display: props.isClicked ? "" : "none" }}
    >
      <div className="topic">
        <h1>{props.topic}</h1>
      </div>
      {props.isClicked &&
        data.map((note) => {
          return (
            <Notes
              title={note.title}
              description={note.description}
              key={note._id}
            ></Notes>
          );
        })}

      {/* <div className="note-addbtn">
        <Fab color="primary" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </div> */}
      <AddNote onClick={handleClick}></AddNote>
    </div>
  );
}
