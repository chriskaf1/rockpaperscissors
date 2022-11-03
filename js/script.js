// create a function which plays a single round (compare the two choices and declare a winner)
// keep score
// loop above function 5 times, increasing the appropriate score
// declare a winner

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
			console.log(`Congratulations, you win! You had ${playerSelection} and computer had ${computerSelection}`);
			return "player";
		} else {
			console.log(`You lose! You chose ${playerSelection} and computer has ${computerSelection}`);
			return "computer";
		}
	} else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
			console.log(`Congratulations, you win! You had ${playerSelection} and computer had ${computerSelection}`);
			return "player";
		} else {
			console.log(`You lose! You chose ${playerSelection} and computer has ${computerSelection}`);
			return "computer";
		}
    } else {
        if (playerSelection === "rock") {
			console.log(`Congratulations, you win! You had ${playerSelection} and computer had ${computerSelection}`);
			return "player";
		} else {
			console.log(`You lose! You chose ${playerSelection} and computer has ${computerSelection}`);
			return "computer";
		}

    }
} // returns eiter "computer" or "player" for the winner
