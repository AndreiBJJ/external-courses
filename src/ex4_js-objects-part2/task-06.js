function firstCharOfWordUpper(string) {
  let newString = '';
  
  for(let i = 0; i < string.length; i++) {
        
    if ((i === 0) || (string[i-1] === ' ')) {
      newString += string[i].toUpperCase();
            
    } else{
      newString += string[i]
    }
  }
  return newString;
}
module.exports = firstCharOfWordUpper;