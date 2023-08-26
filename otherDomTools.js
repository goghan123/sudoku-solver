export const sectionIndexObtainer = (startingIndex) => {
    return [startingIndex, startingIndex + 1, startingIndex + 2,
        startingIndex + 9, startingIndex + 10, startingIndex + 11,
        startingIndex + 18, startingIndex + 19, startingIndex + 20];
}

export const sectionSelector = (indexSeries) => {
    const inputList = document.getElementsByTagName('input');
    let section = [];
    for (let i = 0; i <= 8; i++) {
        const currentInput = inputList[indexSeries[i]];
        section.push(currentInput);
    }
    return section;
}

export const getLongestCell = () => {
    const scenarioHTML = document.getElementsByTagName('input');
    let sizeIdAndValue = [];
    for (let i = 0; i < scenarioHTML.length; i++) {
        const toArray = scenarioHTML[i].value.split(',');
        sizeIdAndValue[i] = [toArray.length, i, toArray];
    }
    sizeIdAndValue.sort((a, b) => b[0] - a[0]);
    return sizeIdAndValue;
}
