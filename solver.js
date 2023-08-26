import { backInTime } from "./scenarioCreator.js";
import { isGameDone, scenarioReader } from "./scenarioReader.js";
import { isUniqueInColumn, isUniqueInRow, isUniqueInSection } from "./uniqueCasesSearchers.js";
import { getLongestCell } from "./otherDomTools.js";
import { columnSweep, firstColumnSweep, rowSweep, sectionSweep } from "./sweepers.js";

const generalSweep = (isFirstCall) => {
    isFirstCall && firstColumnSweep();
    for (let i = 0; i < 9; i++) rowSweep(i);
    sectionSweep();
    for (let i = 0; i < 9; i++) columnSweep(i);
}

let initialNumbers;

export const solve = () => {
    const allInputsList = document.getElementsByTagName('input');
    if (typeof initialNumbers == 'undefined') {
        initialNumbers = true;
        for (let i = 0; i <= 80; i++) {
            allInputsList[i].value.length === 1 &&
                (allInputsList[i].style.color = 'black')
        }
    }
    let scenarioSwitch = 1;
    let specialSolverSwitch = 1;
    let scenario1 = 'scenario1';
    let scenario2 = 'scenario2';
    let scenarioToComeTo;
    let longestCell;
    let longestCellID;
    let longCellValueIndex;
    let counter = 0;
    let thirdStageTryNumber = 0;
    const updateScenarioReading = () => {
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
    const sweepSequence = () => {
        generalSweep();
        generalSweep();
        updateScenarioReading();
        try {
            if (counter <= 20) {
                counter++;
                generalSweep();
                if (JSON.stringify(scenario1) != JSON.stringify(scenario2)) {
                    sweepSequence();
                } else if (isGameDone()) {
                    console.log('Fin del juego');
                } else {
                    trySpecialSolvers();
                    sweepSequence();
                }
            } else if (counter > 20 && counter <= 30) {
                counter++;
                typeof scenarioToComeTo == 'undefined' &&
                    (scenarioToComeTo = scenarioReader());
                typeof longestCell == 'undefined' && (
                    longestCell = getLongestCell()[0][2],
                    longestCellID = getLongestCell()[0][1]);
                if (typeof longCellValueIndex != 'undefined') {
                    console.log('Trying with new scenario');
                    backInTime(scenarioToComeTo);
                    if (longCellValueIndex - 1 >= 0) {
                        console.log('a1');
                        longCellValueIndex = longCellValueIndex - 1;
                        console.log(`Subvalor número ${longCellValueIndex}`);
                    } else {
                        console.log('a2');
                        if (thirdStageTryNumber != allInputsList.length - 1) {
                            console.log('a3');
                            thirdStageTryNumber++;
                            longestCell = getLongestCell()[thirdStageTryNumber][2];
                            longestCellID = getLongestCell()[thirdStageTryNumber][1];
                            longCellValueIndex = longestCell.length - 1;
                            console.log(`Pasando a celda número ${thirdStageTryNumber}`);
                        } else {
                            console.log('a4');
                            thirdStageTryNumber = false;
                            console.log('No se pudo resolver');
                        }
                    }
                } else {
                    console.log('Creating first hypothetical scenario');
                    longCellValueIndex = longestCell.length - 1;
                }
                thirdStageTryNumber === false || (
                    allInputsList[longestCellID].value = longestCell[longCellValueIndex],
                    counter = 10,
                    sweepSequence()
                )
            } else if (isGameDone()) {
                console.log('Fin del juego');
            } else {
                console.log('No se pudo resolver');
            }
        } catch (e) { console.log(e) }
    }
    generalSweep('isFirstCall');
    sweepSequence();
}
