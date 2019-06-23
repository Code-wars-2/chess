var letters = "abcdefgh";

function board(){
    for(var i=8;i>0;i--){
            if(i%2===0){
                for(var j=1;j<=8;j++){
                    var alpha = letters.charAt(j-1);
                   if(j%2===0){
                        blacksquare(i,alpha);
                    }else{
                        whitesquare(i,alpha);
                    }
                }linebreak();
            }
            else{
                for(var j=1;j<=8;j++){
                   var alpha = letters.charAt(j-1);
                    if(j%2===0){
                       whitesquare(i,alpha);
                    }
                    else{
                       blacksquare(i,alpha);
                    }
                }linebreak();
            }
        }
}

function whitesquare(i,alpha){
    var square = document.createElement("button");
    square.className = "ws";
    //square.innerText = alpha+i;
    square.value = alpha+i;
    document.getElementsByClassName("chessboard")[0].appendChild(square);
}

function blacksquare(i,alpha){
    var square = document.createElement("button");
    square.className = "bs";
    //square.innerText = alpha+i;
    square.value = alpha+i;
    document.getElementsByClassName("chessboard")[0].appendChild(square);
}

function linebreak(){
    var linebreak = document.createElement("br");
    document.getElementsByClassName("chessboard")[0].appendChild(linebreak);
}

function drawPiece(coin ,className , alpha , i){
    var piece = document.createElement("i");
    var type = 'white';
    piece.className = className;
    if(className.includes('black')){
        type = 'black'
    }
    piece.addEventListener('click',() => chessEngine.availableMoves(coin,alpha+i , type )); 
    let squares = document.getElementsByClassName("chessboard")[0].childNodes;
    for(var square of squares){
        if(square.value === alpha+i){
            square.appendChild(piece);
            return;
        }
    }
}
// n
function initialize(){
    //Arranging pawns
    for(var i=0;i<8;i++){
        var alpha = letters.charAt(i);
        drawPiece("pawn","fas fa-chess-pawn whitepawn",alpha,2)
    }

    for(var i=0;i<8;i++){
        var alpha = letters.charAt(i);
        drawPiece("pawn","fas fa-chess-pawn blackpawn",alpha,7)
    }
    // Arrange rook
    drawPiece("rook","fas fa-chess-rook whiterook",'a',1)
    drawPiece("rook","fas fa-chess-rook whiterook",'h',1)
    drawPiece("rook","fas fa-chess-rook blackrook",'a',8)
    drawPiece("rook","fas fa-chess-rook blackrook",'h',8)
    // Arrange horses
    drawPiece("knight","fas fa-chess-knight whitehorse",'b',1)
    drawPiece("knight","fas fa-chess-knight whitehorse",'g',1)
    drawPiece("knight","fas fa-chess-knight blackhorse",'b',8)
    drawPiece("knight","fas fa-chess-knight blackhorse",'g',8)
    //Arrange bishops
    drawPiece("bishop","fas fa-chess-bishop whitebishop",'c',1)
    drawPiece("bishop","fas fa-chess-bishop whitebishop",'f',1)
    drawPiece("bishop","fas fa-chess-bishop blackbishop",'c',8)
    drawPiece("bishop","fas fa-chess-bishop blackbishop",'f',8)
    // Arrange queen
    drawPiece("queen","fas fa-chess-queen whitequeen",'d',1)
    drawPiece("queen","fas fa-chess-queen blackqueen",'e',8)
    //Arrange king
    drawPiece("shit","fas fa-chess-king whiteking",'e',1)
    drawPiece("shit","fas fa-chess-king blackking",'d',8)

}

board(); // Creating the chess board :)
//startGame();
initialize();