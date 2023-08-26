import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";

export const firstColumnSweep = () => {
    const getColumnValues = (colNumber) => {
        let lineValues = [];
        for (let i = 0; i <= 8; i++) {
            const newValue = document.getElementsByClassName(`col-${colNumber}`)[i].lastChild.value;
            lineValues.push(newValue);
        }
        return lineValues;
    }
    const obtainValuesRemaining = (series) => {
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
    for (let columnNumber = 0; columnNumber <= 8; columnNumber++) {
        const columnHTML = document.getElementsByClassName(`col-${columnNumber}`);
        const valuesRemaining = obtainValuesRemaining(getColumnValues(columnNumber));
        for (let i = 0; i <= 8; i++) {
            columnHTML[i].lastChild.value == '' && (
                columnHTML[i].lastChild.value = valuesRemaining
            )
        }
    }
}

export const rowSweep = (a) => {
    const rowHTML = document.getElementsByClassName(`row-${a}`)[0]
        .getElementsByTagName('input');
    let resultsFound = [];
    for (let i = 0; i <= 8; i++) rowHTML[i].value.length === 1 && resultsFound.push(rowHTML[i].value);
    for (let e = 0; e <= 8; e++) {
        let thisCellValue = rowHTML[e].value;
        thisCellValue.length > 1 && (
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