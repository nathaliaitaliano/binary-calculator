const addZero = () => addToDisplay("0");
const addOne = () => addToDisplay("1");
const addSumOperator = () => setOperator("+");
const addSubtrationOperator = () => setOperator("-");
const addMultiplicationOperator = () => setOperator("*");
const addDivisionOperator = () => setOperator("/");

const getDisplayElement = () => document.getElementById("display");

const currentDisplayContent = () => getDisplayElement().innerHTML;

const setDisplayContent = content => getDisplayElement().innerText = content;

const hasFirstBinaryOperand = () => getDisplayElement().innerHTML.match(/^([10]+)/) !== null;

const lastExpressionResult = expressionResult => document.getElementById("expressionResult").innerText = expressionResult;

const clearDisplay = () => {
    getDisplayElement().innerText = "";
    getDisplayElement().attributeStyleMap.clear();
}

const addToDisplay = character => {
    if (currentDisplayContent() === "You need to add a binary number first!") {
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
    } else {
        getDisplayElement().style.fontSize = "16pt";
        setDisplayContent("You need to add a binary number first!");
    }
}

const calculate = () => {
    const binaryExpression = getDisplayElement().innerHTML.match(/([10]+)([\+-\/\*])([10]+)/);
    const firstOperand = parseInt(binaryExpression[1], 2);
    const operator = binaryExpression[2];
    const secondOperand = parseInt(binaryExpression[3], 2);
    const result = eval(`${firstOperand} ${operator} ${secondOperand}`).toString(2);

    setDisplayContent(`${result}`);
    lastExpressionResult(`${firstOperand.toString(2)} ${operator} ${secondOperand.toString(2)} = ${result}`);
}