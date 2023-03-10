const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/rinoteDb");

const notesSchema = new mongoose.Schema({
  topic: String,
  title: String,
  description: String,
});

const collectionSchema = new mongoose.Schema({
  name: String,
  date: String,
});

const Note = mongoose.model("Note", notesSchema);
const Collection = mongoose.model("Collection", collectionSchema);

const date = new Date().toLocaleDateString("fr");

app
  .route("/api")
  .get((req, res) => {
    Collection.find().then((data) => {
      res.json(data || []);
    });
  })
  .post((req, res) => {
    const col = new Collection({
      ...req.body,
      date: date,
    });
    col.save();
    res.sendStatus(200);
  });

app
  .route("/api/notes")
  .get((req, res) => {
    Note.find({ topic: req.query.topic }).then((notes) => {
      res.json(notes || []);
    });
  })
  .post((req, res) => {
    console.log(req.body);
    const note = new Note(req.body);
    note.save();
    res.sendStatus(200);
  });

app.listen(3001, (err) => console.log(err || "Listening on port 3001"));
