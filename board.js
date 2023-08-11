const createBoardContents = () => {
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Math.floor(10 * (Math.random()));
    const rowGenerator = () => {
        let newSeries = [];
        for (let i = 1; i <= 9; i++) {
            newSeries.push(Math.ceil(9 * (Math.random())));
        }
        return newSeries;
    }
    const x1 = [0, 0, 0, 2, 3, 4, 0, 9, 6];
    const x2 = [0, 0, 3, 2, 5, 4, 0, 8, 6];

    //   return { series(), series() };
}

const rowGenerator = () => {
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newSeries = [];
    for (let i = 0; i < 9; i++) {
        newSeries.push(
            result.splice(Math.floor(Math.random() * result.length), 1)
            );
    }



    /*
    console.log(`Serie anterior: ${result2}`);
    console.log(`Serie nueva: ${newSeries}`);
    */



    /*
    for (let i = 0; i < 9; i++) {
        newSeries = result.splice(Math.floor(Math.random() * result.length));
    }
    */
    return newSeries;
    /*
items[Math.floor(Math.random()*items.length)];
for (let i = 1; i <= 9; i++) {
    let newNumber;
    // changeNumber = () => newNumber = Math.ceil(9 * (Math.random()));
    
    while (newSeries.includes(newNumber) == true) {
        newNumber = Math.ceil(9 * (Math.random()));
        console.log('Some tries')
    }
    
// newNumber = newSeries.includes(newNumber) == false ? changeNumber()
newSeries.push(newNumber);
return newSeries;
*/

}


export const createBoardContent = () => {
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

export const createHTMLBoard = () => {
    const board = document.createElement('table');
    const boardContainer = document.createElement('div');
    boardContainer.style.width = '1px';
    boardContainer.style.height = '1px';
    boardContainer.style.background = 'blue';
    boardContainer.style.overflow = 'true';
    for (let i = 0; i < 9; i++) {
        const newRow = board.insertRow(i);
        newRow.setAttribute('id', `row-${i}`)
        for (let e = 0; e < 9; e++) {
            const newCell = newRow.insertCell(e);
            newCell.setAttribute('id', `cell-${e}`)
            newCell.innerHTML = 'Holi';
            newCell.style.width = '70px';
            newCell.style.height = '70px';
            newCell.style.textAlign = 'center';
            newCell.style.borderWidth = "1px";
            newCell.style.borderColor = "#000";
            newCell.style.borderStyle = "solid";
        }
    }
    board.style.borderCollapse = 'collapse';
    document.body.appendChild(board);
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
}
