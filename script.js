let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice = ()=>{
    const options = ["Rock","Paper","Scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame=()=>{
    msg.innerText=`Game Draw. ${userChoiceId} draws ${compChoiceId}`;
    msg.style.backgroundColor="burlywood";
    console.log("DRAW");
};

const playGame=(userChoiceId)=>{
    console.log("User Choice",userChoiceId);
    const compChoiceId=gencompChoice();
    console.log("Computer Choice",compChoiceId);

    if(userChoiceId===compChoiceId){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoiceId==='Rock'){
            userWin=compChoiceId==='Paper'?false:true;
        }
        else if(userChoiceId==='Paper'){
            userWin=compChoiceId==='Scissors'?false:true;
        }
        else{
            userWin=compChoiceId==='Rock'?false:true; 
        }
        showWinner(userWin,userChoiceId,compChoiceId);
    }
    
};

const showWinner=(userWin,userChoiceId,compChoiceId)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= `You Win!! ${userChoiceId} beats ${compChoiceId}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose. ${compChoiceId} beats ${userChoiceId}`;
        msg.style.backgroundColor="red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoiceId=choice.getAttribute("id");
        playGame(userChoiceId)
    });
});
