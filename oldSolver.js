
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const series = [8, 0, 0, 2, 0, 9, 0, 0, 0];

// Esta función devuelve el índice de los ceros que haya en la lista entregada
const obtainZerosIndex = () => {
    let indexList = [];
    for (let i = 0; i <= 8; i++) {
        series.includes(0, i) &&
            indexList.push(series.indexOf(0, i))
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
    const zeroesIndex = obtainZerosIndex();
    const valuesRemaining = obtainValuesRemaining();
    for (let i = 0; i <= zeroesIndex.length - 1; i++) {
        // .splice(indice,aCuantosReemplazo,queAgrego)
        newSeries.splice(zeroesIndex[i], 1, valuesRemaining[i]);
    }
    return newSeries;
}

/*
const smallScreen = document.createElement('div');
const content = document.createTextNode(fillSeries());
smallScreen.appendChild(content);
document.body.append(smallScreen);
*/