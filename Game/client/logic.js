//Initializing variables used in the game
var playerXWins = 0;
var playerOWins = 0;
var numberOfDraws = 0;
var gameOver = false;
var turnCounter = 0;

//This function resets the game after the "Play again" button is pushed
function  playAgain(){

    //turnCounter counts how many times either x or o has been plased in the gameOver
    //This is then used to find out whose turn it is and whether or not the game is over
    turnCounter = 0;
    gameOver = false;
    for(var i = 1; i < 10; i++){
      document.getElementById(i.toString()).innerText = '';
    }
    document.getElementById("currentPlayer").innerHTML = "Player X, it's your turn!";
  }

  //Here we find out whos turn it is, since turnCounter is enitialized as 0 and
  //X always starts then his turn is always on an even number and O's is on the odd once
  function whosTurn(){
    if(turnCounter % 2 == 0){
      return 'X';
    }
    else{
      return 'O';
    }
  }

  //Here we find the correct index to place the X or O depending on where the player
  //selects it.
  function whereToPlace(posistionId){
    if(!gameOver){
      var where = document.getElementById(posistionId);
      //Making sure that only an empty slot can be selected
      if(where.innerText == ''){
        var who = whosTurn();
        turnCounter++;
        where.innerText = who;
        var whosNext = whosTurn();
        document.getElementById("currentPlayer").innerHTML = whosNext + ", it's your turn!";
        gameOver = checkWinner(who);
      }
      else{
        //Pick another place
        var whosNext = whosTurn();
        document.getElementById("currentPlayer").innerHTML = whosNext + ", it's your turn!";
        return;
      }
    }
    //Something that lets the players know who has won and the game is over
  }

  function checkWinner(who){
    //Impossible to win in less then 5 turns X O X O  need atleast 3 of a kind to win
    if(turnCounter < 5){
      return false;
    }

    //giving each index a describing name to use later
    var upperLeft = document.getElementById("1").innerText;
    var upperMiddle = document.getElementById("2").innerText;
    var upperRight = document.getElementById("3").innerText;

    var middleLeft = document.getElementById("4").innerText;
    var middleMiddle = document.getElementById("5").innerText;
    var middleRight = document.getElementById("6").innerText;

    var lowerLeft = document.getElementById("7").innerText;
    var lowerMiddle = document.getElementById("8").innerText;
    var upperlowerRight = document.getElementById("9").innerText;

    var winner = false;

   //Check for winning combination
   if(upperLeft == who && upperMiddle == who && upperRight == who ){
       winner = true;
    }
    else if (middleLeft == who && middleMiddle == who && middleRight == who ) {
      winner = true;
    }
    else if (lowerLeft == who && lowerMiddle == who && upperlowerRight == who ) {
      winner = true;
    }
    else if (upperLeft == who && middleLeft == who && lowerLeft == who ) {
      winner = true;
    }
    else if (upperMiddle == who && middleMiddle == who && lowerMiddle == who ) {
      winner = true;
    }
    else if (upperRight == who && middleRight == who && upperlowerRight == who ) {
      winner = true;
    }
    else if (upperLeft == who && middleMiddle == who && upperlowerRight == who ) {
      winner = true;
    }
    else if (upperRight == who && middleMiddle == who && lowerLeft == who ) {
      winner = true;
    }
    //Combination check over

    if(winner == true){
      if(who == 'X'){
        //Implement Score Board
        playerXWins++;
        document.getElementById("Xwins").innerHTML = (playerXWins + " wins");
        document.getElementById("currentPlayer").innerHTML = ("Player " + who + " has won!");
        return true;
      }
      else{
        //Implement Score Board
        playerOWins++;
        document.getElementById("Owins").innerHTML = (playerOWins + " wins");
        document.getElementById("currentPlayer").innerHTML = ("Player " + who + " has won!");
        return true;
      }
      return true;
    }
    //need to check this last as X can win on his last try, if he does not the game ends in a tie
    else if(turnCounter == 9){
      //It is a Draw
      numberOfDraws++;
      document.getElementById("Draws").innerHTML = ("Draws: " + numberOfDraws);
      document.getElementById("currentPlayer").innerHTML = ("This game has ended in a Draw");
      return true;
    }
      //Nobody has won and not a Draw
      return false;
  }
