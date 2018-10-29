const express = require('express');
const app = express();
const path = require('path');
const myAPI = require("./Game/api/index");

app.set('port', (process.env.PORT || 8080));
//This is used to deploy the html andd css
app.use(express.static(__dirname + "/Game/client"));
//Use this to do some tests
//app.use("/api", myAPI);
//if called anything else then /api it throws error
app.get("*", (req, res) => {
  res.status(404).send({error: "Not found"});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
