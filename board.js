import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";
import { solve } from "./solver.js";

const createSampleLines = () => {
    const newSeriesSeries = [, , 8, , 5, , , , , , 2, , 1, , 8, , 9, , 4, , , , , , 6, , , , , , , , 7, , , , , 8, , 3, , 9, , 1, , , , 2, , , , , , 8, , , , , 2, , , 5, , , , 6, 5, , 3, 9, , , , 3, , , 7, , , ,];
    const setIt = (what) => {
        const previousScenarioHTML = document.getElementsByTagName('input');
        for (let i = 0; i <= what.length; i++) {
            previousScenarioHTML[i].value = typeof what[i] == 'undefined' ? '' : what[i];
        }
    }
    setIt(newSeriesSeries);
}

export const generalHTML = () => {
    
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'center';
    document.body.style.backgroundColor = 'black';
    document.body.style.height = '100%';
    document.body.style.width = '98%';
    const board = document.createElement('table');
    board.setAttribute('id', 'board');
    board.style.display = 'flex';
    board.style.justifyContent = 'center';
    board.style.alignSelf = 'center';
    board.style.alignItems = 'end';
    // 

    const createCell = (cellContainer, cellId) => {
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('id', `input-${cellId}`);
        newInput.style.width = '8vw';
        newInput.style.maxWidth = '50px';
        newInput.style.minWidth = '30px';

        newInput.style.height = '8vw';
        newInput.style.maxHeight = '50px';
        newInput.style.minHeight = '30px';

        newInput.style.fontSize = '3vw';
        newInput.style.textAlign = 'center';
        newInput.style.fontWeight = 'bold';
        newInput.style.color = 'white';
        newInput.style.borderRadius = "10px";
        newInput.style.background = '#11282e';
        newInput.style.borderWidth = "0";
        cellContainer.appendChild(newInput);
    }

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
    buttonContainer.style.alignItems = 'center';
    buttonContainer.style.width = '100%';

    const mainButton = document.createElement('button');
    mainButton.setAttribute('id', 'main-button');
    mainButton.innerHTML = 'Solve it';
    mainButton.style.color = 'white';
    mainButton.style.fontSize = '3vw';
    mainButton.style.background = '#11282e';
    mainButton.style.height = '60px';
    mainButton.style.paddingRight = '20px';
    mainButton.style.paddingLeft = '20px';
    mainButton.style.border = '0';
    mainButton.style.borderRadius = '1vw';
    mainButton.style.marginBottom = '10px';
    mainButton.onclick = () => solve();

    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(mainButton);
}
