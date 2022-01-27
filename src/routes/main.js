const router = require("express").Router();

router.get("/", (req, res) => {
  res.redirect("/api");
});

module.exports = router;
