import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";
import { createSampleLines } from "./scenarioCreator.js";
import { solve } from "./solver.js";

const createCell = (cellContainer, cellId) => {
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('id', `input-${cellId}`);
    newInput.min = '1';
    newInput.max = '9';
    newInput.style.width = '50px';
    newInput.style.height = '50px';
    newInput.style.textAlign = 'center';
    newInput.style.fontSize = '30px';
    newInput.style.fontWeight = 'bold';
    newInput.style.color = 'white';
    newInput.style.borderRadius = "10px";
    newInput.style.background = '#11282e';
    newInput.style.borderWidth = "0";
    cellContainer.appendChild(newInput);
}

export const createHTMLBoard = () => {
    document.display = 'flex';
    document.justifyContent = 'end';
    document.body.style.backgroundColor = 'black';
    document.body.style.height = '100%';
    document.body.style.width = '100vw';
    const board = document.createElement('table');
    board.setAttribute('id', 'board');
    board.style.display = 'flex';
    board.style.justifyContent = 'center';
    board.style.height = '80%';
    board.style.width = '100%';
    board.style.alignItems = 'end';

    let cellId = 0;
    for (let i = 0; i < 9; i++) {
        const newRow = board.insertRow(i);
        newRow.setAttribute('class', `row-${i}`)
        for (let e = 0; e < 9; e++) {
            const newCol = newRow.insertCell(e);
            newCol.setAttribute('class', `col-${e}`);
            newCol.style.padding = "1px";
            createCell(newCol, cellId);
            cellId++;
        }
    }

    document.body.appendChild(board);

    const paintIt = (areaToPaint) => {
        areaToPaint.forEach(el => el.style.backgroundColor = '#003746');
    }
    const colourfulSectionStartingIndex = [0, 6, 30, 54, 60];
    for (let i = 0; i < colourfulSectionStartingIndex.length; i++) {
        paintIt(sectionSelector(sectionIndexObtainer(colourfulSectionStartingIndex[i])));
    }
    //


    createSampleLines();


    //
}

export const buttons = () => {
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'buttons-container');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.height = '10%';
    buttonContainer.style.alignItems = 'center';
    buttonContainer.style.width = '100vw';

    const mainButton = document.createElement('button');
    mainButton.innerHTML = 'SOLVE';
    mainButton.style.color = 'white';
    mainButton.style.fontSize = '30px';
    mainButton.style.background = '#11282e';
    mainButton.style.height = '60px';
    mainButton.style.width = '120px';
    mainButton.style.border = '0';
    mainButton.style.borderRadius = '20px';
    mainButton.style.marginBottom = '10px';

    mainButton.onclick = () => solve();
    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(mainButton);
}
