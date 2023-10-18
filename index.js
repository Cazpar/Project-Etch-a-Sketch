import { Grid } from './grid.js';

const gameSize = 16;
const myGrid = new Grid(gameSize);
myGrid.createGrid();

const clearButton = document.querySelector('.reset-button');
clearButton.addEventListener('click', () => {
    myGrid.updateGridSize(gameSize);
});
