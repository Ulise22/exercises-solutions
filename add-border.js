function solution(picture) {
    let amountStr = picture[0].length +1;
    border = "";
    for(let i = 0; i <= amountStr; i++) {
        border += "*";
    }
    
    for(let i = 0; i < picture.length; i++) {
        let text = "*";
        let word = picture[i];
        for(let e = 0; e < word.length; e++){
            text += word[e];
        }
        
        text += "*";
        
        picture[i] = text;
    }
    
    picture.push(border);
    picture.unshift(border);
    
    return picture;
}
