export class Cell {
    constructor(column, row) {
        this.column = column;
        this.row = row;
        this.solved = false;
    }

    createCell(cellContainer, cellId) {
        const newInput = document.createElement('input');

        newInput.setAttribute('type', 'text');
        newInput.setAttribute('id', `input-${cellId}`);
        newInput.min = '1';
        newInput.max = '9';
        newInput.style.width = '70px';
        newInput.style.height = '70px';
        newInput.style.textAlign = 'center';
        newInput.style.fontSize = '40px';



        newInput.value = '';

        // Esto sirve para navegar por los valores de la tabla
        // const rowHTML = document.getElementById(`row-${this.row}`);
        // const algo = rowHTML.getElementsByTagName('input')[this.column].value;

        const onclickFunction = () => {
            // const columnHTML = document.querySelectorAll('id',  `col-${this.column}`);

            const rowHTML = document.getElementById(`row-${this.row}`);

            const getLineValues = (line) => {
                let lineValues = [];
                for (let i = 0; i <= 8; i++) {
                    const newValue = line.getElementsByTagName('input')[i].value;
                    lineValues.push(newValue);
                }
                return lineValues;
            }
            // console.log(`Columna: ${getLineValues(columnHTML)}`);

            // const rowValues = rowHTML.childNodes[this.column].value;

            const columnFunction = () => {
                const columnsHTML = document.querySelectorAll('id', `col-${this.column}`);
                let lineValues = [];
                for (let i = 0; i <= 0; i++) {
                    const newValue = columnHTML.getElementsByTagName('input')[i].value;
                    lineValues.push(newValue);
                }
                return lineValues;
            }
            // const columnHTML = document.querySelectorAll('id',  `col-${this.column}`);
            // const columnHTML = board.querySelectorAll('id', 'col-5');

            let etwas = [];
            // for (let i = 0; i <= 8; i++) {
            // const etwas2 = columnHTML.getElementsByTagName('input')[this.column].value;
            // const algo = rowHTML.getElementsByTagName('input')[this.column].value;
            // etwas.push(etwas2);
            // }
            console.log(`Fila: ${getLineValues(rowHTML)}`);
            // console.log(rowHTML);

            //console.log(columnHTML);

            // console.log(`Columna: ${columnHTML.getElementsByTagName('input')[0].value}`);
            // console.log(columnHTML[0].innerHTML);


            /*
            console.log(`Id: ${newInput.id}`);
            console.log(`Id: ${newInput.id}`);
            console.log(`Row: ${this.row}`);
            console.log(`Smthg: ${document.getElementById('board').rows[this.row].id}`);
            */
        }

        cellContainer.appendChild(newInput);
    }
}