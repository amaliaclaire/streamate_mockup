// check for win algorithms directions


const leftRight = () => {
    for (i=1; i<=2; i++) {
  					//since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
  					for (col = 0; col <=3; col++) {
  						for (row = 0; row <=5; row++) {
  							//check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
  							if (gameboard[row][col] == i) {
  								if ((gameboard[row][col+1] == i) && (gameboard[row][col+2] == i) && (gameboard[row][col+3] == i)) {
  									endGame(i);//a match has been made, so run EndGame with the player that had the win
  									return true; //stop checking for a win - the game is over.
  								}
  							}
  						}
  					}
			}
}

const topBottom = () => {
  for (i=1; i<=2; i++) {
					//since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
					for (col = 0; col <=6; col++) {
						for (row = 0; row <=2; row++) {
							//check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
							if (gameboard[row][col] == i) {
								if ((gameboard[row+1][col] == i) && (gameboard[row+2][col] == i) && (gameboard[row+3][col] == i)) {
									endGame(i); //a match has been made - run endGame for the player who had the match.
									return true; //stop checking for a win - the game is over.
								}
							}
						}
					}
				}
}


const diagonalDown = () => {
  for (i=1; i<=2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <=3; col++) {
          //we also only need to check the bottom most columns - as the win must be upwards
          for (row = 0; row <=2; row++) {
            //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
            if (gameboard[row][col] == i) {
              if ((gameboard[row+1][col+1] == i) && (gameboard[row+2][col+2] == i) && (gameboard[row+3][col+3] == i)) {
                endGame(i);
                return true;
              }
            }
          }
        }
      }
}


const diagonalUp = () => {
  for (i=1; i<=2; i++) {
      //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
      for (col = 0; col <=3; col++) {
        //we also only need to check the bottom most columns - as the win must be upwards
        for (row = 3; row <=5; row++) {
          //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
          if (gameboard[row][col] == i) {
            if ((gameboard[row-1][col+1] == i) && (gameboard[row-2][col+2] == i) && (gameboard[row-3][col+3] == i)) {
              endGame(i);
              return true;
            }
          }
        }
      }
    }
  }

}
