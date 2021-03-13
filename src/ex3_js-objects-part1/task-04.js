function objectHasProperty(property, obj) {
    
    if (obj.hasOwnProperty(property) === false) {
        let userObject = obj;
        userObject[property] = 'new';
        return userObject;
    } 

    return obj;
}
module.exports = objectHasProperty;