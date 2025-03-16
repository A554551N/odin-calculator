let numA = null;
let numB = null;
let operator = "";
let userInput = [];
let displayContent = [];

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
    // Divide by 0 protection
    if (b === 0) {
        return "ERR";
    }
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
    if (functionToRun) {
        return functionToRun(a,b);
    } else console.log("Error: function is undefined")
}

function updateDisplay(content) {
    // Take in a variable and performs necessary transformations to update the display;
    const display = document.querySelector(".input");
    displayContent.push(content);
    display.textContent = displayContent.join("");
}

function acceptInput() {
    const  joinedInput = userInput.join("");
    console.log(joinedInput)
    userInput = [];
    return parseFloat(joinedInput);
}

function clearDisplay() {
    const display = document.querySelector(".input");
    displayContent = [];
    updateDisplay();
}

const display = document.querySelector(".input");
const numberContainer = document.querySelector(".numberButtonContainer");
numberContainer.addEventListener("click",(e) => {
    userInput.push(e.target.id);
    updateDisplay(e.target.id)
    console.log(`UserInput: ${userInput}`)
    console.log(`Display: ${displayContent}`)
})

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click",() =>{
    clearDisplay();
    userInput = [];
    numA = null;
    numB = null;
    operator = "";
})

const operatorButtons = document.querySelector(".operatorButtonContainer");
operatorButtons.addEventListener("click",(e) => {
    operationSymbols = {"plus":" + ",
                    "minus":" - ",
                    "mult":" x ",
                    "divide":" ÷ ",
    }

    if (e.target.id === "equal") {
        numB = acceptInput();
        const result = operate(numA,numB,operator);
        clearDisplay();
        updateDisplay(result);
        // Manually empty displayContent so that the buffer is empty when the next number is entered
        displayContent = [];
        userInput = [];
        numA = 0;
        numB = 0;
    } else if (typeof(numA) != null) {
        //code here will handle the special case where the user hits the operation button without hitting enter (ie 2 + 2 +)
        //expected behavior will be to perform the operation and then put the result into NumA (updating the screen accordingly)
        numB = acceptInput();
        const result = operate(numA,numB,operator);
        clearDisplay();
        operator = e.target.id;
        updateDisplay(result+operationSymbols[operator]);
        numA = result;
    } else {
        operator = e.target.id;
        numA = acceptInput();
        // nullish operator catches clicks that miss the buttons as the listener is actually on the box they're in
        // and will push "undefined" to the screen if not caught.
        displayContent.push(` ${operationSymbols[e.target.id]??""} `);
        updateDisplay();
    }
})
// each digit pressed pushes onto an array userInput, displayed on screen joined
// store the operator button id pressed in operator, join the values of userInput, convert to Int and store in numA, then empty userInput (userInput = [])

// each digit pressed pushes onto an array userInput, displayed on screen joined

//when = is pressed, join values of userInput, store in numB, clear userInput, call operate() and return the result of the calculation to the screen