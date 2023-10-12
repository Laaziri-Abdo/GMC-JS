// the display scren 
const display = document.querySelector(".display");
let first = '';
let selectdOp = '';
let result = '';
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
// operation

const division = document.querySelector(".division");
const multiplication = document.querySelector(".multiplication");
const substraction = document.querySelector(".substraction");
const addition = document.querySelector(".addition");
const equal = document.querySelector(".equal");

// numbers selecton
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const zero = document.querySelector(".zero");

function calculate(x, op, y) {
    if (op === '+') {
        return Number(x) + Number(y);
    } else if (op === '-') {
        return x-y;
    }
    else if (op === 'x') {
        return x*y;
    }
    else if (op === '÷') {
        if (y == 0) {
            return "We can't divide by 0 "
        } else
            return x / y;
    }
}
zero.addEventListener("click", function (event) {
    let resultOfZero = event.target.innerText
    // console.log(resultOfZero);
    // console.log(display);
    return display.append(resultOfZero)
})

one.addEventListener("click", function (event) {
    let resultOfOne = event.target.innerText;
    // console.log(resultOfOne);
    return display.append(resultOfOne);
})
two.addEventListener("click", function (event) {
    let resultOfTwo = event.target.innerText;

    return display.append(resultOfTwo);
})
three.addEventListener("click", function (event) {
    let resultOfThree = event.target.innerText;

    return display.append(resultOfThree);
})
six.addEventListener("click", function (event) {
    let resultOfSix = event.target.innerText;

    return display.append(resultOfSix);
})
five.addEventListener("click", function (event) {
    let resultOfFive = event.target.innerText;
    return display.append(resultOfFive);
})
four.addEventListener("click", function (event) {
    let resultOfFour = event.target.innerText;
    return display.append(resultOfFour);
})
nine.addEventListener("click", function (event) {
    let resultOfNine = event.target.innerText;
    return display.append(resultOfNine);
})
eight.addEventListener("click", function (event) {
    let resultOfEight = event.target.innerText;
    return display.append(resultOfEight);
})
seven.addEventListener("click", function (event) {
    let resultOfSeven = event.target.innerText;
    return display.append(resultOfSeven);
})
clear.addEventListener("click", function () {
    return display.innerText = "";
}
)
del.addEventListener("click", function () {
    let val = display.innerText.split('');
    // console.log(val);
    val.pop();
    let r = val.join('');
    // console.log(r);
    return display.innerText = r;
})
addition.addEventListener('click', function (event) {
    first = display.innerText;
    display.innerText = '';
    selectdOp = event.target.innerText;
    display.innerText = '';
})
multiplication.addEventListener('click', function (event) {
    first = display.innerText;
    display.innerText = '';
    selectdOp = event.target.innerText;
    display.innerText = '';
})
division.addEventListener('click', function (event) {
    first = display.innerText;
    display.innerText = '';
    selectdOp = event.target.innerText;
    display.innerText = '';
})

substraction.addEventListener('click', function (event) {
    first = display.innerText;
    display.innerText = '';
    selectdOp = event.target.innerText;
    display.innerText = '';
})
equal.addEventListener('click', function () {
    let second = display.innerText;
    display.innerText = '';
    result = calculate(first, selectdOp, second);
    console.log(result);
    return display.append(result);
})





