function copyObject(object) {
    let copyObject = {};
    Object.assign(copyObject, object);
    return copyObject;
}
module.exports = copyObject;
    