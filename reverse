function solution(inputString) {
    const reverseString = (str, first, last) => {
        
        if(first < last) {
            let auxString = str[first];
            str[first] = str[last];
            str[last] = auxString;
            reverseString(str, first +1, last -1)
        }
    }
    
    let parIndex = [];
    
    for(let i = 0; i < inputString.length; i++) {
        
        if(inputString[i] == "(") {
            parIndex.push(i);
        } else if(inputString[i] == ")") {
            let str = [...inputString];
            reverseString(str, parIndex[parIndex.length -1] +1, i);
            inputString = [...str];
            parIndex.pop();
        }
    }
    
    let finalString = "";
    
    for(let i = 0; i < inputString.length; i++) {
        if(inputString[i] !== "(" && inputString[i] !== ")") {
            finalString += inputString[i];
        }
    }
    
    return finalString;
}
