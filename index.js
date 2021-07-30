// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")



rollBtn.addEventListener('click',function(){
   let number = Math.floor(Math.random()*6 + 1); 

//    console.log(number);
   if(player1Turn){
       
       player1Score+=number;
       
       player1Dice.textContent=number;
       player2Dice.classList.remove('active');
       player1Dice.classList.add('active');
    //    console.log(player1Score);
    player1Scoreboard.innerText = player1Score;
    message.textContent = "Player 2 Turn";
   }
   else{
      
       player2Score+=number;
       player2Dice.textContent=number;
    //    player2ScoreBoard.textContent = `${player2Score}`;
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
      player2Scoreboard.innerText=player2Score;
      message.textContent = "Player 1 Turn";
   }
   player1Turn=!player1Turn;
   if(player1Score>=20){
    message.textContent = "Player 1 Wins";
    rollBtn.style.display = 'none';
    resetBtn.style.display='inline-block';
}
if(player2Score>=20){
    message.textContent = "player 2 Wins";
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
}


});

resetBtn.addEventListener('click',function(){
    player1Score=0;
    player2Score=0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1Scoreboard.innerText = player1Score;
    player2Scoreboard.innerText = player2Score;
    message.textContent = "Player 1 Turn";
    resetBtn.style.display = 'none';
    rollBtn.style.display = 'inline-block';
});