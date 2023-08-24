import { sectionIndexObtainer, sectionSelector } from "./otherDomTools.js";
import { backInTime, catchScenario } from "./scenarioCreator.js";
import { isGameDone, scenarioReader } from "./scenarioReader.js";
import { isUniqueInColumn, isUniqueInRow, isUniqueInSection } from "./uniqueCasesSearchers.js";

export const obtainValuesRemaining = (series) => {
    const toNumbers = series.map(el => parseInt(el));
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let e = 0;
    for (let i = 1; i <= 9; i++) {
        toNumbers.includes(i) && (
            result.splice(i - e - 1, 1),
            e++
        )
    }
    return result;
}

export const getColumnValues = (colNumber) => {
    let lineValues = [];
    for (let i = 0; i <= 8; i++) {
        const newValue = document.getElementsByClassName(`col-${colNumber}`)[i].lastChild.value;
        lineValues.push(newValue);
    }
    return lineValues;
}

export const firstColumnSweep = () => {
    for (let columnNumber = 0; columnNumber <= 8; columnNumber++) {
        // Detecta el HTML de la columna
        const columnHTML = document.getElementsByClassName(`col-${columnNumber}`);
        // Se fija qué valores le faltan a la fila
        const valuesRemaining = obtainValuesRemaining(getColumnValues(columnNumber));
        for (let i = 0; i <= 8; i++) {
            // A cada input que no tenga resultado final
            columnHTML[i].lastChild.value == '' && (
                // Ponele todos los valores que le faltan a la columna
                columnHTML[i].lastChild.style.fontSize = '20px',
                columnHTML[i].lastChild.value = valuesRemaining
            )
        }
    }
}

export const rowSweep = (a) => {
    //Detecta los inputs de todas las filas
    const rowHTML = document.getElementsByClassName(`row-${a}`)[0]
        .getElementsByTagName('input');
    let resultsFound = [];
    // Detecta los resultados finales de la fila y los almacena en una lista
    for (let i = 0; i <= 8; i++) rowHTML[i].value.length === 1 && resultsFound.push(rowHTML[i].value);
    for (let e = 0; e <= 8; e++) {
        // Refiere a todos los valores de las filas, sean finales o no
        let thisCellValue = rowHTML[e].value;
        // Referirse solo a las celdas con sugerencias
        thisCellValue.length > 1 && (
            //rowHTML[e].fontSize = '20px',
            // Borrar de las sugerencias los resultados finales de la fila
            rowHTML[e].value = thisCellValue.split(',').filter(val => !resultsFound.includes(val))
        )
    }
}

export const columnSweep = (columnNumber) => {
    const columnHTML = document.getElementsByClassName(`col-${columnNumber}`);
    let resultsFound = [];
    for (let i = 0; i <= 8; i++) columnHTML[i].lastChild.value.length === 1 &&
        resultsFound.push(columnHTML[i].lastChild.value);
    for (let e = 0; e <= 8; e++) {
        let thisCellValue = columnHTML[e].lastChild.value;
        columnHTML[e].lastChild.value.length > 1 && (
            columnHTML[e].lastChild.value = thisCellValue.split(',').filter(val => !resultsFound.includes(val))
        )
    }
}

export const sectionSweep = () => {
    const sweep = (section) => {
        let resultsFound = [];
        for (let i = 0; i <= 8; i++) section[i].value.length === 1 && resultsFound.push(section[i].value);
        for (let e = 0; e <= 8; e++) {
            let thisCellValue = section[e].value;
            thisCellValue.length > 1 && (
                section[e].value = thisCellValue.split(',').filter(val => !resultsFound.includes(val))
            )
        }
    }
    const sweepEachSection = () => {
        const sectionStartingIndex = [0, 3, 6, 27, 30, 33, 54, 57, 60];
        for (let i = 0; i < sectionStartingIndex.length; i++) {
            sweep(sectionSelector(sectionIndexObtainer(sectionStartingIndex[i])));
        }
    }
    sweepEachSection();
}

export const sweep1 = () => {
    generalSweep('isFirstCall');
    console.log('generalSweep(isFirstCall)');
    console.log(scenarioReader());
}

export const sweep2 = () => {
    isUniqueInRow();
    console.log('isUniqueInRow');
}

export const sweep3 = () => {
    generalSweep();
    console.log('generalSweep');
}

export const sweep4 = () => {
    isUniqueInColumn();
    console.log('isUniqueInColumn');
}

export const sweep5 = () => {
    isUniqueInSection();
    console.log('isUniqueInSection');
}

const generalSweep = (isFirstCall) => {
    isFirstCall && firstColumnSweep();
    for (let i = 0; i < 9; i++) rowSweep(i);
    sectionSweep();
    for (let i = 0; i < 9; i++) columnSweep(i);
}

let previousScenario;

export const solve = () => {
    let scenarioSwitch = 1;
    let specialSolverSwitch = 1;
    let scenario1 = 'scenario1';
    let scenario2 = 'scenario2';
    const updateScenario = () => {
        scenarioSwitch === 1 ? (
            scenario1 = scenarioReader(),
            scenarioSwitch = 2
        ) : (
            scenario2 = scenarioReader(),
            scenarioSwitch = 1
        )
    }
    const trySpecialSolvers = () => {
        if (specialSolverSwitch === 1) {
            isUniqueInRow();
            specialSolverSwitch = 2;
            console.log('isUniqueInRow');
        } else if (specialSolverSwitch === 2) {
            isUniqueInColumn();
            specialSolverSwitch = 3;
            console.log('isUniqueInCol');
        } else {
            isUniqueInSection();
            specialSolverSwitch = 1;
            console.log('isUniqueInSection');
        }
    }
    let counter = 1;
    const sweepSequence = () => {
        generalSweep();
        generalSweep();
        updateScenario();
        try {
            if (counter <= 30) {
                console.log(counter);
                if (JSON.stringify(scenario1) != JSON.stringify(scenario2)) {
                    counter++;
                    generalSweep();
                    sweepSequence();
                    console.log('Opción 1');
                } else if (isGameDone()) {
                    console.log('Fin del juego');
                } else {
                    counter++;
                    generalSweep();
                    trySpecialSolvers();
                    sweepSequence();
                    console.log('Opción 3');
                }
            } else {
                console.log('No se pudo resolver');
            }
        } catch (e) { console.log(e) }
    }
    generalSweep('isFirstCall');
    sweepSequence();
}

export const sweep6 = () => {
    solve();
}

export const sweep7 = () => {
    previousScenario = scenarioReader();
}

export const sweep8 = () => {
    try {
        backInTime(previousScenario);
    } catch (e) { console.log(e) }
}
