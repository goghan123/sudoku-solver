export const obtainVacuumsIndex = (series) => {
    let indexList = [];
    for (let i = 0; i <= 8; i++) {
        series.includes('', i) &&
            indexList.push(series.indexOf('', i))
    }
    const cleanIndexList = [... new Set(indexList)];
    return cleanIndexList;
}

// Devuelve los valores faltantes a una serie particular
export const obtainValuesRemaining = (series) => {
    // let newSeries = [1, 2, 3, '', '', '', 0, 0, 0];
    // let series = [1, 2, 3, '', '', '', '', '', ''];


    // let thisSeries = sampleSeries;
    // const vacuumsToZeroes = thisSeries.map((el) => el == '' ? 0 : el);
    const toNumbers = series.map(el => parseInt(el));


    //console.log(vacuumsToZeroes);
    // console.log(series);
    // console.log(newSeries2);
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

// Esta une a ambas funciones anteriores y las 
export const fillSeries = (series) => {
    let newSeries = series;
    const vacuumsIndex = obtainVacuumsIndex(series);
    const valuesRemaining = obtainValuesRemaining(series);
    for (let i = 0; i <= vacuumsIndex.length - 1; i++) {
        newSeries.splice(vacuumsIndex[i], 1, valuesRemaining[i]);
    }
    return newSeries;
}

const setColumnValues = (newValues, colNumber) => {
    for (let i = 0; i <= 8; i++) {
        document.getElementsByClassName(`col-${colNumber}`)[i].lastChild.value = newValues[i];
    }
}

export const fillSeriesInBoard = (series, colNumber) => {
    const vacuumsIndex = obtainVacuumsIndex(series);
    const valuesRemaining = obtainValuesRemaining(series);
    for (let i = 0; i <= vacuumsIndex.length - 1; i++) {
        series.splice(vacuumsIndex[i], 1, valuesRemaining[i]);
    }
    setColumnValues(series, colNumber);
}
