
// Declare global variables to be used inside function (this was determined after the function was started).
var wins = 0,
    losses = 0,
    guessesLeft = 5;
    
var guessesSoFar = "";

// Get user input via key press and store in a variable.
// This function is run when a user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed. (May add something later if a non-letter key was pressed.)
    var userGuess = event.key;

    // Get the computer's key choice. Must be random. Create an array with the choices and randomly choose one of the choices.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //Guessing there's a better way to go through the alphabet than what I did above...

    var computerGuess = computerChoices [Math.floor(Math.random) * computerChoices.length];

    //Compare userGuess and computerGuess with if statement to determine result.
    if (userGuess === computerGuess){
        wins++
        //Restart game or display Win message?
        ;
    } else {
        //Add userGuess to guessesSoFar. Decrease guessesLeft by 1.
    }
    
}

