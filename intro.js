let submitBtn=document.getElementById("submit");
let guestBtn=document.getElementById("guest-play");
let userName=document.getElementById("name-input")





let buttonClickAudio=new Audio("./assets/button-124476.mp3")

submitBtn.onclick=()=>{
    if(userName.value==""){
        alert("Please Enter Your Name")
    }
    else{
    buttonClickAudio.pause();
    buttonClickAudio.currentTime=0;
    buttonClickAudio.play();
    localStorage.setItem("username",userName.value)
    window.location.href="./instruction.html"
    }
}

guestBtn.onclick=()=>{
    buttonClickAudio.pause();
    buttonClickAudio.currentTime=0;
    buttonClickAudio.play();
    window.location.href="./instruction.html"
}
