const addZero = () => addToDisplay("0");
const addOne = () => addToDisplay("1");
const addSumOperator = () => showToDisplay("+");
const addSubtrationOperator = () => showToDisplay("-");
const addMultiplicationOperator = () => showToDisplay("*");
const addDivisionOperator = () => showToDisplay("/");

const getDisplayElement = () => document.getElementById("res");

const addToDisplay = operator => getDisplayElement().innerText = `${getDisplayElement().innerText}${operator}`;

const showToDisplay = operator => {
    const matchOperator = getDisplayElement().innerHTML.match(/[01]*([\+-\/\*])[01]*/);

    if (matchOperator !== null) getDisplayElement().innerText = getDisplayElement().innerHTML.replace(matchOperator[1], operator);
    else addToDisplay(operator);
}

const clearDisplay = () => getDisplayElement().innerText = "";

const calculate = () => {
    const expression = getDisplayElement().innerHTML.match(/([10]+)([\+-\/\*])([10]+)/);
    const operand1 = parseInt(expression[1], 2);
    const operator = expression[2];
    const operand2 = parseInt(expression[3], 2);
    let result = 0;

    switch (operator) {
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