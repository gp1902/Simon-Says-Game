let gameseq=[];
let userseq=[];

let color=['yellow','red','green','purple'];

let started=false;
let level=0;

let lvl=document.querySelector("h2");

document.addEventListener("keypress",function(event){
    if (started==false) {
        console.log("Game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}

function levelUp(){
    userseq=[];
    level++;
    lvl.innerText=`Level ${level}`;

    let rndm=Math.floor(Math.random()*3);
    let rndmColor=color[rndm];
    let rndmbtn=document.querySelector(`.${rndmColor}`);
    gameseq.push(rndmColor);

    gameFlash(rndmbtn);
}

function btnFlash(){
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    matchAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(allBtn of allBtns){
    allBtn.addEventListener("click",btnFlash);
}

function matchAns(indx){
    if (gameseq[indx]==userseq[indx]) {
        if (gameseq.length==userseq.length) {
            setTimeout(levelUp,1000);
        }
    }
    else{
        lvl.innerHTML=`Game over! <b>Your score is  ${level}<b> <br>Press any key to start the game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
}
}

function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}

