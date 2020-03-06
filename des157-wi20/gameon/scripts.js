var startGame = document.getElementById("startgame");
    var gameControl = document.getElementById("gamecontrol");
    var game = document.getElementById("game"); 
    var score = document.getElementById("score");
    var actionArea = document.getElementById("actions");

    var gameData = {
        dice: ["1die.jpg", "2die.jpg", "3die.jpg", "4die.jpg", "5die.jpg", "6die.jpg",],
        players: ["player 1", "player 2"],
        score:[0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }
    
    startGame.addEventListener("click", function(){
	// randomly set game index here...
	gameControl.innerHTML = '<h2>The Game Has Started</h2>';
	gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

	document.getElementById('quit').addEventListener("click", function(){
		location.reload();
	});

	console.log("set up the turn!");
});

gameData.index = Math.round(Math.random());

function setUpTurn(){
	game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]} </p>`;
	actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
	document.getElementById('roll').addEventListener("click", function(){

		console.log("roll the dice!");

	});
		console.log("check to see if the player won!");
}

function throwDice(){
	actionArea.innerHTML = '';
	gameData.roll1 = Math.ceil(Math.random()*6);
	gameData.roll2 = Math.ceil(Math.random()*6);
	game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
	game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
						<img src="${gameData.dice[gameData.roll2-1]}">`;
	gameData.rollSum = gameData.roll1 + gameData.roll2;

	// if two 1's are rolled...
	if( gameData.rollSum === 2 ){
		console.log("snake eyes were rolled");
		game.innerHTML += "<p>Oh snap! Snake eyes!</p>";
		gameData.score[gameData.index] = 0;
		gameData.index ? gameData.index = 0 : gameData.index = 1;
		showCurrentScore();
		setTimeout(setUpTurn, 2000);
	}
	// if either die is a 1...
	else if(gameData.roll1 === 1 || gameData.roll2 === 1){
		console.log("one of the two dice was a 1");
		gameData.index ? gameData.index = 0 : gameData.index = 1;
		game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${gameData.players[gameData.index]}</p>`;
		setTimeout(setUpTurn, 2000);
	}
	// if neither die is a 1...
	else {
		gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
		actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

		document.getElementById('rollagain').addEventListener("click", function(){ 
			throwDice();
		});

		document.getElementById('pass').addEventListener("click", function(){
			gameData.index ? gameData.index = 0 : gameData.index = 1;
			setUpTurn();
		});

		checkWinningCondition();
	}

}

gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

document.getElementById('rollagain').addEventListener("click", function(){ 
	throwDice();
});

document.getElementById('pass').addEventListener("click", function(){
	gameData.index ? gameData.index = 0 : gameData.index = 1;
	setUpTurn();
});

console.log("check to see if the player won!");

function checkWinningCondition(){
	if(gameData.score[gameData.index] > gameData.gameEnd){
		score.innerHTML = `<h2>${gameData.players[gameData.index]} 
		wins with ${gameData.score[gameData.index]} points!</h2>`;

		actionArea.innerHTML = '';
		document.getElementById('quit').innerHTML = "Start a New Game?";
	}
	else{  
		// Show current score...
	}
}

function showCurrentScore(){
	score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</p>`;
}


function setbackground(){
    window.setTimeout( "setbackground()", 4000);
    var index = Math.round(Math.random() * 9);
    var ColorValue = "#E6A9EC";
    if(index == 1)
    ColorValue = "FFCCCC";
    if(index == 2)
    ColorValue = "CCAFFF";
    if(index == 3)
    ColorValue = "A6BEFF";
    if(index == 4)
    ColorValue = "99FFFF";
    if(index == 5)
    ColorValue = "D5CCBB";
    if(index == 6)
    ColorValue = "99FF99";
    if(index == 7)
    ColorValue = "FFFF99";
    if(index == 8)
    ColorValue = "FFCC99";
    if(index == 9)
    ColorValue = "CCCCCC";
    document.bgColor=ColorValue;
    }