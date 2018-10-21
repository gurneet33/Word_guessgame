var typedDisplay = document.querySelector(".show");
var inputValue = document.querySelector("input")
var gameOver = false;
var wrongAnswer= "";
var wrongMsg = document.getElementsByClassName("wrongMsg");
var displayWinner = document.querySelector("h1");
var displayWrong = document.querySelector("#wrong");
var allArray = [];
var answerArray = [];
var wrongArray1 = [];
var wrongArray2 = [];

// Create an array of words
    var words = [
        "dog",
        "monkey",
        "cat",
        "goat",
        "bear",
        "bat"
    ];


    // Pick a random word
    var randomWord = words[Math.floor(Math.random() * words.length)];
    var remainingLetters = randomWord.length;
    var answerArray = [];
    var winner ="winner"

    // to show wrong letters printed
    function difference (array1, array2) {
        var temp = [];        
        for (var i in array1) {
        if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
        }
        for(i in array2) {
        if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
        }
        return temp.sort((a,b) => a-b);
        }

        function removeDoubles(string) {
            var mapping = {};
            var newString = '';
            for (var i = 0; i < string.length; i++) {
              if (!(string[i] in mapping)) {
                newString += string[i];
                mapping[string[i]] = true;
              }
            }
            return newString;
          }  
          function initializeGame() { 
           
                inputValue.innerHtml =" ";
                typedDisplay.innerHtml =" ";
                gameStart = false;
                randomWord = "";
                displayWinner.innerHTML = "Play Again ";
                displayWinner.classList.add("display")
                displayWrong.innerHTML = "";
                answerArray = randomWord;
                wrongArray1 = [];
                wrongArray2 = [];
        }

    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
        typedDisplay.innerHTML = answerArray.join(" ");
    }

    
    if(!gameOver){ 
    document.onkeyup = function(event){
        var userGuess = event.key;
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuess) {
                answerArray[i] = userGuess;
                remainingLetters--;
            }  
        }
        allArray.push(userGuess);
        var wrongArray1 = difference(allArray, answerArray);
        var wrongArray2 = removeDoubles(wrongArray1);
        displayWrong.innerHTML = wrongArray2;
        wrongMsg.textContent = "Wrong Letters!"
        displayWrong.classList.add("wrongCss");
        console.log(wrongArray2.length-1);
        if((wrongArray2.length-1)===10){
            initializeGame();
        }     
            if(remainingLetters==0){
                gameOver = true; 
                console.log(gameOver);
                displayWinner.innerHTML = winner;
                displayWinner.classList.add("win");
                // var audioElement = document.createElement("audio");
                //      audioElement.setAttribute("src", "/assets/captainplanet24.mp3");
            }      
        typedDisplay.innerHTML = answerArray.join(" ");
        inputValue.value = userGuess;
    
        }
    }



   