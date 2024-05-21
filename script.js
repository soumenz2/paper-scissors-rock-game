
const choices=document.querySelectorAll(".choice")
const message = document.getElementById('message');
const userScoreEl = document.querySelector('#user-score');
const computerScoreEl = document.querySelector('#computer-score');
const option=["rock","scissors","paper"];
let userScore = localStorage.getItem('userScore') || 0;
let computerScore = localStorage.getItem('computerScore') || 0;
userScoreEl.textContent = userScore;
computerScoreEl.textContent = computerScore;
const rulesBtn = document.getElementById('rules-btn');
const rulesPopup = document.getElementById('rules-popup');
const closeBtn = document.getElementById('close-btn');
rulesBtn.addEventListener('click', () => {
    rulesPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    rulesPopup.style.display = 'none';
});

choices.forEach(choice=> {
    console.log(choice);

    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute('data-choice')
        const compIndx=Math.floor(Math.random()*3);
        const compchoice=option[compIndx];
       

        console.log("computer choice",compchoice)
        console.log("choice clicked",userchoice)
        const showWinner=(userwin)=>{
            if(userwin){
                userScore++;
                localStorage.setItem('userScore', userScore);
                userScoreEl.textContent = userScore;
                message.innerText=`You Won !! your ${userchoice} beat computer ${compchoice}`;
            }
            else{
                computerScore++;
                computerScoreEl.textContent = computerScore;
                localStorage.setItem('computerScore', computerScore);
                message.innerText=`computer won !! computer ${compchoice} beat your ${userchoice}`
            }
            

        }

        if(userchoice===compchoice){
            console.log("match tied")
            message.innerText="match tied"
        }
        else {
            let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="scissors"?true:false;

        }else if(userchoice==="scissors"){
            userwin=compchoice==="paper"?true:false;
        }
        else if(userchoice==="paper"){
            userwin=compchoice=="rock"?true:false;
        }
        showWinner(userwin)

        }
        
       
      
    })
    
});
