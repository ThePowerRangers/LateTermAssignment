const express = require("express");
const router = express.Router();
//const logic = require(../logic/index.htmæ);


//Use these functio to call something or try to make logic.js throw some status codes to catch when testing
router.get("/game", (req, res) => {
  res.status(200).send("Try to do some test here");
})

module.exports = router;
