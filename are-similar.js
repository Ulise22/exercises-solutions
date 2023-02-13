function solution(a, b) {
    let swipeCount = 0;
    
    const swipeArray = (firstInd, ind, arrA, arrB) => {
        
        if(ind < arrA.length) {
            if(arrB[firstInd] == arrA[ind] && arrA[ind] !== arrB[ind]) {
                let auxVar = arrA[firstInd];
                arrA[firstInd] = arrA[ind];
                arrA[ind] = auxVar;
                swipeCount++;
                return;
            }
            
            swipeArray(firstInd, ind +1, arrA, arrB);
        } else {
            if(swipeCount <= 1) {
                swipeCount = 2;
            }
        }
        
    }

    for(let i = 0; i < b.length; i++) {
        if(a[i] !== b[i] && swipeCount < 2) {
            let auxArray = [...a];
            swipeArray(i, i +1, auxArray, b);
            a = [...auxArray];
        } 
        
    }
    
    if(swipeCount <= 1) {
        return true;
    } else {
        return false;
    }
}
