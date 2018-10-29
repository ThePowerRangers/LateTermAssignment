/*const express = require("express");
const app = express();
const logic = require("../client/logic");
*/


//We simply could not figure out how to implement the correct tsting methods for this projec
//We smashed our heads against the wall for about 20 hours trying to figure out how
//Sorry



//Use these functio to call something or try to make logic.js throw some status codes to catch when testing
/*
app.get("/game", (req, res) => {
  res.send("Try to do some test here");
});
*//*
function checkBoardStatus(){
  app.get("/boardStatus", (req, res) => {
    var initialBoard = ['', '', '', '', '', '', '', '', ''];
    var turnsplayed;
    var board = logic.boardStatus();
    for(var item in board){
        if(item != ''){
          turnsplayed++;
        }
    }
    if(initialBoard == board){
      res.send("No moves have been played");
    }
    else if(turnsplayed == 9){
      res.send("The board is full");
    }
    else{
      res.send("Game has status");
    }
    console.log(res);
  });

  }
  module.exports = {
    checkBoardStatus
}
*/
