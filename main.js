let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > h1");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertToWord(letter) {
    if  (letter === "rock")  return "Búa";
    if  (letter === "paper")  return "Bao";
    return "Kéo";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(4).sup();
    const smallCompWord = "comp".fontsize(4).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  thắng  ${convertToWord(computerChoice) }${smallCompWord} . Bạn thắng! `
    document.getElementById(userChoice).classList.add('green-glow');
   setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(4);
    const smallCompWord = "comp".fontsize(4);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  bằng  ${convertToWord(computerChoice) }${smallCompWord} . Hoà à ... Chán thế `
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 1000); 
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(4).sub();
    const smallCompWord = "comp".fontsize(4).sup();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  thua  ${convertToWord(computerChoice) }${smallCompWord} . Bạn non vl ...`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 1000);
 
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })
    
    paper_div.addEventListener('click', function() {
        game("paper");
    })
    
    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
    
}
main();

