'use strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];




// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);




console.clear()

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// 1) forEach + Arrow function
fruits.forEach((fruit) => console.log(fruit));

// 2) 원형의 모습
// fruits.forEach(function(value, index, array) {
//     console.log(value, index, array);
// })

// 3) value값만 호출 할 때
// fruits.forEach(function(value) {
//     console.log(value);
// })




// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('peach', 'orange');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('peach', 'orange');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('peach', 'orange', 'mango');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'grape', 'melon');
console.log(fruits);
fruits.splice(1);
console.log(fruits);

// combine two arrays
const fruits2 = ['lemon', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);




//console.clear();

// 5. Searching
// indexOf: find the index
console.log(newFruits);
console.log(newFruits.indexOf('apple'));
console.log(newFruits.indexOf('banana'));

// includes
console.log(newFruits.includes('coconut'));
console.log(newFruits.includes('banana'));

// lastIndexOf
newFruits.push('apple');
console.log(newFruits);
console.log(newFruits.indexOf('apple'));
console.log(newFruits.lastIndexOf('apple'));