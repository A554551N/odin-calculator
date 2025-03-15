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
    functionToRun = operations[operator];
    return functionToRun(a,b);
}

function updateDisplay(content) {
    // Take in a variable and performs necessary transformations to update the display;
    const display = document.querySelector(".input");
    if(!Array.isArray(content)){
        display.textContent = content;
    } else display.textContent = content.join("");
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

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click",() =>{
    userInput = [];
    updateDisplay(userInput)
    numA = 0;
    numB = 0;
    operator = "";
})

const operatorButtons = document.querySelector(".operatorButtonContainer");
operatorButtons.addEventListener("click",(e) => {
    if (numA != 0) {
        //code here will handle the special case where the user hits the operation button without hitting enter (ie 2 + 2 +)
        //expected behavior will be to perform the operation and then put the result into NumA (updating the screen accordingly)
    }
    if (e.target.id === "equal") {
        numB = parseFloat(userInput.join(""))
        const result = operate(numA,numB,operator);
        updateDisplay(result)
    } else {
        operator = e.target.id;
        operationSymbols = {"plus":" + ",
                        "minus":" - ",
                        "mult":" x ",
                        "divide":" ÷ ",
        }
        numA = parseFloat(userInput.join(""))
        // nullish operator catches clicks that miss the buttons as the listener is actually on the box they're in
        // and will push "undefined" to the screen if not caught.
        userInput.push(` ${operationSymbols[e.target.id]??""} `);
        updateDisplay(userInput);
        userInput=[]
    }
})
// each digit pressed pushes onto an array userInput, displayed on screen joined
// store the operator button id pressed in operator, join the values of userInput, convert to Int and store in numA, then empty userInput (userInput = [])

// each digit pressed pushes onto an array userInput, displayed on screen joined

//when = is pressed, join values of userInput, store in numB, clear userInput, call operate() and return the result of the calculation to the screen