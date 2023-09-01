const rowsGenerator = () => {
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

const setRowValues = (newValues, rowNumber) => {
    for (let i = 0; i <= 8; i++) {
        document.getElementsByClassName(`row-${rowNumber}`)[0]
            .getElementsByTagName('input')[i].value = newValues[i];
    }
}

export const catchScenario = () => {
    const inputList = document.getElementsByTagName('input');
    return inputList;
}

export const backInTime = (howWasIt) => {
    console.log('backInTime');
    let cellGlobalId = 0;
    for (let row = 0; row <= 8; row++) {
        const newRow = document.getElementsByClassName(`row-${row}`)[0]
            .getElementsByTagName('input');
        for (let cell = 0; cell <= 8; cell++) {
            newRow[cell].value = howWasIt[cellGlobalId];
            cellGlobalId++;
        }
    }
}
/*
   const series1 = ['', '', '', '', 6, 2, 9, '', ''];
   const series2 = [7, 2, '', 9, 1, '', '', '', ''];
   const series3 = ['', '', 6, '', '', '', '', '', 8];
   const series4 = ['', '', '', 1, '', '', 2, '', ''];
   const series5 = [4, '', 2, '', '', '', 7, '', 3];
   const series6 = [8, 6, '', '', '', 3, '', '', 9];
   const series7 = [2, '', 9, 8, 3, 1, 5, 6, ''];
   const series8 = [5, 8, 7, '', 2, 4, 3, 9, ''];
      const series9 = ['', '', '', 7, '', '', 8, 4, ''];
      Resuelto con esta secuencia:
export const solve = () => {
    generalSweep('isFirstCall');
    isUniqueInRow();
    generalSweep();
    isUniqueInColumn();
    generalSweep();
    isUniqueInSection();
    generalSweep();
    generalSweep();
    generalSweep();
}



        const series1 = [6, 5, '', '', '', 3, 2, 4, 7];
        const series2 = [4, '', '', '', '', 7, '', '', ''];
        const series3 = [9, '', 7, 2, 5, '', '', '', 3];
        const series4 = [2, '', '', 3, '', '', '', 8, 1];
        const series5 = ['', '', 1, 7, '', 6, 4, '', 9];
        const series6 = [7, '', 3, 8, 9, '', 5, 2, ''];
        const series7 = ['', 6, '', '', '', 9, 3, '', ''];
        const series8 = [3, 7, 4, '', '', '', 9, '', ''];
        const series9 = [1, '', 9, '', '', '', '', '', 4];
        


*/

/*
    const series1 = ['', 6, '', '', '', '', 9, 1, ''];
    const series2 = [2, '', 3, '', 1, 5, 6, 8, ''];
    const series3 = ['', '', '', 6, '', 3, 2, 5, 4];
    const series4 = ['', 2, '', '', '', 1, 3, '', ''];
    const series5 = [1, 5, '', '', 4, '', '', '', 6];
    const series6 = ['', '', '', 2, '', '', 8, 9, ''];
    const series7 = ['', '', 6, '', '', 2, '', 7, 9];
    const series8 = [4, '', 7, '', 9, '', '', 6, 2];
    const series9 = [9, 1, 2, 7, '', '', 5, '', ''];
*/

/*
    const series1 = ['', '', 5, '', '', '', 7, 8, ''];
    const series2 = ['', '', 6, '', 5, '', '', 3, ''];
    const series3 = ['', 9, '', '', '', 4, '', '', ''];
    const series4 = [1, '', '', 4, '', '', '', '', ''];
    const series5 = ['', '', 9, '', '', 6, '', '', 2];
    const series6 = ['', '', '', 9, '', 2, '', 7, ''];
    const series7 = [6, '', 7, 2, '', '', '', 9, 5];
    const series8 = [2, '', '', '', '', '', 8, '', ''];
    const series9 = ['', 1, '', 8, '', '', '', '', ''];
*/

export const createSampleLines = () => {

    /*
        const series1 = ['', '', 5, '', '', '', 7, 8, ''];
        const series2 = ['', '', 6, '', 5, '', '', 3, ''];
        const series3 = ['', 9, '', '', '', 4, '', '', ''];
        const series4 = [1, '', '', 4, '', '', '', '', ''];
        const series5 = ['', '', 9, '', '', 6, '', '', 2];
        const series6 = ['', '', '', 9, '', 2, '', 7, ''];
        const series7 = [6, '', 7, 2, '', '', '', 9, 5];
        const series8 = [2, '', '', '', '', '', 8, '', ''];
        const series9 = ['', 1, '', 8, '', '', '', '', ''];
    */

    // const seriesSeries = [4, , , , , , 7, , , , 9, , 1, , , , , , , , 3, , , 9, 6, , 8, , , 2, , , , , 1, , 6, , , 5, , , 8, , 2, , , , , , 8, , 7, , , , 6, , , 1, 9, , 3, , , , , , , , 2, , 5, , , , 4, , , ,];
    //const newSeriesSeries = [, 9, , 8, , 7, 4, 2, , , , 5, , , , , 6, , , , , , 2, , , , , , , , , 9, , 2, , , 6, , , 2, , 1, , 4, , , 1, , , 3, , , , , 9, , , , , , , , 7, , 7, , 1, , 4, 8, , , , , , , , 3, , ,];
    const newSeriesSeries = [, , 8, , 5, , , , , , 2, , 1, , 8, , 9, , 4, , , , , , 6, , , , , , , , 7, , , , , 8, , 3, , 9, , 1, , , , 2, , , , , , 8, , , , , 2, , , 5, , , , 6, 5, , 3, 9, , , , 3, , , 7, , , ,];
    const setIt = (what) => {
        //const newWhat = what.map(val => (typeof val === 'undefined') ? 'hola' : val);
        const previousScenarioHTML = document.getElementsByTagName('input');
        //const algo = [1, , 3];
        //console.log(typeof algo[1] == 'undefined');
        for (let i = 0; i <= what.length; i++) {
            previousScenarioHTML[i].value = typeof what[i] == 'undefined' ? '' : what[i];
        }
    }
    //setIt(seriesSeries);
    setIt(newSeriesSeries);
    /*
        setRowValues(series1, 0);
        setRowValues(series2, 1);
        setRowValues(series3, 2);
        setRowValues(series4, 3);
        setRowValues(series5, 4);
        setRowValues(series6, 5);
        setRowValues(series7, 6);
        setRowValues(series8, 7);
        setRowValues(series9, 8);
        */
}

export const clear = () => {

}
