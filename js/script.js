var boardArray = new Array(82);
var currentPlayer = 1;
var play1Pos = 0;
var play2Pos = 0;
function rollDice()
{
	randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
	movePlayer(randomNumber);
}
function movePlayer(num)
{
	if(currentPlayer == 1)
	{
		var test = play1Pos + num;
		if(boardArray[play2Pos] ==  test)
		{
			alert("Player 2 is there already! lose a turn")
		}
		else
		{
			play1Pos = play1Pos+num;
			boardArray[play1Pos] = 1;
			document.getElementById("cell"+play1Pos).src = "post-images/player1Image1.jpg";
			currentPlayer = 2;
		}
	}
	else
	{
		var test2 = play2Pos + num;
		if(boardArray[play1Pos] ==  test2)
		{
			alert("Player 1 is there already! lose a turn")
		}
		else
		{
			play2Pos += num;
			boardArray[play2Pos] = 2;
			document.getElementById("cell"+play2Pos).src = "post-images/player2Image1.jpg";
			currentPlayer = 1;
		}
	}
}