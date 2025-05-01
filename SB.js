let homeScore=0;
let guestScore=0;
document.getElementById("hscore").textContent=homeScore
document.getElementById("gscore").textContent=guestScore

function hadd1(){
    homeScore+=1;
    document.getElementById("hscore").textContent=homeScore;
}

function hadd2(){
    homeScore+=2;
    document.getElementById("hscore").textContent=homeScore;
}

function hadd3(){
    homeScore+=3;
    document.getElementById("hscore").textContent=homeScore;
}

function gadd1(){
    guestScore+=1;
    document.getElementById("gscore").textContent=guestScore;
}
function gadd2(){
    guestScore+=2;
    document.getElementById("gscore").textContent=guestScore;
}
function gadd3(){
    guestScore+=3;
    document.getElementById("gscore").textContent=guestScore;
}
function hreset(){
    homeScore=0;
    document.getElementById("hscore").textContent=homeScore;
}
function greset(){
    guestScore=0;
    document.getElementById("gscore").textContent=guestScore;
}
