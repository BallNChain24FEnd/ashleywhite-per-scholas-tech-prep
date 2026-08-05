
// Wrap everything so it waits for the HTML page to load completely
document.addEventListener("DOMContentLoaded", () => {

    // 1. Create scores in the global scope and initialize them to 0
    let humanScore = 0;
    let computerScore = 0;

    // 2. Function to generate a random computer choice
    function getComputerChoice() {
        let randomNumber = Math.random();
        console.log("Math.random generated: " + randomNumber);
        
        if (randomNumber < 0.33) {
            return "rock";
        } else if (randomNumber < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // 3. Function to capture user inputs via prompt()
    function getHumanChoice() {
        let userInput = prompt("Enter rock, paper, or scissors:");
        if (!userInput) {
            return "rock";
        }
        return userInput;
    }

    // 4. Function to play a single round
    function playRound(humanChoice, computerChoice) {
        let cleanHuman = humanChoice.toLowerCase();
        let cleanComputer = computerChoice.toLowerCase();
        
        if (cleanHuman === cleanComputer) {
            return "It's a tie!";
        }
        
        if (
            (cleanHuman === "rock" && cleanComputer === "scissors") ||
            (cleanHuman === "paper" && cleanComputer === "rock") ||
            (cleanHuman === "scissors" && cleanComputer === "paper")
        ) {
            humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice;
        } else {
            computerScore++;
            return "You lose! " + computerChoice + " beats " + humanChoice;
        }
    }

    // 5. Function to play exactly 3 rounds using a loop
    function playGame() {
        humanScore = 0;
        computerScore = 0;
        let roundLog = "";

        for (let i = 1; i <= 3; i++) {
            alert("Starting Round " + i + " of 3");
            let choiceHuman = getHumanChoice();
            let choiceComputer = getComputerChoice();
            
            let roundResult = playRound(choiceHuman, choiceComputer);
            alert(roundResult + "\n\nScores -> You: " + humanScore + " | Computer: " + computerScore);
            roundLog += "Round " + i + ": " + roundResult + "<br>";
        }

        let finalVerdict = "";
        if (humanScore > computerScore) {
            finalVerdict = "You win the game!";
        } else if (computerScore > humanScore) {
            finalVerdict = "You lose the game!";
        } else {
            finalVerdict = "The game ended in an overall tie!";
        }

        document.getElementById("game-status").innerHTML = 
            "<strong>Game Over!</strong><br><br>" + roundLog + "<br><strong>" + finalVerdict + "</strong>";
        
        return finalVerdict;
    }

    // Safely attach the click listener once the DOM is guaranteed to be ready
    const targetButton = document.getElementById("start-game-btn");
    if (targetButton) {
        targetButton.addEventListener("click", playGame);
    } else {
        console.log("Error: Could not find the start-game-btn element.");
    }

});
