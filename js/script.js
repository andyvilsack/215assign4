var boardArray = new Array(82);
var currentPlayer = 1;
var play1Pos = 0;
var play2Pos = 0;
var prevPlay1Pos = 0;
var prevPlay2Pos = 0;
var player1Image = "post-images/player1Image1.jpg";
var player2Image = "post-images/player1Image2.jpg";
var player3Image = "post-images/player1Image3.jpg";
var tempPosition = 0;
var currentImage1 = 0;
var currentImage2 = 0;
var storeImage1 = "";
var storeImage2 = "";
var firstMove1 = 0;
var firstMove2 = 0;

var cell1 = 22;
var cell4 = 13;
var cell8 = 28;
var cell24 = 7;
var cell25 = 70;


function main(){
	var randomNumber = rollDice();
	movePlayer(randomNumber);

}

function rollDice() {
	randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
   	console.log(randomNumber);
   	return randomNumber;
}

function movePlayer(num) {
	if(currentPlayer == 1) {
		var pos1 = play1Pos + num;

        //check if cell is occupied by player 2, don't check at start of game
		if(play2Pos == pos1 && play2Pos != 0) {
			alert("Player 2 is there already! You lose a turn");
		}
		else { 
        
   			play1Pos += num;
            tempPosition = checkForChuteOrLadder(play1Pos);
            if(tempPosition != null && tempPosition != boardArray[play2Pos])
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
		boardArray[play1Pos] = 1; //set cell to be occupied by player 1
		currentPlayer = 2; //set current player to 2, since player one has moved 
 
	}
	else {
		var pos2 = play2Pos + num;
        
		if(play1Pos == pos2 && play1Pos != 0) {
			alert("Player 1 is there already! You lose a turn");
		}
		else {
			play2Pos += num;
			tempPosition = checkForChuteOrLadder(play2Pos);
            if(tempPosition != null && tempPosition != boardArray[play1Pos])
                play2Pos = tempPosition;
            
			boardArray[play2Pos] = 2;

            //replace previous cell with old image
			if(firstMove2 != 0) 
				document.getElementById('cell' + currentImage2).src = getCurrentImagePlayer2();

			//store current image to be replaced next loop
			currentImage2 = play2Pos;
            setCurrentImagePlayer2(currentImage2);

			document.getElementById("cell"+play2Pos).src = player2Image;
			firstMove2 = 1; //first move has occurred
		}
		boardArray[play2Pos] = 2; //set cell to be occupied by player 1
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

