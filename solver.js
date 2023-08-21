import { indexObtainer, sectionSelector } from "./otherDomTools.js";
import { searchUniqueCases } from "./uniqueCasesSearchers.js";

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

export const columnSweep = (columnNumber) => {
    const columnHTML = document.getElementsByClassName(`col-${columnNumber}`);
    const valuesRemaining = obtainValuesRemaining(getColumnValues(columnNumber));
    for (let i = 0; i <= 8; i++) {
        columnHTML[i].lastChild.value == '' && (
            columnHTML[i].lastChild.value = valuesRemaining
        )
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
            rowHTML[e].style.fontSize = '20px',
            rowHTML[e].value = thisCellValue.split(',').filter(val => !resultsFound.includes(val))
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
                section[e].style.fontSize = '20px',
                section[e].value = thisCellValue.split(',').filter(val => !resultsFound.includes(val))
            )
        }
    }
    const sweepPerSection = () => {
        const sectionStartingIndex = [0, 3, 6, 27, 30, 33, 54, 57, 60];
        for (let i = 0; i < sectionStartingIndex.length; i++) {
            sweep(sectionSelector(indexObtainer(sectionStartingIndex[i])));
        }
    }
    sweepPerSection();
}





export const sweep1 = () => {
    for (let i = 0; i < 9; i++) columnSweep(i);

}
export const sweep2 = () => {
    for (let i = 0; i < 9; i++) rowSweep(i);

}
export const sweep3 = () => {
    sectionSweep();

}

export const cleanse = () => {
    const inputList = document.getElementsByTagName('input');
    //inputList.forEach(el => console.log(el));
    for (let i = 0; i < inputList.length; i++) {
        inputList[i].value.length > 1 && (inputList[i].value = '');
    }
}

const generalSweep = () => {
    for (let i = 0; i < 9; i++) columnSweep(i);
    for (let i = 0; i < 9; i++) rowSweep(i);
    sectionSweep();
}
export const solve = () => {
    generalSweep();
    searchUniqueCases();
    generalSweep();
    searchUniqueCases();
}