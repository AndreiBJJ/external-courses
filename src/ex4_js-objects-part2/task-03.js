function trimString(string) {
    if ((string[0] === ' ') && (string.slice(-1) === ' ')) {
        let trimString = string.substring(1, string.length-1);
        return trimString;  
    }
    return string; 
} 
module.exports = trimString;