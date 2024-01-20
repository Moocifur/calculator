//step one, basic math
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

//the insides of my scoreboard
let firstNum = ''; //stores first number
let secondNum = ''; //stores second number
let operator = null; //stores operator

let currentNum = firstNum;


//the switch(+-*/)
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

//the hmtl target selector
const numberButtons = document.querySelectorAll('.number'); //select number id in html

//the eventListener for previous html targeter-----------------
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        updateDisplay(this.textContent);
    });
});

function updateDisplay(number) {
    if (currentNum === firstNum) {
        firstNum += number;
    } else {
        secondNum += number;
    }
    document.getElementById('display').textContent = currentNum === firstNum ? firstNum : secondNum;
};
//--------------------------------------------------------------
//takes +-*/ and also switches currentNum or something?
function setOperator(selectedOperator) {
    operator = selectedOperator;
    currentNum = secondNum
}

function calculateResult() {
    let result = operate(operator,parseFloat(firstNum), parseFloat(secondNum));
    document.getElementById('display').textContent = result;
    //reset
    firstNum = result.toString();
    secondNum = '';
    operator = null;
}
