function chessEngine() {};

var letters = ['a','b','c','d','e','f','g','h'];

// get the available moves for pawn
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
  return;
}


// get the available moves for knight
chessEngine.showKnightMoves = function(position,type) {
  var chessboard = document.getElementsByClassName("chessboard")[0].children;
  for(var square of chessboard){
    square.classList.remove('show-move');
  }
  let pos = {};
  let moves = [];
  pos.x = letters.indexOf(position[0]); // get the x in numeric
  pos.y = +position[1]; // get the y in numeric
  // 4 move pairs possible for knight
  // pair 1
  for(let k=1;k<=2;k++){
    let x = pos.x + k;
    let temp = k > 1 ? 1 : 2;
    let y = pos.y + temp;
    if(x <= letters.length && y <= 8){
      moves.push((letters[x]+y).toString());
    }
  }
  // pair 2
  for(let k=1;k<=2;k++){
    let x = pos.x - k;
    let temp = k > 1 ? 1 : 2;
    let y = pos.y - temp;
    if(x >= 0 && y >= 1){
      moves.push((letters[x]+y).toString());
    }
  }
  // pair 3
  for(let k=1;k<=2;k++){
    let x = pos.x - k;
    let temp = k > 1 ? 1 : 2;
    let y = pos.y + temp;
    if(x >= 0 && y <= 8){
      moves.push((letters[x]+y).toString());
    }
  }
  // pair 4 
  for(let k=1;k<=2;k++){
    let x = pos.x + k;
    let temp = k > 1 ? 1 : 2;
    let y = pos.y - temp;
    if(x <= letters.length && y >= 1){
      moves.push((letters[x]+y).toString());
    }
  }
  for(var move of moves){
    for(var square of chessboard){
      if(square.value === move){
        square.classList.add('show-move');
      }
    }
  }
  return;
}

chessEngine.showRookMoves = function(position,type){
  var chessboard = document.getElementsByClassName("chessboard")[0].children;
  for(var square of chessboard){
    square.classList.remove('show-move');
  }
  let pos = {};
  let moves = [];
  var i;
  pos.x = letters.indexOf(position[0]); // get the x in numeric
  pos.y = +position[1]; // get the y in numeric
    
  //go left;
  for(i=pos.x;i>=0;i--){
    var charac = letters.charAt(i);
    var val = charac+pos.y;
    moves.push(val);
    }
  //go right
  for(i=pos.x;i<=8;i++){
    var charac = letters.charAt(i);
    var val = charac+pos.y;
    moves.push(val);
  }
  //go up
  for(i=pos.y;i<=8;i++){
    var val = position[0]+i;
    moves.push(val);
  }
  //go down
  for(i=pos.y;i>=0;i--){
    var val = position[0]+i;
    moves.push(val);
  }
  for(var move of moves){
    for(var square of chessboard){
      if(square.value === move){
        square.classList.add('show-move');
      }
    }
  }
  return;
  }
  
chessEngine.showBishopMoves = function(position,type){
    var chessboard = document.getElementsByClassName("chessboard")[0].children;
    for(var square of chessboard){
      square.classList.remove('show-move');
    }
    let pos = {};
    let moves = [];
    var i;
    pos.x = letters.indexOf(position[0]); // get the x in numeric
    pos.y = +position[1]; // get the y in numeric
    //right-up
    for(i=pos.x,j=pos.y;i<=8,j<=8;i++,j++){
      var val = letters.charAt(i)+j;
      moves.push(val);
    }
    //left-down
    for(i=pos.x,j=pos.y;i>=1,j>=1;i--,j--){
      var val = letters.charAt(i)+j;
      moves.push(val);
    }
    //right-down
    for(i=pos.x,j=pos.y;i<=8,j>=1;i++,j--){
      var val = letters.charAt(i)+j;
      moves.push(val);
    }
    //left-up
    for(i=pos.x,j=pos.y;i>=1,j<=8;i--,j++){
      var val = letters.charAt(i)+j;
      moves.push(val);
    }
    
    for(var move of moves){
      for(var square of chessboard){
        if(square.value === move){
          square.classList.add('show-move');
        }
      }
    }
    return;
  }
    chessEngine.showQueenMoves = function(position,type){
      var chessboard = document.getElementsByClassName("chessboard")[0].children;
      for(var square of chessboard){
        square.classList.remove('show-move');
      }
      let pos = {};
      let moves = [];
      var i;
      pos.x = letters.indexOf(position[0]); // get the x in numeric
      pos.y = +position[1]; // get the y in numeric
      //right-up
      for(i=pos.x,j=pos.y;i<=8,j<=8;i++,j++){
        var val = letters.charAt(i)+j;
        moves.push(val);
      }
      //left-down
      for(i=pos.x,j=pos.y;i>=1,j>=1;i--,j--){
        var val = letters.charAt(i)+j;
        moves.push(val);
      }
      //right-down
      for(i=pos.x,j=pos.y;i<=8,j>=1;i++,j--){
        var val = letters.charAt(i)+j;
        moves.push(val);
      }
      //left-up
      for(i=pos.x,j=pos.y;i>=1,j<=8;i--,j++){
        var val = letters.charAt(i)+j;
        moves.push(val);
      }
      //go left;
  for(i=pos.x;i>=0;i--){
    var charac = letters.charAt(i);
    var val = charac+pos.y;
    moves.push(val);
    }
  //go right
  for(i=pos.x;i<=8;i++){
    var charac = letters.charAt(i);
    var val = charac+pos.y;
    moves.push(val);
  }
  //go up
  for(i=pos.y;i<=8;i++){
    var val = position[0]+i;
    moves.push(val);
  }
  //go down
  for(i=pos.y;i>=0;i--){
    var val = position[0]+i;
    moves.push(val);
  }
  for(var move of moves){
        for(var square of chessboard){
          if(square.value === move){
            square.classList.add('show-move');
          }
        }
      }
      return;
      }

chessEngine.showKingMoves = function(position,type){
        var chessboard = document.getElementsByClassName("chessboard")[0].children;
        for(var square of chessboard){
          square.classList.remove('show-move');
        }
        let pos = {};
        let moves = [];
        var i;
        pos.x = letters.indexOf(position[0]); // get the x in numeric
        pos.y = +position[1]; // get the y in numeric
        //go left
        var left = pos.x-1;
        moves.push(letters.charAt(left)+pos.y)
        //go right
        var right = pos.x+1;
        moves.push(letters.charAt(right)+pos.y)
        //go up
        var up = pos.y + 1;
        moves.push(letters.charAt(pos.x)+up)
        //go down
        var down = pos.y-1;
        moves.push(letters.charAt(pos.x)+down)
        for(var move of moves){
          for(var square of chessboard){
            if(square.value === move){
              square.classList.add('show-move');
            }
          }
        }
        return;
        }
// split based on piece and show moves first
chessEngine.availableMoves = function(piece,position,type){
  console.log(piece)
  switch(piece){
    case "pawn": {
      chessEngine.showPawnMoves(position,type);
      break;
    }
    case "knight": {
      chessEngine.showKnightMoves(position,type);
      break;
    }
    case "rook": {
      chessEngine.showRookMoves(position,type);
      break;
    }
    case "bishop": {
      chessEngine.showBishopMoves(position,type);
      break;
    }
    case "queen": {
      chessEngine.showQueenMoves(position,type);
      break;
    }
    case "king":{
      chessEngine.showKingMoves(position,type);
      break;
    }
    case "default": {
      console.log("Default");
      break;
    }
  }
}
