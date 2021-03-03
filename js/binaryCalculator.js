const addZero = () => addToDisplay("0");
const addOne = () => addToDisplay("1");
const addSumOperator = () => setOperator("+");
const addSubtrationOperator = () => setOperator("-");
const addMultiplicationOperator = () => setOperator("*");
const addDivisionOperator = () => setOperator("/");

const getDisplayElement = () => document.getElementById("res");

const currentDisplayContent = () => getDisplayElement().innerHTML;

const setDisplayContent = content => getDisplayElement().innerText = content;

const clearDisplay = () => getDisplayElement().innerText = "";

const hasFirstBinaryOperand = () => getDisplayElement().innerHTML !== "" && getDisplayElement().innerHTML !== "You need to add a binary number first";

const addToDisplay = character => {
    if (currentDisplayContent() === "You need to add a binary number first") {
        clearDisplay();
    }
    setDisplayContent(`${currentDisplayContent()}${character}`);
}

const setOperator = operator => {
    const matchOperator = getDisplayElement().innerHTML.match(/[01]*([\+-\/\*])[01]*/);

    if (matchOperator !== null) {
        const currentOperator = matchOperator[1];
        return setDisplayContent(currentDisplayContent().replace(currentOperator, `${operator}`));
    }
    if (hasFirstBinaryOperand()) {
        return addToDisplay(`${operator}`);
    }
    setDisplayContent("You need to add a binary number first");
}

const calculate = () => {
    const binaryExpression = getDisplayElement().innerHTML.match(/([10]+)([\+-\/\*])([10]+)/);
    const firstOperand = parseInt(binaryExpression[1], 2);
    const operator = binaryExpression[2];
    const secondOperand = parseInt(binaryExpression[3], 2);
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
    setDisplayContent(`${result}`);
}