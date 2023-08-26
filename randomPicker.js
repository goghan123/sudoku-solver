export const getLongestCell = () => {
    const scenarioHTML = document.getElementsByTagName('input');
    /*
    let longestCell = [0];
    let longestCellID;
    for (let i = 0; i < scenarioHTML.length; i++) {
        scenarioHTML[i].value.length > longestCell.length && (
            longestCell = scenarioHTML[i].value,
            longestCellID = i
        );
    }
*/
    let sizeIdAndValue = [];
    for (let i = 0; i < scenarioHTML.length; i++) {
        const toArray = scenarioHTML[i].value.split(',');
        sizeIdAndValue[i] = [toArray.length, i, toArray];
        //sizeList.push(scenarioHTML[i].value.length);
    }
    sizeIdAndValue.sort((a, b) => b[0] - a[0]);
    return sizeIdAndValue;
    // return { longestCell, longestCellID };
}
