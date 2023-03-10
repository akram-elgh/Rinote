import React, { useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import NotesContainer from "./NotesContainer.jsx";

export default function App() {
  const [clickCollection, setClickCollection] = useState({
    isClicked: false,
    name: "",
  });
  const { isClicked, name } = clickCollection;
  function handleClick(name) {
    setClickCollection({
      isClicked: true,
      name: name,
    });
  }
  return (
    <div>
      <Header></Header>
      <Body onClick={handleClick}></Body>
      <NotesContainer isClicked={isClicked} topic={name}></NotesContainer>
    </div>
  );
}
