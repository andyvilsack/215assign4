boardArray[82] = new Array;
currentPlayer = 1;
play1Pos = 0;
play2Pos = 0;
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
		play1Pos += num;
	}
	else
	{
		play2Pos += num;
	}
	
	
	
}