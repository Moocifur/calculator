let firstNumber = ''; 
let secondNumber = '';
let currentOperator = null;
let shouldResetScreen = false;

const display = document.querySelector('[data-current-operand]');
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-all-clear]");
const backSpaceButton = document.querySelector("[data-delete]");

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return 0;
    } else {
        return a / b;
    };
};

//Step 3: Takes the nums, and opertor, and selects appropriate function
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2); 
        default:
            return "Invalid operator";               
    };
};

numberButtons.forEach(button => {
    button.addEventListener('click', () => handleNumber(button.textContent));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => handleOperator(button.textContent));
});

clearButton.addEventListener('click', clear);
backSpaceButton.addEventListener('click', backspace);
equalsButton.addEventListener('click', evaluate);

function handleNumber(number) { //text content is passed as number
    if(display.textContent === '0' || shouldResetScreen) resetScreen();
    if (number === '.' && display.textContent.includes('.')) return;
    display.textContent += number;
}

function resetScreen() {
    display.textContent = '';
    shouldResetScreen = false;
}

function handleOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstNumber = display.textContent;
    currentOperator = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetScreen) return;
    secondNumber = display.textContent;
    display.textContent = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
    currentOperator = null;
}

function clear() {
    display.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    shouldResetScreen = false;
}

function backspace() {
    display.textContent = display.textContent.substring(0, display.textContent.length -1);
    if (display.textContent === '') display.textContent = '0';
}