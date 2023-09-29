function spinWords(string){
  let wordsSpin = string;
  
  function reverseWord (word) {
    let wordReverse = ''
    for(let i = word.length -1; i >= 0; i--) {
      wordReverse += word[i];
    }
    return wordReverse
  }
  
  let singleWord = ''
  
  for (let i = 0; i < string.length; i++) {
    if(string[i] !== ' ' && i < string.length -1) {
      singleWord += string[i]
    } else {
      if(i == string.length -1)singleWord += string[i]
      if(singleWord.length >= 5) {
        wordsSpin = wordsSpin.replace(singleWord, reverseWord(singleWord))
      }
      singleWord = ''
    }
    
  }
  
  
  return wordsSpin
}
