//create class game for all game logic
class Grid {
    // constructor for game
    constructor(size) {
        this.size = size;
        this.container = document.querySelector('.game-container');
        this.gridWidth = this.container.clientWidth;
        this.gridHeight = this.container.clientHeight;
        this.cellColor = 'black';
    }

    // construct grid based on size into div.game-grid
    createGrid() {
        const gameGrid = document.querySelector('.game-grid');
        const gridWidth = gameGrid.clientWidth;
        const gridHeight = gameGrid.clientHeight;

        // construct rows based on size given and add them to gameGrid
        for (let i = 0; i < this.size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.style.height = `${gridHeight / this.size}px`;
            row.style.boxSizing = 'border-box';

            // construct cells based on size given and add them to row
            for (let j = 0; j < this.size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.width = `${gridWidth / this.size}px`;
                cell.style.height = `${gridHeight / this.size}px`;
                row.appendChild(cell);
            }
            gameGrid.appendChild(row);
        }
        this.hoverCell();
    }

    // clear grid
    clearGrid() {
        const gameGrid = document.querySelector('.game-grid');
        while (gameGrid.firstChild) {
            gameGrid.removeChild(gameGrid.firstChild);
        }
    }

    // update grid
    updateGridSize(size) {
        this.size = size;
        this.clearGrid();
        this.createGrid();
    }

    //callable function to change color on hover
    hoverCell() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = this.cellColor;
            });
        });
    }

    setCellColor(color) {
        console.log(color);
        this.cellColor = color;
    }

    getCellColor() {
        return this.cellColor;
    }
}

export { Grid };
