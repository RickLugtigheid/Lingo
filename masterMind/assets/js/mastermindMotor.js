const colorPens = ["red", "green", "blue", "yellow", "brown","orange","black","white"];

var curRow = 8;
var grid = document.getElementById("gridContainer");

startGame(4, false);
function startGame(rows, useSameColor){
    //maak speelveld
    var gridRows = [];
    this.code = [];

    while(code.length < rows){
        gridRows.push(" 50px");
        var check = colorPens[Math.floor(Math.random() * colorPens.length)]
        console.log(check);
        if(code.includes(check) && useSameColor == false){
           console.log("Can't have 2 colors in code!");
        }else{
           code.push(check);
        }
    }
    // create the game
        for(var r = 0; r < rows; r++){
            grid.style.gridTemplateColumns+= gridRows[r];

            for(var c = 0; c < 8; c++){
                var item = document.createElement("div");
                item.classList += "item";
                var colorHole = document.createElement("button");
                colorHole.classList += "itemRound";
                grid.appendChild(item);
                item.appendChild(colorHole);
            }
        }
        curRow = 8;
        checkOrMake = true;
        checkRow();
    }

var checkOrMake;
code.reverse();
function checkRow(){
    if(checkOrMake){
        // make sure you can only interact with the curRow
        if(curRow > 0){
            for(var n = 1; n < 5; n++){
                console.log(grid.children[(curRow * 4) - n])
                grid.children[(curRow * 4) - n].id = "pos" + n;
                grid.children[(curRow * 4) - n].firstChild.setAttribute("onClick", "setColor(this)");
                checkOrMake = false;
            }
        }else{
            alert("you lose: no more rows left!")
        }
    }else{
        var whitePen = 0;
        var redPen = 0;
        for(var r = 1; r < 5; r++){
            var cur = grid.children[(curRow * 4) - r].firstChild;
            cur.classList.remove("itemRound");
            var curString = cur.classList.toString();
            console.log(curString);
            cur.classList.add("itemRound");

            // check if we need a red pen
            if(curString == code[(r -1)]){
                //doesn't work correctly
                whitePen++;
            }else if(code.includes(curString)){
                // check if we need a white pen
                redPen++;
            }
            // make sure you can't interact with the buttons anymore
            cur.setAttribute("onClick", "");
        }
        // sets the next rows to use
        checkOrMake = true;
        curRow--;
        alert(whitePen+ " White pens, " + redPen + "Red pens");
        if(redPen == 4){ alert("You win!")}
        // set the next row interactable
        checkRow();
    }
}

// set the selected color
var selectedColor;
function colorSelect(color){
    if(colorPens.includes(color)){
        selectedColor = color;
    }
}
// set the color of a element in the curRow
function setColor(element){
    if(selectedColor != null){
        element.classList = "itemRound " + selectedColor;
    }
}