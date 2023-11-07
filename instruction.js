let btn=document.getElementById("start-btn");
let goBackBtn=document.getElementById("goback");

goBackBtn.onclick=()=>{
    window.location.href="index.html"
}

let btnClickAudio=new Audio("./assets/button-124476.mp3")

btn.onclick=()=>{
    setTimeout(()=>{

        window.location.href="./gamepage.html"

    },1000)
}

