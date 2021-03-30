function likeReduce (array, callback, initialValue) {
    let result;
    let previousValue;
    if (initialValue !== undefined) {
      previousValue = initialValue;
      for (let i = 0; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
      }
    } else {
      previousValue = array[0];
      for (let i = 1 ; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
      }
    }
    result = previousValue;
    return result;
}
module.exports = likeReduce;