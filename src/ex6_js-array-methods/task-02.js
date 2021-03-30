function likeSome (array, callback) {
    let result;
    for (let i = 0; i < array.length; i++) {
        
        if ( callback(array[i], i, array) === true) {
            result = true;
            break;
        } else {
            continue;
        }
    }
    if (result !== true) {
        result = false;
    }
    return result;
}
module.exports = likeSome;


