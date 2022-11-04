
// create a function that generates computer's choice
function computerChoice() {
	let choice = Math.ceil(Math.random() * 3);
	if (choice === 1) {
		return "rock";
	} else if (choice === 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

// create a function that reads player's choice
function playerChoice() {
	let playerInput = prompt("Please enter your choice");
	playerInput = playerInput.toLowerCase();
	// get player input and convert it to lowercase
	while (playerInput != "rock" && playerInput != "paper" && playerInput != "scissors") {
		playerInput = prompt('Wrong choice, please input "rock", "paper", or "scissors"');
		playerInput = playerInput.toLowerCase();
	} //check if player's input is a valid choice and keep asking if it isn't, always converting to lowercase.
	// Will run only if input is invalid
	return playerInput;
}

// create a function which plays a single round (compare the two choices and declare a winner)
function playRound() {
	computerSelection = computerChoice();
	playerSelection = playerChoice();
	// begin comparing choices and declare winner
    if (computerSelection === "rock") {
		if (playerSelection === "paper") {
			console.log(`Congratulations, you win! You chose ${playerSelection} and computer had ${computerSelection}`);
			return "player";
		} else {
			console.log(`You lose! You chose ${playerSelection} and computer had ${computerSelection}`);
			return "computer";
		}
	} else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
			console.log(`Congratulations, you win! You chose ${playerSelection} and computer had ${computerSelection}`);
			return "player";
		} else {
			console.log(`You lose! You chose ${playerSelection} and computer had ${computerSelection}`);
			return "computer";
		}
    } else {
        if (playerSelection === "rock") {
			console.log(`Congratulations, you win! You chose ${playerSelection} and computer had ${computerSelection}`);
			return "player";
		} else {
			console.log(`You lose! You chose ${playerSelection} and computer had ${computerSelection}`);
			return "computer";
		}

    }
} // returns either "computer" or "player" for the winner

function main() {
    //initialize scores
    let computerScore = 0;
    let playerScore = 0;
    while (computerScore < 5 && playerScore < 5) {
        let roundWinner;
        roundWinner = playRound();
        if (roundWinner == "computer") {
            computerScore += 1;
        } else {
            playerScore += 1;
        }
        console.log("Computer score: " + computerScore);
        console.log("Player score: " + playerScore);
        console.log("-----------------------------------");
    } // loop playRound function , increasing the appropriate score until someone has 5.
    if (computerScore == 5) {
        console.log("The computer won! Better luck next time!")
    } else {
        console.log("Congratulations! You won!")
    } // declare a winner
}
