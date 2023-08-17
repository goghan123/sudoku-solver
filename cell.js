export class Cell {
    constructor(column, row) {
        this.column = column;
        this.row = row;
        this.solved = false;
    }

    createCell(cellContainer, cellId) {
        const newInput = document.createElement('input');

        const gatherContext = () => {
            wholeRow = document.getElementById('board');
            return wholeRow;
        }

        newInput.setAttribute('type', 'text');
        newInput.setAttribute('id', `input-${cellId}`);
        newInput.min = '1';
        newInput.max = '9';
        newInput.style.width = '70px';
        newInput.style.height = '70px';
        newInput.style.textAlign = 'center';
        newInput.style.fontSize = '40px';
        newInput.value = '';

        newInput.onclick = () => {
            console.log(`Id: ${newInput.id}`);
            console.log(`Id: ${newInput.id}`);
            console.log(`Row: ${this.row}`);
            console.log(`Smthg: ${document.getElementById('board').rows[this.row].id}`);
        }

        cellContainer.appendChild(newInput);
    }
}