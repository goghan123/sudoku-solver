import { Cell } from "./cell.js";
// import { obtainVacuumsIndex } from "./solver.js";

export const bodyFeatures = () => {
    document.body.style('display', 'flex');
    document.body.style('flex-direction', 'column');
}

let cellId = 0;
const addObject = (i, e, cellContainer) => {
    const newCell = new Cell(e, i);
    newCell.createCell(cellContainer, cellId);
    cellId++;
}

export const createHTMLBoard = () => {

    const divContainer = document.createElement('div');
    document.body.append(divContainer);

    const board = document.createElement('table');
    board.setAttribute('id', 'board');
    board.style.borderCollapse = 'collapse';

    for (let i = 0; i < 9; i++) {
        const newRow = board.insertRow(i);
        newRow.setAttribute('class', `row-${i}`)
        for (let e = 0; e < 9; e++) {
            const newCol = newRow.insertCell(e);
            newCol.setAttribute('class', `col-${e}`);
            newCol.style.borderWidth = "1px";
            newCol.style.borderColor = "#000";
            newCol.style.borderStyle = "solid";
            addObject(i, e, newCol);
        }
    }
    document.body.appendChild(board);
}

const rowGenerator = () => {
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newSeries = [];
    for (let i = 0; i < 9; i++) {
        newSeries.push(
            result.splice(Math.floor(Math.random() * result.length), 1)
        );
    }
    return newSeries;
}
/*
export const inputGenerator = () => {
    const cells = document.querySelectorAll('*[id^="cell-"]');
    const getColumn = (value) => {
        return
        value <= 9 ? 
    }
    for (let i = 1; i <= 81; i++) {
        const newCol = new Cell;
        newCell.column = getColumn(i);
        newCell.createCell(cells, i);
    }
}
*/

export const vacuumsGenerator = () => {
    const cells = document.querySelectorAll('*[id^="cell-"]');
    for (let i = 0; i < 65; i++) {
        const randomCell = cells[Math.floor(Math.random() * cells.length)];
        randomCell.innerHTML = '';
    }
}

export const createBoardSolution = () => {
    const cells = document.querySelectorAll('*[id^="cell-"]');
    let a = 0;
    for (let e = 0; e < 9; e++) {
        const rowContent = rowGenerator();
        for (let i = 0; i < 9; i++) {
            cells[a].innerHTML = rowContent[i];
            a++;
        }
    }
}

export const messagesWindow = () => {

    const row2HTML = () => document.getElementsByClassName('row-2')[0].getElementsByTagName('input')[0].value;
    const col2HTML = document.getElementsByClassName('col-0');

    const getRowValues = (rowNumber) => {
        let lineValues = [];
        for (let i = 0; i <= 8; i++) {
            const newValue = document.getElementsByClassName(`row-${rowNumber}`)[0].getElementsByTagName('input')[i].value;
            lineValues.push(newValue);
        }
        return lineValues;
    }

    const getColumnValues = (colNumber) => {
        let lineValues = [];
        for (let i = 0; i <= 8; i++) {
            const newValue = document.getElementsByClassName(`col-${colNumber}`)[i].lastChild.value;
            lineValues.push(newValue);
        }
        return lineValues;
    }
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'x-container');
    buttonContainer.style.width = '100vw';
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Algo Fígaro';
    const messagesInput = document.createElement('div');
    messagesInput.innerText = '';

    newButton.onclick = () => {
        // Esto funciona: 
        // messagesInput.innerText = getLineValues(col2HTML);
        // Esto también funciona: 
        // messagesInput.innerText = document.getElementsByClassName('col-0')[0].lastChild.value;
        messagesInput.innerText = `Filas: ${getRowValues(2)}. Columnas: ${getColumnValues(2)}`;

    }

    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(newButton);
    buttonContainer.appendChild(messagesInput);
}
