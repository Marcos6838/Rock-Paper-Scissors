function getComputerChoice(){
    let cpuChoice = Math.random();
    if (cpuChoice >= 0 && cpuChoice < .33){
        cpuChoice = "rock";
    } else if (cpuChoice >= .33 && cpuChoice <= .66){
        cpuChoice = "paper";
    } else if (cpuChoice > .66 && cpuChoice <= 1){
        cpuChoice = "scissor";
    }
    return cpuChoice;
}

function getHumanChoice(){
    let human = prompt("Enter Rock,Paper,Scissor").toLowerCase();
    while(human != 'rock' && human != 'paper' && human != 'scissor'){
        human = prompt("Enter Rock,Paper,Scissor").toLowerCase();
    }
    return human;
}

function playRound(humanChoice,ComputerChoice){
    if(humanChoice == 'rock' && ComputerChoice == 'paper'){
        winner == 1;
    } else if(humanChoice == 'rock' && ComputerChoice == 'rock'){
        winner == 2;
    } else if(humanChoice == 'rock' && ComputerChoice == 'scissor'){
        winner == 3;
    }

    if(humanChoice == 'paper' && ComputerChoice == 'paper'){
        winner == 2;
    } else if(humanChoice == 'paper' && ComputerChoice == 'rock'){
        winner == 3;
    } else if(humanChoice == 'paper' && ComputerChoice == 'scissor'){
        winner == 1;
    }

    if(humanChoice == 'scissor' && ComputerChoice == 'paper'){
        winner == 3;
    } else if(humanChoice == 'scissor' && ComputerChoice == 'rock'){
        winner == 1;
    } else if(humanChoice == 'scissor' && ComputerChoice == 'scissor'){
        winner == 2;
    }
    
    
    return winner;
}


let cpuChoice = getComputerChoice()
let humanChoice = getHumanChoice()
let winner = playRound(cpuChoice,humanChoice);
let humanScore = 0;
let computerScore = 0;
let i = 0;
while (i <= 5){
    let cpuChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    let winner = playRound(cpuChoice,humanChoice);
    i++;
}
console.log(cpuChoice);
console.log(human);