var type = document.querySelector(".show");
var inputValue = document.querySelector("input")
var gameOver = false;
var wrongAnswer= "";
var wrongCounter = 0;
var displayWinner = document.querySelector("h1");
var displayWrong = document.querySelector("#wrong")

// Create an array of words
    var words = [
        "dog",
        "monkey",
        "cat",
        "lemur",
        "skunk"
    ];

    
    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    var remainingLetters = word.length;
    var answerArray = [];
    var winner ="winner"
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        type.innerHTML = answerArray.join(" ");
    }
    function reset(){
        gameOver = true;
        document.getElementById("placeholder").textContent = null
    }
    if(!gameOver){ 
    document.onkeyup = function(event){
        var userGuess = event.key;
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userGuess) {
                answerArray[j] = userGuess;
                remainingLetters--;
            }  
            else {
             wrongAnswer = userGuess;
                wrongCounter++;
                console.log(wrongAnswer);
                displayWrong.innerHTML = wrongAnswer;
                displayWrong.classList.add("wrongCss");
            } 
        }
            if(remainingLetters==0){
                gameOver = true;
                // inputValue.innerHTML ="";
                console.log(gameOver);
                displayWinner.innerHTML = winner;
                displayWinner.classList.add("win");
                
                // var audioElement = document.createElement("audio");
                //      audioElement.setAttribute("src", "/assets/captainplanet24.mp3");
            }      
        
        type.innerHTML = answerArray.join(" ");
        inputValue.value = userGuess;
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