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
        return "Error: Division by zero";
    } else {
        return a / b;
    };
};

let firstNum = 0; //stores first number
let operator = null; //stores operator
let secondNum = 0; //stores second number

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

