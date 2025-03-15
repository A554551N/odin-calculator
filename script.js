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

let numA = 0;
let numB = 0;
let operator = "";

console.log(operate(3,2,"mult"))