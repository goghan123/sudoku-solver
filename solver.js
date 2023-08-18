
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const series = [8, 0, 0, 2, 0, 9, 0, 0, 0];

const obtainVacuumsIndex = (series) => {
    let indexList = [];
    for (let i = 0; i <= 8; i++) {
        series.includes('', i) &&
            indexList.push(series.indexOf('', i))
    }
    const cleanIndexList = [... new Set(indexList)];
    return cleanIndexList;
}

// Devuelve los valores faltantes a una serie particular
const obtainValuesRemaining = () => {
    let resultCopy = result;
    let e = 0;
    for (let i = 1; i <= 9; i++) {
        series.includes(i) && (
            resultCopy.splice(i - e - 1, 1),
            e++
        )
    }
    return resultCopy;
}

// Esta une a ambas funciones anteriores y las 
const fillSeries = () => {
    let newSeries = series;
    const vacuumsIndex = obtainVacuumsIndex();
    const valuesRemaining = obtainValuesRemaining();
    for (let i = 0; i <= vacuumsIndex.length - 1; i++) {
        newSeries.splice(vacuumsIndex[i], 1, valuesRemaining[i]);
    }
    return newSeries;
}
