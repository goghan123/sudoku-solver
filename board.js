import { Cell } from "./cell.js";
import { columnSweep, createSampleLines, getColumnValues, getRowValues, rowSweep, sectionSweep } from "./solver.js";

const updateStyles = () => {
    const cellStyles = document.getElementsByTagName('input').style;
    const cells = document.getElementsByTagName('input');
    try {
        cellStyles.fontSize = '20px';
    } catch (e) {
        console.log(e)
    }
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
        // newRow.style.borderTop = 'blue';
        for (let e = 0; e < 9; e++) {
            const newCol = newRow.insertCell(e);
            newCol.setAttribute('class', `col-${e}`);
            newCol.style.borderWidth = "1px";
            newCol.style.borderColor = "#000";
            newCol.style.borderStyle = "solid";
            newCol.style.padding = "0";

            // newCol.style.borderTop = 'blue';
            addObject(i, e, newCol);
        }
    }
    document.body.appendChild(board);
}

export const messagesWindow = () => {
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'x-container');
    buttonContainer.style.width = '100vw';
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Tomahawk';
    const messagesInput = document.createElement('div');
    messagesInput.innerText = '';

    newButton.onclick = () => {

        const rowSeries = getRowValues(2);
        const columnSeries = getColumnValues(2);
        //fillSeriesInBoard('column', columnSeries, 2);
        //fillSeriesInBoard('row', rowSeries, 2);
        createSampleLines();

        for (let i = 0; i < 9; i++) columnSweep(i);
        for (let i = 0; i < 9; i++) rowSweep(i);
        sectionSweep();

    }

    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(newButton);
    buttonContainer.appendChild(messagesInput);
}
