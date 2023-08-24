export const scenarioReader = () => {
    const previousScenarioHTML = document.getElementsByTagName('input');
    let scenarioValues = [];
    for (let i = 0; i < previousScenarioHTML.length; i++) {
        scenarioValues.push(previousScenarioHTML[i].value);
    }
    return scenarioValues;
}

export const isGameDone = () => {
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let rowsResults = [];
    let columnsResults = [];
    const checkRows = () => {
        for (let a = 0; a <= 8; a++) {
            const rowHTML = document.getElementsByClassName(`row-${a}`)[0]
                .getElementsByTagName('input');
            let resultsFound = [];
            for (let i = 0; i <= 8; i++) resultsFound.push(Number(rowHTML[i].value));
            resultsFound.sort(function (a, b) { return a - b });
            JSON.stringify(resultsFound) === JSON.stringify(result) ?
                rowsResults.push(true) :
                rowsResults.push(false);
        }
    }
    const checkColumns = () => {
        for (let a = 0; a <= 8; a++) {
            const columnHTML = document.getElementsByClassName(`col-${a}`);
            let resultsFound = [];
            for (let i = 0; i <= 8; i++) resultsFound.push(Number(columnHTML[i].lastChild.value));
            resultsFound.sort(function (a, b) { return a - b });
            JSON.stringify(resultsFound) === JSON.stringify(result) ?
                columnsResults.push(true) :
                columnsResults.push(false);
        }
    }
    checkRows();
    checkColumns();
    const allResults = [...rowsResults, ...columnsResults];
    return !allResults.includes(false);
}