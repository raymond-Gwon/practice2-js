// 체육복

function solution(n, lost, reserve) {
    var answer = 0;
    var total = [];

    /// 전체 학생을 1로 세팅
    for(var i=0;i<n;i++){
        total.push(1);
    }
    console.log(total)

    /// 여벌의 옷이 있는 학생 +1씩
    for(var i=0;i<reserve.length;i++){
        total[reserve[i]-1]++;
    }
    console.log(total)

    // 잃어버린 학생 -1씩
    for(var i=0;i<lost.length;i++){
        total[lost[i]-1]--;    
    }
    console.log(total)

    // 도난 당한 사람 주변에 2개인 사람꺼 빌려주기
    for(var i=0;i<n;i++){
        if(total[i]==0){
            if(i>0 && total[i-1]>=2){
                total[i-1]-=1
                total[i]=1;
                answer++;
            }else if(i<=n&&total[i+1]>=2){
                total[i+1]-=1;
                total[i]=1;
                answer++;
            }
        }else{
            answer++;
        }
    }

    return answer;
}


// best solution
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}