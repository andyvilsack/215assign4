var boardArray = new Array(82);
var currentPlayer = 1;
var play1Pos = 0;
var play2Pos = 0;
var tempPosition = 0;

 var cell1 = 22;
 var cell4 = 13;
 var cell8 = 28;
 var cell24 = 7;
 var cell25 = 70;


function rollDice()
{
	randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
	movePlayer(randomNumber);
}
function movePlayer(num)
{
	if(currentPlayer == 1)
	{
		var test = play1Pos;
		if(boardArray[play2Pos] ==  test)
		{
			alert("Player 2 is there already! You lose a turn")
		}
		else
		{ 
			play1Pos = play1Pos+num;
            tempPosition = checkForChuteOrLadder(play1Pos);
            if(tempPosition != null){
                play1Pos = tempPosition;
            }
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
			alert("Player 1 is there already! You lose a turn")
		}
		else
		{
            checkForChuteOrLadder();
			play2Pos += num;
			boardArray[play2Pos] = 2;
			document.getElementById("cell"+play2Pos).src = "post-images/player1Image2.jpg";
			currentPlayer = 1;
		}
	}
}

function checkForChuteOrLadder(position){
   

    if(position == 1){
        return cell1;
    }
    else if(position == 4){
        return cell4;
    }
    else{
        return null;
    }
}

//if lands on specified cell, move to ladder or shoot cell
//replace image from tile moved from
//new tile cannot be occupied