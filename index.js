const gameContainer = document.getElementsByClassName("game-grid");
const gameSize = 16;

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-element");
        gameContainer[0].appendChild(square);
    }
}
createGrid();


// script to leave a hover trail
const squares = document.querySelectorAll(".grid-element");

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});

// script to clear the grid
const clearButton = document.querySelector(".reset-button");

clearButton.addEventListener("click", () => {
    squares.forEach(square => {
        square.style.removeProperty("background-color");
    });
}
);
