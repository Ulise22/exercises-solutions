function solution(inputArray) {
    let maxNum = inputArray[0];
    let movesCount = 0;
    
    for(let i = 1; i < inputArray.length; i++){
        
        if(inputArray[i] <= maxNum) {
            movesCount += maxNum - inputArray[i] +1;
            inputArray[i] = maxNum +1;
        }
        maxNum = inputArray[i];
    }
    
    return movesCount;
}
