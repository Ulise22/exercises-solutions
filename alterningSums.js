function solution(a) {
    let sumOfTeams = [0, 0];
    
    for(let i = 0; i < a.length; i++) {
        if(i % 2 == 0) {
            sumOfTeams[0] += a[i];
        } else {
            sumOfTeams[1] += a[i]
        }
    }
    
    return sumOfTeams;
}
