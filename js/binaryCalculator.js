const addZero = () => addToDisplay("0");
const addOne = () => addToDisplay("1");
const addSumOperator = () => showToDisplay("+");
const addSubtrationOperator = () => showToDisplay("-");
const addMultiplicationOperator = () => showToDisplay("*");
const addDivisionOperator = () => showToDisplay("/");

const getDisplayElement = () => document.getElementById("res");

const addToDisplay = symbol => getDisplayElement().innerText = `${getDisplayElement().innerText}${symbol}`;

const showToDisplay = symbol => {
    const matchSymbol = getDisplayElement().innerHTML.match(/[01]*([\+-\/\*])[01]*/);
    
    if (matchSymbol !== null) getDisplayElement().innerText = getDisplayElement().innerHTML.replace(matchSymbol[1], symbol);
    else addToDisplay(symbol);
}

const clearDisplay = () => getDisplayElement().innerText = "";

const calculate = () => {
    const operands = getDisplayElement().innerHTML.match(/([10]+)([\+-\/\*])([10]+)/);
    const operand1 = parseInt(operands[1], 2);
    const operand2 = parseInt(operands[3], 2);
    let result = 0;

    switch (operands[2]) {
        case "+":
            result = (operand1 + operand2).toString(2);
            break;
        case "-":
            result = (operand1 - operand2).toString(2);
            break;
        case "*":
            result = (operand1 * operand2).toString(2);
            break;
        case "/":
            result = (operand1 / operand2).toString(2);
            break;
    }

    getDisplayElement().innerText = `${result}`;
}