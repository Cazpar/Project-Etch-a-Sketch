// add a 16x16 grid of square divs to div.game-container

const gameContainer = document.getElementsByClassName("game-container");

function createGrid() {
    for (let i = 0; i < 255; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        gameContainer[0].appendChild(square);
    }
}
createGrid();
