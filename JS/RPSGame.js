//global array for CP to randomly choose from
const plays = ["rock", "paper", "scissors"];
const pointsToWin = 5;

//player and computerpoints
let playerPoints = 0;
let computerPoints = 0;

//the winner in the end
let winner = "";

//get the input of the player   
let playerSelection = "";
//get random input for the computer
let computerSelection = "";


let playerPointsText = document.querySelector(".playerPoints");
let computerPointsText = document.querySelector(".computerPoints");
let youchoseText = document.querySelector(".youchose");
let computerchoseText = document.querySelector(".computerchose");
let roundResultText = document.querySelector(".roundResult");
let winnerText = document.querySelector(".winner");

///eventlisteners for button clicks (choosing rock paper or scissors)
let rockImg = document.querySelector(".rock");
rockImg.addEventListener("click", () => playerSelectedWeapon("rock"));

let scissorsImg = document.querySelector(".scissors");
scissorsImg.addEventListener("click", () => playerSelectedWeapon("scissors"));

let paperImg = document.querySelector(".paper");
paperImg.addEventListener("click", () => playerSelectedWeapon("paper"));
///

//player selected weapon
function playerSelectedWeapon(playerInput) {
    playerSelection = playerInput;
    computerSelection = computerPlay();
    weapons(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection);
}

//choose random function for the computer
function computerPlay() {
    var computerChoice = plays[Math.floor(Math.random() * 3)]
    console.log("@@@@" + computerChoice)
    return computerChoice;
}

function weapons(playerSelection, computerSelection){

    console.log("$$$$$$$$" + computerSelection);
    switch(playerSelection){
        case "rock":
            document.getElementById("PlayerWeapon").src = "images/rock.png";
            if (computerSelection === "scissors") {
                console.log("1");
                document.getElementById("ComputerWeapon").src = "images/scissors.png";
                }
            else if (computerSelection === "paper") {
                console.log("2");
                document.getElementById("ComputerWeapon").src = "images/paper.png";
                }
            else if (computerSelection === "rock") {
                console.log("3");
                document.getElementById("ComputerWeapon").src = "images/rock.png";
                }
            break;
        case "scissors":
            document.getElementById("PlayerWeapon").src = "images/scissors.png";
            if (computerSelection === "paper") {
                document.getElementById("ComputerWeapon").src = "images/paper.png";
                }
            else if (computerSelection === "rock") {
                document.getElementById("ComputerWeapon").src = "images/rock.png";
               }
            else if (computerSelection === "scissors") {
                console.log("1");
                document.getElementById("ComputerWeapon").src = "images/scissors.png";
            }
           break;
        case "paper":
            document.getElementById("PlayerWeapon").src = "images/paper.png";
            if (computerSelection === "rock") {
                document.getElementById("ComputerWeapon").src = "images/rock.png";
            }
            else if (computerSelection === "scissors") {
                document.getElementById("ComputerWeapon").src = "images/scissors.png";
            }
            else if (computerSelection === "paper") {
            console.log("2");
            document.getElementById("ComputerWeapon").src = "images/paper.png";
            }
            break;

    }

}


function playRound(playerSelection, computerSelection) {
    if (winner) return;

    console.log("player chose: " + playerSelection + " computer chose: " + computerSelection);
    youchoseText.textContent = "You Chose: " + playerSelection;
    computerchoseText.textContent = "The Computer Chose: " + computerSelection;
 
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerPoints++;
                roundResultText.textContent = "Player gets a point!";
            }
            else if (computerSelection === "paper") {
                computerPoints++;
                roundResultText.textContent = "Computer gets a point!";
            }
            else
                roundResultText.textContent = "Its a Tie";
            break;
        case "scissors":
            if (computerSelection === "paper") {
                playerPoints++;
                roundResultText.textContent = "Player gets a point!";
            }
            else if (computerSelection === "rock") {
                computerPoints++;
                roundResultText.textContent = "Computer gets a point!";
            }
            else
                roundResultText.textContent = "Its a Tie";
            break;
        case "paper":
            if (computerSelection === "rock") {
                playerPoints++;
                roundResultText.textContent = "Player gets a point!";
            }
            else if (computerSelection === "scissors") {
                roundResultText.textContent = "Computer gets a point!";
                computerPoints++;
            }
            else
                roundResultText.textContent = "Its a Tie";
            break;

    }
    playerPointsText.textContent = playerPoints;
    computerPointsText.textContent = computerPoints;
    console.log(playerPoints + " points of player" + "\t" + computerPoints + " points of computer");
    checkWinner();
}

function checkWinner() {
    if (playerPoints >= pointsToWin || computerPoints >= pointsToWin) {
        playerPoints > computerPoints ? winner = "the Player" : winner = "the Computer";
        console.log("And the winner is: " + winner + "! Congrats!");
        winnerText.textContent = "And the winner is: " + winner + "! Congrats!";

        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Play Again?";
        btn.classList.add("playAgain");
        let playroundDiv = document.querySelector("#playroundShow");
        playroundDiv.appendChild(btn);

        btn.addEventListener("click", () => document.location.reload());
    }
}
