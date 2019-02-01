/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let scores, roundScore, activePlayer, dice;

// when rolling the die
document.querySelector('.btn-roll').addEventListener('click', function() {
	document.querySelector('.dice').style.visibility = 'visible';
	dice = Math.floor(Math.random() * 6) + 1;
	document.querySelector('.dice').src = 'dice-' + dice + '.png';

	if (dice === 1) {
		alert('oops! you rolled a 1!');
		roundScore = 0;
		nextPlayer();
	} else {
		roundScore += dice;
		document.getElementById('current-' + activePlayer).innerHTML = roundScore;
	}

});


document.querySelector('.btn-new').addEventListener('click', function() {
	init();
});



function init() {
	document.getElementById('score-0').innerHTML = 0;
	document.getElementById('score-1').innerHTML = 0;
	document.getElementById('current-0').innerHTML = 0;
	document.getElementById('current-1').innerHTML = 0;
	document.querySelector('.dice').style.visibility = 'hidden';
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
}




