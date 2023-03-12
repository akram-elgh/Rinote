import React, { useState, useEffect } from "react";
import Collection from "./Collection.jsx";
import AddCollection from "./InputCollection.jsx";
import axios from "axios";

export default function Body(props) {
  const [data, setData] = useState([]);
  const url = "http://192.168.1.7:3001/api";
  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
  }, []);
  function handleClick(name) {
    if (name === "") alert("Please fill put the name field");
    else {
      axios
        .post(url, { name: name })
        .then(
          setTimeout(
            () => axios.get(url).then((response) => setData(response.data)),
            100
          )
        );
    }
  }
  function deleteCollection(name) {
    axios.delete(`http://localhost:3001/api?name=${name}`).then(
      setTimeout(
        axios
          .get("http://localhost:3001/api")
          .then((response) => setData(response.data)),
        100
      )
    );
  }
  return (
    <div className="main">
      <div>
        <h1 className="title">Collections</h1>
      </div>
      <div>
        {data.map((collection) => {
          return (
            <Collection
              onClick={props.onClick}
              key={collection._id}
              name={collection.name}
              date={collection.date}
              delete={deleteCollection}
            ></Collection>
          );
        })}
        <AddCollection onClick={handleClick}></AddCollection>
      </div>
    </div>
  );
}
