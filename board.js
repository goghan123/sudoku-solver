import { Cell } from "./cell.js";

export const bodyFeatures = () => {
    document.body.style('display', 'flex');
    document.body.style('flex-direction', 'column');
}

let cellId = 1;
const addObject = (i, e, cellContainer) => {
    const newCell = new Cell;
    newCell.column = e;
    newCell.row = i;
    newCell.createCell(cellContainer, cellId);
    cellId++;
}

export const createHTMLBoard = () => {

    const divContainer = document.createElement('div');
    document.body.append(divContainer);

    const board = document.createElement('table');
    board.setAttribute('id', 'board');
    const boardContainer = document.createElement('div');
    boardContainer.style.width = '1px';
    boardContainer.style.height = '1px';

    for (let i = 0; i < 9; i++) {
        const newRow = board.insertRow(i);
        newRow.setAttribute('id', `row-${i + 1}`)
        for (let e = 0; e < 9; e++) {
            const newCol = newRow.insertCell(e);
            newCol.setAttribute('id', `col-${e + 1}`);
            newCol.style.borderWidth = "1px";
            newCol.style.borderColor = "#000";
            newCol.style.borderStyle = "solid";
            addObject(i, e, newCol);
        }
    }
    board.style.borderCollapse = 'collapse';
    divContainer.appendChild(board);
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
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
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'x-container');
    buttonContainer.style.width = '100vw';
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Algo Fígaro';
    const messagesInput = document.createElement('div');
    messagesInput.innerText = 'Hola';
    newButton.onclick = () => {
        messagesInput.innerText = document.getElementById('input-2').value;
    }
    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(newButton);
    buttonContainer.appendChild(messagesInput);
}
