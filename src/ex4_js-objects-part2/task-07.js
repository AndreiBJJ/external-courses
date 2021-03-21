function replacePartOfString(string , numberValue) {
    let newString = '';
    if (string.length > numberValue) {
        
        newString = string.slice(0, numberValue - 1) + '…';
    }
    return newString;
}
module.exports = replacePartOfString;