// 1. Use strict :: 선언하지 않은 데이터는 사용하지 못한다.
// added in ES 5
// use this for Vanila Javascript.
'use strict';




// 2. Variable :: 아랫줄에서 변경이 가능한 데이터 자료
// let (added in ES6)
// only use let if variable needs to change.
let globalName = 'global name';
{
    let name = 'ray';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) :: 선언 위치에 상관 없이 위로 가져와 선언한다.
// has no block scope :: 블럭이 안먹힌다.
{
age = 4;
var age;
}
console.log(age);




// 3. Constant :: 수정 할 수 없는(고정적인) 데이터 자료
// use const whenever possible.
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;




// 4. Variable types
// primitive type
//  - single item
//      : number, string, boolean, null, undefined, symbol
// object type
//  - box container
// function
//  - first-class function

const count = 17; // integar
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric value: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) :: 아직까진 크롬이랑 사파이에서만 인식
const bigInt = 1234567890123456789012345678901234567890n; // over (-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // let x = undefined :: 동일
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const raymond = {nameTag: 'raymond', age: 20};
console.log(raymond)
raymond.age = 28;
console.log(raymond)




// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
