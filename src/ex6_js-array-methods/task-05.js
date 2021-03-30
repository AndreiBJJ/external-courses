function likeMap (array, callback) {
    let newArray = [];
    array.forEach( (item, index, array) => {
        newArray.push(callback(item, index, array));
    });
    return newArray;
}
module.exports = likeMap;