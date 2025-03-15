const add = function(a,b) {
    return a + b;
}

const subtract = function(a,b) {
    return a - b;
}

const mult = function (a,b) {
    return a * b;
}

const divide = function (a,b) {
    return a/b;
}

const operate = function(a,b,operator) {
    operations = {
        "plus": add,
        "minus": subtract,
        "mult": mult,
        "divide": divide,
    }
    return operations[operator](a,b);
}

function updateDisplay(content) {
    // Take in an array object, join it and update the display;
    const display = document.querySelector(".input");
    display.textContent = content.join("");
}

let numA = 0;
let numB = 0;
let operator = "";
let userInput = []

const display = document.querySelector(".input");
const numberContainer = document.querySelector(".numberButtonContainer");
numberContainer.addEventListener("click",(e) => {
    userInput.push(e.target.id)
    updateDisplay(userInput)
})
// each digit pressed pushes onto an array userInput, displayed on screen joined
// store the operator button id pressed in operator, join the values of userInput, convert to Int and store in numA, then empty userInput (userInput = [])

// each digit pressed pushes onto an array userInput, displayed on screen joined

//when = is pressed, join values of userInput, store in numB, clear userInput, call operate() and return the result of the calculation to the screen