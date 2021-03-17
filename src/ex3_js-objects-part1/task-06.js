function copyObj(obj) { 
    if (!obj) {
        return obj;
    }
    let deepCopyOfObj = (Array.isArray(obj)) ? [] : {};
    for (let k in obj) {
        
        if (typeof obj[k] === "object") {
            deepCopyOfObj[k] = copyObj(obj[k]);
        } else {
            deepCopyOfObj[k] = obj[k];
        }
    }
    return deepCopyOfObj;
}
module.exports = copyObj;