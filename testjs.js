function getHumanChoice(){
    let answer = prompt("Please enter rock, paper, or scissor");
    return answer;
}

function getComputerChoice(){
    const r1 = Math.floor(Math.random() * 3)+1; 
    
    if(r1 == 1){
        return "rock";
    }
    else if(r1 == 2){
        return "paper";
    }
    else{
        return "scissor";
    }

}

function playRound(human, computer) {
    let result = " Error";
    
    if(human == computer){
        result = " It's a DRAW"; 
    }
    else if(human == "scissor" && computer == "paper" || human == "paper" && computer == "rock" || human == "rock" && computer == "scissor"){
        result = " You WIN";
    }
    else{
        result = " You LOST";
    }
    
    let finalResult = "You played "+human+" and the Computer played "+computer+result;
    return (finalResult);
}

const human= getHumanChoice();
const computer= getComputerChoice();

console.log(playRound(human, computer));