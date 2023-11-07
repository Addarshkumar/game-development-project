let submitBtn = document.getElementById("submit");
let guestBtn = document.getElementById("guest-play");
let userName = document.getElementById("name-input")
let nameOfUser=document.getElementById("username");
let sound=document.getElementById("sound");
let nosound=document.getElementById("nosound");
let gameAudio = new Audio("./assets/rock-it-21275.mp3");


sound.onclick=()=>{
sound.style.display="none"
nosound.style.display="block"
gameAudio.loop = true
gameAudio.play();

}
nosound.onclick=()=>{
    nosound.style.display="none"
    sound.style.display="block"
    gameAudio.pause();
}





let buttonClickAudio = new Audio("./assets/button-124476.mp3")


let name=localStorage.getItem("username");
nameOfUser.textContent=name








submitBtn.onclick = () => {
    if (userName.value == "") {
        alert("Please Enter Your Name")
    }
    else {
        buttonClickAudio.pause();
        buttonClickAudio.currentTime = 0;
        buttonClickAudio.play();
        localStorage.setItem("username", userName.value)
        window.location.href = "./instruction.html"
    }
}

guestBtn.onclick = () => {
    buttonClickAudio.pause();
    buttonClickAudio.currentTime = 0;
    buttonClickAudio.play();
    window.location.href = "./instruction.html"
}


