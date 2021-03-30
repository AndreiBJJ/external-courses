function likeFilter (array, callback) {
    let newArray = [];
    array.forEach( (item, index, array) => {
      
      if (callback(item, index, array) === true) {
        newArray.push(item);
      }
    });
    return newArray;
}
module.exports = likeFilter;
