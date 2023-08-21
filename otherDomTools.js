export const indexObtainer = (startingIndex) => {
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