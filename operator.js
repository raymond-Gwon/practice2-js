// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(3 + 2);  // add :: 더하기
console.log(3 - 2);  // substract :: 빼기
console.log(3 / 2);  // divide :: 나누기
console.log(3 * 2);  // multiply :: 곱하기
console.log(5 % 2);  // remainder :: 나누고 나머지 값
console.log(2 ** 3); // exponentiation :: 제곱

// 3. Increment and decrement operators :: 데이터 업데이트 순서
let counter = 2;

const preIncrement = ++counter;
// 아래와 동일
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

const postIncrement = counter++;
// 아래와 동일
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)

const preDecrement = --counter;
// 아래와 동일
// counter = counter + 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)

const postDecrement = counter--;
// 아래와 동일
// postDecrement = counter;
// counter = counter + 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)

// 4. Assignment operators :: 변수 할당 축약하는 방법
let x = 3;
let y = 6;
x +=y; // x = x + y;
x -=y; // x = x - y;
x *=y; // x = x * y;
x /=y; // x = x / y;

// 5. Comparison operators :: 비교
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value :: 앞에서 부터 확인해서 처음 true가 나오면 나머지는 확인 안함
console.log(`or: ${value1 || value2 || check()}`);

// && (or), finds the first falsy value :: 앞에서 부터 확인해서 처음 false가 나오면 나머지는 확인 안함
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
    for (let i = 0; i<10; i++) {
        //wasting time
        console.log('시간 낭비 중')
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion :: 타입이 달라도 값이 같으면 같은 값
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion :: 타입이 다르면 다른 값
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ray1 = {name: 'ray'};
const ray2 = {name: 'ray'};
const ray3 = ray1;
console.log(ray1 == ray2);  // 데이터가 같아도 각각 다른 레퍼런스에 할당 되었기 때문에 같지 않다.
console.log(ray1 === ray2);
console.log(ray1 == ray3);
console.log(ray1 === ray3);

// equality - puzzler
console.log(0 == false);   //true
console.log(0 === false);  //false
console.log('' == false);  //true
console.log('' === false); //false
console.log(null == undefined);  //true
console.log(null === undefined); //false

// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
}   else if (name === 'coder') {
    console.log('You are amazing coder');
}   else {
    console.log('unknown');
}

// 9. Ternary operator : ? :: 간단하게 쓰는 조건문
// condition ? value1 : value2 ;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement :: case 조건문
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = '';
switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
}   while(i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0 ; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i-2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){   // 이 경우 시간복잡도 = O(n^2) 이다. 좋지않은 방법이다.
    for (let j = 0; j < 10; j++) {
        // console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i<11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`Q1. ${i}`);
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i<11; i++) {
    if(i>8) {
        break;
    }
    console.log(`Q2. ${i}`);
}