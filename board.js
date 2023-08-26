import { Cell } from "./cell.js";
import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";
import { createSampleLines } from "./scenarioCreator.js";
import {
    sweep1, sweep2, sweep3, sectionSweep, sweep4, sweep5, sweep6, sweep7, sweep8
} from "./solver.js";
import { isUniqueInRow, isUniqueInSection } from "./uniqueCasesSearchers.js";



export const createHTMLBoard = () => {
    document.display = 'flex';
    document.justifyContent = 'end';
    document.body.style.backgroundColor = 'black';
    document.body.style.height = '100%';
    document.body.style.width = '100vw';

    let cellId = 0;
    const addObject = (i, e, cellContainer) => {
        const newCell = new Cell(e, i);
        newCell.createCell(cellContainer, cellId);
        cellId++;
    }

    const board = document.createElement('table');
    board.setAttribute('id', 'board');
    board.style.display = 'flex';
    board.style.justifyContent = 'center';
    board.style.height = '80%';
    board.style.width = '100%';
    board.style.alignItems = 'end';


    //board.style.borderCollapse = 'collapse';
    for (let i = 0; i < 9; i++) {
        const newRow = board.insertRow(i);
        newRow.setAttribute('class', `row-${i}`)
        for (let e = 0; e < 9; e++) {
            const newCol = newRow.insertCell(e);
            newCol.setAttribute('class', `col-${e}`);
            //newCol.style.borderWidth = "2px";
            // newCol.style.borderColor = "white";
            // newCol.style.borderStyle = "solid";
            newCol.style.padding = "1px";
            // newCol.style.borderRadius = "5px";
            addObject(i, e, newCol);
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

export const messagesWindow = () => {
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'buttons-container');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.height = '10%';
    //board.style.maxWidth = '100%';
    buttonContainer.style.alignItems = 'center';
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
    newButton6.innerHTML = 'SOLVE';
    newButton6.style.color = 'white';
    newButton6.style.fontSize = '30px';

    newButton6.style.background = '#11282e';
    newButton6.style.height = '60px';
    newButton6.style.width = '120px';
    newButton6.style.border = '0';
    newButton6.style.borderRadius = '20px';
    newButton6.style.marginBottom = '10px';



    const newButton7 = document.createElement('button');
    newButton7.innerHTML = 'catchScenario';
    const newButton8 = document.createElement('button');
    newButton8.innerHTML = 'backInTime';
    const messagesInput = document.createElement('div');
    messagesInput.innerText = 'Hola';
    newButton1.onclick = () => {

        //const rowSeries = getRowValues(2);
        //const columnSeries = getColumnValues(2);
        //fillSeriesInBoard('column', columnSeries, 2);
        //fillSeriesInBoard('row', rowSeries, 2);
        // createSampleLines();
        // solve();
        sweep1();
    }

    // #003746 el claro
    // #002b36 el oscuro

    newButton2.onclick = () => sweep2();
    newButton3.onclick = () => sweep3();
    newButton4.onclick = () => sweep4();
    newButton5.onclick = () => sweep5();
    newButton6.onclick = () => sweep6();
    newButton7.onclick = () => sweep7();
    newButton8.onclick = () => sweep8();
    document.body.appendChild(buttonContainer);

    /*
        buttonContainer.appendChild(newButton1);
        buttonContainer.appendChild(newButton2);
        buttonContainer.appendChild(newButton3);
        buttonContainer.appendChild(newButton4);
        buttonContainer.appendChild(newButton5);
             buttonContainer.appendChild(newButton7);
        
    buttonContainer.appendChild(newButton8);
        */
    buttonContainer.appendChild(newButton6);



    // buttonContainer.appendChild(messagesInput);
}
