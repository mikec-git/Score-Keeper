var p1Score     = 0;
var p1Display   = document.querySelector("#player1");
var p1Button    = document.querySelector("#P1Button");

var p2Score     = 0;
var p2Display   = document.querySelector("#player2");
var p2Button    = document.querySelector("#P2Button");

var resetButton = document.querySelector("#resetButton");

var gameOver    = false;
var winningVal  = null;
var scoreTo     = document.querySelector("#scoreTo");
var maxScore    = document.querySelector("#maxScore");

p1Button.addEventListener("click", () => {
    if(!gameOver)
    {
        p1Display.textContent = p1Score+=1;
        if(p1Score >= winningVal){
            gameOver = true;
            p1Display.classList.add("winner");
        }
    }
});

p2Button.addEventListener("click", () => {
    if(!gameOver)
    {
        p2Display.textContent = p2Score+=1;
        if(p2Score >= winningVal){
            gameOver = true;
            p2Display.classList.add("winner");
        }
    }
});

resetButton.addEventListener("click",  reset);

maxScore.addEventListener("change", function() {
    scoreTo.textContent = this.value;
    winningVal = Number(this.value);
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}