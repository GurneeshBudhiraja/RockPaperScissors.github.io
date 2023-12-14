const GREEN = 'green';
const RED = 'red';
const BLACK = 'black';


const images =  document.querySelector(".images");
const reset = document.querySelector(".reset");

const humanScoreElement = document.querySelector('.human_score');
const computerScoreElement = document.querySelector('.computer_score');

let humanChoice; //for human input
let humanScore=0; //human score
let computerScore=0; //computer score


images.addEventListener("click", (evt)=>{
  humanChoice = (evt.target.tagName==="IMG" && evt.target.classList.contains("rock")) ? "rock" : (evt.target.tagName === "IMG" && evt.target.classList.contains("paper")) ? "paper" : "scissors"; 
  const computerChoice = computerMove();
  checkWinner(humanChoice,computerChoice);
  
});

//reset score
reset.addEventListener("click", ()=> {
  humanScore = computerScore = 0;
  humanScoreElement.innerText=humanScore;
  computerScoreElement.innerText=computerScore;
  changeColor();
});

// for computer move
const computerMove = () => {
  const randomNumber = Math.random();
  let computerChoice = (0<=randomNumber && randomNumber<0.33) ? 'rock': (0.33<=randomNumber && randomNumber<0.66) ? 'paper' : 'scissors'; 
  return computerChoice; 
};

// for checking winner
const checkWinner = (human,computer) => {
  
  // first character capital
  computerCapital = computer.charAt(0).toUpperCase()+computer.slice(1);

  if (human===computer) {
    alert(`Computer Chose ${computerCapital}\nIt's a draw`);
  } else if (
    (human==="rock" && computer==='scissors') ||
    (human==='paper' && computer==='rock') ||
    (human==='scissors' && computer==='paper')
  ) {
     humanScore++;
     alert(`Computer Chose ${computerCapital}\nYou Win!`);
  }
  else {
    computerScore++;
    alert(`Computer Chose ${computerCapital}\nYou Lose`);
  }
  updateScore();
};

// score updation
const updateScore=() => {
  changeColor();
  humanScoreElement.innerText = humanScore;
  computerScoreElement.innerText = computerScore;
}

// changing the font color
const changeColor = () => {
  humanScoreElement.style.color = humanScore>computerScore ? GREEN : humanScore<computerScore ? RED : BLACK;
  computerScoreElement.style.color = computerScore>humanScore ? GREEN : computerScore<humanScore ? RED : BLACK;
}
