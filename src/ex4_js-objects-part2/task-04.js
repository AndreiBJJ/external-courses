function firstUpperChar(string) {
    let newString = `${string[0].toUpperCase()}${string.slice(1)}`;
    return newString;
}
module.exports = firstUpperChar;