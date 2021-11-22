const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the api! But you need to give a valid api version!",
    currentVersion: "v1",
  });
});

router.get("/v1/resultater", (req, res) => {
  const resultater = path.join(__dirname, "../resultater.json");

  fs.readFile(resultater, function (err, data) {
    if (err) process.exit(1);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(data));
  });
});

module.exports = router;
