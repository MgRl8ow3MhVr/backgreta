const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Active la possibilité de récupérer les paramètres transmis avec la méthode HTTP POST
require("dotenv").config();

app.get("/", function (req, res) {
  console.log("hello demande");
  res.send("Hello World");
});

app.get("/test", function (req, res) {
  console.log("hello demande");
  res.json(JSON.stringify({ cle1: "val1", cle2: 3 }));
});

const students = [];

app.post("/add-student", (req, res) => {
  // Pour afficher les données reçues :
  // console.log("demande", req);
  console.log(req.body.params);
  // Pour ajouter un student
  //   const newStudent = req.body.name;
  //   students.push(newStudent);
  res.json(JSON.stringify({ name: "toto" }));
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
