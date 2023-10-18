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



//show colorpicker if #brush2 is selected
const brush2 = document.querySelector('#brush2');
const colorPicker = document.querySelector('.color-picker');
brush2.addEventListener('click', () => {
    colorPicker.style.display = 'block';
});

//update color on colorpicker change
const colorPickerInput = document.querySelector('#colorPicker');
colorPickerInput.addEventListener('change', () => {
    myGrid.setCellColor(colorPickerInput.value);
});

//if brush 1 is selected, change color to black
const brush1 = document.querySelector('#brush1');
brush1.addEventListener('click', () => {
    myGrid.setCellColor('black');
    colorPicker.style.display = 'none';
});

//if brush 3 is selected, change color to white
const brush3 = document.querySelector('#brush3');
brush3.addEventListener('click', () => {
    myGrid.setCellColor('white');
    colorPicker.style.display = 'none';
});
