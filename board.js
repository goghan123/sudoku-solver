import { Cell } from "./cell.js";
import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";
import {
    cleanse,
    solve,
    sweep1, sweep2, sweep3, sectionSweep
} from "./solver.js";
import { isUniqueInRow, isUniqueInSection } from "./uniqueCasesSearchers.js";

const setRowValues = (newValues, rowNumber) => {
    for (let i = 0; i <= 8; i++) {
        document.getElementsByClassName(`row-${rowNumber}`)[0]
            .getElementsByTagName('input')[i].value = newValues[i];
    }
}
const createSampleLines = () => {
    /*
    const series1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const series2 = [1, 2, 4, 3, 5, 6, 7, 8, 9];
    setColumnValues(series1, 2);
    setRowValues(series2, 3);
    */
    const series1 = ['', '', '', '', 6, 2, 9, '', ''];
    const series2 = [7, 2, '', 9, 1, '', '', '', ''];
    const series3 = ['', '', 6, '', '', '', '', '', 8];
    const series4 = ['', '', '', 1, '', '', 2, '', ''];
    const series5 = [4, '', 2, '', '', '', 7, '', 3];
    const series6 = [8, 6, '', '', '', 3, '', '', 9];
    const series7 = [2, '', 9, 8, 3, 1, 5, 6, ''];
    const series8 = [5, 8, 7, '', 2, 4, 3, 9, ''];
    const series9 = ['', '', '', 7, '', '', 8, 4, ''];
    setRowValues(series1, 0);
    setRowValues(series2, 1);
    setRowValues(series3, 2);
    setRowValues(series4, 3);
    setRowValues(series5, 4);
    setRowValues(series6, 5);
    setRowValues(series7, 6);
    setRowValues(series8, 7);
    setRowValues(series9, 8);
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
            newCol.style.padding = "0";
            addObject(i, e, newCol);
        }
    }

    document.body.appendChild(board);

    const paintIt = (areaToPaint) => {
        areaToPaint.forEach(el => el.style.backgroundColor = 'rgb(255, 172, 142)');
    }
    const colourfulSectionStartingIndex = [0, 6, 30, 54, 60];
    for (let i = 0; i < colourfulSectionStartingIndex.length; i++) {
        paintIt(sectionSelector(sectionIndexObtainer(colourfulSectionStartingIndex[i])));
    }
    //


    createSampleLines();


    //
}

export const messagesWindow = () => {
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'x-container');
    buttonContainer.style.width = '100vw';
    const newButton1 = document.createElement('button');
    newButton1.innerHTML = 'Tomahawk';
    const newButton2 = document.createElement('button');
    newButton2.innerHTML = 'Airbus A380';
    const newButton3 = document.createElement('button');
    newButton3.innerHTML = 'Boeing 747';
    const newButton4 = document.createElement('button');
    newButton4.innerHTML = 'Antonov Mriya 225';
    const newButton5 = document.createElement('button');
    newButton5.innerHTML = 'General';
    const messagesInput = document.createElement('div');
    messagesInput.innerText = '';
    newButton1.onclick = () => {

        //const rowSeries = getRowValues(2);
        //const columnSeries = getColumnValues(2);
        //fillSeriesInBoard('column', columnSeries, 2);
        //fillSeriesInBoard('row', rowSeries, 2);
        // createSampleLines();
        // solve();
        sweep1();
    }

const checker = () => {
    document.getElementsByTagName('input').incl
}

    newButton2.onclick = () => sweep2();
    newButton3.onclick = () => solve();
    newButton4.onclick = () => sectionSweep();
    newButton5.onclick = () => isUniqueInSection();

    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(newButton1);
    buttonContainer.appendChild(newButton2);
    buttonContainer.appendChild(newButton3);
    buttonContainer.appendChild(newButton4);
    buttonContainer.appendChild(newButton5);

    buttonContainer.appendChild(messagesInput);
}
