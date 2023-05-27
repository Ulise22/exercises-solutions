function plusMinus(arr: number[]): void {
    let pos = 0;
    let neg = 0;
    let zeros = 0;
    
    for(let i = 0; i < arr.length; i++) {
        arr[i] > 0 ? pos++ : arr[i] < 0 ? neg++ : zeros++;
    }
    
    console.log((pos/arr.length).toFixed(6))
    console.log((neg/arr.length).toFixed(6))
    console.log((zeros/arr.length).toFixed(6))

}
