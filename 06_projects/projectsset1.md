# Projects related to DOM
## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 1
```
console.log("Manisha")
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function(btn){
  btn.addEventListener('click',function(e){
    body.style.backgroundColor = e.target.getAttribute('id');
  });
});
```

## Project 2
```
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height < 0 || height == '' || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  }
  if (weight < 0 || weight == '' || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    result.innerHTML = `<span> ${
      bmi < 18.6
        ? 'Under-Weight'
        : bmi >= 18.6 && bmi <= 24.9
        ? 'Normal Range'
        : 'Over-Weight'
    } ${bmi}</span>`;
  }
});
```

## Project 3
```
setInterval(function(){
  document.querySelector("#clock").innerHTML = 
new Date().toLocaleTimeString()
},1000);
```

## Project 4
```
let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector("#subt");
const guessField = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault();
    const guess = parseInt(guessField.value);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  // val is valid between 1 to 100
  if(isNaN(guess)){
    alert("Please enter a valid number");
  }
  else if(guess<=0){
    alert("Please enter a guess greater than 0");
  }
  else if(guess>100){
    alert("Please enter a guess less than or equal to 100");
  }
  else{
    prevGuess.push(guess);
    if(numGuess>=10){
      cleanupGuess(guess);
      displayMessage(`The Game is Over. Correct number was ${randomNumber}`);
      endGame();
    }
    else{
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  // give proper message if val equals or less or higher than randomNumber
  if(guess == randomNumber){
    displayMessage("You guessed it right!");
    endGame();
  }
  else if(guess<randomNumber){
    displayMessage("Number is tooo low");
  }
  else if(guess>randomNumber){
    displayMessage("Number is tooo high");
  }
}

function cleanupGuess(guess){
  //cleanup textfield to enter next guesses.
  guessField.value = "";
  guessSlot.innerHTML=`${prevGuess.join(',')}`;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
  lowOrHigh.innerHTML =  `<h2>${message}</h2>`
}

function endGame(){
  guessField.value="";
  guessField.setAttribute("disabled","");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener("click",function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11-guess}`;
    guessField.removeAttribute('disabled');
    lowOrHigh.innerHTML="";
    startOver.removeChild(p);
    playGame=true;
  })
}
```