const express = require("express");
const app = express();
const data = require("./src/data/api-keys.json");

// routes
const apiRoutes = require("./src/routes/api");
const mainRoutes = require("./src/routes/main");

app.use("/", mainRoutes);
app.use("/api", apiRoutes);

// route with api key from a json file
// how to i use it?

app.use("/api/test", (req, res, next) => {
  const apiKey = req.query["api_key"];
  if (apiKey.includes(data["api-key"])) {
    res.status(200).json({
      message: "You have access to the API",
    });
  } else {
    res.status(401).json({
      error: "You have no access to the API",
    });
  }
});

app.listen(3000, () => console.info("Server is up and running!"));
