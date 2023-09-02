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
const allInputsList = document.getElementsByTagName('input');
const checkIfOnlyNumbers = () => {
    let allIsGood = [];
    for (let i = 0; i <= 80; i++) {
        ((allInputsList[i].value >= 1 && allInputsList[i].value <= 9) ||
            (allInputsList[i].value == '')) ?
            allIsGood.push(true) : allIsGood.push(false);
    }
    return !allIsGood.includes(false);
}
const updateMessage = (message) => {
    document.getElementById('main-button').innerHTML = message;
}
let initialNumbers;
export const solve = () => {
    let phase = 0;
    if (phase === 0) {
        if (!checkIfOnlyNumbers()) {
            updateMessage('Invalid values');
        } else {
            document.getElementById('clear-button').remove();
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
                } else if (specialSolverSwitch === 2) {
                    isUniqueInColumn();
                    specialSolverSwitch = 3;
                } else {
                    isUniqueInSection();
                    specialSolverSwitch = 1;
                }
            }
            const sweepSequence = () => {
                setTimeout(() => {
                    updateMessage('Solving');
                    generalSweep();
                    generalSweep();
                    updateScenarioReading();
                    try {
                        if (phase <= 20) {
                            phase++;
                            generalSweep();
                            if (JSON.stringify(scenario1) != JSON.stringify(scenario2)) {
                                sweepSequence();
                            } else if (isGameDone()) {
                                console.log('Solved =)');
                                updateMessage('Solved =)');
                            } else {
                                trySpecialSolvers();
                                sweepSequence();
                            }
                        } else if (phase > 20 && phase <= 30) {
                            phase++;
                            typeof scenarioToComeTo == 'undefined' &&
                                (scenarioToComeTo = scenarioReader());
                            typeof longestCell == 'undefined' && (
                                longestCell = getLongestCell()[0][2],
                                longestCellID = getLongestCell()[0][1]);
                            if (typeof longCellValueIndex != 'undefined') {
                                console.log('Trying with new scenario');
                                updateMessage('Trying with new scenario');
                                backInTime(scenarioToComeTo);
                                if (longCellValueIndex - 1 >= 0) {
                                    longCellValueIndex = longCellValueIndex - 1;
                                    console.log(`Sub-value number ${longCellValueIndex}`);
                                    updateMessage(`Passing to cell number ${thirdStageTryNumber}`);
                                } else {
                                    if (thirdStageTryNumber != allInputsList.length - 1) {
                                        thirdStageTryNumber++;
                                        longestCell = getLongestCell()[thirdStageTryNumber][2];
                                        longestCellID = getLongestCell()[thirdStageTryNumber][1];
                                        longCellValueIndex = longestCell.length - 1;
                                        console.log(`Passing to cell number ${thirdStageTryNumber}`);
                                        updateMessage(`Passing to cell number ${thirdStageTryNumber}`);
                                    } else {
                                        thirdStageTryNumber = false;
                                        console.log('Scenario could not be Solved =)');
                                        updateMessage('Scenario could not be Solved =)');
                                    }
                                }
                            } else {
                                console.log('Creating first hypothetical scenario');
                                updateMessage('Creating first hypothetical scenario');
                                longCellValueIndex = longestCell.length - 1;
                            }
                            thirdStageTryNumber === false || (
                                allInputsList[longestCellID].value = longestCell[longCellValueIndex],
                                phase = 10,
                                sweepSequence()
                            )
                        } else if (isGameDone()) {
                            console.log('Finish');
                            updateMessage('Finish');
                        } else {
                            console.log('Scenario could not be Solved =)');
                            updateMessage('Scenario could not be Solved =)');
                        }
                    } catch (e) { console.log(e) }
                }, 300)
            }
            generalSweep('isFirstCall');
            sweepSequence();
        }
    }
}

export const clear = () => {
    for (let i = 0; i <= 80; i++) {
        allInputsList[i].value = '';
    }
    initialNumbers;
}