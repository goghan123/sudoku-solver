export const createBoard = () => {
    const board = document.createElement('table');
    for (i = 0; i < 9; i++) {
        const newRow = board.insertRow(i);
        newRow.setAttribute('id', `row-${i}`)
        for (e = 0; e < 9; e++) {
            const newCell = newRow.insertCell(e);
            newRow.setAttribute('id', `cell-${e}`)
            newCell.innerHTML = 'Holó';
        }
    }
    document.body.append(board);
    console.log('etwas')
}
