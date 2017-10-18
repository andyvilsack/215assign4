var boardArray = new Array(82);
var currentPlayer = 1;
var play1Pos = 0;
var play2Pos = 0;
function rollDice()
{
	randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
	console.log(randomNumber);
	movePlayer(randomNumber);
}
function movePlayer(num)
{
	if(currentPlayer == 1)
	{
		if(boardArray[play2Pos] ==  (play1Pos += num))
		{
			alert("Player 2 is there already! lose a turn")
		}
		else
		{
		play1Pos += num;
		boardArray[play1Pos] = 1;
		document.getElementById("cell"+play1Pos).src = "post-images/player1Image1.jpg";
		}
	}
	else
	{
		if(boardArray[play1Pos] ==  (play2Pos += num))
		{
			alert("Player 1 is there already! lose a turn")
		}
		else
		{
		play2Pos += num;
		boardArray[play2Pos] = 2;
		document.getElementById("cell"+play2Pos).src = "post-images/player2Image1.jpg";
		}
	}
	
	
	
}