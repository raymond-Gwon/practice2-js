// Boolean

// false : 0, -0 , '', null, undefined, NaN
// true : -1, 'false', []

let num1;   // undefined
if (num1) {
    console.log('true!');
} else {
    console.log('false!');
}



// 연산자 && 사용
let num2 = 9;
if (num2) {
    console.log(num2);
}
// 위 아래 동일
num2 && console.log(num2);
