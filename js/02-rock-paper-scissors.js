// Step 1: Prompt the user for their choice.
let userChoice = prompt("Choose rock, paper, or scissors:");

// Step 2: Create the computer's choice.
let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice < 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

// Step 3: Create a conditional statement to determine the winner.
let result;

if (userChoice === computerChoice) {
    result = "It's a tie!";
} else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        result = "You win! Rock destroys scissors.";
    } else {
        result = "Computer wins! Paper covers rock.";
    }
} else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        result = "You win! Paper covers rock.";
    } else {
        result = "Computer wins! Scissors cut paper.";
    }
} else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
        result = "You win! Scissors cut paper.";
    } else {
        result = "Computer wins! Rock destroys scissors.";
    }
} else {
    result = "Invalid choice. Please choose rock, paper, or scissors.";
}

// Display the result in an alert box.
alert(result);
