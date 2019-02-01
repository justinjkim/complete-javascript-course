/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let scores, roundScore, activePlayer, dice;

init();

// when rolling the die
document.querySelector('.btn-roll').addEventListener('click', function() {
	document.querySelector('.dice').style.visibility = 'visible';
	dice = Math.floor(Math.random() * 6) + 1;
	document.querySelector('.dice').src = 'dice-' + dice + '.png';

	if (dice === 1) {
		alert('oops! you rolled a 1!');
		roundScore = 0;
		document.getElementById('current-' + activePlayer).innerHTML = roundScore;
		nextPlayer();
	} else {
		roundScore += dice;
		document.getElementById('current-' + activePlayer).innerHTML = roundScore;
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	scores[activePlayer] += roundScore;
	document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];
	roundScore = 0;
	document.getElementById('current-' + activePlayer).innerHTML = roundScore;

	if (scores[activePlayer] >= 10) {
		document.getElementById('name-' + activePlayer).innerHTML = 'Winner!!';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.getElementById('name-' + activePlayer).classList.add('winner');
		document.querySelector('.dice').style.display = 'none';
		
	} else {
	nextPlayer();
	}
})


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

function nextPlayer() {
	if (activePlayer === 0) {
		activePlayer = 1;
	} else {
		activePlayer = 0;
	}

	roundScore = 0;

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

}




