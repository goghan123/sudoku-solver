export const obtainVacuumsIndex = (series) => {
    let indexList = [];
    for (let i = 0; i <= 8; i++) {
        series.includes('', i) &&
            indexList.push(series.indexOf('', i))
    }
    const cleanIndexList = [... new Set(indexList)];
    return cleanIndexList;
}

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

const setColumnValues = (newValues, colNumber) => {
    for (let i = 0; i <= 8; i++) {
        document.getElementsByClassName(`col-${colNumber}`)[i].lastChild.value = newValues[i];
    }
}

const setRowValues = (newValues, rowNumber) => {
    for (let i = 0; i <= 8; i++) {
        document.getElementsByClassName(`row-${rowNumber}`)[0]
            .getElementsByTagName('input')[i].value = newValues[i];
    }
}


export const fillSeriesInBoard = (type, series, seriesIndex) => {
    const vacuumsIndex = obtainVacuumsIndex(series);
    const valuesRemaining = obtainValuesRemaining(series);
    for (let i = 0; i <= vacuumsIndex.length - 1; i++) {
        series.splice(vacuumsIndex[i], 1, valuesRemaining[i]);
    }
    type == 'column' ?
        setColumnValues(series, seriesIndex)
        :
        setRowValues(series, seriesIndex);

}

export const getColumnValues = (colNumber) => {
    let lineValues = [];
    for (let i = 0; i <= 8; i++) {
        const newValue = document.getElementsByClassName(`col-${colNumber}`)[i].lastChild.value;
        lineValues.push(newValue);
    }
    return lineValues;
}

export const getRowValues = (rowNumber) => {
    let lineValues = [];
    for (let i = 0; i <= 8; i++) {
        const newValue = document.getElementsByClassName(`row-${rowNumber}`)[0].getElementsByTagName('input')[i].value;
        lineValues.push(newValue);
    }
    return lineValues;
}

export const columnSweep = (columnNumber) => {
    const columnHTML = document.getElementsByClassName(`col-${columnNumber}`);
    const valuesRemaining = obtainValuesRemaining(getColumnValues(columnNumber));
    for (let i = 0; i <= 8; i++) {
        columnHTML[i].lastChild.value == '' && (
            columnHTML[i].lastChild.value = valuesRemaining,
            columnHTML[i].lastChild.style.fontSize = '10px'
        )
    }
}

export const rowSweep = () => {


    for (let e = 0; e <= 8; e++) {
        const rowHTML = document.getElementsByClassName(`row-${e}`)[0]
            .getElementsByTagName('input');
        let resultsFound = [];
        // Revisa resultados certeros en su propia fila:

        for (let i = 0; i <= 8; i++) {
            rowHTML[i].value.length === 1 && resultsFound.push(rowHTML[i].value);
        }
        // .splice(indice,aCuantosReemplazo,queAgrego)
        for (let o = 0; o <= 8; o++) {
            // console.log(rowHTML[0].id);
            let thisCellValue = rowHTML[o].value;
            thisCellValue.length > 1 && (
                rowHTML[o].value = thisCellValue.split(',').filter(val => !resultsFound.includes(val)),
                rowHTML[o].style.background = 'rgb(255, 172, 142)'
            )
        }
        // const hiThere = thisCellValue.split(',').splice(0,0,0);

    }
    /*
    let difference = [];
    let array1 = [1, 2, 3];
    let array2 = [1, 2, 3, 4];
    for (let i = 1; i <= 4; i++) {
        difference.push(array2.filter(el => el !== array1[i]));
    }
*/




    /*
    for (let i = 1; i <= resultsFound.length; i++) {
                difference.push([thisCellValue].filter(el => el == resultsFound[i]));
    }
    */
}