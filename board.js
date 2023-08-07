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
    let newSeries = [];
    for (let i = 1; i <= 9; i++) {
        const newValue = Math.ceil(9 * (Math.random()));
        newSeries.push(Math.ceil(9 * (Math.random())));
    }
    return newSeries;
}

const createBoardContent = () => {
    const cells = document.querySelectorAll('td');
    for (let e = 0; e < 81; e++) {
        const rowContent = rowGenerator();
        for (let i = 0; i < 9; i++) {
            cells[e].innerHTML = rowContent[i];
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


    // document.body.append(boardContainer);


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


    createBoardContent();
}
