const express = require("express");
const app = express();
const apiRoutes = require("./src/routes/api");

app.get("/", (req, res) => {
  res.send(202);
});

app.use("/api", apiRoutes);

app.listen(3000, () => console.info("Server is up and running!"));
