const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const data = require("../data/api-keys.json");

router.get("/", (req, res) => {
  res.json({
    message: "Velkommen til vores API Men du skal give en gyldig API-version!",
    currentVersion: "v1",
  });
});

router.get("/v1/resultater", (req, res) => {
  const apiKey = req.query["api_key"];

  const resultater = path.join(__dirname, "../data/resultater.json");

  if (apiKey === data.api_keys.TEST_API_KEY) {
    fs.readFile(resultater, function (err, data) {
      if (err) process.exit(1);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(JSON.parse(data));
    });
  } else {
    res.json({
      message: "Du skal give en gyldig API-nøgle!",
    });
  }
});

module.exports = router;
