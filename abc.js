// 1. 완주하지 못한 선수

// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
//     for(let i = 0; i < participant.length + 1; i++) {
//         if (participant[i] !== completion[i]) {
//             return participant[i];
//         }
//     }
// }


// 2. 위장
// class Cloth {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
// };

// const clothes = [
//     new Cloth('yellow_hat', 'headgear'),
//     new Cloth('blue_sunglasses', 'eyewear'),
//     new Cloth('green_turban', 'headgear'),
// ];

// console.log(clothes);


function solution(clothes) {
    var answer = 1;
    var obj = {}            //중복되는 의상을 처리하기 위해 json 객체 사용
    clothes.forEach(function(element){
        if(obj[element[1]]>=1)    //중복되는 키 값이 존재할 때 +1
            obj[element[1]] +=1
        else                    //처음 등장하는 의상일 때 1로 초기화
            obj[element[1]] = 1
    })
    for(var x in obj)            //json 객체에 담긴 값으로 계산
        answer *= (obj[x]+1)
    return answer-1;
}
var clothes =[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]
console.log(solution(clothes))