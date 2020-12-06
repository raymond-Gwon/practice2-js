// 함수 선언
function doSomething() {
    console.log('hello');
}

// 2. 값을 리턴하는 함수
function add(a, b) {
    const sum = a + b;
    return sum;
}

// 4. 함수를 인자로 전달
function doSum(add) {
    console.log(add);
    const result = add(2,3);
    console.log(result);
}



// 함수 호출
doSomething();

const result = add(1, 2);
console.log(result);

doSum(add);