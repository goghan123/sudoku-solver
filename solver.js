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
            columnHTML[i].lastChild.value = valuesRemaining
            // columnHTML[i].lastChild.style.fontSize = '10px'
        )
    }
}

const createInnerTextArea = (inputElement, content) => {
    // console.log(content);
    const miniDiv = document.createElement('div');
    miniDiv.style.fontSize = '20px';
    miniDiv.style.wordBreak = 'break-all';
    miniDiv.value = content;
    //father.append(miniDiv);
    inputElement.parentNode.parentNode.replaceChild(miniDiv, inputElement);
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
    const inputList = document.getElementsByTagName('input');
    const indexObtainer = (startingIndex) => {
        return [startingIndex, startingIndex + 1, startingIndex + 2,
            startingIndex + 9, startingIndex + 10, startingIndex + 11,
            startingIndex + 18, startingIndex + 19, startingIndex + 20];
    }
    const sectionSelector = (indexSeries) => {
        let section = [];
        for (let i = 0; i <= 8; i++) {
            const currentInput = inputList[indexSeries[i]];
            section.push(currentInput);
        }
        return section;
    }
    //const indexSectionZero = indexObtainer(0);
    // const sectionZero = sectionSelector(indexObtainer(0));



    // sectionZero.forEach(val => val.style.background = 'rgb(255, 172, 142)');

    const sweep = (section) => {
        let resultsFound = [];
        for (let i = 0; i <= 8; i++) section[i].value.length === 1 && resultsFound.push(section[i].value);
        for (let e = 0; e <= 8; e++) {
            let thisCellValue = section[e].value;
            thisCellValue.length > 1 && (
                section[e].style.fontSize = '20px',
                section[e].value = thisCellValue.split(',').filter(val => !resultsFound.includes(val)),
                section[e].style.backgroundColor = 'rgb(255, 172, 142)'
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
    // sectionZero.forEach(val => console.log(val.value));

}

export const createSampleLines = () => {
    const series1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const series2 = [1, 2, 4, 3, 5, 6, 7, 8, 9];
    setColumnValues(series1, 2);
    setRowValues(series2, 3);
}