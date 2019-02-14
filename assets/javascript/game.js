
// Declare global variables to be used inside function (this was determined after the function was started).
var wins = 0,
    losses = 0,
    guessesLeft = 9;
    
var guessesSoFar = [];
var userGuess = ("");

// Get the computer's key choice. Must be random. Create an array with the choices and randomly choose one of the choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Guessing there's a better way to go through the alphabet than what I did above...

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computer guess: " + computerGuess);
// Get user input via key press and store in a variable.
// This function is run when a user presses a key.
document.onkeyup = function(event) {
    console.log("key event:" + event.key);
    //If guessesLeft > 0, then check that it's a letter key, and if so, run this function.
   
        // Determines which key was pressed. (May add something later if a non-letter key was pressed.)
        userGuess = event.key;

            //Compare userGuess and computerGuess with if statement to determine result.
            if (userGuess === computerGuess){
                wins++;
                gameReset();
                
            } else {
                //Add userGuess to guessesSoFar. Decrease guessesLeft by 1.
                guessesLeft--;
                guessesSoFar.push(userGuess);

                // When guessesLeft=0, losses++, restart game.
                if (guessesLeft === 0) {
                losses++;
                gameReset();
                }
            }

        displayResults();
}

function displayResults() {
    //Display results to DOM
    var html = 
    "<p> Wins = " + wins + "</p>" +
    "<p> Losses = " + losses + "</p>" +
    "<p> Guesses Left = " + guessesLeft + "</p>" +
    "<p> Guesses So Far = " + guessesSoFar + "</p>";

    document.getElementById("stats").innerHTML = html;
    console.log (computerChoices);
}

function gameReset () {
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    //Restart game or display Win message?
}

