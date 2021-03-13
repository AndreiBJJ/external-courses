function copyObj(obj) {
  
    if (!obj) {
        return obj;
    }

    let deepCopyOfObj;

    if (Array.isArray(obj)) {
        deepCopyOfObj = [];
    } else {
        deepCopyOfObj = {};
    }
  
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