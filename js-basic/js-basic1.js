// 변수
// primitive type
// : number, string, boolean, null, undefined
let number = 2;
let number2 = number;

console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);
// number2만 갱신됨.


// object type
let obj = {
    name: 'ellie',
    age: 5,
};
let obj2 = obj;

console.log(obj.name);
console.log(obj2.name);

obj2.name = 'raymond';

console.log(obj.name);
console.log(obj2.name);
// obj 와 obj2 둘다 갱신됨.