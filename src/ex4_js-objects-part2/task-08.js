function stringToLowerCamelCase(string) {
  let newString = '';
  let returningString = '';
    
  for(let i = 0; i < string.length; i++) { 
    if (string[i-1] === ' ') {
      newString += string[i].toUpperCase();    
    } else{
      newString += string[i].toLowerCase();
    }
  }
  
  returningString = newString.replace(/\s+/g,'');
  return returningString;
}
module.exports = stringToLowerCamelCase;