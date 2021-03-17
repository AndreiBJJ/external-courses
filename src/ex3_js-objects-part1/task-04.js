function modifiedObject(property, obj) {
    if (!obj.hasOwnProperty(property)) {
        let userObject = obj;
        userObject[property] = 'new';
        return userObject;
    } 
    return obj;
}
module.exports = modifiedObject;