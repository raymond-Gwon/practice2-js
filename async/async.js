// async & await
// clear style of using promise

// 1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs....
        resolve('ellie');
    });
}

const user = fetchUser();
user.then(console)
console.log(user);

// -----------------------------------------
async function fetchUser() {
    // do network request in 10 secs....
    return 'ellie';
}

const user2 = fetchUser();
user2.then(console.log)
console.log(user2);




// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    //throw 'error';          // error 발생
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}



function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

pickFruits().then(console.log);

// 좀 더 나은 방법
async function pickFruits2() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits2().then(console.log);



// 병렬처리 방식1
async function pickFruits3() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits3().then(console.log);




// 3. useful Promise APIs 
// Promise.all :: 좀 더 나은 병렬처리방식
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => 
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

// Promise.race :: 가장 빨리 완료되는 결과만 출력
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);