function countOfElements(string) {
    let chartsOfArray = string.split('');
    let result = chartsOfArray.reduce((acc, value) => {
        const obj = acc;
        obj[value] = (obj[value] || 0) + 1;
        return obj;
    },{})
    for (let key in result) {
        if (result.hasOwnProperty(key)) {
            console.log(key, result[key]);
        }  
    }
}
module.exports = countOfElements;