// 구명보트

function solution(people, limit){
	var answer = 0
    people.sort((a,b) => b-a)
    let l = 0                   // 첫번째 수 (가장 큰 몸무게)의 위치
    let r = people.length-1     // 마지막 수 (가장 작은 몸무게)의 위치
    
    while(l<r){
    	var sum = people[l] + people[r]     // 첫번째와 마지막의 합
        if(sum>limit){
        	l++
        } else {
        	l++
            r--
        }
        answer++
    }
    if(l == r) answer++
    return answer
}