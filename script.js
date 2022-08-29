let xTurn = true;

function winCondition() {

}

function addSymbol(e) {
    if(xTurn) {
        e.target.innerHTML = "X";
        console.log(e);
        xTurn = false;

        e.target.removeEventListener('click', addSymbol);

        winCondition();
    }

    else {
        e.target.innerHTML = "O";
        xTurn = true;

        //test

        winCondition();
    }
}

const squares = document.querySelectorAll(".game-square");
squares.forEach(square => square.addEventListener('click', addSymbol));
