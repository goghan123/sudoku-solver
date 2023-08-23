//import { getColumnValues } from "./solver";

import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";

const isUnique = (series, value) => {
    let occurence = 0;
    series.forEach((v) => (v == value && occurence++));
    return occurence === 1 ? true : false;
}

const inputList = document.getElementsByTagName('input');

export const isUniqueInColumn = () => {
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
    // Columna por columna
    for (let column = 0; column <= 8; column++) {
        let cellId = column;
        // Navegá por todas las celdas
        for (let a = 0; a <= 8; a++) {
            // Pasar los valores de string a array
            const thisCellValues = inputList[cellId].value.split(',');
            // Ir valor por valor
            //inputList[cellId].fontStize = inputList[cellId].id;

            //inputList[cellId].value = inputList[cellId].id;


            for (let e = 0; e < thisCellValues.length; e++) {
                const specificValue = thisCellValues[e];
                // Si es valor único en toda la columna, 
                isUnique(getColumnValues(column), specificValue) && (inputList[cellId].value = specificValue);
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
                const specificValue = thisCellValues[e];
                isUnique(getRowValues(row), specificValue) && (inputList[cellId].value = specificValue);
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
                // console.log(specificValue);
                //console.log(isUnique(getSectionValues(), specificValue));
                // console.log(thisSectionHTML[cell].value);
                // console.log(isUnique(getSectionValues(), specificValue));
                isUnique(getSectionValues(), specificValue) && (thisSectionHTML[cell].value = specificValue);

                /*
                isUnique(getSectionValues(), specificValue) == true ?
                    thisSectionHTML[cell].value = specificValue :
                    console.log('Era falso papá.')
                    */
                // .style.backgroundColor = ;
                // thisSectionHTML.forEach(el => el.style.backgroundColor = 'blue');
            }
        }
    }
}
