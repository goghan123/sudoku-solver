import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";

const isUnique = (series, value) => {
    let occurence = 0;
    series.forEach((v) => (v == value && occurence++));
    return occurence === 1 ? true : false;
}

const inputList = document.getElementsByTagName('input');

export const isUniqueInColumn = () => {
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
                (typeof inputList[cellId].value.split(',')[e] != 'undefined') && (
                    isUnique(getColumnValues(column), specificValue) && (inputList[cellId].value = specificValue)
                )
            }
            cellId = cellId + 9;
        }
    }
}

export const isUniqueInRow = () => {
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
                (typeof inputList[cellId].value.split(',')[e] != 'undefined') && (
                    isUnique(getRowValues(row), thisCellValues[e]) && (inputList[cellId].value = thisCellValues[e])
                )
            }
            cellId++;
        }
    }
}

export const isUniqueInSection = () => {
    const sectionStartingIndex = [0, 3, 6, 27, 30, 33, 54, 57, 60];
    for (let section = 0; section <= 8; section++) {
        const thisSectionHTML = sectionSelector(sectionIndexObtainer(sectionStartingIndex[section]));
        const getSectionValues = () => {
            let sectionValues = [];
            for (let i = 0; i <= 8; i++) {
                const cellValues = thisSectionHTML[i].value.split(',');
                sectionValues = [...sectionValues, ...cellValues];
            }
            return sectionValues;
        }
        for (let cell = 0; cell <= 8; cell++) {
            const thisCellValues = thisSectionHTML[cell].value.split(',');
            for (let e = 0; e < thisCellValues.length; e++) {
                const specificValue = thisCellValues[e];
                (typeof thisSectionHTML[cell].value.split(',')[e] != 'undefined') && (
                    isUnique(getSectionValues(), specificValue) && (thisSectionHTML[cell].value = specificValue)
                )
            }
        }
    }
}
