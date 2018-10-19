var type = document.querySelector(".show");
var gameOver = false;
var wrongAnswer=0;


// Create an array of words
    var words = [
        "dog",
        "monkey",
        "cat",
        "lemur"
    ];
    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    var remainingLetters = word.length;
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        type.innerHTML = answerArray.join(" ");
    }

    document.onkeyup = function(event){
        var userGuess = event.key;
        // type.innerHTML = userGuess;
         
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userGuess) {
                answerArray[j] = userGuess;
                remainingLetters--;
                // type.innerHTML = answerArray.join(" ");
            }
            
        // if(remainingLetters<0){
        //     gameOver = true;
        //     }
        
    
        type.innerHTML = answerArray.join(" ");
        // document.getElementById("letterGuessed").value = " ";
    }
}


    // Set up the answer array



    
    
    // // The game loop
    // while (remainingLetters > 0) {
    //     // Show the player their progress
    //     alert(answerArray.join(" "));
    //     // Get a guess from the player
    //     var guess = prompt("Guess a letter, or click Cancel to stop playing");

    //     if (guess === null) {
    //         // Exit the game loop
    //         break;
    //     } else if (guess.length !== 1) {
    //         alert("Please enter a single letter.");
    //     } else {
    //         // Update the game state with the guess
            
    //     }

    //     // The end of the game loop
    // }
    // // Show the answer and congratulate the player
    // alert(answerArray.join(" "));
    // alert("Good job! The answer was " + word);