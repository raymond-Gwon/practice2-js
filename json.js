// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),       JavaScript에만 있는 특별한 데이터도 json에 포함되지 않는다.
    // 함수는 json에 포함되지 않는다. :: object에 있는 데이터가 아니기 때문
    jump: () => {               
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']); // 좀 더 통제된 데이터를 다루고자 할 때(callback함수 사용)
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);

// key값이 name이라면 'ellie'라고 출력하고 나머지 key값은 원본 데이터를 출력한다.
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);



console.clear()



// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump();
// jump함수는 stringify되지 않았기 때문에 parse 되지않는다. :: 출력시 error 발생

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

// JSON에 stringify된 데이터를 가공해서 출력하고 싶을때
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`); // 생략가능
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2.birthDate.getDate());