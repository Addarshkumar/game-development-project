let playerCar=document.getElementById("playercar");
let enemyCar1=document.getElementById("enemycar1");
let enemyCar2=document.getElementById("enemycar2");
let enemyCar3=document.getElementById("enemycar3");

let player={};

for(let i=0;i<5;i++){
    let roadLines=document.createElement("div");
    roadLines.setAttribute("class","roadlines")
    roadLines.y=(i*150)
    roadLines.style.top=roadLines.y+"px"
    road.appendChild(roadLines);
    }

function animatedLines(){
   window.requestAnimationFrame(animatedLines);
   let lines=document.querySelectorAll(".roadlines");
   lines.forEach(function(item){
      item.y+=5;
      item.style.top=item.y+"px"
      if(item.y>590){
         item.y-=750
      }
 
   })
}
animatedLines()

let keys={
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false
  }
  
  document.addEventListener("keydown",keyDownFunction);
  document.addEventListener("keyup",keyUpFunction);
  
  function keyDownFunction(e){
     keys[e.key]=true;
    //  console.log(keys)
  }
  
  function keyUpFunction(e){
    keys[e.key]=false;
    // console.log(keys)
  
  }
  
  player.y=playerCar.offsetTop;
  player.x=playerCar.offsetLeft;
  console.log(player.x)
  console.log(player.y)
  
  
  function startGame(){
    window.requestAnimationFrame(startGame);
  
    if(keys.ArrowUp){
      player.y-=5;
    }
    if(keys.ArrowDown){
      player.y+=5;
    }
    if(keys.ArrowLeft){
      player.x-=5;
    }
    if(keys.ArrowRight){
      player.x+=5;
    }
  
    playerCar.style.top=player.y+"px";
    playerCar.style.left=player.x+"px";
  
  }
  
  
  
  
  
  startGame();
  