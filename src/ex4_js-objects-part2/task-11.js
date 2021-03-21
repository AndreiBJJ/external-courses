function countOfElements(string) {
    let chartsOfArray = string.split('');
    let result;
    result = chartsOfArray.reduce((acc , value) => {
        const obj = acc ;
        obj[value] = chartsOfArray.filter(element => element === value).length;
        return obj;
    },{})
    for (let key in result) {
       
        if (result.hasOwnProperty(key)){
            console.log(key, result[key]);
        }  
    }
}
module.exports = countOfElements;