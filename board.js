import { Cell } from "./cell.js";
import { fillSeries, fillSeriesInBoard, obtainVacuumsIndex, obtainValuesRemaining } from "./solver.js";

/*
export const bodyFeatures = () => {
    document.body.style('display', 'flex');
    document.body.style('flex-direction', 'column');
}
*/

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

export const messagesWindow = () => {

    // const row2HTML = () => document.getElementsByClassName('row-2')[0].getElementsByTagName('input')[0].value;
    // const col2HTML = document.getElementsByClassName('col-0');

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
    newButton.innerHTML = 'Completar fila 2';
    const messagesInput = document.createElement('div');
    messagesInput.innerText = '';

    newButton.onclick = () => {
        const rowSeries = getRowValues(2);
        const columnSeries = getColumnValues(2);
        messagesInput.innerText = `Serie de vacíos de fila: ${obtainVacuumsIndex(columnSeries)}\n
        Serie de valores faltantes: ${obtainValuesRemaining(columnSeries)}\n
        Serie completa: ${fillSeries(columnSeries)}`;
        fillSeriesInBoard(columnSeries, 2);

    }

    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(newButton);
    buttonContainer.appendChild(messagesInput);
}
