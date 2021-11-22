const express = require("express");
const app = express();

app.listen("/", (req, res) => {
  res.send("hi");
});

app.listen(3000, () => console.log("Server is up and running!"));
