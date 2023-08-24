import { Cell } from "./cell.js";
import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";
import { createSampleLines } from "./scenarioCreator.js";
import {
    solve,
    sweep1, sweep2, sweep3, sectionSweep, sweep4, sweep5, sweep6
} from "./solver.js";
import { isUniqueInRow, isUniqueInSection } from "./uniqueCasesSearchers.js";



export const createHTMLBoard = () => {
    let cellId = 0;
    const addObject = (i, e, cellContainer) => {
        const newCell = new Cell(e, i);
        newCell.createCell(cellContainer, cellId);
        cellId++;
    }
    
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
    newButton1.innerHTML = 'generalSweep(1)';
    const newButton2 = document.createElement('button');
    newButton2.innerHTML = 'isUniqueInRow';
    const newButton3 = document.createElement('button');
    newButton3.innerHTML = 'generalSweep';
    const newButton4 = document.createElement('button');
    newButton4.innerHTML = 'isUniqueInColumn';
    const newButton5 = document.createElement('button');
    newButton5.innerHTML = 'isUniqueInSection';
    const newButton6 = document.createElement('button');
    newButton6.innerHTML = 'solve';
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



    newButton2.onclick = () => sweep2();
    newButton3.onclick = () => sweep3();
    newButton4.onclick = () => sweep4();
    newButton5.onclick = () => sweep5();
    newButton6.onclick = () => sweep6();


    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(newButton1);
    buttonContainer.appendChild(newButton2);
    buttonContainer.appendChild(newButton3);
    buttonContainer.appendChild(newButton4);
    buttonContainer.appendChild(newButton5);
    buttonContainer.appendChild(newButton6);


    buttonContainer.appendChild(messagesInput);
}
