var currentPlayer = 1;
var play1Pos = 0;
var play2Pos = 0;
var prevPlay1Pos = 0;
var prevPlay2Pos = 0;
var player1Image = "post-images/player1Image1.jpg";
var player2Image = "post-images/player1Image2.jpg";
var tempPosition = 0;
var currentImage1 = 0;
var currentImage2 = 0;
var storeImage1 = "";
var storeImage2 = "";
var firstMove1 = 0;
var firstMove2 = 0;
var checkWinVal = 0;

//init chutes and ladders
var cell1 = 22;
var cell4 = 13;
var cell8 = 28;
var cell24 = 7;
var cell25 = 70;
var cell32 = 3;
var cell35 = 39;
var cell36 = 17;
var cell46 = 65;
var cell55 = 37;
var cell56 = 72;
var cell75 = 38;
var cell77 = 49;
var cell80 = 30;


function main(){
	if(checkWinVal == 0){
		if(currentPlayer == 1){
			document.getElementById("PlayerImage").src = "post-images/player1Image2.jpg";
			document.getElementById("PlayerImage2").src = "post-images/player1Image1.jpg";
		}
		else if(currentPlayer == 2){
			document.getElementById("PlayerImage").src = "post-images/player1Image1.jpg";
			document.getElementById("PlayerImage2").src = "post-images/player1Image2.jpg";
		}
			
		var randomNumber = rollDice();
		document.getElementById("dice").src = "http://balance3e.com/Images/die" + randomNumber + ".gif";
		movePlayer(randomNumber);
		checkWinVal = checkWin();
	}
}

function rollDice() {
	randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
   	return randomNumber;
}

function movePlayer(num) {
	if(currentPlayer == 1) {
		console.log("Player 1 rolled: " + num);
		var pos1 = play1Pos + num;

		//check if new cell is outside of winning range
		if(pos1 > 81){
			alert("You can't go past the final cell, you lose a turn!");
		}
		else if(play2Pos == pos1 && play2Pos != 0) 
		{
			alert("Player 2 is there already! You lose a turn");
		}
		else { 
        
   			play1Pos += num;
            tempPosition = checkForChuteOrLadder(play1Pos);
            if(tempPosition != null && tempPosition != play2Pos)
                play1Pos = tempPosition;

            //replace previous cell with old image
            if(firstMove1 != 0) 
				document.getElementById('cell' + currentImage1).src = getCurrentImagePlayer1();

            //store current image to be replaced next loop
			currentImage1 = play1Pos;
            setCurrentImagePlayer1(currentImage1);

	        //set cell to player 1 image
			document.getElementById('cell' + play1Pos).src = player1Image;
			firstMove1 = 1; //first move has occurred


		}
		currentPlayer = 2; //set current player to 2, since player one has moved 
 
	}
	else {
		console.log("Player 2 rolled: " + num);
		var pos2 = play2Pos + num;
        
        //check if new cell is outside of winning range
		if(pos2 > 81){
			alert("You can't go past the final cell, you lose a turn!");
		}
		else if(play1Pos == pos2 && play1Pos != 0) {
			alert("Player 1 is there already! You lose a turn");
		}
		else {
			play2Pos += num;
			tempPosition = checkForChuteOrLadder(play2Pos);
            if(tempPosition != null && tempPosition != play1Pos)
                play2Pos = tempPosition;
            
            //replace previous cell with old image
			if(firstMove2 != 0) 
				document.getElementById('cell' + currentImage2).src = getCurrentImagePlayer2();

			//store current image to be replaced next loop
			currentImage2 = play2Pos;
            setCurrentImagePlayer2(currentImage2);

			document.getElementById("cell"+play2Pos).src = player2Image;
			firstMove2 = 1; //first move has occurred
		}
		currentPlayer = 1;

	}
}

function setCurrentImagePlayer1(pos) {
	storeImage1 = "post-images/" + document.getElementById('cell' + pos).src.split('/').pop();
}

function setCurrentImagePlayer2(pos) {
	storeImage2 = "post-images/" + document.getElementById('cell' + pos).src.split('/').pop();
}

function getCurrentImagePlayer1() {
	return storeImage1;
}

function getCurrentImagePlayer2() {
	return storeImage2;
}

function checkForChuteOrLadder(position) {
   
	switch(position){
		case 1: return cell1;
		case 4: return cell4;
		case 8: return cell8;
		case 24: return cell24;
		case 25: return cell25;
		case 32: return cell32;
		case 35: return cell35;
		case 36: return cell36;
		case 46: return cell46;
		case 55: return cell55;
		case 56: return cell56;
		case 75: return cell75;
		case 77: return cell77;
		case 80: return cell80;
	}
	return null;
}

function checkWin(){
	if(play1Pos == 81){
		alert("Player 1 wins!");
		return 1;
	}
	if(play2Pos == 81){
		alert("Player 2 wins!");
		return 1;
	}
	return 0;
}





