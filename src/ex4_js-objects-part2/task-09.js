function insertWordInString(string, word, number) {
    let stringArray = string.split(' ');
    stringArray.splice(number+1, 0, word);
    let resultString = stringArray.join(' ');
    return resultString;
}
module.exports = insertWordInString;