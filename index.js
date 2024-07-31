/* const person = {
    name: "Jericho",
    age: 20, 
    country: "Philippines"
} 

/* logData = (person) => {
    let data = `${person.name} is ${person.age} years old and lives in ${person.country}`;

    console.log(data);
} 

// logData(person); 
*/

/* const hands = [
    "rock!", 
    "paper!",
    "scissors!"
];

produceHand = () => {
    let choice = Math.floor(Math.random() * 3);

    console.log(hands[choice]);
}

produceHand(); */


let choiceDisplay = document.querySelector("#choiceDisplay");
choiceDisplay.style.display = "none";

let resultDisplay = document.querySelector("#resultDisplay");
resultDisplay.style.display = "none";

let playButton = document.querySelector("#playButton");
let restartButton = document.querySelector("#restartButton");
restartButton.style.display = "none";

let playerScore = document.querySelector("#playerScore"); 
let enemyScore = document.querySelector("#enemyScore");

let winnerMessage = document.querySelector("#winnerMessage");

let rematchBtn = document.querySelector("#rematchBtn");
rematchBtn.style.display = "none";

const buttons = document.querySelectorAll('button');

let choiceContainer = document.querySelector("#choiceContainer");

let choiceButtons = choiceContainer.querySelectorAll('button');


const choices = [
    "Rock",
    "Paper",
    "Scissors"
]; // array of selection for the enemy bot

let choiceHolder = "";
let enemyChoiceHolder = "";

let playerScoreCount = 0;
let enemyScoreCount = 0;

rockButton = () => {
    choiceHolder = rock.textContent; 
    choiceDisplay.style.display = "block";
    displayChoice(choiceHolder);
} // event code for rock button

paperButton = () => {
    choiceHolder = paper.textContent;
    choiceDisplay.style.display = "block";
    displayChoice(choiceHolder);
} // event code for paper button

scissorsButton = () => {
    choiceHolder = scissors.textContent;
    choiceDisplay.style.display = "block";
    displayChoice(choiceHolder);
} // event code for scissors button

displayChoice = (choice) => {
    choiceDisplay.textContent = `Your choice is: ${choice}`;
} // displays the current choice of the user

enemyChoiceMaker = () => {
    let RNG = Math.floor(Math.random() * 3);
    enemyChoiceHolder = choices[RNG];

} // randomly chooses one of the three options to compete with the user

let playButton2 = () => {
    validationChecker();

    playButton.style.display = "none";

} // validates who win


validationChecker = () => {
    enemyChoiceMaker();
    restartButton.style.display = "block";

    let message = "";

    if(choiceHolder === "Rock" && enemyChoiceHolder === "Rock"){
        message = "It's a draw!";
    }
    else if(choiceHolder === "Paper" && enemyChoiceHolder === "Paper"){
        message = "It's a draw!";
    }
    else if(choiceHolder === "Scissors" && enemyChoiceHolder === "Scissors"){
        message = "It's a draw!";
    }
    else if(choiceHolder === "Rock" && enemyChoiceHolder === "Scissors"){
        message = "You won! The enemy's choice was: " + enemyChoiceHolder;
        playerScoreCount ++;

    }
    else if(choiceHolder === "Paper" && enemyChoiceHolder === "Rock"){
        message = "You won! The enemy's choice was: " + enemyChoiceHolder;
        playerScoreCount ++;

    }
    else if(choiceHolder === "Scissors" && enemyChoiceHolder === "Paper"){
        message = "You won! The enemy's choice was: " + enemyChoiceHolder;
        playerScoreCount ++;
    }
    else{
        message = "You lost. The enemy's choice was: " + enemyChoiceHolder;
        enemyScoreCount ++;
    }

    playerScore.textContent = `You: ${playerScoreCount}`;
    enemyScore.textContent = `Enemy: ${enemyScoreCount}`;

    resultDisplay.textContent = message;
    resultDisplay.style.display = "block";

    if(playerScoreCount === 5 || enemyScoreCount === 5){
        checkWinner();
    }
}

const restartGame = () => {
    resultDisplay.textContent = "";
    resultDisplay.style.display = "none";

    choiceDisplay.textContent = "";
    choiceDisplay.style.display = "none";

    enemyChoiceHolder = "";
    choiceHolder = "";

    playButton.style.display = "block"
    restartButton.style.display = "none";

}

checkWinner = () => {
    if(playerScoreCount === 5 || enemyScoreCount === 5){

        Array.from(buttons).forEach(button => {
            // Access the button element here
            button.style.display = "none"
          });

          let winMessage = "";

          choiceDisplay.style.display = "none";
          resultDisplay.style.display = "none";
          choiceContainer.style.display = "none";
          winnerMessage.style.display = "block";
          rematchBtn.style.display = "block";


        if(playerScoreCount === 5){
            winMessage = "Congratulations! You won the match!";
            winnerMessage.textContent = winMessage;
        }
        else if(enemyScoreCount === 5){
            winMessage = "You lost the match. Better luck next time!";
            winnerMessage.textContent = winMessage;
        }

        playerScoreCount = 0;
        enemyScoreCount = 0;
        playerScore.textContent = `You: ${playerScoreCount}`;
        enemyScore.textContent = `Enemy: ${enemyScoreCount}`;
    }
}

rematchGame = () => {
    restartGame();

    rematchBtn.style.display = "none"
    winnerMessage.style.display = "none"
    choiceContainer.style.display = "flex"

    Array.from(choiceButtons).forEach(button => {
        // Access the button element here
        button.style.display = "block"
      });

}

restartButton.addEventListener("click", restartGame);

playerScore.textContent = `You: ${playerScoreCount}`;
enemyScore.textContent = `Enemy: ${enemyScoreCount}`;


