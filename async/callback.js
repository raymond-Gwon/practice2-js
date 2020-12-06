'use strict';

// Java Script is synchronous. :: JavaScript는 동기적이다. => 코드를 작성한 순서대로 차근차근 실행된다.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration :: var 변수 와 함수선언들이 코드의 가장 위로 올라가는 것 

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);



// --------------------------------------------
// hoisting이 일어난 후 코드의 모습

function printImmediately(print) {
    print();
}
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
printImmediately(() => console.log('hello'));
printWithDelay(()=> console.log('async callback'), 2000);
