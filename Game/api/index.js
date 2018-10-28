const express = require("express");
const router = express.Router();
//const logic = require(../logic/index.htmæ);

router.get("/game", (req, res) => {
  res.status(200).send("Try to do some test here");
})

module.exports = router;
