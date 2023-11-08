let playAgainBtn=document.getElementById("playagainbtn");
let playerScore=document.getElementById("playerscorevalue");
let highScore=document.getElementById("highestscorevalue")

// redirecting to game.html  page

playAgainBtn.onclick=()=>{
    window.location.href="./gamepage.html"
}

//getting score and highscore from local storage

let score = parseInt(localStorage.getItem("score")) || 0;

let highestScore = parseInt(localStorage.getItem("highestScore")) || 0;

playerScore.innerText = score;

highScore.innerText = highestScore;

//comparing score with high score

if (score > highestScore) {
  highestScore = score;
  highScore.innerText = highestScore;

  localStorage.setItem("highestScore", highestScore);
}


