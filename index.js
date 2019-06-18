function board(){
    for(var i=0;i<8;i++){
            if(i%2===0){
                for(var j=0;j<8;j++){
                   if(j%2===0){
                        blacksquare();
                    }else{
                        whitesquare();
                    }
                }linebreak();
            }
            else{
                for(var j=0;j<8;j++){
                   if(j%2===0){
                       whitesquare();
                    }
                    else{
                       blacksquare();
                    }
                }linebreak();
            }
        }
}

function whitesquare(){
    var square = document.createElement("Button");
    square.className = "ws";
    document.body.appendChild(square);
}

function blacksquare(){
    var square = document.createElement("Button");
    square.className = "bs";
    document.body.appendChild(square);
}

function linebreak(){
    var linebreak = document.createElement("br");
    document.body.appendChild(linebreak);
}

board(); // Creating the chess board :)

