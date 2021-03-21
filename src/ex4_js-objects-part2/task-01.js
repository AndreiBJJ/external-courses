function checkHasProperty(nameProperty, userObj) {
    let obj = userObj;
    const obj1 = {a: 1};
    obj.__proto__ = obj1;
    let result;

    for (let key in obj) {
     
        if (key === nameProperty) {
  
            if (!obj.hasOwnProperty(key)) {
                result = obj[key];
            }
        }  
    }
    return result;
}
module.exports = checkHasProperty;