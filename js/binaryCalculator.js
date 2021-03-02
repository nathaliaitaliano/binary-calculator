const addZero = () => addToDisplay("0");
const addOne = () => addToDisplay("1");
const addSumOperator = () => showToDisplay("+");
const addSubtrationOperator = () => showToDisplay("-");
const addMultiplicationOperator = () => showToDisplay("*");
const addDivisionOperator = () => showToDisplay("/");

const getDisplayElement = () => document.getElementById("res");

const addToDisplay = character => {
    if (getDisplayElement().innerHTML === "You need to add a binary number first") {
        clearDisplay();
        getDisplayElement().innerText = `${getDisplayElement().innerText}${character}`;
    } else {
        getDisplayElement().innerText = `${getDisplayElement().innerText}${character}`;
    }
}

const showToDisplay = operator => {
    const matchOperator = getDisplayElement().innerHTML.match(/[01]*([\+-\/\*])[01]*/);

    if (matchOperator !== null) {
        getDisplayElement().innerText = getDisplayElement().innerHTML.replace(matchOperator[1], ` ${operator} `);
    } else if (getDisplayElement().innerHTML !== "" && getDisplayElement().innerHTML !== "You need to add a binary number first") {
        addToDisplay(` ${operator} `);
    } else {
        getDisplayElement().innerHTML = "You need to add a binary number first";
    }
}

const clearDisplay = () => getDisplayElement().innerText = "";

const calculate = () => {
    const expression = getDisplayElement().innerHTML.match(/([10]+)([\+-\/\*])([10]+)/);
    const firstOperand = parseInt(expression[1], 2);
    const operator = expression[2];
    const secondOperand = parseInt(expression[3], 2);
    let result = 0;

    switch (operator) {
        case "+":
            result = (firstOperand + secondOperand).toString(2);
            break;
        case "-":
            result = (firstOperand - secondOperand).toString(2);
            break;
        case "*":
            result = (firstOperand * secondOperand).toString(2);
            break;
        case "/":
            result = (firstOperand / secondOperand).toString(2);
            break;
    }

    getDisplayElement().innerText = `${result}`;
}