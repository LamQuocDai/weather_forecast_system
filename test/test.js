import express from "express";

var app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.listen(port, () => {
  console.log("Server is running on port 3000");
})