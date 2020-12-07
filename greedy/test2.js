// 큰 수 만들기

function solution(number, k) {
    const stack = [];
    let answer = '';

    for (let i = 0; i<number.length; i++) {
        const cf = number[i];

        while(k>0 && stack[stack.length-1] < cf) {
            stack.pop();
            k--;
        }
        stack.push(cf);
    }

    stack.splice(stack.length-k, k);
    answer = stack.join("");
    return answer;
}