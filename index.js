function getComputerChoice(){
    let num1 = Math.random();
    return num1;
}

function getHumanChoice(){
    
}
let cpuChoice = getComputerChoice()

if (cpuChoice >= 0 && cpuChoice < .33){
    cpuChoice = "rock";
} else if (cpuChoice >= .33 && cpuChoice <= .66){
    cpuChoice = "paper";
} else if (cpuChoice > .66 && cpuChoice <= 1){
    cpuChoice = "scissor";
}

console.log(cpuChoice)