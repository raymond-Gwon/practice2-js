// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value




// 1. Function declaration :: Function을 정의하는 방법
// function name(param1, param2) { body ... return; }
// :: 함수이름 (파라미터1, 입력받을내용2) { 구성요소 ... return;}
// one function === one thing :: 하나의 함수는 하나의 기능만 하도록
// naming: doSomething, command, verb :: function의 이름은 동사형태가 좋다.
// ex) createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);




// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ray = { name: 'ray' };
console.log(ray);
changeName(ray);
console.log(ray);




// 3. Default parameters (added in ES6)
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

function showMessage2(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!');




// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coing', 'ellie');




// 5. Local scope :: 안에서는 밖을 볼 수 있지만, 밖에선 안을 볼 수 없다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'olla';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();




// 6. Return a value
function sum(a,b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);




// 7. Early return, early exit
// bad-case
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good-case
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}




// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function :: 이름없이 기능만 할당하는 함수
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));




// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
};

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};
// 위 함수를 아래 함수처럼 단축 가능
const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function olla() {
    console.log('IIFE');
})();




// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder


function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;  
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add',2,3));