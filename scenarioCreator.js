const rowGenerator = () => {
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newSeries = [];
    for (let i = 0; i < 9; i++) {
        newSeries.push(
            result.splice(Math.floor(Math.random() * result.length), 1)
        );
    }
    return newSeries;
}
/*
export const inputGenerator = () => {
    const cells = document.querySelectorAll('*[id^="cell-"]');
    const getColumn = (value) => {
        return
        value <= 9 ? 
    }
    for (let i = 1; i <= 81; i++) {
        const newCol = new Cell;
        newCell.column = getColumn(i);
        newCell.createCell(cells, i);
    }
}
*/

export const vacuumsGenerator = () => {
    const cells = document.querySelectorAll('*[id^="cell-"]');
    for (let i = 0; i < 65; i++) {
        const randomCell = cells[Math.floor(Math.random() * cells.length)];
        randomCell.innerHTML = '';
    }
}

export const createBoardSolution = () => {
    const cells = document.querySelectorAll('*[id^="cell-"]');
    let a = 0;
    for (let e = 0; e < 9; e++) {
        const rowContent = rowGenerator();
        for (let i = 0; i < 9; i++) {
            cells[a].innerHTML = rowContent[i];
            a++;
        }
    }
}