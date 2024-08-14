let min=1;
let max=100;
let random=(Math.floor(Math.random()*(max-min+1)+min));

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const displayoutput=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

const p=document.createElement('p');
let prevguess=[];
let numguesses=0;
let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value);
        // console.log(guess);
        validiateGuess(guess);
    });
}

function validiateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }
    else if(guess<1){
        alert('Please enter a number more than 1')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevguess.push(guess);
        if(numguesses===9){
            dispalyguess(guess);
            displaymessage(`Game over. Random number was ${random}`);
            endgame();
        }
        else{
            dispalyguess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess===random){
        displaymessage(`Yeee! You Won the game`)
        endgame();
    }
    else if(guess<random){
        displaymessage(`Number is too low.`)
    }
    else if(guess>random){
        displaymessage(`Number is too High.`)
    }

}

function dispalyguess(guess){
    userinput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numguesses++;
    remaining.innerHTML=`${10-numguesses} `;

}

function displaymessage(message){
    displayoutput.innerHTML=`<h2>${message}</h2>`;

}

function endgame(){
    userinput.value='';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame=false;
    newgame();

}

function newgame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguesses = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numguesses} `;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);

    playgame = true;
  });
}


