// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };


// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie)

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob)

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);




// 2. Computed properties
// key should be always string
console.log(ellie.name); // 데이터 접근 방법1
console.log(ellie['name']); // 데이터 접근 방법2

ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 동적으로 key를 가져와야 할 때 사용 할 수 있다.
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');




// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('tom',30);
console.log(person4);
function makePerson(name,age) {
    return{
        name,   // key 와 value의 이름이 같다면 생략 할 수 있다.
        age,    // name: name,  -> name,
    };
}




// 4. Constructor Function
const dog1 = {name: 'prince', age: 2};
const dog2 = {name: 'cherry', age: 3};
const dog3 = {name: 'cheese', age: 4};
const dog4 = new Dog('choco',5);
console.log(dog4);

function Dog(name,age) {
    // this = {};   (생략)
    this.name = name;
    this.age = age;
    // return this; (생략)
}




// 5. in operator: property existence check (key in obj)
// property가 object 안에 있는지 확인하는 기능
console.log('name' in Dog);
console.log('color' in Dog);




// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {
    console.log(key)
}

// for (value of iterable)
const array = [1,2,4,5];
for (y of array) {
    console.log(y);
}




// 7. Fun cloning
const user = { name: 'ellie', age: '20'};
const user2 = user;

console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
user3.name = 'coder';
console.log(user3);

// Object.assign(dest, [obj1, obj2, obj3...])
const user4 = {};
Object.assign(user4, user);
user4.name = 'ray';
console.log(user4);

// another Object.assign
const user5 = Object.assign({}, user);
user5.name = 'raymond';
console.log(user5);
console.log(user);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const fruit3 = {color: 'black', size: 'small', shape: 'good'};

const mixed = Object.assign({},fruit1, fruit2, fruit3); // 후자가 전자의 value를 덮어 쓴다.
console.log(mixed);

const mixed2 = Object.assign({},fruit3, fruit2, fruit1);
console.log(mixed2);