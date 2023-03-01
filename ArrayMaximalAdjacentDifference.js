function solution(inputArray) {
    let maxDiff = 0;
    
    for(let i = 1; i <  inputArray.length; i++) {
        if(inputArray[i] - inputArray[i -1] > maxDiff) {
            maxDiff = inputArray[i] - inputArray[i -1];
        } else if( inputArray[i -1] - inputArray[i]  > maxDiff) {
            maxDiff = inputArray[i -1] - inputArray[i];
        }
    }
    
    return maxDiff;
}
