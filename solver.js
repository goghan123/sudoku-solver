import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";
import { isUniqueInColumn, isUniqueInRow, isUniqueInSection } from "./uniqueCasesSearchers.js";

export const obtainValuesRemaining = (series) => {
    const toNumbers = series.map(el => parseInt(el));
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let e = 0;
    for (let i = 1; i <= 9; i++) {
        toNumbers.includes(i) && (
            result.splice(i - e - 1, 1),
            e++
        )
    }
    return result;
}

export const getColumnValues = (colNumber) => {
    let lineValues = [];
    for (let i = 0; i <= 8; i++) {
        const newValue = document.getElementsByClassName(`col-${colNumber}`)[i].lastChild.value;
        lineValues.push(newValue);
    }
    return lineValues;
}

export const firstColumnSweep = () => {
    for (let columnNumber = 0; columnNumber <= 8; columnNumber++) {
        // Detecta el HTML de la columna
        const columnHTML = document.getElementsByClassName(`col-${columnNumber}`);
        // Se fija qué valores le faltan a la fila
        const valuesRemaining = obtainValuesRemaining(getColumnValues(columnNumber));
        for (let i = 0; i <= 8; i++) {
            // A cada input que no tenga resultado final
            columnHTML[i].lastChild.value == '' && (
                // Ponele todos los valores que le faltan a la columna
                columnHTML[i].lastChild.style.fontSize = '20px',
                columnHTML[i].lastChild.value = valuesRemaining
            )
        }
    }
}

export const rowSweep = (a) => {
    //Detecta los inputs de todas las filas
    const rowHTML = document.getElementsByClassName(`row-${a}`)[0]
        .getElementsByTagName('input');
    let resultsFound = [];
    // Detecta los resultados finales de la fila y los almacena en una lista
    for (let i = 0; i <= 8; i++) rowHTML[i].value.length === 1 && resultsFound.push(rowHTML[i].value);
    for (let e = 0; e <= 8; e++) {
        // Refiere a todos los valores de las filas, sean finales o no
        let thisCellValue = rowHTML[e].value;
        // Referirse solo a las celdas con sugerencias
        thisCellValue.length > 1 && (
            //rowHTML[e].fontSize = '20px',
            // Borrar de las sugerencias los resultados finales de la fila
            rowHTML[e].value = thisCellValue.split(',').filter(val => !resultsFound.includes(val))
        )
    }
}

export const columnSweep = (columnNumber) => {
    const columnHTML = document.getElementsByClassName(`col-${columnNumber}`);
    let resultsFound = [];
    for (let i = 0; i <= 8; i++) columnHTML[i].lastChild.value.length === 1 &&
        resultsFound.push(columnHTML[i].lastChild.value);
    for (let e = 0; e <= 8; e++) {
        let thisCellValue = columnHTML[e].lastChild.value;
        columnHTML[e].lastChild.value.length > 1 && (
            // Ponele todos los valores que le faltan a la columna
            columnHTML[e].lastChild.value = thisCellValue.split(',').filter(val => !resultsFound.includes(val))
        )
    }
}

export const sectionSweep = () => {
    const sweep = (section) => {
        let resultsFound = [];
        for (let i = 0; i <= 8; i++) section[i].value.length === 1 && resultsFound.push(section[i].value);
        for (let e = 0; e <= 8; e++) {
            let thisCellValue = section[e].value;
            thisCellValue.length > 1 && (
                //section[e].style.fontSize = '20px',
                section[e].value = thisCellValue.split(',').filter(val => !resultsFound.includes(val))
            )
        }
    }
    const sweepEachSection = () => {
        const sectionStartingIndex = [0, 3, 6, 27, 30, 33, 54, 57, 60];
        for (let i = 0; i < sectionStartingIndex.length; i++) {
            sweep(sectionSelector(sectionIndexObtainer(sectionStartingIndex[i])));
        }
    }
    sweepEachSection();
}

export const sweep1 = () => {
    console.log('firstColumnSweep(i), rowSweep(i)');
    for (let i = 0; i < 9; i++) firstColumnSweep(i);
    for (let i = 0; i < 9; i++) rowSweep(i);
}
export const sweep2 = () => {
    console.log('sectionSweep()');
    sectionSweep();
}

export const sweep3 = () => {
    console.log('columnSweep(i)');
    for (let i = 0; i < 9; i++) columnSweep(i);
}

export const cleanse = () => {
    const inputList = document.getElementsByTagName('input');
    //inputList.forEach(el => console.log(el));
    for (let i = 0; i < inputList.length; i++) {
        inputList[i].value.length > 1 && (inputList[i].value = '');
    }
}

const generalSweep = (isFirstCall) => {
    isFirstCall && firstColumnSweep();
    for (let i = 0; i < 9; i++) rowSweep(i);
    sectionSweep();
    for (let i = 0; i < 9; i++) columnSweep(i);
}

export const solve = () => {
    generalSweep('isFirstCall');
    isUniqueInRow();
    generalSweep();
    isUniqueInColumn();
    generalSweep();
    isUniqueInSection();
    generalSweep();
    generalSweep();
    generalSweep();


    //isUniqueInRow();
    //generalSweep();


    //isUniqueInColumn();
    //for (let i = 0; i < 9; i++) rowSweep(i);


}