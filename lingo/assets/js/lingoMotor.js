var grid = document.getElementById("gridContainer");

var gridPos = 0;
var awnser = "";

startGame();
function startGame(){
    gridPos = 0;
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("gewonnen").style.display = "none";
    grid.style.opacity = "100%";
    
    for(var g = 0; g < grid.children.length; g++){
        grid.children[g].innerHTML = "";
        grid.children[g].classList = "LetterStyle";
    }

    awnser = words[Math.floor(Math.random() * words.length)];
    grid.children[gridPos].innerHTML = Array.from(awnser)[0];
    grid.children[gridPos].classList += " greenLetter";
}

function checkInput(input){
    input = input.toLowerCase();
    var awnsChars = Array.from(awnser);
    var inpChars = Array.from(input);

    for(var a = 0; a < awnsChars.length; a++){
        grid.children[gridPos].innerHTML = inpChars[a];
        
        for(var i = 0; i < inpChars.length; i++){

            if(awnsChars[a] == inpChars[i] && a == i){
                //de letter en de plaats van de letter is het zelfde! Dus de letter moet groen worden.
                console.log( a + " Geef de letter een groene cubus, aan pos:" + gridPos);

                grid.children[gridPos].classList += " greenLetter";
                
            }else if(awnser.includes(inpChars[a])){
                //alleen de letters zijn het zelfde dus niet de plaats, de letter moet dus geel zijn
                console.log( i + " geef de letter een gele circle, aan pos:" + gridPos);
                
                grid.children[gridPos].classList += " yellowLetter";
            }
        }
        gridPos++;
    }
    if(gridPos >= 25 && input != awnser){
        grid.style.opacity = "40%";
        alert("het antwoord was: " + awnser);
        document.getElementById("gameOver").style.display = "inline";
    }else if(input == awnser){
        grid.style.opacity = "40%";
        document.getElementById("gewonnen").style.display = "inline";
    }
}