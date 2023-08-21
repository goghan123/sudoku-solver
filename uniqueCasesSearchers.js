//import { getColumnValues } from "./solver";

const isUnique = (series, value) => {
    let occurence = 0;
    series.forEach((v) => (v == value && occurence++));
    return occurence === 1 ? true : false;
}

const inputList = document.getElementsByTagName('input');

const searchThroughColumns = () => {
    //const columnHTML = document.getElementsByClassName(`col-${columnNumber}`);
    const getColumnValues = (colNumber) => {
        let lineValues = [];
        for (let i = 0; i <= 8; i++) {
            const newValue = document.getElementsByClassName(
                `col-${colNumber}`)[i].lastChild.value.split(',');
            lineValues = [...lineValues, ...newValue];
        }
        return lineValues;
    }
    for (let column = 0; column <= 8; column++) {
        let cellId = column;
        for (let a = 0; a <= 8; a++) {
            const thisCellValues = inputList[cellId].value.split(',');
            for (let e = 0; e < thisCellValues.length; e++) {
                const specificValue = thisCellValues[e];
                isUnique(getColumnValues(column), specificValue) && (inputList[cellId].value = specificValue);
            }
            cellId = cellId + 9;
        }
    }
}


const searchThroughRows = () => {
    const getRowValues = (rowNumber) => {
        let lineValues = [];
        for (let i = 0; i <= 8; i++) {
            const newValue = document.getElementsByClassName(`row-${rowNumber}`)[0].
                getElementsByTagName('input')[i].value.split(',');
            lineValues = [...lineValues, ...newValue];
        }
        return lineValues;
    }

    let cellId = 0;
    for (let row = 0; row <= 8; row++) {
        for (let a = 0; a <= 8; a++) {
            const thisCellValues = inputList[cellId].value.split(',');
            for (let e = 0; e < thisCellValues.length; e++) {
                const specificValue = thisCellValues[e];
                isUnique(getRowValues(row), specificValue) && (inputList[cellId].value = specificValue);
            }
            cellId++;
        }
    }
}

export const searchUniqueCases = () => {
    searchThroughRows();
   // searchThroughColumns();
}