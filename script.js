'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😂😀 correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
let score = 20;
let secretNumber = Math.trunc(Math.random()*20)+1;
let highScore = 0;
console.log(secretNumber);
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//when there is no input
    if(!guess){
        //document.querySelector('.message').textContent = '🔴 No number';
        displayMessage('🔴 No number');

        //when player win
    } else if (guess === secretNumber){
       //document.querySelector('.message').textContent = '🎉✨ Correct Number';
       displayMessage('🎉✨ Correct Number');
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';
       document.querySelector('.number').textContent = secretNumber;

       if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
       }
       // When guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber? 
            // '🔺 Too high': '🔽 Too low';
            displayMessage(guess > secretNumber? '🔺 Too high': '🔽 Too low');
            score--;
        document.querySelector('.score').textContent = score;

        } else{
            //document.querySelector('.message').textContent = '💥you lost the game';
            displayMessage('💥you lost the game');
            document.querySelector('.score').textContent = 0;
        }  
        }
    });


document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //document.querySelector('.message').textContent = 'Start guessing ...';
    displayMessage('Start guessing ...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

)





// as a refrance
/*
let score = 20;
let secretNumber = Math.trunc(Math.random()*20)+1;
let highScore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '🔴 No number';
        //when player win
    } else if (guess === secretNumber){
       document.querySelector('.message').textContent = '🎉✨ Correct Number';
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';
       document.querySelector('.number').textContent = secretNumber;

       if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
       }

       

       //when guess too high
    } else if (guess > secretNumber) {
        if(score > 1){ document.querySelector('.message').textContent = '🔺 Too high';
        score--;
        document.querySelector('.score').textContent = score;

        } else{
            document.querySelector('.message').textContent = '💥you lost the game';
            document.querySelector('.score').textContent = 0;
        }   
     //when guess too low  
    } else if (guess < secretNumber){ 
        if(score > 1){ document.querySelector('.message').textContent = '🔽 Too low';
        score--;
        document.querySelector('.score').textContent = score;

        } else{
            document.querySelector('.message').textContent = '💥you lost the game';
            document.querySelector('.score').textContent = 0;
        }     
       
    }
    
});

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

)
*/