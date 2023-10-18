import { Grid } from './grid.js';

// create grid
let gameSize = 16;
const myGrid = new Grid(gameSize);
myGrid.createGrid();

const label = document.querySelector('.game-size-label');
label.textContent = `Grid Size: ${myGrid.size}`;


// clear grid
const clearButton = document.querySelector('.reset-button');
clearButton.addEventListener('click', () => {
    myGrid.updateGridSize(gameSize);
});

// get slider value from #gameSize and update grid
const slider = document.querySelector('#gameSize');

slider.addEventListener('change', () => {
    gameSize = slider.value;
    myGrid.updateGridSize(gameSize);

    // update label
    label.textContent = `Grid Size: ${myGrid.size}`;
});
