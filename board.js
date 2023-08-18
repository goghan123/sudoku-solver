import { Cell } from "./cell.js";
import { columnSweep, fillSeriesInBoard, getColumnValues, getRowValues, obtainVacuumsIndex, obtainValuesRemaining, rowSweep} from "./solver.js";

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
   

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'x-container');
    buttonContainer.style.width = '100vw';
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Completar columna 3 y fila 3';
    const messagesInput = document.createElement('div');
    messagesInput.innerText = '';

    newButton.onclick = () => {
        const rowSeries = getRowValues(2);
        const columnSeries = getColumnValues(2);
        /*
        messagesInput.innerText = `Serie de vacíos de fila: ${obtainVacuumsIndex(columnSeries)}\n
        Serie de valores faltantes: ${obtainValuesRemaining(columnSeries)}\n
        Serie completa: ${fillSeries(columnSeries)}`;
        */
        fillSeriesInBoard('column', columnSeries, 2);
        fillSeriesInBoard('row', rowSeries, 2);
        messagesInput.innerText = '';

        /*
                const algunElemento1 = document.getElementsByClassName(`col-${5}`)[0].lastChild;
                const algunElemento2 = document.getElementsByClassName(`col-${5}`)[3].lastChild;
                const algunElemento3 = document.getElementsByClassName(`col-${7}`)[7].lastChild;
        
                algunElemento1.setAttribute('class', 'suggest');
                algunElemento2.setAttribute('class', 'suggest');
                algunElemento3.setAttribute('class', 'suggest');
        
                const inputDePrueba = document.getElementsByClassName('suggest')[0];
        */

        // messagesInput.innerText = suggestResults(getColumnValues(5));

        for (let i = 0; i < 9; i++) columnSweep(i);
        //for (let i = 0; i < 9; i++) 
        rowSweep();

    }

    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(newButton);
    buttonContainer.appendChild(messagesInput);
}
