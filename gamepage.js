//selecting html ID's and class in Javascript
let playerCar = document.getElementById("playercar");
let enemyCar1 = document.getElementById("enemycar1");
let enemyCar2 = document.getElementById("enemycar2");
let enemyCar3 = document.getElementById("enemycar3");
let enemyCar4 = document.getElementById("enemycar4");
let enemyCar  = document.querySelectorAll(".enemycar");
let scoreValue = document.getElementById("scorevalue");




let player = {};

//initialising time and highscore to 0.

let time = 0;
// let highscore=0;
let interval;


//setting time interval to store score

function startFunction() {
  time = 0;
  interval = setInterval(() => {
    time++
    scoreValue.innerText = time;
    // console.log(time);
    localStorage.setItem("score",time);
    

    if(time>100){
      enemyCar1.style.animationDuration="2s"
      enemyCar2.style.animationDuration="2.5s"
      enemyCar3.style.animationDuration="3s"
      enemyCar4.style.animationDuration="3.5s"
    }
    if(time>200){
      enemyCar1.style.animationDuration="1s"
      enemyCar2.style.animationDuration="1.5s"
      enemyCar3.style.animationDuration="2s"
      enemyCar4.style.animationDuration="2.5s"
    }
  }, 500)
}
startFunction();

//creating roadlines after a specific position

for (let i = 0; i < 5; i++) {
  let roadLines = document.createElement("div");
  roadLines.setAttribute("class", "roadlines")
  roadLines.y = (i * 150)
  roadLines.style.top = roadLines.y + "px"
  road.appendChild(roadLines);
}

//giving animations to roadlines

function animatedLines() {
  window.requestAnimationFrame(animatedLines);
  let lines = document.querySelectorAll(".roadlines");
  lines.forEach(function (item) {
    item.y += 5;
    item.style.top = item.y + "px"
    if (item.y > 600) {
      item.y -= 750
    }

  })
}
animatedLines()

//giving random positions to enemy cars depending on the width of screen

for (let i = 0; i < enemyCar.length; i++) {
  enemyCar[i].addEventListener("animationiteration", function () {
    let random;
    if (window.innerWidth < 400) {
      random = Math.floor(Math.random() * 80);
    } else {
      random = Math.floor(Math.random() * 320);
    }
    enemyCar[i].style.left = random + "px";
  });
}





//object to store Arrowkeys which I have to use
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
}

document.addEventListener("keydown", keyDownFunction);
document.addEventListener("keyup", keyUpFunction);

function keyDownFunction(e) {
  keys[e.key] = true;
  //  console.log(keys)
}

function keyUpFunction(e) {
  keys[e.key] = false;
  // console.log(keys)

}

//setting offset property to get car position from top and left

player.y = playerCar.offsetTop;
player.x = playerCar.offsetLeft;
console.log(player.x)
console.log(player.y)


function startGame() {

// repeat startGame function infinitely

  window.requestAnimationFrame(startGame);

//changing positions of playercar on clicking on keys

  if (keys.ArrowUp ) {
    player.y -= 5;
  }
  if (keys.ArrowDown && player.y < 600) {
    player.y += 5;
  }
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= 5;
  }
  if (keys.ArrowRight && player.x < 320) {
    player.x += 5;
  }

  playerCar.style.top = player.y + "px";
  playerCar.style.left = player.x + "px";

}

//checking for collison

function isCollison() {
  for (let i = 0; i < enemyCar.length; i++) {
    let a = playerCar.getBoundingClientRect();
    let b = enemyCar[i].getBoundingClientRect();

    if (!((a.top > b.bottom) || (a.bottom < b.top) ||
      (a.right < b.left) || (a.left > b.right))) {
      // console.log("collided")
      window.location.href = "./gameover.html"


    }

  }

}
isCollison()
setInterval(isCollison, 100);



//gameaudio

startGame();
let carAudio = new Audio("./assets/car-acceleration-inside-car-7087.mp3");
carAudio.play()
carAudio.loop = true;

function carHornPlay() {
  let carHorn = new Audio("./assets/car-horn-6408.mp3");
  carHorn.play();

}
setInterval(carHornPlay, 7000)

//javascript for mobile version

//selecting arrowbutton images

let leftArrow=document.getElementById("leftarrow")
let rightArrow=document.getElementById("rightarrow")
let topArrow=document.getElementById("toparrow");
let downArrow=document.getElementById("downarrow")



let roadWidth = 180; 
let roadHeight = window.innerHeight; 

//moving car using arrowbutton images on mobile

leftArrow.onmousedown = () => {
  if (player.x > 0) {
    player.x -= 15;
    playerCar.style.left = player.x + "px";
  }
};

rightArrow.onmousedown = () => {
  if (player.x + playerCar.offsetWidth < roadWidth) {
    player.x += 15;
    playerCar.style.left = player.x + "px";
  }
};

topArrow.onmousedown = () => {
  if (player.y > 0) {
    player.y -= 15;
    playerCar.style.top = player.y + "px";
  }
};

downArrow.onmousedown = () => {
  if (player.y + playerCar.offsetHeight < 600) {
    player.y += 15;
    playerCar.style.top = player.y + "px";
  }
};



