
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");

var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");

var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var s3 = document.querySelector("#s3");
var s4 = document.querySelector("#s4");

var reset = document.querySelector("#reset");
var winner = document.querySelector("#winner");
var numinput = document.querySelector("input");
var playagain = document.querySelector("#playagain");

var buttonsnd = new Audio("sounds/ding.mp3");
var trumsnd = new Audio("sounds/trumpet.wav");


var s1count=0;
var s2count=0;
var s3count=0;
var s4count=0;

var flag=0;
var limit=5;

var qp = document.querySelector("#qp");

//============================ INPUT FOR THE TEXT BOX==========================================//

numinput.addEventListener("change",function(){

    qp.textContent=numinput.value;
    limit=numinput.value;
});



//======================= SEPERATE FUNCTION TO RESET ==============================================//

function resetting(){
    buttonsnd.play();
    s1count=0;
    s1.textContent=0;
    s2count=0;
    s2.textContent=0;
    s3count=0;
    s3.textContent=0;
    s4count=0;
    s4.textContent=0;
    winner.textContent=" ";
    flag=0;
    

}

//==============================RESET BUTTON=====================================================//

reset.addEventListener("click",resetting);
playagain.addEventListener("click",function(){
    buttonsnd.play();
    s1count=0;
    s1.textContent=0;
    s2count=0;
    s2.textContent=0;
    s3count=0;
    s3.textContent=0;
    s4count=0;
    s4.textContent=0;
    winner.textContent=" ";
    flag=0;
    document.querySelector(".bg-modal").style.display="none";
});

//==============================PLAYER 1 BUTTON =============================================//

p1.addEventListener("click",function(){
    if(s1count<limit-1){
        buttonsnd.play();
        s1count=s1count+1;
        s1.textContent=s1count;
    }
    else{
        if(flag==0)
        {

            trumsnd.play();
            winner.textContent="WINNER : Player 2";
            flag=1;
            document.querySelector(".bg-modal").style.display="flex";
            
        }
        
    }
});

//==================PLAYER  2 BUTTON============================================//
p2.addEventListener("click",function(){
    if(s2count<limit-1){
        buttonsnd.play();
        s2count=s2count+1;
        s2.textContent=s2count;
    }
    else{
        if(flag==0)
        {
            trumsnd.play();
            winner.textContent="WINNER : Player 2";
            flag=1;
            document.querySelector(".bg-modal").style.display="flex";
        }
    }
});

p3.addEventListener("click",function(){
    if(s3count<limit-1){
        buttonsnd.play();
        s3count=s3count+1;
        s3.textContent=s3count;
    }
    else{
        if(flag==0)
        {

            trumsnd.play();
            winner.textContent="WINNER : Player 3";
            flag=1;
            document.querySelector(".bg-modal").style.display="flex";
            
        }
        
    }
});

//==================PLAYER  2 BUTTON============================================//
p4.addEventListener("click",function(){
    if(s4count<limit-1){
        buttonsnd.play();
        s4count=s4count+1;
        s4.textContent=s4count;
    }
    else{
        if(flag==0)
        {
            trumsnd.play();
            winner.textContent="WINNER : Player 4";
            flag=1;
            document.querySelector(".bg-modal").style.display="flex";
        }
    }
});