let btn=document.getElementById("start-btn");
let goBackBtn=document.getElementById("goback");

//arrow button to go to index.html

goBackBtn.onclick=()=>{
    window.location.href="index.html"
}



btn.onclick=()=>{

//redirect to gamepage.html after 1s 

    setTimeout(()=>{

        window.location.href="./gamepage.html"

    },1000)
}

