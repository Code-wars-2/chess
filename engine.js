class chessEngine {};

var letters = ['a','b','c','d','e','f','g','h'];

// get the available moves for the piece
chessEngine.showPawnMoves = function(position,type) {
  var chessboard = document.getElementsByClassName("chessboard")[0].children;
  for(var square of chessboard){
    square.classList.remove('show-move');
  }
  let pos = {};//declare empty object
  let moves = []; // declare empty array for list of moves
  pos.x = letters.indexOf(position[0]); // get the x in numeric
  pos.y = +position[1]; // get the y in numeric
  if(type === 'white'){
    if(pos.y === 2){
      for(let i=3;i<5;i++){
        moves.push(i)
      }
    }//same letter only should be 
    else{
      moves.push(pos.y+1)
    }
  }
  if(type === 'black'){
    if(pos.y === 7){
      for(let i=6;i>4;i--){
        moves.push(i)
      }
    }
    else{
      moves.push(pos.y-1)
    }
  }
  for(var move of moves){
    let location = (position[0]+move).toString();
    for(var square of chessboard){
      if(square.value === location){
        square.classList.add('show-move');
      }
    }
  }
}



// split based on piece and show moves first
chessEngine.availableMoves = function(piece,position,type){
  switch(piece){
    case 'pawn': chessEngine.showPawnMoves(position,type)
  }
}

