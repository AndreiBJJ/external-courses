function likeEvery (array, callback) {
    let result;
    for (let i = 0; i < array.length; i++) {
        
        if ( callback(array[i], i, array) === true) {
            continue;
        } else {
            result = false;
            break;
        }
    }
    if (result !== false) {
        result = true;
    }
    return result;
}
module.exports = likeEvery;
