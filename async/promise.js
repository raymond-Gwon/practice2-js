'use strict';

// Promise is a JavaScirpt object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');                   // 성공적일때
        reject(new Error('no network'));    // 에러 발생시
    }, 2000);
});




// 2. Consumers: then, catch, finally
promise //
    .then((value) => {      // 성공적일때
        console.log(value);
    })
    .catch(error => {       // 에러 발생시
        console.log(error);
    })
    .finally(() => {        // 성공여부에 상관없이 출력
        console.log('finally');
    });




// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num*2)
    .then(num => num*3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1), 1000);
        });
    })
    .then(num => console.log(num));





// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => egg`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried egg`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));

// 아래처럼 축약 가능
getHen().then(getEgg).then(cook).then(console.log);

// 또는 아래처럼 한줄씩 표현 가능
getHen() //
.then(getEgg)
.catch(error => {       // 중간중간 error발생시 대체값을 입력 할 수도 있다.
    return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log);    // 이 줄을 사용해서 오류의 발생위치를 쉽게 찾을 수 있다.